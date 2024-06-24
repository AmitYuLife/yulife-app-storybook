import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "dan@yulife.com",
        firstName: "Dan",
        lastName: "Greane",
        dateOfBirth: moment().subtract(28, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_2 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "osama@yulife.com",
        firstName: "Osama",
        lastName: "Rahman",
        dateOfBirth: moment().subtract(25, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_5 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "saul@yulife.com",
        firstName: "Saul",
        lastName: "Goodman",
        dateOfBirth: moment().subtract(26, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_6 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "gus@yulife.com",
        firstName: "Gustavo",
        lastName: "Fring",
        dateOfBirth: moment().subtract(48, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_7 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "skyler@yulife.com",
        firstName: "Skyler",
        lastName: "White",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_8 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "jerry@yulife.com",
        firstName: "Jerry",
        lastName: "Seinfeld",
        dateOfBirth: moment().subtract(48, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_15 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "luigi@yulife.com",
        firstName: "Luigi",
        lastName: "Segale",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_16 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "stanley@dundermifflin.com",
        firstName: "Stanley",
        lastName: "Hudson",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_17 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "ryan@dundermifflin.com",
        firstName: "Ryan",
        lastName: "Howard",
        dateOfBirth: moment().subtract(27, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_18 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "michael@dundermifflin.com",
        firstName: "Michael",
        lastName: "Scott",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_19 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "angela@dundermifflin.com",
        firstName: "Angela",
        lastName: "Martin",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_20 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "oscar@dundermifflin.com",
        firstName: "Oscar",
        lastName: "Martinez",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_21 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "dwight@dundermifflin.com",
        firstName: "Dwight",
        lastName: "Schrute",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        status: "onboarded",
        nickname:"DK"
    },
} as IDatabaseItem;

export const CUSTOMER_27 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "kevin@dundermifflin.com",
        firstName: "Kevin",
        lastName: "Malone",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_28 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "toby@dundermifflin.com",
        firstName: "Toby",
        lastName: "Flenderson",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_29 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "andy@dundermifflin.com",
        firstName: "Andy",
        lastName: "Bernard",
        dateOfBirth: moment().subtract(32, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_30 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "phyllis@dundermifflin.com",
        firstName: "Phyllis",
        lastName: "Vance",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_39 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Eugeniu",
        lastName: "Grosu",
        dateOfBirth: moment().subtract(29, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_40 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Emma",
        lastName: "Reitman",
        dateOfBirth: moment().subtract(29, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_42 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Boris",
        lastName: "Johnson",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_44 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Donald",
        lastName: "Trump",
        dateOfBirth: moment().subtract(65, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_45 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Richard",
        lastName: "Wurmbrand",
        dateOfBirth: moment().subtract(67, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_46 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "James",
        lastName: "Clear",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_PLI_2 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: moment().subtract(25, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_PLI_3 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "San",
        lastName: "Voe",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_PLI_5 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Elijah",
        lastName: "Musk",
        dateOfBirth: moment().subtract(35, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_1 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Harry",
        lastName: "Todd",
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_2 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Eugene",
        lastName: "Grosu",
        dateOfBirth: moment().subtract(29, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_47 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Gill",
        lastName: "Stock",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_50 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Lynton",
        lastName: "Stock",
        dateOfBirth: moment().subtract(45, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_PLI_7 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Pli",
        lastName: "RejectedAge",
        dateOfBirth: moment().subtract(17, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_PLI_9 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dental",
        lastName: "RejectedAge",
        dateOfBirth: moment().subtract(17, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_PLI_10 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "PLI",
        lastName: "RejectedCovid",
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_65 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Gordon",
        lastName: "Brown",
        dateOfBirth: moment().subtract(33, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_66 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Theresa",
        lastName: "May",
        dateOfBirth: moment().subtract(33, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_71 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Cersei",
        lastName: "Lannister",
        dateOfBirth: moment().subtract(33, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_73 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Tywin",
        lastName: "Lannister",
        dateOfBirth: moment().subtract(33, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_83 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Sloogy",
        lastName: "Dreamer",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_84 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Got",
        lastName: "Deleted_Duellers",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_85 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dental",
        lastName: "PolicyCancelled",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_89 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Mister",
        lastName: "Bright",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_RENEW_2 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Harry",
        lastName: "Todd",
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_130_GHI_LEAVER = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Graham",
        lastName: "Carey",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_137_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Brendan",
        lastName: "Galloway",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_138 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Lead",
        lastName: "Erboard",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_139 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Inac",
        lastName: "Tive",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;
