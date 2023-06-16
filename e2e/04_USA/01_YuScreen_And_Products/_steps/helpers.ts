import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import * as text  from "./fixture";
import { YUMOJI_AVATAR_YUSCREEN_V4, VIEW_TOP_RIGHT_COIN_COUNTER, TEXT_TEMPLATE, BUTTON_CLOSE, RIGHT_STATUS_ICON, YUCOIN_POWER, CONTENT_ITEM_IMAGE, V4_YUSCREEN, ALL_PRODUCTS_CONTAINER_VIEW, BACK_BUTTON, CAROUSEL_CARD_BUTTON, ONBOARDING_SCREEN, CAROUSEL_CARD, SPONSOR_LOGO_IMAGE} from "@ids";
import { USProductData } from "./types";




export const YUSCREEN_USA_V4 = async (customer: any, packType: string, yuCoinPower: string, buttonText = "Check out my power") => {
    

    When(`I tap ${buttonText}`, when.tapText(buttonText), async () => {
        Then(`I should see ${text.yuMojiBuilder}`, then.textVisible(text.yuMojiBuilder))
    })
    When("I swipe down the screen", when.swipeFromText(text.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
            Then(`I should be on YuScreen V4 and see ${packType}`, then.onUSAYuscreenV4(customer, packType, yuCoinPower))
        })
    })
}

export const ONBOARDING_YUSCREEN = async (packType: string, yuCoinPower: string) => {
    Then(`I should see the onboarding Yuscreen and see ${packType}`, then.onboardingUsYuscreenV4(packType, yuCoinPower))
}


export const MORE_PROTECTION = async () => {
    
    When("I tap More protection", when.tapText("More protection"), async () => {
        Then(`I should see Find out more`, then.textVisibleAtIndex("Find out more", 0))
    })
}

export const PRODUCT_CHECK = async (productCard: USProductData, index = 0) => {
    When(`I scroll to the product card with Find out more text for ${productCard.heading}`, when.scrollUntilIdVisibleAtIndex(ALL_PRODUCTS_CONTAINER_VIEW, CAROUSEL_CARD_BUTTON(productCard.titleMarkdown), "down", index, 0.9, 0.8), async () => {
        When(`I tap Find out more`, when.tapID(CAROUSEL_CARD_BUTTON(productCard.titleMarkdown)), async () => {
            Then(`I should see product card with description ${productCard.heading}`, then.onMoreProtectionProductsCard(productCard))
        })
    })
}

export const SLOT_YU_SCREEN_PRODUCT_CHECK = async (productCard: USProductData) => {
    When(`I tap on slot ${productCard.slotAbreviation}`, when.tapText(productCard.slotAbreviation), async () => {
        Then(`I should see product card with description ${productCard.slotAbreviation}`, then.onMoreProtectionProductsCard(productCard))
    })
}

export const SLOT_DESCRIPTION_PRODUCT_CHECK = async (productCard: USProductData) => {
    Then(`I should see correct short description of ${productCard.slotAbreviation} in carousel list`, then.onDescriptionProductCard(productCard))
}


export const LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION = async (productCard: USProductData, screen = "All Products Carousel" ) => {

    When(`I tap on slot ${text.Legal_Stuff}`, when.tapText(text.Legal_Stuff), async () => {
        Then(`I should see correct legal stuff of ${productCard.heading}`, then.onLegalStuffPage(productCard))
        When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
            When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
                if(screen === "All Products Carousel") {
                    Then(`I should see correct short description of ${productCard.slotAbreviation} in carousel list`, then.onDescriptionProductCard(productCard))
                } else  {
                    Then(`I should see again ${text.createYumujiCTA}`, then.textVisible(text.createYumujiCTA))
                }
            })
        })
    })
}

export const ONBOARDING_YUSCREEN_USA = async (packType: string, yuCoinPower: string) => {
    
    const earnRate0 = "1"; // If product having 0 earn rate will get 1

    Then(`I should see ${text.yuCoinText} text`, then.textVisible(text.yuCoinText))
    Then(`I should see ${text.powerText} text`, then.textVisible(text.powerText))

  switch (packType) {
    case "GAP/VIS": //will show only first 3 that user have
        Then(`I should see ${earnRate0} text`, then.textVisible(earnRate0))
        Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
        Then(`I should see ${text.Gap} text`, then.textVisible(text.Gap))
        Then(`I should see ${text.Guardian_VIS.heading} text`, then.textVisible(text.Guardian_VIS.heading))
        break;
    case "GAP": //will show only first 3 that user have
        Then(`I should see ${earnRate0} text`, then.textVisible(earnRate0))
        Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
        Then(`I should see ${text.Gap} text`, then.textVisible(text.Gap))
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

export const YUSCREEN_USA = async (customer: any, packType: string, yuCoinPower: string, buttonText = "Check out my power") => {

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
                case "GAP/VIS":
                    Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
                    Then(`I should see ${text.Gap} text`, then.textVisible(text.Gap))
                    Then(`I should see ${text.Guardian_VIS.heading} text`, then.textVisible(text.Guardian_VIS.heading))
                    Then(`I should see ${text.SponsoredBy} text`, then.textVisible(text.SponsoredBy))
                    Then(`I should see ${SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)} sponsor image`, then.idVisible(SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)))
                    Then(`I should see ${SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)} sponsor image`, then.idVisible(SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)))
                    Then(`I should see ${SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)} sponsor image`, then.idVisible(SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)))
                    break;
                case "GAP":
                    Then(`I should see ${yuCoinPower} text`, then.textVisible(yuCoinPower))
                    Then(`I should see ${text.Gap} text`, then.textVisible(text.Gap))
                    Then(`I should NOT see ${text.SponsoredBy} text`, then.textNotVisible(text.SponsoredBy))
                    Then(`I should NOT see ${SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)} sponsor image`, then.idNotVisible(SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)))
                    Then(`I should NOT see ${SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)} sponsor image`, then.idNotVisible(SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)))
                    Then(`I should NOT see ${SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)} sponsor image`, then.idNotVisible(SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)))
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
