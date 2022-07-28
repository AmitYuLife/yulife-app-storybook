import { navigation } from "@utils"
import { screens } from "@appScreens"

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
    onRewardNotAvailableScreen
} = screens.rewards
