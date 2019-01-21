import { INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";

export const enterInvalidCredentials = async (): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD));
    await loginField.tap();
    await loginField.typeText("someone@yulife.com");
    await passwordField.tap();
    await passwordField.typeText("wrongpass");
};
