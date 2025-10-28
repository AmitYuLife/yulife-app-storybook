import { Feature, Scenario, Given, When, Then, WhenSkip, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { hqConsentCopy, hqInfoCopy, hqReflectionHowYouFeelTodayCopy, hqReflectionRestedTodayCopy, hqReflectionYourDaySoFarCopy } from "../_resources/fixtures";
import { getTranslation } from "_utils/translations/getTranslations";
import { translations } from "@app/locale/translations";
import { yuscreenImages } from "@images";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import * as helper from "./_resources/helpers";

Feature("Health questionnaires", async () => {
  Scenario("I should see the Health Questionnaire available in Japanese", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_3, data.AUTH_3), async () => {
      Then("I should see my YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 3000), async () => {
      Then("I should see the menu items", then.menuItemsVisible("enhanced"));
    });
    When("I tap settings", when.tapMenuItem("Settings"), async () => {
      Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
    });
    When("I scroll down", when.scrollFromID(ids.SETTINGS_SCREEN_SCROLL, "up", "slow", 0.4), async () => {
      Then("I should see the pre-selected server language is en-GB", then.languageSettingVisible("en-GB"));
    });
    When("I tap the language options", when.tapText("Language", 3000, true), async () => {
      Then("I should be on the langauge selector screen", then.languageSelectorVisible);
      Then("I should see all the available languages listed", then.allLanguagesVsible);
    });
    When("I tap to switch to Japanese", when.tapText(`${translations["ja-JP"].flag} ${translations["ja-JP"].name}`, 3000, true), async () => {
      Then("I should be back on my YuCoin screen", then.idExist(ids.DAILY_STEPS_SCREEN, 15000));
    });
    When("I close the pop up", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0, 5000), async () => {
      Then("I should see that the YuCoin screen has changed in Japanese", then.textVisible(getTranslation("ja-JP").navbar.yucoin.label, 4000));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0), 3000), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
        Then("I should see the Let's go! button in Japanese", then.textVisible(getTranslation("ja-JP").labels.cta.lets_go, 2000));
      });
    });
    When("I tap on the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0, 2000), async () => {
      Then("I should see the HQ information screen heading in Japanese", then.textVisible("デイリーリフレクション"));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I press the Let’s go! button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE(""), 2000), async () => {
        Then("I should see the terms and conditions screen", then.textVisible("お客様の個人情報の取扱について"));
      });
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I accept the terms and conditions", when.tapID(ids.BUTTON_BASE("同意して次へ進む", false), 3000), async () => {
        Then("I should see the reflection.rested_today step", then.textVisible("昨晩はどのくらいよく眠れましたか?"));
      });
    });
    When("I select the first option for reflection.rested_today", when.tapText("ほとんど眠れなかった", 2500), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("次へ", false), 2500), async () => {
          Then("I should see the reflection.your_day_so_far step", then.textVisible("今の気分はいかがですか?"));
        });
      });
    });
    When("I select the first option for reflection.your_day_so_far", when.tapText("ひどい", 2000), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("次へ", false), 2000), async () => {
          Then("I should see the reflection.how_you_feel_today step", then.textVisible("今日の気分は以下のうちどれに該当しますか?"));
        });
      });
    });
    When("I select the first option for reflection.how_you_feel_today", when.tapText("幸せ", 2500), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("次へ", false), 2500), async () => {
          Then("I should see the first DHQ question in Japanese", then.textVisible(data.CORE_JOURNEY_STEPS_01.data.templateUi.copy.heading["ja-JP"]));
          Then("I should see the first DHQ answer option in Japanese", then.textVisible(getTranslation("ja-JP").labels.cta.yes));
        });
      });
    });
    When("I close the HQ", when.tapID(ids.SCREEN_CLOSE, 2500), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.BACK_BUTTON, 2500), async () => {
        Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("健康チェックの質問"), 1500));
        Then("I should see the correct markdown for the HQ", then.idVisible(ids.EVENT_DESCRIPTION("健康に関する質問への回答で\n**60**![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7)をプレゼント。", "#464647"), 1500));
        Then("I should see the HQ card's pink arrow", then.idVisible(ids.PINK_ARROW_ICON, 1500));
      });
    });
  });

  Scenario("I should see the Health Questionnaire and be able to complete, if I have not done so before", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_3, data.AUTH_3), async () => {
      Then("I should see my YuCoin balance of 200, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      Then("I should see '200 YuCoin Today' before the HQ", then.textVisible("200 YuCoin today"));
      Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("Daily health questions")));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      When("I swipe to the bottom", when.scrollWithLimitedAttemptsUntilIdVisible(ids.TODAYS_EARNINGS, ids.ACTIVITY_FEED_ID("health-questionnaire-slot"), "up"), async () => {
        Then("I can see the HQ title", then.textVisible("Getting to know Yu!"));
        Then("I should see the Let's go! button", then.textVisible("Let's go!"));
      });
    });
    When("I press the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I close the HQ", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.LEFT_HEADING_BUTTON("Today’s Earnings")), async () => {
        Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("Daily health questions")));
        Then("I should see the correct markdown for the HQ", then.idVisible(ids.EVENT_DESCRIPTION("Earn **60**![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7) by discovering more about your health.", "#464647")));
        Then("I should see the HQ card's pink arrow", then.idVisible(ids.PINK_ARROW_ICON));
      });
    });
    When("I tap the event panel for the HQ", when.tapID(ids.EVENT_CARD("Daily health questions")), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I press the next button", when.tapID(ids.BUTTON_BASE(hqInfoCopy.cta, false)), async () => {
      Then("I should see the terms and conditions screen", then.onHQConsentScreen(hqConsentCopy));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I accept the terms and conditions", when.tapID(ids.BUTTON_BASE(hqConsentCopy.cta, false)), async () => {
        Then("I should see the reflection.rested_today step", then.textVisible(hqReflectionRestedTodayCopy.title));
        Then("I should see the progress bar in the start position", then.progressBarVisible(50, 600));
      });
    });
    When("I select the first option for reflection.rested_today", when.tapText(hqReflectionRestedTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.your_day_so_far step", then.textVisible(hqReflectionYourDaySoFarCopy.title));
          Then("I should see the progress bar has moved", then.progressBarVisible(100, 600));
        });
      });
    });
    When("I select the first option for reflection.your_day_so_far", when.tapText(hqReflectionYourDaySoFarCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.how_you_feel_today step", then.textVisible(hqReflectionHowYouFeelTodayCopy.title));
          Then("I should see the progress bar has moved", then.progressBarVisible(160, 600));
        });
      });
    });
    When("I select the first option for reflection.how_you_feel_today", when.tapText(hqReflectionHowYouFeelTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_01));
          Then("I should see the progress bar has moved", then.progressBarVisible(210, 600));
        });
      });
    });
    When("I select the first option for Q1", when.tapText(data.CORE_JOURNEY_STEPS_01.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_01, 0));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_01, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_02));
      Then("I should see the progress bar has moved", then.progressBarVisible(270, 600));
    });
    When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_01));
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_01, 0));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_01, 1));
      Then("I should see the progress bar has moved down", then.progressBarVisible(210, 600));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the second question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_02));
      Then("I should see the progress bar has moved", then.progressBarVisible(270, 600));
      Then("I should not see the first option selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02, 0));
      Then("I should not see the second option selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02, 1));
    });
    When("I select the second option for Q2", when.tapText(data.CORE_JOURNEY_STEPS_02.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_02, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_02));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the third question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_03));
      Then("I should see the progress bar has moved", then.progressBarVisible(320, 600));
    });
    When("I select the second option for Q3", when.tapText(data.CORE_JOURNEY_STEPS_03.data.templateUi.options[1].label["en-GB"]), async () => {
      Then("I should see the second option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_03, 1));
      Then("I should see the first option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_03));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fourth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_04));
      Then("I should see the progress bar has moved", then.progressBarVisible(380, 600));
    });
    When("I select the first option for Q4", when.tapText(data.CORE_JOURNEY_STEPS_04.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_04));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_04, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the fifth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_05));
      Then("I should see the progress bar has moved", then.progressBarVisible(430, 600));
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
      Then("I should see the progress bar has moved", then.progressBarVisible(490, 600));
    });
    When("I select the first option for Q6", when.tapText(data.CORE_JOURNEY_STEPS_06.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_06));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_06, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the seventh question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_07));
      Then("I should see the progress bar has moved", then.progressBarVisible(540, 600));
    });
    When("I select the first option for Q7", when.tapText(data.CORE_JOURNEY_STEPS_07.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_07));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_07, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the eigth question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_08));
      Then("I should see the progress bar has moved", then.progressBarVisible(600, 600));
    });
    When("I select the first option for Q8", when.tapText(data.CORE_JOURNEY_STEPS_08.data.templateUi.options[0].label["en-GB"]), async () => {
      Then("I should see the first option selected", then.answerSelected(data.CORE_JOURNEY_STEPS_08));
      Then("I should see the second option not selected", then.answerNotSelected(data.CORE_JOURNEY_STEPS_08, 1));
    });
    When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
      Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("You did it!", "h3")));
      Then("As a user who is on a earnRate: 10, for completing the HQ that has a yuCoinRewardAsEarnRateMultiple: 4, I should receive 60 YuCoin for completing it", then.idVisible("health_questionnaire_submission_yucoin_markdown"));
    });
    When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      When("I go to the yucoin screen", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see '260 YuCoin Today' after the HQ", then.textVisible("260 YuCoin today"));
      });
    });
  });

  Scenario("I should see the DHQ in the MaximiseYu nudges", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_SINGLE_QUESTION_DHQ.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu"), 4000), async () => {
        When("I scroll down the YuScreen", when.scrollFromID(ids.HERO_CARD_SECTION, "up", "slow", 0.1), async () => {
          When("I swipe towards the end of the MaximiseYu section", when.scrollWithLimitedAttemptsUntilIdVisible(ids.MAXIMISE_YU_NUDGE_LIST, ids.NUDGE_ITEM_WRAPPER("health-questionnaire-nudge"), "left", undefined, undefined, 0.8, 0.8), async () => {
            Then("I should see the HQ nudge", then.idVisible(ids.NUDGE_ITEM_WRAPPER("health-questionnaire-nudge")));
          });
        });
      });
    });
    When("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
      Then("I should see the reflection.how_you_feel_today step", then.textVisible(hqReflectionHowYouFeelTodayCopy.title));
    });
    When("I select the first option for reflection.how_you_feel_today", when.tapText(hqReflectionHowYouFeelTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("You did it!", "h3")));
        });
      });
    });
    When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(260, 380));
        Then("I should see the completed HQ nudge", then.completedHQNudgeVisible());
      });
    });
    When("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
      Then("I should be on the same screen, and still see the completed HQ nudge", then.completedHQNudgeVisible());
    });
    When("I tap earned from todays activities", when.tapID(ids.MAXIMISE_TODAYS_EARNINGS(260, 380)), async () => {
      Then("I see the 260 yucoin earned today so far", then.textVisible("260 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollWithLimitedAttemptsUntilIdVisible(ids.TODAYS_EARNINGS, ids.ACTIVITY_FEED_ID("health-questionnaire-slot")), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"));
      Then("I should see that I completed the questionnaire", then.textVisible("Quiz"));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("60", 1500));
    });
  });

  Scenario("Once I complete the journey, press cta - I should see the HQ journey modal is gone", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1, true, "UK"), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
      Then("I should not see the event panel, as I have completed one before", then.textNotVisible("Daily health questions"));
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
    When("I press the next button", when.tapID(ids.BUTTON_BASE(hqInfoCopy.cta, false)), async () => {
      Then("I should see the terms and conditions screen", then.onHQConsentScreen(hqConsentCopy));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I accept the terms and conditions", when.tapID(ids.BUTTON_BASE(hqConsentCopy.cta, false)), async () => {
        Then("I should see the reflection.rested_today step", then.textVisible(hqReflectionRestedTodayCopy.title));
      });
    });
    When("I select the first option for reflection.rested_today", when.tapText(hqReflectionRestedTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.your_day_so_far step", then.textVisible(hqReflectionYourDaySoFarCopy.title));
        });
      });
    });
    When("I select the first option for reflection.your_day_so_far", when.tapText(hqReflectionYourDaySoFarCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.how_you_feel_today step", then.textVisible(hqReflectionHowYouFeelTodayCopy.title));
        });
      });
    });
    When("I select the first option for reflection.how_you_feel_today", when.tapText(hqReflectionHowYouFeelTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should be on the first question", then.onHQRadioQuestion(data.CORE_JOURNEY_STEPS_11));
        });
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
      Then("I should be on the eighth question", then.onHQHeightQuestion(data.CORE_JOURNEY_STEPS_18));
    });
    When("I tap 'Enter your height", when.tapID(ids.TEXT_TEMPLATE("Enter your height", "l1b")), async () => {
      Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("150cm")));
    });
    When("I choose scroll to down", when.scrollUntilIdVisible(ids.SCROLL_PICKER("HEIGHT_CM"), ids.SCROLL_PICKER_ACTIVE_ITEM("148cm"), "up"), async () => {
      Then("I should see the scroll picker moved down to 149cm", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("149cm"), 2000));
    });
    When("I tap switch to ft", when.tapID(ids.CHIP_LIST_ITEM("Feet (ft)")), async () => {
      Then("I should see 5ft", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("5ft")));
      Then("I should see 0in", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("0in")));
    });
    When("I scroll to 9 ft", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("5ft"), "up", "slow"), async () => {
      When("I scroll to 11 in", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("0in"), "up", "slow"), async () => {
        Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("9ft")));
        Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("11in")));
      });
    });
    When("I tap select", when.tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON), async () => {
      Then("I should see 9ft 11 in as the selected height", then.idVisible(ids.TEXT_TEMPLATE("9ft 11in", "l1b")));
    });
    When("I click the next button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("You did it!", "h3")));
      Then("As a user who is on a earnRate: 1, for completing the HQ that has a yuCoinRewardAsEarnRateMultiple: 6, I should receive 6 YuCoin for completing it", then.textVisible(/^\+6\s.*/));
    });
    When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
      Then("I should not see the HQ title", then.textNotVisible("Getting to know Yu!"));
      Then("I should not see the HQ Let's go! button", then.textNotVisible("Let's go!"));
    });
    When("I close this screen", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should not see the event panel", then.textNotVisible("Daily health questions"));
      Then("I should see my YuCoin balance of 6, after I finish the HQ", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(6)));
      Then("I should see '6 YuCoin Today' due to finishing HQ", then.textVisible("6 YuCoin today"));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I should see 6 YuCoin for reward", then.textVisible("6 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"));
      Then("I should see that I completed the questionnaire", then.textVisible("Quiz"));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("6", 1500));
    });
  });

  Scenario("I should see the Health Questionnaire with the new question styles, and if I close the app before I press the final claim button, I should still see my YuCoin balance gone up by the right amount", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_2, data.AUTH_2), async () => {
      Then("I should see my starting YuCoin balance", then.textVisible("200 YuCoin today"));
    });
    When("I click on Today's Earnings screen", when.tapID("DAILYSTEP_SCREEN_COIN"), async () => {
      Then("I should see Today you've earned '200 YuCoin' (from the download bonus)", then.textVisible("200 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the HQ title", then.textVisible("Getting to know Yu!"));
      Then("I should see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I press the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I press the next button", when.tapID(ids.BUTTON_BASE(hqInfoCopy.cta, false)), async () => {
      Then("I should see the terms and conditions screen", then.onHQConsentScreen(hqConsentCopy));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I accept the terms and conditions", when.tapID(ids.BUTTON_BASE(hqConsentCopy.cta, false)), async () => {
        Then("I should see the reflection.rested_today step", then.textVisible(hqReflectionRestedTodayCopy.title));
      });
    });
    When("I select the first option for reflection.rested_today", when.tapText(hqReflectionRestedTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.your_day_so_far step", then.textVisible(hqReflectionYourDaySoFarCopy.title));
        });
      });
    });
    When("I select the first option for reflection.your_day_so_far", when.tapText(hqReflectionYourDaySoFarCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.how_you_feel_today step", then.textVisible(hqReflectionHowYouFeelTodayCopy.title));
        });
      });
    });
    When("I select the first option for reflection.how_you_feel_today", when.tapText(hqReflectionHowYouFeelTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I can see the new designed advice/goal question with the banner with an image on top", then.idVisible(ids.HINT_LABEL("Health advice and tips")));
          Then("I can see the new designed advice/goal questions image", then.idVisible(ids.HINT_VARIANT_IMAGE("https://yulife-develop.imgix.net/journeys/health-questionnaire/advice.svg?ixlib=js-3.2.1&s=22d39a7ba57dafd56f6a12b0f8f1da7f")));
          Then("I can see the title", then.idVisible(ids.TEXT_TEMPLATE("How motivated are you to take up this advice?", "b2b")));
          Then("I can see the next button is disabled as I haven't selected an answer", then.idVisible(ids.BUTTON_BASE("Next", true)));
        });
      });
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
    When("I click on the 'Next' button", when.tapID(ids.HALF_MODAL_CTA), async () => {
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
    When("I click on the 'Next' button", when.tapID(ids.HALF_MODAL_CTA), async () => {
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
    When("I click on the 'Next' button", when.tapID(ids.HALF_MODAL_CTA), async () => {
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
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I can see the slider question", then.idVisible(ids.TEXT_TEMPLATE("Yesterday, did you check social media multiple times, even when it may not have been appropriate (e.g., during a meeting, at dinner, etc.)?", "b2b")));
      Then("I can see the next button is enabled before the slider is moved", then.idVisible(ids.BUTTON_BASE("Next", false)));
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      Then("I can see the select multiple image question", then.idVisible(ids.TEXT_TEMPLATE("How do you typically maintain your social connections?", "b2b")));
      Then("I can see the (select all that apply) subheading", then.textVisible("(Select all that apply)"));
      Then("I can see the next button is disabled as I have not selected an answer yet", then.idVisible(ids.BUTTON_BASE("Next", true)));
    });
    When("I select in-person meet ups", when.tapID(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.8.109.1", false)), async () => {
      When("I select phone calls or video chats", when.tapID(ids.IMAGE_CHOICE_CHECKBOX("dynamic_health.2.8.109.2", false)), async () => {
        Then("I can see the next button is enabled as I have select answers", then.idVisible(ids.BUTTON_BASE("Next", false)));
      });
    });
    When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
      When("I click on the 'Enter your weight'", when.tapID(ids.TEXT_TEMPLATE("Enter your weight", "l1b")), async () => {
        Then("I should see Kilos (kg), Stones (st), Pounds (lbs) tab", then.canSeeWeightConversion);
      });
    });
    When("I click to enter my weight in pounds", when.tapID(ids.CHIP_LIST_ITEM("Pounds (lbs)")), async () => {
      Then("I should see im on the lower bound of the slider 50 lbs", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("50lbs")));
    });
    When("I swipe to choose my weight of 52 lbs", when.scrollWithLimitedAttemptsUntilIdVisible(ids.SCROLL_PICKER("WEIGHT_LB"), ids.SCROLL_PICKER_ACTIVE_ITEM("52lbs"), "up", 2, 2000, 0.1, 0.5, 0.6), async () => {
      Then("I should see ive stopped on 52 lbs", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("52lbs")));
    });
    When("I tap select", when.tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("You did it!", "h3")));
        Then("As a user who is on a earnRate: 10, for completing the HQ that has a yuCoinRewardAsEarnRateMultiple: 6, I should receive 60 YuCoin for completing it", then.idVisible("health_questionnaire_submission_yucoin_markdown"));
      });
    });
    When("I close the app before I press the claim button", when.start, async () => {
      Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_2, data.AUTH_2, true, "UK"), async () => {
        Then("I should see my YuCoin balance gone up by 60", then.textVisible("260 YuCoin today"));
      });
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      When("I swipe to the bottom", when.scrollFromID(ids.ARROW_BUTTON, "up", "fast", 0.5), async () => {
        Then("I should see Additional rewards showing the questionnaire", then.textVisible("Quiz"));
        Then("I should see amount of YuCoin given for the questionnaire", then.textVisible("60"));
      });
    });
  });

  Scenario("I should see the YuScreen CTA update, starting with 'Take a challenge (2 left today)', decreasing to '1 left today'. Once all challenges are done, the CTA should change to 'Check in on your health', and finally update to 'Invite a colleague'", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_8.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the YuScreen CTA 'Take a challenge (2 left today)'", then.textVisible("Take a challenge (2 left today)", 3000));
    });
    helper.takeChallengeFromYuCoinScreen("Take a challenge (1 left today)", true)();
    helper.takeChallengeFromYuCoinScreen("Check in on your health (+6 YuCoin)", false)();
    When("I tap to check in on your health", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I press the next button", when.tapID(ids.BUTTON_BASE(hqInfoCopy.cta, false)), async () => {
      Then("I should see the terms and conditions screen", then.onHQConsentScreen(hqConsentCopy));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I accept the terms and conditions", when.tapID(ids.BUTTON_BASE(hqConsentCopy.cta, false)), async () => {
        Then("I should see the reflection.rested_today step", then.textVisible(hqReflectionRestedTodayCopy.title));
      });
    });
    When("I select the first option for reflection.rested_today", when.tapText(hqReflectionRestedTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.your_day_so_far step", then.textVisible(hqReflectionYourDaySoFarCopy.title));
        });
      });
    });
    When("I select the first option for reflection.your_day_so_far", when.tapText(hqReflectionYourDaySoFarCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I should see the reflection.how_you_feel_today step", then.textVisible(hqReflectionHowYouFeelTodayCopy.title));
        });
      });
    });
    When("I select the first option for reflection.how_you_feel_today", when.tapText(hqReflectionHowYouFeelTodayCopy.option), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
        When("I press Next button", when.tapID(ids.BUTTON_BASE("Next", false)), async () => {
          Then("I can see the new designed advice/goal question with the banner with an image on top", then.idVisible(ids.HINT_LABEL("Health advice and tips")));
        });
      });
    });
    When("I select 'I'm interested in it'", when.tapID(ids.CONTENT_ITEM_CHOICE("dynamic_advice.1.2.15_choice")), async () => {
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        When("I click claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
          Then("I should see the YuScreen CTA 'Invite a colleague'", then.textVisible("Invite a colleague"));
        });
      });
    });
  });

  Scenario("I should be able to answer a question with a 'Scroll Picker' component", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_SDUI_SCROLL_PICKER.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see my starting YuCoin balance", then.textVisible("200 YuCoin today"));
    });
    When("I press on the Health Questionnaire hero card", when.tapID(ids.PINK_ARROW_ICON), async () => {
      Then("I should see the prompt to enter my weight", then.idVisible(ids.TEXT_TEMPLATE("Enter your weight", "l1b")));
    });
    When("I press on 'Enter your weight'", when.tapID(ids.TEXT_TEMPLATE("Enter your weight", "l1b")), async () => {
      Then("I should see 'Kilos (kg)'", then.idVisible(ids.CHIP_LIST_ITEM("Kilos (kg)")));
      Then("I should see 'Stones (st)'", then.idVisible(ids.CHIP_LIST_ITEM("Stones (st)")));
      Then("I should see 'Pounds (lbs)'", then.idVisible(ids.CHIP_LIST_ITEM("Pounds (lbs)")));
    });
    When("I press 'Pounds (lbs)'", when.tapID(ids.CHIP_LIST_ITEM("Pounds (lbs)")), async () => {
      Then("I should see im on the lower bound of the slider 50 lbs", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("50lbs")));
    });
    When("I swipe to choose my weight of 52 lbs", when.scrollWithLimitedAttemptsUntilIdVisible(ids.SCROLL_PICKER("WEIGHT_LB"), ids.SCROLL_PICKER_ACTIVE_ITEM("52lbs"), "up", 2, 2000, 0.1, 0.5, 0.6), async () => {
      Then("I should see ive stopped on 52 lbs", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("52lbs")));
      Then("I should see the 'Select' button", then.idVisible(ids.SCROLL_PICKER_CONFIRM_BUTTON));
    });
    When("I tap the 'Select' button", when.tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON), async () => {
      Then("The scroll picker modal should be closed", then.idVisible(ids.BUTTON_BASE("Next")));
      When("I click on the 'Next' button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
        Then("I should be on the claim screen", then.idVisible(ids.TEXT_TEMPLATE("You did it!", "h3")));
      });
    });
  });
});
