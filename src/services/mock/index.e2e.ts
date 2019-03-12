import SocketClient from "@mockclient";

const client = new SocketClient();
client.connect("http://localhost:3001/");

export default client; // singleton
