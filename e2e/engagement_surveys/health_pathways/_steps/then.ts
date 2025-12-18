import * as ids from "@ids";
import { expect } from "detox";
import { screens } from "@appScreens";
import { navigation } from "@utils";

export const {
  idVisible,
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
