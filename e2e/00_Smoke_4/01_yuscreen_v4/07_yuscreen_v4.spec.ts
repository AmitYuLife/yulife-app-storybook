import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "@data";
import * as helper from "./_resources/helpers"
import { GdentAvailableSoon, GdentAvailableSoonProduct, level1Benefit } from "./_resources/fixture";


Feature("I am able to use the yuscreen v4, create a yumoji and see my correct product slot details", async () => {
    Scenario("I can create my Yumoji on new Yuscreen V4 and see no product state/no pli product slot as I am permanently rejected", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_43, data.AUTH_43), async () => {
            helper.ONBOARDING_YUSCREEN("wellbeing only", "10")
            helper.YUSCREEN_V4(data.CUSTOMER_43, "wellbeing only", "10")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.YUCOIN_POWER_CHECK(data.CUSTOMER_43, 10)
            helper.WELLBEING_PRODUCT_VIEW(10, 10)
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4 and navigate to products via slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_44, data.AUTH_44), async () => {
            helper.ONBOARDING_YUSCREEN("dentalAndPli", "1")
            helper.YUSCREEN_V4(data.CUSTOMER_44, "dentalAndPli", "1")
            helper.CREATE_DEFAULT_YUMOJI(520);
            helper.YUCOIN_POWER_CHECK(data.CUSTOMER_44, 1)
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.CHECK_PRODUCT_BUTTON_LINK("Dental", "Dental Insurance");
            helper.CHECK_PRODUCT_BUTTON_LINK("Life Insurance", "Personal Life Insurance");
            helper.CHECK_CAROUSEL_DENTAL_BUTTON_LINK();
            helper.CHECK_CAROUSEL_BUTTON_LINK("left", "Extend your life insurance", "Life Insurance");
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, and see the exclamation point near the product i have (payment failed)", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_45, data.AUTH_45), async () => {
            When("I swipe down the screen", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                    When("I swipe down the screen", when.swipeFromText("Continue", "up", "slow"), async () => {
                        When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                            Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_45, "dentalActiveAndPliInactive", "6" ))
                        })
                    })
                })
            })
            helper.PAYMENT_FAILED()
            helper.CHECK_OTHER_PRODUCT_WHEN_HAVE_PAYMENT_FAILED("Life Insurance")
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("dental only")
            helper.DENTAL_PRODUCT_VIEW("Epic", "0321")
        })
    })

    Scenario("I can create my Yumoji on new Yuscreen V4, having permanently rejected product PLI, should see the correct slots and carousel", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_46, data.AUTH_46), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_46, "PliPermanentlyRejectedAndDentalInactive", "5" ))
        })   
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("0 product live")
            helper.CHECK_PRODUCT_BUTTON_LINK("Dental", "Dental Insurance");
    })

    Scenario("As a YuLifer with 6 slots i should  NOT see More protection coming soon slot ", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_48, data.AUTH_48), async () => {
            helper.ONBOARDING_YUSCREEN("3 Products Slots", "31")
            helper.YUSCREEN_V4(data.CUSTOMER_48, "6 Products Slots", "31", "More protection")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.WELLBEING_PRODUCT_VIEW(1, 31)
        })
    })

    Scenario("As a YuLifer with less than 6 slots i should see More protection coming soon slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_49, data.AUTH_49), async () => {
            helper.ONBOARDING_YUSCREEN("3 Products Slots", "31")
            helper.YUSCREEN_V4(data.CUSTOMER_49, "5 Products Slots", "31", "More protection")
            helper.CREATE_DEFAULT_YUMOJI(300);
            helper.WELLBEING_PRODUCT_VIEW(1, 31)
        })
    })

    Scenario("As a YuLifer with Group Dental product i should see correct Product Details and be able to order Ordo toothbrush", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_51, data.AUTH_51), async () => {
            helper.ONBOARDING_YUSCREEN("groupDental", "5")
            When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                    Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_51, "groupDental", "5"))
                })
            })
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("groupDental")
            helper.GROUP_DENTAL_PRODUCT_VIEW("Employer Paid", "5")
            helper.ORDO_JOURNEY_VIEW()
            helper.FIELD_VALIDATION();
            helper.CHECKOUT_PROCESS();
        })
    })

    Scenario("As a YuLifer with an earn rate of zero on a product, I should NOT see the earn rate in the product slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_53, data.AUTH_53, true), async () => {
            helper.ONBOARDING_YUSCREEN("0EarnRate", "1")
            helper.YUSCREEN_V4(data.CUSTOMER_53, "0EarnRateSlot", "1")
        })
    })

    Scenario("As a YuLifer with Group Dental product i should see correct policy holding countdown and benefit", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_93, data.AUTH_93), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableSoon)
            When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
               helper.ON_YU_SCREEN(data.CUSTOMER_93, GdentAvailableSoon)
               helper.PRODUCT_VIEW(GdentAvailableSoonProduct)
               helper.COVERED_FOR_INFO(level1Benefit)
                })
            })
        })
    })
})
