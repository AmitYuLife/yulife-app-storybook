import { navigation } from "@utils"
import { screens } from "@appScreens"
import {expect} from 'detox'
import * as ids from "@ids"

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
    isOnTodaysMeditationScreen2Challenges,
    canSeeNewChallengePage
} = screens.challenges

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(ids.REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}
