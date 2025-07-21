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
  restartWithData,
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
} = navigation.common;

export const cycleThroughEngagementSurveyAgreeCheckBoxes = async () => {
  await tapID(ids.CHECK_BOX_STATE("Agree", false))();
  await tapID(ids.CHECK_BOX_STATE("Neutral", false))();
  await tapID(ids.CHECK_BOX_STATE("Disagree", false))();
  await tapID(ids.CHECK_BOX_STATE("Strongly disagree", false))();
  await tapID(ids.CHECK_BOX_STATE("Strongly agree", false))();
};

export const fillOutEngagementSurvey = async () => {
  await scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5)();
  await tapID(ids.BUTTON_BASE("Let’s go!"))();
  await tapID(ids.WORK_LIFE_BALANCE_IMPORTANT)();
  await tapID(ids.BUTTON_BASE("Next"))();
  await tapID(ids.ACCEPTABLE_WORKLOAD)();
  await tapID(ids.BUTTON_BASE("Next"))();
  await tapID(ids.SUPPORTED_IN_TAKING_LEAVE)();
  await tapID(ids.BUTTON_BASE("Next"))();
};

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
    await wait(500)();

    for (const i of positions) {
      if (i > 0) {
        await swipeFromIDAtIndex(sliderID, 1, "right", "slow", 0.2)();
      }

      await wait(300)();
      await idExist(ids.SLIDABLE_POSITION(i))();
    }
  };

export const agreeAndNext = async () => {
  await tapID(ids.CHECK_BOX_STATE("Agree", false))();
  await tapID(ids.BUTTON_BASE("Next"))();
};
