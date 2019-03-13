
export interface IDatabaseRecord {
    collection: DatabaseCollection;
    data: { _id: string } & object;
}

// add collection names here

export enum DatabaseCollection {
    auths = "auths",
    users = "users"
}

export type DatabaseRecordCollection = "auths" | "challenges" | "challengetemplates" | "coinledgers" | "rewards";
