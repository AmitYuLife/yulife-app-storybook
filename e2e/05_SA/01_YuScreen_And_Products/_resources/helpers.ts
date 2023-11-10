import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when"
import * as then from "../_steps/then"
import * as text  from "./constants";
import { YUMOJI_AVATAR_YUSCREEN_V4, VIEW_TOP_RIGHT_COIN_COUNTER, TEXT_TEMPLATE, BUTTON_CLOSE, RIGHT_STATUS_ICON, YUCOIN_POWER, CONTENT_ITEM_IMAGE, V4_YUSCREEN, ALL_PRODUCTS_CONTAINER_VIEW, BACK_BUTTON, TOP_RIGHT_ITEM_IMAGE, YUGI_INFO_BANNER_IMAGE, PRODUCT_DETAILS_SCROLL_VIEW, CONTENT_ITEM_BUTTON_IMAGE, CONTENT_SMALL_IMAGE_CARD_URL, CONTENT_MIDDLE_ITEM_IMAGE, SCREEN_CLOSE, BUTTON_CLOSE_HEADER, ONBOARDING_SCREEN, LEFT_SIDE_TEXT_SLOT_POWER, CAROUSEL_CARD} from "@ids";
import { beneficiaries, checkButton, coverAmounts, furtherScreen, keyInfo, navButton, productAdditionalInfo, SAProductData, usefulLinks} from "./types";
import { CPE_GIP_SA_1, CPE_GrFun_SA_1, CPE_GrFun_SA_2, CPE_LSDC_SA_1, CPE_MeGL_SA_1, CPE_MeGL_SA_2, CPE_SpGL_SA_2, CPE_TmpGIP_SA_1 } from "05_SA/_data";




