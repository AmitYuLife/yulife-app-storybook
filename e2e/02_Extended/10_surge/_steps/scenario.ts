import { dataManager, DataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import * as surgeStubs from "../_data/index"
import * as data from "@data";



export const start = async () => {
    const surgeDataManager = new DataManager()
    surgeDataManager.connect(`http://localhost:5000/`, true);
    surgeDataManager.clearData()
    surgeDataManager.addData(surgeStubs as Record<string, IDatabaseItem>)
    surgeDataManager.addData(data as any)
    await device.terminateApp();
    await surgeDataManager.reseed();
    await device.launchApp({ delete: true, });
}
