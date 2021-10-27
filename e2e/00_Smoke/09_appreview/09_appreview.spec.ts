import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { AUTH_36, CUSTOMER_36} from "@data";
import {APPREVIEW_TEXT} from "@ids";


Feature("App store review should behave correctly", async()=>{
     
    Scenario("App store review pop up and i should tap Yeah!", scenario.start, async () => {
        Given("I am in the app should pop up app review", given.loginAsUser(CUSTOMER_36, AUTH_36), async () => {
            Then("I wait for 3 sec", then.wait(3000))  
            Then("I should see text Enjoying YuLife?", then.idVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
            Then("I should see text (We’d love to know either way!)", then.textVisible("(We’d love to know either way!)"))           
            When("I tap the button", when.tapText("Yeah!",1,true), async () => {
                Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
                When("I close and reopen the app", when.reloadOnly, async()=>{  
                    Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
                })         
            })
        })
    })
    Scenario("App store review pop up and i should tap on Not really and after that Give feedback", scenario.start, async () => {
        Given("I am in the app should pop up app review", given.loginAsUser(CUSTOMER_36, AUTH_36), async () => {    
            Then("I wait for 3 sec", then.wait(3000))
            Then("I should see text Enjoying YuLife?", then.idVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
            When("I tap the button Not really", when.tapText("Not really",1,true), async () => {
                Then("I should see text We’re sorry to hear that", then.idVisible(APPREVIEW_TEXT("We’re sorry to hear that")))
                Then("I should see text We’d love a chance to do better. Would you mind leaving us a few tips?", then.textVisible("We’d love a chance to do better. Would you mind leaving us a few tips?"))
                When("I tap the button Give feedback", when.tapText("Give feedback",1,true), async () => {
                    Then("I should see intercom", then.textVisible("Start a conversation"))
                    When("I close and reopen the app", when.reloadOnly, async()=>{  
                        Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
                    })
                })
            })
        })
    })

    Scenario("App store review pop up and i should tap on Not really and after that No thanks", scenario.start, async () => {
        Given("I am in the app should pop up app review", given.loginAsUser(CUSTOMER_36, AUTH_36), async () => {    
            Then("I wait for 3 sec", then.wait(3000))
            Then("I should see text Enjoying YuLife?", then.idVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
            When("I tap the button Not really", when.tapText("Not really",1,true), async () => {
                Then("I should see text We’d love a chance to do better. Would you mind leaving us a few tips?", then.textVisible("We’d love a chance to do better. Would you mind leaving us a few tips?"))
                When("I tap the button Give feedback", when.tapText("No thanks",1,true), async () => {
                    Then("I should  see the daily steps screen", then.onDailySteps())
                    Then("I should  not see intercom", then.textNotVisible("Start a conversation"))
                    When("I close and reopen the app", when.reloadOnly, async()=>{  
                        Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
                    })
                })
            })
        })
    })

    Scenario("App store review pop up and i should tap Ask Later", scenario.start, async () => {
        Given("I am in the app should pop up app review", given.loginAsUser(CUSTOMER_36, AUTH_36), async () => {
            Then("I wait for 3 sec", then.wait(3000))  
            Then("I should see text Enjoying YuLife?", then.idVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
            Then("I should see text (We’d love to know either way!)", then.textVisible("(We’d love to know either way!)"))           
            When("I tap the button Ask me later", when.tapText("Ask me later",1,true), async () => {
                When("I close and reopen the app", when.reloadOnly, async()=>{  
                    Then("I should not see a screen asking me Enjoying YuLife?", then.idNotVisible(APPREVIEW_TEXT("Enjoying YuLife?")))
                })         
            })
        })
    })
})