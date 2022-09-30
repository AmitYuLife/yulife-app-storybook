import {navigation} from "@utils"
import { screens } from "@appScreens"
import { AVATAR_ITEM, RIGHT_STATUS_ICON, BACKGROUND_COLOUR_PRODUCT, ONBOARDING_SCREEN, YUCOIN_POWER, TEXT_TEMPLATE } from "@ids"

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
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#F7F3FF")))).toBeVisible() // dental insurance button
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(0)).toBeVisible() // life insurance button
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE"))).atIndex(1)).toBeVisible() // more protection coming soon button
    }
    if (status === "groupDental"){
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#EFFBF7")))).toBeVisible() // group dental slot
        await expect(element(by.id(BACKGROUND_COLOUR_PRODUCT("#FAFAFE")))).toBeVisible() // more protection coming soon button
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
    const paidBy = "Employer Paid"

    await expect(element(by.text(policyName)).atIndex(1)).toBeVisible();
    await expect(element(by.text(paidBy))).toBeVisible();
    await expect(element(by.text(policyDescription))).toBeVisible()
    await expect(element(by.text(policyInsurance))).toBeVisible();
    await expect(element(by.text(packageType))).toBeVisible()
}

export const groupDentalProductInfo = (packageType: string, yuCoinPower: string) => async () => {

    const policyName = "Dental Cover"
    const policyDescription = "Dental insurance with Bupa, provided by your employer for your protection collection."
    const paidBy = "Employer Paid"

    await idVisible(TEXT_TEMPLATE("Dental Cover"))();
    await expect(element(by.text(paidBy))).toBeVisible();
    await expect(element(by.text(policyDescription))).toBeVisible()
    await expect(element(by.text(packageType))).toBeVisible()
    await expect(element(by.id(YUCOIN_POWER(5)))).toBeVisible();
}

export const yuCoinPowerInfo = (yuCoinPower: number) => async () => {

const powerBoost = `For every 1 YuCoin you would have earned, you now earn ${yuCoinPower}!`
    const baseYucoinPower = "Equipping yourself with policies boosts your YuCoin Power in the Yuniverse."
    const wellbeingEarn = "You can earn YuCoin for your wellbeing activites!"

    if(yuCoinPower < 2) {
        await expect(element(by.text(wellbeingEarn))).toBeVisible()
    } else {
        await expect(element(by.text(baseYucoinPower))).toBeVisible()
        await expect(element(by.text(powerBoost))).toBeVisible()
    }

}

export const paymentOverdueInfo = async () => {

    const paymentOverdueTitle = "Whoops, looks like you have a payment overdue."
    const paymentOverdueText = "Please review your payment details related to your existing policies before taking out another."

    await expect(element(by.text(paymentOverdueTitle))).toBeVisible();
    await expect(element(by.text(paymentOverdueText))).toBeVisible()

}

export const onboardingYuscreenV4 = (packType: string, yuCoinPower: string)=> async()=>{
    const noProductText = "More protection coming soon"
    const wellbeingAccessText = "Wellbeing Access"
    const availableProducts = "More protection"
    const protectionTitle = "Protection with personality"
    const protectionOptionText = "Take a step closer to financial wellbeing, with policies designed to be as unique as you."
    const buttonText = "Show me the way"
    const yuCoinText = "YuCoin"
    const powerText = "Power"
    const paidBy = "Employer paid"
    const lifeInsurance = "Life Insurance"
    const criticalIllness = "Critical Illness"
    const incomeProtection = "Income Protection"
    const groupDental = "Dental Cover"
    const productYuCoin = "10"
    const dentalYuCoin = "5"

    switch (packType) {
        case "wellbeing only":
            await textVisibleAtIndex(yuCoinPower, 0)()
            await textVisible(yuCoinText)()
            await textVisible(powerText)() 
            await textVisibleAtIndex(yuCoinPower, 1)()
            await textVisible(wellbeingAccessText)()
            await textVisible(paidBy)()
            await textVisible(noProductText)()
            await textNotVisible(availableProducts)()
            break;
        case "dentalAndPli":
            await textVisible(yuCoinPower, 0)()
            await textVisible(yuCoinText)()
            await textVisible(powerText)()
            await textVisible(availableProducts)()
            await textNotVisible(noProductText)()
            break;
        case "3 Products Slots":
            await textVisible(yuCoinPower)() // 31
            await textVisible(yuCoinText)()
            await textVisible(powerText)()
            await textVisible(lifeInsurance)()
            await textVisibleAtIndex(paidBy, 0)()
            await textVisibleAtIndex(productYuCoin, 0)()
            await textVisible(criticalIllness)()
            await textVisibleAtIndex(paidBy, 1)()
            await textVisibleAtIndex(productYuCoin, 1)()
            await textVisible(incomeProtection)()
            await textVisibleAtIndex(paidBy, 2)()
            await textVisibleAtIndex(productYuCoin, 2)()
            await textVisible(availableProducts)()
            break;
        case "groupDental":
            await textVisibleAtIndex(yuCoinPower, 0)()
            await textVisible(yuCoinText)()
            await textVisible(powerText)()
            await textVisibleAtIndex(dentalYuCoin, 1)()
            await textVisible(groupDental)()
            await textVisible(paidBy)()
            await textVisible(availableProducts)()
            break;
        case "0EarnRate":
            await textVisible(incomeProtection)()
            await textVisible(powerText)()
            await textVisible(noProductText)()
            await textVisible(paidBy)()
            await textVisible(yuCoinPower)()
            break;
        default:
            break;
    }

    await expect(element(by.id(ONBOARDING_SCREEN))).toBeVisible()
    await expect(element(by.text(protectionTitle))).toBeVisible()
    await expect(element(by.text(protectionOptionText))).toBeVisible()
    await swipeFromText(protectionTitle, "up", "slow")()
    await expect(element(by.text(buttonText))).toBeVisible()
}

export const onLifeInsuranceOverview = async () => {
    await textVisible("Life Insurance", 3000)()
}

export const onDentalInsuranceOverview = async () => {
    await textVisible("Bupa Dental Plan for YuLife", 3000)()
}
