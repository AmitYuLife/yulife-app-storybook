import { MENU_ICON, MENU_ITEM, navigation } from "@utils"
import { getLocalisedString as t } from "@i18n"

export const {
    tapText,
    tapID,
    navigateViaText,
    typeViaID,
    replaceTextViaID,
    replaceTextByID,
    clearFieldByID,
    tapIDAtIndex
} = navigation.common

export const {
    scrollFromID,
    scrollUntilIdVisible
} = navigation.scrolling

export const navigateViaButton = (text: string) => async () => {
    await navigateViaText(text)
}

export const goToWellbeingHub = async () => {
    await tapID(MENU_ICON)()
    await tapID(MENU_ITEM(t("Wellbeing Hub")))()
}