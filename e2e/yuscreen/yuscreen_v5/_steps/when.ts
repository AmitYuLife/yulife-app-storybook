import {
  navigation,
} from "@utils";
import { screens } from "@appScreens"
import * as ids from "@ids"
import * as constants from "../_resources/constants"
import { sendSteps, sendMindfulnessData, addCyclingData, sendReduxEvent } from "@socket";
import { yuscreenImages } from "@images";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeFromIDAtIndex,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  textVisible,
  idVisible,
  wait,
  tapIDAtPoint,
  tapIDAtIndex,
  textNotVisible,
  clearFieldByID,
  tapYuCoinIcon,
  reloadOnly,
  tapTextAtIndex  
} = navigation.common;

export const {
  logInAndGoToTab
} = navigation.login

export const {
  saveYumoji,
  unlockedYumojiItemsVisible
} = screens.yuscreen

export const startYumojiBuilderV5 = (bodyTypeID: string) => async () => {
  await tapID(ids.YUMOJI_YUSCREEN_V5)()
  await tapID(bodyTypeID)()
  await tapText("Continue")()
}

export const {
    startChallenge,
    completeShortStroll
} = screens.challenges

export const sendPassiveStepsAndReloadToTab = (steps:number, waitTime=0, reloadTab=true) => async () =>{
  await sendSteps(steps)()
  await wait(waitTime)()
  reloadTab && await tapID(ids.NAV_BAR("yucoin"))()
  reloadTab && await tapID(ids.NAV_BAR("yu"))()
}

export const sendPassiveMindulnessAndReloadToTab = (mins:number, reloadTab=true) => async () =>{
  await sendMindfulnessData(mins)()
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } })
  reloadTab && await tapID(ids.NAV_BAR("yucoin"))()
  reloadTab && await tapID(ids.NAV_BAR("yu"))()
}

export const sendPassiveCyclingAndReloadToTab = (km:number, reloadTab=true) => async () =>{
  await addCyclingData(km)()
  await sendReduxEvent({ type: "UPDATE_APP_STATE", payload: { appState: "active" } })
  reloadTab && await tapID(ids.NAV_BAR("yucoin"))()
  reloadTab && await tapID(ids.NAV_BAR("yu"))()
}

export const setStoreRegion = async () => {
  await tapID(ids.NAV_BAR("rewards"))()
  await tapText("Confirm selection", 2000)()
  await tapID(ids.NAV_BAR("yu"), 2000)()
}