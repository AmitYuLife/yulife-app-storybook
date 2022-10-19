import {navigation} from "@utils"
import { screens } from "@appScreens"
import { AVATAR_ITEM, RIGHT_STATUS_ICON, BACKGROUND_COLOUR_PRODUCT, EARN_RATE, YUCOIN_TITLE } from "@ids"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible,
    idVisibleAtIndex,
    textVisibleAtIndex
} = navigation.common

export const {
    onEmptyYuscreen,
    onYuscreen,
    onCreateAvatarScreen,
    onAvatarBuilder,
    onAvatarCompletionScreen,
    onYourYuCoin,
    avatarBodyVisible,
    avatarBodyVisibleWithUser,
    leaderboardAvatarVisible,
    personalProductsVisible,
    onSurveyScreen,
    onSurveySubmitScreen,
    onPackageScreen,
    packageScreenCorrect,
    onYuscreenV4,
    onSkinToneScreen,
    onFacialHairScreen
} = screens.yuscreen

export const {
    swipeToID,
    swipeFromText
} = navigation.scrolling

export const avatarItemVisible = (avatarItem: string, status: string) => async () => {
    await idVisible(AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status))
}

export const {
    onTodaysYucoin,
    onDailySteps,
} = screens.dailySteps

export const yuCoinPowerInfo = (yuCoinPower: string, earnRate: number) => async () => {

    const yuCoinPowerText = "Equipping yourself with policies boosts your YuCoin Power in the Yuniverse."
    const yuCoinEarnedText = `For every 1 YuCoin you would\nhave earned, you now earn ${yuCoinPower}!`

    await idVisible(EARN_RATE(earnRate))();
    await idVisible(YUCOIN_TITLE)();
    await textVisible(yuCoinEarnedText)();
    await expect(element(by.text(yuCoinPowerText))).toBeVisible();

}