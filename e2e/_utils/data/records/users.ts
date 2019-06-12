/**
 * NOTE: this record is actually caspio, but we're referencing it here
 * so that we can import it consistently in our tests
 */

import { DatabaseCollection } from "../types";

// USER_1 is a brand new user that has never logged into the app or taken any challenges
export const USER_1 = {
    collection: DatabaseCollection.users,
    data: {
        _id: "2700B0C5D58446C3ADC2B1C431890CA4",
        email: "vitaly+upload.006@yulife.com",
        password: "123qwe123"
    }
};

// USER_2 is a level 4 user who has sucessfully completed the onboarding challenge and 3
// short strolls but nothing in the current day. They do not have the streaks user toggle
export const USER_2 = {
    collection: DatabaseCollection.users,
    data: {
        _id: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        email: "emily+detox.002@yulife.com",
        password: "123qwe123"
    }
};

export const USER_3 = {
    collection: DatabaseCollection.users,
    data: {
        _id: "1300AA811A6148ABB70576DA4A1F65C4",
        email: "emily+detox.003@yulife.com",
        password: "123qwe123"
    }
};

export const USER_4 = {
    collection: DatabaseCollection.users,
    data: {
        _id: "089AC175BAF14B7F83848AB776E66703",
        email: "emily+detox.004@yulife.com",
        password: "123qwe123"
    }
};

export const USER_5 = {
    collection: DatabaseCollection.users,
    data: {
        _id: "BEB13068D2C54E41833B3B3E23B309E6",
        email: "emily+detox.005@yulife.com",
        password: "123qwe123"
    }
};
