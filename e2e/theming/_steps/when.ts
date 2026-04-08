import * as ids from "@ids";
import { navigation } from "@utils";

export const { tapID, tapText, wait, typeViaID } = navigation.common;
export const { scrollFromID } = navigation.scrolling;
export const { fullRestartAndLogin } = navigation.login;

export const openDebugMenuItem =
  (itemCode: string, searchText: string = itemCode) =>
  async () => {
    await tapID(ids.MENU_ICON, 1_500)();
    await tapID(ids.DEBUG_MENU, 2_000)();

    await scrollFromID(ids.DEBUG_SCREEN, "down", "fast", 0.5, 2_000)();

    await typeViaID(ids.DEBUG_SEARCH_INPUT, searchText)();

    await tapID(ids.DEBUG_MENU_ITEM(itemCode), 2_000)();

    await tapID(ids.DEBUG_MENU_ITEM(itemCode), 2_000)();
  };

export const selectAndSetTheme = (themeId: string) => async () => {
  await tapID(ids.THEME_SWITCHER_VIEW_COLORS(themeId), 3_000)();
  await tapID(ids.THEME_SWITCHER_SET_THEME_BUTTON, 3_000)();
  await tapText("OK", 3_000)();
};

export const closeThemeSwitcherAndDebug = async () => {
  await tapID(ids.BUTTON_CLOSE_HEADER("Theme Switcher"), 2_000)();
  await tapID(ids.SCREEN_CLOSE, 2_000)();
};
