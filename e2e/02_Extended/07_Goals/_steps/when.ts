import { navigateViaText, navigation } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";
import { loginOnly } from "_utils/navigation/login";


export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    completeOnboardingIntro,
    tapIDAtIndex
} = navigation.common

export const {
    scrollFromText,
    scrollFromID,
    swipeFromText,
    swipeToText,
    scrollUntilIdVisible
} = navigation.scrolling


export const restartAndLoginAnotherUser = (customer:any, auth:any, fitkitAuth=true) => async()=>{
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({ delete: true, });
    await loginOnly(customer, auth, fitkitAuth)()
    await dismissModalIfVissible()
}

export const dismissModalIfVissible = async () => {
    try {
        await navigateViaText("Next")
    } catch (e) {

    }
}