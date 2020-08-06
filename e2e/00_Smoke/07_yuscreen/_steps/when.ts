import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE } from "@utils"


export const {
    scrollFromText,
    scrollFromID,
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID
} = navigation.common

export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(BODY_ITEM_TITLE(tabName)))
    await tab.tap()
}

export const tapItem = (partID: string) => async () => {
    const item = element(by.id(BODY_PART_ITEM(partID)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    const colour = element(by.id(SKIN_TONE(hexValue)))
    await colour.tap()
}