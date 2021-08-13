import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_14, AUTH_14 } from "@data";
import { MENU_ICON } from "@ids";

Feature("As a user with an activity history I should be able to see my statistics", async () => {
    
    Scenario("As a user with an activity history, I can see my statistics", scenario.start, async () => {
        Given("I login as user", given.loginAsUser(CUSTOMER_14, AUTH_14), async () => {
            When("I go to the menu", when.tapID(MENU_ICON), async () => {
                Then("I should see the menu icons", then.menuItemsVisible)
                When("I tap statistics", when.tapMenuItem("Statistics"), async () => {
                    Then("I should see the titles, subtitiles, and values in the statistics page", then.userStatsVisible)
                })
            })
        })
    })
})
