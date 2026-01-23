import * as ids from "@ids";
import { expect } from "detox";
import { screens } from "@appScreens";
import { navigation } from "@utils";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible,
  multipleIDVisible,
  multipleTextVisible,
  textNotVisible,
  idVisibleAtIndex,
} = navigation.common;

export const { scrollUntilTextVisibleAtIndex, scrollUntilIdVisible, scrollFromID } =
  navigation.scrolling;

export const assertStreakDayState = (lastCompletedDay: number) => async () => {
  const maxDays = 5;

  for (let i = 1; i <= maxDays; i++) {
    const isCompleted = i <= lastCompletedDay;
    idVisible(ids.PATHWAY_STREAK_DAY(i, isCompleted));
  }
};

export const assertReflectionItemsStatus =
  (fromIndex: number, toIndex: number, status: "locked" | "active" | "completed") => async () => {
    for (let i = fromIndex; i < toIndex; i++) {
      idVisible(ids.PATHWAYS_REFLECTION_ITEM(i, status));
    }
  };

export const assertNextDisabled = async () => {
  await idVisible(ids.BUTTON_BASE("Next", true), 2_000)();
};

export const assertNextEnabled = async () => {
  await idVisible(ids.BUTTON_BASE("Next", false), 2_000)();
};

export const assertQuestionVisible =
  (question: string, textType = "b2b") =>
  async () => {
    await idVisible(ids.TEXT_TEMPLATE(question, textType), 2_000)();
  };

export const assertQuestionAndNextDisabled =
  (question: string, textType = "b2b") =>
  async () => {
    await assertQuestionVisible(question, textType)();
    await assertNextDisabled();
  };

export const assertStreakDayCompleted = (day: number) => async () => {
  await idVisible(ids.PATHWAY_STREAK_DAY(day, true), 2_000)();
};

export const assertPickerQuestion = (question: string, prompt: string) => async () => {
  await assertQuestionVisible(question, "h3")();
  await idVisible(ids.TEXT_TEMPLATE(prompt, "l1b"), 5_000)();
};
