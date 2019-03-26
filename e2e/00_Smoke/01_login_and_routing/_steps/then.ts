import {
    BUTTON_LOGIN,
    DAILY_STEPS_SCREEN,
    INPUT_LOGIN_EMAIL,
    INPUT_LOGIN_PASSWORD,
    MENU_ITEM,
    MENU_SCREEN,
    QUESTS_SCREEN,
    REWARDS_SCREEN,
    TAB_BUTTON,
    VIEW_CONFETTI_COIN,
    VIEW_TOP_RIGHT_COIN_COUNTER
} from "@ids";
import { expectIsVisibleViaID, expectIsVisibleViaText } from "@navigation";

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

export const isOnLoginScreen = async (): Promise<void> => {
    const target = element(by.label("welcome!"));
    await waitFor(target).toExist();
    await expect(target).toBeVisible();
};

export const notOnLoginScreen = async (): Promise<void> => {
    const target = element(by.label("welcome!"));
    await expect(target).toBeNotVisible();
};

export const healthAppPromptVisible = async (): Promise<void> => {
    const target = element(by.label("connect to health app"));
    await waitFor(target).toExist();
    await expect(target).toBeVisible();
};

export const privacyLinkVisible = async (): Promise<void> => {
    const target = element(by.label("Privacy notice"));
    await waitFor(target).toExist();
    await expect(target).toBeVisible();
};

export const rewardScreenVisible = async (): Promise<void> => {
    const check1 = element(by.label("sign up reward"));
    await waitFor(check1).toExist();
    await expect(check1).toBeVisible();

    // TODO: check that image exists
};

export const given200coins = async (): Promise<void> => {
    const target = element(by.label("200"));
    await waitFor(target).toExist();
    await expect(target).toBeVisible();

    const target2 = element(by.id(VIEW_CONFETTI_COIN(200)));
    await waitFor(target2).toExist();
    await expect(target2).toBeVisible();

    const target3 = element(by.label("300"));
    await waitFor(target3).toNotExist();
    await expect(target3).toNotExist();
};

export const givenCoinsTopRight = (coins: number) => async (): Promise<void> => {
    await expectIsVisibleViaID(VIEW_TOP_RIGHT_COIN_COUNTER(coins));
};

export const stepsMeasured = (steps: number) => async (): Promise<void> => {
    await expectIsVisibleViaText(`${steps} steps`);
};

export const dailyStepsScreenVisible = async (): Promise<void> => {
    await expectIsVisibleViaID(DAILY_STEPS_SCREEN);
};

export const tabIsActive = (label: string) => async (): Promise<void> => {
    const target = await expectIsVisibleViaID(TAB_BUTTON(label));
    await expect(target).toHaveLabel("active");
};

export const tabIsInActive = (label: string) => async (): Promise<void> => {
    const target = await expectIsVisibleViaID(TAB_BUTTON(label));
    await expect(target).toHaveLabel("inactive");
};

export const worldIsVisible = (level: number) => async (): Promise<void> => {
    await expectIsVisibleViaID(QUESTS_SCREEN(level));
};

export const rewardsScreenVisible = async (): Promise<void> => {
    await expectIsVisibleViaID(REWARDS_SCREEN);
};

export const menuIsVisible = async (): Promise<void> => {
    await expectIsVisibleViaID(MENU_SCREEN);
    await expectIsVisibleViaID(MENU_ITEM("activity history"));
    await expectIsVisibleViaID(MENU_ITEM("member zone"));
    await expectIsVisibleViaID(MENU_ITEM("leaderboard"));
};
