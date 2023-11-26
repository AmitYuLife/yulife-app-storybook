import { navigation } from "@utils"
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

export const rewardsLocationModalVisible = async () => {
    await textVisible(constant.locationModalTitle)()
    await textVisible(constant.locationModalDesc)()
    await textVisible(constant.locationModalStoreLocation)()
    await textVisible(constant.locationModalButton)()
}
