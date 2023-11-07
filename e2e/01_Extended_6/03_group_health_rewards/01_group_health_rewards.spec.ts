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
            Then("I can't see the sparkle animation due to not unlocking it yet", then.idNotVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.sparkleAnimation)))
        })
        When("I scroll until I can see all the progress info", when.scrollUntilTextVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, constants.Bupa_markdown_1, "down"), async () => {
            Then("I can see all the progress bars related to the GHI rewards", then.GHIRewardsProgressBarsVisible(4))
        })
        When("I click to see the next reward I want to unlock", when.tapTextAtIndex(constants.groupHealthRewardProgressNames[0], 1), async () => {
            Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
            Then("I should see the correct information for the Boots reward tease", then.onRewardsTeasePage(fixtures.BOOTS_YORK_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I go back to the rewards screen", when.tryTapIdMultipleIndexes(ids.BUTTON_CLOSE, 3), async () => {
            When("I tap on the YorkTest reward", when.tapRewardInList(data.CORE_REWARDS_YORK_GHI_REWARDS), async () => {
                Then("I should be on the tease page", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW))
                Then("I should see the correct information for the York reward tease", then.onRewardsTeasePage(fixtures.BOOTS_YORK_GHI_REWARDS_TEASE_PAGE_DETAILS))
            })
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should see level 80", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(80)))
        })
        When("I tap level 80", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(80)), async () => {
            When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
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
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can see all the headings related to the GHI rewards", then.GHIRewardsHeadingsVisible("1/6"))
                        Then("I can see the sparkle animation due to unlocking the reward", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.sparkleAnimation)))
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
                Then("I should see all the reward information for YorkTest", then.onBootsAndYorkRewardsClaimPage(fixtures.YORK_REWARDS_CLAIM_PAGE_DETAILS, true))
            })
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
                Then("I can see the purchase for today for Urban Massage", then.groupHealthRewardsPurchasedVisible(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS))
            })
        })
        When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
            When("I go to the yu page", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
                When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
                    When("I scroll until I can see all the GHI Rewards info", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.TEXT_TEMPLATE(constants.groupHealthRewardProgressNames[0], "l1b"), "down"), async () => {
                        Then("I can't see the sparkle animation due to purchasing the reward", then.idNotVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE(constants.sparkleAnimation)))
                    })
                })
            })
        })
            
    })

    Scenario("I can succesfully go through the Urban Massage GHI Rewards journeys and the GHI hourney levels up when in Yuniversal levels", scenario.start, async () => {
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
            Then("I should see the correct information for the Urban reward tease", then.onRewardsTeasePage(fixtures.URBAN_GHI_REWARDS_TEASE_PAGE_DETAILS))
        })
        When("I tap the CTA button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(1)))
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
                Then("I should see the reward information for Boots and the confirmation", then.onUrbanRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, false, "10"))
                Then("I can see the correct email has been received", then.GHIRewardEmailReceived(data.CUSTOMER_117_GHI_REWARDS.data.email, constants.urbanMassageEmailSubject))
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
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
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
                Then("I can see the correct email has been received", then.GHIRewardEmailReceived(data.CUSTOMER_118_GHI_REWARDS.data.email, constants.thrivaEmailSubject))
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

    Scenario("I can succesfully go through the Living DNA GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_119_GHI_REWARDS, data.AUTH_119), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
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
            When("I tap on the Living DNA reward", when.tapRewardInList(data.CORE_REWARDS_LIVING_DNA_GHI_REWARDS), async () => {
                Then("I can see I have claimed the reward", then.onLivingDNARewardsClaimPage(fixtures.THRIVA_REWARDS_CLAIM_PAGE_DETAILS, false))
            })
        })
        When("I click to see my voucher", when.tapText(t("View vouchers")), async () => {
            Then("I can see the purchase for today for Living DNA", then.groupHealthRewardsPurchasedVisible(fixtures.LIVING_DNA_REWARDS_CLAIM_PAGE_DETAILS))
        })
            
    })

    Scenario("I can succesfully go through the Bupa GHI Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_120_GHI_REWARDS, data.AUTH_120), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
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
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
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

    Scenario("I can succesfully go through the GOSH Rewards journeys", scenario.start, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_127_GHI_REWARDS, data.AUTH_127), async () => {
            Then("I am on the home page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
        })
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
            Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
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

})