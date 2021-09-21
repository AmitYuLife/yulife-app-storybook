import { navigation } from "@utils"
import { screens } from "@appScreens"

import { readInbox, readEmailContent } from "@yu-life/yulife-bdd-framework"



export const {
    scrollFromText,
    scrollFromID,
    swipeToID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
    swipeFromText
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID,
    textVisible,
    idVisible,
    typeViaPlaceholder
} = navigation.common

export const {
    tapRewardInList,
    tapDenomination,
    tapDenominationList,
    tapBuyButton,
    tapPurchasedReward
} = screens.rewards
