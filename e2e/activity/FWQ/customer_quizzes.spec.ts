import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { hqInfoCopy, moneyMasteryFWQDescriptionPage } from "./_resources/fixtures";
import { getTranslation } from "_utils/translations/getTranslations";
import { translations } from "@app/locale/translations";
import { yuscreenImages } from "@images";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("Quizzes and questionnaires", async () => {
  Scenario("I encounter an error on quiz event without journey and Health Questionnaire is disabled", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_137_GHI_REWARDS, data.AUTH_137), async () => {
      Then("I should see the money mastery quiz", then.customerQuizModalVisible("Money Mastery#2", "6", 0));
    });
    When("I click on the event card", when.tapText("Money Mastery#2"), async () => {
      Then("I am on the correct description page for the money mastery quiz", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, false));
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

  Scenario("I should see the Health Questionnaire available in Japanese", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_73, data.AUTH_73), async () => {
      Then("I should see my YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      Then("I should see the menu items", then.menuItemsVisible("enhanced"));
    });
    When("I tap settings", when.tapMenuItem("Settings"), async () => {
      Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
    });
    When("I scroll down", when.scrollFromID(ids.SETTINGS_SCREEN_SCROLL, "up", "slow", 0.4), async () => {
      Then("I should see the pre-selected server language is en-GB", then.languageSettingVisible("en-GB"));
    });
    When("I tap the language options", when.tapText("Language", 2000, true), async () => {
      Then("I should be on the langauge selector screen", then.languageSelectorVisible);
      Then("I should see all the available languages listed", then.allLanguagesVsible);
    });
    When("I tap to switch to Japanese", when.tapText(`${translations["ja-JP"].flag} ${translations["ja-JP"].name}`, 2000, true), async () => {
      When("I close the pop up", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
        Then("I should be back on my YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2000));
        Then("I should see that the YuCoin screen has changed in Japanese", then.textVisible(getTranslation("ja-JP").navbar.yucoin.label, 2500));
      });
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
        Then("I should see the Let's go! button in Japanese", then.textVisible(getTranslation("ja-JP").labels.cta.lets_go, 2000));
      });
    });
    When("I tap on the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should see the HQ information screen heading in Japanese", then.textVisible(data.CORE_JOURNEY_STEPS_09.data.templateUi.copy.heading["ja-JP"]));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I press the Let’s go! button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE(""), 2000), async () => {
        Then("I should see the first question in Japanese", then.textVisible(data.CORE_JOURNEY_STEPS_01.data.templateUi.copy.heading["ja-JP"]));
        Then("I should see the first answer option in Japanese", then.textVisible(getTranslation("ja-JP").labels.cta.yes));
      });
    });
    When("I close the HQ", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.BACK_BUTTON), async () => {
        Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("健康チェックの質問")));
        Then("I should see the correct markdown for the HQ", then.idVisible(ids.EVENT_DESCRIPTION("健康に関する質問への回答で\n**40**![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7)をプレゼント。", "#464647")));
        Then("I should see the HQ card's pink arrow", then.idVisible(ids.PINK_ARROW_ICON));
      });
    });
  });

  Scenario("I should see the Health Questionnaire and be able to complete, if I have not done so before", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_73, data.AUTH_73), async () => {
      Then("I should see my YuCoin balance of 560, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560)));
      Then("I should see '200 YuCoin Today' before the HQ", then.textVisible("200 YuCoin today"));
    });
    When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should see yuscreen v5", then.idVisible(ids.YUMOJI_YUSCREEN_V5, 4000));
      Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(200, 280));
      Then("I should see the challenge nudge", then.challengeNudgeVisible(1, 80));
    });
    When("I swipe left on the challenge nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon), "left", "fast"), async () => {
      When("I swipe left on the steps nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.stepIcon), "left", "fast"), async () => {
        When("I swipe left on the meditation nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.lotusIcon), "left", "fast"), async () => {
          When("I swipe left on the cycling nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.helmetIcon), "left", "fast"), async () => {
            Then("I should see the HQ nudge", then.hqNudgeVisible());
          });
        });
      });
    });
    When("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I close the HQ", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("Daily health questions")));
      });
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
        Then("I can see the HQ title", then.textVisible("Getting to know Yu!"));
        Then("I should see the Let's go! button", then.textVisible("Let's go!"));
      });
    });
    When("I press the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I close the HQ", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.LEFT_HEADIND_BUTTON("Today’s Earnings")), async () => {
        Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("Daily health questions")));
        Then("I should see the correct markdown for the HQ", then.idVisible(ids.EVENT_DESCRIPTION("Earn **40**![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7) by discovering more about your health.", "#464647")));
        Then("I should see the HQ card's pink arrow", then.idVisible(ids.PINK_ARROW_ICON));
      });
    });
    When("I tap the event panel for the HQ", when.tapID(ids.EVENT_CARD("Daily health questions")), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I press the Let’s go! button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_01));
      Then("I should see the progress bar in the start position", then.progressBarVisible(50, 400));
    });
    When("I select the first option for Q1", when.tapText(data.CORE_JOURNEY_STEPS_01.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_01, 0));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_01, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_02));
      Then("I should see the progress bar has moved", then.progressBarVisible(100, 400));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_01));
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_01, 0));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_01, 1));
      Then("I should see the progress bar has moved down", then.progressBarVisible(50, 400));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_02));
      Then("I should see the progress bar has moved", then.progressBarVisible(100, 400));
      Then("I should not see the first option selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02, 0));
      Then("I should not see the second option selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02, 1));
    });
    When("I select the second option for Q2", when.tapText(data.CORE_JOURNEY_STEPS_02.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_02, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the third question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_03));
      Then("I should see the progress bar has moved", then.progressBarVisible(150, 400));
    });
    When("I select the second option for Q3", when.tapText(data.CORE_JOURNEY_STEPS_03.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_03, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_03));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fourth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_04));
      Then("I should see the progress bar has moved", then.progressBarVisible(200, 400));
    });
    When("I select the first option for Q4", when.tapText(data.CORE_JOURNEY_STEPS_04.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_04));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_04, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fifth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_05));
      Then("I should see the progress bar has moved", then.progressBarVisible(250, 400));
    });
    When("I select the first option for Q5", when.tapText(data.CORE_JOURNEY_STEPS_05.data.templateUi.options[0].label["en-GB"]), async () => {
      When("I also select the third option for Q5", when.tapText(data.CORE_JOURNEY_STEPS_05.data.templateUi.options[2].label["en-GB"]), async () => {
        Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_05));
        Then("I should see the third option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_05, 2));
        Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_05, 1));
        Then("I should see the fourth option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_05, 3));
        Then("I should see the fifth option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_05, 4));
      });
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the sixth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_06));
      Then("I should see the progress bar has moved", then.progressBarVisible(300, 400));
    });
    When("I select the first option for Q6", when.tapText(data.CORE_JOURNEY_STEPS_06.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_06));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_06, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the seventh question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_07));
      Then("I should see the progress bar has moved", then.progressBarVisible(350, 400));
    });
    When("I select the first option for Q7", when.tapText(data.CORE_JOURNEY_STEPS_07.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_07));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_07, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the eigth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_08));
      Then("I should see the progress bar has moved", then.progressBarVisible(400, 400));
    });
    When("I select the first option for Q8", when.tapText(data.CORE_JOURNEY_STEPS_08.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_08));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_08, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("Thank you for your feedback!", "h3")));
      Then(
        "As a user who is on a earnRate: 10, for completing the HQ that has a yuCoinRewardAsEarnRateMultiple: 4, I should receive 40 YuCoin for completing it",
        then.idVisible(ids.MARKDOWN("+40 ![](https://yulife-develop.imgix.net/journeys/yuCoin.svg?ixlib=js-3.2.1&w=24&h=24&dpr=3&s=3cb4cda29e509a2eb7f6cb42af14a01e)"))
      );
    });
    When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(240, 280));
        Then("I should see the completed HQ nudge", then.completedHQNudgeVisible());
      });
    });
    When("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
      Then("I should be on the same screen, and still see the completed HQ nudge", then.completedHQNudgeVisible());
    });
    When("I tap earned from todays activities", when.tapID(ids.MAXIMISE_TODAYS_EARNINGS(240, 280)), async () => {
      Then("I see the 240 yucoin earned today so far", then.textVisible("240 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"));
      Then("I should see that I completed the qustionnaire", then.textVisible("Quiz"));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("40", 1500));
    });
  });

  Scenario("Once I complete the journey, press cta - I should see the HQ journey modal is gone", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_44, data.AUTH_44, true, "United Kingdom", false), async () => {
      Then("I should see my YuCoin balance of 200, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
      Then("I should not see the event panel, as I have completed one before", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I see the 0 yucoin earned today so far", then.textVisible("0 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the HQ title", then.textVisible("Getting to know Yu!"));
      Then("I should see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I press the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I can see the HQ description screen title", then.idVisible(ids.TEXT_TEMPLATE("Getting to know Yu!", "h3")));
      Then("I can see the HQ description screen title", then.idVisible(ids.MARKDOWN("Discovering more about your health is always a good thing, but we’re also here to reward you for that intention. Receive some **extra YuCoin** as you sail through these questions!")));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TEXT_TEMPLATE("Getting to know Yu!", "h3"), "up", "fast", 0.5), async () => {
      When("I click on the let's go! button", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
        Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_11));
      });
    });
    When("I select the first option for Q1", when.tapText(data.CORE_JOURNEY_STEPS_11.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_11));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_11, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_12));
    });
    When("I select the second option for Q2", when.tapText(data.CORE_JOURNEY_STEPS_12.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_12, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_12));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the third question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_13));
    });
    When("I select the second option for Q3", when.tapText(data.CORE_JOURNEY_STEPS_13.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_13, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_13));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fourth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_14));
    });
    When("I select the first option for Q4", when.tapText(data.CORE_JOURNEY_STEPS_14.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_14));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_14, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fifth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_15));
    });
    When("I select the first option for Q5", when.tapText(data.CORE_JOURNEY_STEPS_15.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_15));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_15, 1));
    });
    When("I tap the close button", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      Then("I should be back on the today's earning screen, and can see the HQ title", then.textVisible("Getting to know Yu!"));
      Then("I should be back on the today's earning screen, and I should see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I tap Let's go!", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should be on the fifth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_15));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_15));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_15, 1));
    });
    When("I select the first option for Q5", when.tapText(data.CORE_JOURNEY_STEPS_15.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_15));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_15, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the sixth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_16));
    });
    When("I select the first option for Q6", when.tapText(data.CORE_JOURNEY_STEPS_16.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_16));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_16, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the seventh question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_17));
    });
    When("I select the first option for Q7", when.tapText(data.CORE_JOURNEY_STEPS_17.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_17));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_17, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the eigth question", then.onHQHeightQuestion(data.CORE_JOURNEY_STEPS_18));
    });
    When("I tap 'Enter your height", when.tapID(ids.TEXT_TEMPLATE("Enter your height", "l1b")), async () => {
      Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("150 cm")));
    });
    When("I choose scroll to 143 cm", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("150 cm"), "down", "slow"), async () => {
      Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("143 cm")));
    });
    When("I tap switch to ft", when.tapID(ids.SWITCH_ICON), async () => {
      Then("I should see switch to cm", then.textVisible("Switch to cm"));
      Then("I should see 5ft", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("5 ft")));
      Then("I should see 0in", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("0 in")));
    });
    When("I scroll to 9 ft", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("5 ft"), "up", "slow"), async () => {
      When("I scroll to 11 in", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("0 in"), "up", "slow"), async () => {
        Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("9 ft")));
        Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("11 in")));
      });
    });
    When("I tap select", when.tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON), async () => {
      Then("I should see 9ft 11 in as the selected height", then.idVisible(ids.TEXT_TEMPLATE("9ft 11in", "l1b")));
    });
    When("I click the next button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("Thank you for your feedback!", "h3")));
      Then(
        "As a user who is on a earnRate: 1, for completing the HQ that has a yuCoinRewardAsEarnRateMultiple: 4, I should receive 4 YuCoin for completing it",
        then.idVisible(ids.MARKDOWN("+4 ![](https://yulife-develop.imgix.net/journeys/yuCoin.svg?ixlib=js-3.2.1&w=24&h=24&dpr=3&s=3cb4cda29e509a2eb7f6cb42af14a01e)"))
      );
    });
    When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      Then("I should not see the HQ title", then.textNotVisible("Getting to know Yu!"));
      Then("I should not see the HQ Let's go! button", then.textNotVisible("Let's go!"));
    });
    When("I close this screen", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the daily screen", then.textVisible("Take a challenge (2 left today)"));
      Then("I should not see the event panel", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]));
      Then("I should see my YuCoin balance of 4, after I finish the HQ", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(4)));
      Then("I should see '4 YuCoin Today' due to finishing HQ", then.textVisible("4 YuCoin today"));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I should see 4 YuCoin for reward", then.textVisible("4 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"));
      Then("I should see that I completed the questionnaire", then.textVisible("Quiz"));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("4", 1500));
    });
  });

  Scenario("As a user that works at 2 companies, I can traverse through the engagement survey until it is complete and I receive the correct amount of YuCoin for English.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_137_GHI_REWARDS.data.customerId, data.BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id, data.BUSINESS_BACKGROUND_10.data.business_background_id]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_137_GHI_REWARDS, data.AUTH_137), async () => {
        Then("I should see my YuCoin balance of 1000, before I finish the Engagement Survey", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1000)));
      });
    });
    When("I click on the engagement survey hero card", when.tapID(ids.EVENT_HEADING("Share your feedback", "#5A5A5C")), async () => {
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
    When("I click on the back button symbol", when.tapID("LEFT_HEADIND_BUTTONnull"), async () => {
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
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_WORK_MOTIVATION, "a".repeat(100)), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'What do you enjoy most about working at Biz' question", then.idVisible(ids.TEXT_TEMPLATE("What do you enjoy most about working at Biz 13?", "h2")));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ENJOY_ABOUT_COMPANY, "a".repeat(100)), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'the one thing you would change about Biz' question", then.idVisible(ids.TEXT_TEMPLATE("What's the one thing you would change about Biz 13 to make your experience there better?", "h2")));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ONE_CHANGE_TO_IMPROVE_COMPANY, "a".repeat(100)), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'How likely are you to recommend Biz' question", then.idVisible("TEXT_TEMPLATE_How likely are you to recommend Biz 13 as a place to work? (1 being very unlikely, 10 being very likely.)b2b"));
      Then("I should see all check box's", then.canSeeEngagementSurvey1To10CheckBoxes);
    });
    When("I click on the back button symbol", when.tapID("LEFT_HEADIND_BUTTONnull"), async () => {
      Then("I should be back on the 'the one thing you would change about Biz' question", then.idVisible("TEXT_TEMPLATE_What's the one thing you would change about Biz 13 to make your experience there better?h2"));
      Then("My last typed out answer should still be filled in", then.textVisible("a".repeat(100)));
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
      Then("I should see my YuCoin balance increase by 300 YuCoins for completing the survey to make a total of 1300 YuCoins", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1300), 1500));
    });
    // This part is testing the invalidation flow for a user who has already completed the survey and once they complete a second time receive no reward
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_137_GHI_REWARDS.data.customerId, data.BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id], [data.CUSTOMER_137_GHI_REWARDS.data.customerId]), async () => {
      When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
        Then("I can see the engagement survey hero card", when.idVisible(ids.EVENT_HEADING("Share your feedback", "#5A5A5C")));
      });
    });
    When("I click on the engagement survey hero card", when.tapID(ids.EVENT_HEADING("Share your feedback", "#5A5A5C")), async () => {
      When("I swipe to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I click on the 'let's go!' button", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
          Then("I should be on the 'maintaining work-life balance' question", then.idVisible(ids.TEXT_TEMPLATE("Maintaining work-life balance is important to you.", "b2b")));
        });
      });
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You have an acceptable workload within your standard working hours."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You feel supported by the company or managers in taking paid leave."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("Biz 13 provides adequate resources to support your mental health (e.g., counselling services, stress checks)."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You frequently feel stressed at work due to your job responsibilities."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You have access to a working environment where you can be at your best and most productive."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You are satisfied with your current role at Biz 13."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You are satisfied with the level of reward and appreciation for your contributions."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("Your opinions are heard and valued by your manager."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("The level of collaboration and teamwork is high in my team."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("The level of collaboration and teamwork is high between teams."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You receive clear and timely communication from senior leadership about important decisions."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You have trust in the senior leadership team."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("Based on your current role, you are satisfied with the opportunities for professional growth and skill development at Biz 13."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You receive constructive feedback and coaching from your manager to help you grow in your role."));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("You see yourself continuing to work at Biz 13 for the next 3+ years?"));
    });
    When("I agree and press next", when.agreeAndNext, async () => {
      Then("I should see the next question", then.nextQuestionVisible("Your growth and development in the company is supported by:"));
    });
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
      Then("I should see my YuCoin balance not increase as I already completed the survey and didnt earn anything", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1300), 1500));
    });
  });

  Scenario("If no business is available, when I can traverse through the engagement survey I will see a fallback 'your company' instead of the business name.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_90.data.customerId]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_90, data.AUTH_90), async () => {
        Then("I should see the engagement survey hero card", then.idVisible(ids.EVENT_HEADING("Share your feedback", "#5A5A5C")));
        Then("I should see the Engagement Survey hero card displaying the correct YuCoin reward — 300 YuCoin — based on the user's earn rate of 10 and the survey's 30* multiplier.", then.idVisible(ids.EVENT_DESCRIPTION("Earn **300** YuCoin and help improve your workplace anonymously!", "#5A5A5C")));
      });
      When("I click on the engagement survey hero card", when.tapID(ids.EVENT_HEADING("Share your feedback", "#5A5A5C")), async () => {
        When("I click on the engagement survey hero card", when.fillOutEngagementSurvey, async () => {
          Then("As a user who has no work business listed, I should see 'your company' provides adequate resources' ", then.idVisible(ids.TEXT_TEMPLATE("your company provides adequate resources to support your mental health (e.g., counselling services, stress checks).", "b2b")));
        });
      });
    });
  });

  Scenario("Upon completing the 'Automated QA Test Journey 10 Multiplier' card, a user with an earn rate of 1 should receive YuCoin equal to 10 times their earn rate.", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_44, data.AUTH_44, true, "United Kingdom", false), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Automated QA Test Journey 10 Multiplier", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '0 YuCoin'", then.textVisible("0 YuCoin"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I click on the Automated QA Test Journey 10 Multiplier card", when.tapID(ids.EVENT_HEADING("Automated QA Test Journey 10 Multiplier", "#FFFFFF")), async () => {
        Then("I should see the 'The choice is yours' question", then.idVisible(ids.TEXT_TEMPLATE("The choice is yours.", "b2b")));
        Then("I should see the progress bar has moved", then.progressBarVisible(100, 100));
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
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_44, data.AUTH_44, true, "United Kingdom", false), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Automated QA Test Journey 10 Multiplier", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '0 YuCoin'", then.textVisible("0 YuCoin"));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I swipe left on the Automated QA Test Journey 10 Multiplier card", when.scrollFromID(ids.EVENT_HEADING("Automated QA Test Journey 10 Multiplier", "#FFFFFF"), "left", "fast", 0.2), async () => {
        When("I click on the Automated QA Test Journey 500 YuCoin Flat Amount card", when.tapID(ids.EVENT_HEADING("Automated QA Test Journey 500 YuCoin Flat Amount", "#FFFFFF")), async () => {
          Then("I should see the 'The choice is yours' question", then.idVisible(ids.TEXT_TEMPLATE("The choice is yours.", "b2b")));
          Then("I should see the progress bar has moved", then.progressBarVisible(500, 500));
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

  Scenario("I should see the Health Questionnaire with the new question styles, and if I close the app before I press the final claim button, I should still see my YuCoin balance gone up by the right amount", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_47, data.AUTH_47), async () => {
      Then("I should see my starting YuCoin balance", then.textVisible("200 YuCoin today"));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '200 YuCoin' (from the download bonus)", then.textVisible("200 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the HQ title", then.textVisible("Getting to know Yu!"));
      Then("I should see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I click lets go!", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I can see the getting to know yu title", then.idVisible(ids.TEXT_TEMPLATE("Getting to know Yu!", "h3")));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TEXT_TEMPLATE("Getting to know Yu!", "h3"), "up", "fast", 0.5), async () => {
      Then("I can see lets go button", then.idVisible(ids.BUTTON_BASE("Let’s go!")));
    });
    When("I press lets go ", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
      Then("I should be on the HQ consent screen", then.idVisible(ids.TEXT_TEMPLATE("Your privacy and consent", "h3")));
    });
    When("I press the Consent and continue button ", when.tapID(ids.BUTTON_BASE("Consent and continue", false)), async () => {
      Then("I can see the new designed advice/goal question with the banner with an image on top", then.idVisible(ids.HINT_LABEL("Health advice and tips")));
      Then("I can see the new designed advice/goal questions image", then.idVisible(ids.HINT_VARIANT_IMAGE("https://yulife-develop.imgix.net/journeys/health-questionnaire/advice.svg?ixlib=js-3.2.1&s=22d39a7ba57dafd56f6a12b0f8f1da7f")));
      Then("I can see the title", then.idVisible(ids.TEXT_TEMPLATE("How motivated are you to take up this advice?", "b2b")));
      Then("I can see the next button is disabled as I haven't selected an answer", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I cycle through all the questions", when.tapAllCheckboxes("dynamic_advice.1.2.15", "choice_dynamic_advice.1.2.15", 5), async () => {
      Then("I can see the next button is enabled as I have selected an answer", then.idVisible(ids.BUTTON_BASE("Next", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I can see the quiz time question", then.idVisible(ids.TEXT_TEMPLATE("Quiz time! What is the recommended daily intake of fruits and vegetables?", "b2b")));
      Then("I can see the next button is disabled as I haven't selected an answer", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I cycle through all the questions", when.tapAllCheckboxes("dynamic_health.1.1.216", "choice_dynamic_health.1.1.216", 4), async () => {
      When("I select a wrong answer", when.tapID(ids.CHECKBOX_SELECTORS("dynamic_health.1.1.216", "choice_dynamic_health.1.1.216.1")), async () => {
        Then("I can see the next button is enabled as I have selected an answer", then.idVisible(ids.BUTTON_BASE("Next", false)));
      });
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I can see So Close!", then.idVisible(ids.HALF_MODAL_TITLE("So close!"), 5));
        Then("I can see the answer", then.idVisible(ids.HALF_MODAL_SUBTITLE("The actual answer is: **5 portions**.")));
      });
    });
    When("I click on the 'Next' button", when.tapID(ids.REWARDS_GOT_IT), async () => {
      Then("I can see the next question", then.idVisible(ids.TEXT_TEMPLATE("Quiz time! What are the benefits of a balanced diet?", "b2b")));
    });
    When("I click on the 'Back arrow' button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I can see the quiz time question", then.idVisible(ids.TEXT_TEMPLATE("Quiz time! What is the recommended daily intake of fruits and vegetables?", "b2b")));
    });
    When("I select a correct answer", when.tapID(ids.CHECKBOX_SELECTORS("dynamic_health.1.1.216", "choice_dynamic_health.1.1.216.3")), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I can see Nicely Done!", then.idVisible(ids.HALF_MODAL_TITLE("Nicely done!")));
        Then("I can see the answer", then.idVisible(ids.HALF_MODAL_SUBTITLE("**5 portions** is the correct answer.")));
      });
    });
    When("I click on the 'Next' button", when.tapID(ids.REWARDS_GOT_IT), async () => {
      Then("I can see the next question", then.idVisible(ids.TEXT_TEMPLATE("Quiz time! What are the benefits of a balanced diet?", "b2b")));
    });
    When("I cycle through all the questions", when.tapAllCheckboxes("dynamic_health.1.1.222", "choice_dynamic_health.1.1.222", 4), async () => {
      When("I select a correct answer", when.tapID(ids.CHECKBOX_SELECTORS("dynamic_health.1.1.222", "choice_dynamic_health.1.1.222.2")), async () => {
        When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
          Then("I can see Nicely Done!", then.idVisible(ids.HALF_MODAL_TITLE("Nicely done!")));
          Then("I can see the answer", then.idVisible(ids.HALF_MODAL_SUBTITLE("**Improved digestion, energy levels, and reduced risk of chronic diseases** is the correct answer.")));
        });
      });
    });
    When("I click on the 'Next' button", when.tapID(ids.REWARDS_GOT_IT), async () => {
      Then("I can see the image question", then.idVisible(ids.TEXT_TEMPLATE("Are you a morning or night person?", "b2b")));
      Then("I can see each question has an image and a label", then.verifyImageChoicesVisible);
    });
    When("I click select morning person", when.tapID(ids.IMAGE_CHOICE_LABEL("Morning person")), async () => {
      Then("I can see morning person checkbox is selected", then.idVisible(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.1.31.1", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I can see the slider question", then.idVisible(ids.TEXT_TEMPLATE("In the past week, how often did you manage to stay focused on important tasks without getting sidetracked?", "b2b")));
      Then("I can see the question slider", then.idVisible(ids.CONTENT_ITEM_SCALE));
    });
    When("I swipe the slider into each position, that position becomes visible", when.verifySliderPositionsBySwiping(ids.CONTENT_ITEM_SLIDER, [0, 1, 2, 3, 4]), async () => {
      Then("I can see the slider on never", then.idExist(ids.SLIDABLE_POSITION(4)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I can see the slider question", then.idVisible(ids.TEXT_TEMPLATE("Yesterday, did you check social media multiple times, even when it may not have been appropriate (e.g., during a meeting, at dinner, etc.)?", "b2b")));
      Then("I can see the next button is enabled before the slider is moved", then.idVisible(ids.BUTTON_BASE("Next", false)));
    });
    When("I swipe the slider to yes", when.swipeFromIDAtIndex(ids.CONTENT_ITEM_SLIDER, 1, "left", "slow", 0.4), async () => {
      Then("I can see the next button is enabled as I have moved the slider", then.idVisible(ids.BUTTON_BASE("Next", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I can see the select multiple image question", then.idVisible(ids.TEXT_TEMPLATE("How do you typically maintain your social connections?", "b2b")));
      Then("I can see the (select all that apply) subheading", then.idVisible(ids.MARKDOWN("(Select all that apply)")));
      Then("I can see the next button is disabled as I have not selected an answer yet", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I select in-person meet ups", when.tapID(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.8.109.1", false)), async () => {
      When("I select phone calls or video chats", when.tapID(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.8.109.2", false)), async () => {
        Then("I can see the next button is enabled as I have select answers", then.idVisible(ids.BUTTON_BASE("Next", false)));
      });
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I the final slider question", then.idVisible(ids.TEXT_TEMPLATE("Do you use your personal or work mobile phone for work?", "b2b")));
    });
    When("I click on the 'Back arrow' button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I can see the multiple image question", then.idVisible(ids.TEXT_TEMPLATE("How do you typically maintain your social connections?", "b2b")));
      Then("I can see the multiple selections are still highlighted ", then.idVisible(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.8.109.1", true)));
      Then("I can see the multiple selections are still highlighted ", then.idVisible(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.8.109.2", true)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      When("I swipe the slider to the furthest left", when.swipeFromIDAtIndex(ids.CONTENT_ITEM_SLIDER, 1, "left", "slow", 0.4), async () => {
        When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
          Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("Thank you for your feedback!", "h3")));
          Then(
            "As a user who is on a earnRate: 10, for completing the HQ that has a yuCoinRewardAsEarnRateMultiple: 4, I should receive 40 YuCoin for completing it",
            then.idVisible(ids.MARKDOWN("+40 ![](https://yulife-develop.imgix.net/journeys/yuCoin.svg?ixlib=js-3.2.1&w=24&h=24&dpr=3&s=3cb4cda29e509a2eb7f6cb42af14a01e)"))
          );
        });
      });
    });
    When("I close the app before I press the claim button", when.restartWithData, async () => {
      Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_47, data.AUTH_47, true, "United Kingdom", false), async () => {
        Then("I should see my YuCoin balance gone up by 40", then.textVisible("240 YuCoin today"));
      });
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      When("I swipe to the bottom", when.scrollFromID(ids.ARROW_BUTTON, "up", "fast", 0.5), async () => {
        Then("I should see Additional rewards showing the questionnaire", then.textVisible("Quiz"));
        Then("I should see amount of YuCoin given for the questionnaire", then.textVisible("40"));
      });
    });
  });

  Scenario("I should see the Health Questionnaire consent screen as a first time answerer (UK & JP copy)", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_47, data.AUTH_47), async () => {
      Then("I should see the HQ hero card", then.idVisible(ids.EVENT_CARD("Daily health questions")));
    });
    When("I click on the HQ hero card", when.tapID(ids.EVENT_CARD("Daily health questions")), async () => {
      Then("I can see the HQ title", then.idVisible(ids.TEXT_TEMPLATE("Getting to know Yu!", "h3")));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TEXT_TEMPLATE("Getting to know Yu!", "h3"), "up", "fast", 0.5), async () => {
      When("I press lets go ", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
        Then("I should be on the HQ consent screen", then.canSeeHQConsentScreen("en-GB"));
      });
    });
    When("I press the Consent and continue button ", when.tapID(ids.BUTTON_BASE("Consent and continue", false)), async () => {
      Then("I can see the title", then.idVisible(ids.TEXT_TEMPLATE("How motivated are you to take up this advice?", "b2b")));
    });
    When("I tap the close button on top right", when.tapID(ids.SCREEN_CLOSE), async () => {
      Then("I should see the HQ hero card", then.idVisible(ids.EVENT_CARD("Daily health questions")));
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
      });
    });
    When("I scroll down", when.scrollFromID(ids.SETTINGS_SCREEN_SCROLL, "up", "slow", 0.4), async () => {
      When("I tap the language options", when.tapText("Language", 2000, true), async () => {
        Then("I should be on the langauge selector screen", then.languageSelectorVisible);
      });
    });
    When("I tap to switch to Japanese", when.tapText(`${translations["ja-JP"].flag} ${translations["ja-JP"].name}`, 2000, true), async () => {
      When("I close the pop up", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
        Then("I should be back on my YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2000));
      });
    });
    When("I click on the HQ hero card", when.tapID(ids.EVENT_CARD("健康チェックの質問")), async () => {
      When("I click to go back to the consent screen", when.tapID(ids.BACK_BUTTON), async () => {
        When("I scroll up the consent page", when.scrollFromID(ids.TEXT_TEMPLATE("お客様の個人情報の取扱について", "h3"), "up", "fast", 0.5), async () => {
          Then("I should be on the HQ consent screen", then.canSeeHQConsentScreen("ja-JP"));
        });
      });
    });
    When("I press the Consent and continue button ", when.tapID(ids.BUTTON_BASE("同意して次へ進む", false)), async () => {
      Then("I can see the title", then.idVisible(ids.TEXT_TEMPLATE("このアドバイスを積極的に取り入れたい気持ちはどのくらいありますか?", "b2b")));
    });
  });

  Scenario("I can login with correct login detail and see the connection setup for daily activities", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_141.customer.data.customerId, data.BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id, data.BUSINESS_BACKGROUND_10.data.business_background_id]), async () => {
      Given("I have entered a valid email address and valid password", given.loginOnly(data.CUSTOMER_141.customer, GENERIC_AUTH_PASSWORD, true), async () => {
        When("I tap let's go", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN")), async () => {
          When("I tap X to skip connection", when.tapID(ids.BUTTON_CLOSE), async () => {
            Then("I can see the hero cards fin the correct order", then.checkEachHeroCard);
          });
        });
      });
    });
  });
});
