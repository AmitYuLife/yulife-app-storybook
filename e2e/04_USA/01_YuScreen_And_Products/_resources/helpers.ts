import { When, Then } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when"
import * as then from "../_steps/then"
import * as text  from "./fixture";
import { V4_YUSCREEN, ALL_PRODUCTS_CONTAINER_VIEW, BACK_BUTTON, CAROUSEL_CARD_BUTTON, ONBOARDING_SCREEN, CAROUSEL_CARD, SPONSOR_LOGO_IMAGE, BOX_OPTION_TITLE, BOX_OPTION_DESCRIPTION, RIGHT_SIDE_IMAGE_BOX_OPTION, YUSCREEN_SCROLL_VIEW, LEFT_SIDE_BACKGROUD_IMAGE_SLOT, RIGHT_SIDE_IMAGE_SLOT, LEFT_SIDE_TEXT_SLOT_POWER, WELLBEING_HUB_SCREEN, TEXT_TEMPLATE, INFO_PANEL_IMAGE, PCP_LIST_DESCRIPTION, CONTENT_MIDDLE_ITEM_IMAGE, COUNTDOWN_COMPONENT, ARROW_BUTTON} from "@ids";
import { BoxOption, USProductData, YuScreenInfo } from "./types";
import { BUSINESS_ACCOUNT_USA_2, } from "04_USA/_data";
import moment from "moment";
import { BPEW_GDent_10 } from "@data";




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
        Then(`I should see Available to you`, then.textVisibleAtIndex("Available to you", 0))
    })
}

export const PRODUCT_CHECK = async (productCard: USProductData, index = 0) => {
    When(`I scroll to the product card with Find out more text for ${productCard.heading}`, when.scrollUntilIdVisibleAtIndex(ALL_PRODUCTS_CONTAINER_VIEW, CAROUSEL_CARD_BUTTON(productCard.titleMarkdown), "down", index, 0.9, 0.8), async () => {
        When(`I tap Find out more`, when.tapID(CAROUSEL_CARD_BUTTON(productCard.titleMarkdown)), async () => {
            Then(`I should see product card with description ${productCard.heading}`, then.onMoreProtectionProductsCard(productCard))
        })
    })
}

export const MORE_PRODUCTS_PRODUCT_CHECK = async (productCard: USProductData) => {
    When(`I tap the product card for ${productCard.heading}`, when.tapID(BOX_OPTION_TITLE(productCard.boxTitle)), async () => {
        Then(`I should see product card with description ${productCard.heading}`, then.onMoreProtectionProductsCard(productCard))
    })
}

export const SLOT_YU_SCREEN_PRODUCT_CHECK = async (productCard: USProductData) => {
    When("I wait", when.wait(2000), async () => {
        When(`I tap on slot ${productCard.slotAbreviation}`, when.attemptToTapSlot(productCard), async () => {
            Then(`I should see product card with description ${productCard.slotAbreviation}`, then.onMoreProtectionProductsCard(productCard))
        })
    })
}

export const SLOT_DESCRIPTION_PRODUCT_CHECK = async (productCard: USProductData) => {
    Then(`I should see correct short description of ${productCard.slotAbreviation} in carousel list`, then.onDescriptionProductCard(productCard))
}


export const LEGAL_STUFF_CHECK_AND_BACK_TO_MORE_PROTECTION = async (productCard: USProductData, screen = "All Products Carousel", hasBanners = true) => {

    When(`I tap on slot ${text.Legal_Stuff}`, when.tapText(text.Legal_Stuff), async () => {
        Then(`I should see correct legal stuff of ${productCard.heading}`, then.onLegalStuffPage(productCard))
    })
    When(`I go back from legal stuff page`, when.tapID(BACK_BUTTON), async () => {
        When(`I go back from product page details`, when.tapID(BACK_BUTTON), async () => {
            if(screen === "All Products Carousel") {
                Then(`I should see correct short description of ${productCard.slotAbreviation} in the list`, then.onDescriptionProductCard(productCard))
            } else if(screen === "pcp"){
                Then("I'm on the pcp page", then.onPCPPage(hasBanners))
            } else  {
                Then(`I should see again ${text.createYumujiCTA}`, then.textVisible(text.createYumujiCTA))
            }
        })
    })
}

