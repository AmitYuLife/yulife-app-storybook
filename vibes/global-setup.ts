import * as path from "path";
import { connectDataManager } from "./dataManager";
import * as data from "./data";

require("dotenv").config({ path: path.resolve(__dirname, "..", ".env.e2e") });

export default async function globalSetup() {
  console.log("[vibes] Global setup — seeding test data...");
  await connectDataManager(data);
  console.log("[vibes] Global setup complete");
}
