import { multipleIDVisible, navigation } from "@navigation";
import * as ids from "@ids"
import * as consts from "../_resources/constants"
import { screens } from "@appScreens";
import { smoking_heart_image, smoking_questions, SMOKING_STORY_SCREEN_1, SMOKING_STORY_SCREEN_2, SMOKING_STORY_SCREEN_3, smoking_wallet_image } from "health/_resources/smoking_fixtures";
import {expect} from 'detox'

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromID
} = navigation.scrolling

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

export const {
  onChallengeComplete,
} = screens.challenges

export const {
  yuScreenV5HeaderVisible
} = screens.yuscreen

export const smokingTileVisible = (titleCopy:string, waitTime=0) => async () => {
  await wait(waitTime)()
  await idVisible(ids.YUSCREEN_SMOKING_TILE)()
  await idVisible(ids.YUSCREEN_SMOKING_TILE_TITLE(titleCopy))()
}

export const youreDoingGreatPopupVisible = (days: number) => async () => {
  const chipsTitle = days % 2 === 0 ? "A reminder of your triggers" : "Why you’re committed to this"
  await idVisible(ids.SMOKING_POPUP_HEADER("You’re doing great"))()
  await idVisible(ids.SMOKING_POPUP_SUBHEADER(chipsTitle))()
  await idVisible(ids.BATTLE_PASS_LIST)()
}

export const smokingCardVisible = (days: number) => async () => {
  await idVisible(ids.FLAT_LIST_EVENTS)()
  await textVisible(`${days} / 28 days`)()
}

export const onSmokingHub = (days: number, emptyAvatar: boolean, costPerWeek: number, volumePerDay: number, tips: string[], momentsAndReasons: string[], longestStreak?: number, optOutAvailable = true) => async () => {
  const totalCost = (costPerWeek / 7) * days
  const formattedCostPerDay = totalCost % 1 === 0 ? totalCost.toFixed(0) : totalCost.toFixed(2).replace(/\.?0+$/, '');
  
  // check header
  await checkSmokingHubHeader(days, emptyAvatar)()
  // check battle pass
  await checkSmokingHubBattlePass(days, longestStreak)()
  // check milestones
  await checkSmokingHubMilestones(longestStreak || days)()
  // check saving section
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_CARD(smoking_heart_image, (volumePerDay * days).toString()), "down")()
  await idVisible(ids.SMOKING_CARD(smoking_heart_image, (volumePerDay * days).toString()))()
  await idVisible(ids.SMOKING_CARD(smoking_wallet_image, `£${formattedCostPerDay.toString()}`))()
  // check sponsorship
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_SPONSORSHIP_CARD_CTA, "down")()
  await idVisible(ids.SMOKING_SPONSORSHIP_CARD_CTA)()
  // check tips section
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, tips[0], "down")()
  await checkSmokingHubTips(tips)()
  // check moments and reasons
  await scrollFromID(ids.SMOKING_CONTAINER_SCROLL, "up", "fast")()
  await checkSmokingHubMomentsAndReasons(momentsAndReasons)()
  // check opt out
  if(optOutAvailable) {
    await idVisible(ids.SMOKING_HUB_OPT_OUT)()
  } else {
    await idNotVisible(ids.SMOKING_HUB_OPT_OUT)()
  }
}

const checkSmokingHubHeader = (days: number, emptyAvatar: boolean) => async () => {
  await idVisible(ids.SMOKING_HEADER_DAYS(days))()
  emptyAvatar && await idVisible(ids.EMPTY_AVATAR)()
  await idVisible(ids.SMOKING_HEADER_BUTTON)()
}

const checkSmokingHubBattlePass = (days: number, longestStreak: number) => async () => {
  const previousClaimed = longestStreak > days
  await idVisible(ids.BATTLE_PASS_LIST)()
  previousClaimed ? await idVisible(ids.BATTLE_PASS_LIST_ITEM_CTA(`smoking-cessation-carousel-item-day-${days.toString()}`))()
  : await idVisible(ids.BATTLE_PASS_LIST_ITEM(`smoking-cessation-carousel-item-day-${days.toString()}`))()
}

export const checkSmokingHubMilestones = (days: number) => async () => {
  const milestones = [0, 1, 3, 7, 14, 21, 28];

  for (const milestone of milestones) {
    if (milestone === 21) {
      if (days >= 14) {
      await scrollFromID(ids.SMOKING_MILESTONE_TAPPABLE("14"), "left", "fast")();
      } else {
        await scrollFromID(ids.SMOKING_MILESTONE_UNTAPPABLE("14"), "left", "fast")();
      }
    }

    if (days >= milestone) {
      await idVisible(ids.SMOKING_MILESTONE_TAPPABLE(milestone.toString()))();
    } else {
      await idVisible(ids.SMOKING_MILESTONE_UNTAPPABLE(milestone.toString()))();
    }
  }
}

const checkSmokingHubTips = (tips: string[]) => async () => {
  tips.forEach((tip) => async () => {
  await idVisible(tip)()
  await scrollFromID(tip, "left", "slow", 0.5)()
  })
}

const checkSmokingHubMomentsAndReasons = (momentsAndReasons: string[]) => async () => {
  await idVisible(ids.MOMENTS_TO_MONITOR)()
  await idVisible(ids.SMOKING_HUB_REASONS)()
  await momentsAndReasons.forEach((chip) => async () => {
    await idVisibleAtIndex(ids.SMOKING_CHIP(chip), 0)()
  })
}

export const onTriggersEditScreen = (editType: "triggers"|"motivations" ) => async () => {
  const locale = process.env.TARGET_LOCALE || "en-GB"
  let fixtures={}

  switch(editType){
    case "motivations":
      fixtures = smoking_questions[locale].motivations
      break
    case "triggers":
      fixtures = smoking_questions[locale].triggers
      break
  }

  const excludeValues = ["cta", "description", "heading", "other"]
  
  for(const key in fixtures){
    if (excludeValues.indexOf(key) === -1) {
      await idVisible(ids.SMOKING_EDIT_CHECKBOX_(key))()
    }
  }
}

export const onYunitySwipe = async () => {
  await textVisible("Join the tiles and get to 1024!")()
  await textVisible("Swipe to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 1024!")()
}

export const growthMilestoneUnlocked = (milestone: number, cigs: number, money: number) => async () => {
  await textVisible(consts.GROWTH_MILESTONE_TITLE)()
  await idVisible(ids.LOTTIE_VIEW)()
  await textVisible(consts.MILESTONE_MESSAGES[milestone])()
  await textVisible(`${cigs.toString()} cigarettes avoided`)()
  await textVisible(`Saved £${money.toString()}`)
  milestone === 7 && await idVisible(ids.WARNING_BANNER(consts.GROWTH_MILESTONE_YUGI_MESSAGE_7))()
  milestone === 14 || milestone === 21 && await idVisible(ids.WARNING_BANNER(consts.GROWTH_MILESTONE_YUGI_MESSAGE_14_21))()
}

export const combinedSmokingRewardsVisible = (days: number) => async () => {
  await textVisible("Quit-smoking streak increase")()
  await textVisible((days * 10).toString())()
}

export const onSmokingLapseScreen = async () => {
  await idVisible(ids.SMOKING_LAPSE_SCREEN_1)()
  await idVisible(ids.SMOKING_LAPSE_SCREEN_IMAGE)()
  await idVisible(ids.SMOKING_LAPSE_SCREEN_HEADER)()
}