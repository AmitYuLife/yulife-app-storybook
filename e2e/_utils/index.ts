// export * from "./api";
export * from "./bdd";
export * from "./navigation";
// export * from "./socket";

export const log = (...msg: string[]) => {
    if (process.env.DEBUG) {
        console.log(...msg); // tslint:disable-line
    }
}
