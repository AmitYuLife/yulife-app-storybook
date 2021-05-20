import { navigation } from "@utils"
import { BENEFICIARY_CONTINUE, INPUT_BENEFICIARY_DETAIL } from "@ids"


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
    clearFieldByID
} = navigation.common

export const addBeneficiary = (firstName: string, lastName: string, phone: string, relation: string) => async () => {
    await typeViaID(INPUT_BENEFICIARY_DETAIL("First name"), firstName)()
    await typeViaID(INPUT_BENEFICIARY_DETAIL("Last name"), lastName)()
    await typeViaID(INPUT_BENEFICIARY_DETAIL("Phone number"), phone)()
    await typeViaID(INPUT_BENEFICIARY_DETAIL("Relation"), relation)()
    await tapID(BENEFICIARY_CONTINUE)()
}
