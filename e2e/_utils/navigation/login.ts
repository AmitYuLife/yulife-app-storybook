import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, BUTTON_LOGIN, NAV_BAR, BUTTON_CLOSE } from "@ids";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { completeOnboardingIntro, navigateViaID, navigateViaText } from "./common";
import { authoriseFitkit } from "@socket";
import { CUSTOMER_1, AUTH_1, USER_32 } from "@data";
import { tapText, wait } from "@navigation";


export const loginAsUser = (
    customer = CUSTOMER_1,
    auth = AUTH_1 as IDatabaseItem,
    fitkitAuth = true,
    region = "United Kingdom"
) => async () => {
    console.log("CUSTOMER ID: ", customer.data.customerId)
    await authoriseFitkit(fitkitAuth)()
    await selectRegionIfVissible(region)();
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false))
    await navigateViaText("Next") // sign-up reward screen
    await dismissPLIModalIfVisible()
    await dismissNewLooksModalIfVisible()
    await dismissStreakIfVisible()
}

export const loginAsPLIUser = (
    customer: any,
    auth: any,
    fitkitAuth = true
) => async () => {
    console.log("CUSTOMER ID: ", customer.data.customerId)
    await authoriseFitkit(fitkitAuth)()
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false))
    await navigateViaText("Next") // sign-up reward screen
    await dismissPLIModalIfVisible()
    await dismissNewLooksModalIfVisible()
    await tapText("Next")()
    await tapText("Next")()
    await tapText("Let's go")()
}


export const logInAndGoToTab = (tab?: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu", customer = CUSTOMER_1, auth = AUTH_1, fitkitAuth = true, region = "United Kingdom") => async () => {
    await loginAsUser(customer, auth, fitkitAuth, region)()
    await navigateViaID(NAV_BAR(tab))
}

export const restartAndLoginToTab = (tab?: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu", customer = CUSTOMER_1, auth = AUTH_1, fitkitAuth = true) => async () => {
    await device.terminateApp();
    await device.launchApp({ delete: true, });
    await loginAsUser(customer, auth, fitkitAuth)()
    await navigateViaID(NAV_BAR(tab))
}

export const dismissPLIModalIfVisible = async () => {
    try {
        await expect(element(by.text("Personal Insurance"))).toBeVisible()
        await navigateViaID(BUTTON_CLOSE)
    } catch (e) {

    }
}

export const dismissNewLooksModalIfVisible = async () => {
    try {
        await expect(element(by.text("New looks!"))).toBeVisible()
        await expect(element(by.text("It’s time for a Yumoji makeover. You can now customise your appearance based on your level in the Yuniverse, and even mix and match! Unlock new items every 50 levels, and upgrade your Yumoji."))).toBeVisible()
        await navigateViaText("Awesome")
    } catch (e) {

    }
}

export const dismissStreakIfVisible = async () => {
    try {
        await expect(element(by.text("Start your Streak"))).toBeVisible()
        await expect(element(by.text("Later"))).toBeVisible()
        await navigateViaText("Later")
    } catch (e) {

    }
}

export const loginOnly = (customer: any, auth: any, fitkitAuth?: boolean, region = "United Kingdom") => async () => {
    if (fitkitAuth) {
        await authoriseFitkit(fitkitAuth)()
    }
    await selectRegionIfVissible(region)();
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false))
    await dismissNewLooksModalIfVisible()
}
export const loginAndCollectSignupBonus = (customer: any, auth: any, fitkitAuth?: boolean)=> async()=>{
    await loginOnly(customer, auth, fitkitAuth)()
    await navigateViaText("Next")
}
export const continueLogin = async () => {
    await navigateViaText("Next")
    await dismissStreakIfVisible()
}

export const continueLoginAfterSignupBonus = async()=>{
    await dismissStreakIfVisible()
}

export const loginToYuScreen = (skipIntro = true, customer = CUSTOMER_1, auth = AUTH_1) => async () => {
    await logInAndGoToTab("yu", customer, auth, true)()
    if (skipIntro === true) {
        await completeOnboardingIntro()
    }
}

export const selectRegionIfVissible = (region: string) => async () => {
    try {
        await expect(element(by.text("Select your company location"))).toBeVisible();
        await tapText(region)()
    } catch (e) {

    }
}