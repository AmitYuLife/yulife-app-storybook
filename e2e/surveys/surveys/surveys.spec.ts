import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "../surveys/_steps/when";
import * as then from "../surveys/_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { moneyMasteryFWQDescriptionPage } from "../_resources/fixtures";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("Miscellaneous surveys and surveys created through the DJB", async () => {
  Scenario("I encounter an error on quiz event without journey and Health Questionnaire is disabled", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_5, data.AUTH_5), async () => {
      When("I scroll to see the HQ hero card", when.scrollFromID(ids.EVENT_CARD("Share your feedback pulse"), "left", "slow", 0.5), async () => {
        When("I click on the event card", when.tapText("Money Mastery#2"), async () => {
          Then("I should see the money mastery quiz", then.customerQuizModalVisible("Money Mastery#2", "6", 0));
          Then("I am on the correct description page for the money mastery quiz", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, false));
        });
      });
    });
    When("I click to take the quiz", when.tapText(moneyMasteryFWQDescriptionPage.button), async () => {
      Then("I should see an error message, as this quiz does not have a journey", then.idVisible(ids.TEXT_TEMPLATE("Looks like Yugi’s spotted an error!", "h2")));
    });
    When("I close the error message", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I scroll up the event page", when.scrollFromID(ids.EVENT_DIALOG_SCREEN_SCROLL, "down", "fast", 0.5), async () => {
        When("I go back to the YuCoin screen", when.tapID(ids.BACK_BUTTON, 1500), async () => {
          When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
            When("I scroll to the bottom of the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
              Then("I should not see the HQ title available", then.textNotVisible("Getting to know Yu!"));
            });
          });
        });
      });
    });
  });

  Scenario("Upon completing the 'Automated QA Test Journey 10 Multiplier' card, a user with an earn rate of 1 should receive YuCoin equal to 10 times their earn rate.", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1, true, "UK"), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Automated QA Test Journey 10 Multiplier", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '0 YuCoin'", then.textVisible("0 YuCoin"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I click on the Automated QA Test Journey 10 Multiplier card", when.tapIDAtIndex(ids.EVENT_CARD("Automated QA Test Journey 10 Multiplier"), 0, 2000), async () => {
        Then("I should see the 'The choice is yours' question", then.idVisible(ids.TEXT_TEMPLATE("The choice is yours.", "b2b"), 1000));
        Then("I should see the progress bar has moved", then.progressBarVisible(100, 100, "#E30D76"));
      });
    });
    When("I select the first choice", when.tapID(ids.CHECKBOX_SELECTORS("initial_choice", "red_pill")), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the Thank you for answering", then.idVisible(ids.TEXT_TEMPLATE("Thank you for answering", "h2")));
      });
    });
    When("I click on the 'Submit' button", when.tapID(ids.BUTTON_BASE("Submit")), async () => {
      Then("I should see my YuCoin balance go up by 10", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '10 YuCoin'", then.textVisible("10 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.ARROW_BUTTON, "up", "fast", 0.5), async () => {
      Then("I should see Additional rewards showing the questionnaire", then.textVisible("Quiz"));
      Then("I should see amount of YuCoin given for the questionnaire", then.textVisible("10"));
    });
  });

  Scenario("Upon completing the 'Automated QA Test Journey 500 YuCoin Flat Amount' card, a user with an earn rate of 1 should receive YuCoin equal to a flat amount of 500.", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1, true), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Automated QA Test Journey 10 Multiplier", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '0 YuCoin'", then.textVisible("0 YuCoin"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I swipe left on the Automated QA Test Journey 10 Multiplier card", when.scrollFromID(ids.EVENT_CARD("Automated QA Test Journey 10 Multiplier"), "left", "fast", 0.2), async () => {
        When("I click on the Automated QA Test Journey 500 YuCoin Flat Amount card", when.tapID(ids.EVENT_CARD("Automated QA Test Journey 500 YuCoin Flat Amount")), async () => {
          Then("I should see the 'The choice is yours' question", then.idVisible(ids.TEXT_TEMPLATE("The choice is yours.", "b2b")));
          Then("I should see the progress bar has moved", then.progressBarVisible(500, 500, "#E30D76"));
        });
      });
    });
    When("I select the first choice", when.tapID(ids.CHECKBOX_SELECTORS("initial_choice", "red_pill")), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the Thank you for answering", then.idVisible(ids.TEXT_TEMPLATE("Thank you for answering", "h2")));
      });
    });
    When("I click on the 'Submit' button", when.tapID(ids.BUTTON_BASE("Submit")), async () => {
      Then("I should see my YuCoin balance go up by 500", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(500)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '500 YuCoin'", then.textVisible("500 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.ARROW_BUTTON, "up", "fast", 0.5), async () => {
      Then("I should see Additional rewards showing the questionnaire", then.textVisible("Quiz"));
      Then("I should see amount of YuCoin given for the questionnaire", then.textVisible("500"));
    });
  });

  Scenario("I can see the hero cards in the correct order", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess("engagement_survey_deep_dive", data.BUSINESS_ACCOUNT_4.data.business_account_id), async () => {
      Given("I have entered a valid email address and valid password", given.loginAsUser(data.CUSTOMER_7.customer, GENERIC_AUTH_PASSWORD), async () => {
        When("I am on the home screen", [], async () => {
          Then("I can see the hero cards fin the correct order", then.checkEachHeroCard);
        });
      });
    });
  });
});
