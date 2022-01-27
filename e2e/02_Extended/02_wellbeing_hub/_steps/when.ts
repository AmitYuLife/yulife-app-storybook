import { navigation } from "@utils"

export const {
    tapText,
    tapID,
    navigateViaText,
    typeViaID,
    replaceTextViaID
} = navigation.common

export const {
    scrollFromID
} = navigation.scrolling


export const navigateViaButton = (text: string) => async () => {
    await navigateViaText(text)
}