const detoxInstance = require("detox");

import * as path from "path";
import { socketServer } from "./_utils/socket";
import { dataManager } from "@yu-life/yulife-bdd-framework";
import * as dataUK from "@data";
import * as dataUS from "./04_USA/_data";
import * as dataSA from "./05_SA/_data";

require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env.e2e"),
});

const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

let dataToInsert;

switch (API_URL) {
  case "http://localhost:5000/":
    dataToInsert = dataUK;
    break;
  case "http://localhost:5001/":
    dataToInsert = dataUS;
    break;
  case "http://localhost:5002/":
    dataToInsert = dataSA;
    break;
  default:
    dataToInsert = dataUK;
    break;
}

beforeAll(async () => {
  await socketServer.startServer();
  console.log("Adding data...", Object.values(dataToInsert).length);
  dataManager.addData(dataToInsert as any);
  await dataManager.connect(API_URL, true);
  await dataManager.resetData();
  await dataManager.reseed();
});

// comment out for detox debugging/dev
afterAll(async () => {
  await detoxInstance.cleanup();
  await socketServer.close();
  await dataManager.resetData();
});
