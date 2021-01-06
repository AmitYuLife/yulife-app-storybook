import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import { CUSTOMER_10, AUTH_10, CUSTOMER_11, AUTH_11 } from "@data";
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { DAILY_STEPS_SCREEN, NAV_BAR, REWARDS_SCREEN } from "@ids";

Feature("Tokens associated with a user should work correctly", async () => {

    Scenario("If my token has expired, I should see the session has expired message, and can log back in", scenario.start, async () => {
        Given("I login as a user", given.loginAsUser(CUSTOMER_10, AUTH_10), async () => {
            Then("I should be on the daily steps screen", then.idVisible(DAILY_STEPS_SCREEN))
            When("I wait", when.wait(30000), async () => {
                When("I reload the app", when.reloadOnly, async () => {
                    Then("I should be on the login screen", then.onLoginScreen)
                    Then("I should see the session expired message on login", then.textVisible("Your session has expired. Please log back in."))
                    When("I log back in", when.loginAfterTokenExpiry(), async () => {
                        Then("I should be on the daily steps screen", then.idVisible(DAILY_STEPS_SCREEN))
                        When("I go to the rewards tab", when.tapID(NAV_BAR("rewards")), async () => {
                            Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
                        })
                    })
                })
            })
        })
    })

    Scenario("My token will auto-refresh if my token is a few days from expiry", scenario.start, async () => {
        Given("I login as a user whose token is a few days from expiry", given.loginAsUser(CUSTOMER_11, AUTH_11), async () => {
            When("I reload the app", when.reloadOnly, async () => {
                Then("Because my token has refreshed, I should be on the daily steps screen", then.idVisible(DAILY_STEPS_SCREEN))
                When("I go to the rewards tab", when.tapID(NAV_BAR("rewards")), async () => {
                    Then("I should be on the rewards tab", then.idVisible(REWARDS_SCREEN))
                })
            })
        })
    })
})
