import { navigation } from "@utils"
import { screens } from "@appScreens"
import { TEXT_TEMPLATE } from "@ids"

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible,
    idVisibleAtIndex
} = navigation.common

export const {
    canSeeChallengeTiles  
} = screens.challenges

export const iCanSeeSurgeIcon = (multiplier: string, expireDate: string) => async () => {
    await idVisible(TEXT_TEMPLATE(multiplier))()
    await idVisible(TEXT_TEMPLATE(expireDate))()
}

export const canSeeSurgeModal = async () => {
    await idVisible(TEXT_TEMPLATE("Surge alert!"))()
    await idVisible(TEXT_TEMPLATE("All challenges are surging 10x. That means you’ll earn 10 times as many YuCoin for every completed challenge. Don’t miss out - this surge ends in "))()
}