import { navigation } from "@utils"
import { BENEFICIARY_CONTINUE, INPUT_BENEFICIARY_DETAIL, AVATAR_ITEM, AVATAR_BUILDER_LIST, COLOUR, CATEGORY_TYPE, YUMOJI_PART_ID, MALE_BODY } from "@ids"


export const {
    scrollFromText,
    scrollFromID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
    scrollFromIDMultiple,
    scrollToAndTapText
} = navigation.scrolling

export const {
    tapText,
    reloadAppToTab,
    tapID,
    typeViaID,
    replaceTextViaID,
    tapTextWithParentID,
    tryTapID,
    tryTapText,
    wait,
    clearFieldByID,
    textVisible
} = navigation.common

export const addBeneficiary = (firstName: string, lastName: string, phone: string, relation: string) => async () => {
    await typeViaID(INPUT_BENEFICIARY_DETAIL("First name"), firstName)()
    await typeViaID(INPUT_BENEFICIARY_DETAIL("Last name"), lastName)()
    await typeViaID(INPUT_BENEFICIARY_DETAIL("Phone number"), phone)()
    await typeViaID(INPUT_BENEFICIARY_DETAIL("Relation"), relation)()
    await tapID(BENEFICIARY_CONTINUE)()
}

export const tapAvatarItem = (avatarItem: string, status: string) => async () => {
    const item = element(by.id(AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status)))
    await item.tap()
}

export const tapColour = (hexValue: string) => async () => {
    await scrollUntilIdVisible(AVATAR_BUILDER_LIST, COLOUR(hexValue), "down")()
    const colour = element(by.id(COLOUR(hexValue)))
    await colour.tap()
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

export const editYumoji = (skinTone: string, hairStyle: string, hairColour: string, facialHair: string, facialHairColour: string, eyeColour: string, accessories: string) => async () => {

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