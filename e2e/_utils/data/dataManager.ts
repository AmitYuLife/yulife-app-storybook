import * as request from "request-promise";
import * as stubs from "./stubs";
import { IDatabaseItem } from "./types";
import { hashPassword } from './utils';

export class DataManager {
    public baseUrl: string;

    public connect = async (baseUrl: string) => {
        this.log(`Connecting to ${baseUrl}`);
        this.baseUrl = baseUrl;
    }


    public seed = async () => {
        const values = Object.values(stubs);
        this.log(`Seeding ${values.length} records`);
        await this.insertRecords(values);
    }


    public reseed = async () => {
        const values = Object.values(stubs);
        this.log(`Re-Seeding ${values.length} records`);
        await this.resetData();
        await this.insertRecords(values);
    }


    public resetData = async () => {
        this.log(`Reseting test data`);
        await request.post(
            `${this.baseUrl}detox/clear`,
            {
                json: true,
            },
        )
    }


    public insertRecords = async (records: IDatabaseItem[]) => {
        this.log(`Inserting ${records.length} records`);
        return request.post(
            `${this.baseUrl}detox/addRecords`,
            {
                json: true,
                body: records.map(this.mapRecordToValue),
            },
        );
    }

    private log = async (...msg: string[]) => {
        console.log(...msg); // tslint:disable-line
    }

    private mapRecordToValue = (original: IDatabaseItem) => {
        const record = JSON.parse(JSON.stringify(original)) as IDatabaseItem;
        Object.keys(record.data).map(key => {
            if (typeof record.data[key] === "function") {
                record.data[key] = record.data[key]();
            }
            if (key === "password") {
                record.data[key] = hashPassword(record.data[key]);
            }
        });
        return record;
    }

}

export const dataManager = new DataManager();