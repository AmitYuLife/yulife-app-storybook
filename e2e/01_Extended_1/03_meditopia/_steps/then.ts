import { navigation } from "@utils"
import { screens } from "@appScreens"
import { REFERRALS_INVITE_BUTTON } from "@ids"


export const {
    idVisible,
    textVisible,
    textNotVisible,
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
    onMeditationChallengeComplete,
    meditationAppModalVisible,
    onMeditationContentIntroScreen,
    onMeditopiaChallengeComplete,
    pauseChallengeTimeVisible,
    isOnQuitChallengeScreen,
    onChooseMeditopiaContentScreen,
    onScreenButtonsNotVisible,
    isOnTodaysMeditationScreen,
    isOnChallengeLoadScreen,
    onChallengeDetailsScreen,
    on3ChallengesDetailsScreen,
    isOnTodaysMeditationScreen2Challenges
} = screens.challenges

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}

