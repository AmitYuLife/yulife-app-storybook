import { booleanIdVisible, navigation } from "@utils"
import { screens } from "@appScreens"
import { AVATAR_ITEM, CONTENT_ITEM_INPUT, DATE_INPUT, DATE_PICKER, FULL_SCREEN_SWIPER, MALE_BODY, PRODUCT_STEP_BODY_SCROLL_VIEW, SEARCH_INPUT, YUMOJI_OUTFIT_LABEL, YUMOJI_OUTFIT_RADIO, YUSCREEN_AVATAR, LEFT_PRODUCT_STEP_MULTI_BUTTON, FULL_SCREEN_LOTTIE_SWIPER } from "@ids"
import moment from "moment"
import { CUSTOMER_37 } from "@data"

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
    clearFieldByID,
    restartWithData,
    restartWithoutDelete,
    idVisible,
    navigateViaText,
    navigateViaID,
    textVisible,
    slowType,
    tapTextAtIndex
} = navigation.common

export const {
    loginOnly
} = navigation.login

export const createDefaultYumoji = async () => {
    await tapText("Create your Yumoji")()
    await tapID(MALE_BODY)()
    await tapText("Continue")()
    await tapText("Save")()
    await tapText("Save changes")()
    await tapText("Done")()
}

export const tapUnlockableItem = (itemName: string) => async () => {
    const itemUrl = `https://yulife-develop.imgix.net/yuscreen_products_assets/default/${itemName}`

    await tapID(AVATAR_ITEM(itemUrl, "unlockable"))()
}

export const tryOutfits = async () => {
    const forest = "Forest Pathfinder"
    const ocean = "Ocean Explorer"
    const desert = "Desert Trailblazer"
    const mountain = "Mountain Adventurer"

    await idVisible(YUMOJI_OUTFIT_LABEL(forest))()

    await tapID(YUMOJI_OUTFIT_RADIO(ocean))()
    await idVisible(YUMOJI_OUTFIT_LABEL(ocean))()

    await tapID(YUMOJI_OUTFIT_RADIO(desert))()
    await idVisible(YUMOJI_OUTFIT_LABEL(desert))()

    await tapID(YUMOJI_OUTFIT_RADIO(mountain))()
    await idVisible(YUMOJI_OUTFIT_LABEL(mountain))()
}

export const navigateThroughTheFullSwiper = async () => {
    await wait(1000)();
    await tapID(FULL_SCREEN_LOTTIE_SWIPER("RIGHT"))();
}

export const dismissPLIModalIfExists = async () => {
    try {
        await expect(element(by.text("Start my quote (+1000 YuCoin)"))).toBeVisible()
        await navigateViaText("Start my quote (+1000 YuCoin)")
    } catch (e) {

    }
}

export const chooseCorrectDoB = (age: number) => async () => {
    const format = "YYYY-MM-DD";
    const date = moment().subtract(age, "years").format(format)

    await navigateViaID(DATE_INPUT)
    await expect(element(by.id(DATE_PICKER))).toBeVisible()
    await element(by.id(DATE_PICKER)).setDatePickerDate(date, format)
    await navigateViaText("Confirm")
}

export const chooseYesOrNo = (answer: string) => async () => {
    await navigateViaText(answer)
}

export const selectOptionAndNavigate = (option: string, navigationText: string) => async () => {
    await tapText(option)();
    await navigateViaText(navigationText)
}

export const scrollToTheBottomAndChooseYesOrNo = (answer: string) => async () => {
    await scrollUntilIdVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, LEFT_PRODUCT_STEP_MULTI_BUTTON, "down")();
    await navigateViaID(answer)
}

/**
 * This skips 1 item. It also takes a while until it gets there
 */
export const swipeOnPicker = (scrollViewId: string, id: string, direction: Detox.Direction, speed = 150) => async () => {
    const scroller = element(by.id(scrollViewId))

    let isVisible = false;
    let attempts = 0;

    while (!isVisible) {
        await scroller.scroll(speed, direction);
        await wait(500)();

        isVisible = await booleanIdVisible(id);
        attempts += 1;

        if (attempts > 50) {
            throw new Error("50 attemps have been made to reach to this Id!")
        }
    }
}

