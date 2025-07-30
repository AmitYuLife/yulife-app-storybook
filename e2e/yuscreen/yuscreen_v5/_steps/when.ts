import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import * as constants from "../_resources/constants";
import { sendSteps, sendMindfulnessData, addCyclingData, sendReduxEvent } from "@socket";
import { yuscreenImages } from "@images";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeFromIDAtIndex,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  textVisible,
  idVisible,
  wait,
  tapIDAtPoint,
  tapIDAtIndex,
  textNotVisible,
  clearFieldByID,
  tapYuCoinIcon,
  reloadOnly,
  tapTextAtIndex,
  dismissNotificationScreenIfVisible,
} = navigation.common;

export const { logInAndGoToTab } = navigation.login;

export const { saveYumoji, unlockedYumojiItemsVisible } = screens.yuscreen;

export const startYumojiBuilderV5 = (bodyTypeID: string) => async () => {
  await tapID(ids.YUMOJI_YUSCREEN_V5)();
  await tapID(bodyTypeID)();
  await tapText("Continue")();
};

export const { startChallenge, completeShortStroll } = screens.challenges;

export const sendPassiveStepsAndReloadToTab =
  (steps: number, waitTime = 0, reloadTab = true) =>
  async () => {
    await sendSteps(steps)();
    await wait(waitTime)();
    reloadTab && (await tapID(ids.NAV_BAR("yucoin"))());
    reloadTab && (await tapID(ids.NAV_BAR("yu"))());
  };

export const sendPassiveMindulnessAndReloadToTab =
  (mins: number, reloadTab = true) =>
  async () => {
    await sendMindfulnessData(mins)();
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
    reloadTab && (await tapID(ids.NAV_BAR("yucoin"))());
    reloadTab && (await tapID(ids.NAV_BAR("yu"))());
  };

export const sendPassiveCyclingAndReloadToTab =
  (km: number, reloadTab = true) =>
  async () => {
    await addCyclingData(km)();
    await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } });
    reloadTab && (await tapID(ids.NAV_BAR("yucoin"))());
    reloadTab && (await tapID(ids.NAV_BAR("yu"))());
  };

export const setStoreRegion = async () => {
  await tapID(ids.NAV_BAR("rewards"))();
  await tapText("Confirm selection", 2000)();
  await tapID(ids.NAV_BAR("yu"), 2000)();
};

export const goToWellbeingHub = async () => {
  await tapID(ids.MENU_ICON)();
  await tapID(ids.MENU_ITEM("Wellbeing Hub"))();
};

export const changeWellbeingHubSelectedBusiness = (businessName: string) => async () => {
  await tapID(ids.WELLBEING_HUB_BUSINESS_ACCOUNT_DROP_DOWN)();
  await tapID(ids.GENERIC_SELECTOR_ITEM(businessName))();
  await tapID(ids.GENERIC_SELECTOR_CONFIRM)();
};

export const tapSudoku = async () => {
  await scrollUntilTextVisible(ids.CHALLENGE_SET_SCROLL, "Yudoku", "down")();
  await tapText("Yudoku")();
};

export const completeYudoku =
  (endWait = 0) =>
  async () => {
    await scrollUntilTextVisible(ids.SUDOKU_STAGING_SCREEN_SCROLL, "Start game", "down")();
    await tapText("Start game")();
    await dismissNotificationScreenIfVisible();
    await wait(9000)();
    await tapID(ids.CELL_ROW_COLUMN(8, 6, 0))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(4))();
    await tapID(ids.CELL_ROW_COLUMN(8, 7, 0))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(7))();
    await tapID(ids.CELL_ROW_COLUMN(8, 8, 0))();
    await tapID(ids.SUDOKU_NUMBER_INPUT(8))();
    await wait(3000)();
    await wait(endWait)();
  };

export const tapCollect = async () => {
  await tapText("Done")();
  await wait(3000)();

  await scrollUntilTextVisible(ids.SUDOKU_COMPLETED_SCREEN_SCROLL, "Collect", "down")();
  await tapText("Collect")();
};

export const tapAchievementCard = (card: string, cta: "equip" | "unequip") => async () => {
  await tapID(ids.ACHIEVEMENT_CARD(card, "unlocked"))();
  await tapID(cta)();
};
