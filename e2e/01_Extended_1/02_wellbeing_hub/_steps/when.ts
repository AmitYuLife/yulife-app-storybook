import { navigation } from "@utils"

export const {
    tapText,
    tapID,
    navigateViaText,
    typeViaID,
    replaceTextViaID,
    replaceTextByID,
    clearFieldByID
} = navigation.common

export const {
    scrollFromID,
    scrollUntilIdVisible
} = navigation.scrolling

export const navigateViaButton = (text: string) => async () => {
    await navigateViaText(text)
}