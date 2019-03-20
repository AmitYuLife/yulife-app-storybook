import { BUTTON_INTRO_SCREEN, BUTTON_LOGIN } from "@ids";
import { sendSteps } from "@mock";
export { authoriseFitKit, sendSteps } from "@mock";

export const tapOnLogin = async (): Promise<void> => {
    const target = element(by.id(BUTTON_LOGIN));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const pressSkipOnHealth = async (): Promise<void> => {
    const target = element(by.text("skip"));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const pressNext5Times = async (): Promise<void> => {
    const next = element(by.text("next"));
    await waitFor(next).toExist().withTimeout(5000);
    await next.tap();

    for (let i = 1; i <= 5; i++) {
        const target = element(by.id(BUTTON_INTRO_SCREEN(i)));
        await waitFor(target).toExist().withTimeout(5000);
        await target.tap();
    }
};
