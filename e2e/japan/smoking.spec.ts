import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "./_data";
import { CUSTOMER_2_MOMENTS_AND_REASONS, PRODUCT_CARD_ILLUSTRATIONS } from "./_resources/smoking_fixtures";
import { smoking_questions, milestone_message } from "../smoking_cessation/_resources/smoking_fixtures";

const locale = process.env.TARGET_LOCALE || "ja-JP";

Feature("As a user from Japan, I can view and use the smoking cessation feature", async () => {
  Scenario("I can begin my smoking cessation journey, fill out the questionnaire, and track view the smoking hub", scenario.start, async () => {
    Given("I log in", given.loginAsUser(data.CUSTOMER_2_SMOKING, data.AUTH_2, true, "JP"), async () => {
      When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, `${data.CUSTOMER_2_SMOKING.data.lastName} ${data.CUSTOMER_2_SMOKING.data.firstName}`, "フォレスト", "219", true));
      });
    });
    When("I scroll down until I see the products", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_SQUARE_CARD("入院への備え"), "down"), async () => {
      Then("I should see the image for the Compass icon card", then.idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(PRODUCT_CARD_ILLUSTRATIONS.COMPASS)));
      Then("I should see the image for the Candle icon card", then.idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(PRODUCT_CARD_ILLUSTRATIONS.CANDLE)));
    });
    When("I scroll down the YuScreen", when.scrollYuScreenDown(0.4, 0.85, 2000), async () => {
      Then("I should see the initial smoking tile", then.smokingTileVisible("禁煙をお考えですか?"));
    });
    When("I tap the smoking tile", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("禁煙をお考えですか?"), 3000), async () => {
      Then("I should be on the smoking cessation intro screen", then.idVisible(ids.SMOKING_INTRO_TITLE, 2000));
    });
    When("I tap start my journey", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
      Then("I should be on the tobacco product question", then.objCopyVisible(smoking_questions[locale].type_of_smoking));
      Then("I should see smoking_cessation_question_type_choice_cigarettes", then.idVisible(ids.SMOKING_ANSWER_CIG));
      Then("I should see smoking_cessation_question_type_choice_roll_ups", then.idVisible(ids.SMOKING_ANSWER_ROLL));
      Then("I should see smoking_cessation_question_type_choice_both", then.idVisible(ids.SMOKING_ANSWER_BOTH));
    });
    When("I tap cigarettes", when.tapID(ids.SMOKING_ANSWER_CIG, 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the amount question", then.idVisible(ids.SMOKING_ANSWER_TEXT_FIELD, 2000));
        Then("I should be on the quantity question", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
      });
    });
    When("I enter an amount with three digits", when.typeViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "100", 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should still be on the quantity question as my answer was invalid", then.objCopyVisible(smoking_questions[locale].amount_used_per_day));
      });
    });
    When("I enter an amount that's acceptable", when.replaceTextViaID(ids.SMOKING_ANSWER_TEXT_FIELD, "8"), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.description));
        Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading));
      });
    });
    When("I enter an amount that's too long", when.typeViaID(ids.SMOKING_SPEND_INPUT, "40000000", 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should still be on the spend question as my answer was invalid", then.textVisible(smoking_questions[locale].weekly_expense.heading));
      });
    });
    When("I enter an amount has a decimal place", when.replaceTextViaID(ids.SMOKING_SPEND_INPUT, "40.5"), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should still be on the spend question as my answer was invalid", then.textVisible(smoking_questions[locale].weekly_expense.heading));
      });
    });
    When("I enter an amount that's acceptable", when.replaceTextViaID(ids.SMOKING_SPEND_INPUT, "40"), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
      });
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 2000), async () => {
      When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 2000), async () => {
        When("I tap the back button", when.tapID(ids.BACK_BUTTON, 2000), async () => {
          Then("I should be on the spend question", then.textVisible(smoking_questions[locale].weekly_expense.heading));
        });
      });
    });
    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
      Then("I should be on the motivate question", then.objCopyVisible(smoking_questions[locale].motivations));
    });
    When("I tap for family", when.tapID(ids.SMOKING_ANSWER_IMPROVE_FOR_FAMILY, 2000), async () => {
      When("I tap to save money", when.tapID(ids.SMOKING_ANSWER_IMPROVE_SAVE_MONEY, 2000), async () => {
        When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
          Then("I should be on the worried question", then.objCopyVisible(smoking_questions[locale].worried));
        });
      });
    });
    When("I tap quite", when.tapID(ids.SMOKING_ANSWER_QUITE, 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I Should be on the when is your first smoke question", then.objCopyVisible(smoking_questions[locale].when_first));
      });
    });
    When("I tap an hour or two", when.tapID(ids.SMOKING_ANSWER_AN_HOUR, 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the triggers question", then.objCopyVisible(smoking_questions[locale].triggers));
      });
    });
    When("I tap drinking", when.tapID(ids.SMOKING_ANSWER_DRINKING, 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the confidence question", then.objCopyVisible(smoking_questions[locale].confident));
      });
    });
    When("I tap very", when.tapID(ids.SMOKING_ANSWER_VERY_CONFIDENT, 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the replacement question", then.objCopyVisible(smoking_questions[locale].replacement));
      });
    });
    When("I Tap no", when.tapID(ids.SMOKING_ANSWER_NO, 2000), async () => {
      When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
        Then("I should be on the replacement consideration screen", then.objCopyVisible(smoking_questions[locale].replacement_consider));
      });
    });
    When("I tap next", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
      Then("I should be on the commitment screen", then.objCopyVisible(smoking_questions[locale].commitment_1));
    });
    When("I tap I'm commited", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
      Then("I should be on the pledge screen", then.textVisible(smoking_questions[locale].commitment_2.description_1));
      Then("I should see the fingerprint button", then.idVisible(ids.GESTURE_WRAPPER));
    });
    When("I tap the finger print", when.tapID(ids.GESTURE_WRAPPER, 2000), async () => {
      Then("I should see the take your first steps button", then.textVisible(smoking_questions[locale].commitment_2.cta));
    });
    When("I tap this button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE_NO_URL, 2000), async () => {
      When("I tap the button to dismiss the story", when.tapID(ids.BUTTON_CLOSE_TEXT_VIEW, 2000), async () => {
        When("I tap to collect the reward", when.tapID(ids.SMOKING_CELEBRATION_CTA, 2000), async () => {
          Then("I should be on the smoking cessation screen", then.onSmokingHub(locale, 0, true, "0", "0", CUSTOMER_2_MOMENTS_AND_REASONS));
        });
      });
    });
    When("I exit the smoking hub", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
        When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0), 2000), async () => {
          Then("I see I've earned 251 yucoin today so far on the todays earnings screen", then.textVisible("251 YuCoin"));
        });
      });
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5, 2000), async () => {
      Then("I can see the reward for signing up", then.idVisible(ids.ACTIVITY_LISTING("禁煙に関するアンケート", 50)));
    });
    When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
      When("I wait", when.wait(15000), async () => {
        When("I go back to the yucoin screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0, 2000), async () => {
          Then("I can see the smoking card is there on day 1 ", then.smokingCardVisible(1, locale));
        });
      });
    });
    When("I tap the smoking card", when.tapID(ids.FLAT_LIST_EVENTS, 2000), async () => {
      When("I tap on the milestone for day 1", when.tapID(ids.SMOKING_MILESTONE_TAPPABLE("1"), 2000), async () => {
        Then("I see I have hit the milestone the correct amount of times", then.textVisible(milestone_message[locale].first_time.message));
      });
    });
  });
});
