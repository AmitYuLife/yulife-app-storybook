import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE, PERSONAL_PRODUCT, FIB_SALARY_INPUT, YUSCREEN, navigateViaText } from "@utils"



export const {
    scrollFromText,
    scrollFromID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID
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

export const goToLifeInsurance = async () =>{
    await scrollFromID(YUSCREEN, "up", "fast")()
    await tapID(PERSONAL_PRODUCT("Life Insurance"))()
    try {
        await navigateViaText("Okay")
        await navigateViaText("Okay")
    } catch (e) {
        await navigateViaText("Okay")
    }
}

export const dismissFibIntro = async()=>{
    try{
        await navigateViaText("Okay")
        await navigateViaText("Okay")
    }catch(e){
        await navigateViaText("Okay")
    }
}