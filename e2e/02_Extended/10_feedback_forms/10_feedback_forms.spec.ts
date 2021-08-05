import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_25, CUSTOMER_25, FEEDBACK_FORM_1 } from "@data";
import { FEEDBACK_FORM_QUESTION, FEEDBACK_TEXT_INPUT, NAV_BAR, SLIDER_INPUT, SLIDER_LABEL, DAILY_STEPS_SCREEN } from "@ids";


Feature("Feedback forms should behave correctly", async()=>{

    Scenario("As a user with a feedback form to compelte, I should see this on login (positive rating)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_25, AUTH_25, true), async()=>{
            When("I tap next on the signup screen", when.tapText("Next"), async()=>{
                When("I tap later", when.tapText("Later"), async () => {
                    Then("I should see the feedback form", then.feedbackFormVisible(FEEDBACK_FORM_1.data.title))
                    Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[0].questionText)))
                    Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_1.data.questions[0].labels.left))))
                    Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_1.data.questions[0].labels.right)))
                    When("I Tap 10", when.tapID(SLIDER_INPUT(8)), async()=>{
                        When("I tap next question", when.tapText("next question"), async()=>{
                            Then("I should see the correct next question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[2].questionText)))
                            Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                            When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "duels"), async()=>{
                                Then("I should see the text I just input", then.textVisible("duels"))
                            })
                            When("I tap submit", when.tapText("submit"), async()=>{
                                When("I Tap let’s begin", when.tapText("let’s begin"), async()=>{
                                    When("I continue the login journey", when.completeIntro, async()=>{
                                        Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with a feedback form to compelte, I should see this on login (negative rating)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_25, AUTH_25, true), async () => {
            When("I tap next on the signup screen", when.tapText("Next"), async () => {
                When("I tap later", when.tapText("Later"), async () => {
                    Then("I should see the feedback form", then.feedbackFormVisible(FEEDBACK_FORM_1.data.title))
                    Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[0].questionText)))
                    Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_1.data.questions[0].labels.left))))
                    Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_1.data.questions[0].labels.right)))
                    When("I Tap 10", when.tapID(SLIDER_INPUT(3)), async () => {
                        When("I tap next question", when.tapText("next question"), async () => {
                            Then("I should see the correct next question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[1].questionText)))
                            Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                            When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "dark mode"), async () => {
                                Then("I should see the text I just input", then.textVisible("dark mode"))
                            })
                            When("I tap submit", when.tapText("submit"), async () => {
                                When("I Tap let’s begin", when.tapText("let’s begin"), async () => {
                                    When("I continue the login journey", when.completeIntro, async () => {
                                        Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    
})
