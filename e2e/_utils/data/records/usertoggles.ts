import { DatabaseCollection } from "../types";
import { generateRandomId } from "../utils";

export const USER_2_TOGGLES = {
    collection: DatabaseCollection.usertoggles,
    data: {
        _id: generateRandomId(),
        updatedAt: "2019-05-03T15:25:43.542Z",
        createdAt: "2019-05-03T15:25:43.542Z",
        userId: "9826F33EEFFA48D49DFC30ADBD2F81C3",
        features: {
            disableUserEntries: true,
            showAdvancedLeaderboards: true,
            showCreateLeaderboard: true,
            showSettings: true,
            showBuildNumber: true,
            showCounter: true,
            showCompletedLevel: true,
            showStreaks: false,
            showNotifications: true,
            showTodayYucoin: true,
            showActivity: true
        }
    }
};
