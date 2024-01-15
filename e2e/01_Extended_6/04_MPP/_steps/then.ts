import { navigation, textVisibleAtIndex } from "@navigation";
import * as ids from "@ids"
import * as constants from "../_resources/constants"
import { screens } from "@appScreens";
import { deeperEnvironmentSlot, yuScreenSlot } from "../_resources/types";

export const {
  scrollUntilTextVisible,
  scrollUntilIdVisible
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
  testMultipleIndexesVisibility
} = navigation.common;

export const {
  onChallengeComplete,
} = screens.challenges


export const correctYuScreenSlotVisible = (product: yuScreenSlot, started: boolean, yucoin: boolean, nameIndex = 0, slotIndex = 0) => async () => {
  const titleIndex = nameIndex ? nameIndex : 0

  await textVisibleAtIndex(product.name, titleIndex)()
  await idVisibleAtIndex(ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(provideLeftSideImage(started, yucoin)), slotIndex)()
  await idVisible(ids.RIGHT_SIDE_IMAGE_SLOT(product.img))()
  
}

const provideLeftSideImage = (started: boolean, yucoin: boolean) => {
  if(started && !yucoin){
    return constants.yugiSlotIconYellow
  } else if (started){
    return constants.yucoinSlotBackgroundYellow
  } else if (!yucoin){
    return constants.yugiSlotIconBlue
  } else {
    return constants.yucoinSlotBackgroundBlue
  }
}

export const deeperProductSlotEnviornmentVisible = (yucoinPower: number) => async () => {
  await idVisible(ids.SDUI_BODY_SCROLL)()
  await idVisible(ids.TEXT_TEMPLATE(constants.deeperEnvironmentHeader, "h3"))()
  await idVisible(ids.TEXT_TEMPLATE(yucoinPower.toString(), "h3"))()
  await idVisible(ids.TEXT_TEMPLATE("YuCoin", "b2b"))()
  await idVisible(ids.TEXT_TEMPLATE("Power", "b2"))()
  await idVisible(ids.TEXT_TEMPLATE(constants.availablePill, "b2b"))()
  await idVisible(ids.TEXT_TEMPLATE(constants.ownedPill, "b2b"))()
}

export const deeperEnvironmentSlotVisible = (product: deeperEnvironmentSlot,owned: boolean, started: boolean, slotIndex: number, yucoin?: number) => async () => {
  const plus = owned ? "" : "+"

  await textVisible(product.name)()
  await idVisible(ids.RIGHT_SIDE_IMAGE_BOX_OPTION(product.img))()
  await textVisible(product.text)()
  if(yucoin){
    await idVisibleAtIndex(ids.CONTENT_MIDDLE_ITEM_IMAGE(provideCorrectYucoinPill(owned, started)), slotIndex)()
    await idVisible(ids.TEXT_TEMPLATE(`${plus}${yucoin.toString()}`, "b2b"))
  }
}


const provideCorrectYucoinPill = (owned: boolean, started: boolean) => {
  if(owned && started){
    return constants.startedYucoinPill
  } else if (owned && !started){
    return constants.notStartedYucoinPill
  } else {
    return constants.unownedYucoinPill
  }
}

export const noProductsDeeperEnvironmentVisible = async () => {
  await idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.noProductsImg))()
  await idVisible(ids.TEXT_TEMPLATE(constants.noProductsMessage, "h3"))()
}