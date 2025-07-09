# Real-Time Chat App (Go + Angular)

A full-stack real-time chat application built with a Go WebSocket backend and an Angular frontend.

## Features

- Real-time messaging using WebSockets
- Modern, responsive chat UI
- Automatic assignment of a default username (“Anonymous”)
- Cross-device chat on the same local network

## Technologies

- **Backend:** Go, Gorilla WebSocket, UUID
- **Frontend:** Angular, TypeScript, HTML, CSS

## Getting Started

### Prerequisites

- [Go](https://go.dev/dl/) (v1.17+ recommended)
- [Node.js & npm](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli) (v17+)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/adi0224/realtime-chat.git
   cd realtime-chat
   ```

2. **Install Go dependencies:**
   ```sh
   go mod tidy
   ```

3. **Install Angular dependencies:**
   ```sh
   cd client
   npm install
   ```

## Running the Application

### 1. Start the Go WebSocket Server

From the project root:
```sh
go run main.go
```
The server will listen on `0.0.0.0:12345`.

### 2. Start the Angular Client

In a new terminal, from the `client` directory:
```sh
ng serve --host 0.0.0.0 --port 4200
```

### 3. Access the App

- On your main computer: [http://localhost:4200](http://localhost:4200)
- On other devices on the same network:  
  [http://YOUR_LOCAL_IP:4200](http://YOUR_LOCAL_IP:4200)  
  (Replace `YOUR_LOCAL_IP` with your computer’s local IP address, e.g., `192.168.1.50`)

## License

MIT 