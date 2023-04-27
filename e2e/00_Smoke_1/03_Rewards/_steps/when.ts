import { screens } from "@appScreens"
import { navigation } from "@utils"


export const {
    tapRewardInList,
    tapDenomination,
    tapDenominationList,
    tapBuyButton,
    tapPurchasedReward,
} = screens.rewards

export const {
    scrollFromText,
    scrollFromID,
    swipeFromText,
    swipeToText,
    scrollToAndTapText,
    scrollUntilTextVisible
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID
} = navigation.common