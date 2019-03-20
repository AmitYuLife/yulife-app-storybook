import axios from "axios";
import { Db, MongoClient } from "mongodb";
import * as stubs from "./records";
import { IDatabaseRecord } from "./types";

export class DataManager {
    private db: Db;
    private apiUrl: string;

    public connect = async (
        mongoUrl = "mongodb://localhost:27017/yulife-detox",
        apiUrl = "http://localhost:5000/"
    ) => {
        this.log(`Connecting to ${mongoUrl}`);
        const client = new MongoClient(mongoUrl);
        await client.connect();
        this.db = client.db();
        this.log(`Connected!`);
        this.apiUrl = apiUrl;
    }

    public reseed = async () => {
        this.log(`Clearing DB...`);
        await this.clearDb();

        this.log(`Triggering API seed...`);
        await axios.post(`${this.apiUrl}detox/seed`);

        const values = Object.values(stubs);
        this.log(`Adding ${values.length} records from detox stubs`);
        await this.insertRecords(values);
    }

    public clearDb = async () => {
        this.log(`Clearing DB collections`);
        const collections = await this.db.collections();
        const promises = collections.map((collection) => collection.drop());
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
                throw new Error(`Error inserting ${collection} (ID: ${data._id}: ${e})`);
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
