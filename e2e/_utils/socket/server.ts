import express from "express";
import socketio from "socket.io";
import { Server } from "http";
import { MockedEvent } from "./events";

export class SocketServer {
    public io: socketio.Server;
    public server: Server;

    public startServer = (port = 3001) => {
        const app = express();
        this.server = app.listen(port);
        this.io = socketio(this.server);
        this.io.on("connect", (socket) => {
            socket.emit("WELCOME");
        });
        console.log(`Server started on port ${port}`) // tslint:disable-line
        return this.io;
    }

    public close = () => {
        this.server.close();
    }

    public emit = (event: MockedEvent) => {
        this.io.emit(event.name, event.payload);
        console.log(`Sending event... ${event.name}`, event.payload)
    }

}

export default new SocketServer();
