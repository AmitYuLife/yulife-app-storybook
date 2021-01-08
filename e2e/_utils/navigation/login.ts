import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, BUTTON_LOGIN, NAV_BAR } from "@ids";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { navigateViaID, navigateViaText } from "./common";
import { authoriseFitkit } from "@socket";
import { CUSTOMER_1, AUTH_1 } from "@data";


export const loginAsUser = (
    customer = CUSTOMER_1,
    auth = AUTH_1 as IDatabaseItem,
    fitkitAuth = true,
) => async () => {
    await authoriseFitkit(fitkitAuth)()
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN)
    await navigateViaText("next") // sign-up reward screen
    await dismissStreakIfVisible()
    await navigateViaText("let’s begin", 2500)
    await completeIntro()
}

export const logInAndGoToTab = (tab?: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu", customer = CUSTOMER_1, auth = AUTH_1, fitkitAuth = true) => async () => {
    await loginAsUser(customer, auth, fitkitAuth)()
    await navigateViaID(NAV_BAR(tab))
}

export const restartAndLoginToTab = (tab?: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu", customer = CUSTOMER_1, auth = AUTH_1, fitkitAuth = true) => async () => {
    await device.terminateApp();
    await device.launchApp({ delete: true, });
    await loginAsUser(customer, auth, fitkitAuth)()
    await navigateViaID(NAV_BAR(tab))
}


export const completeIntro = async () => {
    for (var i = 0; i < 7; i++) {
        await navigateViaText("Got it")
    }
}

export const dismissStreakIfVisible = async () => {
    try {
        await expect(element(by.text("take a challenge"))).toBeVisible()
        await expect(element(by.text("later"))).toBeVisible()
        await navigateViaText("later")
    } catch (e) {

    }
}

export const loginOnly = (customer: any, auth: any, fitkitAuth?: boolean) => async () => {
    if (fitkitAuth) {
        await authoriseFitkit(fitkitAuth)()
    }
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN)
}

export const continueLogin = async () => {
    await navigateViaText("next")
    await dismissStreakIfVisible()
    await navigateViaText("let’s begin")
    await completeIntro()
}