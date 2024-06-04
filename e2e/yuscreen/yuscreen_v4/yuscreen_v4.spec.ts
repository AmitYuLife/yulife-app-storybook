import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario"
import * as given from "./_steps/given"
import * as then from "./_steps/then"
import * as when from "./_steps/when"
import * as data from "../_data";
import * as helper from "./_resources/helpers"
import { GdentAvailableSoon, GdentAvailableSoonProduct, yuMojiBuilder } from "./_resources/fixture";
import * as ids from "@ids";
import { CORE_REWARDS_ORDO_REWARDS } from "../_data";

Feature("I am able to use the yuscreen v4, create a yumoji and see my correct product slot details", async () => {
    Scenario("I can create my Yumoji on new Yuscreen V4 and see no product state/no pli product slot as I am permanently rejected", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_43, data.AUTH_43), async () => {
            Then(`I should see the onboarding Yuscreen and see wellbeing only`, then.onboardingYuscreenV4("wellbeing only", "10"));
        })
        When(`I tap Check out my power`, when.tapCheckOutMyPower, async () => {
            Then(`I should see the yumoji builder`, then.textVisible(yuMojiBuilder));
          })
        When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
                Then(`I should be on YuScreen V4 and see wellbeing only`, then.onYuscreenV4(data.CUSTOMER_43, "wellbeing only", "10"));
            })
        })
        helper.CREATE_DEFAULT_YUMOJI(300);
        helper.YUCOIN_POWER_CHECK(data.CUSTOMER_43, 10)
        helper.WELLBEING_PRODUCT_VIEW(10, 10)
    })

    // @flaky - [failing on bitrise, passing locally]
    ScenarioSkip("I can create my Yumoji on new Yuscreen V4, and see the exclamation point near the product i have (payment failed)", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_45, data.AUTH_45), async () => {
            When("I swipe down the screen", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                When("I tap check out my power", when.tapCheckOutMyPower, async () => {
                    When("I swipe down the screen", when.swipeFromText("Continue", "up", "slow"), async () => {
                        When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                            Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_45, "dentalActiveAndPliInactive", "6" ))
                            Then("I should see correct status icon if payment failed", then.idVisibleAtIndex(ids.RIGHT_STATUS_ICON, 0));
                        })
                    })
                })
            })
            helper.CORRECT_PRODUCT_SLOT_BACKGROUND(data.CUSTOMER_45, "dental only")
            helper.DENTAL_PRODUCT_VIEW("Epic", "0321")
        })
    })

    // @flaky - failing on bitrise, passing locally
    Scenario("As a YuLifer with less than 6 slots i should see More protection coming soon slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_49, data.AUTH_49), async () => {
            Then(`I should see the onboarding Yuscreen and see 3 Products Slots`, then.onboardingYuscreenV4("3 Products Slots", "31"))
        })
        When(`I tap check out my power`, when.tapCheckOutMyPower, async () => {
            Then(`I should see the yumoji builder`, then.textVisible(yuMojiBuilder));
          })
        When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
                Then(`I should be on YuScreen V4 and see 5 product slots`, then.onYuscreenV4(data.CUSTOMER_49, "5 Products Slots", "31"));
            })
        })
        // helper.CREATE_DEFAULT_YUMOJI(300);
        // helper.WELLBEING_PRODUCT_VIEW(1, 31)
    })

    // @flaky - could not find start date - fine locally (bitrise timezone issue?)
    ScenarioSkip("As a YuLifer with Group Dental product i should see correct Product Details and be able to order Ordo toothbrush", scenario.start, async () => {
        Given("I run the worker to acknowledge the product start date", given.productStartDateNotificationWorker(), async () => {
            When("I login as a user", when.logInAndGoToTab("yu", data.CUSTOMER_51, data.AUTH_51), async () => {
                Then(`I should see the onboarding Yuscreen and see group dental`, then.onboardingYuscreenV4("groupDental", "5"))
            })
        })
        When("I tap check out my power", when.tapCheckOutMyPower, async () => {
            When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_51, "groupDental", "5"))
            })
        })
        helper.CORRECT_PRODUCT_SLOT_BACKGROUND(data.CUSTOMER_51, "groupDental")
        helper.GROUP_DENTAL_PRODUCT_VIEW("Employer scheme", "5", "Plan", "34343434")
        helper.ORDO_JOURNEY_VIEW()
        helper.FIELD_VALIDATION();
        helper.CHECKOUT_PROCESS();
        When("I swipe to the top", when.swipeFromText("Documents", "down", "fast"), async () => {
            When("I close the tab", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                When("I go to the rewards screen", when.tapID(ids.NAV_BAR("rewards")), async () => {
                    When("I confirm my location", when.tapText("Confirm selection", 2000), async () => {
                        Then("I can see the ordo reward", then.idVisible(ids.REWARD_ITEM(CORE_REWARDS_ORDO_REWARDS.data._id)))
                    })
                })
            })
        })
    })

    // @flaky - could not find start date - fine locally (bitrise timezone issue?)
    ScenarioSkip("As a YuLifer with Group Dental Choice product I should see correct Product Details and be able to order Ordo toothbrush", scenario.start, async () => {
        Given("I run the worker to acknowledge the product start date", given.productStartDateNotificationWorker(), async () => {
            When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_125, data.AUTH_125), async () => {
                Then("I should be on the YuScreen V4", then.onYuscreenV4(data.CUSTOMER_125, "dentalChoice", "5"))
            })
        })
        helper.CORRECT_PRODUCT_SLOT_BACKGROUND(data.CUSTOMER_125, "groupDental")
        helper.GROUP_DENTAL_PRODUCT_VIEW("Employer scheme", "5", "Choice", "56565656")
        helper.ORDO_JOURNEY_VIEW()
        helper.FIELD_VALIDATION();
        helper.CHECKOUT_PROCESS();
        When("I swipe to the top", when.swipeFromText("Documents", "down", "fast"), async () => {
            When("I close the tab", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                When("I go to the rewards screen", when.tapID(ids.NAV_BAR("rewards")), async () => {
                    When("I confirm my location", when.tapText("Confirm selection", 2000), async () => {
                        Then("I can see the ordo reward", then.idVisible(ids.REWARD_ITEM(CORE_REWARDS_ORDO_REWARDS.data._id)))
                    })
                })
            })
        })
    })

    Scenario("As a YuLifer with an earn rate of zero on a product, I should NOT see the earn rate in the product slot", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_53, data.AUTH_53, true), async () => {
            Then(`I should see the onboarding Yuscreen with 0 earn rate`, then.onboardingYuscreenV4("0EarnRate", "1"))
        })
        When(`I tap Check out my power`, when.tapCheckOutMyPower, async () => {
            Then(`I should see the yumoji builder`, then.textVisible(yuMojiBuilder));
          })
        When("I swipe down the screen", when.swipeFromText("Create your Yumoji to step into the Yuniverse", "up", "slow"), async () => {
            When("I tap I'll do this later", when.tapText("I'll do this later"), async () => {
                Then(`I should be on YuScreen V4 and see 0 earn rate slots`, then.onYuscreenV4(data.CUSTOMER_53, "0EarnRateSlot", "1"));
            })
        })
        When(`I tap the product`, when.tapText("Income Protection"), async () => {
            Then("I should not see a banner for yuCoin as it's set to 0", then.idNotVisible(ids.YUCOIN_POWER("0")))
        })
    })

    Scenario("As a YuLifer with Group Dental product i should see correct policy holding countdown and benefit", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_93, data.AUTH_93), async () => {
            helper.ONBOARD_YU_SCREEN(GdentAvailableSoon(data.CPE_93_GDent))
            helper.ON_YU_SCREEN(data.CUSTOMER_93, GdentAvailableSoon(data.CPE_93_GDent))
            // @bug VBUS-408 Test expects "Bupda Dental Plan, we get "**Bupa Dental Plan** [+ Family]" - Other scenarios showing Bupda Dental plan
            // helper.PRODUCT_VIEW(GdentAvailableSoonProduct)
        })
    })

    Scenario("When I log in as a new user and go to the 2nd session, I see the pension onboarding screen", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_110, data.AUTH_110, true, "United Kingdom", false), async () => {
            When("I swipe up", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                Then("I can see the default onboarding screen", then.textVisible('Check out my power'))
            })
        })
        When("I tap the button", when.tapCheckOutMyPower, async () => {
            When("I tap I'll do this later", when.tapIllDoThisLater, async () => {
                Then("I can see the YuScreen with the pension slot", then.idVisible(ids.SLOT_TITLE("Pension Contributions")))
            })
        })
        When("I close and reopen the app", when.reloadOnly, async()=>{  
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                Then(`I should see the onboarding Yuscreen with pension contributions`, then.onboardingYuscreenV4("pension", "10"))
            })
        })
    })

    Scenario("When I log in as a new user, and click the slot, and go to the 2nd session, I do not see the pension onboarding screen", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_110, data.AUTH_110, true, "United Kingdom", false), async () => {
            When("I swipe uo", when.swipeFromText("Protection, powered up!", "up", "fast"), async () => {
                Then("I can see the default onboarding screen", then.textVisible('Check out my power'))
            })
        })
        When("I tap the button", when.tapCheckOutMyPower, async () => {
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
            Then(`I should see the onboarding Yuscreen with pension contributions`, then.onboardingYuscreenV4("pension", "10"))
        })
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

    Scenario("I can see the Today's Earnings screen with out-of-app transaction types visible", scenario.start, () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_109, data.AUTH_109, true, "United Kingdom", false), async () => {
            Then(`I should see the onboarding Yuscreen with pension contributions`, then.onboardingYuscreenV4("pension", "10"))
        })
        When("I close the onboarding screen", when.tapID(ids.BUTTON_CLOSE_ONBOARDING), async () => {
            When("I go to the home page", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                When("I go to the earning page", when.tapYuCoinIcon, async () => {
                    Then("I'm on the 'Today's Earnings' screen", then.idVisible(ids.TODAYS_EARNINGS))
                    Then("I can see the total of all my activities correctly", then.textVisible("320 YuCoin", 4000))
                })
            })
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"))
            Then("I can see I earned Bonus YuCoin", then.textVisible("Bonus YuCoin award"))
            Then("I can see I earned from a duel", then.textVisible("Duel YuCoin award"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see I earned from a survey", then.textVisible("Feedback form", 4000))
            Then("I can see I earned the right yucoin for the Bonus YuCoin", then.textVisible("200", 1500))
            Then("I can see I earned the right yucoin for the from a duel", then.textVisible("20", 1500))
            Then("I can see I earned the right yucoin for the from a survey", then.textVisible("100", 1500))
        })
    })

    Scenario("I can view locked Yumoji items, and start a challenge from them", scenario.start, () =>{
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async()=>{
            When("I skip the intro", when.goToYuScreenAndDismissIntro, async()=>{
                Then("I should be on the yuscreen", then.onYuscreen(data.CUSTOMER_1))
            })
            When("I start the yumoji builder", when.startYumojiBuilder(ids.MALE_BODY), async()=>{
                Then("I should be on the Yumoji edit screen", then.textVisible("Edit your Yumoji"))
                Then("I should see the base forest items are already unlocked", then.unlockedYumojiItemsVisible("male", "base", "forest"))
                Then("I should see a locked item", then.idVisible(ids.YUMOJI_PART_ID_STATUS("unavailable", `yumoji_male_boots_common_forest`)))
            })
            When("I tap the locked item", when.tapID(ids.YUMOJI_PART_ID_STATUS("unavailable", `yumoji_male_boots_common_forest`)), async()=>{
                Then("I should see the unlock half modal", then.yumojiItemLockedModalVisible(250))
            })
            When("I tap close", when.tapText("Close"), async()=>{
                Then("I should see the locked item again", then.idVisible(ids.YUMOJI_PART_ID_STATUS("unavailable", `yumoji_male_boots_common_forest`)))
            })
            When("I tap the locked item for a second time", when.tapID(ids.YUMOJI_PART_ID_STATUS("unavailable", `yumoji_male_boots_common_forest`)), async()=>{
                Then("I should see the item locked half modal", then.yumojiItemLockedModalVisible(250))
            })
            When("I tap take a challenge", when.tapText("Take a challenge"), async()=>{
                Then("I should be on the quest map", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)))
            })
            When("I start a challenge", when.startChallengeFromQuests(1, "Short Stroll"), async () => {
                When("I complete the challenge", when.sendSteps(444, 38000), async () => {
                    Then("I should see the challenge complete screen", then.onChallengeComplete(444, 1))
                })
            })
            When("I tap collect", when.tapText("Collect"), async () => {
                When("I tap done", when.tapText("Done"), async()=>{
                    Then("I should be back on the quest map", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)))
                })
            })
            When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async()=>{
                Then("I should be back on the yumoji builder", then.idVisible(ids.YUMOJI_PART_ID_STATUS("unavailable", `yumoji_male_boots_common_forest`)))
            })
            When("I tap the locked item for a third time", when.tapID(ids.YUMOJI_PART_ID_STATUS("unavailable", `yumoji_male_boots_common_forest`)), async()=>{
                Then("I should see this item is still locked, as I am not level 250 yet", then.yumojiItemLockedModalVisible(250))
            })
        })
    })
})
