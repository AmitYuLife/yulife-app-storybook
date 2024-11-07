import { ACTIVITY_HISTORY_CHALLENGE_VALUE, ACTIVITY_HISTORY_SCREEN, ACTIVITY_HISTORY_SCREEN_SCROLL, TEXT_TEMPLATE } from "@ids";
import { booleanIdVisible, booleanTextVisible, navigateViaText, wait } from "./common";
import { addCommasToNumber } from "_utils/appScreens/rewards";
import {expect} from 'detox'


export const scrollFromText = (text: string, direction: any, speed: any, percentage?: any) => async () => {
  const target = element(by.text(text));
  await target.swipe(direction, speed, percentage);
};

export const scrollFromID = (id: string, direction: any, speed: any, percentage?: any) => async () => {
  const target = element(by.id(id));
  await target.swipe(direction, speed, percentage);
};

export const swipeFromIDAtIndex = (id: string, index:number, direction: any, speed: any, percentage?: any) => async () => {
const target = element(by.id(id)).atIndex(index);
await target.swipe(direction, speed, percentage);
};

export const swipeFromText = (text: string, direction: any, speed: any, percentage?: any, waitTime?:number) => async () => {
  if (waitTime){
    await wait(waitTime)()
  }
  const target = element(by.text(text));
  await target.swipe(direction, speed, percentage);
};

export const scrollFromIDMultiple =
  (id: string, direction: any, speed: any, scrollCount: number, percentage?: any) => async () => {
    let i = 0;
    const target = element(by.id(id));

    while (i < scrollCount) {
      await target.swipe(direction, speed, percentage);
      i++;
    }
  };

// down is down
export const scrollUntilTextVisible =
  (scrollViewId: string, text: string, direction: "up" | "down", xscroll = 0.5, yscroll = 0.5, waitTime=0) =>
  async () => {
    await wait(waitTime)()

    await waitFor(element(by.text(text)))
      .toBeVisible()
      .whileElement(by.id(scrollViewId))
      .scroll(100, direction, xscroll, yscroll);
  };

export const scrollUntilIdVisible =
  (
    scrollViewId: string,
    id: string,
    direction: "up" | "down" | "left" | "right",
    xscroll = 0.5,
    yscroll = 0.5,
    offset = 100,
    waitTime=0
  ) =>
  async () => {
    await wait(waitTime)()
    await waitFor(element(by.id(id)))
      .toBeVisible()
      .whileElement(by.id(scrollViewId))
      .scroll(offset, direction, xscroll, yscroll);
  };

export const scrollToAndTapText =
  (scrollViewid: string, text: string, direction: "up" | "down", xscroll = 0.5, yscroll = 0.5) =>
  async () => {
    await waitFor(element(by.text(text)))
      .toBeVisible()
      .whileElement(by.id(scrollViewid))
      .scroll(100, direction, xscroll, yscroll);
    await element(by.text(text)).tap();
  };

export const swipeToText =
  (scrollID: any, targetText: string, direction: "up" | "down" | "left" | "right", maxAttempts = 10) =>
  async () => {
    let targetTextVisible = await booleanTextVisible(targetText);
    let scroller = element(by.id(scrollID));

    let currentAttempt = 0;
    while (targetTextVisible === false && currentAttempt < maxAttempts) {
      await scroller.swipe(direction, "slow");
      targetTextVisible = await booleanTextVisible(targetText);

      if (targetTextVisible === true) {
        await expect(element(by.text(targetText))).toBeVisible();
        targetTextVisible = await booleanTextVisible(targetText);
        currentAttempt = maxAttempts;
        return true;
      }

      if (targetTextVisible === false && currentAttempt === maxAttempts) {
        throw new Error(`Could not find target text ${targetText} scrolling through ${scrollID}`);
      }
      currentAttempt += 1;
    }
  };

