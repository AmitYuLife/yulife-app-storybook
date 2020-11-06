import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE, PERSONAL_PRODUCT, FIB_SALARY_INPUT } from "@utils"
export { authoriseFitkit, sendSteps } from "@socket";



export const {
    scrollFromText,
    scrollFromID,
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
    restartAndLoginToTab
} = navigation.login

export const tapTab = (tabName: string) => async () => {
    const tab = element(by.id(BODY_ITEM_TITLE(tabName)))
    await tab.tap()
}

