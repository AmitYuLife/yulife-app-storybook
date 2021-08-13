import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE, YUSCREEN, YUCOIN_POWER, AVATAR_BUILDER_LIST, YUSCREEN_AVATAR, HEAD_TYPE } from "@utils"


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
    replaceTextViaID,
    textVisible,
    idVisible
} = navigation.common

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

export const editYumoji = (gender: string, skinTone: string, hairStyle: string, hairColour: string, facialHair: string, facialHairColour: string, eyeColour: string, accessories: string) => async () => {
    await textVisible("Edit your Yumoji")()

    const yesPlease = element(by.text("Yes Please"))
    await yesPlease.tap()

    await textVisible("Pick a body type")()
    const genderId = element(by.id(gender))
    await genderId.tap()

    const continueButton = element(by.text("Continue"))
    await continueButton.tap()

    await tapColour(skinTone)()
    await tapTab("Hair Style")()
    await tapItem(hairStyle)()
    await tapTab("Hair Colour")()
    await tapColour(hairColour)()
    await tapTab("Facial Hair")()
    await tapItem(facialHair)()
    await tapTab("Facial Hair Colour")()
    await tapColour(facialHairColour)()
    await tapTab("Eye Colour")()
    await tapColour(eyeColour)()
    await tapTab("Accessories")()
    await tapItem(accessories)()

    const doneButton = element(by.text("Done"))
    await doneButton.tap()

    const yesButton = element(by.text("Yes"))
    await yesButton.tap()

    await doneButton.tap()
}