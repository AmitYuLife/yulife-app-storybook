import { navigation } from "@utils"
import { DATE_INPUT, PERCENTAGE_COVERED, REFERRALS_INVITE_BUTTON, PRODUCT_STEP_BODY_SCROLL_VIEW } from "@ids"
import { screens } from "@appScreens"
import { scrollUntilTextVisible, swipeFromText } from "_utils/navigation/scrolling"


export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible
} = navigation.common

export const {
    onYuscreenV3
} = screens.yuscreen

export const dentalTooltipVisible = async () => {
    await textVisible("Dental insurance with Bupa is here, browse the cover levels to find one that suits you!")
}

export const isOnPromiseYugiScreen = async () => {
    const yugiText = "Do you promise to answer honestly, accurately and to the best of your knowledge? If you are not honest, claims may not be paid out or your policy can be cancelled."
    const buttonText = "Yes, I promise"

    await expect(element(by.text(yugiText))).toBeVisible()
    await expect(element(by.text(buttonText))).toBeVisible()
}

export const isOnNameScreen = (user: any) => async () => {
    const title = "Okay! Let's start with the easy stuff: is this your name?"
    const firstName = user.data.firstName
    const lastName = user.data.lastName

    await expect(element(by.text(title))).toBeVisible()
    await expect(element(by.text(firstName))).toBeVisible()
    await expect(element(by.text(lastName))).toBeVisible()
}

export const isOnDoBScreen = async () => {
    await isOnScreen("What is your date of birth?")()
    await expect(element(by.id(DATE_INPUT))).toBeVisible()
}

export const isOnScreen = (title: string) => async () => {
    await expect(element(by.text(title))).toBeVisible();
}

export const isOnCoverLevelScreen = async () => {
    await expect(element(by.text("Choose your cover level"))).toBeVisible();
    await expect(element(by.id(PERCENTAGE_COVERED(25)))).toBeVisible()
    await expect(element(by.id(PERCENTAGE_COVERED(50)))).toBeVisible()
    await expect(element(by.id(PERCENTAGE_COVERED(75)))).toBeVisible()
}

export const canSeeCheckoutTerms = async () => {
    const aboveStatements = "I have read and agreed to the above statements."
    const yuLifeTerms = "I have read and agree to the Insurance Terms & Conditions, and YuLife Terms of Business."

    await expect(element(by.text(aboveStatements))).toBeVisible();
    await expect(element(by.text(yuLifeTerms))).toBeVisible();
}


export const packageVisible = (packageType: any) => async () => {
    const preventitiveTreatment = ["Preventive treatment", "Scale and polish", "Routine examination", "Dental X-rays", "Virtual routine examination"]
    const restorativeTreatment = ["Extractions", "Fillings/ root canal", "Restorative dental treatment"]
    const otherDentalBenefits = ["Dental injury treatment", "Emergency dental treatment", "Cash benefit for UK hospital stay", "UK Orthodontic treatment", "UK Oral cancer treatment"]


    switch (packageType) {
        case "Common":
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Restorative treatment", "down")()
            await multipleTextVisible(preventitiveTreatment)
            await expect(element(by.text("up to £205"))).toBeVisible()
            await expect(element(by.text("up to £80"))).toBeVisible()
            await expect(element(by.text("maximum of two £40 visits per policy year"))).toBeVisible()
            await expect(element(by.text("up to £60"))).toBeVisible()
            await expect(element(by.text("maximum of two £30 visits per policy year"))).toBeVisible()
            await expect(element(by.text("up to £40"))).toBeVisible()
            await expect(element(by.text("up to £25"))).toBeVisible()
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Other dental benefits", "down")()
            await multipleTextVisible(restorativeTreatment)
            await expect(element(by.text("up to £100"))).toBeVisible()
            await expect(element(by.text("up to £150"))).toBeVisible()
            await expect(element(by.text("80% up to £275"))).toBeVisible()
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Paid in full", "down")()
            await multipleTextVisible(otherDentalBenefits)
            await expect(element(by.text("up to £5,000"))).toBeVisible()
            await expect(element(by.text("up to £1,000")).atIndex(0)).toBeVisible()
            await expect(element(by.text("up to £1,000")).atIndex(1)).toBeVisible()
            await expect(element(by.text("up to £300"))).toBeVisible()
            await expect(element(by.text("Paid in full"))).toBeVisible()
            await expect(element(by.text("Conditions apply"))).toBeVisible()
            break;
        case "Rare":
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Restorative treatment", "down")()
            await multipleTextVisible(preventitiveTreatment)
            await expect(element(by.text("up to £255"))).toBeVisible()
            await expect(element(by.text("up to £100"))).toBeVisible()
            await expect(element(by.text("maximum of two £50 visits per policy year"))).toBeVisible()
            await expect(element(by.text("up to £80"))).toBeVisible()
            await expect(element(by.text("maximum of two £40 visits per policy year"))).toBeVisible()
            await expect(element(by.text("up to £50"))).toBeVisible()
            await expect(element(by.text("up to £25"))).toBeVisible()
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Other dental benefits", "down")()
            await multipleTextVisible(restorativeTreatment)
            await expect(element(by.text("up to £150"))).toBeVisible()
            await expect(element(by.text("up to £250"))).toBeVisible()
            await expect(element(by.text("80% up to £450"))).toBeVisible()
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Paid in full", "down")()
            await multipleTextVisible(otherDentalBenefits)
            await expect(element(by.text("up to £5,000"))).toBeVisible()
            await expect(element(by.text("up to £1,000")).atIndex(0)).toBeVisible()
            await expect(element(by.text("up to £1,000")).atIndex(1)).toBeVisible()
            await expect(element(by.text("up to £400"))).toBeVisible()
            await expect(element(by.text("Paid in full"))).toBeVisible()
            await expect(element(by.text("Conditions apply"))).toBeVisible()
            break;
        case "Epic":
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Restorative treatment", "down")()
            await multipleTextVisible(preventitiveTreatment)
            await expect(element(by.text("up to £385"))).toBeVisible()
            await expect(element(by.text("up to £160"))).toBeVisible()
            await expect(element(by.text("maximum of two £80 visits per policy year"))).toBeVisible()
            await expect(element(by.text("up to £120"))).toBeVisible()
            await expect(element(by.text("maximum of two £60 visits per policy year"))).toBeVisible()
            await expect(element(by.text("up to £80"))).toBeVisible()
            await expect(element(by.text("up to £25"))).toBeVisible()
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Other dental benefits", "down")()
            await multipleTextVisible(restorativeTreatment)
            await expect(element(by.text("up to £200"))).toBeVisible()
            await expect(element(by.text("up to £300"))).toBeVisible()
            await expect(element(by.text("80% up to £700"))).toBeVisible()
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Paid in full", "down")()
            await multipleTextVisible(otherDentalBenefits)
            await expect(element(by.text("up to £5,000"))).toBeVisible()
            await expect(element(by.text("up to £1,000")).atIndex(0)).toBeVisible()
            await expect(element(by.text("up to £1,000")).atIndex(1)).toBeVisible()
            await expect(element(by.text("up to £500"))).toBeVisible()
            await expect(element(by.text("Paid in full"))).toBeVisible()
            await expect(element(by.text("Conditions apply"))).toBeVisible()
            break;
        default:
            break;
    }
}