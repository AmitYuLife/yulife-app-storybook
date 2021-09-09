type PathOr = <T>(obj: { [x: string]: any }, key: string | string[], defaultValue?: T, p?: number) => T | any;
export const pathOr: PathOr = (obj, key, def, p = 0) => {
  key = Array.isArray(key) ? key : key.split(".");
  while (obj && p < key.length) {
    obj = obj[key[p++]];
  }

  return obj === undefined || p < key.length ? def : obj;
};

// good for unpacking promises
export type Unpacked<T> = T extends Array<infer U>
  ? U
  : T extends (...args: any[]) => Promise<infer U>
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type Noop = () => void;
export const noop: Noop = () => void 0;
