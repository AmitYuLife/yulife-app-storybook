const detoxInstance = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/mocha/adapter');
const addContext = require('mochawesome/addContext');

import * as path from "path";
import { socketServer } from "./_utils/socket";
import { getTestPath } from "./mocha.utils";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import * as data from "@data";

require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env.e2e"),
});

before(async () => {
  await socketServer.startServer();
  console.log("Adding data...", Object.values(data).length);
  dataManager.addData(data);
  await dataManager.connect(`http://localhost:5000/`, true);
  await dataManager.resetData();
  await dataManager.reseed();
  await detoxInstance.init(config);
});

beforeEach(async function () {
  await adapter.beforeEach(this);
});

afterEach(async function () {
  await adapter.afterEach(this);
  try {
    const [before, after] = getTestPath(this.currentTest, this.currentTest.state);
    addContext(this, before);
    addContext(this, after);
  } catch (e) {}
});


// comment out for detox debugging/dev
after(async () => {
  await detoxInstance.cleanup();
  await socketServer.close();
  await dataManager.resetData();
}); 
