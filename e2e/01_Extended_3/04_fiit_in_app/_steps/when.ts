import { screens } from "@appScreens";
import { MEDIA_2 } from "@data";
import { CHALLENGE_TILE, FITT_MEDIA_ITEM_TITLE, LEVEL_CHALLENGE_BUTTON, navigation, VIDEO_PLAY_PAUSE_BUTTON } from "@utils";
import { fiitInfo } from "../_resources/constants";
import { FiitMediaCategory } from "../_resources/types";
export { authoriseFitkit, sendSteps } from "@socket";

export const {
  tapText,
  tapID,
  wait,
  navigateTo,
  tapYuCoinIcon,
  navigateViaID
} = navigation.common;

export const {
  tapTakeChallenge,
  closeQuitChallengeScreen,
  exitChallenge
} = screens.challenges;

export const takeFiitChallengeFromQuests = (level: number) => async () => {
  const { challengeName } = fiitInfo
  await tapID(LEVEL_CHALLENGE_BUTTON(level), 500)()
  await tapID(CHALLENGE_TILE(challengeName), 500)()
  await tapText("Take challenge")()
}

export const tapFiitCategory = (category: FiitMediaCategory) => async () => {
  await tapID(FITT_MEDIA_ITEM_TITLE(category))()
}

export const tapFiitVideo = (media: typeof MEDIA_2) => async () => {
  const { data: { title } } = media
  await tapID(FITT_MEDIA_ITEM_TITLE(title))()
}

export const playFiitVideo = async () => {
  await tapText("Start class")()
}

export const pauseVideo = (pause: boolean) => async () => {
  await navigateViaID(VIDEO_PLAY_PAUSE_BUTTON(!pause))
}

export const minimiseAndReopenApp = async () => {
  await device.sendToHome();
  await wait(10000)()
  await device.launchApp({ newInstance: false });
}