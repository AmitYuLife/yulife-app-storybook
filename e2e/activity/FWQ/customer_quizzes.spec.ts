import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids"
import { hqInfoCopy, moneyMasteryFWQDescriptionPage } from "./_resources/fixtures";
import { yuscreenImages } from "@images";


Feature("Quizzes and questionnaires", async () => {
    Scenario("I encounter an error on quiz event without journey and Health Questionnaire is disabled", scenario.start,async () => {
        Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_137_GHI_REWARDS, data.AUTH_137), async () => {
            Then("I should see the money mastery quiz", then.customerQuizModalVisible("Money Mastery#2", "6"))
        })
        When("I click on the event card", when.tapText("Money Mastery#2"), async () => {
            Then("I am on the correct description page for the money mastery quiz", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, false))
        })
        When("I click to take the quiz", when.tapText(moneyMasteryFWQDescriptionPage.button), async () => {
            Then("I should see an error message, as this quiz does not have a journey", then.idVisible(ids.TEXT_TEMPLATE("Looks like Yugi’s spotted an error!", "h2")))
        })
        When("I close the error message", when.tapID(ids.SCREEN_CLOSE), async () => {
            When("I scroll up the event page", when.scrollFromID(ids.EVENT_DIALOG_SCREEN_SCROLL, "down", "fast", 0.5), async () => {
                When("I go back to the YuCoin screen", when.tapID(ids.BACK_BUTTON, 1500), async () => {
                    When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
                        When("I scroll to the bottom of the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
                            Then("I should not see the HQ title available", then.textNotVisible("Getting to know Yu!"))
                        })
                    })
                })
            })
        })
    });

    // @update INTL-593 Maximise Yu being reworked (Component logic updates)
    Scenario("I should see the Health Questionnaire and be able to complete, if I have not done so before", scenario.start,async () => {
        Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_73, data.AUTH_73), async () => {
            Then("I should see my YuCoin balance of 560, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560)))
            Then("I should see '200 YuCoin Today' before the HQ", then.textVisible("200 YuCoin today"))
            Then("I should see the FTUE event panel, before the HQ event panel", then.textVisible(data.GOALS_FTUE.data.title["en-GB"]))
        })
        // Un-skip below when maximise yu is introduced back in
        WhenSkip("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
            Then("I should see yuscreen v5", then.idVisible(ids.YUMOJI_YUSCREEN_V5, 4000))
            Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(200, 460))
            Then("I should see the challenge nudge", then.challengeNudgeVisible(1, 60))
        })
        WhenSkip("I swipe left on the challenge nudge", when.scrollFromID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.calendarIcon), "left", "fast"), async () => {
            Then("I should see the HQ nudge", then.hqNudgeVisible())
        })
        WhenSkip("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
            Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
        })
        WhenSkip("I close the HQ", when.tapID(ids.SCREEN_CLOSE), async () => {
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                Then("I should see the FTUE event panel, before the HQ event panel", then.textVisible(data.GOALS_FTUE.data.title["en-GB"]))
            })
        })
        When("I swipe to the HQ Event panel", when.swipeFromText(data.GOALS_FTUE.data.title["en-GB"], "left", "slow", 0.5), async () => {
            Then("I should see the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))
        })
        When("I swipe to the Test Event", when.swipeFromText(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"], "left", "slow", 0.5), async () => {
            Then("I should see the Test Event panel, after the HQ event panel", then.textVisible(data.GOALS_1.data.title))
        })
        When("I swipe back to the HQ Event panel, from the Test Event", when.swipeFromText(data.GOALS_1.data.title, "right", "slow", 0.5), async () => {
            Then("I should see the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))
        })
        When("I tap the event panel for the HQ", when.tapText(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]), async () => {
            Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
        })
        When("I press the Let’s go! button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the first question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_01))
            Then("I should see the progress bar in the start position", then.progressBarVisible(0))
        })
        When("I select the first option for Q1", when.tapText(data.JOURNEY_STEP_UI_01.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_01, 0))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_01, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the second question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_02))
            Then("I should see the progress bar has moved", then.progressBarVisible(20))
        })
        When("I press the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the first question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_01))
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_01, 0))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_01, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the second question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_02))
            Then("I should see the progress bar has moved", then.progressBarVisible(20))
            Then("I should not see the first option selected", then.answerNotSelected(data.JOURNEY_STEP_UI_02, 0))
            Then("I should not see the second option selected", then.answerNotSelected(data.JOURNEY_STEP_UI_02, 1))
        })
        When("I select the second option for Q2", when.tapText(data.JOURNEY_STEP_UI_02.data.templateUi.options[1].label["en-GB"]), async () => {
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_02, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_02))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the third question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_03))
            Then("I should see the progress bar has moved", then.progressBarVisible(50))
        })
        When("I select the second option for Q3", when.tapText(data.JOURNEY_STEP_UI_03.data.templateUi.options[1].label["en-GB"]), async () => {
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_03, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_03))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the fourth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_04))
            Then("I should see the progress bar has moved", then.progressBarVisible(70))
        })
        When("I select the first option for Q4", when.tapText(data.JOURNEY_STEP_UI_04.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_04))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_04, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the fifth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_05))
            Then("I should see the progress bar has moved", then.progressBarVisible(100))
        })
        When("I select the first option for Q5", when.tapText(data.JOURNEY_STEP_UI_05.data.templateUi.options[0].label["en-GB"]), async () => {
            When("I also select the third option for Q5", when.tapText(data.JOURNEY_STEP_UI_05.data.templateUi.options[2].label["en-GB"]), async () => {
                Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_05))
                Then("I should see the third option selected", then.answerSelected(data.JOURNEY_STEP_UI_05, 2))
                Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_05, 1))
                Then("I should see the fourth option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_05, 3))
                Then("I should see the fifth option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_05, 4))
            })
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the sixth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_06))
            Then("I should see the progress bar has moved", then.progressBarVisible(120))
        })
        When("I select the first option for Q6", when.tapText(data.JOURNEY_STEP_UI_06.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_06))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_06, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the seventh question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_07))
            Then("I should see the progress bar has moved", then.progressBarVisible(150))
        })
        When("I select the first option for Q7", when.tapText(data.JOURNEY_STEP_UI_07.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_07))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_07, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the eigth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_08))
            Then("I should see the progress bar has moved", then.progressBarVisible(170))
        })
        When("I select the first option for Q8", when.tapText(data.JOURNEY_STEP_UI_08.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_08))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_08, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the chest screen", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap the screen", when.tapID(ids.LOTTIE_VIEW), async () => {
            Then("The chest should be open", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap claim", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the daily screen", then.textVisible("Take a challenge (1 left today)"))
            Then("I should not see the event panel for the HQ", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]))
            Then("I should see my YuCoin balance of 580, after finishing the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(580)))
            Then("I should see '220 YuCoin Today' after the HQ completed", then.textVisible("220 YuCoin today"))
        })
        When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
            Then("I see the 220 yucoin earned today so far", then.textVisible("220 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"))
            Then("I should see that I completed the qustionnaire", then.textVisible("Questionnaire"))
            Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("20", 1500))
        })
        // Un-skip below when maximise yu is introduced back in
        WhenSkip("I go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
                Then("I should see the amount of YuCoin I have earned today", then.maximiseYucoinVisible(220, 460))
                Then("I should see the completed HQ nudge", then.completedHQNudgeVisible())
            })
        })
        WhenSkip("I tap the HQ nudge", when.tapID(ids.NUDGE_ITEM_IMAGE(yuscreenImages.hqIcon)), async () => {
            Then("I should be on thes same screen, and still see the completed HQ nudge", then.completedHQNudgeVisible())
        })
    })

    Scenario("I should see a second Health Questionnaire and complete it, with differences on second+ journey", scenario.start,async () => {
        Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_44, data.AUTH_44, true, "United Kingdom", false), async () => {
            Then("I should see my YuCoin balance of 200, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)))
            Then("I should not see the event panel, as I have completed one before", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]))
        })
        When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
            Then("I see the 0 yucoin earned today so far", then.textVisible("0 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I press the Let's go! button", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
            Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
        })
        When("I press the Let's go! button on the intro screen of the HQ", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the first question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_11))
        })
        When("I select the first option for Q1", when.tapText(data.JOURNEY_STEP_UI_11.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_11))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_11, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the second question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_12))
        })
        When("I select the second option for Q2", when.tapText(data.JOURNEY_STEP_UI_12.data.templateUi.options[1].label["en-GB"]), async () => {
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_12, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_12))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the third question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_13))
        })
        When("I select the second option for Q3", when.tapText(data.JOURNEY_STEP_UI_13.data.templateUi.options[1].label["en-GB"]), async () => {
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_13, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_13))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the fourth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_14))
        })
        When("I select the first option for Q4", when.tapText(data.JOURNEY_STEP_UI_14.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_14))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_14, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the fifth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_15))
        })
        When("I select the first option for Q5", when.tapText(data.JOURNEY_STEP_UI_15.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_15))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_15, 1))
        })
        When("I tap the close button", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
            Then("I should be back on the today's earning screen, and can see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should be back on the today's earning screen, and I should see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I tap Let's go!", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
            Then("I should be on the fifth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_15))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_15))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_15, 1))
        })
        When("I select the first option for Q5", when.tapText(data.JOURNEY_STEP_UI_15.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_15))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_15, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the sixth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_16))
        })
        When("I select the first option for Q6", when.tapText(data.JOURNEY_STEP_UI_16.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_16))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_16, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the seventh question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_17))
        })
        When("I select the first option for Q7", when.tapText(data.JOURNEY_STEP_UI_17.data.templateUi.options[0].label["en-GB"]), async () => {
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_17))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_17, 1))
        })
        When("I click the next button", when.tapID(ids.CONTENT_ITEM_BUTTON_IMAGE("")), async () => {
            Then("I should be on the eigth question", then.onHQHeightQuestion(data.JOURNEY_STEP_UI_18))
        })
        When("I tap 'Enter your height", when.tapID(ids.TEXT_TEMPLATE("Enter your height", "l1b")), async () => {
            Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("150 cm")))
        })
        When("I choose scroll to 143 cm", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("150 cm"), "down", "slow"), async () => {
            Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("143 cm")))
        })
        When("I tap switch to ft", when.tapID(ids.SWITCH_ICON), async () => {
            Then("I should see switch to cm", then.textVisible("Switch to cm"))
            Then("I should see 5ft", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("5 ft")))
            Then("I should see 0in", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("0 in")))
        })
        When("I scroll to 9 ft", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("5 ft"), "up", "slow"), async () => {
            When("I scroll to 11 in", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("0 in"), "up", "slow"), async () => {
            Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("9 ft")))
            Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("11 in")))
            })
        })
        When("I tap select", when.tapID(ids.SCROLL_PICKER_CONFIRM_BUTTON), async () => {
            Then("I should see 9ft 11 in as the selected height", then.idVisible(ids.TEXT_TEMPLATE("9ft 11in", "l1b")))
        })
        When("I click the next button", when.tapID(ids.BUTTON_BASE("Next")), async () => {
            Then("I should be on the chest screen", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap the screen", when.tapID(ids.LOTTIE_VIEW), async () => {
            Then("The chest should be open and show the YuCoin I earned", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap claim", when.tapID(ids.BUTTON_BASE("Claim")), async () => {
            Then("I should still see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should still see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I tap let's go", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0), async () => {
            Then("I should be on the HQ Hold screen", then.onHQHoldScreen)
        })
        When("I close this screen", when.tapID(ids.SCREEN_CLOSE), async () => {
            Then("I should still see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should still see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I close this screen", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should be on the daily screen", then.textVisible("Take a challenge (2 left today)"))
            Then("I should not see the event panel", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]))
            Then("I should see my YuCoin balance of 20, after I finish the HQ", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20)))
            Then("I should see '20 YuCoin Today' due to finishing HQ", then.textVisible("20 YuCoin today"))
        })
        When("I go to the today's earnings screen", when.tapID(ids.STEPS_COUNT(0)), async () => {
            Then("I see the 20 yucoin earned today so far", then.textVisible("20 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"))
            Then("I should see that I completed the qustionnaire", then.textVisible("Questionnaire"))
            Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("20", 1500))
        })
    })
})