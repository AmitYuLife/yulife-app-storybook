import { dataManager } from "@data";
import { restart } from "@navigation";

export const start = async () => {
    await dataManager.reseed();
    await restart();
};
