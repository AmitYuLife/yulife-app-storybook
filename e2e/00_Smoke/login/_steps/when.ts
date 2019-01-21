import { BUTTON_LOGIN } from "@ids";

export const tapOnLogin = async (): Promise<void> => {
    const target = element(by.id(BUTTON_LOGIN));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};
