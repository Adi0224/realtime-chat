import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
    public messages: Array<any> = [];
    public chatBox: string = "";
    public username: string = "Anonymous";
    private usernameSent: boolean = false;

    public constructor(private socket: SocketService) {}

    public ngOnInit() {
        this.socket.getEventListener().subscribe(event => {
            if(event.type == "open" && !this.usernameSent) {
                this.socket.send(this.username);
                this.usernameSent = true;
            }
            if(event.type == "message") {
                let data = event.data.content;
                if(event.data.sender) {
                    data = event.data.sender + ": " + data;
                }
                this.messages.push(data);
            }
            if(event.type == "close") {
                this.messages.push("The connection has been closed");
            }
            if(event.type == "open") {
                this.messages.push("The connection has been established");
            }
        });
    }

    public ngOnDestroy() {
        this.socket.close();
    }

    public send() {
        if(this.chatBox) {
            this.socket.send(this.chatBox);
            this.chatBox = "";
        }
    }

    public isSystemMessage(message: string) {
        return message.startsWith("/") ? "<strong>" + message.substring(1) + "</strong>" : message;
    }
}