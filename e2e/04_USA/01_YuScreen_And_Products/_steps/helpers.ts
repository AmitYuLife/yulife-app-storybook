import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "./when"
import * as then from "./then"
import * as text  from "./fixture";
import { YUMOJI_AVATAR_YUSCREEN_V4, VIEW_TOP_RIGHT_COIN_COUNTER, TEXT_TEMPLATE, BUTTON_CLOSE, RIGHT_STATUS_ICON, YUCOIN_POWER, CONTENT_ITEM_IMAGE, V4_YUSCREEN, ALL_PRODUCTS_CONTAINER_VIEW, BACK_BUTTON, CAROUSEL_CARD_BUTTON} from "@ids";
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
