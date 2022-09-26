import { screens } from "@appScreens"
import { navigation, expectIsVisibleViaText } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait
} = navigation.common

export const {
    dismissStreakIfVisible
} = navigation.login

export const {
    startChallenge,
} = screens.challenges

