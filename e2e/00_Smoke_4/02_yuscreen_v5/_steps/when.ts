import {
  navigation,
} from "@utils";
import * as ids from "@ids"

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
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


