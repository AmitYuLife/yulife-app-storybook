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
        status: "onboarded",
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
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_48 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Josh",
        lastName: "Carrot",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_49 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Ollie",
        lastName: "Candel",
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
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_51 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Gabie",
        lastName: "Cook",
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
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_90 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Razer",
        lastName: "Jett",
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
        status: "onboarded",
    },
} as IDatabaseItem;
