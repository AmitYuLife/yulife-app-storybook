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

export const enterValidCredentials = async (): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD));
    await loginField.tap();
    await loginField.replaceText(records.USER_1.data.email);
    await passwordField.tap();
    await passwordField.replaceText(records.USER_1.data.password);
};

export const loginAndGoToStepsScreen = async (): Promise<void> => {
    await enterValidCredentials();
    await when.tapOnLogin();
    await when.authoriseFitKit();
    await when.pressNext5Times();
    await when.authoriseFitKit();
    await when.sendSteps(1000)();
};
