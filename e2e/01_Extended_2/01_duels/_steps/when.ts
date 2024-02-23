import { navigation } from "@utils"
import { loginOnly } from "_utils/navigation/login";
export { authoriseFitkit, sendSteps } from "@socket";
import * as ids from "@ids"

export const {
    scrollFromText,
    scrollFromID,
    swipeToText,
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID,
    completeOnboardingIntro,
    reloadOnly,
    wait,
    navigateViaText
} = navigation.common

export const {
    restartAndLoginToTab,
    loginAndCollectSignupBonus,
} = navigation.login


export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(ids.BODY_ITEM_TITLE(tabName)))
    await tab.tap()
}

export const restartToDuelsRequest = (customer:any, auth:any, fitkitAuth=true, waitTime: number) => async()=>{
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({ delete: true });
    await wait(waitTime)()
    await loginOnly(customer, auth, fitkitAuth)()
    await navigateViaText("Next")
}

export const searchForDuelOpponent = (user: string) => async () => {
    await typeViaID("SEARCH_INPUT", user)()
}
