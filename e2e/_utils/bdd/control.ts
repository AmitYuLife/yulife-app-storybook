import { PromiseFunc } from "./types";

export const executeAll = async (functions: PromiseFunc[], i = 0) => {
    if (i >= functions.length) {
        return Promise.resolve();
    }
    await functions[i]();
    return executeAll(functions, i + 1);
}