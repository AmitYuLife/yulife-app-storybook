import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

const type = "postgres"
const modelName = "customer"


export const CUSTOMER_1 = {
    type: "postgres",
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "saul@yulife.com",
        firstName: "Saul",
        lastName: "Goodman",
        dateOfBirth: moment().subtract(26, "years").toDate(),
        membershipType: "Group",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_6 = {
    type: "postgres",
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "kramer@yulife.com",
        firstName: "Cosmo",
        lastName: "Kramer",
        dateOfBirth: moment().subtract(43, "years").toDate(),
        membershipType: "Group",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_11 = {
    type: "postgres",
    modelName: "customer",
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
    modelName: "customer",
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
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "frank@yulife.com",
        firstName: "Frank",
        lastName: "Costanza",
        dateOfBirth: moment().subtract(70, "years").toDate(),
        membershipType: "Group",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_14 = {
    type: "postgres",
    modelName: "customer",
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
    modelName: "customer",
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

export const CUSTOMER_15 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "luigi@yulife.com",
        firstName: "Luigi",
        lastName: "Segale",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_16 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "stanley@dundermifflin.com",
        firstName: "Stanley",
        lastName: "Hudson",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_17 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "ryan@dundermifflin.com",
        firstName: "Ryan",
        lastName: "Howard",
        dateOfBirth: moment().subtract(27, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_18 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "michael@dundermifflin.com",
        firstName: "Michael",
        lastName: "Scott",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_19 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "angela@dundermifflin.com",
        firstName: "Angela",
        lastName: "Martin",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded",
        fullName: "Angela Martin"
    }
} as IDatabaseItem

export const CUSTOMER_20 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "oscar@dundermifflin.com",
        firstName: "Oscar",
        lastName: "Martinez",
        dateOfBirth: moment().subtract(42, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded",
    }
} as IDatabaseItem

export const CUSTOMER_21 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "dwight@dundermifflin.com",
        firstName: "Dwight",
        lastName: "Schrute",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        membershipType: "Yulife",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_22 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "craig@yulife.com",
        firstName: "Craig",
        lastName: "David",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_23 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "mike@yulife.com",
        firstName: "Mike",
        lastName: "Skinner",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_ALPHA = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "alpha@yulife.com",
        firstName: "Al",
        lastName: "Pha",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        membershipType: "Yulife Alpha",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_24 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "aj@yulife.com",
        firstName: "AJ",
        lastName: "Tracey",
        dateOfBirth: moment().subtract(27, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

// feedback will always show for this user on login
export const CUSTOMER_25 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "majid@yulife.com",
        firstName: "Majid",
        lastName: "Jordan",
        dateOfBirth: moment().subtract(27, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_26 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "pam@dundermifflin.com",
        firstName: "Pam",
        lastName: "Beesly",
        dateOfBirth: moment().subtract(35, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_27 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "kevin@dundermifflin.com",
        firstName: "Kevin",
        lastName: "Malone",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_28 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "toby@dundermifflin.com",
        firstName: "Toby",
        lastName: "Flenderson",
        dateOfBirth: moment().subtract(38, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_29 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "andy@dundermifflin.com",
        firstName: "Andy",
        lastName: "Bernard",
        dateOfBirth: moment().subtract(32, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_30 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: "phyllis@dundermifflin.com",
        firstName: "Phyllis",
        lastName: "Vance",
        dateOfBirth: moment().subtract(50, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_31 = {
    type,
    modelName,
    data:{
        customerId: generateRandomMongoId(),
        email: "leslie@pawnee.com",
        firstName: "Leslie",
        lastName: "Knope",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Wellbeing Access",
        status: "onboarded"
    } 
} as IDatabaseItem

export const CUSTOMER_32 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "supes@jl.com",
        firstName: "Clark",
        lastName: "Kent",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Group",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_33 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "batman@jl.com",
        firstName: "Bruce",
        lastName: "Wayne",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Group",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_34 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "robin@jl.com",
        firstName: "Tim",
        lastName: "Drake",
        dateOfBirth: moment().subtract(40, "years").toDate(),
        membershipType: "Group",
        status: "onboarded"
    }
} as IDatabaseItem

export const CUSTOMER_35 = {
    type,
    modelName,
    data:{
        customerId: generateRandomMongoId(),
        email: "barry@jl.com",
        firstName: "Barry",
        lastName: "Allen",
        dateOfBirth: moment().subtract(28, "years").toDate(),
        membershipType: "Group",
        status: "onboarded"
    }
} as IDatabaseItem