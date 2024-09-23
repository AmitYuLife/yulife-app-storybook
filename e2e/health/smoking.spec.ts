import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as given from "./_steps/given"
import * as data from "./_data";
import { smoking_questions, smoking_opt_out, LEELA_SMOKING_TIPS, LEELA_MOMENTS_AND_REASONS } from "./_resources/smoking_fixtures";

const locale = process.env.TARGET_LOCALE || "en-GB"

Feature("I can view and use the smoking cessation feature", async () => {
    Scenario("I can begin my smoking cessation journey, fill out the questionnaire, and track view the smoking hub", scenario.start, async () => {
        Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_FRY, data.AUTH_FRY), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Phillip Fry", "Ocean", "81", true))
        })
        When("I scroll down", when.scrollFromID(ids.MAXIMISE_TODAYS_EARNINGS(200, 500), "up", "fast"), async () => {
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
            // @update trying to get the test for this to work but struggling for the time being
            // leaving in as a reference while getting everything else in
            // Then("I can see the smoking story pages one after another", then.onSmokingStoryPages)
            When("I tap the button to dismiss the story", when.tapText("Start tracking my progress"), async () => {
                Then("I should be on the smoking cessation screen", then.onFirstTimeSmokingCessationScreen)
            })
        })
    })

    Scenario("As a user with smoking hub history, I can view my cessation progression", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_LEELA, data.AUTH_LEELA), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Turanga Leela", "Forest", "212", true))
        })
        When("I scroll down", when.scrollFromID(ids.MAXIMISE_TODAYS_EARNINGS(200, 620), "up", "fast"), async () => {
            Then("I should see the initial smoking tile", then.smokingTileVisible("25 days smoke-free"))
        })
        When("I tap the smoking tile", when.tapID(ids.YUSCREEN_SMOKING_TILE), async () => {
            Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY))
        })
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
            Then("I should see the You're doing great popup", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_NEXT_BUTTON), async () => {
            Then("I should be on the smoking hub...", then.onSmokingHub(26, true, LEELA_SMOKING_TIPS, LEELA_MOMENTS_AND_REASONS))
        })
        When("I tap edit for the moments section", when.tapIDAtIndex(ids.EDIT_BUTTON, 0), async () => {
            Then("I should be on the triggers screen", then.onTriggersEditScreen("triggers"))
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
        When("I scroll back up", when.scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.SMOKING_HEADER_DAYS(26), "up"), async () => {
            When("I tap the claim button on day 26", when.tapID(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("smoking-cessation-carousel-item-day-26")), async () => {
                Then("I should see my yucoin balance update by 10", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(710)))
                Then("I should be on the top of the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(26)))
            })
        })
    })


    Scenario("I can get help with a smoking craving by playing the smoking game, and opt out", scenario.start, async () => {
        Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_BENDER, data.AUTH_BENDER), async () => {
            Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Bender Rodriguez", "Forest", "212", true))
        })
        When("I scroll down", when.scrollFromID(ids.MAXIMISE_TODAYS_EARNINGS(200, 620), "up", "fast"), async () => {
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
            Then("I can see I have unlocked the growth milestone for day 7", then.growthMilestoneUnlocked(7, 42, 18))
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
        When("I go to Today's Earnings", when.tapText("0 steps"), async () => {
            Then("I see I've earned 270 yucoin today so far on the todays earnings screen", then.textVisible("270 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"))
            Then("I can see the smoking rewards are all being shown as one collective entry", then.combinedSmokingRewardsVisible(7))
        })
    })
})