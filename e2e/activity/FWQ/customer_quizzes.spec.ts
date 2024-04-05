import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids"
import { moneyMasteryContinuePage, moneyMasteryFWQDescriptionPage, moneyMasteryIntroPage, moneyMasteryQuiz } from "./_resources/fixtures";
import { quizCompletedButton } from "./_resources/constants";


Feature("Financial Wellness Quizes", async () => {
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

})
