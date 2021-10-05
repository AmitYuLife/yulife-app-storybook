import { navigation } from "@utils"
import { screens } from "@appScreens"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    multipleTextVisible,
    completedTodayStreakCopyVisible,
    headingStartStreakCopyVisible
} = navigation.common

export const {
    onStartStreak,
    onStartStreakFromHome
} = screens.streaks

export const {
    onChallengeComplete,
} = screens.challenges