import { navigation, CATEGORY_TYPE, YUMOJI_PART_ID, COLOUR, YUSCREEN, YUCOIN_POWER, AVATAR_BUILDER_LIST, YUSCREEN_AVATAR, HEAD_TYPE, AVATAR_ITEM, TEXT_TEMPLATE, MALE_BODY } from "@utils"


export const {
    scrollFromText,
    scrollFromID,
    swipeToID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
    swipeFromText
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID,
    textVisible,
    idVisible,
    wait,
    tapIDAtPoint,
    tapIDAtIndex,
    textNotVisible
} = navigation.common

export const tapAvatarItem = (avatarItem: string, status: string) => async () => {
    const item = element(by.id(AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status)))
    await item.tap()
}

export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(CATEGORY_TYPE(tabName)))
    await tab.tap()
}

export const tapItem = (partID: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(partID), "down")()
    const item = element(by.id(YUMOJI_PART_ID(partID)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, COLOUR(hexValue), "down")()
    const colour = element(by.id(COLOUR(hexValue)))
    await colour.tap()
}

export const editYumoji = (skinTone: string, hairStyle: string, hairColour: string, facialHair: string, facialHairColour: string, eyeColour: string, accessories: string) => async () => {
    await textVisible("Edit your Yumoji")()

    await textVisible("Pick a body type")()
    await tapID(MALE_BODY)()

    const continueButton = element(by.text("Continue"))
    await continueButton.tap()

    await tapColour(skinTone)()
    await tapTab("hairStyle")()
    await tapItem(hairStyle)()
    await tapTab("hairColour")()
    await tapColour(hairColour)()
    await tapTab("facialHair")()
    await tapItem(facialHair)()
    await tapTab("facialHairColour")()
    await tapColour(facialHairColour)()
    await tapTab("eyeColour")()
    await tapColour(eyeColour)()
    await tapTab("glasses")()
    await tapItem(accessories)()

    const saveButton = element(by.text("Save"))
    await saveButton.tap()

    const yesButton = element(by.text("Save changes"))
    await yesButton.tap()

    const doneButton = element(by.text("Done"))
    await doneButton.tap()
}

export const createDefaultYumoji = async () => {
    await tapText("Create Yumoji")()
    await tapID(MALE_BODY)()
    await tapText("Continue")()
    await tapText("Save")()
    await tapText("Save changes")()
    await tapText("Done")()
    await textNotVisible("Create Yumoji", 3000)()

}