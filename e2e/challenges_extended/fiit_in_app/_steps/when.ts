import { screens } from "@appScreens";
import { MEDIA_2 } from "../../_data";
import { navigation } from "@utils";
import { fiitInfo } from "../_resources/constants";
import { FiitMediaCategory } from "../_resources/types";
export { authoriseFitkit, sendSteps } from "@socket";
import * as ids from "@ids";

export const { scrollFromID } = navigation.scrolling;

export const { tapText, tapID, wait, navigateTo, tapYuCoinIcon, navigateViaID } = navigation.common;

export const { tapTakeChallenge, closeQuitChallengeScreen, exitChallenge } = screens.challenges;

export const takeFiitChallengeFromQuests = (level: number) => async () => {
  const { challengeName } = fiitInfo;
  await tapID(ids.LEVEL_CHALLENGE_BUTTON(level), 500)();
  await tapID(ids.CHALLENGE_TILE(challengeName), 500)();
  await tapText("Take challenge")();
};

export const tapFiitCategory = (category: FiitMediaCategory) => async () => {
  await tapID(ids.FITT_MEDIA_ITEM_TITLE(category))();
  await scrollFromID(ids.FIIT_MEDIA_SCROLL_VIEW, "up", "slow", 0.3)();
};

export const tapFiitVideo = (media: typeof MEDIA_2) => async () => {
  const {
    data: { title },
  } = media;
  await tapID(ids.FITT_MEDIA_ITEM_TITLE(title))();
};

export const playFiitVideo = async () => {
  await tapText("Start class")();
};

export const pauseVideo = (pause: boolean) => async () => {
  await navigateViaID(ids.VIDEO_PLAY_PAUSE_BUTTON(!pause));
};

export const minimiseAndReopenApp = async () => {
  await device.sendToHome();
  await wait(10000)();
  await device.launchApp({ newInstance: false });
};
