import { navigation, YEAR_SCROLLER, MONTH_SCROLLER, booleanTextVisible, booleanIdVisible, HIGHLIGHTED_SCROLLER_VALUE, CUSTOM_COVER_SCREEN, PERCENTAGE_COVERED, wait, SCROLLER_VALUE, DUELS_HUB, EMPTY_DUELS_HUB, CHALLENGE_FRIEND_BUTTON } from "@utils"
import { screens } from "@appScreens"
import moment = require("moment")

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible,
    tryCatchTextVisible
} = navigation.common

export const onEmptyDuelsHub = async()=>{
    await expect(element(by.id(DUELS_HUB))).toBeVisible()
    await expect(element(by.id(CHALLENGE_FRIEND_BUTTON))).toBeVisible()
    await expect(element(by.id(EMPTY_DUELS_HUB))).toBeVisible()
    
    await expect(element(by.text("You’re not duelling with anybody today."))).toBeVisible()
}

export const onDuelsHub = async()=>{
    await expect(element(by.id(DUELS_HUB))).toBeVisible()
}

export const wagerModalVisible = async()=>{
    const copy = [
        "Bragging Rights!",
        "10 YuCoin",
        "25 YuCoin",
        "100 YuCoin"
    ]
    await multipleTextVisible(copy)()
}