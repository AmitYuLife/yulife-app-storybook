import { startWithoutLaunch } from "@navigation";
import { connectDataManager } from "../../dataManager";
import * as dataToInsert from "../_data";

beforeAll(() => connectDataManager(dataToInsert, { port: 5003 }));

export const start = startWithoutLaunch("ja-JP");
