import { records } from "@data";
import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";
import * as when from "./when";

export const enterInvalidCredentials = async (): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD));
    await loginField.tap();
    await loginField.replaceText("someone@yulife.com");
    await passwordField.tap();
    await passwordField.replaceText("wrongpass");
};

export const enterValidCredentials = (user?: any) => async (): Promise<void> => {
    const loginUser = user || records.USER_1;
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD));
    await loginField.tap();
    await loginField.replaceText(loginUser.data.email);
    await passwordField.tap();
    await passwordField.replaceText(loginUser.data.password);
};

export const loginAndGoToStepsScreen = () => async (): Promise<void> => {
    await when.authoriseFitKit();
    await enterValidCredentials()();
    await when.tapOnLogin();
    await when.collectOnboardingYucoin();
    await when.pressNext5Times();
    await when.authoriseFitKit();
    await when.sendSteps(1000)();
};

export const loginExistingUser = (user?: any) => async (): Promise<void> => {
    await when.authoriseFitKit();
    await enterValidCredentials(user)();
    await when.tapOnLogin();
    // Note you still have to go through the intro screens as it is a fresh install of the app
    await when.pressNext5Times();
    await when.authoriseFitKit();
    await when.sendSteps(1000)();
};
