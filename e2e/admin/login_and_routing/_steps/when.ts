import * as ids from "@ids";
export { sendSteps, authoriseFitkit } from "@socket";
import { navigation } from "@navigation";
import { screens } from "@appScreens";
import { getLocalisedString as t } from "@i18n";

export const {
  tapText,
  typeViaID,
  wait,
  reloadOnly,
  tapID,
  replaceTextViaID,
  terminateApp,
  relaunchAppWithoutSync,
} = navigation.common;

export const { swipeFromText, scrollUntilTextVisible } = navigation.scrolling;

export const { skipHealthConnection } = navigation.login;

export const { tapMenuItem } = screens.menu;

export { followEmailLink } from "../../emails/_steps/when";

export const tapOnLogin = async (): Promise<void> => {
  const target = element(by.id(ids.BUTTON_LOGIN(false)));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const pressSkipOnHealth = async (): Promise<void> => {
  const target = element(by.text(t("Skip this step")));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const collectOnboardingYucoin = async (): Promise<void> => {
  const next = element(by.text(t("Let's go")));
  await waitFor(next).toExist().withTimeout(5000);
  await next.tap();
};

export const pressNext5Times = async (): Promise<void> => {
  for (let i = 1; i <= 5; i++) {
    const target = element(by.id(ids.BUTTON_INTRO_SCREEN(i)));
    await waitFor(target).toExist().withTimeout(5000);
    await target.tap();
  }
};

export const pressOnTab = (label: string) => async (): Promise<void> => {
  const target = element(by.id(ids.TAB_BUTTON(label)));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const pressOnMenu = async (): Promise<void> => {
  const target = element(by.id(ids.BUTTON_TOP_LEFT_BAR));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const pressOnActivityHistory = async (): Promise<void> => {
  const target = element(by.id(ids.MENU_ITEM("activity history")));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const pressOnLeaderboards = async (): Promise<void> => {
  const target = element(by.id(ids.MENU_ITEM("leaderboards")));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const pressOnSettings = async (): Promise<void> => {
  const target = element(by.id(ids.MENU_ITEM("settings")));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const closeCurrentScreen = async (): Promise<void> => {
  const target = element(by.id(ids.BUTTON_CLOSE));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const pressOnLevel = (level: number) => async (): Promise<void> => {
  const target = element(by.id(ids.LEVEL_CHALLENGE_BUTTON(level)));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const clickBackToMap = async (): Promise<void> => {
  const target = element(by.id(ids.BUTTON_TOP_LEFT_BAR));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const clickOnGotIt = async (): Promise<void> => {
  const target = element(by.text(t("Got it")));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const clickOnBack = async (): Promise<void> => {
  const target = element(by.text(t("back")));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const tapLetsGo = async (): Promise<void> => {
  const target = element(by.text("Let's go"));
  await waitFor(target).toExist().withTimeout(5000);
  await target.tap();
};

export const navigateAppOnboardingFlow = async () => {
  await clickNewAccountCard();
  await wait(5000)();
  await clickWebFlowSubmitButton();
  await wait(5000)();
  await clickWebFlowSubmitButton();
  await wait(5000)();
  await clickThroughOnboardingConsentPage();
  await wait(5000)();
  await clickThroughMarkettingPreferences();
  await wait(5000)();
};

const clickNewAccountCard = async () => {
  const myWebView = web(by.id(ids.WEBVIEW));
  await myWebView.element(by.web.id("employee-signup-new-account-card")).tap();
};

const clickWebFlowSubmitButton = async () => {
  const myWebView = web(by.id(ids.WEBVIEW));
  const submitButton = myWebView.element(by.web.cssSelector('button[type="submit"]'));
  await submitButton.tap();
};

const clickThroughOnboardingConsentPage = async () => {
  const myWebView = web(by.id(ids.WEBVIEW));
  await myWebView.element(by.web.id("checkbox-privacy-notice-agreement")).tap();
  await wait(2000)();
  await element(by.id(ids.WEBVIEW)).swipe("up", "fast", 0.3);
  await wait(3000)();
  await myWebView.element(by.web.id("checkbox-end-user-license-agreement-eula")).tap();

  await wait(2000)();

  const continueButton = myWebView.element(by.web.cssSelector('button[role="primary"]'));

  await continueButton.tap();
};

const clickThroughMarkettingPreferences = async () => {
  const myWebView = web(by.id(ids.WEBVIEW));
  await element(by.id(ids.WEBVIEW)).swipe("down", "fast");
  await wait(4000)();
  const continueButton = myWebView.element(by.web.cssSelector('button[role="primary"]'));

  await continueButton.tap();
};
