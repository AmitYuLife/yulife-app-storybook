export interface SyncAction<Payload = any> {
  // tslint:disable-line
  type: string;
  payload?: Payload;
  meta?: Record<string, any>;
}

export interface AsyncAction extends SyncAction {
  // tslint:disable-next-line
  promise?: Promise<any>;
}
