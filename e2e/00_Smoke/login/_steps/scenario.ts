import { dataManager } from "@data";
import { reset } from "@navigation";

export const setup = async () => {
    await dataManager.reseed();
    await reset();
};
