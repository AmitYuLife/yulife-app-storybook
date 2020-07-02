import { navigation, multipleTextVisible, Then, expectIsVisibleViaText, CHALLENGE_HISTORY_STARS } from "@utils"
import { screens } from "@appScreens"

export const {
    idVisible,
    textVisible,
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
    onMeditationChallengeComplete
} = screens.challenges