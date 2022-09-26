import { screens } from "@appScreens"
import { navigation } from "@utils"
import { fitKitAddSampleQueries } from "@socket"
import moment = require("moment");
export { authoriseFitkit, sendSteps, sendMindfulnessData } from "@socket";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait
} = navigation.common

export const {
    startChallenge,
    startChallengeFromQuests
} = screens.challenges


