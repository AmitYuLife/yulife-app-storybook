/*
import { navigation, BODY_ITEM_TITLE, BODY_PART_ITEM, SKIN_TONE, PERSONAL_PRODUCT, YUSCREEN, navigateViaText, CHECK_BOX_STATE, SCROLLABLE_LAYOUT, INPUT_FIELD, CM_INPUT, KG_INPUT, DRINKS_INPUT, navigateViaID, SEX_BUTTON, AVATAR_ITEM} from "@utils"
import { swipeFromText } from "_utils/navigation/scrolling"



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
    await navigateViaID(AVATAR_ITEM("chest", "unlockable"))
    await navigateViaText("Upgrade")

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

export const scrollToAndtapGPCheckBox = async()=>{
    const firstLabel = "Tick here to consent to your doctor supplying us with a medical report."
    const secondLabel = "Tick here if you want to see your medical report before your doctor sends it to us."

    const firstCheckBox = element(by.id(CHECK_BOX_STATE(firstLabel, false)))
    const secondCheckBox = element(by.id(CHECK_BOX_STATE(secondLabel, false)))

    await scrollUntilIdVisible(SCROLLABLE_LAYOUT, CHECK_BOX_STATE(secondLabel, false), "down")()

    await firstCheckBox.tap()
    await secondCheckBox.tap()
}

export const enterNewCardDetails = async () => {
    const cardNumber = element(by.type("STPFormTextField")).atIndex(1)
    const cardDate = element(by.type("STPFormTextField")).atIndex(2)
    const cardCVC = element(by.type("STPFormTextField")).atIndex(3)

    await cardNumber.typeText("4242424242424242")
    await cardDate.typeText("1224")
    await cardCVC.typeText("123")

    await tapText("Done")()
}

export const enterAddressStripe = async()=>{
    const addressField = element(by.type("STPFormTextField")).atIndex(5)
    const postCodeField = element(by.type("STPFormTextField")).atIndex(8)
    const cityField = element(by.type("STPFormTextField")).atIndex(9)

    await addressField.typeText("12 Mallow St")
    await postCodeField.typeText("EC1Y 8RQ")
    await cityField.typeText("London")
}


// Detox will tap this, but still returns an error saying "Done" cannot be found
// try catch will prevent the error
export const dismissAddCardScreen = async()=>{
    try{
        const target = element(by.text("Done"))
        await target.tap()
    }catch(e){

    }
}

export const fibNegativeJourney = async()=>{
    await navigateViaText("Continue")
    await navigateViaText("Continue")
    await navigateViaText("Yes")
    await typeViaID(INPUT_FIELD, "20000")()
    await navigateViaText("Continue")
    await navigateViaText("Yes")
    await navigateViaText("No")
    await typeViaID(CM_INPUT, "170")()
    await navigateViaText("Continue")
    await typeViaID(KG_INPUT, "60")()
    await navigateViaText("Continue")
    await navigateViaText("In the past month")
    await navigateViaText("Continue")
    await navigateViaText("30-39 per day")
    await navigateViaText("Continue")
    await navigateViaText("In the past month")
    await navigateViaText("Continue")
    await navigateViaText("In the past month")
    await navigateViaText("Continue")
    await typeViaID(DRINKS_INPUT, "30")()
    await navigateViaText("Continue")
    await navigateViaText("Yes")
    await navigateViaText("Yes")
    await navigateViaID(SEX_BUTTON("Male", false))
    await navigateViaText("Continue")
    await navigateViaText("Yes")
    await navigateViaText("Yes")
    await navigateViaText("High Blood Pressure")
    await swipeFromText("Select all the conditions for which you required consultations", "up", "fast")()
    await navigateViaText("Lungs")
    await navigateViaText("Continue")
    await navigateViaText("Yes")
    await navigateViaText("No")
    await navigateViaText("No")
    await navigateViaText("No")
    await navigateViaText("No")
    await navigateViaText("No")
    await navigateViaText("No")
    await navigateViaText("Yes")
    await navigateViaText("No")
    await navigateViaText("Yes")
    await navigateViaText("No")
    await navigateViaText("No")
}
*/