import { navigation, YEAR_SCROLLER, MONTH_SCROLLER, booleanTextVisible, booleanIdVisible, HIGHLIGHTED_SCROLLER_VALUE, CUSTOM_COVER_SCREEN, PERCENTAGE_COVERED, wait, SCROLLER_VALUE, DUELS_HUB } from "@utils"
import { screens } from "@appScreens"
import moment = require("moment")

export const {
    idVisible,
    textVisible,
    textNotVisible,
    multipleTextVisible,
} = navigation.common

export const feedbackFormVisible =(title:string)=> async()=>{
    await waitFor(element(by.text(title))).toBeVisible().withTimeout(6000)
}