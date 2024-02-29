import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "@data"
import * as ids from "@ids";
import * as constants from "./_resources/constants"
import * as fixtures from "./_resources/fixtures"
import { getLocalisedString as t } from "@i18n";
import { CORE_REWARDS_URBAN_GHI_REWARDS } from "@data";
import moment from "moment";
import * as helpers from "./_resources/helpers"



Feature("I am able to see GHI Rewards in App", async () => {
    // @bug blank yuscreen prevents GHI_REWARD_ICON from matching - commented out assertions
    Scenario("I can succesfully go through the Boots and YorkTest GHI Rewards journeys and with the toggle can see half modals for level teases", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_116_GHI_REWARDS, data.AUTH_116), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
                Then("I should see the more rewards ahead modal as this employee has the feature toggle on", then.moreRewardsAheadModalVisible(false))
                Then("I shouldn't see the group health rewards heading as the feature toggle is hiding them", then.textNotVisible(constants.groupHealthRewardsHeading))
            })
        })
        When("I click to learn more", when.tapText(constants.learnMoreButton), async () => {
            Then("I should be on the GHI rewards learn more page", then.onGHIRewardsLearnMorePage(true, "0", data.GOAL_PARTICIPATION_5_GHI_REWARDS.data.endDate))
        })
        helpers.carouselScroll(constants.groupHealthRewardCarouselNames)()
        When("I scroll to the bottom of the page", when.swipeFromText(constants.learnMorePageHeader, "up", "fast"), async () => {
            When("I click on the first FAQ", when.tapText(constants.learnMoreFAQ1), async () => {
                Then("I am on the FAQ page for the first FAQ", then.onFAQPage(constants.learnMoreFAQPage1))
            })
        })
        When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click on the second FAQ", when.tapText(constants.learnMoreFAQ2), async () => {
                Then("I am on the FAQ page for the second FAQ", then.onFAQPage(constants.learnMoreFAQPage2))
            })
        })
        When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click on the third FAQ", when.tapText(constants.learnMoreFAQ3), async () => {
                Then("I am on the FAQ page for the third FAQ", then.onFAQPage(constants.learnMoreFAQPage3))
            })
        })
        When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click to go back to the product details", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
                When("I swipe to the top", when.swipeFromText("FAQs", "down", "fast"), async () => {
                    When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                        When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
                            Then("I can see the game progress modal with the correct info", then.rewardStoreGameProgressVisible("0", data.GOAL_PARTICIPATION_5_GHI_REWARDS.data.endDate))
                        })
                    })
                })
            })
        })
        When("I tap on the Boots reward", when.tapRewardInList(data.CORE_REWARDS_BOOTS_GHI_REWARDS), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Boots reward tease", then.onRewardsTeasePage(fixtures.BOOTS_YORK_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I go back to the rewards screen", when.tryTapIdMultipleIndexes(ids.BUTTON_CLOSE, 3), async () => {
            Then("I should see the new tease text for unlocked items", then.textVisibleAtIndex("Level up to unlock!", 0))
        })
        When("I tap on the YorkTest reward", when.tapRewardInList(data.CORE_REWARDS_YORK_GHI_REWARDS), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the York reward tease", then.onRewardsTeasePage(fixtures.BOOTS_YORK_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 80 on the quest map", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(80)))
        })
        When("I go to the yu screen", when.tapID(ids.NAV_BAR("yu")), async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                When("I scroll until I can see all the learn more modal", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_2, "down"), async () => {
                    When("I click to learn more", when.tapText(constants.learnMoreButton), async () => {
                        When("I tap to take a challenge", when.tapText(constants.learnMorePageButton), async () => {
                            When("I wait to be redirected", when.wait(5000), async () => {
                                Then("I appear on the challenge screen", then.idVisible(ids.CHALLENGE_SCREEN))
                            })
                        })
                    })
                })
            })
        }) 
        When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            Then("I should see level 80", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(80)))
            // Then("I should see the reward icon on the next level", then.idVisible(ids.GHI_REWARD_ICON("80")))
        })
        When("I tap level 81", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(81)), async () => {
            Then("I see the half modal for level 81 being locked as this user has the toggle switched on", then.lockedLevelHalfModalVisible(81, false, true,))
        })
        When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
            When("I tap level 85", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(85)), async () => {
                Then("I see the half modal for level 85 being locked as this user has the toggle switched on", then.lockedLevelHalfModalVisible(85, true, true, "3 x Urban Massage Vouchers", "4 / 10"))
            })
        })
        When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
            When("I tap level 80", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(80)), async () => {
                Then("I should see a screen telling me to take a challenge to unlock a my reward", then.unlockedLevelHalfModalVisible("Exclusive Discounts", "4 / 5"))
            })
        })
        When("I tap the Let's go button to proceed", when.tapText("Let's go!"), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 80))
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
                Then("I should see the reward modal on the streak screen", then.rewardGameStreakModalVisible(true, constants.groupHealthRewardCarouselNames[0], "5 / 5"))
            })
        })
        When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
            When("I tap level 85 again", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(85)), async () => {
                Then("I see the half modal for level 85 being locked and the hint is gone due to me unlocking a reward", then.lockedLevelHalfModalVisible(85, true, false, "3 x Urban Massage Vouchers", "5 / 10"))
            })
        })
        When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the learn more modal", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_2, "down"), async () => {
                        When("I click to learn more", when.tapText(constants.learnMoreButton), async () => {
                            Then("I should be on the GHI rewards learn more page", then.onGHIRewardsLearnMorePage(true, "1", data.GOAL_PARTICIPATION_5_GHI_REWARDS.data.endDate))
                        })
                    })
                })
            })
        })
        When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I swipe to the top", when.swipeFromText("FAQs", "down", "fast"), async () => {
                When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                    When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
                        Then("I can see the game progress modal with the correct info", then.rewardStoreGameProgressVisible("1", data.GOAL_PARTICIPATION_5_GHI_REWARDS.data.endDate))
                    })
                })
            })
        })
        When("I tap on the YorkTest reward", when.tapRewardInList(data.CORE_REWARDS_YORK_GHI_REWARDS), async () => {
            Then("I should be on the rewards page for YorkTest", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see all the reward information for YorkTest", then.onBootsAndYorkRewardsClaimPage(fixtures.YORK_REWARDS_CLAIM_PAGE_DETAILS, true))
        })
        When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap on the Boots reward", when.tapRewardInList(data.CORE_REWARDS_BOOTS_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Boots", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Boots", then.onBootsAndYorkRewardsClaimPage(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS, true))
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            Then("I see the voucher options appear", then.voucherOptionsVisible(fixtures.BOOTS_GHI_VOUCHER_DETAILS))
        })
        When("I tap to buy a £5 voucher", when.tapText(constants.voucherText(fixtures.BOOTS_GHI_VOUCHER_DETAILS.vouchers[0])), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Boots and the confirmation", then.onBootsAndYorkRewardsClaimPage(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS, false, "5"))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                Then("I can see the purchase for today for the boots voucher", then.groupHealthRewardsPurchasedVisible(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS))
            })
        })
     })

    Scenario("I can succesfully go through the Urban Massage GHI Rewards journeys and the GHI hourney levels up when in Yuniversal levels", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_117_GHI_REWARDS, data.AUTH_117), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_2));
            })
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("1/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(9))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[1]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Urban reward tease", then.onRewardsTeasePage(fixtures.URBAN_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(1)))
            Then("I should see the reward icon on the next level in Yuniversal", then.idVisible(ids.GHI_REWARD_ICON("I")))
        })
        When("I tap level 1 button", when.tapYuniverseLevelForFirstTime(187, 537), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 40000), async () => {
                    Then("I should see the well done screen", then.textVisible(t("Collect")))
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("2/6"))
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(10))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[1]), async () => {
            When("I tap on the Urban reward", when.tapRewardInList(data.CORE_REWARDS_URBAN_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Urban Massage", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Urban Massage", then.onUrbanRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, true, undefined, 3))
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Urban and the confirmation", then.onUrbanRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, false, "10"))
                // @update email function not working and causing timeouts
                //Then("I can see the correct email has been received", then.GHIRewardEmailReceived(data.CUSTOMER_117_GHI_REWARDS.data.email, constants.urbanMassageEmailSubject))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I tap on the Urban Massage reward", when.tapRewardInList(data.CORE_REWARDS_URBAN_GHI_REWARDS), async () => {
                Then("I should see one less voucher available for Urban Massage", then.onUrbanRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, true, undefined, 2))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                Then("I can see the purchase for today for Urban Massage", then.groupHealthRewardsPurchasedVisible(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS))
            })
        })
    })

    Scenario("I can succesfully go through the Thriva GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_118_GHI_REWARDS, data.AUTH_118), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_2));
            })
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("2/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(49))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[2]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Thriva reward tease", then.onRewardsTeasePage(fixtures.THRIVA_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 123", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(123)))
        })
        When("I tap level 123", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(123)), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 123))
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("3/6"))
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(50))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[2]), async () => {
            When("I tap on the Thriva reward", when.tapRewardInList(data.CORE_REWARDS_THRIVA_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Thriva", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Thriva", then.onThrivaRewardsClaimPage(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS, true, 1))
            })
        })
        When("I click to claim my kit", when.tapText(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Thriva and the confirmation", then.onThrivaRewardsClaimPage(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS, false))
                // @update email function not working and causing timeouts
                // Then("I can see the correct email has been received", then.GHIRewardEmailReceived(data.CUSTOMER_118_GHI_REWARDS.data.email, constants.thrivaEmailSubject))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I tap on the Thriva reward", when.tapRewardInList(data.CORE_REWARDS_THRIVA_GHI_REWARDS), async () => {
                Then("I should see I've used all my vouchers", then.onThrivaRewardsClaimPage(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS, true, 0))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I scroll to the top", when.scrollUntilTextVisible(ids.REWARDS_LIST_SCREEN_SCROLL, "Purchased", "up"), async () => {
                When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                    Then("I can see the purchase for today for Thriva", then.groupHealthRewardsPurchasedVisible(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS))
                })
            })
        })
    })

    // @flaky [works locally - on runners struggles with the form]
    ScenarioSkip("I can succesfully go through the Living DNA GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_119_GHI_REWARDS, data.AUTH_119), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_2));
            })
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("3/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(99))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[3]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Living DNA reward tease", then.onRewardsTeasePage(fixtures.LIVING_DNA_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 211", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(211)))
        })
        When("I tap level 211", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(211)), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 211))
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("4/6"))
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(100))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[3]), async () => {
            When("I tap on the Living DNA reward", when.tapRewardInList(data.CORE_REWARDS_LIVING_DNA_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Living DNA", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Living DNA", then.onLivingDNARewardsClaimPage(fixtures.LIVING_DNA_REWARDS_CLAIM_PAGE_DETAILS, true))
            })
        })
        When("I click to claim my kit", when.tapText(fixtures.LIVING_DNA_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            Then("I appear on the Thriva important notes page", then.importantNotesPageVisible(fixtures.LIVING_DNA_IMPORTANT_NOTES_DETAILS))
        })
        When("I click to fill in my details", when.tapText(constants.importantNotesButtonText), async () => {
            Then("I appear on the Living DNA details page", then.livingDNADetailsPageVisible)
        })
        When("I type a first name that is too short", when.typeViaID(ids.CONTENT_ITEM_INPUT("firstName"), "J"), async () => {
            When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("lastName")), async () => {
                Then("I see a warning about the name being too short", then.textVisible("Must be between 2 and 35 characters"))
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("firstName")), async () => {
            When("I type a first name that is fine", when.typeViaID(ids.CONTENT_ITEM_INPUT("firstName"), "James"), async () => {
                When("I type a last name that is too short", when.typeViaID(ids.CONTENT_ITEM_INPUT("lastName"), "R"), async () => {
                    When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("address1")), async () => {
                        Then("I see a warning about the name being too short", then.textVisible("Must be between 2 and 35 characters"))
                    })
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("lastName")), async () => {
            When("I type a last name that is fine", when.typeViaID(ids.CONTENT_ITEM_INPUT("lastName"), "Rogers"), async () => {
                When("I type a first line address that is fine", when.typeViaID(ids.CONTENT_ITEM_INPUT("address1"), "Rogers' House"), async () => {
                    When("I type a town that is fine", when.typeViaID(ids.CONTENT_ITEM_INPUT("town"), "London"), async () => {
                        When("I scroll to the bottom of the page", when.scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, "Submit", "down"), async () => {
                            When("I type a postcode that is incorrect", when.typeViaID(ids.CONTENT_ITEM_INPUT("postcode"), "London"), async () => {
                                When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("email")), async () => {
                                    Then("I see a warning about the postcode not being valid", then.textVisible("Please enter a valid UK postcode"))
                                })
                            })
                        })
                    })
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("postcode")), async () => {
            When("I type a good postcode", when.typeViaID(ids.CONTENT_ITEM_INPUT("postcode"), "EC1Y8RQ"), async () => {
                When("I type a bad email", when.typeViaID(ids.CONTENT_ITEM_INPUT("email"), "RogerzEmailRulez"), async () => {
                    When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("postcode")), async () => {
                        Then("I see a warning about the email not being valid", then.textVisible("Please enter a valid email"))
                    })
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("email")), async () => {
            When("I type a good email", when.typeViaID(ids.CONTENT_ITEM_INPUT("email"), "rogerstest@fakeemail.com"), async () => {
                When("I type a word in the phone number entry", when.typeViaID(ids.CONTENT_ITEM_INPUT("phone"), "James"), async () => {
                    When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("postcode")), async () => {
                        Then("I see a warning about the email not being valid", then.textVisible("Please enter a valid contact number"))
                    })
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("phone")), async () => {
            When("I type a phone number that's too short", when.typeViaID(ids.CONTENT_ITEM_INPUT("phone"), "123"), async () => {
                When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("postcode")), async () => {
                    Then("I see a warning about the email not being valid", then.textVisible("Please enter a valid contact number"))
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("phone")), async () => {
            When("I type a phone number that's too long", when.typeViaID(ids.CONTENT_ITEM_INPUT("phone"), "071234567891"), async () => {
                When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("postcode")), async () => {
                    Then("I see a warning about the email not being valid", then.textVisible("Please enter a valid contact number"))
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("phone")), async () => {
            When("I type a phone number that is the correct length but doesn't start with 07", when.typeViaID(ids.CONTENT_ITEM_INPUT("phone"), "12345678912"), async () => {
                When("I tap a different input", when.tapID(ids.CONTENT_ITEM_INPUT("postcode")), async () => {
                    Then("I see a warning about the email not being valid", then.textVisible("Please enter a valid contact number"))
                })
            })
        })
        When("I clear the field", when.clearFieldByID(ids.CONTENT_ITEM_INPUT("phone")), async () => {
            When("I type a valid phone number", when.typeViaID(ids.CONTENT_ITEM_INPUT("phone"), "07123 456789"), async () => {
                When("I type a valid county", when.typeViaID(ids.CONTENT_ITEM_INPUT("county"), "London"), async () => {
                    When("I tap to submit", when.tapText("Submit"), async () => {
                        When("I wait for ten seconds", when.wait(10000), async () => {
                            Then("I can see the Living DNA kit is en route", then.kitOrderedScreenVisible(constants.livingDNASuccessHeader, constants.livingDNADeliveryMessages))
                        })
                    })
                })
            })
        })
        When("I click the button", when.tapText(t("Got it!")), async () => { 
            Then("I can see I have claimed the reward", then.onLivingDNARewardsClaimPage(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS, false))
        })
        When("I click to see my voucher", when.tapText(t("View vouchers")), async () => {
            Then("I can see the purchase for today for Living DNA", then.groupHealthRewardsPurchasedVisible(fixtures.LIVING_DNA_REWARDS_CLAIM_PAGE_DETAILS))
        })
    })
    // @flaky - can't find countdown_54mins on bitrise, possible timezone issue? Passing locally
    ScenarioSkip("I can succesfully go through the Bupa GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_120_GHI_REWARDS, data.AUTH_120), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_2));
            })
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("4/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(149))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[4]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Bupa reward tease", then.onRewardsTeasePage(fixtures.BUPA_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 177", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(177)))
        })
        When("I tap level 178", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(177)), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 177))
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("5/6"))
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(150))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[4]), async () => {
            When("I tap on the Bupa reward", when.tapRewardInList(data.CORE_REWARDS_BUPA_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Bupa", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Bupa", then.onBupaRewardsClaimPage(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS, true, 1))
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Bupa and the confirmation", then.onBupaRewardsClaimPage(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS, false, 1))
                Then("I can see the correct email has been received", then.GHIRewardEmailReceived(data.CUSTOMER_120_GHI_REWARDS.data.email, constants.bupaEmailSubject))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I tap on the Bupa reward", when.tapRewardInList(data.CORE_REWARDS_BUPA_GHI_REWARDS), async () => {
                Then("I should see no more vouchers for Bupa", then.onBupaRewardsClaimPage(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS, true, 0))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                Then("I can see the purchase for today for Bupa", then.groupHealthRewardsPurchasedVisible(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS))
            })
        })
    })

    Scenario("I can succesfully go through the Garmin Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_121_GHI_REWARDS, data.AUTH_121), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_2));
            })
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("5/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(199))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[5]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Garmin reward tease", then.onRewardsTeasePage(fixtures.GARMIN_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 241", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(241)))
        })
        When("I tap level 241", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(241)), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 241))
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("6/6"))
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(200))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[5]), async () => {
            When("I tap on the Garmin reward", when.tapRewardInList(data.CORE_REWARDS_GARMIN_GHI_REWARDS), async () => {
                Then("I should be on the rewards page for Garmin", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see all the reward information for Garmin", then.onGarminRewardsClaimPage(fixtures.GARMIN_REWARDS_CLAIM_PAGE_DETAILS, true, 1))
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            Then("I should see I have a choice to select a reward", then.textVisible(constants.selectReward))
            Then("I should see I have a choice to choose Garmin", then.textVisible(constants.chooseGarmin))
            Then("I should see I have a choice to choose a GOSH donation", then.textVisible(constants.chooseGOSH))
            Then("I should see I have a choice to cancel", then.textVisible(t("Cancel")))
        })
        When("I choose to get my Garmin", when.tapText(constants.chooseGarmin), async () => {
            When("I tap confirm", when.tapText(t("Confirm")), async () => {
                Then("I should see the reward information for Garmin and the confirmation", then.onGarminRewardsClaimPage(fixtures.GARMIN_REWARDS_CLAIM_PAGE_DETAILS, false, 1))
                Then("I can see the correct email has been received", then.GHIRewardEmailReceived(data.CUSTOMER_121_GHI_REWARDS.data.email, constants.garminEmailSubject))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I tap on the Garmin reward", when.tapRewardInList(data.CORE_REWARDS_GARMIN_GHI_REWARDS), async () => {
                Then("I should see no more vouchers for Garmin", then.onGarminRewardsClaimPage(fixtures.GARMIN_REWARDS_CLAIM_PAGE_DETAILS, true, 0))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I scroll to the top", when.scrollUntilTextVisible(ids.REWARDS_LIST_SCREEN_SCROLL, "Purchased", "up"), async () => {
                When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                    Then("I can see the purchase for today for Garmin", then.groupHealthRewardsPurchasedVisible(fixtures.GARMIN_REWARDS_CLAIM_PAGE_DETAILS))
                })
            })
        })
    })

    Scenario("I can succesfully go through the GOSH Rewards journeys and see the new streak information", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_127_GHI_REWARDS, data.AUTH_127), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_2));
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("5/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(199))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[5]), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Garmin reward tease", then.onRewardsTeasePage(fixtures.GARMIN_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 241", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(241)))
        })
        When("I tap level 241", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(241)), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                    Then("I should see the well done screen", then.onChallengeComplete(3050, 241))
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("6/6"))
                    })
                })
            })
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(200))
        })
        When("I click to see the next reward I want to unlock", when.tapText(constants.groupHealthRewardProgressNames[5]), async () => {
            When("I click confirm selection", when.tapText("Confirm selection"), async () => {
                When("I tap on the Garmin reward", when.tapRewardInList(data.CORE_REWARDS_GARMIN_GHI_REWARDS), async () => {
                    Then("I should be on the rewards page for Garmin", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                    Then("I should see all the reward information for Garmin", then.onGarminRewardsClaimPage(fixtures.GARMIN_REWARDS_CLAIM_PAGE_DETAILS, true, 1))
                })
            })
        })
        When("I click to claim my voucher", when.tapText(fixtures.BUPA_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
            Then("I should see I have a choice to select a reward", then.textVisible(constants.selectReward))
            Then("I should see I have a choice to choose Garmin", then.textVisible(constants.chooseGarmin))
            Then("I should see I have a choice to choose a GOSH donation", then.textVisible(constants.chooseGOSH))
            Then("I should see I have a choice to cancel", then.textVisible(t("Cancel")))
        })
        When("I choose to donate to GOSH", when.tapText(constants.chooseGOSH), async () => {
            Then("I see the GOSH confirmation modal", then.goshConfirmationModalVisible)
        })
        When("I tap to make a donation", when.tapText(constants.makeDonation), async () => {
            Then("I should see the reward information for GOSH and the confirmation", then.onGOSHRewardsClaimPage)
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I tap on the Garmin reward", when.tapRewardInList(data.CORE_REWARDS_GARMIN_GHI_REWARDS), async () => {
                Then("I should see no more vouchers for Garmin", then.onGarminRewardsClaimPage(fixtures.GARMIN_REWARDS_CLAIM_PAGE_DETAILS, true, 0))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I scroll to the top", when.scrollUntilTextVisible(ids.REWARDS_LIST_SCREEN_SCROLL, "Purchased", "up"), async () => {
                When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
                    Then("I can see the purchase for today for Garmin", then.groupHealthRewardsPurchasedVisible())
                })
            })
        })
    })

    Scenario("Users can still see vouchers they didn't use after they have left a company with the game active", scenario.start, async () => {
        Given("I deactivated the cbp for the expired product", given.archiveCustomerBusinessProductsByDate(moment().format("YYYY-MM-DD")), async () => {
            When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_130_GHI_LEAVER, data.AUTH_130), async () => {
                When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
                    Then("I should see the Keepsake product", then.textVisible('Keepsake'))
                })
            })
        })
        When("I go to rewards", when.tapID(ids.NAV_BAR("rewards")), async () => {
            Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 2000))
            Then("I can see the urban massage reward still, as I have one remaining voucher", then.idVisible(ids.REWARD_ITEM(CORE_REWARDS_URBAN_GHI_REWARDS.data._id)))
            Then("I can't see the other GHI rewards from the game", then.multipleRewardsNotVisible(constants.ghiRewardIdsMinusUrban))
        })
        When("I tap on the Urban reward", when.tapRewardInList(data.CORE_REWARDS_URBAN_GHI_REWARDS), async () => {
            When("I scroll to the button to claim", when.scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS.buttonText, "down"), async () => {
                When("I click to claim my voucher", when.tapText(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
                    When("I tap confirm", when.tapText(t("Confirm")), async () => {
                        Then("I should see the reward information for Urban and the confirmation", then.onUrbanRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, false, "10"))
                    })
                })
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I wait", when.wait(3000), async () => {
                Then("I can't see the urban massage reward, as I have used my remaining voucher", then.idNotVisible(ids.REWARD_ITEM(CORE_REWARDS_URBAN_GHI_REWARDS.data._id)))
            })
        })
        When("I click to see the purchase history", when.tapText(t("Purchased")), async () => {
            Then("I can see the purchase for today for Urban Massage", then.groupHealthRewardsPurchasedVisible(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS))
        })
    })

    Scenario("Reward notifications don't show on transition levels and they don't level me in the game", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_131_GHI_REWARDS, data.AUTH_131), async () => {
            Then("I am on the quest screen", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see level 50", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)))
            Then("I should not see the reward icon on the next level as it's a transition", then.idNotVisible(ids.GHI_REWARD_ICON("50")))
        })
        When("I tap level 50", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(50)), async () => {
            When("I navigate the yunity journey", when.navigateYunityForestJourneyCorrect, async () => {
                Then("I should see level 51", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)))
                // Then("I should see the reward icon but for level 52", then.idVisible(ids.GHI_REWARD_ICON("52")))
            })
        })
        When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
            When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
            })
        })
        When("I scroll until I can see all the GHI Rewards info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.faq, "up"), async () => {
            Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("1/6"))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards, which haven't levelled from the transition", then.GHIRewardsProgressBarsVisible(8))
        })
        When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
            When("I go to the quest screen", when.tapID(ids.NAV_BAR("quests")), async () => {
                When("I tap level 51", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51)), async () => {
                    When("I tap let's go", when.tapText("Let's go!"), async () => {
                        When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                            When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                                Then("I should see the well done screen", then.onChallengeComplete(3050, 51))
                            })
                        })
                    })
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
            })
        })
        // When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
            // Then("I should see the reward icon but for level 52 despite the clock being there", then.idVisible(ids.GHI_REWARD_ICON("52")))
        // })
        
     })

     Scenario("Half modals display the correct tease for games starting in the future, and the learn more page shows the correct pre-start details", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_133_GHI_FUTURE, data.AUTH_133), async () => {
            Then("I am on the quest screen", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see level 22", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(22)))
        })
        When("I tap level 23", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(23)), async () => {
            Then("I see the half modal for level 23 being locked as this user has the toggle switched on", then.lockedLevelHalfModalVisible(23, false, false,))
            Then("I see the tease for the rewards game starting soon", then.ghiRewardsTeaseVisible)
        })
        When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
            When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
                When("I confirm my selection", when.tapText("Confirm selection"), async () => {
                    Then("I see the tease for the rewards game starting soon as I am over level 5", then.ghiRewardsTeaseVisible)
                })
            })
        })
        When("I click to learn more, as the user is above level 5 in the game", when.tapText(constants.learnMoreButton), async () => {
            Then("I should be on the GHI rewards learn more page", then.onGHIRewardsLearnMorePage(false, "0", data.GOAL_PARTICIPATION_14.data.startDateTime))
        })
        When("I click to go back", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I go to the quest tab", when.tapID(ids.NAV_BAR("quests")), async () => {
                When("I tap level 22", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(22)), async () => {
                    When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                        When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                            Then("I should see the well done screen", then.onChallengeComplete(3050, 22))
                        })
                    })
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
                Then("I see the tease for the rewards game starting soon on the streak screen", then.ghiRewardsTeaseVisible)
            })
        })
        
     })

     Scenario("A user signed up to two games can only play in one", scenario.start, async () => {
        Given("I run the worker to assign game participation", given.synchroniseProductGoalParticipants("YUG1010113"), async () => {
            When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_134_GHI_REWARDS, data.AUTH_134), async () => {
                Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            })
            When("I click on the first health insurance project", when.tapTextAtIndex("Health Insurance", 0), async () => {
                When("I swipe to the bottom", when.swipeFromText("Key Info", "up", "fast"), async () => {
                    Then("I can see the rewards game hasn't started as I am in another game already", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.rewardsGameOnTheWayImg)))
                })
            })
            When("I swipe to the top", when.swipeFromText("FAQs", "down", "fast"), async () => {
                When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
                    When("I click on the second health insurance project", when.tapTextAtIndex("Health Insurance", 1), async () => {
                        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
                            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(4))
                        })
                    })
                })
            })
        })
                
     })

     Scenario("The learn more tease does not show for users in the reward store before the game starts if they are below level 6", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("rewards", data.CUSTOMER_135_GHI_FUTURE, data.AUTH_135), async () => {
            When("I confirm my selection", when.tapText("Confirm selection"), async () => {
                Then("I am on the rewards screen", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1000)))
                Then("I can't see the tease for the rewards game starting soon as I'm under level 6", then.textNotVisible(constants.rewardsTeaseText))
            })
        })
        When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
            Then("I should see level 5", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)))
        })
        When("I tap level 6", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(6)), async () => {
            Then("I see the half modal for level 5 being locked as this user has the toggle switched on", then.lockedLevelHalfModalVisible(6, false, false,))
            Then("I see the tease for the rewards game starting soon", then.ghiRewardsTeaseVisible)
        })
        When("I tap to close the modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1), async () => {
            When("I tap level 5", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
                When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                    When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                        Then("I should see the well done screen", then.onChallengeComplete(3050, 5))
                    })
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
            })
        })
        When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
            When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
                When("I wait", when.wait(3000), async () => {
                    Then("I see the tease for the rewards game starting soon as I'm now level 6", then.ghiRewardsTeaseVisible)
                })
            })
        })
        
     })

     Scenario("Users see the correct streak modal when mid-way to earning a gift", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_136_GHI_REWARDS, data.AUTH_136), async () => {
            Then("I should see level 15", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(15)))
        })
        When("I tap level 15", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(15)), async () => {
            When("I tap the Let's go button to proceed", when.tapText("Let's go!"), async () => {
                When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
                    When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                        Then("I should see the well done screen", then.onChallengeComplete(3050, 15))
                    })
                })
            })
        })
        When("I tap collect on the well done screen", when.tapText(t("Collect"), 1000), async () => {
            When("I wait 10 seconds", when.wait(10000), async () => {
                Then("I should see the first day streak screen", then.textVisible("First day done!"))
                Then("I should see the reward modal on the streak screen", then.rewardGameStreakModalVisible(false, "3 x Urban Massage Vouchers", "9 / 10"))
            })
        })
        
     })

})