import {
  INPUT_LOGIN_EMAIL,
  INPUT_LOGIN_PASSWORD,
  BUTTON_LOGIN,
  NAV_BAR,
  BUTTON_CLOSE,
  BACK_BUTTON,
  BUTTON_BASE,
  LOGIN_SCREEN_HEADER,
  LOGIN_WITH_PASSWORD,
  LOGIN_HERO_LOGIN_BUTTON,
  SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP,
} from "@ids";
import { dataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  completeOnboardingIntro,
  navigateViaID,
  navigateViaText,
  tapID,
  textVisible,
  wait,
} from "./common";
import { authoriseFitkit, EVENT, loginWithCredentials, socketServer } from "@socket";
import { tapText } from "@navigation";
import { getLocalisedString as t } from "@i18n";
import { expect } from "detox";
import axios from "axios";
import SocketClient from "_utils/socket/client";

/**
 * Skips the login / auth screen and places the app in a logged in state for speed
 * @param customer
 * @param auth
 * @param fitkitAuth
 * @param region
 * @param firstTime
 * @returns
 */
export const loginAsUser =
  (
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true,
    region: "UK" | "US" | "SA" | "JP" = "UK"
  ) =>
  async () => {
    // // wait for the app to load
    await waitFor(element(by.id(LOGIN_HERO_LOGIN_BUTTON)));

    await loginWithCredentials(customer.data.email, auth.data.password, region)();

    // wait for daily steps to load
    await waitFor(element(by.label("YuCoin")));

    if (fitkitAuth) {
      // wait for the daily steps container to initialise
      await wait(1_000)();

      // auth fitkit
      await authoriseFitkit(fitkitAuth)();
    }
  };

export const logInAndGoToTab =
  (
    tab: "yucoin" | "quests" | "leaderboard" | "rewards" | "yu",
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true,
    region: "UK" | "US" | "JP" | "SA" = "UK"
  ) =>
  async () => {
    await loginAsUser(customer, auth, fitkitAuth, region)();
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
    await navigateViaID(SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP, 2000);
  } catch (err) {}
};

export const fullRestartAndLogin =
  (
    customer: IDatabaseItem,
    auth: IDatabaseItem,
    fitkitAuth = true,
    region: "UK" | "US" | "JP" | "SA" = "UK"
  ) =>
  async () => {
    await device.terminateApp();
    await device.clearKeychain();
    await device.launchApp({ delete: true });
    await loginAsUser(customer, auth, fitkitAuth, region)();
  };
