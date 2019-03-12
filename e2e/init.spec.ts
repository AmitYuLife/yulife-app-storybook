import { mockServer, startWalkingSteps } from "@mock";
const detoxInstance: Detox.Detox = require("detox"); // tslint:disable-line
const adapter = require("detox/runners/mocha/adapter"); // tslint:disable-line
const config = require("../package.json").detox; // tslint:disable-line

before(async () => {
    await detoxInstance.init(config);
    device.setURLBlacklist([".*3001"]); // prevent websocket from hanging
    await mockServer.startServer();
});

beforeEach(async function () { // tslint:disable-line
    await adapter.beforeEach(this);
});

afterEach(async function () { // tslint:disable-line
    await adapter.afterEach(this);
});

after(async () => {
    await mockServer.close();
    await detoxInstance.cleanup();
});
