import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as given from "./_steps/given"
import * as data from "./_data";
import { smoking_questions, smoking_opt_out, LEELA_SMOKING_TIPS, LEELA_MOMENTS_AND_REASONS, FRY_SMOKING_TIPS, FRY_MOMENTS_AND_REASONS, modals, milestone_message } from "./_resources/smoking_fixtures";
import { SMOKING_STATE_LEELA } from "./_data";

const locale = process.env.TARGET_LOCALE || "en-GB"

Feature("I can view and use the smoking cessation feature", async () => {
    Scenario("I can begin my smoking cessation journey, fill out the questionnaire, and track view the smoking hub", scenario.start, async () => {
        Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_FRY, data.AUTH_FRY), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Phillip Fry", "Ocean", "81", true))
        })
        When("I scroll down", when.scrollFromID(ids.YUSCREEN_V5_PROTECTION_TITLE, "up", "fast"), async () => {
            Then("I should see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?"))
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
            Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE))
        })
        When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            Then("2 I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking))
            Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG))
            Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL))
            Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH))
        })
        When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the amount question", then.idVisible(ids.SMOKING_ANSWER_TEXT_FIELD))
                Then("I should be on the quantity question", then.objCopyVisible(smoking_questions[locale].amount_used_per_day))
            })
        })
        When("I enter an amount", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.description))
                Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading))
            })
        })
        When("I enter an amount", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations))
            })
        })
        // should the questions hold state when you go back?
        When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async () => {
            When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async () => {
                When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
                    Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading))
                })
            })
        })
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations))
        })
        When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async () => {
            When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async () => {
                When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                    Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried))
                })
            })
        })
        When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE), async() =>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I Should be on the when is your first smoke question", then.objCopyVisible(smoking_questions[locale].when_first))
            })
        })
        When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers))
            })
        })
        When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident))
            })
        })
        When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement))
            })
        })
        When("I Tap no", when.tapID(ids.SMOKING_ANSWER_NO), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the replacement consideration screen", then.objCopyVisible(smoking_questions[locale].replacement_consider))
            })
        })
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1))
        })
        When("I tap I'm commited", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1))
            Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER))
        })
        When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER), async () => {
            Then("I should see the take your first steps button", then.textVisible("Take your first steps"))
        })
        When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW), async () => {
                Then("I should be on the smoking cessation screen", then.onSmokingHub(locale, 0, true, 40, 8, FRY_SMOKING_TIPS, FRY_MOMENTS_AND_REASONS))
            })
        })
        When("I exit the smoking hub", when.tapID(ids.BACK_BUTTON), async () => {
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
                    Then("I see I've earned 250 yucoin today so far on the todays earnings screen", then.textVisible("250 YuCoin"))
                })
            })
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the reward for signing up", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking questionnaire", 50)))
        })
        When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
            When("I wait", when.wait(15000), async () => {
                When("I go back to the yucoin screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
                    Then("I can see the smoking card is there on day 1 ", then.smokingCardVisible(1, locale))
                })
            })
        })
        When("I tap the smoking card", when.tapID(ids.FLAT_LIST_EVENTS), async () => {
            When("I tap on the milestone for day 1", when.tapID(ids.SMOKING_MILESTONE_TAPPABLE("1")), async () => {
                Then("I see I have hit the milestone the correct amount of times", then.textVisible(milestone_message[locale].first_time.message))
            })
        })

    })

    Scenario("As a user with smoking hub history, I can view my cessation progression", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_LEELA, data.AUTH_LEELA), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Turanga Leela", "Forest", "212", true))
        })
        When("I scroll down", when.scrollFromID(ids.YUSCREEN_V5_PROTECTION_TITLE, "up", "fast"), async () => {
            Then("I should see the initial smoking tile", then.smokingTileVisible("17 days smoke-free"))
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
            Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY))
        })
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
            Then("I should see the You're doing great popup", then.youreDoingGreatPopupVisible(18))
        })
        When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
            Then("I should be on the smoking hub (and can see the milestones from a previous streak are still there despite this streak being less", then.onSmokingHub(locale, 18, true, SMOKING_STATE_LEELA.data.meta_data.weeklyExpense, SMOKING_STATE_LEELA.data.meta_data.amountUsedPerDay, LEELA_SMOKING_TIPS, LEELA_MOMENTS_AND_REASONS, 25))
        })
        When("I tap the smoking sponsorship card", when.tapID(ids.SMOKING_SPONSORSHIP_CARD_CTA), async () => {
            Then("I should be on the false door for sponsorships", then.objCopyVisible(modals[locale].sponsorships))
        })
        When("I tap to close the modal", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
            When("I tap edit for the moments section", when.tapIDAtIndex(ids.EDIT_BUTTON, 0), async () => {
                Then("I should be on the triggers screen", then.onTriggersEditScreen("triggers"))
            })
        })
        When("I tap checkbox driving", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("driving")), async () => {
            When("I check celebrate", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("celebrate")), async () => {
                When("I tap save", when.tapID("smoking-edit-state-save-button"), async () => {
                    Then("I should see financial stress, which is a custom entry", then.idVisibleAtIndex(ids.SMOKING_CHIP("financial stress"), 0))
                    Then("I should see the newly selected driving chip", then.idVisibleAtIndex(ids.SMOKING_CHIP("When I’m driving"), 0))
                    Then("I should not see the celebration chip I deselected", then.idNotVisible(ids.SMOKING_CHIP("To celebrate something")))
                })
            })
        })
        When("I tap edit for the commit section", when.tapIDAtIndex(ids.EDIT_BUTTON, 1), async () => {
            Then("I should be on the motivations screen", then.onTriggersEditScreen("motivations"))
            Then("I can see that I can add a custom entry, as I haven't currently got one", then.textVisible("Add another motivation"))
        })
        When("I tap checkbox save money", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("save_money")), async () => {
            When("I check for_family", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("for_family")), async () => {
                When("I tap save", when.tapID("smoking-edit-state-save-button"), async () => {
                    Then("I should see the same chip about health I left alone", then.idVisibleAtIndex(ids.SMOKING_CHIP("To improve my health"), 0))
                    Then("I should see the updated chip about my family", then.idVisibleAtIndex(ids.SMOKING_CHIP("For my family"), 0))
                    Then("I should no longer see the chip about saving money", then.idNotVisible(ids.SMOKING_CHIP("To save money")))
                })
            })
        })
    })


    Scenario("I can get help with a smoking craving by playing the smoking game, and opt out", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_BENDER, data.AUTH_BENDER), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Bender Rodriguez", "Forest", "212", true))
        })
        When("I scroll down", when.scrollFromID(ids.YUSCREEN_V5_PROTECTION_TITLE, "up", "fast"), async () => {
            Then("I should see the smoking tile", then.idVisible(ids.SMOKING_TILE_BUTTON))
        })
        When("I tap the craving button", when.tapID(ids.SMOKING_TILE_BUTTON), async () => {
            Then("I should be on the Yunity Swipe settings screen", then.onYunitySwipe)
        })
        When("I go back", when.tapID(ids.LEFT_HEADIND_BUTTON("undefined")), async () => {
            Then("I should be back on the yuscreen and see the smoking tile", then.idVisible(ids.SMOKING_TILE_BUTTON))
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
            Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY))
        })
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
            Then("I should see the You're doing great popup", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
            Then("I can see I have unlocked the growth milestone for day 7", then.growthMilestoneUnlocked(7, 84, 10))
        })
        When("I tap Let's go!", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
            Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7)))
            Then("I should see the cravings button", then.idVisible(ids.SMOKING_HEADER_BUTTON))
            Then("I should see I can claim all my rewards in one go as it's been over 5 days", then.textVisibleAtIndex("Claim all", 0))
            Then("I can see my YuCoin Balance is 34,520", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(34520)))
        })
        When("I tap to claim all", when.tapTextAtIndex("Claim all", 0), async () => {
            Then("I can see my YuCoin amount goes up by 70 - 10 for each day I'm claiming", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(34590)))
        })
        When("I tap the craving button", when.tapID(ids.SMOKING_HEADER_BUTTON), async () => {
            Then("I should be on the Yunity Swipe settings screen", then.onYunitySwipe)
        })
        When("I go back", when.tapID(ids.LEFT_HEADIND_BUTTON("undefined")), async () => {
            Then("I should be back on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7)))
        })
        When("I scroll to the bottom", when.scrollFromID(ids.SMOKING_CONTAINER_SCROLL, "up", "fast"), async () => {
            Then("I should see the opt out copy", then.idVisible(ids.SMOKING_HUB_OPT_OUT))
        })
        When("I tap opt out", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
            Then("I should see the opt out modal", then.idVisible(ids.SMOKING_OPT_OUT_HALF_MODAL))
        })
        When("I tap back", when.tapID(ids.SCROLLABLE_CONTENT_DISMISS), async () => {
            Then("I should be back on the smoking hub and see the opt out copy", then.idVisible(ids.SMOKING_HUB_OPT_OUT))
        })
        When("I tap opt out again", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
            Then("I should see the opt out modal agian", then.idVisible(ids.SMOKING_OPT_OUT_HALF_MODAL))
        })
        When("I tap opt out", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
            Then("I should see the opt out questions", then.objCopyVisible(smoking_opt_out[locale].feedback))
        })
        When("I tap decided not to quit yet", when.tapID(ids.SMOKING_OPT_OUT_NOT_QUIT), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async ()=>{
                Then("I should be back on the yuscreen and see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?", 5000))
            })
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
            Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE))
            Then("I should not see the craving button", then.idNotVisible(ids.SMOKING_TILE_BUTTON))
        })
        When("I close the intro screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
            When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                Then("I see I've earned 270 yucoin today so far on the yucoin screen", then.textVisible("270 YuCoin today"))
            })
        })
        When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
            Then("I see I've earned 270 yucoin today so far on the todays earnings screen", then.textVisible("270 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the smoking rewards are all being shown as one collective entry", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking streak increase", 70)))
        })
    })

    Scenario("I can tell the app when I have lapsed, and it will correctly end my streak at the last confirmed point I had succeeded", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_ZOIDBERG, data.AUTH_ZOIDBERG), async () => {
            Then("I can see the smoking card is there", then.smokingCardVisible(10, locale))
        })
        When("I tap the smoking card", when.tapID(ids.FLAT_LIST_EVENTS), async () => {
            Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY))
        })
        When("I tap yes", when.tapID(ids.SCROLLABLE_CONTENT_DISMISS), async () => {
            Then("I should see the smoking lapse popup", then.onSmokingLapseScreen)
        })
        When("I tap next", when.tapID(ids.SMOKING_LAPSE_NEXT_BUTTON), async () => {
            Then("I am on the second lapse screen", then.idVisible(ids.SMOKING_LAPSE_SCREEN_2))
        })
        When("I tap the date picker", when.tapID("DATE_PICKER"), async () => {
            // I know we're trying to avoid tap texts but as this is the iPhone text I don't see where we can stick a test ID on it
            When("I tap confirm", when.tapText("Confirm"), async () => {
                When("I tap next", when.tapID(ids.SMOKING_LAPSE_DATE_PICKER_NEXT_BUTTON), async () => {
                    // same as the above
                    When("I tap OK", when.tapText("OK"), async () => {
                        Then("I should be on the where did you smoke question", then.objCopyVisible(smoking_questions[locale].lapse))
                    })
                })
            })
        })
        When("I tap at the bar", when.tapID(ids.SMOKING_LAPSE_ANSWER_BAR), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the why did you smoke question", then.objCopyVisible(smoking_questions[locale].lapse_reason))
            })
        })
        When("I tap drinking alcohol", when.tapID(ids.SMOKING_LAPSE_ANSWER_ALCOHOL), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the intensity question", then.objCopyVisible(smoking_questions[locale].intensity))
            })
        })
        When("I tap moderate", when.tapID(ids.SMOKING_LAPSE_ANSWER_MODERATE), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the recommit screen", then.objCopyVisible(modals[locale].recommit))
                Then("I can see the reasons I am committed to quitting", then.idVisible(ids.SMOKING_CHIP("To save money")))
                Then("I can see the reasons I am committed to quitting", then.idVisible(ids.SMOKING_CHIP("To improve my health")))
                Then("I can see how much I've saved", then.textVisible("£28.57 saved"))
                Then("I can see how many cigarettes I've not had", then.textVisible("80 cigarettes avoided"))
            })
        })
        When("I press to recommit", when.tapIDAtIndex(ids.SMOKING_LAPSE_NEXT_BUTTON, 0), async () => {
            Then("I should be on the smoking cessation screen from day 1 again", then.idVisible(ids.SMOKING_HEADER_DAYS(1)))
            Then("I should only see the milestones up to where it was confirmed I reached before lapsing - day 10", then.checkSmokingHubMilestones(10))
        })
        When("I exit the smoking hub", when.tapID(ids.BACK_BUTTON), async () => {
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
                    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
                        Then("I can see the result of the autoclaim during the lapsing process", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking streak increase", 100)))
                    })
                })
            })
        })
    })

    Scenario("Opting out is limited to once per day", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_BENDER, data.AUTH_BENDER), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Bender Rodriguez", "Forest", "212", true))
        })
        When("I scroll down", when.scrollFromID(ids.YUSCREEN_V5_PROTECTION_TITLE, "up", "fast"), async () => {
            When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
                When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
                    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
                        When("I tap Let's go!", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
                            Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7)))
                        })
                    })
                })
            })
        })
        When("I scroll to the bottom", when.scrollFromID(ids.SMOKING_CONTAINER_SCROLL, "up", "fast"), async () => {
            When("I tap opt out", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
                When("I tap opt out", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
                    When("I tap decided not to quit yet", when.tapID(ids.SMOKING_OPT_OUT_NOT_QUIT), async () => {
                        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async ()=>{
                            Then("I should be back on the yuscreen and see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?", 5000))
                        })
                    })
                })
            })
        })

        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
            When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG), async () => {
                    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                        When("I enter an amount", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
                            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                                Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading))
                            })
                        })
                    })
                })
            })
        })     
        When("I enter an amount", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async () => {
                    When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async () => {
                        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                            Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried))
                        })
                    })
                })
            })
        })
        When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE), async() =>{
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR), async () => {
                    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                        Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers))
                    })
                })
            })
        })
        When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT), async () => {
                    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                        Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement))
                    })
                })
            })
        })
        When("I Tap no", when.tapID(ids.SMOKING_ANSWER_NO), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                    When("I tap I'm commited", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                        When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER), async () => {
                            Then("I should see the take your first steps button", then.textVisible("Take your first steps"))
                        })
                    })
                })
            })
        })                                  
        When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW), async () => {
                Then("I should be on the smoking cessation screen but can no longer see the opt out option", then.onSmokingHub(locale, 1, true, 40, 8, FRY_SMOKING_TIPS, FRY_MOMENTS_AND_REASONS, 1, false))
            })
        })
    })

    Scenario("I see the correct celebration screen when reaching 28 days and my rewards are autoclaimed", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_ZAPP, data.AUTH_ZAPP), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Zapp Brannigan", "Forest", "212", true))
        })
        When("I scroll down", when.scrollFromID(ids.YUSCREEN_V5_PROTECTION_TITLE, "up", "fast"), async () => {
            When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
                When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
                    Then("I should see the You're doing great popup", then.youreDoingGreatPopupVisible(28))
                })
                When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
                    Then("I'm on the celebration screen", then.idVisible(ids.SMOKING_CELEBRATION_TITLE(modals[locale].celebration.heading)))
                    Then("I should be on the celebration screen", then.objCopyVisible(modals[locale].celebration))
                })
                When("I press the button", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
                    Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(28)))
                    Then("I should see my yucoin amount has automatically jumped up by 10", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(310)))
                })
            })
        })
        
    })

})