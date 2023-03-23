import { ACTIVITY_HISTORY_SCREEN, TEXT_TEMPLATE } from "@ids";
import { booleanIdVisible, booleanTextVisible, navigateViaText, wait } from "./common";
import { addCommasToNumber } from "_utils/appScreens/rewards";

export const scrollFromText = (text: string, direction: any, speed: any, percentage?: any) => async () => {
  const target = element(by.text(text));
  await target.scroll(5000, "up");
};

export const scrollFromID = (id: string, direction: any, speed: any, percentage?: any) => async () => {
  const target = element(by.id(id));
  await target.swipe(direction, speed, percentage);
};

export const swipeFromText = (text: string, direction: any, speed: any, percentage?: any) => async () => {
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
  (scrollViewId: string, text: string, direction: "up" | "down", xscroll = 0.5, yscroll = 0.5) =>
  async () => {
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
    offset = 100
  ) =>
  async () => {
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

export const activityHistoryScrollStepDataCorrect = async () => {
  let scrollPercentage = 0;

  if (device.name.includes("(iPhone 14 Pro)")) {
    scrollPercentage = 0.1;
  } else {
    scrollPercentage = 0.13;
  }
  for (let i = 2001; i <= 2032; i++) {
    await expect(element(by.id(TEXT_TEMPLATE(`${addCommasToNumber(i)} steps`)))).toBeVisible();
    await scrollFromID(ACTIVITY_HISTORY_SCREEN, "up", "slow", scrollPercentage)();
  }
};

export const formatCyclingMetersToKmWithOneDecimal = (meters: number): string => {
  return `${(meters / 1000).toFixed(1)} km`;
};

export const activityHistoryScrollCyclingDataCorrect = async () => {
  let scrollPercentage = 0;

  if (device.name.includes("(iPhone 14 Pro)")) {
    scrollPercentage = 0.13;
  } else {
    scrollPercentage = 0.16;
  }
  for (let i = 3100; i <= 6200; i += 100) {
    await expect(element(by.id(TEXT_TEMPLATE(`${formatCyclingMetersToKmWithOneDecimal(i)} cycled`)))).toBeVisible();
    await scrollFromID(ACTIVITY_HISTORY_SCREEN, "up", "slow", scrollPercentage)();
  }
};

export function formatMindfulMins(totalSeconds: number) {
  let minutes = Math.floor(totalSeconds / 60);
  let extraSeconds = totalSeconds % 60;
  let extraSecondsTwoDP = extraSeconds < 10 ? `0${extraSeconds}` : extraSeconds;
  return `${minutes}:${extraSecondsTwoDP}`;
}

export const activityHistoryScrollMinsDataCorrect = async () => {
  let scrollPercentage = 0;

  if (device.name.includes("(iPhone 14 Pro)")) {
    scrollPercentage = 0.13;
  } else {
    scrollPercentage = 0.16;
  }
  for (let i = 301; i <= 332; i++) {
    await expect(element(by.id(TEXT_TEMPLATE(`${formatMindfulMins(i)} mindful mins`)))).toBeVisible();
    await scrollFromID(ACTIVITY_HISTORY_SCREEN, "up", "slow", scrollPercentage)();
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