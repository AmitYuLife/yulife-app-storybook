/**
 * NOTE: this record is actually caspio, but we're referencing it here
 * so that we can import it consistently in our tests
 */

import { DatabaseCollection } from "../types";

export const USER_1 = {
    collection: DatabaseCollection.users,
    data: {
        _id: "2700B0C5D58446C3ADC2B1C431890CA4",
        email: "vitaly+upload.006@yulife.com",
        password: "123qwe123"
    }
};
