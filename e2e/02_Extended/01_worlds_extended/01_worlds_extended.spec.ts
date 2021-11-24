import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_22, AUTH_22, CUSTOMER_23, AUTH_23, CUSTOMER_24, AUTH_24 } from "@data";
import { LEVEL_CHALLENGE_BUTTON, NAV_BAR, QUESTS_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER, YUCOIN, YUNIVERSAL_CONTNIUE_BUTTON, ACTIVITY_FEED } from "@ids";


Feature("As a user I can complete challenges across multiple worlds", async () => {
    Scenario("I can transition from the first world to the second one", scenario.start, () => {
        Given("I login as a user on level 49", given.logInAndGoToTab("quests", CUSTOMER_22, AUTH_22), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 49 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(49)))
            When("I complete a walking challenge", when.completeNewWorldShortStroll(49), async () => {
                Then("I should see the level 50 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(50)))
                When("I tap this level 50 button", when.tapID(LEVEL_CHALLENGE_BUTTON(50)), async () => {
                    Then("The yunity screens should be correct", then.yunityCorrect(1, "Forest"))
                        When("I tap 'On to the next world!'", when.tapText("On to the next world"), async()=>{
                            Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
                            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17910)))
                            Then("I should see the level 51 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
                            When("I go back to the daily steps screen", when.tapID(NAV_BAR("yucoin")), async()=>{
                                When("I tap the yucoin image", when.tapID(YUCOIN), async()=>{
                                    When("I tap on I for activity feed info", when.tapID(ACTIVITY_FEED), async () => {
                                        Then("I should see my x2 updated YuCoin earn rate", then.textVisible("20 YuCoin for 2000 steps"))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }) 

    Scenario("I can transition from the second to third world, when I tap the level 100 challenge button", scenario.start, async () => {
        Given("I login as a user on level 99", given.logInAndGoToTab("quests", CUSTOMER_23, AUTH_23), async () => {
            Then("I should my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
            Then("I should see level 99", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
            When("I complete the level 99 challenge", when.completeNewWorldShortStroll(99), async () => {
                Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
                Then("I should still see level 99", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
                When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(99), "down", "slow"), async () => {
                    Then("I should see the level 100 unity challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(100)))
                    When("I tap the level 100 unity challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(100)), async () => {
                        Then("The yunity screens should be correct", then.yunityCorrect(2, "Ocean"))
                        When("I tap 'On to the next world!'", when.tapText("On to the next world"), async () => {
                            Then("I should have unlocked the third world", then.idVisible(QUESTS_SCREEN(2), 5000))
                            Then("I should see the level 99 challenge button on the second world", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
                            When("I complete a level 99 meditation challenge", when.completeNewWorldMeditation(99), async () => {
                                Then("I should be on the third world", then.idVisible(QUESTS_SCREEN(2)))
                                Then("I should see the level 101 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(101)))
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17950)))
                                When("I scroll to the second world", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(101), "up", "slow"), async () => {
                                    When("I scroll to the second world", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(100), "up", "fast"), async () => {
                                    Then("I should see the level 99 challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
                                        When("I tap the level 99 challenge button", when.tapID(LEVEL_CHALLENGE_BUTTON(99)), async () => {
                                            Then("I should see the short stroll challenge I just completed with the correct stars", then.onChallengeHistory("short stroll", 99, 10, 3))
                                            Then("I should see the meditation challenge I just completed with the correct stars", then.onChallengeHistory("meditation", 99, 40, 1))
                                            Then("I should see the number of minutes for meditation", then.textVisible("10 mins"))
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

        Scenario("When I get to level 200 my earn rate should be doubled", scenario.start, async()=>{
            Given("I login as a user on level 199", given.logInAndGoToTab("quests", CUSTOMER_24, AUTH_24), async () => {
                Then("I should be on the fourth world", then.idVisible(QUESTS_SCREEN(3)))
                Then("I should see level 199", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
                When("I complete the level 199 challenge", when.completeNewWorldShortStroll(199), async () => {
                    Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(3)))
                    Then("I should still see level 199", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
                    When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(199), "down", "slow"), async () => {
                        Then("I should see the level 200 unity challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(200)))
                        When("I tap the level 200 unity challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(200)), async () => {
                            Then("The yunity screens should be correct", then.yunityCorrect(4, "Mountain1"))
                            When("I tap 'Continue'", when.tapID(YUNIVERSAL_CONTNIUE_BUTTON), async () => {
                                Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(0)))
                                When("I go back to the daily steps screen", when.tapID(NAV_BAR("yucoin")), async () => {
                                    When("I tap the yucoin image", when.tapID(YUCOIN), async () => {
                                        When("I tap on I for activity feed info", when.tapID(ACTIVITY_FEED), async () => {
                                            Then("I should see my x2 updated YuCoin earn rate for 2000 steps", then.textVisible("20 YuCoin for 2000 steps"))
                                            Then("I should see my x2 updated YuCoin earn rate for 1.6 km cycling", then.textVisible("20 YuCoin for 1.6 km cycling"))
                                            Then("I should see my x2 updated YuCoin earn rate for 5 mindful min", then.textVisible("20 YuCoin for 5 mindful min"))
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




