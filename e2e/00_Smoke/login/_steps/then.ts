import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";

export const emailUnchanged = async (): Promise<void> => {
    const target = element(by.id(INPUT_LOGIN_EMAIL));
    await expect(target).toHaveValue("someone@yulife.com");
};

export const passwordUnchanged = async (): Promise<void> => {
    const target = element(by.id(INPUT_LOGIN_PASSWORD));
    await expect(target).toHaveValue("•••••••••");
};

export const loginButtonIsActive = async (): Promise<void> => {
    const target = element(by.id(BUTTON_LOGIN));
    await waitFor(target).toExist();
    await expect(target).toHaveLabel("enabled");
};

export const combinationErrorMessagePresent = async (): Promise<void> => {
    const target = element(by.label("Sorry this email and password combination does not exist."));
    await waitFor(target).toExist();
    await expect(target).toBeVisible();
};
