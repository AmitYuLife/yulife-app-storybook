import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import {  CUSTOMER_43, AUTH_43, CUSTOMER_44, AUTH_44, CUSTOMER_45, AUTH_45, CUSTOMER_46, AUTH_46 } from "@data";

import * as helper from "./_steps/helpers"



Feature("I am able to use the yuscreen, create, and edit an Yumoji", async () => {
    Scenario("I can create my Yumoji on new Yuscreen V4 and see no product state", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_43, AUTH_43), async () => {
            helper.ONBOARDING_YUSCREEN(CUSTOMER_43, "wellbeing only", "10")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER(CUSTOMER_43, "10")
            helper.WELLBEING_PRODUCT_VIEW("Epic", "10")
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4 and navigate to products via slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_44, AUTH_44), async () => {
            helper.ONBOARDING_YUSCREEN(CUSTOMER_44, "dentalAndPli", "5")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER(CUSTOMER_44, "5")
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.CHECK_PRODUCT_BUTTON_LINK("Dental", "Dental Insurance");
            helper.CHECK_PRODUCT_BUTTON_LINK("Life Insurance", "Personal Life Insurance");
            helper.CHECK_CAROUSEL_BUTTON_LINK("right", "From £12.99 per month", "Bupa Dental Plan for YuLife");
            helper.CHECK_CAROUSEL_BUTTON_LINK("left", "Extend your life insurance", "Life Insurance");
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, and see the exclamation point near the product i have (payment failed)", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_45, AUTH_45), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_45, "dentalActiveAndPliInactive", "6" ))
            helper.PAYMENT_FAILED()
            helper.CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED("Life Insurance")
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("dental only")
            helper.DENTAL_PRODUCT_VIEW("Epic", "0321")
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, having rejected product PLI, should see the correct slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_46, AUTH_46), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_46, "PliRejectedAndDentalInactive", "5" ))
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.REJECTED("Answers")
            helper.CHECK_PRODUCT_BUTTON_LINK("Dental", "Dental Insurance");
        })
    })
})
