import {navigation} from "@utils"
import { screens } from "@appScreens"
import { AVATAR_ITEM, RIGHT_STATUS_ICON, BACKGROUND_COLOUR_PRODUCT } from "@ids"

export const {
    idVisible,
    idNotVisible,
    textVisible,
    textNotVisible,
    expectIsVisibleViaID,
    expectIsVisibleViaText,
    multipleTextVisible,
    idVisibleAtIndex,
    textVisibleAtIndex
} = navigation.common

export const {
    onEmptyYuscreen,
    onYuscreen,
    onCreateAvatarScreen,
    onAvatarBuilder,
    onAvatarCompletionScreen,
    onYourYuCoin,
    avatarBodyVisible,
    avatarBodyVisibleWithUser,
    leaderboardAvatarVisible,
    personalProductsVisible,
    onSurveyScreen,
    onSurveySubmitScreen,
    onPackageScreen,
    packageScreenCorrect,
    onYuscreenV4
} = screens.yuscreen

export const {
    swipeToID,
    swipeFromText
} = navigation.scrolling

export const avatarItemVisible = (avatarItem: string, status: string) => async () => {
    await idVisible(AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status))
}

export const {
    onTodaysYucoin,
    onDailySteps,
} = screens.dailySteps

export const pickWhereLeftModal = async () => {
    const heading = `Pick up where you left off?`
    const subHeading = `Pick up where you left off?`
    const continueCtaLabel = `Continue`
    const startOverCtaLabel = `Start fresh`

 
    await expect(element(by.text(heading))).toBeVisible();
    await expect(element(by.text(subHeading))).toBeVisible();
    await expect(element(by.text(continueCtaLabel))).toBeVisible();
    await expect(element(by.text(startOverCtaLabel))).toBeVisible();
}


export const productSlotsAreCorrect = (status:string)=> async()=>{

    if (status === "0 product live"){
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible()
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible()
    }
    if (status === "dental only"){
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE")))).toBeVisible()
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#F7F3FF")))).toBeVisible()
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
    await swipeFromText(membershipNumber, "up", "fast")()
    await expect(element(by.text(coverFor))).toBeVisible();
    await expect(element(by.text(bupaClaim))).toBeVisible();
    await expect(element(by.text(billingInfo))).toBeVisible();
    await expect(element(by.text(paymenHistory))).toBeVisible();
    await expect(element(by.text(updatePayment))).toBeVisible();
    await expect(element(by.text(faq))).toBeVisible();
    await expect(element(by.text(membershipGuide))).toBeVisible();
    await expect(element(by.text(productInfo))).toBeVisible();
    await swipeFromText(productInfo, "down", "fast")()
}

export const wellbeingProductInfo = (packageType: string) => async () => {

    const policyName = "Wellbeing Access"
    const policyDescription = "A YuLife Wellbeing access membership rewards you with YuCoin, discounts, and vouchers for building healthier habits."
    const policyInsurance = "There is no insurance attached to this membership."
   

    await expect(element(by.text(policyName)).atIndex(1)).toBeVisible();
    await expect(element(by.text(policyDescription))).toBeVisible()
    await expect(element(by.text(policyInsurance))).toBeVisible();
    await expect(element(by.text(packageType))).toBeVisible()
}

export const yuCoinPowerInfo = (yuCoinPower: string) => async () => {

    const yuCoinPowerTitle = "YuCoin Power"
    const yuCoinPowerText = `Equipping yourself with policies boosts your YuCoin Power in the Yuniverse. For every 1 YuCoin you would have earned, you now earn ${yuCoinPower}!`

    await expect(element(by.text(yuCoinPowerTitle))).toBeVisible();
    await expect(element(by.text(yuCoinPowerText))).toBeVisible()

}

export const paymentOverdueInfo = async () => {

    const paymentOverdueTitle = "Whoops, looks like you have a payment overdue."
    const paymentOverdueText = "Please review your payment details related to your existing policies before taking out another."

    await expect(element(by.text(paymentOverdueTitle))).toBeVisible();
    await expect(element(by.text(paymentOverdueText))).toBeVisible()

}