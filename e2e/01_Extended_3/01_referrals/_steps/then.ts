import { navigation } from "@utils"
import * as ids from "@ids"
import { screens } from "@appScreens"
import { expect } from 'detox'

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible
} = navigation.common

export const {
    menuItemsVisible
} = screens.menu

export const {
    onDailySteps
} = screens.dailySteps

export const referralsPopoverVisible = async () => {
    await expect(element(by.text("Invite colleagues"))).toBeVisible()
    await expect(element(by.text("Share the love and get 1000 YuCoin for every referral."))).toBeVisible()
}

export const referralsPopoverNotVisible = async () => {
    await expect(element(by.text("Invite colleagues"))).toBeNotVisible
    await expect(element(by.text("Share the love and get 300 YuCoin for every referral."))).toBeNotVisible()
}

export const isOnInivteColleaguePage = async () => {
    await expect(element(by.id(ids.REFERRALS_QR_CODE))).toBeVisible
    await expect(element(by.id(ids.REFERRALS_INVITE_BUTTON))).toBeVisible
    await expect(element(by.text("Your referrals"))).toBeVisible()
}