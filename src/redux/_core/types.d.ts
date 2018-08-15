export interface SyncAction<Payload = any> { // tslint:disable-line
    type: string;
    payload?: Payload;
    meta?: {};
}

export interface AsyncAction extends SyncAction {
    // tslint:disable-next-line
    promise?: Promise<any>;
}