export const swipeToID =
  (scrollID: any, targetID: string, direction: Detox.Direction, maxAttempts = 10) =>
  async () => {
    try {
      await expect(element(by.id(targetID))).toBeVisible();
    } catch (e) {
      let targetIDVisible = await booleanIdVisible(targetID);
      let scroller = element(by.id(scrollID));

      let currentAttempt = 0;
      while (targetIDVisible === false && currentAttempt < maxAttempts) {
        console.log("starting scroll.........");
        await scroller.swipe(direction, "slow");
        console.log("just scrolled.........");
        targetIDVisible = await booleanIdVisible(targetID);

        if (targetIDVisible === true) {
          await expect(element(by.text(targetID))).toBeVisible();
          targetIDVisible = await booleanIdVisible(targetID);
          currentAttempt = maxAttempts;
          return true;
        }

        if (targetIDVisible === false && currentAttempt === maxAttempts) {
          throw new Error(`Could not find target text ${targetID} scrolling through ${scrollID}`);
        }
        currentAttempt += 1;
      }
    }
  };

export const activityHistoryScrollStepDataCorrect = (steps: number, daysToCheck: number) => async () => {
  const startSteps = steps + 1;
  const endSteps = steps + daysToCheck;

  for (let i = startSteps; i <= endSteps; i++) {
    await scrollUntilTextVisible(ACTIVITY_HISTORY_SCREEN, `${addCommasToNumber(i)} Steps`, "down")();
    await expect(element(by.id(ACTIVITY_HISTORY_CHALLENGE_VALUE(`${addCommasToNumber(i)} Steps`)))).toBeVisible();
  }
};

export const formatCyclingMetersToKmWithOneDecimal = (meters: number): string => {
  return `${(meters / 1000).toFixed(1)} km`;
};

export const activityHistoryScrollCyclingDataCorrect = (steps: number, daysToCheck: number) => async () => {
  const startSteps = steps + 100;
  const endSteps = steps + (daysToCheck * 100);

  for (let i = startSteps; i <= endSteps; i += 100) {
    await scrollUntilIdVisible(ACTIVITY_HISTORY_SCREEN, ACTIVITY_HISTORY_CHALLENGE_VALUE(`${formatCyclingMetersToKmWithOneDecimal(i)} Cycling`), "down")()
    await expect(element(by.id(ACTIVITY_HISTORY_CHALLENGE_VALUE(`${formatCyclingMetersToKmWithOneDecimal(i)} Cycling`)))).toBeVisible();
  }
};

export const activityHistoryScrollMinsDataCorrect = (minutes = 0) => async () => {
  const totalDays = 28;

  for (let i = 1; i <= totalDays; i++) {
    await scrollUntilIdVisible(ACTIVITY_HISTORY_SCREEN, ACTIVITY_HISTORY_CHALLENGE_VALUE(`${minutes + i} Mindful mins`), "down")();
  }
};

export const scrollUntilTextVisibleAtIndex =
  (scrollViewId: string, text: string, direction: "up" | "down", index: number, xscroll = 0.5, yscroll = 0.5) =>
  async () => {
    await waitFor(element(by.text(text)).atIndex(index))
      .toBeVisible()
      .whileElement(by.id(scrollViewId))
      .scroll(100, direction, xscroll, yscroll);
  };

  export const swipeFromTextAtIndex = (text: string, direction: any, speed: any, index: number) => async () => {
    const target = element(by.text(text)).atIndex(index);
    await target.swipe(direction, speed);
  };


  export const scrollUntilIdVisibleAtIndex = (
    scrollViewId: string,
    id: string,
    direction: "up" | "down" | "left" | "right",
    index: number,
    xscroll = 0.5,
    yscroll = 0.5,
    offset = 100
  ) =>
  async () => {
    await waitFor(element(by.id(id)).atIndex(index))
      .toBeVisible()
      .whileElement(by.id(scrollViewId))
      .scroll(offset, direction, xscroll, yscroll);
  };

