import * as express from "express";
import { Server } from "http";
import * as socketio from "socket.io";
import { MockedEvent } from "./events";

export class SocketServer {
    public io: socketio.Server;
    public server: Server;

    public startServer = (port = 3001) => {
        const app = express();
        this.server = app.listen(port);
        this.io = socketio(this.server);
        this.io.on("connection", (socket) => {
            console.log("Client connected..."); // tslint:disable-line
            socket.emit("WELCOME");
        });
        console.log(`Mock server started on port ${port}`) // tslint:disable-line
        return this.io;
    }

    public close = () => {
        this.server.close();
    }

    public emit = (event: MockedEvent) => {
        console.log("emitting..", event.name, event.payload);
        this.io.emit(event.name, event.payload);
    }

}

export default new SocketServer();
