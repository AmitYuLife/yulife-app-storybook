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

export const CUSTOMER_5 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "saul@yulife.com",
        firstName: "Saul",
        lastName: "Goodman",
        dateOfBirth: moment().subtract(26, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_6 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "gus@yulife.com",
        firstName: "Gustavo",
        lastName: "Fring",
        dateOfBirth: moment().subtract(48, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_7 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "skyler@yulife.com",
        firstName: "Skyler",
        lastName: "White",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_8 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "jerry@yulife.com",
        firstName: "Jerry",
        lastName: "Seinfeld",
        dateOfBirth: moment().subtract(48, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_9 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "george@yulife.com",
        firstName: "George",
        lastName: "Costanza",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_10 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "kramer@yulife.com",
        firstName: "Cosmo",
        lastName: "Kramer",
        dateOfBirth: moment().subtract(43, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_11 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "Elaine@yulife.com",
        firstName: "Benes",
        lastName: "Elaine",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_12 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "newman@yulife.com",
        firstName: "Newman",
        lastName: "Knight",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_13 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "frank@yulife.com",
        firstName: "Frank",
        lastName: "Costanza",
        dateOfBirth: moment().subtract(70, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_14 = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "mario@yulife.com",
        firstName: "Mario",
        lastName: "Segale",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_ARCHIVED = {
    type: "postgres",
    modelName: "customer_detail",
    data: {
        customerId: generateRandomMongoId(),
        email: "archived@yulife.com",
        firstName: "Ar",
        lastName: "Chived",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
        archived: true
    }
} as IDatabaseItem