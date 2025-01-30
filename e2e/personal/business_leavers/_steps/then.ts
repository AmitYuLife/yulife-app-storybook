import { idNotVisible, idVisibleAtIndex, navigation, tapIDNotBeingVisible, textNotVisible } from "@navigation";
import { leaverProductSlot } from "../_resources/types";
import * as ids from "@ids"
import { availableAnytime, leaversProductBackgroundImg } from "../_resources/constants";
export { rewardsLocationModalVisible } from "benefits/rewards/_steps/then"
export { idNotVisible } from "@navigation"

export const {
  idVisible,
  textVisible,
  textVisibleAtIndex,
  idExist,
  wait,
} = navigation.common;

export const rewardAccessWarning = (date: string) => {
  return `We’re sorry to see you go, but you still have ${date} days to redeem your hard-earned YuCoin!`
}

export const rewardAccessWarningVisible = (date: string) => async () => {
  const warning = rewardAccessWarning(date)

  await idVisible(ids.WARNING_BANNER(warning), 2000)()
}

export const yuScreenV5HeaderVisible = (collapsed: boolean, name: string, world: string, level: string, emptyAvatar=false) => async () => {
    await idVisibleAtIndex(ids.YUSCREEN_V5_USERNAME(name), 0)()
    await idVisibleAtIndex(ids.YUSCREEN_V5_WORLD_AND_LEVEL(world, level), 0)()
    
  if(!collapsed && emptyAvatar) {
    await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR)()
  } else {
    await idNotVisible(ids.EMPTY_USER_YUMOJI_AVATAR)()
  }

  if(!collapsed && !emptyAvatar) {
    await idVisible(ids.YUMOJI_YUSCREEN_V5)()
  } else {
    await idNotVisible(ids.YUMOJI_YUSCREEN_V5)()
  }
}