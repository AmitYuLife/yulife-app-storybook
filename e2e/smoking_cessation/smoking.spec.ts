import { Feature, Scenario, Given, When, Then, ScenarioSkip, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "./_data";
import { smoking_questions, smoking_opt_out, LEELA_MOMENTS_AND_REASONS, FRY_MOMENTS_AND_REASONS, modals, milestone_message } from "./_resources/smoking_fixtures";

const locale = process.env.TARGET_LOCALE || "en-GB";

Feature("As a user from UK, I can view and use the smoking cessation feature", async () => {
  Scenario("I can begin my smoking cessation journey, fill out the questionnaire, and track view the smoking hub", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_FRY, data.AUTH_FRY), async () => {
      When("I navigate to the Yu screen", when.tapID(ids.NAV_BAR("yu"), 5000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Phillip Fry", "Ocean", "81", true));
        Then("I can see the YuScreen scroll view", then.idVisible(ids.YUSCREEN_SCROLL_VIEW, 3000));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 3000), async () => {
        Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE, 2000));
      });
    });
    When("I tap start my journey", when.tapID(ids.BUTTON_BASE("Start my journey"), 3000), async () => {
      Then("I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking));
      Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG));
      Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL));
      Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the amount question", then.idVisible(ids.SMOKING_ANSWER_TEXT_FIELD));
      Then("I should be on the quantity question", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I enter an amount with three digits", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "100"), async () => {
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next", true), 3000), async () => {
      Then("I should still be on the quantity question as my answer was invalid", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
    });
    When("I enter an amount that's acceptable", when.replaceTextViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should see the spend question description", then.textVisible(smoking_questions[locale].weekly_expense.description));
      Then("I should see the spend question heading", then.textVisible(smoking_questions[locale].weekly_expense.heading));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I enter an amount that's too long", when.typeViaID(ids.SMOKING_SPEND_INPUT, "400000000.70"), async () => {
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next", true)), async () => {
      Then("I should still be on the spend question as my answer was invalid", then.textVisible(smoking_questions[locale].weekly_expense.heading));
    });
    When("I enter an amount that's acceptable", when.replaceTextViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 3000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 3000), async () => {
      When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
        Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading));
        Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
      });
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 3000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 3000), async () => {
      When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
        Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried));
        Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
      });
    });
    When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE, 3000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the when is your first smoke question", then.objCopyVisible(smoking_questions[locale].when_first));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR, 300), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING, 3000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT, 3000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap 'No'", when.tapID(ids.SMOKING_ANSWER_NO, 3000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I tap 'Next'", when.tapID(ids.BUTTON_BASE("Next"), 3000), async () => {
      Then("I should be on the replacement consideration screen", then.objCopyVisible(smoking_questions[locale].replacement_consider));
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I tap 'Next'", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1));
      Then("I should see an enabled 'I’m committed' button", then.idVisible(ids.BUTTON_BASE("I’m committed")));
    });
    When("I tap the 'I’m committed' button", when.tapID(ids.BUTTON_BASE("I’m committed"), 3000), async () => {
      Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1));
      Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER, 3000));
    });
    When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER, 3000), async () => {
      Then("I should see the 'Take your first steps button'", then.idVisible(ids.BUTTON_BASE("Take your first steps")));
    });
    When("I tap the 'Take your first steps' button", when.tapID(ids.BUTTON_BASE("Take your first steps"), 3000), async () => {
      Then("I should be able to tap to move forward", then.idVisible(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER));
    });
    When("I tap the touch controller", when.tapID(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER, 3000), async () => {
      Then("I should still be in the Story viewing screen", then.idVisible(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER));
    });
    When("I tap the page for a second time", when.tapID(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER, 3000), async () => {
      Then("I should see the button to close the story", then.idVisible(ids.BUTTON_CLOSE_TEXT_VIEW));
    });
    When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW, 3000), async () => {
      Then("I should see the celebration screen", then.smokingCelebrationPopupVisible(1, 10));
      Then("I should see the smoking celebration CTA", then.idVisible(ids.SMOKING_CELEBRATION_CTA));
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3000), async () => {
      Then("I should be on the smoking cessation screen", then.onSmokingHub(locale, 0, true, "0", "0", FRY_MOMENTS_AND_REASONS));
      Then("I should be able to see a button to exit the smoking hub", then.idVisible(ids.BACK_BUTTON));
    });
    When("I exit the smoking hub", when.tapID(ids.BACK_BUTTON, 3000), async () => {
      Then("I should be on the Tab view", then.idVisible(ids.NAV_BAR("yucoin")));
    });
    When("I go to the YuCoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I can see my activities", then.idVisible(ids.STEPS_COUNT(0)));
    });
    When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0), 3000), async () => {
      Then("I see I've earned 260 yucoin today so far on the todays earnings screen", then.textVisible("260 YuCoin"));
    });
    When("I swipe up to scroll to the 'Additional rewards' panel", when.scrollWithLimitedAttemptsUntilIdVisible(ids.TODAYS_EARNINGS, ids.ACTIVITY_LISTING("Quit-smoking questionnaire", 50), "up"), async () => {
      Then("I can see the reward for signing up", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking questionnaire", 50)));
    });
    When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I can see a way to go back", then.idVisible(ids.LEFT_HEADING_BUTTON("TODAY’S_EARNINGS"), 30000));
    });
    When("I go back from the Today's Earnings screen", when.tapID(ids.LEFT_HEADING_BUTTON("TODAY’S_EARNINGS"), 4000), async () => {
      Then("I can see the smoking card is there on day 1 ", then.smokingCardVisible(1, locale));
      Then("I can see the Hero Card heading", then.idVisible(ids.EVENT_HEADING("Log your progress", "#464647")));
    });
    When("I tap the smoking card", when.tapID(ids.EVENT_CARD("Log your progress"), 4000), async () => {
      Then("I can see the Milestone for Day 1", then.idVisible(ids.SMOKING_MILESTONE_TAPPABLE("1")));
    });
    When("I tap on the milestone for day 1", when.tapID(ids.SMOKING_MILESTONE_TAPPABLE("1"), 4000), async () => {
      Then("I see I have hit the milestone the correct amount of times", then.textVisible(milestone_message[locale].first_time.message));
    });
  });

  Scenario("As a user with smoking hub history, I can view my cessation progression", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_LEELA, data.AUTH_LEELA), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Turanga Leela", "Forest", "212", true));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      Then("I should see the initial smoking tile", then.smokingTileVisible("17 days smoke-free"));
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("17 days smoke-free"), 3000), async () => {
      Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY));
    });
    When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
      Then("I should see the You're doing great popup", then.smokingCelebrationPopupVisible(18, 10));
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
      Then("I should be on the smoking hub (and can see the milestones from a previous streak are still there despite this streak being less)", then.onSmokingHub(locale, 18, true, "7.80", "504", LEELA_MOMENTS_AND_REASONS, 25));
    });
    When("I tap the smoking sponsorship card", when.tapID(ids.SMOKING_SPONSORSHIP_CARD_CTA), async () => {
      Then("I should be on the false door for sponsorships", then.objCopyVisible(modals[locale].sponsorships));
    });
    When("I tap to close the modal", when.tapID(ids.FLOATING_CONTINUE_BUTTON), async () => {
      When("I tap edit for the moments section", when.tapIDAtIndex(ids.EDIT_BUTTON, 0), async () => {
        Then("I should be on the triggers screen", then.onTriggersEditScreen("triggers"));
      });
    });
    When("I tap checkbox driving", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("driving")), async () => {
      When("I check celebrate", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("celebrate")), async () => {
        When("I tap save", when.tapID("smoking-edit-state-save-button"), async () => {
          When("I scroll to see the section", when.scrollUntilIdVisible(ids.SMOKING_CONTAINER_SCROLL, ids.MOMENTS_TO_MONITOR, "up"), async () => {
            Then("I should see financial stress, which is a custom entry", then.idVisibleAtIndex(ids.SMOKING_CHIP("financial stress"), 0));
            Then("I should see the newly selected driving chip", then.idVisibleAtIndex(ids.SMOKING_CHIP("When I’m driving"), 0));
            Then("I should not see the celebration chip I deselected", then.idNotVisible(ids.SMOKING_CHIP("To celebrate something")));
          });
        });
      });
    });
    When("I tap edit for the commit section", when.tapIDAtIndex(ids.EDIT_BUTTON, 1), async () => {
      Then("I should be on the motivations screen", then.onTriggersEditScreen("motivations"));
      Then("I can see that I can add a custom entry, as I haven't currently got one", then.textVisible("Add another motivation"));
    });
    When("I tap checkbox save money", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("save_money")), async () => {
      When("I check for_family", when.tapID(ids.SMOKING_EDIT_CHECKBOX_("for_family")), async () => {
        When("I tap save", when.tapID("smoking-edit-state-save-button"), async () => {
          Then("I should see the same chip about health I left alone", then.idVisibleAtIndex(ids.SMOKING_CHIP("To improve my health"), 0));
          Then("I should see the updated chip about my family", then.idVisibleAtIndex(ids.SMOKING_CHIP("For my family"), 0));
          Then("I should no longer see the chip about saving money", then.idNotVisible(ids.SMOKING_CHIP("To save money")));
        });
      });
    });
  });

  Scenario("I can get help with a smoking craving by playing the smoking game, and opt out", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_BENDER, data.AUTH_BENDER), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Bender Rodriguez", "Forest", "212", true));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.5, 0.85, 3000), async () => {
      Then("I should see the smoking tile", then.idVisible(ids.SMOKING_TILE_BUTTON, 3000));
    });
    When("I tap the craving button", when.tapID(ids.SMOKING_TILE_BUTTON, 3000), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should be on the Yunity Swipe settings screen", then.onYunitySwipe);
        Then("I should see my high score of 1284", then.idVisible(ids.SMOKING_GAME_HIGH_SCORE(1284)));
      });
    });
    When("I go back", when.tapID(ids.LEFT_HEADING_BUTTON()), async () => {
      Then("I should be back on the yuscreen and see the smoking tile", then.idVisible(ids.SMOKING_TILE_BUTTON));
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("6 days smoke-free"), 3000), async () => {
      Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY));
    });
    When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
      Then("I should see the You're doing great popup", then.smokingCelebrationPopupVisible(7, 70));
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
      Then("I can see I have unlocked the growth milestone for day 7", then.growthMilestoneUnlocked(7));
    });
    When("I tap Let's go!", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
      Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7)));
      Then("I should see the cravings button", then.idVisible(ids.SMOKING_HUB_CTA));
      Then("I can see my YuCoin Balance is 34,590 as my rewards have autoclaimed", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(34590)));
    });
    When("I tap the craving button", when.tapID(ids.SMOKING_HUB_CTA), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should be on the Yunity Swipe settings screen", then.onYunitySwipe);
      });
    });
    When("I go back", when.tapID(ids.LEFT_HEADING_BUTTON()), async () => {
      Then("I should be back on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7)));
    });
    When("I scroll to the bottom", when.swipeFromText("Your growth so far", "up", "fast"), async () => {
      Then("I should see the opt out copy", then.idVisible(ids.SMOKING_HUB_OPT_OUT));
    });
    When("I tap opt out", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
      Then("I should see the opt out modal", then.idVisible(ids.SMOKING_OPT_OUT_HALF_MODAL));
    });
    When("I tap back", when.tapID(ids.SCROLLABLE_CONTENT_DISMISS), async () => {
      Then("I should be back on the smoking hub and see the opt out copy", then.idVisible(ids.SMOKING_HUB_OPT_OUT));
    });
    When("I tap opt out again", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
      Then("I should see the opt out modal agian", then.idVisible(ids.SMOKING_OPT_OUT_HALF_MODAL));
    });
    When("I tap opt out", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
      Then("I should see the opt out questions", then.objCopyVisible(smoking_opt_out[locale].feedback));
    });
    When("I tap decided not to quit yet", when.tapID(ids.SMOKING_OPT_OUT_NOT_QUIT), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be back on the yuscreen and see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?", 5000));
      });
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 3000), async () => {
      Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE));
      Then("I should not see the craving button", then.idNotVisible(ids.SMOKING_TILE_BUTTON));
    });
    When("I close the intro screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I see I've earned 270 yucoin today so far on the yucoin screen", then.textVisible("270 YuCoin today"));
      });
    });
    When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I see I've earned 270 yucoin today so far on the todays earnings screen", then.textVisible("270 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the smoking rewards are all being shown as one collective entry", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking streak increase", 70)));
    });
  });

  Scenario("I can tell the app when I have lapsed, and it will correctly end my streak at the last confirmed point I had succeeded", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_ZOIDBERG, data.AUTH_ZOIDBERG), async () => {
      Then("I can see the smoking card is there", then.smokingCardVisible(10, locale));
    });
    When("I tap the smoking card", when.tapID(ids.FLAT_LIST_EVENTS), async () => {
      Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY));
    });
    When("I tap yes", when.tapID(ids.SCROLLABLE_CONTENT_DISMISS), async () => {
      Then("I should see the smoking lapse popup", then.onSmokingLapseScreen);
    });
    When("I tap next", when.tapID(ids.SMOKING_LAPSE_NEXT_BUTTON), async () => {
      Then("I am on the second lapse screen", then.idVisible(ids.SMOKING_LAPSE_SCREEN_2));
    });
    When("I tap the date picker", when.tapID("DATE_PICKER"), async () => {
      // I know we're trying to avoid tap texts but as this is the iPhone text I don't see where we can stick a test ID on it
      When("I tap confirm", when.tapText("Confirm"), async () => {
        When("I tap next", when.tapID(ids.SMOKING_LAPSE_DATE_PICKER_NEXT_BUTTON), async () => {
          // same as the above
          Then("I should be on the where did you smoke question", then.objCopyVisible(smoking_questions[locale].lapse));
        });
      });
    });
    When("I tap at the bar", when.tapID(ids.SMOKING_LAPSE_ANSWER_BAR), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the why did you smoke question", then.objCopyVisible(smoking_questions[locale].lapse_reason));
      });
    });
    When("I tap drinking alcohol", when.tapID(ids.SMOKING_LAPSE_ANSWER_ALCOHOL), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the intensity question", then.objCopyVisible(smoking_questions[locale].intensity));
      });
    });
    When("I tap moderate", when.tapID(ids.SMOKING_LAPSE_ANSWER_MODERATE), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the recommit screen", then.objCopyVisible(modals[locale].recommit));
        Then("I can see the reasons I am committed to quitting", then.idVisible(ids.SMOKING_CHIP("To save money")));
        Then("I can see the reasons I am committed to quitting", then.idVisible(ids.SMOKING_CHIP("To improve my health")));
        Then("I can see how much I've saved", then.textVisible("£31.43 saved"));
        Then("I can see how many cigarettes I've not had", then.textVisible("88 cigarettes avoided"));
      });
    });
    When("I press to recommit", when.tapIDAtIndex(ids.SMOKING_LAPSE_NEXT_BUTTON, 0), async () => {
      Then("I should be on the smoking cessation screen from day 1 again", then.idVisible(ids.SMOKING_HEADER_DAYS(1)));
      Then("I should only see the milestones up to where it was confirmed I reached before lapsing - day 10", then.checkSmokingHubMilestones(10));
    });
    When("I exit the smoking hub", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
        When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
          When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the result of the autoclaim during the lapsing process", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking streak increase x2", 30)));
          });
        });
      });
    });
  });

  Scenario("Opting out is limited to once per day", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_BENDER, data.AUTH_BENDER), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Bender Rodriguez", "Forest", "212", true));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("6 days smoke-free"), 3000), async () => {
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
          When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
            When("I tap Let's go!", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
              Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7)));
            });
          });
        });
      });
    });
    When("I scroll to the bottom", when.swipeFromText("Your growth so far", "up", "fast"), async () => {
      Then("I should see the opt out", then.idVisible(ids.SMOKING_HUB_OPT_OUT));
    });
    When("I tap opt out", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
      Then("I should see the CTA", then.idVisible(ids.SCROLLABLE_CONTENT_CTA));
    });
    When("I tap opt out", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2_000), async () => {
      When("I tap decided not to quit yet", when.tapID(ids.SMOKING_OPT_OUT_NOT_QUIT, 2_000), async () => {
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2_000), async () => {
          Then("Yuscreen has fully loaded", then.yuScreenLoaded(5_000));
        });
      });
    });
    When("I scroll further down the screen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "slow", 0.1, 3_000), async () => {
      Then("I should be back on the yuscreen and see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?", 3_000));
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 3000), async () => {
      When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
        When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG, 3000), async () => {
          When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
            When("I enter an amount", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8", 3000), async () => {
              When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
                Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading, 3000));
              });
            });
          });
        });
      });
    });
    When("I enter an amount", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40", 3000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
        When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 3000), async () => {
          When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 3000), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
              Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried));
            });
          });
        });
      });
    });
    When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE, 3000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
        When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR, 3000), async () => {
          When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
            Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers));
          });
        });
      });
    });
    When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING, 3000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
        When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT, 3000), async () => {
          When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
            Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement));
          });
        });
      });
    });
    When("I Tap no", when.tapID(ids.SMOKING_ANSWER_NO, 3000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
          When("I tap I'm commited", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
            When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER, 3000), async () => {
              Then("I should see the take your first steps button", then.textVisible("Take your first steps"));
            });
          });
        });
      });
    });
    When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3000), async () => {
      When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW, 3000), async () => {
        Then("I should see the celebration screen", then.smokingCelebrationPopupVisible(1, 10));
      });
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3000), async () => {
      Then("I should be on the smoking cessation screen but can no longer see the opt out option", then.onSmokingHub(locale, 1, true, "0", "0", FRY_MOMENTS_AND_REASONS, 1, false));
    });
  });

  Scenario("I see the correct celebration screen when reaching 28 days and my rewards are autoclaimed", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_ZAPP, data.AUTH_ZAPP), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Zapp Brannigan", "Forest", "212", true));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.5, 0.85, 3000), async () => {
      When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("27 days smoke-free"), 3000), async () => {
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
          Then("I should see the You're doing great popup and my yucoin earned is linked to my earn rate", then.smokingCelebrationPopupVisible(28, 5));
        });
      });
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
      Then("I'm on the celebration screen", then.idVisible(ids.SMOKING_CELEBRATION_TITLE));
      Then("I should be on the celebration screen", then.objCopyVisible(modals[locale].celebration));
      Then("I should have reached the milestone for day 28", then.growthMilestoneUnlocked(28));
    });
    When("I press the button", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
      Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(28)));
      Then("I should see my yucoin amount has automatically jumped up by 10", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(305)));
    });
  });

  Scenario("I start my smoking journey complete the questionnaire and receive my YuCoins as a reward. If I opt out and later restart, completing the questionnaire again should not grant me any additional YuCoin reward", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_AMY, data.AUTH_AMY), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Amy Wong", "Forest", "212", true));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      Then("I should see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?"));
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 3000), async () => {
      When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3_000), async () => {
        Then("I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking));
        Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG, 3_000));
        Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL));
        Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH));
      });
    });
    When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the amount question", then.idVisible(ids.SMOKING_ANSWER_TEXT_FIELD));
        Then("I should be on the quantity question", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
      });
    });
    When("I enter an amount", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.description));
        Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading));
      });
    });
    When("I enter an amount", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
      });
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async () => {
      When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async () => {
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
          Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading));
        });
      });
    });
    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
      Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async () => {
      When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async () => {
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
          Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried));
        });
      });
    });
    When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I Should be on the when is your first smoke question", then.objCopyVisible(smoking_questions[locale].when_first));
      });
    });
    When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers));
      });
    });
    When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident));
      });
    });
    When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement));
      });
    });
    When("I tap no", when.tapID(ids.SMOKING_ANSWER_NO), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the replacement consideration screen", then.objCopyVisible(smoking_questions[locale].replacement_consider));
      });
    });
    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
      Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1));
    });
    When("I tap I'm committed", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
      Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1));
      Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER));
    });
    When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER), async () => {
      Then("I should see the take your first steps button", then.textVisible("Take your first steps"));
    });
    When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
      When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW), async () => {
        When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
          Then("I can see my YuCoin Balance is 1,260", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1260)));
        });
      });
    });
    When("I scroll to the bottom", when.swipeFromText("Your growth so far", "up", "fast"), async () => {
      Then("I should see the opt out copy", then.idVisible(ids.SMOKING_HUB_OPT_OUT));
    });
    When("I tap opt out", when.tapID(ids.SMOKING_HUB_OPT_OUT), async () => {
      Then("I should see the opt out modal", then.idVisible(ids.SMOKING_OPT_OUT_HALF_MODAL));
    });
    When("I tap opt out", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
      Then("I should see the opt out questions", then.objCopyVisible(smoking_opt_out[locale].feedback));
    });
    When("I tap decided not to quit yet", when.tapID(ids.SMOKING_OPT_OUT_NOT_QUIT), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be back on the yuscreen and see the initial smoking tile", then.smokingTileVisible("Looking to quit smoking?", 5000));
      });
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 3000), async () => {
      When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        Then("I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking));
        Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG));
        Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL));
        Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH));
      });
    });
    When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        When("I enter an amount", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
          When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            When("I enter an amount", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
              When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
              });
            });
          });
        });
      });
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY), async () => {
      When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY), async () => {
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
          Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried));
        });
      });
    });
    When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR), async () => {
          When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING), async () => {
              When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
                Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident));
              });
            });
          });
        });
      });
    });
    When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
        When("I Tap no", when.tapID(ids.SMOKING_ANSWER_NO), async () => {
          When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
            When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
              Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1));
            });
          });
        });
      });
    });
    When("I tap I'm commited", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL), async () => {
      Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1, 4_000));
      Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER, 4_000));
    });
    When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER), async () => {
      Then("I should see the take your first steps button", then.textVisible("Take your first steps", 3_000));
    });
    When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 3_000), async () => {
      When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW, 3_000), async () => {
        When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3_000), async () => {
          Then("I can see my YuCoin Balance is 1,270", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1270), 3_000));
        });
      });
    });
  });

  Scenario("After I opt-out 5 times as a user who has 0 streak days claimed, I will have a delay in getting any YuCoin rewards for the next 7 days in the streak for the daily rewards as well as the questionnaire.", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_HERMES, data.AUTH_HERMES), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Hermes Conrad", "Forest", "212", true));
        Then("I can see my YuCoin Balance is 1200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1200)));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("1 day smoke-free"), 3000), async () => {
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2_000), async () => {
          When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3_000), async () => {
            When("I tap Let's go!", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3_000), async () => {
              Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(7), 5_000));
              Then("I can see after the have you smoked since we last saw you popup I have not received any YuCoin for saying no", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1210)));
            });
          });
        });
      });
    });
  });

  Scenario("After I opt-out 10 times as a user who has 0 streak days claimed, I will have a delay in getting any YuCoin rewards for the next 14 days in the streak for the daily rewards as well as the questionnaire.", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_KIF, data.AUTH_KIF), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Kif Kroker", "Forest", "212", true));
        Then("I can see my YuCoin Balance is 1200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1200), 3_000));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("1 day smoke-free"), 3000), async () => {
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 4_000), async () => {
          When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3_000), async () => {
            When("I tap Let's go!", when.tapID(ids.SMOKING_CELEBRATION_CTA, 3_000), async () => {
              Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(14), 5_000));
              Then("I can see after the have you smoked since we last saw you popup I have not received any YuCoin for saying no", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1210)));
            });
          });
        });
      });
    });
  });

  Scenario("I can successfully deep link from a cold start when app is closed", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_LEELA, data.AUTH_LEELA, true), async () => {
      Then("I should see the menu icon on the top left", then.idVisible(ids.MENU_ICON, 5_000));
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the deep link", when.goToSmokingCessation, async () => {
        Then("I should see the smoking checkin overlay", then.idVisible(ids.SMOKING_CHECKIN_OVERLAY, 10_000));
      });
    });
  });

  Scenario("I see the correct behaviours once I pass 28 days", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_CALCULON, data.AUTH_CALCULON), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, "Calculon Robot", "Forest", "212", true));
      });
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("28 days smoke-free"), 3000), async () => {
        When("I tap no", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
          Then("I should see the You're doing great popup with the expected changes as I'm passed day 28", then.smokingCelebrationPopupVisible(29));
        });
      });
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA), async () => {
      Then("I should be on the smoking hub", then.idVisible(ids.SMOKING_HEADER_DAYS(29)));
      Then("I should see my yucoin amount has not jumped up by 10", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(300)));
    });
    When("I swipe to the bottom", when.swipeFromText("Your growth so far", "up", "fast"), async () => {
      Then("I shouldn't see the sponsorship card", then.idNotVisible(ids.SMOKING_SPONSORSHIP_CARD_CTA));
    });
  });
});