export const YUSCREEN_SA = async (customer: any, packType: string, yuCoinPower: string, buttonText = "Check out my power") => {

    const firstName = customer.data.firstName;
    const lastName = customer.data.lastName;

    When(`I tap ${buttonText}`, when.tapText(buttonText), async () => {
        Then(`I should see ${text.yuMojiBuilder}`, then.textVisible(text.yuMojiBuilder))
    })
    When("I swipe down the screen", when.swipeFromText(text.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
            Then(`I should see ${firstName} ${lastName} text`, then.textVisible(`${firstName} ${lastName}`))
            Then(`I should see ${V4_YUSCREEN} id`, then.idVisible(V4_YUSCREEN))
            Then(`I should see ${text.createYumujiHeading} text`, then.textVisible(`${text.createYumujiHeading}`))
            Then(`I should see ${text.createYumujiText} text`, then.textVisible(`${text.createYumujiText}`))
            Then(`I should see ${text.createYumujiCTA} text`, then.textVisible(`${text.createYumujiCTA}`))
            Then(`I should see ${text.yuCoinText} text`, then.textVisible(`${text.yuCoinText}`))
            Then(`I should see ${text.powerText} text`, then.textVisible(`${text.powerText}`))

            switch (packType) {
                case "MeGL/GrFun/GIP/TmpGIP/LSDC":
                    Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
                    Then(`I should see ${text.lifeCoverProduct} text`, then.textVisible(text.lifeCoverProduct))
                    Then(`I should see earn rate ${CPE_MeGL_SA_1.data.earn_rate} text`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_MeGL_SA_1.data.earn_rate}`)))
                    Then(`I should see ${text.FuneralCover} text`, then.textVisible(text.FuneralCover))
                    Then(`I should see earn rate ${CPE_GrFun_SA_1.data.earn_rate} text`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_GrFun_SA_1.data.earn_rate}`)))
                    Then(`I should see ${text.IncomeProtection} text`, then.textVisible(text.IncomeProtection))
                    Then(`I should see earn rate ${CPE_GIP_SA_1.data.earn_rate} text`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_GIP_SA_1.data.earn_rate}`)))
                    Then(`I should see ${text.TemporaryIncome} text`, then.textVisible(text.TemporaryIncome))
                    Then(`I should see earn rate ${CPE_TmpGIP_SA_1.data.earn_rate} text`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_TmpGIP_SA_1.data.earn_rate}`)))
                    Then(`I should see ${text.LumpSump} text`, then.textVisible(text.LumpSump))
                    Then(`I should see earn rate ${CPE_LSDC_SA_1.data.earn_rate} text`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_LSDC_SA_1.data.earn_rate}`)))
                    Then(`I should see ${text.Employerscheme} text at index 0`, then.textVisibleAtIndex(text.Employerscheme, 0))
                    Then(`I should see ${text.Employerscheme} text at index 1`, then.textVisibleAtIndex(text.Employerscheme, 1))
                    Then(`I should see ${text.Employerscheme} text at index 2`, then.textVisibleAtIndex(text.Employerscheme, 2))
                    Then(`I should see ${text.Employerscheme} text at index 3`, then.textVisibleAtIndex(text.Employerscheme, 3))
                    Then(`I should see ${text.Employerscheme} text at index 4`, then.textVisibleAtIndex(text.Employerscheme, 4))
                    break;
                case "MeGL/SpGL/GrFun":
                    Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
                    Then(`I should see ${text.lifeCoverProduct} text`, then.textVisible(text.lifeCoverProduct))
                    Then(`I should see ${CPE_MeGL_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_MeGL_SA_2.data.earn_rate}`), 0))
                    Then(`I should see ${text.FuneralCover} text`, then.textVisible(text.FuneralCover))
                    Then(`I should see ${CPE_GrFun_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_GrFun_SA_2.data.earn_rate}`), 0))
                    Then(`I should see ${CPE_SpGL_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_SpGL_SA_2.data.earn_rate}`), 0))
                    Then(`I should see ${text.Employerscheme} text at index 0`, then.textVisibleAtIndex(text.Employerscheme, 0))
                    Then(`I should see ${text.Employerscheme} text at index 1`, then.textVisibleAtIndex(text.Employerscheme, 1))
                    Then(`I should see ${text.startsSoon} text`, then.textVisible(text.startsSoon))
                    break;
                default:
                    break;
                }

            When(`I swipe from text ${text.createYumujiCTA, "up", "fast"}`, when.swipeFromText(text.createYumujiCTA, "up", "fast"), async () => {
                Then(`I should see ${text.SurveyLabel} text`, then.textVisible(`${text.SurveyLabel}`))
                Then(`I should see ${text.SurveyText} text`, then.textVisible(`${text.SurveyText}`))
                Then(`I should NOT see ${CAROUSEL_CARD} id`, then.idNotVisible(CAROUSEL_CARD))
            })
            When(`I swipe from text ${text.SurveyText} down`, when.swipeFromText(text.SurveyText, "down", "fast"), async () => {
                Then(`I should see ${firstName} ${lastName} text`, then.textVisible(`${firstName} ${lastName}`))
            })
        })
    })
}

export const ONBOARDING_YUSCREEN_SA = async (packType: string, yuCoinPower: string) => {
    
    const earnRate0 = "1"; // If product having 0 earn rate will get 1

    Then(`I should see ${text.yuCoinText} text`, then.textVisible(text.yuCoinText))
    Then(`I should see ${text.powerText} text`, then.textVisible(text.powerText))

  switch (packType) {
    case "3 products MeGL/GrFun/GIP": //will show only first 3 that user have
        Then(`I should see ${earnRate0} text`, then.textVisible(earnRate0))
        Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
        Then(`I should see ${text.lifeCoverProduct} text`, then.textVisible(text.lifeCoverProduct))
        Then(`I should see ${text.FuneralCover} text`, then.textVisible(text.FuneralCover))
        Then(`I should see ${text.IncomeProtection} text`, then.textVisible(text.IncomeProtection))
        Then(`I should see ${text.allPoweredUp} text`, then.textVisible(text.allPoweredUp))
        Then(`I should see ${text.Employerscheme} text at index 0`, then.textVisibleAtIndex(text.Employerscheme, 0))
        Then(`I should see ${text.Employerscheme} text at index 1`, then.textVisibleAtIndex(text.Employerscheme, 1))
        Then(`I should see ${text.Employerscheme} text at index 2`, then.textVisibleAtIndex(text.Employerscheme, 2))
        Then(`I should see ${CPE_MeGL_SA_1.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_MeGL_SA_1.data.earn_rate}`), 0))
        Then(`I should see ${CPE_GrFun_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_GrFun_SA_2.data.earn_rate}`), 0))
        Then(`I should see ${CPE_GIP_SA_1.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_GIP_SA_1.data.earn_rate}`), 0))
        break;
    case "3 products MeGL/SpGL/GrFun": //will show only first 3 that user have
        Then(`I should see ${earnRate0} text`, then.textVisible(earnRate0))
        Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
        Then(`I should see ${text.lifeCoverProduct} text`, then.textVisible(text.lifeCoverProduct))
        Then(`I should see ${text.FuneralCover} text`, then.textVisible(text.FuneralCover))
        Then(`I should see ${text.SpGL} text`, then.textVisible(text.SpGL))
        Then(`I should see ${text.allPoweredUp} text`, then.textVisible(text.allPoweredUp))
        Then(`I should see ${text.Employerscheme} text at index 0`, then.textVisibleAtIndex(text.Employerscheme, 0))
        Then(`I should see ${text.Employerscheme} text at index 1`, then.textVisibleAtIndex(text.Employerscheme, 1))
        Then(`I should see ${text.startsSoon} text`, then.textVisible(text.startsSoon))
        Then(`I should see ${CPE_MeGL_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_MeGL_SA_2.data.earn_rate}`), 0))
        Then(`I should see ${CPE_SpGL_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_SpGL_SA_2.data.earn_rate}`), 0))
        Then(`I should see ${CPE_GrFun_SA_2.data.earn_rate} earn rate in slot`, then.idVisible(LEFT_SIDE_TEXT_SLOT_POWER(`${CPE_GrFun_SA_2.data.earn_rate}`), 0))
        break;
    default:
      break;
    }
    Then(`I should see ${ONBOARDING_SCREEN} id`, then.idVisible(ONBOARDING_SCREEN))
    Then(`I should see ${text.protectionPowered} text`, then.textVisible(text.protectionPowered))
    Then(`I should see ${text.earnRewardsCopy} text`, then.textVisible(text.earnRewardsCopy))
    When(`When i swipe from ${text.protectionPowered}`, when.swipeFromText(text.protectionPowered, "up", "slow"), async () => {
        Then(`I should see ${text.buttonText} text`, then.textVisible(text.buttonText))
    })
}

export const PRODUCT_CHECK = async (productCard: SAProductData) => {
    When(`I tap ${productCard.productName} slot text`, when.tapText(productCard.productName), async () => {
        Then(`I should see top right close x image`, then.idVisible(BUTTON_CLOSE_HEADER("button_only")))
        Then(`I should see ${productCard.productName} header text`, then.textVisibleAtIndex(productCard.productName, 1))
        Then(`I should see ${productCard.schemeType} text`, then.textVisible(productCard.schemeType))
        Then(`I should see correct image`, then.idVisible(TOP_RIGHT_ITEM_IMAGE(productCard.rightImage)))
        Then(`I should see ${productCard.yuCoinPower} text`, then.idVisible(YUCOIN_POWER(productCard.yuCoinPower)))
        Then(`I should see ${productCard.productDescription} text`, then.textVisible(productCard.productDescription))
    })
}

export const PRODUCT_CHECK_LONG_NAME = async (productCard: SAProductData) => {
    When(`I tap ${productCard.productName} slot text`, when.tapText(productCard.productName), async () => {
        Then(`I should see top right close x image`, then.idVisible(BUTTON_CLOSE_HEADER("button_only")))
        Then(`I should see ${productCard.longname} header text`, then.textVisibleAtIndex(productCard.longname, 1))
        Then(`I should see ${productCard.schemeType} text`, then.textVisible(productCard.schemeType))
        Then(`I should see correct image`, then.idVisible(TOP_RIGHT_ITEM_IMAGE(productCard.rightImage)))
        Then(`I should see ${productCard.yuCoinPower} text`, then.idVisible(YUCOIN_POWER(productCard.yuCoinPower)))
        Then(`I should see ${productCard.productDescription} text`, then.textVisible(productCard.productDescription))
    })
}

export const KEY_INFO = async (keyInfo: keyInfo)  => {
    When(`I scroll to ${text.coverAmountsText} text`, when.scrollUntilTextVisible(PRODUCT_DETAILS_SCROLL_VIEW,text.coverAmountsText, "down"), async () => {
        Then(`I should see ${keyInfo.keyInfo} text`, then.textVisible(keyInfo.keyInfo))
        Then(`I should see ${keyInfo.membershipNumberText} text`, then.textVisible(keyInfo.membershipNumberText))
        Then(`I should see ${keyInfo.membershipNumber} text`, then.textVisible(keyInfo.membershipNumber))
        Then(`I should see ${keyInfo.startDateText} text`, then.textVisible(keyInfo.startDateText))
        Then(`I should see ${keyInfo.startDate} text`, then.textVisible(keyInfo.startDate))
        keyInfo.coveredTypeText && Then(`I should see ${keyInfo.coveredTypeText} text`, then.textVisible(keyInfo.coveredTypeText))
        keyInfo.coverType && Then(`I should see ${keyInfo.coverType} text`, then.textVisible(keyInfo.coverType))
        keyInfo.keyInfoDescription && Then(`I should see ${keyInfo.keyInfoDescription} text`, then.textVisible(keyInfo.keyInfoDescription))
    })
}

export const COVER_AMOUNTS_INFO = async (coverAmounts: coverAmounts, scrollToText = text.beneficiaresText )  => {
    When(`I scroll to ${scrollToText} text`, when.scrollUntilTextVisible(PRODUCT_DETAILS_SCROLL_VIEW,scrollToText, "down"), async () => {
        Then(`I should see ${coverAmounts.coverAmountsText} text`, then.textVisible(coverAmounts.coverAmountsText))
        Then(`I should see ${coverAmounts.youText} text`, then.textVisible(coverAmounts.youText))
        Then(`I should see ${coverAmounts.youAmmount} text`, then.textVisible(coverAmounts.youAmmount))
        coverAmounts.increaseCoverText && Then(`I should see ${coverAmounts.increaseCoverText} text`, then.textVisible(coverAmounts.increaseCoverText))
        coverAmounts.increaseCoverTextImg && Then(`I should see ${coverAmounts.increaseCoverTextImg} image`, then.idVisible(CONTENT_ITEM_BUTTON_IMAGE(coverAmounts.increaseCoverTextImg)))
        coverAmounts.child_0_12_monthsText && Then(`I should see ${coverAmounts.child_0_12_monthsText} text`, then.textVisible(coverAmounts.child_0_12_monthsText))
        coverAmounts.child_0_12_ammount && Then(`I should see ${coverAmounts.child_0_12_ammount} text`, then.textVisible(coverAmounts.child_0_12_ammount))
        coverAmounts.child_1_5_yearsText && Then(`I should see ${coverAmounts.child_1_5_yearsText} text`, then.textVisible(coverAmounts.child_1_5_yearsText))
        coverAmounts.child_1_5_ammount && Then(`I should see ${coverAmounts.child_1_5_ammount} text`, then.textVisible(coverAmounts.child_1_5_ammount))
        coverAmounts.child_6_13_yearsText && Then(`I should see ${coverAmounts.child_6_13_yearsText} text`, then.textVisible(coverAmounts.child_6_13_yearsText))
        coverAmounts.child_6_13_ammount && Then(`I should see ${coverAmounts.child_6_13_ammount} text`, then.textVisible(coverAmounts.child_6_13_ammount))
        coverAmounts.child_14_21_yearsText && Then(`I should see ${coverAmounts.child_14_21_yearsText} text`, then.textVisible(coverAmounts.child_14_21_yearsText))
        coverAmounts.child_14_21_ammount && Then(`I should see ${coverAmounts.child_14_21_ammount} text`, then.textVisible(coverAmounts.child_14_21_ammount))
        coverAmounts.disclaimer_1 && Then(`I should see ${coverAmounts.disclaimer_1} text`, then.textVisible(coverAmounts.disclaimer_1))
        coverAmounts.disclaimer_2 && Then(`I should see ${coverAmounts.disclaimer_2} text`, then.textVisible(coverAmounts.disclaimer_2))
        coverAmounts.NOincreaseCoverText && Then(`I should NOT see ${coverAmounts.NOincreaseCoverText} text`, then.textNotVisible(coverAmounts.NOincreaseCoverText))
        coverAmounts.NOincreaseCoverTextImg && Then(`I should NOT see ${coverAmounts.NOincreaseCoverTextImg} image`, then.idNotVisible(CONTENT_ITEM_BUTTON_IMAGE(coverAmounts.NOincreaseCoverTextImg)))


    })
}

export const BENEFECIARIES_INFO = async (beneficiaries: beneficiaries)  => {
    When(`I scroll to ${text.usefulLinksText} text`, when.scrollUntilTextVisible(PRODUCT_DETAILS_SCROLL_VIEW,beneficiaries.beneficiaryDescription_2, "down"), async () => {
        Then(`I should see ${beneficiaries.beneficiaresText} text`, then.textVisible(beneficiaries.beneficiaresText))
        beneficiaries.beneficiary_Name_1 && Then(`I should see ${beneficiaries.beneficiary_Name_1} text`, then.textVisible(beneficiaries.beneficiary_Name_1))
        beneficiaries.benefeciary_benefit_1 && Then(`I should see ${beneficiaries.benefeciary_benefit_1} text`, then.textVisible(beneficiaries.benefeciary_benefit_1))
        beneficiaries.beneficiary_Name_2 && Then(`I should see ${beneficiaries.beneficiary_Name_2} text`, then.textVisible(beneficiaries.beneficiary_Name_2))
        beneficiaries.benefeciary_benefit_2 && Then(`I should see ${beneficiaries.benefeciary_benefit_2} text`, then.textVisible(beneficiaries.benefeciary_benefit_2))
        beneficiaries.noBeneficiaryText && Then(`I should see ${beneficiaries.noBeneficiaryText} text`, then.textVisible(beneficiaries.noBeneficiaryText))
        beneficiaries.addBeneficiaryImage && Then(`I should see ${beneficiaries.addBeneficiaryImage} image`, then.idVisible(CONTENT_SMALL_IMAGE_CARD_URL(beneficiaries.addBeneficiaryImage)))
        Then(`I should see ${beneficiaries.beneficiaryDescription_1} text`, then.textVisible(beneficiaries.beneficiaryDescription_1))
    })
}

export const USEFUL_LINKS_INFO = async (usefulLinks: usefulLinks)  => {
    When(`I scroll to ${usefulLinks.memberCertText} id`, when.scrollUntilIdVisible(PRODUCT_DETAILS_SCROLL_VIEW,CONTENT_ITEM_BUTTON_IMAGE(usefulLinks.memberCertImg), "down"), async () => {
        usefulLinks.editBeneficiariText && Then(`I should see ${usefulLinks.editBeneficiariText} text`, then.textVisible(usefulLinks.editBeneficiariText))
        usefulLinks.editBeneficiariImg && Then(`I should see ${usefulLinks.editBeneficiariImg} image`, then.idVisible(CONTENT_ITEM_BUTTON_IMAGE(usefulLinks.editBeneficiariImg)))
        Then(`I should see ${usefulLinks.makeClaimImg} image`, then.idVisible(CONTENT_ITEM_BUTTON_IMAGE(usefulLinks.makeClaimImg)))
        Then(`I should see ${usefulLinks.makeClaimText} text`, then.textVisible(usefulLinks.makeClaimText))
        Then(`I should see ${usefulLinks.memberCertText} text`, then.textVisible(usefulLinks.memberCertText))
    })
}

export const ADDITIONAL_INFO = async (productAdditionalInfo: productAdditionalInfo)  => {
    When(`I scroll to ${productAdditionalInfo.additionalInfo_2} text`, when.scrollUntilTextVisible(PRODUCT_DETAILS_SCROLL_VIEW, productAdditionalInfo.additionalInfo_2, "down"), async () => {
        Then(`I should see ${productAdditionalInfo.additionalInfo_1} text`, then.textVisible(productAdditionalInfo.additionalInfo_1))
    })
}

export const NAVIGATE_BUTTON = async (firstTime: boolean, seed: checkButton)  => {

    const secondScreenTitle = firstTime ? seed.newRequestFormTitleText : seed.requestedFormScreenTitleText;

    When(`I scroll to ${seed.buttonName} text`, when.scrollToAndTapText(PRODUCT_DETAILS_SCROLL_VIEW, seed.buttonName, "up"), async () => {
        Then(`I should see top right close x image`, then.idVisible(SCREEN_CLOSE))
        Then(`I should see ${seed.middleImageSrc} image`, then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(seed.middleImageSrc)))
        Then(`I should see ${seed.titleText} text`, then.textVisible(seed.titleText))
        Then(`I should see ${seed.subTitle} text`, then.textVisible(seed.subTitle))
        Then(`I should see ${seed.button} button`, then.textVisible(seed.button))
    })
    // Second screen of request
    When(`I tap ${seed.button} slot text`, when.tapText(seed.button), async () => {
        Then(`I should see top right close x image on second sreen`, then.idVisible(SCREEN_CLOSE))
        Then(`I should see ${seed.middleImageSrc} image on second sreen`, then.idVisible(CONTENT_MIDDLE_ITEM_IMAGE(seed.middleImageSrc)))
        Then(`I should see ${secondScreenTitle} title text on second sreen`, then.textVisible(secondScreenTitle))
        Then(`I should see ${seed.finishFormScreenButton} button on second screen`, then.textVisible(seed.finishFormScreenButton))
    if (!firstTime){
        Then(`I should see ${seed.requestedFormScreenSubtitle} subtitle on second screen`, then.textVisible(seed.requestedFormScreenSubtitle))
    }
    })
    When(`I tap ${seed.finishFormScreenButton} button`, when.tapText(seed.finishFormScreenButton), async () => {
        Then(`I should be back to product details screen and see ${seed.buttonName} button again`, then.textVisible(seed.buttonName))
    })
}

export const CLOSE_PRODUCT_WINDOW = async () => {
    When(`I tap close x to close window`, when.tapID(BUTTON_CLOSE_HEADER("button_only")), async () => {
        Then(`I should  not see ${text.keyInfoText} text`, then.textNotVisible(text.keyInfoText))
    })
}
