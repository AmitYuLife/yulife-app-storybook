import { navigation } from "@utils"
import { screens } from "@appScreens"
import { REFERRALS_INVITE_BUTTON } from "@ids"


export const {
    idVisible,
    textVisible,
} = navigation.common

export const {
} = screens.streaks

export const {
    onChallengeComplete,
} = screens.challenges

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}