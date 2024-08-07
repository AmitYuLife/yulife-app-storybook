import { navigation } from "@navigation";
import * as ids from "@ids"
import { screens } from "@appScreens";
import { smoking_heart_image, smoking_wallet_image } from "health/_fixtures/smoking_fixtures";


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

export const smokingTileVisible = (titleCopy:string) => async () => {
  await idVisible(ids.YUSCREEN_SMOKING_TILE)()
  await idVisible(ids.YUSCREEN_SMOKING_TILE_TITLE(titleCopy))()
}

export const onFirstTimeSmokingCessationScreen = async () => {
  await idVisible(ids.EMPTY_AVATAR)()
  await idVisible(ids.SMOKING_HEADER_BUTTON)()
  await idVisible(ids.BATTLE_PASS_LIST)()
  await idVisible(ids.BATTLE_PASS_LIST_ITEM("1"))()
  await idVisible(ids.BATTLE_PASS_LIST_ITEM("2"))()
  await idVisible(ids.SMOKING_HEADER_DAYS(0))()
  await idVisible(ids.SMOKING_MILESTONE_TAPPABLE("0"))()
  await idVisible(ids.SMOKING_MILESTONE_UNTAPPABLE("1"))()
  await idVisible(ids.SMOKING_MILESTONE_UNTAPPABLE("7"))()
  await idVisible(ids.SMOKING_MILESTONE_UNTAPPABLE("14"))()
  await idVisible(ids.SMOKING_MILESTONE_UNTAPPABLE("21"))()
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