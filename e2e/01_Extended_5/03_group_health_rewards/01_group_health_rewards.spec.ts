import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "@data"
import * as ids from "@ids";
import * as constants from "./_resources/constants"
import * as fixtures from "./_resources/fixtures"
import { getLocalisedString as t } from "@i18n";



Feature("I am able to see GHI Rewards in App", async () => {
    Scenario("I can succesfully go through the Boots and YorkTest GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_116_GHI_REWARDS, data.AUTH_116), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("0/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(4))
        })
        When("I click to see the next reward I want to unlock", when.tapTextAtIndex(constants.groupHealthRewardProgressNames[0], 1), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Boots reward tease", then.onRewardsTeasePage(fixtures.BOOTS_YORK_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 80", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(80)))
        })
        When("I tap level 80", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(80)), async () => {
            When("I start the long walk challenge", when.startChallenge("long walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 80))
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
            })
        })
        When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                When("I tap to close the tease screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
                    When("I tap to close the rewards screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                            When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                                Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("1/6"))
                            })
                        })
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(5))
        })
        When("I click to see the next reward I want to unlock", when.tapTextAtIndex(constants.groupHealthRewardProgressNames[0], 1), async () => {
            When("I tap on the YorkTest reward", when.tapRewardInList(data.CORE_REWARDS_YORK_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for YorkTest", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for YorkTest", then.onRewardsClaimPage(fixtures.YORK_REWARDS_CLAIM_PAGE_DETAILS, true))
            })
        })
        When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap on the Boots reward", when.tapRewardInList(data.CORE_REWARDS_BOOTS_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Boots", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Boots", then.onRewardsClaimPage(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS, true))
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            Then("I see the voucher options appear", then.voucherOptionsVisible(fixtures.BOOTS_GHI_VOUCHER_DETAILS))
        })
        When("I tap to buy a £5 voucher", when.tapText(constants.voucherText(fixtures.BOOTS_GHI_VOUCHER_DETAILS.vouchers[0])), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Boots and the confirmation", then.onRewardsClaimPage(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS, false, "5"))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                Then("I can see the purchase for today for Urban Massage", then.groupHealthRewardsPurchasedVisible(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS, "5"))
            })
        })
            
    })

    Scenario("I can succesfully go through the Ubrna Massage GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_117_GHI_REWARDS, data.AUTH_117), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("1/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(9))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[1]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Boots reward tease", then.onRewardsTeasePage(fixtures.URBAN_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 34", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(34)))
        })
        When("I tap level 34", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(34)), async () => {
            When("I start the long walk challenge", when.startChallenge("long walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 34))
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
            })
        })
        When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                When("I tap to close the tease screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
                    When("I tap to close the rewards screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                            When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                                Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("2/6"))
                            })
                        })
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(10))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[1]), async () => {
            When("I tap on the Urban Massage reward", when.tapRewardInList(data.CORE_REWARDS_URBAN_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Urban Massage", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Urban Massage", then.onRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, true, undefined, 3))
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Boots and the confirmation", then.onRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, false, "10"))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I tap on the Urban Massage reward", when.tapRewardInList(data.CORE_REWARDS_URBAN_GHI_REWARDS), async () => {
                Then("I should see one less voucher available for Urban Massage", then.onRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, true, undefined, 2))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                Then("I can see the purchase for today for Urban Massage", then.groupHealthRewardsPurchasedVisible(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, "10"))
            })
        })
            
    })

})