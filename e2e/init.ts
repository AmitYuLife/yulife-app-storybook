import * as path from "path";
import { socketServer } from "./_utils/socket";
import { dataManager } from "@yu-life/yulife-bdd-framework";

require("dotenv").config({
  path: path.resolve(__dirname, "..", ".env.e2e"),
});


beforeAll(async () => {
  await socketServer.startServer();
});

//comment out for detox debugging/dev
afterAll(async () => {
  await socketServer.close();
  await dataManager.resetData();
});
