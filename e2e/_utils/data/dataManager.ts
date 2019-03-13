import { Db, MongoClient } from "mongodb";
import * as stubs from "./records";
import { IDatabaseRecord } from "./types";

export class DataManager {
    private db: Db;

    public connect = async (mongoUrl = "mongodb://localhost:27017/yulife-detox") => {
        this.log(`Connecting to ${mongoUrl}`);
        const client = new MongoClient(mongoUrl);
        await client.connect();
        this.db = client.db();
        this.log(`Connected!`);
    }

    public seed = async () => {
        const values = (Object as any).values(stubs);
        this.log(`Seeding ${values.length} records`);
        await this.insertRecords(values);
    }

    public reseed = async () => {
        const values = Object.values(stubs);
        this.log(`Re-Seeding ${values.length} records`);
        await this.clearDb();
        await this.insertRecords(values);
    }

    public clearDb = async () => {
        this.log(`Clearing DB`);
        const promises = Object
            .values(stubs)
            .map((record) => this.db.collection(record.collection).deleteMany({}));
        await Promise.all(promises);
    }

    public deleteRecords = async (records: IDatabaseRecord[], throwOnError = true) => {
        this.log(`Deleting ${records.length} records`);
        const promises = records.map(async ({ collection, data }) => {
            try {
                await this.db.collection(collection).deleteOne({ _id: data._id });
            } catch (e) {
                if (throwOnError) {
                    throw new Error(`Error deleting ${collection} (ID: ${data._id}: ${e})`)
                } else {
                    return true;
                }
            }
        });
        return Promise.all(promises);
    }

    public insertRecords = async (records: IDatabaseRecord[]) => {
        this.log(`Inserting ${records.length} records`);
        const promises = records.map(async ({ collection, data }) => {
            try {
                await this.db.collection(collection).insertOne(data);
            } catch (e) {
                throw new Error(`Error inserting ${collection} (ID: ${data._id}: ${e})`)
            }
        });
        return Promise.all(promises);
    }

    private log = async (...msg: string[]) => {
        if (process.env.DEBUG) {
            console.log(...msg); // tslint:disable-line
        }
    }
}

export const dataManager = new DataManager();
