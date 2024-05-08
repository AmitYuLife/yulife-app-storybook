import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids"
import { hqInfoCopy, moneyMasteryContinuePage, moneyMasteryFWQDescriptionPage, moneyMasteryIntroPage, moneyMasteryQuiz } from "./_resources/fixtures";
import { quizCompletedButton } from "./_resources/constants";


Feature("Quizzes and questionnaires", async () => {
    Scenario("A user can navigate through a financial wellness quiz", scenario.start,async () => {
        Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_137_GHI_REWARDS, data.AUTH_137), async () => {
            Then("I should see the money mastery quiz", then.customerQuizModalVisible("Money Mastery#2", "6"))
        })
        When("I click on the event card", when.tapText("Money Mastery#2"), async () => {
            Then("I am on the correct description page for the money mastery quiz", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, false))
        })
        When("I click to take the quiz", when.tapText(moneyMasteryFWQDescriptionPage.button), async () => {
            Then("I am on the intro page for the quiz", then.onFinancialWellnessQuizIntroPage(moneyMasteryIntroPage)) 
        })
        When("I click the button to advance", when.tapText(moneyMasteryIntroPage.button), async () => {
            Then("I am on the first question for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[0], 5, "100"))
        })
        When("I click to move on without selecting an answer", when.tapText("Next"), async () => {
            Then("I am still on the first question for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[0], 5, "100"))
        })
        When("I click on one of the answers", when.tapText(moneyMasteryQuiz.pages[0].questionOrAnswerText[1]), async () => {
            Then("I can see the id has changed for the checkbox", then.idVisible(ids.CHECK_BOX_STATE(moneyMasteryQuiz.pages[0].questionOrAnswerText[1], true)))
        })
        When("I click a different answer", when.tapText(moneyMasteryQuiz.pages[0].questionOrAnswerText[3]), async () => {
            Then("I can see the id has changed for the new answer checkbox", then.idVisible(ids.CHECK_BOX_STATE(moneyMasteryQuiz.pages[0].questionOrAnswerText[3], true)))
            Then("I can see the id has changed for the old answer checkbox", then.idVisible(ids.CHECK_BOX_STATE(moneyMasteryQuiz.pages[0].questionOrAnswerText[1], false)))    
        })
        When("I click to move on to the first answer", when.tapText("Next"), async () => {
            Then("I am on the first answer for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[1], 5, "100"))
        })
        When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I am back on the previous page", then.textVisible(moneyMasteryQuiz.pages[0].title))
            Then("I can see my old answer is still selected", then.idVisible(ids.CHECK_BOX_STATE(moneyMasteryQuiz.pages[0].questionOrAnswerText[3], true)))
        })
        When("I click to move on again to the first answer", when.tapText("Next"), async () => {
            Then("I am back on the first answer for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[1], 5, "100"))
        })
        When("I close the quiz", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
            When("I scroll to the top", when.swipeFromText("Rewards", "down", "fast"), async () => {
                When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
                    Then("I am back on the home screen", then.customerQuizModalVisible("Money Mastery#2", "6"))
                })
            })
        })
        When("I click on the event card", when.tapText("Money Mastery#2"), async () => {
            Then("I am on the correct description page for the money mastery quiz", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, false))
        })
        When("I click to take the quiz", when.tapText(moneyMasteryFWQDescriptionPage.button), async () => {
            Then("I am back on the first answer for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[1], 5, "100"))
        })
        When("I click to move on to the second question", when.tapText("Next"), async () => {
            Then("I am on the second question for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[2], 5, "100"))
        })
        When("I click on one of the answers", when.tapText(moneyMasteryQuiz.pages[2].questionOrAnswerText[3]), async () => {
            When("I click to move on to the second answer", when.tapText("Next"), async () => {
                Then("I am on the second answer for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[3], 5, "100"))
            })
        })
        When("I click to move on to the third question", when.tapText("Next"), async () => {
            Then("I am on the third question for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[4], 5, "100"))
        })
        When("I click on one of the answers", when.tapText(moneyMasteryQuiz.pages[4].questionOrAnswerText[1]), async () => {
            When("I click to move on to the third answer", when.tapText("Next"), async () => {
                Then("I am on the third answer for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[5], 5, "100"))
            })
        })
        When("I click to move on to the final page", when.tapText("Next"), async () => {
            Then("I am on the end for the money mastery quiz", then.onFinancialWellnessQuizPage(moneyMasteryQuiz.pages[6], 5, "100"))
        })
        When("I swipe to the bottom of the page", when.swipeFromText(moneyMasteryQuiz.pages[6].title, "up", "fast"), async () => {
            When("I tap the button to continue without selecting anything", when.tapText("Next"), async () => {
                Then("I am still on the end page", then.textVisible(moneyMasteryQuiz.pages[6].questionOrAnswerText[6]))
            })
        })
        When("I select Yes", when.tapText("Yes"), async () => {
            When("I tap the button to continue without selecting a mood", when.tapText("Next"), async () => {
                Then("I am still on the end page", then.textVisible(moneyMasteryQuiz.pages[6].questionOrAnswerText[6]))
            })
        })
        When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
            When("I click to return to the final page", when.tapText("Next"), async () => {
                When("I swipe to the bottom of the page", when.swipeFromText(moneyMasteryQuiz.pages[6].title, "up", "fast"), async () => {
                    When("I select one of the moods", when.tapID(ids.CPD_FEEDBACK_BUTTON("3")), async () => {
                        When("I tap the button to continue without selecting yes/no", when.tapText("Next"), async () => {
                            Then("I am still on the end page", then.textVisible(moneyMasteryQuiz.pages[6].questionOrAnswerText[6]))
                        })
                    })
                })
            })
        })
        When("I select Yes", when.tapText("Yes"), async () => {
            When("I tap the button to continue with an answer and a mood selected", when.tapText("Next"), async () => {
                Then("I appear on the continue page for the quiz", then.onFinancialWellnessQuizContinuePage(moneyMasteryContinuePage))
            })
        })
        When("I select to end the journey", when.tapText(moneyMasteryContinuePage.buttonTwo), async () => {
            Then("I appear on the journey complete page", then.onQuizCompletedPage("Money Mastery#2"))
        })
        When("I close the page", when.tapText(quizCompletedButton), async () => {
            When("I scroll to the top", when.swipeFromText("Rewards", "down", "fast"), async () => {
                Then("I am back on description page but the button has gone", then.onFinancialWellnessQuizDescriptionPage(moneyMasteryFWQDescriptionPage, true))
            })
        })
        When("I scroll to the top", when.swipeFromText("Rewards", "down", "fast"), async () => {
            When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
                Then("I am back on the home screen and the card has gone", then.textNotVisible("Money Mastery#2"))
                Then("I can see my total coins has gone up", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1100)))
            })
        })
        When("I click to see my daily activity", when.tapID(ids.DAILYSTEP_SCREEN_COIN), async () => {
            Then("I can see my daily coins has gone up", then.textVisible("300 YuCoin"))
        })
        When("I swipe to the bottom of the screen", when.swipeFromText("Daily core activities", "up", "fast"), async () => {
            Then("I should see the financial wellness quiz", then.textVisible("Financial Wellness quiz"))
            Then("I should see the 100 yucoin I've earned", then.textVisible("100"))
        })
    });

    Scenario("I should see the Health Questionnaire and be able to complete, if I have not done so before", scenario.start,async () => {
        Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_73, data.AUTH_73), async () => {
            Then("I should see my YuCoin balance of 560, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560)))
            Then("I should see the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))
            
        })
        When("I tap the event panel for the HQ", when.tapText(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]), async()=>{
            Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
        })
        When("I close this screen", when.tapID(ids.SCREEN_CLOSE), async()=>{
            Then("I should be on the today screen with the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))
        })
        When("I go to the today's earnings screen", when.tapText("0 steps"), async () => {
            Then("I see the 200 yucoin earned today so far", then.textVisible("200 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I press the Let's go! button", when.tapText("Let's go!"), async()=>{
            Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
        })
        When("I press the Let’s go! button", when.tapText("Let’s go!"), async()=>{
            Then("I should be on the first question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_01))
        })
        When("I select the first option for Q1", when.tapText(data.JOURNEY_STEP_UI_01.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_01))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_01, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the second question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_02))
        })
        When("I select the second option for Q2", when.tapText(data.JOURNEY_STEP_UI_02.data.templateUi.options[1].label["en-GB"]), async()=>{
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_02, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_02))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the third question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_03))
        })
        When("I select the second option for Q3", when.tapText(data.JOURNEY_STEP_UI_03.data.templateUi.options[1].label["en-GB"]), async()=>{
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_03, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_03))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the fourth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_04))
        })
        When("I select the first option for Q4", when.tapText(data.JOURNEY_STEP_UI_04.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_04))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_04, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the fifth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_05))
        })
        When("I select the first option for Q5", when.tapText(data.JOURNEY_STEP_UI_05.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_05))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_05, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the sixth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_06))
        })
        When("I select the first option for Q6", when.tapText(data.JOURNEY_STEP_UI_06.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_06))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_06, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the seventh question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_07))
        })
        When("I select the first option for Q7", when.tapText(data.JOURNEY_STEP_UI_07.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_07))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_07, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the eigth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_08))
        })
        When("I select the first option for Q8", when.tapText(data.JOURNEY_STEP_UI_08.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_08))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_08, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the chest screen", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap the screen", when.tapID(ids.LOTTIE_VIEW), async()=>{
            Then("The chest should be open", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap claim", when.tapText("Claim"), async()=>{
            Then("I can see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I tap let's go", when.tapText("Let's go!"), async()=>{
            Then("I should be on the HQ Hold screen", then.onHQHoldScreen)
        })
        When("I close this screen", when.tapID(ids.SCREEN_CLOSE), async()=>{
            Then("I can see the HQ title", then.textVisible("Getting to know Yu!"))
            Then("I should see the Let's go! button", then.textVisible("Let's go!"))
        })
        When("I close this screen", when.tapID(ids.BACK_BUTTON), async()=>{
            Then("I should be on the yuscreen", then.textVisible("Take a challenge (1 left today)"))
            Then("I should not see the event panel", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]))
            Then("I should see my YuCoin balance of 580, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(580)))
            Then("I should see '220 YuCoin Today'", then.textVisible("220 YuCoin today"))
        })
        When("I go to the today's earnings screen", when.tapText("0 steps"), async () => {
            Then("I see the 200 yucoin earned today so far", then.textVisible("220 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"))
            Then("I should see that I completed the qustionnaire", then.textVisible("Questionnaire"))
            Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("20", 1500))
        })
    })
    
    Scenario("I should see a second Health Questionnaire and complete it, event if I have done so before", scenario.start,async () => {
        Given("I login as a user", given.logInAndGoToTab("yucoin", data.CUSTOMER_44, data.AUTH_44, true, "United Kingdom", false), async () => {
            Then("I should see my YuCoin balance of 200, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(0)))
            Then("I should see the event panel for the Health Questionnaire", then.questionEventPanelVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel))    
        })
        When("I tap the event panel for the HQ", when.tapText(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]), async()=>{
            Then("I should be on the HQ information screen", then.onHQInformationScreen(hqInfoCopy))
        })
        When("I press the Let’s go! button", when.tapText("Let’s go!"), async()=>{
            Then("I should be on the first question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_11))
        })
        When("I select the first option for Q1", when.tapText(data.JOURNEY_STEP_UI_11.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_11))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_11, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the second question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_12))
        })
        When("I select the second option for Q2", when.tapText(data.JOURNEY_STEP_UI_12.data.templateUi.options[1].label["en-GB"]), async()=>{
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_12, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_12))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the third question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_13))
        })
        When("I select the second option for Q3", when.tapText(data.JOURNEY_STEP_UI_13.data.templateUi.options[1].label["en-GB"]), async()=>{
            Then("I should see the second option selected", then.answerSelected(data.JOURNEY_STEP_UI_13, 1))
            Then("I should see the first option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_13))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the fourth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_14))
        })
        When("I select the first option for Q4", when.tapText(data.JOURNEY_STEP_UI_14.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_14))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_14, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the fifth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_15))
        })
        When("I select the first option for Q5", when.tapText(data.JOURNEY_STEP_UI_15.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_15))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_15, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the sixth question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_16))
        })
                When("I select the first option for Q6", when.tapText(data.JOURNEY_STEP_UI_16.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_16))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_16, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the seventh question", then.onHQRadioQuestion(data.JOURNEY_STEP_UI_17))
        })
        When("I select the first option for Q7", when.tapText(data.JOURNEY_STEP_UI_17.data.templateUi.options[0].label["en-GB"]), async()=>{
            Then("I should see the first option selected", then.answerSelected(data.JOURNEY_STEP_UI_17))
            Then("I should see the second option not selected", then.answerNotSelected(data.JOURNEY_STEP_UI_17, 1))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the eigth question", then.onHQHeightQuestion(data.JOURNEY_STEP_UI_18))
        })
        When("I tap 'Enter your height", when.tapID(ids.TEXT_TEMPLATE("Enter your height", "l1b")), async()=>{
            Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("150 cm")))
        })
        When("I choose scroll to 143 cm", when.scrollFromID(ids.SCROLL_PICKER_ACTIVE_ITEM("150 cm"), "down", "slow"), async () => {
            Then("I should see the scroll picker", then.idVisible(ids.SCROLL_PICKER_ACTIVE_ITEM("143 cm")))
        })
        When("I tap select", when.tapText("Select"), async()=>{
            Then("I should see 143cm as the selected height", then.idVisible(ids.TEXT_TEMPLATE("143cm", "l1b")))
        })
        When("I click the next button", when.tapText("Next"), async()=>{
            Then("I should be on the chest screen", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap the screen", when.tapID(ids.LOTTIE_VIEW), async()=>{
            Then("The chest should be open and show the YuCoin I earned", then.idVisible(ids.LOTTIE_VIEW))
        })
        When("I tap claim", when.tapText("Claim"), async()=>{
            Then("I should be on the yuscreen", then.textVisible("Take a challenge (2 left today)"))
            Then("I should not see the event panel", then.textNotVisible(data.CORE_JOURNEY_1.data.uiAccessCopy.eventPanel.title["en-GB"]))
            Then("I should see my YuCoin balance of 580, before I finish the Health Questionnaire", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20)))
            Then("I should see '20 YuCoin Today'", then.textVisible("20 YuCoin today"))
        })
        When("I go to the today's earnings screen", when.tapText("0 steps"), async () => {
            Then("I see the 20 yucoin earned today so far", then.textVisible("20 YuCoin"))
        })
        When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5), async () => {
            Then("I can see the Additional rewards heading", then.textVisible("Additional rewards"))
            Then("I should see that I completed the qustionnaire", then.textVisible("Questionnaire"))
            Then("I can see I earned the right yucoin for the from a HQ", then.textVisible("20", 1500))
        })
    })
})
