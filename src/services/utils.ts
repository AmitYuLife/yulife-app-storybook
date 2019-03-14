type PathOr = <T>(obj: { [x: string]: any }, key: string | string[], defaultValue?: T, p?: number) => T | any;
export const pathOr: PathOr = (obj, key, def, p) => {
    p = 0;
    key = Array.isArray(key) ? key : key.split(".");
    while (obj && p < key.length) {
        obj = obj[key[p++]];
    }
    return obj === undefined || p < key.length ? def : obj;
};

export function padNum(x: number, sliceIndex: number = -2) {
    return `0${x}`.slice(sliceIndex);
}

export function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getCurrentWorld(currentLevel: number) {
    return Math.floor((currentLevel - 1) / 50);
}

export function getQueryStringObject(fullUrl: string) {
    const urlArray = fullUrl.split("?");
    const url = urlArray[1] || urlArray[0];
    const properties = url.split("&");
    const result: any = {};

    for (const property of properties) {
        const pair = property.split("=");
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return result;
}
