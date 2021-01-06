import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE, YUSCREEN, YUCOIN_POWER, AVATAR_BUILDER_LIST } from "@utils"


export const {
    scrollFromText,
    scrollFromID,
    swipeToID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID
} = navigation.common

export const {
} = navigation.scrolling

export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(BODY_ITEM_TITLE(tabName)))
    await tab.tap()
}

export const tapItem = (partID: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, BODY_PART_ITEM(partID), "down")()
    const item = element(by.id(BODY_PART_ITEM(partID)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, SKIN_TONE(hexValue), "down")()
    const colour = element(by.id(SKIN_TONE(hexValue)))
    await colour.tap()
}