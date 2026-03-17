import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { INBOX_MESSAGE_ITEM, NOTIF_CENTRE } from "@ids";
import { moneyMasteryFWQDescriptionPage } from "../_resources/fixtures";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import moment from "moment";

Feature("Miscellaneous surveys and surveys stored in the database", async () => {
  Scenario("I can see the survey launch prompt and notification centre item when a survey is live", scenario.start, async () => {
    Given(
      "The survey is launched and users are invited",
      given.triggerSurveyInvite([data.CUSTOMER_SURVEY_PROMPT["business_employee_0"].data.businessEmployeeId], data.CORE_JOURNEY_INSTANCE_SURVEY_PROMPT.data.journeyId, data.SURVEY_CAMPAIGN_FOR_PROMPT_TEST.data.business_survey_campaign_id, moment().format("YYYY-MM-DD")),
      async () => {
        Given("I login as the survey user", given.loginAsUser(data.CUSTOMER_SURVEY_PROMPT.customer, GENERIC_AUTH_PASSWORD), async () => {
          Then("I should be on the yucoin tab", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
        });
      }
    );
    When("I open the notification centre", when.tapID(NOTIF_CENTRE), async () => {
      Then("I should see the survey notification item", then.idVisible(INBOX_MESSAGE_ITEM("A survey is waiting for you!")));
    });
    When("I tap the survey notification to open the survey", when.tapID(INBOX_MESSAGE_ITEM("A survey is waiting for you!")), async () => {
      Then("I should be on the survey intro screen", then.textVisible("Share your feedback!"));
    });
    When("I scroll down the screen", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.4, 2000), async () => {
      When("I tap to start the survey", when.tapID(ids.BUTTON_BASE("Let’s go!", false)), async () => {
        Then("I should see the first survey question", then.textVisible("Maintaining work-life balance is important to you."));
      });
    });
    When("I select an option for the question", when.tapID(ids.CHECK_BOX_STATE("Strongly Disagree", false)), async () => {
      When("I tap Next", when.tapText("Next"), async () => {
        Then("I should see the reward/completion screen", then.textVisible("You’ve just earned 30 YuCoin!"));
      });
    });
  });

  Scenario("I encounter an error on quiz event without journey", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
      When("I swipe to see the event card", when.scrollFromID(ids.EVENT_CARD("Daily health questions"), "left", "fast", 0.5), async () => {
        When("I click on the event card", when.tapText("Money Mastery#2"), async () => {
          Then("I should see the money mastery quiz", then.customerQuizModalVisible("Money Mastery#2", "6", 0));
          Then("I am on the correct description page for the money mastery quiz", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, false));
        });
      });
    });
    When("I click to take the quiz", when.tapText(moneyMasteryFWQDescriptionPage.button), async () => {
      Then("I should see an error message, as this quiz does not have a journey", then.idVisible(ids.TEXT_TEMPLATE("Looks like Yugi’s spotted an error!", "h2")));
    });
  });

  Scenario("Upon completing the 'Automated QA Test Journey 10 Multiplier' card, a user with an earn rate of 1 should receive YuCoin equal to 10 times their earn rate.", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Automated QA Test Journey 10 Multiplier", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN", 3000), async () => {
      Then("I should see Today you've earned '0 YuCoin'", then.textVisible("0 YuCoin"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      When("I click on the Automated QA Test Journey 10 Multiplier card", when.tapIDAtIndex(ids.EVENT_CARD("Automated QA Test Journey 10 Multiplier"), 0, 2000), async () => {
        Then("I should see the 'The choice is yours' question", then.idVisible(ids.TEXT_TEMPLATE("The choice is yours.", "b2b"), 1000));
      });
    });
    When("I select the first choice", when.tapID(ids.CHECKBOX_SELECTORS("initial_multiplier_choice", "red_pill"), 2000), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the Thank you for answering", then.idVisible(ids.TEXT_TEMPLATE("Thank you for answering", "h2")));
      });
    });
    When("I click on the 'Submit' button", when.tapID(ids.BUTTON_BASE("Submit"), 2000), async () => {
      Then("I should see my YuCoin balance go up by 10", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN", 2000), async () => {
      Then("I should see Today you've earned '10 YuCoin'", then.textVisible("10 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.ARROW_BUTTON, "up", "fast", 0.5, 2000), async () => {
      Then("I should see amount of YuCoin given for the questionnaire", then.textVisible("10"));
      Then("I should see Additional rewards showing the questionnaire", then.textVisible("Quiz"));
    });
  });

  Scenario("Upon completing the 'Automated QA Test Journey 500 YuCoin Flat Amount' card, a user with an earn rate of 1 should receive YuCoin equal to a flat amount of 500.", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Automated QA Test Journey 10 Multiplier", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN", 2000), async () => {
      Then("I should see Today you've earned '0 YuCoin'", then.textVisible("0 YuCoin"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      When("I swipe left on the Automated QA Test Journey 10 Multiplier card", when.scrollFromID(ids.EVENT_CARD("Automated QA Test Journey 10 Multiplier"), "left", "fast", 0.5), async () => {
        When("I click on the Automated QA Test Journey 500 YuCoin Flat Amount card", when.tapID(ids.EVENT_CARD("Automated QA Test Journey 500 YuCoin Flat Amount")), async () => {
          Then("I should see the 'The choice is yours' question", then.idVisible(ids.TEXT_TEMPLATE("The choice is yours.", "b2b")));
        });
      });
    });
    When("I select the first choice", when.tapID(ids.CHECKBOX_SELECTORS("initial_flat_choice", "red_pill"), 2000), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the Thank you for answering", then.idVisible(ids.TEXT_TEMPLATE("Thank you for answering", "h2")));
      });
    });
    When("I click on the 'Submit' button", when.tapID(ids.BUTTON_BASE("Submit"), 2000), async () => {
      Then("I should see my YuCoin balance go up by 500", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(500)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN", 2000), async () => {
      Then("I should see Today you've earned '500 YuCoin'", then.textVisible("500 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.ARROW_BUTTON, "up", "fast", 0.5, 2000), async () => {
      Then("I should see amount of YuCoin given for the questionnaire", then.textVisible("500"));
      Then("I should see Additional rewards showing the questionnaire", then.textVisible("Quiz"));
    });
  });
});
