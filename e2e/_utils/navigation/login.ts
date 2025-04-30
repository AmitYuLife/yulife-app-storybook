import {
  INPUT_LOGIN_EMAIL,
  INPUT_LOGIN_PASSWORD,
  BUTTON_LOGIN,
  NAV_BAR,
  BUTTON_CLOSE,
  BACK_BUTTON,
  BUTTON_BASE,
  SKIP_HEALTH_CONNECT_SCREEN_BUTTON,
} from "@ids";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  completeOnboardingIntro,
  navigateViaID,
  navigateViaText,
  tapID,
  textVisible,
  wait,
} from "./common";
import { authoriseFitkit } from "@socket";
import { tapText } from "@navigation";
import { getLocalisedString as t } from "@i18n";
import { expect } from "detox";

export const loginAsUser =
  (
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true,
    region = "United Kingdom",
    firstTime = true
  ) =>
  async () => {
    console.log("CUSTOMER ID: ", customer.data.customerId);
    await authoriseFitkit(fitkitAuth)();
    await selectRegionIfVisible(region)();
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await waitFor(loginField).toBeVisible().withTimeout(30000);
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false));

    if (firstTime) {
      await wait(3000)();
      await navigateViaID(BUTTON_BASE("SIGN_UP_REWARD_SCREEN"));
    }
    await skipHealthConnection();
    await dismissPLIModalIfVisible();
    await dismissNewLooksModalIfVisible();
    await dismissStreakIfVisible();
    await dismissCyclingScreenIfVisible();
  };

export const loginAsPLIUser =
  (customer: any, auth: any, fitkitAuth = true) =>
  async () => {
    console.log("CUSTOMER ID: ", customer.data.customerId);
    await authoriseFitkit(fitkitAuth)();
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false));
    await navigateViaText(t("Let's go")); // sign-up reward screen
    await skipHealthConnection();
    await dismissPLIModalIfVisible();
    await dismissNewLooksModalIfVisible();
    await tapText(t("Next"))();
    await tapText(t("Next"))();
    await tapText(t("Let's go"))();
  };

export const logInAndGoToTab =
  (
    tab: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu",
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true,
    region = "United Kingdom",
    firstTime = true
  ) =>
  async () => {
    await loginAsUser(customer, auth, fitkitAuth, region, firstTime)();
    await navigateViaID(NAV_BAR(tab));
  };

export const restartAndLoginToTab =
  (
    tab: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu",
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true
  ) =>
  async () => {
    await device.terminateApp();
    await device.launchApp({ delete: true });
    await loginAsUser(customer, auth, fitkitAuth)();
    await navigateViaID(NAV_BAR(tab));
  };

export const dismissPLIModalIfVisible = async () => {
  try {
    await expect(element(by.text(t("Personal Insurance")))).toBeVisible();
    await navigateViaID(BUTTON_CLOSE);
  } catch (e) {}
};

export const dismissNewLooksModalIfVisible = async () => {
  try {
    await expect(element(by.text(t("New looks!")))).toBeVisible();
    await expect(
      element(
        by.text(
          t(
            "It’s time for a Yumoji makeover. You can now customise your appearance based on your level in the Yuniverse, and even mix and match! Unlock new items every 50 levels, and upgrade your Yumoji."
          )
        )
      )
    ).toBeVisible();
    await navigateViaText(t("Awesome"));
  } catch (e) {}
};

export const dismissStreakIfVisible = async () => {
  try {
    await expect(element(by.text(t("Start your Streak")))).toBeVisible();
    await expect(element(by.text(t("Later")))).toBeVisible();
    await navigateViaText(t("Later"));
  } catch (e) {}
};

export const dismissCyclingScreenIfVisible = async () => {
  try {
    await textVisible("Get ready to ride!")();
    await tapText("Check it out")();
    await tapID(BACK_BUTTON)();
  } catch (e) {}
};

export const loginOnly =
  (customer: any, auth: any, fitkitAuth?: boolean, region = "United Kingdom") =>
  async () => {
    if (fitkitAuth) {
      await authoriseFitkit(fitkitAuth)();
    }
    await selectRegionIfVisible(region)();
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await navigateViaID(BUTTON_LOGIN(false));
    await dismissNewLooksModalIfVisible();
  };

export const loginAndCollectSignupBonus =
  (customer: any, auth: any, fitkitAuth?: boolean) => async () => {
    await loginOnly(customer, auth, fitkitAuth)();
    await navigateViaText(t("Let's go"));
  };

export const continueLogin = async () => {
  await navigateViaText(t("Let's go"));
  await dismissStreakIfVisible();
};

export const continueLoginAfterSignupBonus = async () => {
  await dismissStreakIfVisible();
};

export const loginToYuScreen =
  (skipIntro = true, customer: IDatabaseItem, auth: IDatabaseItem) =>
  async () => {
    await logInAndGoToTab("yu", customer, auth, true)();
    if (skipIntro === true) {
      await completeOnboardingIntro();
      await skipHealthConnection();
    }
  };

export const selectRegionIfVisible = (region: string) => async () => {
  try {
    await expect(element(by.text(t("Select your company location")))).toBeVisible();
    await tapText(region)();
  } catch (err) {}
};

export const skipHealthConnection = async () => {
  try {
    await navigateViaID(BUTTON_CLOSE, 2000);
  } catch (err) {}

  try {
    await navigateViaID(SKIP_HEALTH_CONNECT_SCREEN_BUTTON, 2000);
  } catch (err) {}
};

export const fullRestartAndLogin =
  (customer: IDatabaseItem, auth: IDatabaseItem, fitkitAuth = true, waitTime = 0) =>
  async () => {
    await wait(waitTime)();
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({ delete: true });
    await wait(waitTime)();
    await loginOnly(customer, auth, fitkitAuth)();
  };
