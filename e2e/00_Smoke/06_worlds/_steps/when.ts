import { screens } from "@appScreens"
import { navigation } from "@utils"
import { fitKitAddSampleQueries } from "@socket"
import moment = require("moment");
export { authoriseFitkit, sendSteps } from "@socket";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait
} = navigation.common

export const {
    completeIntro,
} = navigation.login

export const {
    startChallenge,
    startChallengeFromQuests
} = screens.challenges

export const sendMindfulnessData = (value = 60, startTime = 20, endTime = 60, ) => async () => {
    const record = [{
        startTime: moment().add(20, "seconds").toDate().toString(),
        endTime: moment().add(60, "seconds").toDate().toString(),
        value: value,
        type: "MindfulSession"
    }]
    await fitKitAddSampleQueries(record)
}