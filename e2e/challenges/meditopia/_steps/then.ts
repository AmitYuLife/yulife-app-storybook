import { navigation } from "@utils"
import { screens } from "@appScreens"
import { by, element, expect } from "detox";
import * as ids from "@ids"
import { FULL_CATALOG_MEDITATION_CARD_TITLES } from "../_resources/fixtures"

export const {
    idVisible,
    textVisible,
    textNotVisible,
    idExist,
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
    canSeeNewChallengePage,
    successScreenHintVisible
} = screens.challenges

export const isOnTodaysMeditationScreenFullInternalCatalog = async () => {
  await idVisible(ids.TODAYS_MEDITATION_SCREEN, 2000)()
  for (const title of FULL_CATALOG_MEDITATION_CARD_TITLES) {
    await idExist(ids.MEDIA_LIST_ITEM_TITLE(title), 5_000)()
  }
}

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(ids.REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}
