import * as ids from "@ids";
import { navigation } from "@utils";
export { authoriseFitkit, sendSteps } from "@socket";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID,
  tapIDAtIndex,
  minimiseApp,
  restartWithoutDelete,
  terminateApp,
  relaunchAppWithoutSync,
} = navigation.common;

export const { scrollFromID, scrollUntilIdVisible } = navigation.scrolling;
