import { Server } from "socket.io";
import { MockedEvent } from "./events";

export class SocketServer {
  public io: Server;

  public startServer = (port = 3001) => {
    this.io = new Server(port);
    this.io.on("connect", (socket) => {
      socket.emit("WELCOME");
    });
    console.log(`Server started on port ${port}`); // tslint:disable-line
    return this.io;
  };

  public close = () => {
    this.io.close();
  };

  public emit = (event: MockedEvent) => {
    this.io.emit(event.name, event.payload);
    console.log(`Sending event... ${event.name}`, event.payload);
  };
}

export default new SocketServer();
