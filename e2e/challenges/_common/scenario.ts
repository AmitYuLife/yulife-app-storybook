import { startWithoutLaunch } from "@navigation";
import { connectDataManager } from "../../dataManager";
import * as dataToInsert from "../_data";

beforeAll(() => connectDataManager(dataToInsert, { skipReseed: true }));

export const start = startWithoutLaunch();
