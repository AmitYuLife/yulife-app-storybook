import {
  INPUT_LOGIN_EMAIL,
  INPUT_LOGIN_PASSWORD,
  BUTTON_LOGIN,
  LOGIN_HERO_LOGIN_BUTTON,
  LOGIN_SCREEN_HEADER,
  LOGIN_WITH_PASSWORD,
} from "@ids";
import * as when from "./when";
import { authoriseFitkit, sendReduxEvent } from "@socket";
import { AUTH_7, CUSTOMER_7, CUSTOMER_1, CUSTOMER_2 } from "../../_data";
import { getLocalisedString as t } from "@i18n";
import { expect } from "detox";
import { selectRegionIfVisible, wait } from "../../_common/given";
import { dismissNewLooksModalIfVisible, skipHealthConnection } from "_utils/navigation/login";
import { navigateViaID, tapID, tapText } from "@utils";

export {
  authoriseFitkit,
  sendSteps,
  addCyclingData,
  sendMindfulnessData,
  sendReduxEvent,
} from "@socket";
export { logInAndGoToTab, selectRegionIfVisible } from "../../_common/given";

export { skipHealthConnection } from "_utils/navigation/login";

export const performLogin =
  (customer: any, auth: any, fitkitAuth?: boolean, region = "United Kingdom") =>
  async () => {
    await selectRegionIfVisible(region)();
    const loginButton = element(by.id(LOGIN_HERO_LOGIN_BUTTON));
    await loginButton.tap();
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    await waitFor(loginField).toBeVisible().withTimeout(30000);
    await loginField.tap();
    await loginField.replaceText(customer.data.email);
    await tapID(LOGIN_SCREEN_HEADER)();
    await navigateViaID(BUTTON_LOGIN(false));
    await tapText("PASS")();
    await tapID(LOGIN_WITH_PASSWORD)();
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
    await tapID(LOGIN_SCREEN_HEADER)();
    fitkitAuth && (await authoriseFitkit(fitkitAuth)());
    await navigateViaID(BUTTON_LOGIN(false));
    await dismissNewLooksModalIfVisible();
  };

export const enterValidCredentials =
  (user = CUSTOMER_7, auth = AUTH_7, region = "United Kingdom") =>
  async (): Promise<void> => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    await selectRegionIfVisible(region)();
    await loginField.tap();
    await loginField.replaceText(user.data.email);
    await passwordField.tap();
    await passwordField.replaceText(auth.data.password);
  };

export const seenOnboardingScreens = async (): Promise<void> => {
  await sendReduxEvent({ type: "SET_SHOW_INTRO", payload: false });
  await sendReduxEvent({
    type: "SET_SHOW_SURGE_INTRO",
    payload: {
      visibility: false,
      activity: null,
      rate: 1,
    },
  });
};

export const onLoginScreen = async () => {
  const welcomeLabel = element(by.text(t("Welcome!")));
  const loginField = element(by.id(INPUT_LOGIN_EMAIL));
  const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
  const needHelp = t("Need help logging in?");

  await expect(element(by.text(needHelp))).toBeVisible();
  await expect(welcomeLabel).toBeVisible();
  await expect(loginField).toBeVisible();
  await expect(passwordField).toBeVisible();
};

export const enterPasswordIncorrectly =
  (region = "United Kingdom") =>
  async () => {
    const loginField = element(by.id(INPUT_LOGIN_EMAIL));
    const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
    const loginButton = element(by.id(BUTTON_LOGIN(false)));

    await selectRegionIfVisible(region)();
    await loginField.tap();
    await loginField.replaceText(CUSTOMER_2.data.email);
    await passwordField.tap();
    await passwordField.tap();
    await passwordField.replaceText("wrongpasswordlol");
    await loginButton.tap();
    await wait(4000);
  };

export const triggerAppUpdateState = async (): Promise<void> => {
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
};
