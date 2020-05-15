export type PromiseFunc = () => Promise<any> | any;

export interface OnlyOrSkip {
    only?: boolean;
    skip?: boolean;
}
