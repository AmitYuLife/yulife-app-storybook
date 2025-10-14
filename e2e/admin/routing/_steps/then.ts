import { screens } from "@appScreens";
import { navigation } from "@utils";
import { permissionSettings } from "../_resources/fixtures";
import * as ids from "@ids";
import { expect } from "detox";
import { translations } from "@app/locale/translations";
export { rewardsLocationModalVisible } from "benefits/rewards/_steps/then";

export const { onDailySteps, onTodaysYucoin } = screens.dailySteps;

export const { menuItemsVisible } = screens.menu;

export const { rewardVisible, specialRewardVisible, onSpecialRewardScreen, lockedRewardVisible } =
  screens.rewards;

export const {
  idVisible,
  textVisible,
  buttonVisible,
  multipleTextVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  booleanIdVisible,
  booleanTextVisible,
  textNotVisible,
  idVisibleAtIndex,
  idExist,
} = navigation.common;

export const { scrollFromText, scrollFromID } = navigation.scrolling;

export const { checkCopyNoLeaderboard } = screens.leaderboard;

export const statsCorrect = async () => {
  await expect(element(by.text("statistics"))).toBeVisible();
  const titles = [
    ids.STATS_TITLE("your YuCoin"),
    ids.STATS_TITLE("challenges"),
    ids.STATS_TITLE("steps"),
    ids.STATS_TITLE("mindfulness"),
    ids.STATS_TITLE("cycling"),
  ];
  const subtitles = [
    "total earned",
    "total redeemed",
    "total challenges completed",
    "challenge history",
    "average daily steps",
    "most steps in a day",
    "steps this week",
    "average mindful minutes per day",
    "mindful minutes on your best week",
    "mindful minutes this week",
    "average cycling distance per day",
    "cycling distance on your best week",
    "cycling distance this week",
    "see activity history",
  ];

  const maxAttempts = 35;

  for (const i of titles) {
    let currentAttempt = 0;
    let isTitleVisible = await booleanIdVisible(i);
    while (isTitleVisible === false && currentAttempt < maxAttempts) {
      await scrollFromID(ids.STATS_SCREEN, "up", "slow", 0.2)();
      isTitleVisible = await booleanIdVisible(i);
      currentAttempt += 1;
    }
    await expect(element(by.id(i))).toBeVisible();
  }

  await scrollFromID(ids.STATS_SCREEN, "down", "fast")();
  await scrollFromID(ids.STATS_SCREEN, "down", "fast")();

  for (const i of subtitles) {
    let currentAttempt = 0;
    let isSubTitleVisible = await booleanTextVisible(i);
    while (isSubTitleVisible === false && currentAttempt < maxAttempts) {
      await scrollFromID(ids.STATS_SCREEN, "up", "slow", 0.2)();
      isSubTitleVisible = await booleanTextVisible(i);

      currentAttempt += 1;
    }

    await expect(element(by.text(i))).toBeVisible();
  }
};

export const permissionsActivityRightVisible = async () => {
  await expect(element(by.text("Game settings"))).toBeVisible();
  await expect(element(by.text("Activity permissions"))).toBeVisible();
  await expect(
    element(by.text("Status and management of account and system level permissions."))
  ).toBeVisible();
};

export const onPermissionsPage = (status: string) => async () => {
  await expect(element(by.text("Permissions"))).toBeVisible();
  await expect(element(by.text("System Settings"))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.motionAndFitness.title))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.motionAndFitness.description))).toBeVisible();
  await expect(element(by.text("Apple Health Permissions"))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.stepsRead.title))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.stepsRead.description))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.mindfulnessRead.title))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.mindfulnessRead.description))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.cyclingRead.title))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.cyclingRead.description))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.workoutsRead.title))).toBeVisible();
  await expect(element(by.text(permissionSettings.ios.workoutsRead.description))).toBeVisible();
  await idVisibleAtIndex(ids.STATUS_ICON("authorised"), 0);
  await idVisibleAtIndex(ids.STATUS_ICON(status), 0);
  await idVisibleAtIndex(ids.STATUS_ICON(status), 1);
  await idVisibleAtIndex(ids.STATUS_ICON(status), 2);
  await idVisibleAtIndex(ids.STATUS_ICON(status), 3);

  if (status === "not_determined") {
    await expect(element(by.text("Apple Health"))).toBeVisible();
  } else if (status === "authorised") {
    await idVisibleAtIndex(ids.STATUS_ICON(status), 4);
    await expect(
      element(by.text(permissionSettings.ios.statusUnknown.unknownStatusText))
    ).not.toBeVisible();
  }
};

export const languageSettingVisible = (language: string) => async () => {
  await expect(element(by.text("Language"))).toBeVisible();
  await expect(element(by.text("Select your language"))).toBeVisible(45);
  await expect(element(by.text(language))).toBeVisible();
};

export const languageSelectorVisible = async () => {
  await expect(element(by.id(ids.GAME_SETTINGS_LANGUAGE_SELECTOR_SCREEN))).toBeVisible();
};

export const allLanguagesVsible = async () => {
  const languages = Object.keys(translations);

  for (const language of languages) {
    const translation = translations[language];

    if ((!translation.isEnabled && !translation.isEnabledForTest) || !translation.flag) {
      continue;
    }

    await expect(element(by.text(`${translation.flag} ${translation.name}`))).toBeVisible();
  }
};
