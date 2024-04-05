import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
    type,
    modelName,
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
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "osama@yulife.com",
        firstName: "Osama",
        lastName: "Rahman",
        dateOfBirth: moment().subtract(25, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_3 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "walter@yulife.com",
        firstName: "Walter",
        lastName: "White",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_4 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "jesse@yulife.com",
        firstName: "Jesse",
        lastName: "Pinkman",
        dateOfBirth: moment().subtract(26, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_31 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "leslie@pawnee.com",
        firstName: "Leslie",
        lastName: "Knope",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_34 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "robin@jl.com",
        firstName: "Tim",
        lastName: "Drake",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_36 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Harry",
        lastName: "Potter",
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_37 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Ron",
        lastName: "Weasley",
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_65 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Gordon",
        lastName: "Brown",
        dateOfBirth: moment().subtract(33, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_GHI = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Teddy",
        lastName: "Group",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_GHI_STARTED = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Paul",
        lastName: "Starter",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_94 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "robinaite@jl.com",
        firstName: "Timothy",
        lastName: "Drakeman",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_116_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Bali",
        lastName: "Mumba",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_117_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Ryan",
        lastName: "Hardie",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_118_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Michael",
        lastName: "Cooper",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_119_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dan",
        lastName: "Scarr",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_120_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Morgan",
        lastName: "Whittaker",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_121_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Finn",
        lastName: "Azaz",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_123_MPP = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Multi",
        lastName: "Prodz",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_124_MPP = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Multz",
        lastName: "Proddy",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_127_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Luke",
        lastName: "Cundle",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_128_WELLBEING_ELIGIBILITY = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Totes",
        lastName: "Eligible",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_129_WELLBEING_ELIGIBILITY = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Notquite",
        lastName: "Eligible",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_130_GHI_LEAVER = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Graham",
        lastName: "Carey",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_131_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Lewis",
        lastName: "Gibson",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_133_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Alfie",
        lastName: "Devine",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_134_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dyarko",
        lastName: "Gyabi",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_135_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Mustafa",
        lastName: "Bundu",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_136_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Ben",
        lastName: "Waine",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_137_GHI_REWARDS = {
    type,
    modelName,
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
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Big",
        lastName: "Daddy",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_139_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Frodo",
        lastName: "Baggins",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_140_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Bilbo",
        lastName: "Baggins",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;
