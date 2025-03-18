import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { backSpace, hqInfoCopy, moneyMasteryFWQDescriptionPage, oneHundredAndOneCharacters, oneHundredCharacters } from "./_resources/fixtures";
import { getTranslation } from "_utils/translations/getTranslations";
import { translations } from "@app/locale/translations";
import { yuscreenImages } from "@images";

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
      Then("I should be back on my YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2000));
      Then("I should see that the YuCoin screen has changed in Japanese", then.textVisible(getTranslation("ja-JP").navbar.yucoin.label, 2500));
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
  });

  Scenario("I should see the Health Questionnaire and be able to complete, if I have not done so before", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_73, data.AUTH_73), async () => {
      Then("I should see my YuCoin balance of 560, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560)));
      Then("I should see '200 YuCoin Today' before the HQ", then.textVisible("200 YuCoin today"));
      Then("I should see the FTUE event panel, before the HQ event panel", then.textVisible(data.GOALS_FTUE.data.title["en-GB"]));
    });

    When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should see yuscreen v5", then.idVisible(ids.YUMOJI_YUSCREEN_V5, 4000));
      Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(200, 260));
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
        Then("I should see the FTUE event panel, before the HQ event panel", then.textVisible(data.GOALS_FTUE.data.title["en-GB"]));
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

    // @UPDATE - hero card not showing for the HQ - will investigate but priority for this ticket is mood monitor / getting most of the test running
    // using other entry points to HQ for time being
    // When("I swipe to the HQ Event panel", when.swipeFromText(data.GOALS_FTUE.data.title["en-GB"], "left", "slow", 0.5), async () => {
    //     Then("I should see the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))
    // })
    // When("I swipe to the Test Event", when.swipeFromText(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"], "left", "slow", 0.5), async () => {
    //     Then("I should see the Test Event panel, after the HQ event panel", then.textVisible(data.GOALS_1.data.title))
    // })
    // When("I swipe back to the HQ Event panel, from the Test Event", when.swipeFromText(data.GOALS_1.data.title, "right", "slow", 0.5), async () => {
    //     Then("I should see the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))
    // })
    // When("I tap the event panel for the HQ", when.tapText(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]), async () => {
    //     Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
    // })

    When("I press the Let’s go! button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_01));
      Then("I should see the progress bar in the start position", then.progressBarVisible(10));
    });
    When("I select the first option for Q1", when.tapText(data.CORE_JOURNEY_STEPS_01.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_01, 0));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_01, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_02));
      Then("I should see the progress bar has moved", then.progressBarVisible(20));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_01));
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_01, 0));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_01, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_02));
      Then("I should see the progress bar has moved", then.progressBarVisible(20));
      Then("I should not see the first option selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02, 0));
      Then("I should not see the second option selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02, 1));
    });
    When("I select the second option for Q2", when.tapText(data.CORE_JOURNEY_STEPS_02.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_02, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the third question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_03));
      Then("I should see the progress bar has moved", then.progressBarVisible(50));
    });
    When("I select the second option for Q3", when.tapText(data.CORE_JOURNEY_STEPS_03.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_03, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_03));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fourth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_04));
      Then("I should see the progress bar has moved", then.progressBarVisible(70));
    });
    When("I select the first option for Q4", when.tapText(data.CORE_JOURNEY_STEPS_04.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_04));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_04, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fifth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_05));
      Then("I should see the progress bar has moved", then.progressBarVisible(100));
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
      Then("I should see the progress bar has moved", then.progressBarVisible(120));
    });
    When("I select the first option for Q6", when.tapText(data.CORE_JOURNEY_STEPS_06.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_06));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_06, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the seventh question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_07));
      Then("I should see the progress bar has moved", then.progressBarVisible(150));
    });
    When("I select the first option for Q7", when.tapText(data.CORE_JOURNEY_STEPS_07.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_07));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_07, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the eigth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_08));
      Then("I should see the progress bar has moved", then.progressBarVisible(170));
    });
    When("I select the first option for Q8", when.tapText(data.CORE_JOURNEY_STEPS_08.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_08));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_08, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the chest screen", then.idVisible(ids.LOTTIE_VIEW));
    });
    When("I tap the screen", when.tapID(ids.LOTTIE_VIEW), async () => {
      Then("The chest should be open", then.idVisible(ids.LOTTIE_VIEW));
    });
    When("I tap claim", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
        When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
          Then("I see the 220 yucoin earned today so far", then.textVisible("220 YuCoin"));
        });
      });
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"));
      Then("I should see that I completed the qustionnaire", then.textVisible("Quiz"));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("20", 1500));
    });

    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(220, 260));
        Then("I should see the completed HQ nudge", then.completedHQNudgeVisible());
      });
    });
    When("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
      Then("I should be on the same screen, and still see the completed HQ nudge", then.completedHQNudgeVisible());
    });
  });

  Scenario("I should see a second Health Questionnaire and complete it, with differences on second+ journey", scenario.start, async () => {
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
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I press the Let's go! button on the intro screen of the HQ", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_11));
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
      Then("I should be on the chest screen", then.idVisible(ids.LOTTIE_VIEW));
    });
    When("I tap the screen", when.tapID(ids.LOTTIE_VIEW), async () => {
      Then("The chest should be open and show the YuCoin I earned", then.idVisible(ids.LOTTIE_VIEW));
    });
    When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      Then("I should still see the HQ title", then.textVisible("Getting to know Yu!"));
      Then("I should still see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I tap let's go", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should be on the HQ Hold screen", then.onHQHoldScreen);
    });
    When("I close this screen", when.tapID(ids.SCREEN_CLOSE), async () => {
      Then("I should still see the HQ title", then.textVisible("Getting to know Yu!"));
      Then("I should still see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I close this screen", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the daily screen", then.textVisible("Take a challenge (2 left today)"));
      Then("I should not see the event panel", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]));
      Then("I should see my YuCoin balance of 20, after I finish the HQ", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20)));
      Then("I should see '20 YuCoin Today' due to finishing HQ", then.textVisible("20 YuCoin today"));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I see the 20 yucoin earned today so far", then.textVisible("20 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"));
      Then("I should see that I completed the qustionnaire", then.textVisible("Quiz"));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("20", 1500));
    });
  });

  Scenario("As a user that works at 2 companies, I can traverse through the engagement survey until it is complete and I receive the correct amount of YuCoin for English.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_137_GHI_REWARDS.data.customerId, data.BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id, data.BUSINESS_BACKGROUND_10.data.business_background_id]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_137_GHI_REWARDS, data.AUTH_137, true, "United Kingdom", false), async () => {
        When("I should see the Let's go! button", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN", false)), async () => {
          Then("I should see my YuCoin balance of 1000, before I finish the Engagement Survey", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1000)));
        });
      });
    });
    When("I click on the engagement survey hero card", when.tapID("EVENT_HEADING_Share your feedback"), async () => {
      Then("I should see the intro screen for the engagement survey", then.idVisible("TEXT_TEMPLATE_Share your feedback!h3"));
      Then("I should see how much YuCoin will be rewarded", then.idVisible(ids.CONTENT_ITEM_INFO_CARD("**Rewards**\n\nEarn 300 YuCoin!")));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I click on the 'let's go!' button", when.tapID(ids.BUTTON_BASE("Let’s go!")), async () => {
        Then("I should be on the 'maintaining work-life balance' question", then.idVisible("TEXT_TEMPLATE_Maintaining work-life balance is important to you.h3"));
        Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
      });
    });
    When("I cycle through all the checkbox options and end up on Strongly agree", when.cycleThroughEngagementSurveyAgreeCheckBoxes, async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'acceptable workload' question", then.idVisible("TEXT_TEMPLATE_You have an acceptable workload within your standard working hours.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'supported by the company' question", then.idVisible("TEXT_TEMPLATE_You feel supported by the company or managers in taking paid leave.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then(
        "I should be on the 'Biz 13 provides adequate resources' question and as a user who works at 2 companies I should only see the business at the zeroth index listed",
        then.idVisible("TEXT_TEMPLATE_Biz 13 provides adequate resources to support your mental health (e.g., counselling services, stress checks).h3")
      );
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'feel stressed at work' question", then.idVisible("TEXT_TEMPLATE_You frequently feel stressed at work due to your job responsibilities.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'access to a working environment' question", then.idVisible("TEXT_TEMPLATE_You have access to a working environment where you can be at your best and most productive.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with your current role' question", then.idVisible("TEXT_TEMPLATE_You are satisfied with your current role at Biz 13.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I click on the back button symbol", when.tapID("LEFT_HEADIND_BUTTONnull"), async () => {
      Then("I should be on the 'access to a working environment' question", then.idVisible("TEXT_TEMPLATE_You have access to a working environment where you can be at your best and most productive.h3"));
      Then("I should see the checkbox for the first option is still selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with your current role' question", then.idVisible("TEXT_TEMPLATE_You are satisfied with your current role at Biz 13.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with the level of reward' question", then.idVisible("TEXT_TEMPLATE_You are satisfied with the level of reward and appreciation for your contributions.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'heard and valued by your manager' question", then.idVisible("TEXT_TEMPLATE_Your opinions are heard and valued by your manager.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'level of collaboration and teamwork' question", then.idVisible("TEXT_TEMPLATE_The level of collaboration and teamwork is high in my team.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'level of collaboration and teamwork is high between teams", then.idVisible("TEXT_TEMPLATE_The level of collaboration and teamwork is high between teams.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'receive clear and timely communication' question", then.idVisible("TEXT_TEMPLATE_You receive clear and timely communication from senior leadership about important decisions.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'have trust in the senior leadership team' question", then.idVisible("TEXT_TEMPLATE_You have trust in the senior leadership team.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'satisfied with the opportunities for professional growth' question", then.idVisible("TEXT_TEMPLATE_Based on your current role, you are satisfied with the opportunities for professional growth and skill development at Biz 13.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'constructive feedback and coaching from your manager' question", then.idVisible("TEXT_TEMPLATE_You receive constructive feedback and coaching from your manager to help you grow in your role.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'see yourself continuing to work for the next 3+ years' question", then.idVisible("TEXT_TEMPLATE_You see yourself continuing to work at Biz 13 for the next 3+ years?h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'Your growth and development in the company is supported by:' question", then.idVisible("TEXT_TEMPLATE_Your growth and development in the company is supported by:b2b"));
      Then("I should see all check box's", then.canSeeEngagementSurveySupportedByCheckBoxes);
    });
    When("I select first option", when.tapID("growth_development_supported_choice_my_manager"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("growth_development_supported_choice_my_manager"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'believe there are equal opportunities for career advancement", then.idVisible("TEXT_TEMPLATE_You believe there are equal opportunities for career advancement at Biz 13.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'Please elaborate on why you think this' question", then.idVisible("TEXT_TEMPLATE_Please elaborate on why you think this.h2"));
    });
    // @bug LCS-1025 - limit is still 100 and not 1000 characters - next button is disabled over 100 characters
    // When("I type in 1001 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, oneThousandAndOneCharacters), async ()
    // => {
    // For now checking 100 character limit to make test pass
    When("I type in 101 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, oneHundredAndOneCharacters), async () => {
      Then("I should see the next button disabled", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I delete a character to make it 100", when.typeViaID(ids.ENGAGEMENT_SURVEY_EQUAL_OPPORTUNITIES_REASON, backSpace), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'You feel your role contributes meaningfully' question", then.idVisible("TEXT_TEMPLATE_You feel your role contributes meaningfully to the company’s success.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'You believe in the company’s vision' question", then.idVisible("TEXT_TEMPLATE_You believe in the company’s vision and direction.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'You are proud to work at your company' question", then.idVisible("TEXT_TEMPLATE_You are proud to work at Biz 13.h3"));
      Then("I should see all check box's", then.canSeeEngagementSurveyAgreeCheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_strongly_agree_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_strongly_agree_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'What motivates you to do your best work' question", then.idVisible("TEXT_TEMPLATE_What motivates you to do your best work?h2"));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_WORK_MOTIVATION, oneHundredCharacters), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'What do you enjoy most about working at Biz' question", then.idVisible("TEXT_TEMPLATE_What do you enjoy most about working at Biz 13?h2"));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ENJOY_ABOUT_COMPANY, oneHundredCharacters), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'the one thing you would change about Biz' question", then.idVisible("TEXT_TEMPLATE_What's the one thing you would change about Biz 13 to make your experience there better?h2"));
    });
    When("I type in 100 characters into the input", when.typeViaID(ids.ENGAGEMENT_SURVEY_ONE_CHANGE_TO_IMPROVE_COMPANY, oneHundredCharacters), async () => {
      Then("I should see the next button enabled", then.idVisible(ids.BUTTON_BASE("Next")));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the 'How likely are you to recommend Biz' question", then.idVisible("TEXT_TEMPLATE_How likely are you to recommend Biz 13 as a place to work? (1 being very unlikely, 10 being very likely.)h3"));
      Then("I should see all check box's", then.canSeeEngagementSurvey1To10CheckBoxes);
    });
    When("I select first option", when.tapID("RADIO_ITEM_SELECTED_10_false"), async () => {
      Then("I should see the checkbox for the first option selected", then.idVisible("RADIO_ITEM_SELECTED_10_true"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should see 'Thank you for answering this survey.'", then.idVisible("TEXT_TEMPLATE_Thank you for answering this survey.h2"));
    });
    When("I click on the back button symbol", when.tapID("LEFT_HEADIND_BUTTONnull"), async () => {
      Then("I should be back on the 'How likely are you to recommend Biz' question", then.idVisible("TEXT_TEMPLATE_How likely are you to recommend Biz 13 as a place to work? (1 being very unlikely, 10 being very likely.)h3"));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should see 'Thank you for answering this survey.'", then.idVisible("TEXT_TEMPLATE_Thank you for answering this survey.h2"));
    });
    When("I click on the 'Submit' button", when.tapID(ids.BUTTON_BASE("Submit")), async () => {
      Then("I should see my YuCoin balance increase by 300 YuCoins for completing the survey to make a total of 1300 YuCoins", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1300), 1500));
    });
  });

  Scenario("If no business is available, when I can traverse through the engagement survey I will see a fallback 'your company' instead of the business name.", scenario.start, async () => {
    Given("I run the worker to give access to the engagement survey", given.giveEngagementSurveyAccess([data.CUSTOMER_90.data.customerId]), async () => {
      Given("I login as a user", given.loginAsUser(data.CUSTOMER_90, data.AUTH_90, true, "United Kingdom", false), async () => {
        When("I should see the Let's go! button", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN", false)), async () => {
          When("I click on the engagement survey hero card", when.tapID("EVENT_HEADING_Share your feedback"), async () => {
            When("I click on the engagement survey hero card", when.fillOutEngagementSurvey, async () => {
              Then("As a user who has no work business listed, I should see 'your company' provides adequate resources' ", then.idVisible("TEXT_TEMPLATE_your company provides adequate resources to support your mental health (e.g., counselling services, stress checks).h3"));
            });
          });
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
      When("I click on the Automated QA Test Journey 10 Multiplier card", when.tapID("EVENT_HEADING_Automated QA Test Journey 10 Multiplier"), async () => {
        Then("I should see the 'The choice is yours' question", then.idVisible("TEXT_TEMPLATE_The choice is yours.h3"));
        Then("I should see the progress bar has moved", then.progressBarVisible(100, 100));
      });
    });
    When("I select the first choice", when.tapID("RADIO_ITEM_SELECTED_red_pill_false"), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the Thank you for answering", then.idVisible("TEXT_TEMPLATE_Thank you for answeringh2"));
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
      When("I swipe left on the Automated QA Test Journey 10 Multiplier card", when.scrollFromID("EVENT_HEADING_Automated QA Test Journey 10 Multiplier", "left", "fast", 0.2), async () => {
        When("I click on the Automated QA Test Journey 500 YuCoin Flat Amount card", when.tapID("EVENT_HEADING_Automated QA Test Journey 500 YuCoin Flat Amount"), async () => {
          Then("I should see the 'The choice is yours' question", then.idVisible("TEXT_TEMPLATE_The choice is yours.h3"));
          Then("I should see the progress bar has moved", then.progressBarVisible(500, 500));
        });
      });
    });
    When("I select the first choice", when.tapID("RADIO_ITEM_SELECTED_red_pill_false"), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should see the Thank you for answering", then.idVisible("TEXT_TEMPLATE_Thank you for answeringh2"));
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
});
