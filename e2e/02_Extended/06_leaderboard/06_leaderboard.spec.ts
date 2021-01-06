import { Scenario, Given, When, FeatureOnly, FeatureSkip, ScenarioOnly, Then } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { NAV_BAR } from "@ids";
import { LEADERBOARD_CUSTOMERS, LEADERBOARD_AUTH } from "./_data";

FeatureSkip("As a user I can see my achievements on the leaderboard", async () => {
    Scenario("I can login", scenario.startWithInsert, async () => {
        Given("I login", given.loginAsUser(LEADERBOARD_CUSTOMERS[0], LEADERBOARD_AUTH[0]), async () => {
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen", then.onLeaderboardConsent)
            })
        })
    })
})


