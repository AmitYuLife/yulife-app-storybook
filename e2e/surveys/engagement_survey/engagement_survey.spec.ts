import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "../engagement_survey/_steps/when";
import * as then from "../engagement_survey/_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import * as helper from "./_steps/helpers";
import { ENGAGEMENT_SURVEY_QUESTIONS } from "./_resources/constants";

Feature("Engagement Surveys", async () => {
  // UPDATE - THIS NEEDS AN API CHANGE TO WORK - TESTED LOCALLY, BUT WON'T GET IN BEFORE THE RUNNERS TONIGHT SO LOOKING TO SKIP FOR TONIGHT
  ScenarioSkip("As a user that works at 2 companies, I can traverse through the engagement survey until it is complete and I receive the correct amount of YuCoin for English.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_5.data.customerId, data.BUSINESS_ACCOUNT_4.data.business_account_id, data.BUSINESS_BACKGROUND_10.data.business_background_id]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_5, data.AUTH_5), async () => {
        Then("I should see my YuCoin balance of 200, before I finish the Engagement Survey", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      });
    });
    When("I click on the engagement survey hero card", when.tapIDAtIndex(ids.EVENT_CARD("Share your feedback"), 0), async () => {
      Then("I should see the intro screen for the engagement survey", then.idVisible(ids.TEXT_TEMPLATE("Share your feedback!", "h3")));
      Then("I should see how much YuCoin will be rewarded", then.idVisible(ids.CONTENT_ITEM_INFO_CARD("**Rewards**\n\nEarn 300 YuCoin!")));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I click on the 'let's go!' button", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
        Then("I should be on the 'maintaining work-life balance' question", then.idVisible(ids.TEXT_TEMPLATE("Maintaining work-life balance is important to you.", "b2b")));
        Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
      });
    });
    When("I cycle through all the checkbox options and end up on Strongly agree", when.cycleThroughEngagementSurveyAgreeCheckBoxes, async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'acceptable workload' question", then.idVisible(ids.TEXT_TEMPLATE("You have an acceptable workload within your standard working hours.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'supported by the company' question", then.idVisible(ids.TEXT_TEMPLATE("You feel supported by the company or managers in taking paid leave.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then(
        "I should be on the 'Biz 13 provides adequate resources' question and as a user who works at 2 companies I should only see the business at the zeroth index listed",
        then.idVisible(ids.TEXT_TEMPLATE("Biz 13 provides adequate resources to support your mental health (e.g., counselling services, stress checks).", "b2b"))
      );
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'feel stressed at work' question", then.idVisible(ids.TEXT_TEMPLATE("You frequently feel stressed at work due to your job responsibilities.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'access to a working environment' question", then.idVisible(ids.TEXT_TEMPLATE("You have access to a working environment where you can be at your best and most productive.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with your current role' question", then.idVisible(ids.TEXT_TEMPLATE("You are satisfied with your current role at Biz 13.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I click on the back button symbol", when.tapID(ids.LEFT_HEADING_BUTTON()), async () => {
      Then("I should be on the 'access to a working environment' question", then.idVisible(ids.TEXT_TEMPLATE("You have access to a working environment where you can be at your best and most productive.", "b2b")));
      Then("I should see the checkbox for the first option is still selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with your current role' question", then.idVisible(ids.TEXT_TEMPLATE("You are satisfied with your current role at Biz 13.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with the level of reward' question", then.idVisible(ids.TEXT_TEMPLATE("You are satisfied with the level of reward and appreciation for your contributions.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'heard and valued by your manager' question", then.idVisible(ids.TEXT_TEMPLATE("Your opinions are heard and valued by your manager.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'level of collaboration and teamwork' question", then.idVisible(ids.TEXT_TEMPLATE("The level of collaboration and teamwork is high in my team.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'level of collaboration and teamwork is high between teams", then.idVisible(ids.TEXT_TEMPLATE("The level of collaboration and teamwork is high between teams.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'receive clear and timely communication' question", then.idVisible(ids.TEXT_TEMPLATE("You receive clear and timely communication from senior leadership about important decisions.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'have trust in the senior leadership team' question", then.idVisible(ids.TEXT_TEMPLATE("You have trust in the senior leadership team.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with the opportunities for professional growth' question", then.idVisible(ids.TEXT_TEMPLATE("Based on your current role, you are satisfied with the opportunities for professional growth and skill development at Biz 13.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'constructive feedback and coaching from your manager' question", then.idVisible(ids.TEXT_TEMPLATE("You receive constructive feedback and coaching from your manager to help you grow in your role.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'see yourself continuing to work for the next 3+ years' question", then.idVisible(ids.TEXT_TEMPLATE("You see yourself continuing to work at Biz 13 for the next 3+ years?", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'Your growth and development in the company is supported by:' question", then.idVisible(ids.TEXT_TEMPLATE("Your growth and development in the company is supported by:", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveySupportedByCheckBoxes);
    });
    When("I select first option", when.tapID("growth_development_supported_choice_my_manager"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("growth_development_supported_choice_my_manager"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'believe there are equal opportunities for career advancement", then.idVisible(ids.TEXT_TEMPLATE("You believe there are equal opportunities for career advancement at Biz 13.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'Please elaborate on why you think this' question", then.idVisible(ids.TEXT_TEMPLATE("Please elaborate on why you think this.", "h2")));
      Then("I can see that the character counter shows 0.", then.idVisible(ids.CONTENT_ITEM_INPUT_CHARACTER_COUNTER("equal_opportunities_reason_text-input", 0)));
    });
    When("I type in 1001 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, "a".repeat(1001)), async () => {
      Then("I can see that the character counter only goes up to 1000, which means the input is correctly restricting the user from typing beyond that limit.", then.idVisible(ids.CONTENT_ITEM_INPUT_CHARACTER_COUNTER("equal_opportunities_reason_text-input", 1000)));
      Then("I swipe to the bottom", then.scrollFromID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, "down", "fast", 0.5));
      Then("I swipe to the bottom", then.scrollFromID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, "up", "fast", 0.5));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'You feel your role contributes meaningfully' question", then.idVisible(ids.TEXT_TEMPLATE("You feel your role contributes meaningfully to the company’s success.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'You believe in the company’s vision' question", then.idVisible(ids.TEXT_TEMPLATE("You believe in the company’s vision and direction.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'You are proud to work at your company' question", then.idVisible(ids.TEXT_TEMPLATE("You are proud to work at Biz 13.", "b2b")));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID(ids.CHECK_BOX_STATE("Strongly agree", false)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.CHECK_BOX_STATE("Strongly agree", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'What motivates you to do your best work' question", then.idVisible(ids.TEXT_TEMPLATE("What motivates you to do your best work?", "h2")));
    });
    When("I type in 2 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_WORK_MOTIVATION, "a".repeat(2)), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'What do you enjoy most about working at Biz' question", then.idVisible(ids.TEXT_TEMPLATE("What do you enjoy most about working at Biz 13?", "h2")));
    });
    When("I type in 2 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ENJOY_ABOUT_COMPANY, "a".repeat(2)), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'the one thing you would change about Biz' question", then.idVisible(ids.TEXT_TEMPLATE("What's the one thing you would change about Biz 13 to make your experience there better?", "h2")));
    });
    When("I type in 2 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ONE_CHANGE_TO_IMPROVE_COMPANY, "a".repeat(2)), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'How likely are you to recommend Biz' question", then.idVisible("TEXT_TEMPLATE_How likely are you to recommend Biz 13 as a place to work? (1 being very unlikely, 10 being very likely.)b2b"));
      Then("I should see all check box's", then.canSeeEngagementSurvey1To10CheckBoxes);
    });
    When("I click on the back button symbol", when.tapID(ids.LEFT_HEADING_BUTTON()), async () => {
      Then("I should be back on the 'the one thing you would change about Biz' question", then.idVisible("TEXT_TEMPLATE_What's the one thing you would change about Biz 13 to make your experience there better?h2"));
      Then("My last typed out answer should still be filled in", then.textVisible("a".repeat(2)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be back on the 'How likely are you to recommend Biz' question", then.idVisible("TEXT_TEMPLATE_How likely are you to recommend Biz 13 as a place to work? (1 being very unlikely, 10 being very likely.)b2b"));
      Then("I should see all check box's", then.canSeeEngagementSurvey1To10CheckBoxes);
    });
    When("I select choice 1", when.tapID(ids.WORKPLACE_CHOICE(1)), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible(ids.WORKPLACE_CHOICE(1)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should see how much YuCoin will be rewarded", then.idVisible(ids.MARKDOWN("+300 ![](https://yulife-develop.imgix.net/journeys/yuCoin.svg?ixlib=js-3.2.1&w=24&h=24&dpr=3&s=3cb4cda29e509a2eb7f6cb42af14a01e)")));
      Then("I should see Yucoin asset", then.idVisible(ids.CONTENT_MIDDLE_ITEM_IMAGE("https://yulife-develop.imgix.net/journeys/celebration-illustration-2025-04-03.svg?ixlib=js-3.2.1&w=272&h=272&fit=clip&fm=png&dpr=3&s=0588315aa6720d45de5d790d8327ec82")));
      Then("I should see copy header", then.idVisible(ids.TEXT_TEMPLATE("Thank you for your feedback!", "h3")));
      Then("I should see copy body", then.idVisible(ids.MARKDOWN("Here’s some YuCoin for helping to make your company experience even better.")));
      Then("I should see cta button", then.idVisible(ids.BUTTON_BASE("Claim")));
    });
    When("I click on the 'Claim' button", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      Then("I should see my YuCoin balance increase by 300 YuCoins for completing the survey to make a total of 500 YuCoins", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(500), 1500));
    });
    // This part is testing the invalidation flow for a user who has already completed the survey and once they complete a second time receive no reward
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_5.data.customerId, data.BUSINESS_ACCOUNT_4.data.business_account_id], [data.CUSTOMER_5.data.customerId]), async () => {
      When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
        When("I click on the engagement survey hero card", when.tapIDAtIndex(ids.EVENT_CARD("Share your feedback"), 0), async () => {
          When("I swipe to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
            When("I click on the 'let's go!' button", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
              Then("I should be on the 'maintaining work-life balance' question", then.idVisible(ids.TEXT_TEMPLATE("Maintaining work-life balance is important to you.", "b2b")));
            });
          });
        });
      });
    });
    helper.agreeAndProgressToNextQuestion(ENGAGEMENT_SURVEY_QUESTIONS)();
    When("I click My manager", when.tapID(ids.CHECK_BOX_STATE("My manager", false)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the next question", then.nextQuestionVisible("You believe there are equal opportunities for career advancement at Biz 13."));
      });
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.idVisible(ids.TEXT_TEMPLATE("Please elaborate on why you think this.", "h2")));
    });
    When("I type in 2 character into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, "a".repeat(2)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the next question", then.nextQuestionVisible("You feel your role contributes meaningfully to the company’s success."));
      });
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You believe in the company’s vision and direction."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You are proud to work at Biz 13."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.idVisible(ids.TEXT_TEMPLATE("What motivates you to do your best work?", "h2")));
    });
    When("I type in 2 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_WORK_MOTIVATION, "a".repeat(2)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the next question", then.idVisible(ids.TEXT_TEMPLATE("What do you enjoy most about working at Biz 13?", "h2")));
      });
    });
    When("I type in 2 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ENJOY_ABOUT_COMPANY, "a".repeat(2)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the next question", then.idVisible(ids.TEXT_TEMPLATE("What's the one thing you would change about Biz 13 to make your experience there better?", "h2")));
      });
    });
    When("I type in 2 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ONE_CHANGE_TO_IMPROVE_COMPANY, "a".repeat(2)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the next question", then.nextQuestionVisible("How likely are you to recommend Biz 13 as a place to work? (1 being very unlikely, 10 being very likely.)"));
      });
    });
    When("I click 10", when.tapID(ids.CHECK_BOX_STATE("10", false)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the claim screen", then.idVisible(ids.TEXT_TEMPLATE("Thank you for your feedback!", "h3")));
      });
    });
    When("I click on the 'Claim' button", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      Then("I should see my YuCoin balance not increase as I already completed the survey and didnt earn anything", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(500), 1500));
    });
  });

  // @UPDATE - SKIPPING FOR NOW AS WITHOUT BUSINESS THE WORKER DOESN"T SEEM TO BE WORKING - FIXING TOMORROW
  ScenarioSkip("If no business is available, when I can traverse through the engagement survey I will see a fallback 'your company' instead of the business name.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_4.data.customerId]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_4, data.AUTH_4), async () => {
        Then("I should see the engagement survey hero card", then.idVisibleAtIndex(ids.EVENT_CARD("Share your feedback"), 0));
        Then(
          "I should see the Engagement Survey hero card displaying the correct YuCoin reward — 300 YuCoin — based on the user's earn rate of 10 and the survey's 30* multiplier.",
          then.idVisibleAtIndex(ids.EVENT_DESCRIPTION("Earn **300** YuCoin and help improve your workplace anonymously!", "#5A5A5C"), 0)
        );
        Then("I should see the event card has the correct forest colour", then.idVisibleAtIndex(ids.EVENT_CARD_COLOUR("#FFFFE5"), 0));
      });
      When("I click on the engagement survey hero card", when.tapIDAtIndex(ids.EVENT_CARD("Share your feedback"), 0), async () => {
        When("I click on the engagement survey hero card", when.fillOutEngagementSurvey, async () => {
          Then("As a user who has no work business listed, I should see 'your company' provides adequate resources' ", then.idVisible(ids.TEXT_TEMPLATE("your company provides adequate resources to support your mental health (e.g., counselling services, stress checks).", "b2b")));
        });
      });
    });
  });

  // SKIPPING BUT ADDING TO FIXES FOR TOMORROW
  ScenarioSkip("I can see and complete a Engagement Pulse Survey seeded from the DJB", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_6.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see my YuCoin balance of 200, before I finish the survey", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      Then("I should see the survey's hero card", then.engagementSurveyHeroCardVisible);
      Then("I should see the event card has the correct forest colour", then.idVisibleAtIndex(ids.EVENT_CARD_COLOUR("#FFFFE5"), 0));
    });
    When("I tap on the surveys hero card", when.tapID(ids.EVENT_CARD("Share your feedback pulse")), async () => {
      Then("I should see the survey's intro screen", then.pulseSurveyIntroVisible);
    });
    When("I press lets go ", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
      Then("I should be on the first question", then.idVisible(ids.TEXT_TEMPLATE("What's the one thing you would change about your company to make your experience there better?", "h2")));
    });
    When("I type into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ONE_CHANGE_TO_MAKE_COMPANY_BETTER, "a".repeat(2)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the second question", then.nextQuestionVisible("How likely are you to recommend your company as a place to work? (1 being very unlikely, 10 being very likely.)"));
      });
    });
    When("I click 10", when.tapID(ids.CHECK_BOX_STATE("10", false)), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the claim screen", then.idVisible(ids.TEXT_TEMPLATE("Thank you for answering this survey.", "h2")));
      });
    });
    When("I click on the 'Submit' button", when.tapID(ids.BUTTON_BASE("Submit")), async () => {
      Then("I should see my YuCoin balance has increased by 30 coins", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(230), 1500));
    });
  });
});
