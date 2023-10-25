import { navigation} from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids"
import { shortStrollMaxReward, briskWalkMaxReward, longWalkMaxReward, meditationMaxReward, fiitMaxReward, yudokuMaxReward } from "../_resources/constants";
import { USER_122 } from "@data";
export const {
  idVisible,
  textVisible,
  idExist,
  wait,
  completedTodayStreakCopyVisible
} = navigation.common;

export const {
  onChallengeComplete,
  onMeditationChallengeComplete,
  isOnQuitChallengeScreen,
  canSeeNewChallengePage
} = screens.challenges;

export const {
  scrollUntilTextVisibleAtIndex,
  scrollUntilIdVisible
} = navigation.scrolling;

export const canSeeForestYunity = async () => {
  await textVisible("You've achieved Yunity\nwith the Forest")()
}

export const canSeeForestYunityChestIntro = async () => {
  await textVisible("You've earned the\nYunity Forest Chest!")()
}

export const canSeeBoostedChallengeTiles = (user: typeof USER_122) => async () => {
  const earnRate = user.data.earnRate
  const shortStrollBonused = (shortStrollMaxReward * earnRate) * 2
  const briskWalkBonused = (briskWalkMaxReward * earnRate) * 2
  const longWalkBonused = (longWalkMaxReward * earnRate) * 2
  const meditationBonused = (meditationMaxReward * earnRate) * 2
  const fiitBonused = (fiitMaxReward * earnRate) * 2
  const yudokuBonused = (yudokuMaxReward * earnRate) * 2

  await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Short Stroll", shortStrollBonused.toString(), true))()
  await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Brisk Walk", briskWalkBonused.toString(), true))()
  await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Long Walk", longWalkBonused.toString(), true))()
  await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Meditation", meditationBonused.toString(), true))()
  await scrollUntilIdVisible(ids.CHALLENGE_SET_SCROLL, ids.CHALLENGE_TILE_BOOST_TAG("Fiit Class", fiitBonused.toString(), true), "down")()
  await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Fiit Class", fiitBonused.toString(), true))()
  await scrollUntilIdVisible(ids.CHALLENGE_SET_SCROLL, ids.CHALLENGE_TILE_BOOST_TAG("Yudoku", "120", true), "down")()
  await idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Yudoku", yudokuBonused.toString(), true))()
}

export const stepsChallengeDataCorrect = (stage: number, yucoinEarned: number, steps: number) =>  async () => {
  await textVisible(`Level ${stage}`)()
  await textVisible(`${yucoinEarned}`)()
  await textVisible(`${steps} steps`)()
}