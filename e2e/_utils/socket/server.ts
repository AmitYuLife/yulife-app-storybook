import { Server } from "socket.io";
import { MockedEvent } from "./events";

export class SocketServer {
  private USED_TRANSLATION_KEYS = new Set<string>();
  public io: Server;

  public startServer = (port = 3001) => {
    this.io = new Server(port);
    this.io.on("connect", (socket) => {
      socket.emit("WELCOME");
      socket.on("TRANSLATION_KEY_USED", (key) => {
        this.USED_TRANSLATION_KEYS.add(key);
      });
      socket.on("TRANSLATION_KEYS_CLEARED", () => {
        this.USED_TRANSLATION_KEYS.clear();
      });
    });

    console.log(`Server started on port ${port}`); // tslint:disable-line
    return this.io;
  };

  public getAndClearUsedTranslationKeys = () => {
    const keys = [...this.USED_TRANSLATION_KEYS];
    this.USED_TRANSLATION_KEYS.clear();
    return keys;
  };

  public close = () => {
    this.io.close();
  };

  public emit = (event: MockedEvent) => {
    this.io.emit(event.name, event.payload);
  };
}

export default new SocketServer();
