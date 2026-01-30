import { Feature, Scenario, Given, When, Then, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "../_data";
import { CUSTOMER_1_MOMENTS_AND_REASONS } from "./_resources/fixture";
import { milestone_message, smoking_questions } from "../../smoking_cessation/_resources/smoking_fixtures";

const locale = process.env.TARGET_LOCALE || "en-US";

Feature("As a user from USA, I can view and use the smoking cessation feature", async () => {
  Scenario("I can begin my smoking cessation journey, fill out the questionnaire, and track view the smoking hub", scenario.start, async () => {
    Given("I log in and go to the YuScreen", given.logInAndGoToTab("yu", data.CUSTOMER_USA_1, data.AUTH_USA_1, true, "US"), async () => {
      Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, `${data.CUSTOMER_USA_1.data.firstName} ${data.CUSTOMER_USA_1.data.lastName}`, "Forest", "1", true));
      Then("I can see the YuScreen scroll view", then.idVisible(ids.YUSCREEN_SCROLL_VIEW, 3000));
    });
    When("I swipe up to scroll down", when.scrollWithLimitedAttemptsUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_FEATURE_CARD_SECTION, "up"), async () => {
      When("I wait", when.wait(30000), async () => {
        Then("I should see the smoking tile", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION, 3000));
      });
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION, 2000), async () => {
      Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE));
    });
    When("I tap start my journey", when.tapID(ids.BUTTON_BASE("Start my journey"), 2000), async () => {
      Then("I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking));
      Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG));
      Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL));
      Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the amount question", then.idVisible(ids.SMOKING_ANSWER_TEXT_FIELD));
      Then("I should be on the quantity question", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I enter an amount with three digits", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "100"), async () => {
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next", true), 2000), async () => {
      Then("I should still be on the quantity question as my answer was invalid", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
    });
    When("I enter an amount that's acceptable", when.replaceTextViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should see the spend question description", then.textVisible(smoking_questions[locale].weekly_expense.description));
      Then("I should see the spend question heading", then.textVisible(smoking_questions[locale].weekly_expense.heading));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I enter an amount that's too long", when.typeViaID(ids.SMOKING_SPEND_INPUT, "400000000.70"), async () => {
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next", true), 2000), async () => {
      Then("I should still be on the spend question as my answer was invalid", then.textVisible(smoking_questions[locale].weekly_expense.heading));
    });
    When("I enter an amount that's acceptable", when.replaceTextViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 2000), async () => {
      When("I tap the back button", when.tapID(ids.BACK_BUTTON, 2000), async () => {
        Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading));
        Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
      });
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 2000), async () => {
      When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
        Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried));
        Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
      });
    });
    When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the when is your first smoke question", then.objCopyVisible(smoking_questions[locale].when_first));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next"), 3000));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I tap next", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].replacement));
      Then("I should see a disabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I tap 'No'", when.tapID(ids.SMOKING_ANSWER_NO, 2000), async () => {
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I tap 'Next'", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the replacement consideration screen", then.objCopyVisible(smoking_questions[locale].replacement_consider));
      Then("I should see an enabled 'Next' button", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I tap 'Next'", when.tapID(ids.BUTTON_BASE("Next"), 2000), async () => {
      Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1));
      Then("I should see an enabled 'I’m committed' button", then.idVisible(ids.BUTTON_BASE("I’m committed")));
    });
    When("I tap the 'I’m committed' button", when.tapID(ids.BUTTON_BASE("I’m committed"), 2000), async () => {
      Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1));
      Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER));
    });
    When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER, 2000), async () => {
      Then("I should see the 'Take your first steps button'", then.idVisible(ids.BUTTON_BASE("Take your first steps")));
    });
    When("I tap the 'Take your first steps' button", when.tapID(ids.BUTTON_BASE("Take your first steps"), 2000), async () => {
      Then("I should be able to tap to move forward", then.idVisible(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER));
    });
    When("I tap the touch controller", when.tapID(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER, 2000), async () => {
      Then("I should still be in the Story viewing screen", then.idVisible(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER));
    });
    When("I tap the page for a second time", when.tapID(ids.FULL_SCREEN_SWIPER_TOUCH_CONTROLLER, 2000), async () => {
      Then("I should see the button to close the story", then.idVisible(ids.BUTTON_CLOSE_TEXT_VIEW));
    });
    When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW, 2000), async () => {
      Then("I should see the celebration screen", then.smokingCelebrationPopupVisible(1, 1));
      Then("I should see the smoking celebration CTA", then.idVisible(ids.SMOKING_CELEBRATION_CTA));
    });
    When("I tap next", when.tapID(ids.SMOKING_CELEBRATION_CTA, 2000), async () => {
      Then("I should be on the smoking cessation screen", then.onSmokingHub(locale, 0, true, "0", "0", CUSTOMER_1_MOMENTS_AND_REASONS));
      Then("I should be able to see a button to exit the smoking hub", then.idVisible(ids.BACK_BUTTON));
    });
    When("I exit the smoking hub", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      Then("I should be on the Tab view", then.idVisible(ids.NAV_BAR("yucoin")));
    });
    When("I go to the YuCoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I can see my activities", then.idVisible(ids.STEPS_COUNT(0)));
    });
    When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0), 2000), async () => {
      Then("I see I've earned 61 yucoin today so far on the todays earnings screen", then.textVisible("61 YuCoin"));
    });
    When("I swipe up to scroll to the 'Additional rewards' panel", when.scrollWithLimitedAttemptsUntilIdVisible(ids.TODAYS_EARNINGS, ids.ACTIVITY_LISTING("Quit-smoking questionnaire", 50), "up"), async () => {
      When("I wait", when.wait(3000), async () => {
        Then("I can see the reward for signing up", then.idVisible(ids.ACTIVITY_LISTING("Quit-smoking questionnaire", 50)));
      });
    });
    When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
      When("I wait", when.wait(3000), async () => {
        Then("I can see a way to go back", then.idVisible(ids.LEFT_HEADING_BUTTON("TODAY’S_EARNINGS")));
      });
    });
    When("I go back from the Today's Earnings screen", when.tapID(ids.LEFT_HEADING_BUTTON("TODAY’S_EARNINGS"), 2000), async () => {
      Then("I can see the smoking card is there on day 1 ", then.smokingCardVisible(1, locale));
      Then("I can see the Hero Card heading", then.idVisible(ids.EVENT_HEADING("Log your progress", "#464647"), 3000));
    });
    When("I tap the smoking card", when.tapID(ids.EVENT_CARD("Log your progress"), 2000), async () => {
      Then("I can see the Milestone for Day 1", then.idVisible(ids.SMOKING_MILESTONE_TAPPABLE("1"), 3000));
    });
    When("I tap on the milestone for day 1", when.tapID(ids.SMOKING_MILESTONE_TAPPABLE("1"), 2000), async () => {
      Then("I see I have hit the milestone the correct amount of times", then.textVisible(milestone_message[locale].first_time.message, 3000));
    });
  });
});
