import { dataManager } from "@yu-life/yulife-bdd-framework";
import { startWithoutLaunch } from "@navigation";
import * as dataToInsert from "../_data";

beforeAll(async () => {
    const API_URL = `http://localhost:5003/`;

    console.log("Adding data...", Object.values(dataToInsert).length);

    dataManager.addData(dataToInsert as any);
    await dataManager.connect(API_URL, true);
    await dataManager.resetData();
    await dataManager.reseed();
});

export const start = startWithoutLaunch("ja-JP")
