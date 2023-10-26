import { navigation} from "@utils";
import { screens } from "@appScreens";
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
  canSeeNewChallengePage,
  canSeeChallengeTiles
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

export const stepsChallengeDataCorrect = (stage: number, yucoinEarned: number, steps: number) =>  async () => {
  await textVisible(`Level ${stage}`)()
  await textVisible(`${yucoinEarned}`)()
  await textVisible(`${steps} steps`)()
}