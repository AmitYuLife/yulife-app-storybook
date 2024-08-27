import { multipleIDVisible, navigation } from "@navigation";
import * as ids from "@ids"
import { screens } from "@appScreens";
import { smoking_heart_image, smoking_questions, SMOKING_STORY_SCREEN_1, SMOKING_STORY_SCREEN_2, SMOKING_STORY_SCREEN_3, smoking_wallet_image } from "health/_fixtures/smoking_fixtures";
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

export const onFirstTimeSmokingCessationScreen = async () => {
  await checkSmokingHubHeader(0, true)()
  await idVisible(ids.BATTLE_PASS_LIST)()
  await idVisible(ids.BATTLE_PASS_LIST_ITEM("smoking-cessation-carousel-item-day-1"))()
  await idVisible(ids.BATTLE_PASS_LIST_ITEM("smoking-cessation-carousel-item-day-2"))()
  await checkSmokingHubMilestones(0)
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_CARD(smoking_heart_image, "0"), "down")()
  await idVisible(ids.SMOKING_CARD(smoking_heart_image, "0"))()
  await idVisible(ids.SMOKING_CARD(smoking_wallet_image, "£0"))()
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_INFO_PANEL, "down")()
  await idVisible(ids.SMOKING_INFO_PANEL)()
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_HUB_REASONS, "down")()
  await idVisible(ids.MOMENTS_TO_MONITOR)()
  await idVisible(ids.SMOKING_HUB_REASONS)()
  await scrollFromID(ids.SMOKING_CONTAINER_SCROLL, "up", "fast")()
  await idVisible(ids.SMOKING_HUB_OPT_OUT)()
}

export const onSmokingHub = (days: number, emptyAvatar: boolean, tips: string[], momentsAndReasons: string[]) => async () => {
  // check header
  await checkSmokingHubHeader(days, emptyAvatar)()
  // check battle pass
  await checkSmokingHubBattlePass(days)()
  // check milestones
  await checkSmokingHubMilestones(days)()
  // check saving section
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_CARD(smoking_heart_image, "312"), "down")()
  await idVisible(ids.SMOKING_CARD(smoking_heart_image, "312"))()
  await idVisible(ids.SMOKING_CARD(smoking_wallet_image, "£33.8"))()
  // check sponsership
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_SPONSERSHIP_CARD_CTA, "down")()
  await idVisible(ids.SMOKING_SPONSERSHIP_CARD_CTA)()
  // check tips section
  await scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, tips[0], "down")()
  await checkSmokingHubTips(tips)()
  // check moments and reasons
  await scrollFromID(ids.SMOKING_CONTAINER_SCROLL, "up", "fast")()
  await checkSmokingHubMomentsAndReasons(momentsAndReasons)()
  // check opt out
  await idVisible(ids.SMOKING_HUB_OPT_OUT)()
}

const checkSmokingHubHeader = (days: number, emptyAvatar: boolean) => async () => {
  await idVisible(ids.SMOKING_HEADER_DAYS(days))()
  emptyAvatar && await idVisible(ids.EMPTY_AVATAR)()
  await idVisible(ids.SMOKING_HEADER_BUTTON)()
}

const checkSmokingHubBattlePass = (days: number) => async () => {
  await idVisible(ids.BATTLE_PASS_LIST)()
  await idVisible(ids.BATTLE_PASS_LIST_ITEM(`smoking-cessation-carousel-item-day-${days.toString()}`))()
  await idVisible(ids.BATTLE_PASS_LIST_ITEM(`smoking-cessation-carousel-item-day-${(days + 1).toString()}`))()
}

const checkSmokingHubMilestones = (days: number) => async () => {
  const milestones = [0, 1, 7, 14, 21, 28];

  for (const milestone of milestones) {
    if (milestone === 28) {
      // Scroll to the milestone "28" before checking it
      await scrollFromID(ids.SMOKING_MILESTONE_TAPPABLE("21"), "left", "fast")();
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
  const yunitySwipeIDs = [ids.YUNITY_SWIPE_SETTINGS, ids.SKIN_INPUT, ids.DIFFICULTY_INPUT, ids.BOARD_SIZE_INPUT, ids.TARGET_SCORE_INPUT, ids.HAPTIC_TOGGLE, ids.START_GAME_BUTTON]
  await multipleIDVisible(yunitySwipeIDs)()
}

export const onSmokingStoryPages = async () => {
  await smokingStoryVisible(SMOKING_STORY_SCREEN_1)()
  // await textVisible(SMOKING_STORY_SCREEN_1)()
  // await textNotVisible("Start tracking my progress")()
  // await wait(11000)()
  // await textVisible(SMOKING_STORY_SCREEN_2)()
  // await textNotVisible("Start tracking my progress")()
  // await wait(11000)()
  // await textVisible(SMOKING_STORY_SCREEN_3)()
  // await textVisible("Start tracking my progress")()

  // await idVisible(ids.SMOKING_STORY_SCREEN(SMOKING_STORY_SCREEN_2), 11000)()
  // await textNotVisible("Start tracking my progress")()
  // await idVisible(ids.SMOKING_STORY_SCREEN(SMOKING_STORY_SCREEN_3), 11000)
  // await textVisible("Start tracking my progress")()
}

const smokingStoryVisible = (text: string) => async () => {
  const target = element(by.text(text))
  await expect(target).toBeVisible(20)
}