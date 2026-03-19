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
    Given("I login", given.loginAsUser(data.CUSTOMER_3, data.AUTH_3), async () => {
      When("I navigate to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin"), 5000), async () => {
        Then("I should see my YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 5000));
      });
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
      Then("I should be on the language selector screen", then.languageSelectorVisible);
      Then("I should see all the available languages listed", then.allLanguagesVsible);
    });
    When("I tap to switch to Japanese", when.switchLanguage(`${translations["ja-JP"].flag} ${translations["ja-JP"].name}`, 10_000), async () => {
      Then("I should be back on my YuCoin screen", then.idExist(ids.DAILY_STEPS_SCREEN, 25_000));
    });
    When("I close the pop up", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0, 10_000), async () => {
      Then("I should see that the YuCoin screen has changed in Japanese", then.textVisible(getTranslation("ja-JP").navbar.yucoin.label, 15_000));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0), 3000), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
        Then("I should see the Let's go! button in Japanese", then.textVisible(getTranslation("ja-JP").labels.cta.lets_go, 2000));
      });
    });
    When("I tap on the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0, 2000), async () => {
      Then("I should land on the Pathways screen", then.onPathwaysScreen);
    });
    When("I tap the first reflection item", when.tapID(ids.PATHWAYS_REFLECTION_ITEM(0, "active"), 2_000), async () => {
      Then("I should see the HQ information screen heading in Japanese", then.textVisible("デイリーリフレクション"));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I press the See terms button in Japanese", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE(""), 2000), async () => {
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
    When("I tap to go back", when.tapID(ids.BUTTON_CLOSE_HEADER("yulife"), 3_000), async () => {
      When("I go back to the yucoin screen", when.tapID(ids.BACK_BUTTON, 3_000), async () => {
        When("I go back to the todays earning screen", when.tapID(ids.LEFT_HEADING_BUTTON("今日の活動一覧"), 3_000), async () => {
          Then("I should see the HQ event panel", then.idVisible(ids.EVENT_CARD("健康チェックの質問"), 1500));
          Then("I should see the correct markdown for the HQ", then.idVisible(ids.EVENT_DESCRIPTION("健康に関する質問への回答で\n**60**![](https://yulife-develop.imgix.net/referral/YuCoin.png?ixlib=js-3.2.1&s=127f8080324e842a2d943842f26e51c7)をプレゼント。", "#464647"), 1500));
          Then("I should see the HQ card's pink arrow", then.idVisible(ids.PINK_ARROW_ICON, 1500));
        });
      });
    });
  });

  Scenario("Once I complete the journey, I should see the HQ journey event card gone", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see my YuCoin balance of 0, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)));
      Then("I should not see the event panel, as I have completed one before", then.textNotVisible("Daily health questions"));
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
      Then("I see the 0 yucoin earned today so far", then.textVisible("0 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
      Then("I can see the Daily Reflection title", then.textVisible("Daily Reflection"));
      Then("I should see the Let's go! button", then.textVisible("Let's go!"));
    });
    When("I press the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
      Then("I should land on the Pathways screen", then.onPathwaysScreen);
    });
    When("I tap the first reflection item", when.tapID(ids.PATHWAYS_REFLECTION_ITEM(0, "active"), 2_000), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I press the 'See terms and conditions' button", when.tapID(ids.BUTTON_BASE(hqInfoCopy.cta, false), 2000), async () => {
      Then("I should see the terms and conditions screen", then.onHQConsentScreen(hqConsentCopy));
    });
    When("I accept the terms and conditions", when.tapID(ids.BUTTON_BASE(hqConsentCopy.cta, false)), async () => {
      Then("I should see the reflection.rested_today step", then.textVisible(hqReflectionRestedTodayCopy.title));
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
      Then("I should be back on the Pathways screen", then.onPathwaysScreen);
    });
    When("I tap the first reflection item", when.tapID(ids.PATHWAYS_REFLECTION_ITEM(0, "active"), 2_000), async () => {
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
    When("I tap select", when.tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON, 3_000), async () => {
      Then("I should see 9ft 11 in as the selected height", then.idVisible(ids.TEXT_TEMPLATE("9ft 11in", "l1b")));
    });
    When("I click the next button", when.tapID(ids.BUTTON_BASE("Next"), 2_000), async () => {
      Then("I should see day 1 marked as completed", then.pathwaysStreakDayCompleted(1));
    });
    When("I tap Continue after reflection completion", when.tapID(ids.PATHWAYS_REFLECTED_CONTINUE, 2_000), async () => {
      Then("I should see the notifications reminder modal", then.idVisible(ids.GENERIC_SCREEN_HEADING("Stay on track with your reflections"), 5_000));
    });
    When("I tap to skip the reminder", when.tapID(ids.GENERIC_SCREEN_CTA("Skip-text-view"), 4_000), async () => {
      Then("I should be back on the Pathways screen", then.onPathwaysScreen);
    });
    When("I tap to go back", when.tapID(ids.BACK_BUTTON, 3_000), async () => {
      When("I go back to the yucoin screen", when.tapID(ids.LEFT_HEADING_BUTTON("TODAY’S_EARNINGS"), 3_000), async () => {
        Then("I should not see the event panel", then.textNotVisible("Daily health questions"));
        Then("I should see my YuCoin balance of 6, after I finish the HQ", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(6)));
        Then("I should see '6 YuCoin Today' due to finishing HQ", then.textVisible("6 YuCoin today"));
      });
    });
    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0), 3_000), async () => {
      Then("I should see 6 YuCoin for reward", then.textVisible("6 YuCoin"));
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5, 3_000), async () => {
      Then("I can see the Additional rewards heading", then.textVisible("Additional rewards", 1500));
      Then("I should see that I completed the questionnaire", then.textVisible("Daily Reflection", 1500));
      Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("6", 1500));
    });
  });

  Scenario("I should see the YuScreen CTA update, starting with 'Take a challenge (2 left today)', decreasing to '1 left today'. Once all challenges are done, the CTA should change to 'Check in on your health', and finally update to 'Invite a colleague'", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_8.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the YuScreen CTA 'Take a challenge (2 left today)'", then.textVisible("Take a challenge (2 left today)", 3000));
    });
    helper.takeChallengeFromYuCoinScreen("Take a challenge (1 left today)", true)();
    helper.takeChallengeFromYuCoinScreen("Check in on your health (+6 YuCoin)", false)();
    When("I tap to check in on your health", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
      Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy));
    });
    When("I scroll to see the terms button", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast", 0.5), async () => {
      When("I press the 'See terms and conditions' button", when.tapID(ids.BUTTON_BASE(hqInfoCopy.cta, false), 2000), async () => {
        Then("I should see the terms and conditions screen", then.onHQConsentScreen(hqConsentCopy));
      });
    });
    When("I accept the terms and conditions", when.tapText("Consent and continue"), async () => {
      Then("I should see the reflection.rested_today step", then.textVisible(hqReflectionRestedTodayCopy.title));
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
        Then("I should see day 1 marked as completed", then.pathwaysStreakDayCompleted(1));
      });
    });
    When("I tap Continue after reflection completion", when.tapID(ids.PATHWAYS_REFLECTED_CONTINUE, 2_000), async () => {
      Then("I should see the YuCoin screen CTA has changed to 'Invite a colleague'", then.textVisible("Invite a colleague", 2000));
    });
  });
});
