import SocketClient from "@mockclient";

const client = new SocketClient();
const url = `http://localhost:3091`;
client.connect(url);
console.log(`Connected to detox socket client on ${url}`);

export default client;

export const DETOX_ENABLED = true;
