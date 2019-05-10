import { DatabaseCollection, IDatabaseRecord } from "../types";
import { generateRandomId } from "../utils";
import { USER_1 } from "./users";

export const LEADERBOARD_1 = {
    collection: DatabaseCollection.user_leaderboards,
    data: {
        _id: generateRandomId(),
        userId: USER_1.data._id,
        leaderboardId: "5374ABDAD26A41129FD1F4FC2563D2EA",
        name: "A A ABBEY ROOFING & BUILDING CONTRACTORS  LTD",
        days: 30,
        consent: true,
        creatorName: "company leaderboard",
        hasAccepted: true,
        primaryBusinessLeaderboard: true
    }
} as IDatabaseRecord;
