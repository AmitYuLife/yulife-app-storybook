import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@bdd";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_7, AUTH_7, CUSTOMER_3, AUTH_3, CUSTOMER_12, AUTH_12, CUSTOMER_13, AUTH_13 } from "_utils/data/stubs";
import { QUESTS_SCREEN, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";

Feature("As a user I can complete challenges across multiple worlds", async () => {

    Scenario("I can complete a meditation challenge in the first world", scenario.start, async () => {
        Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_7, AUTH_7), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(640)))
            When("I send the mindfulness data", when.sendMindfulnessData(), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(5, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(60000), async () => {
                        Then("I should see the times up modal", then.textVisible("time’s up!"))
                        When("I tap see result", when.tapText("see result"), async () => {
                            Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(1, 5))
                            When("I tap collect", when.tapText("collect"), async () => {
                                Then("I should see the streak completed screen", then.textVisible("Streak completed"))
                                Then("I should see the number of points I just earned", then.textVisible("collect 2500 yucoin"))
                                When("I tap the collect 2500 yucoin CTA", when.tapText("collect 2500 yucoin"), async () => {
                                    Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                                    Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3170)))
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can finish a walking challenge in the second world", scenario.start, async () => {
        Given("I login as a user with the second world unlocked", given.logInAndGoToTab("quests", CUSTOMER_3, AUTH_3), async () => {
            When("I start a walking challenge", when.startChallengeFromQuests(10, "short stroll"), async () => {
                Then("I should be on the short stroll challenge", then.textVisible("0 steps"))
                When("I walk over 200 steps", when.sendSteps(250, 30000), async () => {
                    Then("I should see the times up modal", then.textVisible("time’s up!"))
                    When("I tap see result", when.tapText("see result"), async () => {
                        Then("I should be on the challenge complete screen", then.onChallengeComplete(250, 10))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                            When("I go to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(250, 20))
                                Then("I should see my updated coin amount in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17720)))
                            })
                        })
                    })
                })
            })
        })
    })



    Scenario("I can complete a meditation challenge in the second world", scenario.start, async () => {
        Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_3, AUTH_3), async () => {
            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            When("I send the mindfulness data", when.sendMindfulnessData(), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(10, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(60000), async () => {
                        Then("I should see the times up modal", then.textVisible("time’s up!"))
                        When("I tap see result", when.tapText("see result"), async () => {
                            Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(1, 10))
                            When("I tap collect", when.tapText("collect"), async () => {
                                Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17720)))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can finish a walking chalenge in the third world", scenario.start, async () => {
        Given("I login as a user with the second world unlocked", given.logInAndGoToTab("quests", CUSTOMER_12, AUTH_12), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27700)))
            When("I start a walking challenge", when.startChallengeFromQuests(16, "short stroll"), async () => {
                Then("I should be on the short stroll challenge", then.textVisible("0 steps"))
                When("I walk over 500 steps", when.sendSteps(550, 30000), async () => {
                    Then("I should see the times up modal", then.textVisible("time’s up!"))
                    When("I tap see result", when.tapText("see result"), async () => {
                        Then("I should be on the challenge complete screen", then.onChallengeComplete(550, 16))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                            When("I go to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(550, 10))
                                Then("I should see my updated coin amount in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27710)))
                            })
                        })
                    })
                })
            })
        })
    })


    Scenario("I can complete a meditation challenge in the third world", scenario.start, async () => {
        Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_12, AUTH_12), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27700)))
            When("I send the mindfulness data", when.sendMindfulnessData(300), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(16, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(60000), async () => {
                        Then("I should see the times up modal", then.textVisible("time’s up!"))
                        When("I tap see result", when.tapText("see result"), async () => {
                            Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(5, 16))
                            When("I tap collect", when.tapText("collect"), async () => {
                                Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27740)))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can finish a walking chalenge in the fourth world", scenario.start, async () => {
        Given("I login as a user with the second world unlocked", given.logInAndGoToTab("quests", CUSTOMER_13, AUTH_13), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50200)))
            When("I start a walking challenge", when.startChallengeFromQuests(22, "short stroll"), async () => {
                Then("I should be on the short stroll challenge", then.textVisible("0 steps"))
                When("I walk over 500 steps", when.sendSteps(550, 30000), async () => {
                    Then("I should see the times up modal", then.textVisible("time’s up!"))
                    When("I tap see result", when.tapText("see result"), async () => {
                        Then("I should be on the challenge complete screen", then.onChallengeComplete(550, 22))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                            When("I go to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(550, 10))
                                Then("I should see my updated coin amount in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50210)))
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can complete a meditation challenge in the fourth world", scenario.start, async () => {
        Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_13, AUTH_13), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50200)))
            When("I send the mindfulness data", when.sendMindfulnessData(300), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(22, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(60000), async () => {
                        Then("I should see the times up modal", then.textVisible("time’s up!"))
                        When("I tap see result", when.tapText("see result"), async () => {
                            Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(5, 22))
                            When("I tap collect", when.tapText("collect"), async () => {
                                Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50220)))
                            })
                        })
                    })
                })
            })
        })
    })



})
