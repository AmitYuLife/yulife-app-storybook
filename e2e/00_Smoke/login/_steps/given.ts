import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";
import { sendSteps } from "@mock";

export const enterInvalidCredentials = async (): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD));
    await loginField.tap();
    await loginField.replaceText("someone@yulife.com");
    await passwordField.tap();
    await passwordField.replaceText("wrongpass");
};
