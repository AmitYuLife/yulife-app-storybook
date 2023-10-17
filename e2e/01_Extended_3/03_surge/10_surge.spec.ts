import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "@data"
import * as ids from "@ids"

Feature("Surges work as intended", async () => {
    Scenario("I can complete a challenge with a user that has a surge and my reward is x10", scenario.start, async () => {
        Given("I login as a user with a surge", given.logInAndGoToTab("quests", data.CUSTOMER_34,data.AUTH_34), async () => {
            Then("I should see level 1 unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)))
            Then("I should see I have 200 YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            When("I tap level 1", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")))
                Then("I should see the reward value 10x higher than normal (600)", then.idVisibleAtIndex(ids.CHALLENGE_REWARD("600"),0))
                When("I complete a short stroll challenge", when.completeShortStroll(300, 40000), async () => {
                    Then("I should see the well done screen", then.textVisible("Well done!"))
                    Then("I should see +600 reward", then.idVisible(ids.CHALLENGE_REWARD(100)))
                    When("I tap collect", when.tapText("Collect"), async () => {
                        When("I tap done", when.tapText("Done"), async () => {
                            Then("I should see I have 800 YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(300)))
                        })
                    })
                })
            })
        })
    })

    Scenario("I log in and can see the daily surge icon ", scenario.start, async () => {
        Given("I login as a user with a surge", given.logInAndGoToTab("yucoin", data.CUSTOMER_34, data.AUTH_34), async () => {
            Then("I should see the surge icon on the today's screen proving the surge is active", then.iCanSeeSurgeIcon("10x", " 1d"))
            When("I tap the icon", when.tapID(ids.SURGE_ICON), async () => {
                Then("I should see the surge modal appear", then.canSeeSurgeModal)
                When("I tap the close button", when.tapText("Close"), async () => {
                    Then("I should be back on the yucoin tab", then.idVisible(ids.DAILY_STEPS_SCREEN))
                })
            })
        })
    })

    Scenario("I can complete a challenge with a user without a surge and get the standard reward", scenario.start, async () => {
        Given("I login as a user with a surge", given.logInAndGoToTab("quests"), async () => {
            Then("I should see level 1 unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)))
            Then("I should see I have 200 YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)))
            When("I tap level 1", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")))
                Then("I should see the reward value is normal (20)", then.idVisibleAtIndex(ids.CHALLENGE_REWARD("20"),0))
                When("I complete a short stroll challenge", when.completeShortStroll(300, 40000), async () => {
                    Then("I should see the well done screen", then.textVisible("Well done!"))
                    Then("I should see +20 reward", then.idVisible(ids.CHALLENGE_REWARD(20)))
                    When("I tap collect", when.tapText("Collect"), async () => {
                        When("I tap done", when.tapText("Done"), async () => {
                            Then("I should see I have 320 YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(220)))
                        })
                    })
                })
            })
        })
    })
})