import { PRODUCT_CARD_BOTTOM, PRODUCT_CARD_IMAGE, PRODUCT_CARD_TITLE, YUCOIN_LABEL, navigation } from "@utils"
import { screens } from "@appScreens"
import * as constant from "../_resources/constants"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    multipleTextVisible,
    textVisibleAtIndex
} = navigation.common

export const {
    rewardVisible,
    onRewardScreen,
    lockedRewardVisible,
    rewardDenominationsVisible,
    denominationListVisible,
    buyButtonVisible,
    onRewardPurchasedScreen,
    purchasedRewardVisible,
    onRewardHistoryScreen
} = screens.rewards

export const {
    yuCoinPowerInfoVisible
} = screens.yuscreen

export const rewardsLocationModalVisible = async () => {
    await textVisible(constant.locationModalTitle)()
    await textVisible(constant.locationModalDesc)()
    await textVisible(constant.locationModalStoreLocation)()
    await textVisible(constant.locationModalButton)()
}

export const rewardProductCardVisible = (productCardObj) => async () =>{
    await idVisible(PRODUCT_CARD_TITLE(productCardObj.title))()
    await idVisible(PRODUCT_CARD_IMAGE(productCardObj.image))()
    await idVisible(PRODUCT_CARD_BOTTOM(productCardObj.bottomText))()

    if (productCardObj.yuCoinPowerIncrease){
        await idVisible(YUCOIN_LABEL(productCardObj.yuCoinPowerIncrease))()
    }
}