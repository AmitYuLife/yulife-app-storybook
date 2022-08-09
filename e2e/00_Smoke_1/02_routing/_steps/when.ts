import { navigation } from "@navigation"
import { screens } from "@appScreens"


export const {
    tapID,
    tapText,
    tapIDAtPoint,
    wait,
    tapIDAtIndex
} = navigation.common

export const {
    tapMenuItem
} = screens.menu

export const {
    tapRewardInList
} = screens.rewards

export const {
    scrollFromText,
    scrollFromID,
    scrollUntilTextVisible,
    swipeFromText
} = navigation.scrolling
