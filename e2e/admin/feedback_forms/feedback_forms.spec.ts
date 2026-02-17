import { Feature, Scenario, Given, When, Then, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("Feedback forms should behave correctly", async () => {
  Scenario("As a user with a feedback form to compelte, I should see this on login (positive rating)", scenario.start, async () => {
    Given("I login as a user", given.loginForFeedbackForm(data.CUSTOMER_8, data.AUTH_8), async () => {
      When("I am on the home screen", [], async () => {
        Then("I should see the feedback form", then.feedbackFormVisible(data.FEEDBACK_FORM_1.data.title));
        Then("I should see question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_1.data.questions[0].questionText)));
        Then("I should see the left label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_1.data.questions[0].labels.left)));
        Then("I should see the right label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_1.data.questions[0].labels.right)));
      });
      When("I Tap 8", when.tapID(ids.SLIDER_INPUT(8)), async () => {
        When("I tap next question", when.tapText("next question"), async () => {
          Then("I should see the correct next question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_1.data.questions[2].questionText)));
          Then("I should see the text input", then.idVisible(ids.FEEDBACK_TEXT_INPUT));
        });
      });
      When("I type something", when.typeViaID(ids.FEEDBACK_TEXT_INPUT, "duels"), async () => {
        Then("I should see the text I just input", then.textVisible("duels", 2000));
      });
      When("I tap submit", when.tapText("submit"), async () => {
        Then("I should be on the today screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
      });
    });
  });

  Scenario("As a user with a feedback form to compelte, I should see this on login (negative rating)", scenario.start, async () => {
    Given("I login as a user", given.loginForFeedbackForm(data.CUSTOMER_8, data.AUTH_8), async () => {
      When("I am on the home screen", [], async () => {
        Then("I should see the feedback form", then.feedbackFormVisible(data.FEEDBACK_FORM_1.data.title));
        Then("I should see question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_1.data.questions[0].questionText)));
        Then("I should see the left label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_1.data.questions[0].labels.left)));
        Then("I should see the right label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_1.data.questions[0].labels.right)));
      });

      When("I Tap 3", when.tapID(ids.SLIDER_INPUT(3)), async () => {
        When("I tap next question", when.tapText("next question"), async () => {
          Then("I should see the correct next question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_1.data.questions[1].questionText)));
          Then("I should see the text input", then.idVisible(ids.FEEDBACK_TEXT_INPUT));
        });
      });
      When("I type something", when.typeViaID(ids.FEEDBACK_TEXT_INPUT, "dark mode"), async () => {
        Then("I should see the text I just input", then.textVisible("dark mode", 2000));
      });
      When("I tap submit", when.tapText("submit"), async () => {
        Then("I should be on the today screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
      });
    });
  });

  Scenario("As a user with a feedback form to compelte, I should see this on login (positive rating:8)", scenario.start, async () => {
    Given("I login as a user", given.loginForFeedbackForm(data.CUSTOMER_9, data.AUTH_9), async () => {
      When("I am on the home screen", [], async () => {
        Then("I should see the feedback form Title", then.feedbackFormVisible(data.FEEDBACK_FORM_2.data.title));
        Then("I should see question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[0].questionText)));
        Then("I should see the left label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.left)));
        Then("I should see the right label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.right)));
      });
    });
    When("I Tap 8", when.tapID(ids.SLIDER_INPUT(8)), async () => {
      When("I tap Submit your rating", when.tapText("Submit your rating"), async () => {
        Then("I should see the correct question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[1].questionText)));
        Then("I should see the correct label question text", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[1].labels.placeholder)));
        Then("I should see the text input", then.idVisible(ids.FEEDBACK_TEXT_INPUT));
      });
    });
    When("I type something", when.typeViaID(ids.FEEDBACK_TEXT_INPUT, "duels"), async () => {
      Then("I should see the text I just input", then.textVisible("duels", 2000));
    });
    When("I tap Submit your feedback", when.tapText("Submit feedback", 2000), async () => {
      Then("I should be on the today screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 300));
    });
    When("I close and reopen the app", when.reloadOnly, async () => {
      Then("The Feedback Form should not popUp again", then.textNotVisible(data.FEEDBACK_FORM_2.data.title, 6000));
    });
  });

  Scenario("As a user with a feedback form to compelte, I should see this on login (neutral rating:7)", scenario.start, async () => {
    Given("I login as a user", given.loginForFeedbackForm(data.CUSTOMER_9, data.AUTH_9), async () => {
      When("I am on the home screen", [], async () => {
        Then("I should see the feedback form Title", then.feedbackFormVisible(data.FEEDBACK_FORM_2.data.title));
        Then("I should see question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[0].questionText)));
        Then("I should see the left label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.left)));
        Then("I should see the right label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.right)));
      });
    });
  });
  When("I Tap 7", when.tapID(ids.SLIDER_INPUT(7)), async () => {
    When("I tap Submit your rating", when.tapText("Submit your rating"), async () => {
      Then("I should see the correct question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[2].questionText)));
      Then("I should see the correct label question text", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[2].labels.placeholder)));
      Then("I should see the text input", then.idVisible(ids.FEEDBACK_TEXT_INPUT));
    });
  });
  When("I type something", when.typeViaID(ids.FEEDBACK_TEXT_INPUT, "car insurance"), async () => {
    Then("I should see the text I just input", then.textVisible("car insurance", 2000));
  });
  When("I tap Submit your feedback", when.tapText("Submit feedback"), async () => {
    Then("I should be on the today screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
  });
  When("I close and reopen the app", when.reloadOnly, async () => {
    Then("The Feedback Form should not popUp again", then.textNotVisible(data.FEEDBACK_FORM_2.data.title, 6000));
  });
});

Scenario("As a user with a feedback form to compelte, I should see this on login (bad rating:4)", scenario.start, async () => {
  Given("I login as a user", given.loginForFeedbackForm(data.CUSTOMER_9, data.AUTH_9), async () => {
    When("I am on the home screen", [], async () => {
      Then("I should see the feedback form Title", then.textVisible(data.FEEDBACK_FORM_2.data.title, 5000));
      Then("I should see question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[0].questionText)));
      Then("I should see the left label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.left)));
      Then("I should see the right label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.right)));
    });
  });
  When("I Tap 4", when.tapID(ids.SLIDER_INPUT(4)), async () => {
    When("I tap Submit your rating", when.tapText("Submit your rating"), async () => {
      Then("I should see the correct question text", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[3].questionText)));
      Then("I should see the correct label question text", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[3].labels.placeholder)));
      Then("I should see the text input", then.idVisible(ids.FEEDBACK_TEXT_INPUT));
    });
  });
  When("I type something", when.typeViaID(ids.FEEDBACK_TEXT_INPUT, "more rewards"), async () => {
    Then("I should see the text I just input", then.textVisible("more rewards", 2000));
  });
  When("I tap Submit your feedback", when.tapText("Submit feedback"), async () => {
    Then("I should be on the today screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
  });
  When("I close and reopen the app", when.reloadOnly, async () => {
    Then("The Feedback Form should not popUp again", then.textNotVisible(data.FEEDBACK_FORM_2.data.title, 6000));
  });
});

Scenario("As a user with a feedback form to compelte, I should see this on login (negative rating:0)", scenario.start, async () => {
  Given("I login as a user", given.loginForFeedbackForm(data.CUSTOMER_9, data.AUTH_9), async () => {
    When("I am on the home screen", [], async () => {
      Then("I should see the feedback form Title", then.textVisible(data.FEEDBACK_FORM_2.data.title, 5000));
      Then("I should see question", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[0].questionText)));
      Then("I should see the left label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.left)));
      Then("I should see the right label for this question", then.idVisible(ids.SLIDER_LABEL(data.FEEDBACK_FORM_2.data.questions[0].labels.right)));
    });
  });
  When("I Tap 0", when.tapID(ids.SLIDER_INPUT(0), 4000), async () => {
    When("I tap Submit your rating", when.tapText("Submit your rating"), async () => {
      Then("I should see the correct question text", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[3].questionText)));
      Then("I should see the correct label question text", then.idVisible(ids.FEEDBACK_FORM_QUESTION(data.FEEDBACK_FORM_2.data.questions[3].labels.placeholder)));
      Then("I should see the text input", then.idVisible(ids.FEEDBACK_TEXT_INPUT));
    });
  });
  When("I type something", when.typeViaID(ids.FEEDBACK_TEXT_INPUT, "This is the way"), async () => {
    Then("I should see the text I just input", then.textVisible("This is the way", 2000));
  });
  When("I tap Submit your feedback", when.tapID(ids.GP_CONTINUE, 4000), async () => {
    Then("I should be on the today screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 4000));
  });
  When("I close and reopen the app", when.reloadOnly, async () => {
    Then("The Feedback Form should not popUp again", then.textNotVisible(data.FEEDBACK_FORM_2.data.title, 6000));
  });
});
