import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import { swipeFromText } from "./when";
import { FinancialWellnessQuizDescriptionPage } from "engagement_surveys/_resources/types";

export const { menuItemsVisible } = screens.menu;

export const {
  idVisible,
  textVisible,
  idNotVisible,
  textNotVisible,
  multipleTextVisible,
  textVisibleAtIndex,
  idExist,
  idVisibleAtIndex,
  testMultipleIndexesVisibility,
} = navigation.common;

export const { challengeNudgeVisible, hqNudgeVisible, maximiseYucoinVisible } = screens.yuscreen;

export const { scrollUntilTextVisible, scrollFromID } = navigation.scrolling;

export const progressBarVisible =
  (currentPosition: number, maxLength: number, colour = "#E30D76") =>
  async () => {
    await idVisible(ids.WEEKLY_PROGRESS_BAR(currentPosition, maxLength, colour), 2500)();
  };

export const customerQuizModalVisible =
  (name: string, daysLeft: string, progress: number) => async () => {
    await textVisible(name)();
    await textVisible("0 / 1 journeys")();
    await textVisible(`${daysLeft} days left`)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progress))();
  };

export const onFinancialWellnessQuizDescriptionPage =
  (details: FinancialWellnessQuizDescriptionPage, completed: boolean) => async () => {
    const journeys = completed ? "1" : "0";

    await textVisible(details.title)();
    await textVisible(`${details.daysLeft} days left`)();
    await textVisible(`${journeys} / 1 journeys`)();
    await textVisible(details.descTitle)();
    await swipeFromText(details.descTitle, "up", "fast")();
    await textVisible(details.desc)();

    details.infoCards.forEach((card) => async () => {
      await textVisible(card.title)();
      await textVisible(card.desc)();
    });

    if (completed) {
      await textNotVisible(details.button)();
    } else {
      await textVisible(details.button)();
    }
  };

export const checkEachHeroCard = async () => {
  const heroCardData = [
    {
      id: ids.WARNING_BANNER(
        "Looks like your health data isn’t syncing. Are you up to date on your permissions?"
      ),
    },
    { id: ids.EVENT_CARD("Share your feedback") },
    { id: ids.EVENT_CARD("Share your feedback pulse") },
    { id: ids.EVENT_CARD("Log your progress") },
    { id: ids.EVENT_CARD("Automated QA Test Journey 500 YuCoin Flat Amount") },
    { id: ids.EVENT_CARD("Getting to know yu!") },
    // @UPDATE - HQ not showing for this user - will investigate
    // { id: ids.EVENT_CARD("Daily health questions") },
    { id: ids.EVENT_CARD("FTUE - test") },
  ];

  for (let i = 0; i < heroCardData.length; i++) {
    const { id } = heroCardData[i];

    if (i !== 0) {
      const fromId = heroCardData[i - 1].id;
      await scrollFromID(fromId, "left", "slow", 0.5)();
    }

    await idVisible(id)();
  }
};
