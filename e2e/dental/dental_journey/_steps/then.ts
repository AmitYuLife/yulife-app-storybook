import { navigation } from "@utils"
import { DATE_INPUT, INFO_PANEL_IMAGE, MARKDOWN_TEXT, PERCENTAGE_COVERED, PRODUCT_STEP_BODY_SCROLL_VIEW, TEXT_TEMPLATE, WARNING_BANNER, YUGI_INFO_BANNER_IMAGE, YULIFE_BUPA_LOGO } from "@ids"
import { screens } from "@appScreens"
import moment from "moment"
export { onYuscreenV4 } from "_utils/appScreens/yuscreen"
import { expect } from 'detox'
import { dentalCancellationMessage, dentalCancellationYugi, dentalCancelledMessage, dentalCancelledYugi } from "../_resources/constants"
export  { deeperProductSlotEnviornmentVisible, noProductsDeeperEnvironmentVisible } from "products/MPP/_steps/then"

export const {
    idVisible,
    textVisible,
    idNotVisible,
    textNotVisible,
    multipleTextVisible,
    textVisibleAtIndex,
    idVisibleAtIndex
} = navigation.common

export const {
    onYuscreenV3
} = screens.yuscreen

export const {
    scrollUntilTextVisible,
    swipeFromText
} = navigation.scrolling

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
            await expect(element(by.id(YULIFE_BUPA_LOGO))).toBeVisible()
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
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Conditions apply", "down")()
            await expect(element(by.text("Conditions apply"))).toBeVisible()
            break;
        case "Rare":
            await expect(element(by.id(YULIFE_BUPA_LOGO))).toBeVisible()
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
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Conditions apply", "down")()
            await expect(element(by.text("Conditions apply"))).toBeVisible()
            break;
        case "Epic":
            await expect(element(by.id(YULIFE_BUPA_LOGO))).toBeVisible()
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
            await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW,"Conditions apply", "down")()
            await expect(element(by.text("Conditions apply"))).toBeVisible()
            break;
        default:
            break;
    }
}

export const dentalProductInfo = (packageType: string, membershipEnding: string) => async () => {

    const policyDetails = "Policy details"
    const name = "Bupa Dental Plan for YuLife"
    const membershipNumber = `000000${membershipEnding}`
    const coverFor = "What I'm covered for"
    const bupaClaim = "How to make a claim"
    const billingInfo = "Billing info"
    const paymenHistory = "View payment history"
    const updatePayment = "Update payment details"
    const faq = "FAQs"
    const membershipGuide = "Membership Guide"
    const productInfo = "Product Information (IPID)"

    await expect(element(by.text(policyDetails))).toBeVisible();
    await expect(element(by.text(packageType))).toBeVisible()
    await expect(element(by.text(name))).toBeVisible();
    await expect(element(by.text(membershipNumber))).toBeVisible();
    await expect(element(by.id(YULIFE_BUPA_LOGO))).toBeVisible()
    await swipeFromText(membershipNumber, "up", "slow")()
    await expect(element(by.text(coverFor))).toBeVisible();
    await expect(element(by.text(bupaClaim))).toBeVisible();
    await expect(element(by.text(billingInfo))).toBeVisible();
    await expect(element(by.text(paymenHistory))).toBeVisible();
    await expect(element(by.text(updatePayment))).toBeVisible();
    await expect(element(by.text(faq))).toBeVisible();
    await expect(element(by.text(membershipGuide))).toBeVisible();
    await expect(element(by.text(productInfo))).toBeVisible();
    await swipeFromText(productInfo, "down", "slow", 0.5)()
}

export const bupaClaimInfo = async () => {
   const title = "How to make a claim"

   await expect(element(by.text(title))).toBeVisible();
}

export const FAQInfo = async () => {
    const faq1 = "Why YuLife?"
    const faq2 = "Should I consider dental insurance?"
    const faq3 = "Does this affect my insurance with my employer?"
    const faq4 = "Will my employer know that I have purchased additional cover?"
    const faq5 = "What is Bupa Touch?"
    const faq6 = "Do I have to wait before I can make a claim?"
    const faq7 = "How to make a claim"
    const faq8 = "How long will it take for my claim to be processed?"
    const faq9 = "When will payments be taken?"
    const faq10 = "What happens if a payment fails?"
    const faq11 = "Can I cancel my dental insurance?"
    const faq12 = "Can I add my spouse/partner?"
    const faq13 = "How can I change my policy?"
    const faq14 = "Can I change my Yumoji's gloves?"

    await expect(element(by.text(faq1))).toBeVisible();
    await expect(element(by.text(faq2))).toBeVisible();
    await expect(element(by.text(faq3))).toBeVisible();
    await expect(element(by.text(faq4))).toBeVisible();
    await expect(element(by.text(faq5))).toBeVisible();
    await swipeFromText(faq5, "up", "slow")()
    await expect(element(by.text(faq7))).toBeVisible();
    await expect(element(by.text(faq8))).toBeVisible();
    await expect(element(by.text(faq9))).toBeVisible();
    await expect(element(by.text(faq10))).toBeVisible();
    await swipeFromText(faq10, "up", "fast")()
    await expect(element(by.text(faq11))).toBeVisible();
    await expect(element(by.text(faq12))).toBeVisible();
    await expect(element(by.text(faq13))).toBeVisible();
    await expect(element(by.text(faq14))).toBeVisible();
}

export const paymentHistoryInfo = (amountPaid: string, payStatus: string, index = 0) => async () => {
    const items = [
        { text: "Payment History", waitTime: 0 },
        { text: moment().format("DD/MM/YYYY"), waitTime: 2000 },
        { text: amountPaid, waitTime: 0 },
        { text: payStatus, waitTime: 0 },
        { text: "See something that doesn't look right? Feel free to contact us via chat", waitTime: 2000 }
    ];

    for (const item of items) {
        await textVisibleAtIndex(item.text, index, item.waitTime)();
    }
};

export const cancelledNotificationVisible = async () => {
    const policyEndDate =  moment().add(7, "d").format("DD/MM/YYYY")
    const notification = `Your policy ends soon. In the meantime, you're still covered and can still make claims for treatment received up until ${policyEndDate}.`

    await expect(element(by.text(notification))).toBeVisible();
 }

 export const personalDentalCancelledModalVisible = (cancelled: boolean, date: string) => async () => {
    const yugiMessage = cancelled? dentalCancelledYugi : dentalCancellationYugi
    const cancellationMessage = cancelled? dentalCancelledMessage(date) : dentalCancellationMessage(date)

    await idVisible(YUGI_INFO_BANNER_IMAGE(yugiMessage))()
    await idVisible(INFO_PANEL_IMAGE(yugiMessage))()
    await idVisible(WARNING_BANNER(cancellationMessage))()
 }

 export const policyEndedPillVisible = async () => {
    await idVisible(TEXT_TEMPLATE("0", "b2b"))()
    await idVisible(TEXT_TEMPLATE("Policy", "l4b"))()
    await idVisible(TEXT_TEMPLATE("Ended", "l4b"))()
 }