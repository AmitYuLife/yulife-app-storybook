export * from "./navigation";

export const log = (...msg: string[]) => {
    if (process.env.DEBUG) {
        console.log(...msg); // tslint:disable-line
    }
}
