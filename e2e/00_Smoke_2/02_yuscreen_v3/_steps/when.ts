import { navigation } from "@utils"
import * as ids from "@ids"


export const {
    scrollFromText,
    scrollFromID,
    swipeToText,
    scrollUntilTextVisible,
    scrollUntilIdVisible,
    scrollFromIDMultiple,
    scrollToAndTapText,
    swipeFromText
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
    clearFieldByID
} = navigation.common

export const addBeneficiary = (firstName: string, lastName: string, phone: string, relation: string) => async () => {
    await typeViaID(ids.INPUT_BENEFICIARY_DETAIL("First name"), firstName)()
    await typeViaID(ids.INPUT_BENEFICIARY_DETAIL("Last name"), lastName)()
    await typeViaID(ids.INPUT_BENEFICIARY_DETAIL("Phone number"), phone)()
    await typeViaID(ids.INPUT_BENEFICIARY_DETAIL("Relation"), relation)()
    await tapID(ids.BENEFICIARY_CONTINUE)()
}

export const tapAvatarItem = (avatarItem: string, status: string) => async () => {
    const item = element(by.id(ids.AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status)))
    await item.tap()
}
