export type PromiseFunc = () => Promise<any> | any;

export interface IOnlyOrSkip {
    only?: boolean;
    skip?: boolean;
}