type Screen = "High blood pressure" | "High cholesterol" | "Ears, nose, throat" | "Digestive" | "Kidneys & bladder" | "Eye" | "Minor injuries" | "Lungs" | "Muscles & joints" | "Skin" | "Pregnancy" | "Other"

type YesNo = "Yes" | "No"

export const tapAnswerOnConditionScreen = (screen: Screen, answer: YesNo) => async () => {
    let condition

    switch (screen) {
        case "Ears, nose, throat":
            condition = "ear, nose, and throat issues"
            break;
        case "Digestive":
            condition = "digestive issues"
            break;
        case "Kidneys & bladder":
            condition = "kidney & bladder issues"
            break;
        case "Eye":
            condition = "eye issues"
            break;
        case "Minor injuries":
            condition = "minor injuries"
            break;
        case "Lungs":
            condition = "lung issues"
            break;
        case "Muscles & joints":
            condition = "muscle & joint issues"
            break;
        case "Skin":
            condition = "skin issues"
            break;
        case "Other":
            condition = "other issues"
            break;
        default:
            break;
    }
    await textVisible(`Were all of your ${condition} in the list below?`)()
    await navigateViaText(answer)
}

export const addContactDetails = async () => {
    await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")()
    await navigateViaText("Continue")
    await typeViaID(CONTENT_ITEM_INPUT("contactDetailsAddress1"), "Harry's House\n")()
    await typeViaID(CONTENT_ITEM_INPUT("contactDetailsTown"), "London\n")()
    await typeViaID(CONTENT_ITEM_INPUT("contactDetailsPostcode"), "HA9 7FN\n")()
    await typeViaID(CONTENT_ITEM_INPUT("contactDetailsEmail"), `${CUSTOMER_37.data.email}\n`)()
    await scrollFromID(PRODUCT_STEP_BODY_SCROLL_VIEW, "up", "slow")()
    await typeViaID(CONTENT_ITEM_INPUT("contactDetailsPhone"), "07123456789\n")()
    await tapText("Continue")()
}

export const addGPDetails = async () => {
    const consentText = "Tick here to consent to your doctor supplying us with a medical report"
    const reportText = "Tick here if you want to see your medical report before your doctor sends it to us. Please note by checking this option you will be invited to your GP surgery to review your report."
    const acceptStatement = "I have read and agreed to the above statements."
    const acceptAndRead = "I understand that the monthly price may be subject to change once my medical information has been assessed and that I will receive a final price before I commit."
    const yulifeTerms = "I have read and agree to the Insurance Terms & Conditions, and YuLife Terms of Business."
    
    await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")()
    await navigateViaText(consentText)
    await navigateViaText(reportText)
    await navigateViaText("Continue")
    await typeViaID(SEARCH_INPUT, "CT2 8SG\n")()
    await tapText("London Road Surgery")()
    await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Dr. London Road Surgery", "down")()
    await tapText("Dr. London Road Surgery")()
    await navigateViaText("Continue")
    await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Privacy policy", "down")()
    await tapText(acceptStatement)()
    await tapText(acceptAndRead)()
    await tapText(yulifeTerms)()
    await navigateViaText("Continue to payment")
}

export const addPaymentDetails = async () => {
    const cardNumber = "4242424242424242\n"
    const cardExpiry = "424\n"
    const cardCVC = "242\n"
    const postcode = "42424\n"

    const cardNumberInput = element(by.type("Stripe.STPCardNumberInputTextField"))
    const cardExpiryInput = element(by.type("Stripe.STPCardExpiryInputTextField"))
    const cardCVCInput = element(by.type("Stripe.STPCardCVCInputTextField"))
    const postcodeInput = element(by.type("Stripe.STPPostalCodeInputTextField"))

    await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Add payment details", "down")()
    await navigateViaText("Add payment details")
    await slowType(cardNumberInput, cardNumber, 500)()
    await slowType(cardExpiryInput, cardExpiry, 500)()
    await slowType(cardCVCInput, cardCVC, 500)()
    await slowType(postcodeInput, postcode, 500)()
    await tapText("Set up")()
}

export const scrollDownOnContactsPage = async () => {
    await swipeFromText("Postcode*", "up", "fast")()
    await wait(2000)()
}