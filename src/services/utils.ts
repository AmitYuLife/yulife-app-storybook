type PathOr = <T>(obj: { [x: string]: any }, key: string | string[], defaultValue?: T, p?: number) => T | any;
export const pathOr: PathOr = (obj, key, def, p) => {
    p = 0;
    key = Array.isArray(key) ? key : key.split(".");
    while (obj && p < key.length) {
        obj = obj[key[p++]];
    }
    return obj === undefined || p < key.length ? def : obj;
};

export function padNum(x: number) {
    return `0${x}`.slice(-2);
}

export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
