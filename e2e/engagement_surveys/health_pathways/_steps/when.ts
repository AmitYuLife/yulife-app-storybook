import * as ids from "@ids";
import { navigation } from "@utils";
import { screens } from "@appScreens";
export { authoriseFitkit, sendSteps } from "@socket";

export const { tapMenuItem } = screens.menu;

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  tapIDAtIndex,
  minimiseApp,
  restartWithoutDelete,
  terminateApp,
  relaunchAppWithoutSync,
  typeViaID,
} = navigation.common;

export const { scrollFromID, scrollUntilIdVisible, scrollWithLimitedAttemptsUntilIdVisible } = navigation.scrolling;

export const tapNext = async () => {
  await tapID(ids.BUTTON_BASE("Next", false), 2_000)();
};

export const answerCheckbox = (label: string) => async () => {
  await tapID(ids.CHECK_BOX_STATE(label, false), 2_000)();
};

export const answerImageChoice = (optionKey: string) => async () => {
  await tapID(ids.IMAGE_CHOICE_CHECKBOX(optionKey, false), 2_000)();
};

export const confirmScrollPicker = async () => {
  await tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON, 2_000)();
};

export const answerAndNextCheckbox = (label: string) => async () => {
  await answerCheckbox(label)();
  await tapNext();
};

export const answerAndNextImageChoice = (optionKey: string) => async () => {
  await answerImageChoice(optionKey)();
  await tapNext();
};

export const confirmPickerAndNext = async () => {
  await confirmScrollPicker();
  await tapNext();
};

export const openPickerByPrompt = (prompt: string) => async () => {
  await tapID(ids.TEXT_TEMPLATE(prompt, "l1b"), 2_000)();
};

export const openPickerByPromptAndConfirm = (prompt: string) => async () => {
  await openPickerByPrompt(prompt)();
  await confirmScrollPicker();
};

export const selectPickerValueAndNext = (prompt: string) => async () => {
  await openPickerByPrompt(prompt)();
  await confirmScrollPicker();
  await tapNext();
};

export const openDebugMenuItem =
  (itemCode: string, searchText: string = itemCode) =>
  async () => {
    await tapID(ids.MENU_ICON, 1_500)();
    await tapID(ids.DEBUG_MENU, 2_000)();

    await scrollFromID(ids.DEBUG_SCREEN, "down", "fast", 0.5, 2_000)();

    await typeViaID(ids.DEBUG_SEARCH_INPUT, searchText)();

    // Dismiss keyboard by tapping the target item
    await tapID(ids.DEBUG_MENU_ITEM(itemCode), 2_000)();

    // Now actually open it
    await tapID(ids.DEBUG_MENU_ITEM(itemCode), 2_000)();
  };

export const closeDebug = async () => {
  await tapID(ids.LEFT_HEADING_BUTTON(), 2_000)();
  await tapID(ids.SCREEN_CLOSE, 2_000)();
};

export const setPathwaysProgress = (progress: string) => async () => {
  await tapText(progress, 2_000)();
  await tapID(ids.PATHWAYS_DEBUG_SAVE, 2_000)();
  await tapText("OK", 2_000)();
};
