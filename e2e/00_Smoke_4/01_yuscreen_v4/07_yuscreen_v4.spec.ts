import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "@data";
import * as helper from "./_resources/helpers"
import { GdentAvailableSoon, GdentAvailableSoonProduct, level1Benefit, wellbeingButtonTitle } from "./_resources/fixture";
import * as ids from "@ids";


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

    Scenario("As a YuLifer with 6 slots i should  NOT see More protection coming soon slot and I can see the wellbeing hub on the UK YuScreen", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_48, data.AUTH_48), async () => {
            helper.ONBOARDING_YUSCREEN("3 Products Slots Started", "31")
            helper.YUSCREEN_V4(data.CUSTOMER_48, "6 Products Slots", "31", "More protection")
            helper.CREATE_DEFAULT_YUMOJI(300);
            When("I swipe up the screen", when.swipeFromText("My Wellbeing Hub", "down", "fast"), async () => {
                helper.WELLBEING_PRODUCT_VIEW(1, 31)
            })
            When("I close the Wellbeing Access page", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                When("I scroll to see the wellbeing hub", when.scrollUntilTextVisible(ids.YUSCREEN_SCROLL_VIEW, "Browse more protection", "down"), async () => {
                    Then("I should see the wellbeing hub", then.wellbeingHubVisible)
                })
            })
            When("I click on the wellbeing hub", when.tapText(wellbeingButtonTitle), async () => {
                Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN))
                Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible)
            })
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
            helper.GROUP_DENTAL_PRODUCT_VIEW("Employer scheme", "5", "Plan", "34343434")
            helper.ORDO_JOURNEY_VIEW()
            helper.FIELD_VALIDATION();
            helper.CHECKOUT_PROCESS();
        })
    })

    Scenario("As a YuLifer with Group Dental Choice product I should see correct Product Details and be able to order Ordo toothbrush", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_125, data.AUTH_125), async () => {
            Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_125, "dentalChoice", "5"))
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND("groupDental")
            helper.GROUP_DENTAL_PRODUCT_VIEW("Employer scheme", "5", "Choice", "56565656")
            helper.ORDO_JOURNEY_VIEW()
            helper.FIELD_VALIDATION();
            helper.CHECKOUT_PROCESS();
        })
    })

    Scenario("As a YuLifer with an earn rate of zero on a product, I should NOT see the earn rate in the product slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_53, data.AUTH_53, true), async () => {
            helper.ONBOARDING_YUSCREEN("0EarnRate", "1")
            helper.YUSCREEN_V4(data.CUSTOMER_53, "0EarnRateSlot", "1")
            When(`I tap the product`, when.tapText("Income Protection"), async () => {
                Then("I should not see a banner for yuCoin as it's set to 0", then.idNotVisible(ids.YUCOIN_POWER("0")))
            })
        })
    })

    Scenario("As a YuLifer with Group Dental product i should see correct policy holding countdown and benefit", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_93, data.AUTH_93), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableSoon)
            helper.ON_YU_SCREEN(data.CUSTOMER_93, GdentAvailableSoon)
            helper.PRODUCT_VIEW(GdentAvailableSoonProduct)
        })
    })

    Scenario("When I log in as a new user and go to the 2nd session, I see the pension onboarding screen", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_110, data.AUTH_110, true, "United Kingdom", false), async () => {
            When("I swipe uo", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                Then("I can see the default onboarding screen", then.textVisible('Check out my power'))
            })
        })
        When("I tap the button", when.tapText("Check out my power"), async () => {
            When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                Then("I can see the YuScreen with the pension slot", then.idVisible(ids.SLOT_TITLE("Pension Contributions")))
            })
        })
        When("I close and reopen the app", when.reloadOnly, async()=>{  
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                helper.ONBOARDING_YUSCREEN("pension", "10")
            })
        })
    })

    Scenario("When I log in as a new user, and click the slot, and go to the 2nd session, I do not see the pension onboarding screen", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_110, data.AUTH_110, true, "United Kingdom", false), async () => {
            When("I swipe uo", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                Then("I can see the default onboarding screen", then.textVisible('Check out my power'))
            })
        })
        When("I tap the button", when.tapText("Check out my power"), async () => {
            When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                Then("I can see the YuScreen with the pension slot", then.idVisible(ids.SLOT_TITLE("Pension Contributions")))
            })
        })
        When("I tap the slot", when.tapID(ids.SLOT_TITLE("Pension Contributions")), async () => {
            Then("I am on the Pension intro page", then.amOnPensionProductPage(false))
        })
        When("I close and reopen the app", when.reloadOnly, async()=>{  
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                Then("I should not see the onboarding screen", then.onYuscreenMini("Pension Contributions", data.CUSTOMER_110))
            })
        })
    })

    Scenario("I can see the onboarding pension screen when I have it enabled", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_109, data.AUTH_109, true, "United Kingdom", false), async () => {
            helper.ONBOARDING_YUSCREEN("pension", "10")
            When("I click the slot", when.tapID(ids.SLOT_TITLE("Pension Contributions")), async () => {
                Then("I can see the YuScreen with the pension slot", then.idVisible(ids.SLOT_TITLE("Pension Contributions")))
            })
            When("I tap the slot", when.tapID(ids.SLOT_TITLE("Pension Contributions")), async () => {
                Then("I am on the Pension intro page", then.amOnPensionProductPage(false))
            })
            When("I dismiss the product page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I can see the YuScreen with the pension slot", then.idVisible(ids.SLOT_TITLE("Pension Contributions")))
            })
            When("I scroll until I can see the full carousel pension item", when.scrollToCarouselItem("Mountain", "Browse more protection"), async () => {
                Then("I can see the caoursel item for pension", then.idVisible(ids.CAROUSEL_CARD_BUTTON("**Connect your Pension**")))
            })
            When("I tap the caoursel item button", when.tapID(ids.CAROUSEL_CARD_BUTTON("**Connect your Pension**")), async () => {
                Then("I am on the Pension intro page", then.amOnPensionProductPage(false))
            })
            When("I dismiss the product page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                When("I go to the home page", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                    When("I go to the earning page", when.tapYuCoinIcon, async () => {
                        When('I scroll to the smart pension modal', when.scrollUntilTextVisible(ids.TODAYS_EARNINGS, "Connect my Smart Pension", "down"), async () => {
                            Then("I can see the pension modal", then.canSeeEarningsPensionTab(false))
                        })
                    })
                })
            })
            When("I tap the info tooltip", when.tapIDAtIndex(ids.QUESTION_MARK_MODAL, 1), async () => {
                Then("I can see the pop up modal", then.canSeePensionPopUpModal)
            })
            When("I close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
                Then("I cannot see the pop up modal", then.cannotSeePensionPopUpModal)
            })
            When("I click connect my smart pension", when.tapText("Connect my Smart Pension"), async () => {
                Then("I am on the Pension intro page", then.amOnPensionProductPage(false))
            })
        })
    })

    Scenario("I cannot see the connection bonus if a user is in between connections", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_115, data.AUTH_115), async () => {
            When("I click the slot", when.tapID(ids.SLOT_TITLE("Pension Contributions")), async () => {
                Then("I am on the Pension intro page", then.amOnPensionProductPage(true))
            })
            When("I dismiss the product page", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
                Then("I can see the YuScreen with the pension slot", then.onYuscreenMini("Pension Contributions", data.CUSTOMER_115))
            })
            When("I go to the home page", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                When("I go to the earning page", when.tapYuCoinIcon, async () => {
                    When('I scroll to the smart pension modal', when.scrollUntilTextVisible(ids.TODAYS_EARNINGS, "Connect my Smart Pension", "down"), async () => {
                        Then("I can see the pension modal without the connection bonus", then.canSeeEarningsPensionTab(true))
                    })
                })
            })
        })
    })
})