export const ONBOARDING_YUSCREEN_USA = async (seed:YuScreenInfo) => {
    
    Then(`I should see ${text.yuCoinText} text`, then.textVisible(text.yuCoinText))
    Then(`I should see ${text.powerText} text`, then.textVisible(text.powerText))
    Then(`I should see ${seed.mainYuCoinPower} text`, then.textVisible(seed.mainYuCoinPower))
    seed.SlotProductTitle && Then(`I should see ${seed.SlotProductTitle} text`, then.textVisible(seed.SlotProductTitle))
    seed.SlotLeftBackgroundImgSrc && Then(`I should be able to see ${seed.SlotLeftBackgroundImgSrc} background image on left`, then.idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(seed.SlotLeftBackgroundImgSrc), 0));
    seed.SlotYuCoinPowerText && Then(`I should be able to see ${seed.SlotYuCoinPowerText} text power on left of slot`, then.idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(seed.SlotYuCoinPowerText), 0));
    //if seed data have info for second slot will run below
    seed.SecondSlotProductTitle && Then(`I should see ${seed.SecondSlotProductTitle} text`, then.textVisible(seed.SecondSlotProductTitle))
    seed.SecondSlotLeftBackgroundImgSrc && Then(`I should be able to see ${seed.SecondSlotLeftBackgroundImgSrc} background image on left`, then.idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(seed.SecondSlotLeftBackgroundImgSrc), 1));
    seed.SecondSlotLeftBackgroundImgSrc && Then(`I should be able to see ${seed.SlotYuCoinPowerText} text power on left of slot 2`, then.idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(seed.SlotYuCoinPowerText), 1));

    Then(`I should see ${ONBOARDING_SCREEN} id`, then.idVisible(ONBOARDING_SCREEN))
    Then(`I should see ${text.protectionPowered} text`, then.textVisible(text.protectionPowered))
    Then(`I should see ${text.earnRewardsCopy} text`, then.textVisible(text.earnRewardsCopy))
    When(`When i swipe from ${text.protectionPowered}`, when.swipeFromText(text.protectionPowered, "up", "slow"), async () => {
        Then(`I should see ${text.buttonText} text`, then.textVisible(text.buttonText))
    })
}
export const SKIP_YUMOJI_CREATION = async (customer: any) => {

    const firstName = customer.data.firstName;
    const lastName = customer.data.lastName;

    When(`I tap Check out my power`, when.tapText("Check out my power"), async () => {
        Then(`I should see ${text.yuMojiBuilder}`, then.textVisible(text.yuMojiBuilder))
    })
    When("I swipe down the screen", when.swipeFromText(text.yuMojiBuilder, "up", "slow"), async () => {
        When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
            Then(`I should see ${firstName} ${lastName} text`, then.textVisible(`${firstName} ${lastName}`))

        })
    })
}
export const SLOT_VISIBLE = async (seed:YuScreenInfo) => {
    When("I wait 1 seconds", when.wait(1000), async () => {
        Then(`I should see ${seed.mainYuCoinPower} yu coin power text`, then.textVisible(seed.mainYuCoinPower))
        Then(`I should see ${seed.SlotProductTitle} text`, then.textVisible(seed.SlotProductTitle))
        seed.SlotLeftBackgroundImgSrc && Then(`I should be able to see ${seed.SlotLeftBackgroundImgSrc} background image on left`, then.idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(seed.SlotLeftBackgroundImgSrc), 0));
        seed.SlotYuCoinPowerText && Then(`I should be able to see ${seed.SlotYuCoinPowerText} text power on left of slot`, then.idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(seed.SlotYuCoinPowerText), 0));
        
        seed.SecondSlotProductTitle && Then(`I should see ${seed.SecondSlotProductTitle} text`, then.textVisible(seed.SecondSlotProductTitle))
        seed.SecondSlotLeftBackgroundImgSrc && Then(`I should be able to see ${seed.SecondSlotLeftBackgroundImgSrc} background image on left`, then.idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(seed.SecondSlotLeftBackgroundImgSrc), 1));
        seed.SecondSlotLeftBackgroundImgSrc && Then(`I should be able to see ${seed.SlotYuCoinPowerText} text power on left of slot 2`, then.idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(seed.SlotYuCoinPowerText), 1));

    })
}
export const YUSCREEN_USA = async (customer: any) => {
    
    const firstName = customer.data.firstName;
    const lastName = customer.data.lastName;

    When("I wait 1 seconds", when.wait(1000), async () => {
        Then(`I should see ${firstName} ${lastName} text`, then.textVisible(`${firstName} ${lastName}`))
        Then(`I should see ${V4_YUSCREEN} id`, then.idVisible(V4_YUSCREEN))
        Then(`I should see ${text.createYumujiHeading} text`, then.textVisible(`${text.createYumujiHeading}`))
        Then(`I should see ${text.createYumujiText} text`, then.textVisible(`${text.createYumujiText}`))
        Then(`I should see ${text.createYumujiCTA} text`, then.textVisible(`${text.createYumujiCTA}`))
        Then(`I should see ${text.yuCoinText} text`, then.textVisible(`${text.yuCoinText}`))
        Then(`I should see ${text.powerText} text`, then.textVisible(`${text.powerText}`))
    
        When(`I swipe down the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyLabel, "down"), async () => {
            Then(`I should see ${text.SurveyLabel} text`, then.textVisible(`${text.SurveyLabel}`))
            Then(`I should see ${text.SurveyText} text`, then.textVisible(`${text.SurveyText}`))
            Then(`I should NOT see ${CAROUSEL_CARD} id`, then.idNotVisible(CAROUSEL_CARD))
        })
        When(`I swipe up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${firstName} ${lastName}`, "up"), async () => {
            Then(`I should see ${firstName} ${lastName} text`, then.textVisible(`${firstName} ${lastName}`))
        })
    })
}

export const BOX_OPTION_VISIBLE = async (seed: BoxOption) => {
    When(`I swipe from text ${text.createYumujiCTA, "up", "fast"}`, when.swipeFromText(text.createYumujiCTA, "up", "fast"), async () => {
        Then(`I should see ${seed.imageUrl} text`, then.idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(seed.imageUrl)))
        Then(`I should see ${seed.title} text`, then.idVisible(BOX_OPTION_TITLE(seed.title)))
        Then(`I should see ${seed.description} text`, then.idVisible(BOX_OPTION_DESCRIPTION(seed.description)))
    })
    When(`I scroll up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.powerText, "up"), async () => {
        Then(`I should see ${text.powerText} text`, then.textVisible(`${text.powerText}`))
    })
}

export const BOX_OPTION_NOT_VISIBLE = async (seed: BoxOption) => {
    When(`I swipe from text ${text.createYumujiCTA, "up", "fast"}`, when.swipeFromText(text.createYumujiCTA, "up", "fast"), async () => {
        Then(`I should NOT see ${seed.imageUrl} text`, then.idNotVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(seed.imageUrl)))
        Then(`I should NOT see ${seed.title} text`, then.idNotVisible(BOX_OPTION_TITLE(seed.title)))
        Then(`I should NOT see ${seed.description} text`, then.idNotVisible(BOX_OPTION_DESCRIPTION(seed.description)))
    })
    When(`I scroll up the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.powerText, "up"), async () => {
        Then(`I should see ${text.powerText} text`, then.textVisible(`${text.powerText}`))
    })
}

export const SPONSORED_LOGO_VISIBLE = async () => {
    When("I wait 1 seconds", when.wait(1000), async () => {
        Then(`I should see ${text.SponsoredBy} text`, then.textVisible(text.SponsoredBy))
        Then(`I should see ${SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)} sponsor image`, then.idVisible(SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)))
        Then(`I should see ${SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)} sponsor image`, then.idVisible(SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)))
        Then(`I should see ${SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)} sponsor image`, then.idVisible(SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)))
    })
}

export const SPONSORED_LOGO_NOT_VISIBLE = async () => {
    When("I wait 1 seconds", when.wait(1000), async () => {
        Then(`I should NOT see ${text.SponsoredBy} text`, then.textNotVisible(text.SponsoredBy))
        Then(`I should NOT see ${SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)} sponsor image`, then.idNotVisible(SPONSOR_LOGO_IMAGE(text.Guardian_Sponsor)))
        Then(`I should NOT see ${SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)} sponsor image`, then.idNotVisible(SPONSOR_LOGO_IMAGE(text.Yulife_Sponsor)))
        Then(`I should NOT see ${SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)} sponsor image`, then.idNotVisible(SPONSOR_LOGO_IMAGE(text.Transamerica_Sponsor)))
    })
}

export const ENROLMENT_VISIBLE = async (date:typeof BPEW_GDent_10, state = "pre" || "active") => {
    const targetDate = date.data.enrolment_end_date
    const countdownDate = state === "pre" ? moment(targetDate).subtract(1, "day").format("YYYY-MM-DD") : targetDate
    const countdownMessage = state === "pre" ? text.preEnrollmentMessage : text.enrollmentMessage
    const buttonMessage = state === "pre" ? text.preEnrollmentButtonMessage : text.activeEnrollmentButtonMessage
    When(`I swipe down the page until i see the enrollment section`, when.scrollUntilIdVisible(YUSCREEN_SCROLL_VIEW, COUNTDOWN_COMPONENT, "down"), async () => {
        Then(`I should see the correct enrollment message`, then.textVisible(`${countdownMessage} ${moment(targetDate).format("MM/DD/YYYY")}`))
        Then(`I should see right countdown with Days Hours Minutes left`, then.enrolmentEndsIn(moment(countdownDate).format("MM/DD/YYYY")))
    })
    When(`I swipe down the page`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyLabel, "down"), async () => {
        Then(`I should see the correct button message`, then.textVisible(buttonMessage))
    })
}

export const CHECK_WELLBEING_HUB = async (customer: any, seed: BoxOption) => {
    const firstName = customer.data.firstName;

    When(`I scroll down to ${seed.description}`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, seed.description, "down"), async () => {
        When(`I tap ${seed.description}`, when.tapText(seed.description), async () => {
            Then("I should be on the Wellbeing Hub screen", then.idVisible(WELLBEING_HUB_SCREEN))
            Then(`I should see Hi ${firstName} text`, then.textVisible(`Hi ${firstName}`))
            Then(`I should see Hi ${text.wellbeingHubDescription} text`, then.textVisible(text.wellbeingHubDescription))
            Then(`I should see All text`, then.textVisible("All"))
            Then("I should see Smart Health ", then.idVisible(TEXT_TEMPLATE("Smart Health")))
            Then(`I should see "Immediate access to a GP by phone or video"`, then.textVisible("Immediate access to a GP by phone or video"))
        })
        When("I tap to go back to Yu Screen", when.tapID(BACK_BUTTON), async () => {
            Then("I should not see Smart Health ", then.idNotVisible(TEXT_TEMPLATE("Smart Health")))
        })
    })
}

export const CHECK_EXPLORE_INSURANCE = async (prod: BoxOption, seed = text.ExploreInsureanceBox) => {

    When(`I scroll down to ${seed.description}`, when.scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, seed.description, "down"), async () => {
        When(`I tap ${seed.description}`, when.tapText(seed.description), async () => {
            When("I wait", when.wait(2000), async () => {
                Then("I'm on the pcp page", then.onPCPPage)
                Then("I can see the info panel", then.infoPanelVisible(true))
                Then(`I should see ${prod.imageUrl} text`, then.idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(prod.imageUrl)))
                Then(`I should see ${prod.title} text`, then.idVisible(BOX_OPTION_TITLE(prod.title)))
                Then(`I should see ${prod.description} text`, then.idVisible(BOX_OPTION_DESCRIPTION(prod.description)))
                Then("I can NOT see the arrow button to go deeper into the product info", then.idNotVisible(ARROW_BUTTON))
            })
        })
        
    })
}

export const CHECK_ENROLLMENT_OPTIONS_PRE_ACTIVE = async (prod: BoxOption) => {
    When(`I tap the button`, when.tapText(text.preEnrollmentButtonMessage), async () => {
        Then("I'm on the pcp page", then.onPCPPage)
        Then("I cannot see the info panel", then.infoPanelVisible(false))
        Then("I can see the option for the cancer insurance", then.pcpProductVisible(prod, true))
        Then("I see the arrow button to go deeper into the product info", then.idVisible(ARROW_BUTTON))
    })
}

export const CHECK_PCP_PRODUCT = async (prod: BoxOption, productCard: USProductData) => {
    When(`I tap the product`, when.tapID(BOX_OPTION_TITLE(prod.title)), async () => {
        Then("I'm on the product page for that product", then.onMoreProtectionProductsCard(productCard))
    })
}

