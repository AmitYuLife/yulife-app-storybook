import { Feature, Scenario, Given, When, Then, FeatureOnly, FeatureSkip, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_cycling/scenario"
import * as given from "./_cycling/given"
import * as when from "./_cycling/when"
import * as then from "./_cycling/then"
import { NAV_BAR, MENU_ICON, ACTIVITY_HISTORY_SCREEN, BUTTON_CLOSE_HEADER, CYCLING_COUNT } from "@ids";
import { CUSTOMER_65, AUTH_65 } from "@data";
// please keep this skip in for now
FeatureSkip("As a user my cycling distance is monitored correctly", async () => {
    // please keep this skip in for now
    ScenarioSkip("I cycled to work for a week and should see my data correctly stored", scenario.start, async () => {
        Given("I login as a user with 3 days worth of cycling data from 4 days ago", given.loginToYuScreen(false, CUSTOMER_65, AUTH_65), async () => {
            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(CYCLING_COUNT("km")))
            })
        })
        When("I have done 7.5 km today", when.addCyclingData(7500), async () => {
            When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
                When("I wait", when.wait(10000), async () => {
                    When("I tap awesome", when.tapText("Awesome"), async () => {
                        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                            Then("I should see 7.5km cycled", then.idVisible(CYCLING_COUNT("7.5 km")))
                        })
                    })
                })
            })
        })
        When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
            Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see the historical cycle records from the previous 3 days loaded in meaning the refresh has worked", then.canSeePreviousDaysCycling)
        })
        When("I go back", when.tapID(BUTTON_CLOSE_HEADER("activity history")), async () => {
            Then("I should be on the yucoin tab and can see daily cycling", then.onDailyCycling("7.5 km", 40))
        })
    })
})
