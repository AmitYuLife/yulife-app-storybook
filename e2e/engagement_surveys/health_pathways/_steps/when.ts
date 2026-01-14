import * as ids from "@ids";
import { navigation } from "@utils";
export { authoriseFitkit, sendSteps } from "@socket";

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
} = navigation.common;

export const { scrollFromID, scrollUntilIdVisible } = navigation.scrolling;

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
