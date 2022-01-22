import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, PERSONAL_PRODUCT, FIB_SALARY_INPUT, navigateViaText } from "@utils"
import { loginOnly } from "_utils/navigation/login";
export { authoriseFitkit, sendSteps } from "@socket";



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
    wait
} = navigation.common

export const {
    restartAndLoginToTab,
    loginAndCollectSignupBonus,
} = navigation.login


export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(BODY_ITEM_TITLE(tabName)))
    await tab.tap()
}

export const restartToDuelsRequest = (customer:any, auth:any, fitkitAuth=true) => async()=>{
    await device.terminateApp();
    await device.launchApp({ delete: true, });
    await loginOnly(customer, auth, fitkitAuth)()
    await navigateViaText("Next")
}