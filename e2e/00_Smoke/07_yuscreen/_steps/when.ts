import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE, YUSCREEN, YUCOIN_POWER } from "@utils"


export const {
    scrollFromText,
    scrollFromID,
    swipeToID,
    swipeToText
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
    const item = element(by.id(BODY_PART_ITEM(partID)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    const colour = element(by.id(SKIN_TONE(hexValue)))
    await colour.tap()
}

export const tapEarnRate = async()=>{
    await scrollFromID(YUSCREEN, "down", "fast")()
    await scrollFromID(YUSCREEN, "down", "fast")()

    await swipeToID(YUSCREEN, YUCOIN_POWER("1"), "up", 5)()
    try{
        await expect(element(by.id(YUCOIN_POWER("1")))).toBeVisible()
        await (element(by.id(YUCOIN_POWER("1")))).tap()
    }catch(e){
        await scrollFromID(YUSCREEN, "up", "slow")()
        await expect(element(by.id(YUCOIN_POWER("1")))).toBeVisible()
        await (element(by.id(YUCOIN_POWER("1")))).tap()
    }
}