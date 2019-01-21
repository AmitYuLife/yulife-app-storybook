
// import * as path from "path";
const detoxInstance: Detox.Detox = require("detox"); // tslint:disable-line
const adapter = require("detox/runners/mocha/adapter"); // tslint:disable-line
const config = require("../package.json").detox; // tslint:disable-line

// require("dotenv").config({
//     path: path.resolve("./", ".env.e2e"),
// });

before(async () => {
    await detoxInstance.init(config);
});

beforeEach(async function () { // tslint:disable-line
    await adapter.beforeEach(this);
});

afterEach(async function () { // tslint:disable-line
    await adapter.afterEach(this);
});

after(async () => {
    await detoxInstance.cleanup();
});
