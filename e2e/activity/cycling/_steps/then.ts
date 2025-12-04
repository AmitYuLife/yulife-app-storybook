import { idExist, navigation } from "@utils";
import { screens } from "@appScreens";
import { buttonVisible } from "_utils/appScreens/challenges";
import { addCommasToNumber } from "_utils/appScreens/rewards";
import * as ids from "@ids";
import * as data from "../../_data";
import { getLocalisedString as t } from "@i18n";

export const {
  textVisible,
  idVisible,
  multipleIDVisible,
  multipleTextVisible,
  textNotVisible,
  idNotVisible,
  expectIsVisibleViaText,
  idVisibleAtIndex,
} = navigation.common;

export const { scrollFromID, scrollFromText, scrollUntilIdVisible, swipeFromText } =
  navigation.scrolling;

export const { onDailyCycling } = screens.dailySteps;

export const canSeeTodaysCycling = async () => {
  await textVisible("7.5 km", 3000)();
  await idVisible(ids.CYCLING_COUNT("7.5 km"))();
};

export const { menuItemsVisible } = screens.menu;

export const canSeePreviousDaysCycling = async () => {
  await textVisible("3.0 km cycled", 3000)();
  await textVisible("4.0 km cycled", 3000)();
  await textVisible("5.0 km cycled", 3000)();
  await textVisible("- fitbit / 1.0 km cycled", 3000)();
  await textVisible("- garmin / 1.0 km cycled", 3000)();
  await textVisible("- strava / 1.0 km cycled", 3000)();
  await textVisible("- withings / 1.0 km cycled", 3000)();
  await textVisible("- fitbit / 4.0 km cycled", 3000)();
  await textVisible("- strava / 5.0 km cycled", 3000)();
  await textVisible("- withings / 5.0 km cycled", 3000)();
};

export const cyclingEventToBeCompletedVisible =
  (numberOfRides: number, progressWidth: number) => async () => {
    const description = `${numberOfRides} / 10,000 rides`;
    const eventTimeframe = data.GOALS_3.data.title;

    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
    await textVisible(eventTimeframe)();
    await idVisible(ids.HERO_CARD_BADGE("NEW"))();
  };

export const onCyclingEventDetailsScreen = async () => {
  const eventTitle = data.GOALS_3.data.title;
  const eventDescriptionTitle = data.GOALS_3.data.descriptionTitle;
  const eventDescription = data.GOALS_3.data.description;

  await textVisible(eventTitle)();
  await textVisible(eventDescriptionTitle)();
  await swipeFromText(eventDescriptionTitle, "up", "fast", 0.2)();
  await textVisible(eventDescription)();

  await swipeFromText(eventDescription, "up", "fast")();

  for (const info of data.GOALS_3.data.info) {
    await textVisible(info.title)();
    await textVisible(info.description)();
  }
};

export const eventCompletedVisible =
  (numberOfKm: number, total: number, progressWidth: number) => async () => {
    const description = t("%{currentValue} / %{targetValue} %{progressUnit}", {
      currentValue: addCommasToNumber(numberOfKm),
      targetValue: addCommasToNumber(total),
      progressUnit: "rides",
    });
    const eventTimeframe = data.GOALS_3.data.title;

    await textVisible(eventTimeframe)();
    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
  };

export const claimVisible = (numOfStars: number) => async () => {
  await textVisible("Claim")();
  await idVisible(ids.CLAIM_BUTTON)();
  await idVisible(ids.ANIMATED_CIRCLE("#F43E8E"))();
  await idVisible(ids.NUM_OF_STARS(numOfStars))();
};

export const onCompletedEventMilestonePage = (yuCoin: string, numOfStars: number) => async () => {
  const eventTitle = `${data.GOALS_3.data.title} event`;
  await textVisible(eventTitle, 5000)();
  await textVisible("Great job!", 5000)();
  await textVisible("You have reached the event milestone!\nCongratulations. Claim your rewards")();
  await textVisible(`${yuCoin} YuCoin`)();
  await idExist(ids.ANIMATED_CIRCLE("#F43E8E"))();
  await idVisible(ids.NUM_OF_STARS(numOfStars))();
  await buttonVisible("Claim")();
};

export const milestoneComplete = (index: number) => async () => {
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), index, 4000)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), index, 40000)();
};

export const yuCoinPageEventDataCorrect =
  (numberOfKm: number, progressWidth: number) => async () => {
    const description = `${addCommasToNumber(numberOfKm)} / 10,000 rides`;
    await textVisible(description)();
    await idVisible(ids.EVENT_PROGRESS_BAR(progressWidth))();
  };

export const yuCoinEarnedFromEvent =
  (yuCoinStartValue: number, yuCoinPower: number, rewardValue: number) => async () => {
    const yuCoinTotal = (yuCoinStartValue + yuCoinPower * rewardValue).toLocaleString("en-US");
    await textVisible(`${yuCoinTotal} YuCoin today`, 4000)();
  };

export const allChallengesCompleteVisible = async () => {
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 0)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 0)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 1)();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1)();
  await swipeFromText("100 YuCoin", "left", "fast")();
  await idVisibleAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 2)();
  await idVisibleAtIndex(ids.RADIO_ICON_COLOUR("#40C057"), 2)();
};
