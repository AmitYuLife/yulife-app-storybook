import { AVATAR_ITEM, navigation, EARN_RATE, YUCOIN_TITLE } from "@utils"
import { screens } from "@appScreens"
import { addCommasToNumber } from "_utils/appScreens/rewards"


export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    expectIsVisibleViaText,
    textVisibleAtIndex,
    multipleTextVisible
} = navigation.common

export const {
    onYuscreenV3,
    onProductDetails,
    onCertificate,
    onEmptyYuscreen,
    onYuscreen,
    onCreateAvatarScreen,
    onSkinToneScreen,
    onAvatarCompletionScreen,
    onFacialHairScreen,
    onSurveySubmitScreen
} = screens.yuscreen

export const {
    scrollUntilTextVisible,
} = navigation.scrolling

export const alphaProductsNotVisible = async()=>{
    await expect(element(by.id(AVATAR_ITEM("compass", "active")))).toBeNotVisible()
    await expect(element(by.id(AVATAR_ITEM("binoculars", "active")))).toBeNotVisible()
    await expect(element(by.id(AVATAR_ITEM("map", "active")))).toBeNotVisible()
}

export const avatarItemVisible = (avatarItem: string, status: string) => async () => {
    await idVisible(AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status))
}


export const yuCoinPowerInfo = (yuCoinPower: string, earnRate: number) => async () => {

    const yuCoinPowerText = "Equipping yourself with policies boosts your YuCoin Power in the Yuniverse."
    const yuCoinEarnedText = `For every 1 YuCoin you would\nhave earned, you now earn ${yuCoinPower}!`

    await idVisible(EARN_RATE(earnRate))();
    await idVisible(YUCOIN_TITLE)();
    await textVisible(yuCoinEarnedText)();
    await expect(element(by.text(yuCoinPowerText))).toBeVisible();

}