import { navigation } from "@utils"
import { screens } from "@appScreens"
import * as constant from "../_resources/constants"
import * as ids from "@ids"

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
    multiplePurchasedRewardVisible,
    onRewardHistoryScreen
} = screens.rewards

export const {
    yuCoinPowerInfoVisible
} = screens.yuscreen

export const rewardsLocationModalVisible = async () => {
    await textVisible(constant.locationModalTitle, 2000)()
    await textVisible(constant.locationModalDesc)()
    await textVisible(constant.locationModalStoreLocation)()
    await textVisible(constant.locationModalButton)()
}

export const rewardProductCardVisible = (productCardObj) => async () =>{
    await idVisible(ids.PRODUCT_CARD_TITLE(productCardObj.title))()
    await idVisible(ids.PRODUCT_CARD_IMAGE(productCardObj.image))()
    await idVisible(ids.PRODUCT_CARD_BOTTOM(productCardObj.bottomText))()

    if (productCardObj.yuCoinPowerIncrease){
        await idVisible(ids.YUCOIN_LABEL(productCardObj.yuCoinPowerIncrease))()
    }
}