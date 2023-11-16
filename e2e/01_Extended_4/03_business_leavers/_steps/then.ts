import { idVisibleAtIndex, navigation } from "@navigation";
import { leaverProductSlot } from "../_resources/types";
import * as ids from "@ids"
import { availableAnytime, leaversProductBackgroundImg } from "../_resources/constants";
export { onYuscreenV4, wellbeingHubVisible } from "_utils/appScreens/yuscreen";

export const {
  idVisible,
  textVisible,
  textVisibleAtIndex,
  idExist,
  wait,
} = navigation.common;

export const leaverProductSlotVisible = (product: leaverProductSlot, index: number) => async () => {
  await idVisible(ids.SLOT_TITLE(product.name))()
  await textVisibleAtIndex(availableAnytime, index)()
  await textVisible(`+${product.yucoin.toString()}`)()
  await idVisible(ids.RIGHT_SIDE_IMAGE_SLOT(product.img))()
  await idVisibleAtIndex(ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(leaversProductBackgroundImg), index)()
}