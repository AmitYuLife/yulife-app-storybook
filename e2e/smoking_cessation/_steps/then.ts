import { navigation } from "@navigation";
import * as ids from "@ids";
import { screens } from "@appScreens";
import {
  smoking_heart_image,
  smoking_questions,
  smoking_wallet_image,
} from "../_resources/smoking_fixtures";
import { swipeFromIDAtIndex } from "_utils/navigation/scrolling";

export const { scrollUntilTextVisible, scrollUntilIdVisible, scrollFromID, scrollFromText } =
  navigation.scrolling;

export const {
  idVisible,
  textVisible,
  idExist,
  idNotVisible,
  wait,
  completedTodayStreakCopyVisible,
  textNotVisible,
  tapID,
  idVisibleAtIndex,
  textVisibleAtIndex,
  testMultipleIndexesVisibility,
  localisedTextVisible,
  objCopyVisible,
} = navigation.common;

export { smokingCelebrationPopupVisible } from "../_helpers/smoking-celebration-popup-visible";

export const { onChallengeComplete } = screens.challenges;

export const { yuScreenV5HeaderVisible, yuScreenLoaded } = screens.yuscreen;

export const smokingTileVisible =
  (titleCopy: string, waitTime = 0) =>
  async () => {
    await wait(waitTime)();
    await idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION)();
    await idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE(titleCopy))();
  };

export const smokingCardVisible = (days: number, locale: string) => async () => {
  const daysText = locale === "ja-JP" ? "" : " days";
  await idVisible(ids.FLAT_LIST_EVENTS)();
  await textVisible(`${days}/28${daysText}`)();
};

export const onSmokingHub =
  (
    locale: string,
    days: number,
    emptyAvatar: boolean,
    totalCost: string,
    totalVolume: string,
    momentsAndReasons: string[],
    longestStreak?: number,
    optOutAvailable = true
  ) =>
  async () => {
    const streakDays = days === 0 ? 1 : days;
    let costText = "";
    let heartText = "";

    switch (locale) {
      case "ja-JP":
        console.log("in JP Switch");
        costText = `${totalCost} 円`;
        heartText = `${totalVolume}本`;
        break;
      case "en-US":
        costText = `$${totalCost}`;
        heartText = totalVolume;
        break;
      case "en-GB":
      default:
        costText = `£${totalCost}`;
        heartText = totalVolume;
        break;
    }

    // check header
    console.log("LOCALE=", locale);
    await checkSmokingHubHeader(streakDays, emptyAvatar)();
    await idVisible(ids.SMOKING_CARD(smoking_heart_image, heartText))();
    await idVisible(ids.SMOKING_CARD(smoking_wallet_image, costText))();
    await idVisible(ids.SMOKING_INFO_PANEL)();

    // check milestones
    await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.MOMENTS_TO_MONITOR, "down")();
    await checkSmokingHubMilestones(longestStreak || streakDays)();
    // check moments and reasons
    await scrollUntilIdVisible(
      ids.SMOKING_CONTAINER_SCROLL,
      ids.SMOKING_SPONSORSHIP_CARD_CTA,
      "down"
    )();
    await checkSmokingHubMomentsAndReasons(momentsAndReasons)();
    // check sponsorship
    await idVisible(ids.SMOKING_SPONSORSHIP_CARD_CTA)();
    // check opt out
    await swipeFromIDAtIndex(ids.MOMENTS_TO_MONITOR, 0, "up", "fast")();
    if (optOutAvailable) {
      await idVisible(ids.SMOKING_HUB_OPT_OUT)();
    } else {
      await idNotVisible(ids.SMOKING_HUB_OPT_OUT)();
    }
  };

const checkSmokingHubHeader = (days: number, emptyAvatar: boolean) => async () => {
  await idVisible(ids.SMOKING_HEADER_DAYS(days))();
  emptyAvatar && (await idVisible(ids.EMPTY_AVATAR)());
  await idVisible(ids.SMOKING_HUB_CTA)();
};

export const checkSmokingHubMilestones = (days: number) => async () => {
  const milestones = [0, 1, 3, 7, 14, 21, 28];

  for (const milestone of milestones) {
    if (milestone === 14) {
      if (days >= 7) {
        await scrollFromID(ids.SMOKING_MILESTONE_TAPPABLE("7"), "left", "fast")();
      } else {
        await scrollFromID(ids.SMOKING_MILESTONE_UNTAPPABLE("7"), "left", "fast")();
      }
    }

    if (days >= milestone) {
      await idVisible(ids.SMOKING_MILESTONE_TAPPABLE(milestone.toString()))();
    } else {
      await idVisible(ids.SMOKING_MILESTONE_UNTAPPABLE(milestone.toString()))();
    }
  }
};

const checkSmokingHubMomentsAndReasons = (momentsAndReasons: string[]) => async () => {
  await idVisible(ids.MOMENTS_TO_MONITOR)();
  await idVisible(ids.SMOKING_HUB_REASONS)();
  await momentsAndReasons.forEach((chip) => async () => {
    await idVisibleAtIndex(ids.SMOKING_CHIP(chip), 0)();
  });
};

export const onTriggersEditScreen = (editType: "triggers" | "motivations") => async () => {
  const locale = process.env.TARGET_LOCALE || "en-GB";
  let fixtures = {};

  switch (editType) {
    case "motivations":
      fixtures = smoking_questions[locale].motivations;
      break;
    case "triggers":
      fixtures = smoking_questions[locale].triggers;
      break;
  }

  const excludeValues = ["cta", "description", "heading", "other"];

  for (const key in fixtures) {
    if (excludeValues.indexOf(key) === -1) {
      await idVisible(ids.SMOKING_EDIT_CHECKBOX_(key))();
    }
  }
};

export const onYunitySwipe = async () => {
  await textVisible("Join the tiles and get to 1024!")();
  await textVisible(
    "Swipe to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 1024!"
  )();
};

export const growthMilestoneUnlocked = (milestone: number) => async () => {
  await idVisible(ids.SMOKING_CELEBRATION_TITLE)();
  await idVisible(
    ids.SMOKING_CELEBRATION_CUSTOM_IMAGE(
      `smoking-cessation/milestones-2024-09-26/milestone-day-${milestone}.svg`
    )
  )();
};

export const combinedSmokingRewardsVisible = (days: number) => async () => {
  await textVisible("Quit-smoking streak increase")();
  await textVisible((days * 10).toString())();
};

export const onSmokingLapseScreen = async () => {
  await idVisible(ids.SMOKING_LAPSE_SCREEN_1)();
  await idVisible(ids.SMOKING_LAPSE_SCREEN_IMAGE)();
  await idVisible(ids.SMOKING_LAPSE_SCREEN_HEADER)();
};
