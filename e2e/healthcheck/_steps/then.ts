import * as ids from "@ids";
import { navigation } from "@navigation";
import { screens } from "@appScreens";
import { getLocalisedString as t } from "@i18n";
import { expect, element, by } from "detox";
export const { textVisible, textNotVisible, idVisible, wait, multipleTextVisible, idNotVisible } =
  navigation.common;

export const { onDailySteps, onTodaysYucoin } = screens.dailySteps;

export const notOnLoginScreen = async (): Promise<void> => {
  const target = element(by.text(t("Welcome!")));
  await expect(target).not.toBeVisible();
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

export const connectionSetupScreenVisible = async () => {
  await idVisible(ids.BUTTON_CLOSE_HEADER("Connection setup"))();
  await idVisible(ids.CONNECTION_SETUP_TITLE)();
};

const HealthDataSyncModalDesc =
  "Looks like your health data isn’t syncing. Are you up to date on your permissions?";

export const healthDataSyncComponent = async () => {
  await idVisible(ids.WARNING_BANNER(HealthDataSyncModalDesc))();
  await idVisible(ids.INFO_PANEL_BUTTON)();
  await idVisible(ids.PCP_LIST_DESCRIPTION)();
};
