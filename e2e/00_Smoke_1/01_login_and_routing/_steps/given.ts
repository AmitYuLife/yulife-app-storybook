
import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD, BUTTON_LOGIN } from "@ids";
export { authoriseFitkit, sendSteps, addCyclingData, sendMindfulnessData } from "@socket";
import * as when from "./when";
import { sendReduxEvent } from "@socket";
import { navigateViaText, navigation, tapText, wait } from "@navigation"
import { AUTH_1, CUSTOMER_1, CUSTOMER_2, CUSTOMER_4 } from "@data";
import { selectRegionIfVisible } from "_utils/navigation/login";
import { getLocalisedString as t } from "@i18n";
import {expect} from 'detox'

export const {
    loginOnly,
    logInAndGoToTab
} = navigation.login

export const enterInvalidCredentials = async (region = "United Kingdom"): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await selectRegionIfVisible(region)();
    await loginField.tap();
    await loginField.replaceText(CUSTOMER_2.data.email);
    await passwordField.tap();
    await passwordField.replaceText("wrongpass");
};

export const enterValidCredentials = (user = CUSTOMER_1, auth = AUTH_1, region = "United Kingdom") => async (): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await selectRegionIfVisible(region)();
    await loginField.tap();
    await loginField.replaceText(user.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
};

export const seenOnboardingScreens = async (): Promise<void> => {
    await sendReduxEvent({ type: "SET_SHOW_INTRO", payload: false });
    await sendReduxEvent({
        type: "SET_SHOW_SURGE_INTRO",
        payload: {
            visibility: false,
            activity: null,
            rate: 1,
        },
    })
}

export const loginToDailySteps = async (): Promise<void> => {
    await enterValidCredentials()();
    await when.tapOnLogin();
    await when.tapNext();
}

export const onLoginScreen = async () => {
    const welcomeLabel = element(by.text(t("Welcome!")));
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    const needHelp = t("Need help logging in?")

    await expect(element(by.text(needHelp))).toBeVisible()
    await expect(welcomeLabel).toBeVisible()
    await expect(loginField).toBeVisible()
    await expect(passwordField).toBeVisible()
}

export const enterPasswordIncorrectly = (attempts: number, region = "United Kingdom") => async () => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    const loginButton = element(by.id(BUTTON_LOGIN(false)));

    await selectRegionIfVisible(region)();
    await loginField.tap();
    await loginField.replaceText(CUSTOMER_4.data.email);
    await passwordField.tap();

    for (let i = 0; i <= attempts; i += 1) {
        await passwordField.tap();
        await passwordField.replaceText(`p_w_${i}`);
        await loginButton.tap();
        wait(4000)
    }
}

export const triggerAppUpdateState = async (): Promise<void> => {
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: "active" });
}

export { selectRegionIfVisible } from "_utils/navigation/login";