import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";

export const { tapMenuItem } = screens.menu;

export const {
  scrollFromText,
  scrollFromID,
  swipeFromIDAtIndex,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
  swipeFromText,
  scrollWithLimitedAttemptsUntilIdVisible,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  tapTextWithParentID,
  tryTapID,
  tryTapText,
  wait,
  clearFieldByID,
  restartWithoutDelete,
  idVisible,
  idExist,
  navigateViaText,
  navigateViaID,
  textVisible,
  slowType,
  tapTextAtIndex,
  booleanIdVisible,
  tapIDAtIndex,
  navigateTo,
  minimiseAndReopenApp,
  start,
  switchLanguage,
} = navigation.common;

export const { startChallenge } = screens.challenges;
export { sendSteps } from "@socket";

export const tapAllCheckboxes =
  (stepId: string, questionId: string, numberOfBoxes: number) => async () => {
    for (let i = 1; i <= numberOfBoxes; i++) {
      const checkboxTestId = ids.CHECKBOX_SELECTORS(stepId, `${questionId}.${i}`);
      await tapID(checkboxTestId)();
    }
  };

export const verifySliderPositionsBySwiping =
  (sliderID: string, positions: number[]) => async () => {
    await swipeFromIDAtIndex(sliderID, 1, "left", "slow", 1.0)();
    await wait(1000)();

    for (const i of positions) {
      if (i > 0) {
        await swipeFromIDAtIndex(sliderID, 1, "right", "slow", 0.2)();
        await wait(1000)();
      }

      await wait(1000)();
      await idExist(ids.SLIDABLE_POSITION(i))();
      await wait(1000)();
    }
  };

export const agreeAndNext = async () => {
  await tapID(ids.CHECK_BOX_STATE("Agree", false))();
  await tapID(ids.BUTTON_BASE("Next"))();
};
