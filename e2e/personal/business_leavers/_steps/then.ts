import { idNotVisible, idVisibleAtIndex, navigation, tapIDNotBeingVisible, textNotVisible } from "@navigation";
import { leaverProductSlot } from "../_resources/types";
import * as ids from "@ids"
import { availableAnytime, leaversProductBackgroundImg } from "../_resources/constants";
export { onYuscreenV4, wellbeingHubVisible } from "_utils/appScreens/yuscreen";
export { rewardsLocationModalVisible } from "benefits/rewards/_steps/then"

export const {
  idVisible,
  textVisible,
  textVisibleAtIndex,
  idExist,
  wait,
} = navigation.common;

export const leaverProductSlotNotVisible = (product: leaverProductSlot, waitTime: number) => async () => {
  await idNotVisible(ids.SLOT_TITLE(product.name))()
  await textNotVisible(availableAnytime)()
  await textNotVisible(`+${product.yucoin.toString()}`)()
  await idNotVisible(ids.RIGHT_SIDE_IMAGE_SLOT(product.img))()
  await idNotVisible(ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(leaversProductBackgroundImg), waitTime)()
}

export const rewardAccessWarning = (date: string) => {
  return `We’re sorry to see you go, but you still have ${date} days to redeem your hard-earned YuCoin!`
}

export const rewardAccessWarningVisible = (date: string) => async () => {
  const warning = rewardAccessWarning(date)

  await idVisible(ids.WARNING_BANNER(warning), 2000)()
}