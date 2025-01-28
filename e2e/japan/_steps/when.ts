import { navigation } from "@utils";
import * as ids from "@ids"

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
  scrollUntilTextVisibleAtIndex,
  scrollUntilIdVisibleAtIndex
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
  tapTextAtIndex,
  minimiseAndReopenApp
} = navigation.common;

export const goToWellbeingHub = async () => {
    await tapID(ids.MENU_ICON, 2000)()
    await tapID(ids.MENU_ITEM("Well-beingセンター"), 2000)()
}
