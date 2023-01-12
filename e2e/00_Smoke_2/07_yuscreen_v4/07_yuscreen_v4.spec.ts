import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import {  CUSTOMER_43, AUTH_43, CUSTOMER_44, AUTH_44, CUSTOMER_45, AUTH_45, CUSTOMER_46, AUTH_46, CUSTOMER_48, AUTH_48, CUSTOMER_49, AUTH_49, CUSTOMER_51, AUTH_51, CUSTOMER_53, AUTH_53, CPE_48_WELLBEING, CUSTOMER_73, AUTH_73 } from "@data";
import { AVATAR_ITEM, RIGHT_STATUS_ICON, BACKGROUND_COLOUR_PRODUCT, ONBOARDING_SCREEN, YUCOIN_POWER, TEXT_TEMPLATE, YUSCREEN_AVATAR, SURVEY_SCREEN, SURVEY_TEXT_BOX, CHECK_BOX_STATE } from "@ids"


import * as helper from "./_steps/helpers"


Feature("I am able to use the yuscreen v4, create a yumoji and see my correct product slot details", async () => {
    Scenario("I can create my Yumoji on new Yuscreen V4 and see no product state/no pli product slot as I am permanently rejected", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_43, AUTH_43), async () => {
            helper.ONBOARDING_YUSCREEN("wellbeing only", "10")
            helper.YUSCREEN_V4(CUSTOMER_43, "wellbeing only", "10")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER_CHECK(CUSTOMER_43, 10)
            helper.WELLBEING_PRODUCT_VIEW("Epic", 10, 10)
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4 and navigate to products via slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_44, AUTH_44), async () => {
            helper.ONBOARDING_YUSCREEN("dentalAndPli", "1")
            helper.YUSCREEN_V4(CUSTOMER_44, "dentalAndPli", "1")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER_CHECK(CUSTOMER_44, 1)
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.CHECK_PRODUCT_BUTTON_LINK("Fill the gap with Dental", "Dental Insurance");
            helper.CHECK_PRODUCT_BUTTON_LINK("Add Life insurance", "Personal Life Insurance");
            helper.CHECK_CAROUSEL_DENTAL_BUTTON_LINK();
            helper.CHECK_CAROUSEL_BUTTON_LINK("left", "Extend your life insurance", "Life Insurance");
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, and see the exclamation point near the product i have (payment failed)", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_45, AUTH_45), async () => {
            When("I swipe down the screen", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                    When("I swipe down the screen", when.swipeFromText("Continue", "up", "slow"), async () => {
                        When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_45, "dentalActiveAndPliInactive", "6" ))
                        })
                    })
                })
            })
            helper.PAYMENT_FAILED()
            helper.CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED("Add Life insurance")
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("dental only")
            helper.DENTAL_PRODUCT_VIEW("Epic", "0321")
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, having permanently rejected product PLI, should see the correct slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_46, AUTH_46), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_46, "PliPermanentlyRejectedAndDentalInactive", "5" ))
        })   
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.CHECK_PRODUCT_BUTTON_LINK("Fill the gap with Dental", "Dental Insurance");
    })

    Scenario("As a YuLifer with 6 slots i should  NOT see More protection coming soon slot ", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_48, AUTH_48), async () => {
            helper.ONBOARDING_YUSCREEN("3 Products Slots", "31")
            helper.YUSCREEN_V4(CUSTOMER_48, "6 Products Slots", "31", "More protection")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.WELLBEING_PRODUCT_VIEW("Epic", 1, 31)
        })
    })

    Scenario("As a YuLifer with less than 6 slots i should see More protection coming soon slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_49, AUTH_49), async () => {
            helper.ONBOARDING_YUSCREEN("3 Products Slots", "31")
            helper.YUSCREEN_V4(CUSTOMER_49, "5 Products Slots", "31", "More protection")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.WELLBEING_PRODUCT_VIEW("Epic", 1, 31)
        })
    })

    Scenario("As a YuLifer with Group Dental product i should see correct Product Details and be able to order Ordo toothbrush", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_51, AUTH_51), async () => {
            helper.ONBOARDING_YUSCREEN("groupDental", "5")
            When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                    Then("I should be on the YuScreen V4", then.onYuscreenV4(CUSTOMER_51, "groupDental", "5"))
                })
            })
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("groupDental")
            helper.GROUP_DENTAL_PRODUCT_VIEW("Epic", "5")
            helper.ORDO_JOURNEY_VIEW()
        })
    })

    Scenario("As a YuLifer with Zero Earn Rate i should NOT see earnRate in productSlot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", CUSTOMER_53, AUTH_53, true, "United States"), async () => {
            helper.ONBOARDING_YUSCREEN("0EarnRate", "1")
            helper.YUSCREEN_V4(CUSTOMER_53, "0EarnRateSlot", "1")
        })
    })

})
