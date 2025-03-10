import * as ids from "@ids";
import {
  expectDoesNotExistViaText,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  textVisibleAtIndex,
} from "@navigation";
import { navigation } from "@navigation";
import { screens } from "@appScreens";
import { getLocalisedString as t } from "@i18n";
import { expect } from "detox";
import { CUSTOMER_1 } from "../../_data";
import { HealthDataSyncModalDesc } from "../_resources/const";
import { onPCPPage } from "usa/yuscreen_and_products_usa/_steps/then";

export const { textVisible, textNotVisible, idVisible, wait, multipleTextVisible, idNotVisible } =
  navigation.common;

export const { onDailySteps, onTodaysYucoin } = screens.dailySteps;

export const emailUnchanged = async (): Promise<void> => {
  const target = element(by.id(ids.INPUT_LOGIN_EMAIL));
  await expect(target).toBeVisible();
  await expect(target).toHaveText(CUSTOMER_1.data.email);
};

export const passwordHidden = async (): Promise<void> => {
  const target = element(by.id(ids.INPUT_LOGIN_PASSWORD("Password")));
  await expect(target).toBeVisible();
};

export const loginButtonIsActive = async (): Promise<void> => {
  await idVisible(ids.BUTTON_LOGIN(false))();
};

export const combinationErrorMessagePresent = async (): Promise<void> => {
  await wait(5000)();
  const target = element(by.label(t("Sorry this email and password combination does not exist.")));
  await waitFor(target).toExist();
  await expect(target).toBeVisible();
};

export const isOnLoginScreen = async (): Promise<void> => {
  const target = element(by.text(t("Welcome!")));
  await waitFor(target).toExist();
  await expect(target).toBeVisible();
};

export const notOnLoginScreen = async (): Promise<void> => {
  const target = element(by.text(t("Welcome!")));
  await expect(target).not.toBeVisible();
};

export const healthAppPromptVisible = async (): Promise<void> => {
  const target = element(by.label(t("Sync to Apple Health")));
  await waitFor(target).toExist();
  await expect(target).toBeVisible();
};

export const privacyLinkVisible = async (): Promise<void> => {
  const target = element(by.label(t("Privacy notice")));
  await waitFor(target).toExist();
  await expect(target).toBeVisible();
};

export const rewardScreenVisible = async (): Promise<void> => {
  const check1 = element(by.text(t("Here’s a sprinkle of\nYuCoin for logging in")));
  await waitFor(check1).toExist();
  await expect(check1).toBeVisible();
};

export const given200coins = async (): Promise<void> => {
  const target = element(by.label("200"));
  await waitFor(target).toExist();
  await expect(target).toBeVisible();

  const target2 = element(by.id(ids.VIEW_CONFETTI_COIN(200)));
  await waitFor(target2).toExist();
  await expect(target2).toBeVisible();

  const target3 = element(by.label("300"));
  await waitFor(target3).toNotExist();
  await expect(target3).toNotExist();
};

export const givenCoinsTopRight = (coins: number) => async (): Promise<void> => {
  await expectIsVisibleViaID(ids.VIEW_TOP_RIGHT_COIN_COUNTER(coins));
};

export const stepsMeasured = (steps: number) => async (): Promise<void> => {
  await expectIsVisibleViaText(t("%{quantity} steps", { quantity: steps }));
};

export const dailyStepsScreenVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.DAILY_STEPS_SCREEN);
};

export const tabIsActive = (label: string) => async (): Promise<void> => {
  const target = await expectIsVisibleViaID(ids.TAB_BUTTON(label));
  await expect(target).toHaveLabel(t("active"));
};

export const tabIsInActive = (label: string) => async (): Promise<void> => {
  const target = await expectIsVisibleViaID(ids.TAB_BUTTON(label));
  await expect(target).toHaveLabel(t("inactive"));
};

export const worldIsVisible = (level: number) => async (): Promise<void> => {
  await expectIsVisibleViaID(ids.QUESTS_SCREEN(level));
};

export const rewardsScreenVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.REWARDS_SCREEN);
};

export const activityHistoryScreenVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.ACTIVITY_HISTORY_SCREEN);
};

export const leaderboardsScreenVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.LEADERBOARD_SCREEN);
};

export const settingsScreenVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.SETTINGS_SCREEN);
};

export const menuIsVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.MENU_SCREEN);
  await expectIsVisibleViaID(ids.MENU_ITEM("activity history"));
  await expectIsVisibleViaID(ids.MENU_ITEM("leaderboard"));
};

export const challengeScreenIsVisible = async (): Promise<void> => {
  await expectIsVisibleViaID(ids.CHALLENGE_SCREEN);
};

export const unlockAtLevelVisible = (level: number) => async (): Promise<void> => {
  await expectIsVisibleViaText(`Unlock at level ${level}`);
};

export const challengeIsAvailable = (challenge: string) => async (): Promise<void> => {
  await expectIsVisibleViaText(challenge);
};

export const challengeIsUnavailable = (challenge: string) => async (): Promise<void> => {
  await expectDoesNotExistViaText(challenge);
};

export const welcomeModalVisible = async () => {
  await expectIsVisibleViaID(ids.WELCOME_MODAL("Welcome to the yuniverse"));
  await expectIsVisibleViaText(t("let’s begin"));
};

export const onPasswordHelp = async () => {
  await expect(element(by.id(ids.INPUT_RESET_PASSWORD))).toBeVisible();
  await expect(element(by.text(t("Need help?")))).toBeVisible();
};

export const dailyCoreActivities =
  (steps = 0, mindfulness = 0, stepsCoin = 0, mindfulCoin = 0) =>
  async () => {
    await expectIsVisibleViaText(
      t("%{currentValue} / %{maxValue} steps", { currentValue: steps, maxValue: 12000 })
    );
    await expectIsVisibleViaText(
      t(`%{currentValue} / %{maxValue} mindful mins`, { currentValue: mindfulness, maxValue: 30 })
    );
    await textVisible(`${stepsCoin}/120`, 2500)();
    await textVisible(`${mindfulCoin}/120`, 2500)();
  };

export const signupRewardVisible = async () => {
  const signupTitle = "Here’s a sprinkle of\nYuCoin for logging in";
  const signupCopy =
    "Earn more YuCoin in app and exchange them for vouchers from your favourite brands, donate to good causes, and more.";
  const signupCTA = "Let's go";

  await textVisible(signupTitle)();
  await textVisible(signupCopy)();
  await textVisible(signupCTA)();
};

export const greyConnectScreenVisible = async () => {
  const cta = "Yes, let's connect";
  const copy =
    "In order to reward you for your daily activity we will need to connect to Apple Health. Tap below to get started!";

  await textVisible(cta)();
  await textVisible(copy)();
};

export const connectionSetupScreenVisible = async () => {
  await idVisible(ids.BUTTON_CLOSE_HEADER("Connection setup"))();
  await idVisible(ids.CONNECTION_SETUP_TITLE)();
};

export const healthDataSyncComponent = async () => {
  await idVisible(ids.WARNING_BANNER(HealthDataSyncModalDesc))();
  await idVisible(ids.INFO_PANEL_BUTTON)();
  await idVisible(ids.PCP_LIST_DESCRIPTION)();
};
