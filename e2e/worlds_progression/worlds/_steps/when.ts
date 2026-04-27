import { screens } from "@appScreens"
import { navigation } from "@utils"
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
    startChallengeFromQuests,
    startMeditationChallengeFromQuests,
    tapChallengeSuccessCta,
} = screens.challenges


