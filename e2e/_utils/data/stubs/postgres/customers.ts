import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import * as moment from "moment";

export const CUSTOMER_1 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "dan@yulife.com",
        firstName: "Dan",
        lastName: "Greane",
        dateOfBirth: moment().subtract(28, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_2 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "osama@yulife.com",
        firstName: "Osama",
        lastName: "Rahman",
        dateOfBirth: moment().subtract(25, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_3 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "walter@yulife.com",
        firstName: "Walter",
        lastName: "White",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_4 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "jesse@yulife.com",
        firstName: "Jesse",
        lastName: "Pinkman",
        dateOfBirth: moment().subtract(26, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem
