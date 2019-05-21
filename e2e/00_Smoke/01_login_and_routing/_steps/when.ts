import {
    BUTTON_CLOSE,
    BUTTON_INTRO_SCREEN,
    BUTTON_LOGIN,
    BUTTON_TOP_LEFT_BAR,
    MENU_ITEM,
    TAB_BUTTON
} from "@ids";
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

export const pressOnTab = (label: string) => async (): Promise<void> => {
    const target = element(by.id(TAB_BUTTON(label)));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const pressOnMenu = async (): Promise<void> => {
    const target = element(by.id(BUTTON_TOP_LEFT_BAR));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const pressOnActivityHistory = async (): Promise<void> => {
    const target = element(by.id(MENU_ITEM("activity history")));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const pressOnLeaderboards = async (): Promise<void> => {
    const target = element(by.id(MENU_ITEM("leaderboard")));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const pressOnSettings = async (): Promise<void> => {
    const target = element(by.id(MENU_ITEM("settings")));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};

export const closeCurrentScreen = async (): Promise<void> => {
    const target = element(by.id(BUTTON_CLOSE));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
};
