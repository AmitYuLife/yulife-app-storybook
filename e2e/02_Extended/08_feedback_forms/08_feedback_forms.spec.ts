import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_25, CUSTOMER_25, AUTH_29, CUSTOMER_29, FEEDBACK_FORM_1, FEEDBACK_FORM_2 } from "@data";
import { FEEDBACK_FORM_QUESTION, FEEDBACK_TEXT_INPUT, NAV_BAR, SLIDER_INPUT, SLIDER_LABEL, DAILY_STEPS_SCREEN } from "@ids";


Feature("Feedback forms should behave correctly", async()=>{
     
    Scenario("As a user with a feedback form to compelte, I should see this on login (positive rating)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_25, AUTH_25, true), async()=>{
            When("I tap next on the signup screen", when.tapText("Next"), async()=>{
                Then("I should see the feedback form", then.feedbackFormVisible(FEEDBACK_FORM_1.data.title))
                Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[0].questionText)))
                Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_1.data.questions[0].labels.left))))
                Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_1.data.questions[0].labels.right)))
                When("I Tap 8", when.tapID(SLIDER_INPUT(8)), async()=>{
                    When("I tap next question", when.tapText("next question"), async()=>{
                        Then("I should see the correct next question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[2].questionText)))
                        Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                        When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "duels"), async()=>{
                            Then("I should see the text I just input", then.textVisible("duels"))
                        })
                        When("I tap submit", when.tapText("submit"), async()=>{
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
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
                Then("I should see the feedback form", then.feedbackFormVisible(FEEDBACK_FORM_1.data.title))
                Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[0].questionText)))
                Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_1.data.questions[0].labels.left))))
                Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_1.data.questions[0].labels.right)))
                When("I Tap 3", when.tapID(SLIDER_INPUT(3)), async () => {
                    When("I tap next question", when.tapText("next question"), async () => {
                        Then("I should see the correct next question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_1.data.questions[1].questionText)))
                        Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                        When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "dark mode"), async () => {
                            Then("I should see the text I just input", then.textVisible("dark mode"))
                        })
                        When("I tap submit", when.tapText("submit"), async () => {
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with a feedback form to compelte, I should see this on login (positive rating:8)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_29, AUTH_29, true), async()=>{
            When("I tap next on the signup screen", when.tapText("Next"), async()=>{
                Then("I should see the feedback form Title", then.feedbackFormVisible(FEEDBACK_FORM_2.data.title))
                Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[0].questionText)))
                Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_2.data.questions[0].labels.left))))
                Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_2.data.questions[0].labels.right)))
                When("I Tap 8", when.tapID(SLIDER_INPUT(8)), async()=>{
                    When("I tap Submit your rating", when.tapText("Submit your rating"), async()=>{
                        Then("I should see the correct question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[1].questionText)))
                        Then("I should see the correct label question text", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[1].labels.placeholder)))
                        Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                        When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "duels"), async()=>{
                            Then("I should see the text I just input", then.textVisible("duels"))
                        })
                        When("I tap Submit your feedback", when.tapText("Submit feedback"), async()=>{
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                            })
                        })
                        When("I close and reopen the app", when.reloadOnly, async()=>{  
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("The Feedback Form should not popUp again", then.textNotVisible(FEEDBACK_FORM_2.data.title, 6000))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with a feedback form to compelte, I should see this on login (neutral rating:7)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_29, AUTH_29, true), async()=>{
            When("I tap next on the signup screen", when.tapText("Next"), async()=>{
                Then("I should see the feedback form Title", then.feedbackFormVisible(FEEDBACK_FORM_2.data.title))
                Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[0].questionText)))
                Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_2.data.questions[0].labels.left))))
                Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_2.data.questions[0].labels.right)))
                When("I Tap 7", when.tapID(SLIDER_INPUT(7)), async()=>{
                    When("I tap Submit your rating", when.tapText("Submit your rating"), async()=>{
                        Then("I should see the correct question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[2].questionText)))
                        Then("I should see the correct label question text", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[2].labels.placeholder)))
                        Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                        When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "car insurance"), async()=>{
                            Then("I should see the text I just input", then.textVisible("car insurance"))
                        })
                        When("I tap Submit your feedback", when.tapText("Submit feedback"), async()=>{
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                            })
                        })
                        When("I close and reopen the app", when.reloadOnly, async()=>{  
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("The Feedback Form should not popUp again", then.textNotVisible(FEEDBACK_FORM_2.data.title, 6000))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with a feedback form to compelte, I should see this on login (bad rating:4)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_29, AUTH_29, true), async()=>{
            When("I tap next on the signup screen", when.tapText("Next"), async()=>{
                Then("I should see the feedback form Title", then.textVisible(FEEDBACK_FORM_2.data.title, 5000))
                Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[0].questionText)))
                Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_2.data.questions[0].labels.left))))
                Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_2.data.questions[0].labels.right)))
                When("I Tap 4", when.tapID(SLIDER_INPUT(4)), async()=>{
                    When("I tap Submit your rating", when.tapText("Submit your rating"), async()=>{
                        Then("I should see the correct question text", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[3].questionText)))
                        Then("I should see the correct label question text", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[3].labels.placeholder)))
                        Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                        When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "more rewards"), async()=>{
                            Then("I should see the text I just input", then.textVisible("more rewards"))
                        })
                        When("I tap Submit your feedback", when.tapText("Submit feedback"), async()=>{
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                            })
                        })
                        When("I close and reopen the app", when.reloadOnly, async()=>{  
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("The Feedback Form should not popUp again", then.textNotVisible(FEEDBACK_FORM_2.data.title, 6000))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("As a user with a feedback form to compelte, I should see this on login (negative rating:0)", scenario.start, async () => {
        Given("I login as a user", given.loginOnly(CUSTOMER_29, AUTH_29, true), async()=>{
            When("I tap next on the signup screen", when.tapText("Next"), async()=>{
                Then("I should see the feedback form Title", then.textVisible(FEEDBACK_FORM_2.data.title, 5000))
                Then("I should see question", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[0].questionText)))
                Then("I should see the left label for this question", then.idVisible(SLIDER_LABEL((FEEDBACK_FORM_2.data.questions[0].labels.left))))
                Then("I should see the right label for this question", then.idVisible(SLIDER_LABEL(FEEDBACK_FORM_2.data.questions[0].labels.right)))
                When("I Tap 0", when.tapID(SLIDER_INPUT(0)), async()=>{
                    When("I tap Submit your rating", when.tapText("Submit your rating"), async()=>{
                        Then("I should see the correct question text", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[3].questionText)))
                        Then("I should see the correct label question text", then.idVisible(FEEDBACK_FORM_QUESTION(FEEDBACK_FORM_2.data.questions[3].labels.placeholder)))
                        Then("I should see the text input", then.idVisible(FEEDBACK_TEXT_INPUT))
                        When("I type something", when.typeViaID(FEEDBACK_TEXT_INPUT, "This is the way"), async()=>{
                            Then("I should see the text I just input", then.textVisible("This is the way"))
                        })
                        When("I tap Submit your feedback", when.tapText("Submit feedback"), async()=>{
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                            })
                        })
                        When("I close and reopen the app", when.reloadOnly, async()=>{  
                            When("I tap on Awesome", when.tapText("Awesome"), async()=>{
                                Then("The Feedback Form should not popUp again", then.textNotVisible(FEEDBACK_FORM_2.data.title, 6000))
                            })
                        })
                    })
                })
            })
        })
    })
})
