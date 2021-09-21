import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_34, AUTH_34 } from "@data"
import { CHALLENGE_TILE, LEVEL_CHALLENGE_BUTTON, VIEW_TOP_RIGHT_COIN_COUNTER, CHALLENGE_REWARD } from "@ids"

Feature("Surges work as intended", async () => {
    Scenario("I can complete a challenge with a user that has a surge and my reward is x10", scenario.start, async () => {
        Given("I login as a user with a surge", given.logInAndGoToTab("quests", CUSTOMER_34, AUTH_34), async () => {
            Then("I should see level 1 unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            Then("I should see I have 200 YuCoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            When("I tap level 1", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                Then("I should see the reward value 10x higher than normal (600)", then.idVisible(CHALLENGE_REWARD("600")))
                When("I complete a short stroll challenge", when.completeShortStroll(200, 40000), async () => {
                    Then("I should see the well done screen", then.textVisible("well done!"))
                    Then("I should see +600 reward", then.idVisible(CHALLENGE_REWARD(600)))
                    When("I tap collect", when.tapText("collect"), async () => {
                        When("I tap done", when.tapText("Done"), async () => {
                            Then("I should see I have 800 YuCoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(800)))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can complete a challenge with a user without a surge and get the standard reward", scenario.start, async () => {
        Given("I login as a user with a surge", given.logInAndGoToTab("quests"), async () => {
            Then("I should see level 1 unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            Then("I should see I have 200 YuCoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            When("I tap level 1", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                Then("I should see the reward value is normal (60)", then.idVisible(CHALLENGE_REWARD("60")))
                When("I complete a short stroll challenge", when.completeShortStroll(200, 40000), async () => {
                    Then("I should see the well done screen", then.textVisible("well done!"))
                    Then("I should see +60 reward", then.idVisible(CHALLENGE_REWARD(60)))
                    When("I tap collect", when.tapText("collect"), async () => {
                        When("I tap done", when.tapText("Done"), async () => {
                            Then("I should see I have 260 YuCoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(260)))
                        })
                    })
                })
            })
        })
    })
})