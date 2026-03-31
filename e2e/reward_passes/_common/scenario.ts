import * as navigation from "@navigation";
import { connectDataManager } from "../../dataManager";
import * as dataToInsert from "../_data";

export const { start } = navigation;

beforeAll(() => connectDataManager(dataToInsert));
