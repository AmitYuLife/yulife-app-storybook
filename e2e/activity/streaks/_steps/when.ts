import { screens } from "@appScreens"
import { navigation } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";

export const {
    tapText,
    tapID,
    reloadAppToTab,
    navigateViaText,
    wait,
    dismissNotificationScreenIfVisible
} = navigation.common

export const {
    startChallenge,
    startChallengeFromQuests
} = screens.challenges

export const {
    goToYuScreenAndDismissIntro,
}= screens.yuscreen

export const {
    scrollFromID
} = navigation.scrolling