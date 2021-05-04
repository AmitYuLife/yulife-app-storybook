import { Feature, Scenario, Given, When, Then, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_7, AUTH_7, CUSTOMER_3, AUTH_3, CUSTOMER_12, AUTH_12, CUSTOMER_13, AUTH_13 } from "@data";
import { QUESTS_SCREEN, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER, LEVEL_CHALLENGE_BUTTON, CHALLENGE_TILE } from "@ids";

Feature("As a user I can complete challenges across multiple worlds", async () => {

    Scenario("I can complete a meditation challenge in the first world", scenario.start, async () => {
        Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_7, AUTH_7), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(640)))
            When("I send the mindfulness data", when.sendMindfulnessData(), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(5, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(63000), async () => {
                        Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(1, 5))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should see the streak completed screen", then.completedTodayStreakCopyVisible(5))
                            Then("I should see the number of points I just earned", then.textVisible("Collect 2500 YuCoin"))
                            When("I tap the collect 2500 yucoin CTA", when.tapText("Collect 2500 YuCoin"), async () => {
                                Then("I should be on quests", then.idVisible(QUESTS_SCREEN(0)))
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3170)))
                                Then("I should on the quests tab", then.idVisible(QUESTS_SCREEN(0)))
                                When("I tap a past level", when.tapID(LEVEL_CHALLENGE_BUTTON(5)), async () => {
                                    Then("I should see the challenge I just completed with the correct stars", then.onChallengeHistory("meditation", 5, 30, 3))
                                    When("I tap full history", when.tapText("full history"), async () => {
                                        Then("I should be on the activity history", then.textVisible("activity history"))
                                    })
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
            When("I start a walking challenge", when.startChallengeFromQuests(90, "short stroll"), async () => {
                Then("I should be on the short stroll challenge", then.textVisible("0 steps"))
                When("I walk 450 steps", when.sendSteps(450, 33000), async () => {
                    Then("I should be on the challenge complete screen", then.onChallengeComplete(450, 90))
                    When("I tap collect", when.tapText("collect"), async () => {
                        Then("I should see the 'Completed streak day 1' screen", then.completedTodayStreakCopyVisible(1))
                        When("I tap done", when.tapText("Done"), async () => {
                            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(1)))
                            When("I go to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(450, 20))
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
            When("I send the mindfulness data", when.sendMindfulnessData(180), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(90, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(63000), async () => {
                        Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(3, 90))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should see the 'Completed streak day 1' screen", then.completedTodayStreakCopyVisible(1))
                            When("I tap done", when.tapText("Done"), async () => {
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17740)))
                                Then("I should on the quests tab", then.idVisible(QUESTS_SCREEN(1)))
                                When("I tap a past level", when.tapID(LEVEL_CHALLENGE_BUTTON(90)), async () => {
                                    Then("I should see other challenges to take", then.multipleIDVisible([CHALLENGE_TILE("short stroll"), CHALLENGE_TILE("brisk walk"), CHALLENGE_TILE("long walk"), CHALLENGE_TILE("meditation")]))
                                })
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
            Then("I should be on the third world quests screen", then.idVisible(QUESTS_SCREEN(2)))
            When("I start a walking challenge", when.startChallengeFromQuests(115, "short stroll"), async () => {
                Then("I should be on the short stroll challenge", then.textVisible("0 steps"))
                When("I walk over 500 steps", when.sendSteps(600, 33000), async () => {
                    Then("I should be on the challenge complete screen", then.onChallengeComplete(600, 115))
                    When("I tap collect", when.tapText("collect"), async () => {
                        Then("I should be on the third world quests screen", then.idVisible(QUESTS_SCREEN(2)))
                        When("I go to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                            Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(600, 10))
                            Then("I should see my updated coin amount in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27710)))
                        })
                    })
                })
            })
        })
    })


    Scenario("I can complete a meditation challenge in the third world", scenario.start, async () => {
        Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_12, AUTH_12), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27700)))
            Then("I should be on the third world quests screen", then.idVisible(QUESTS_SCREEN(2)))
            When("I send the mindfulness data", when.sendMindfulnessData(300), async () => {
                When("I start a meditation challenge", when.startChallengeFromQuests(115, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(63000), async () => {
                        Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(5, 115))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should be on the third world quests screen", then.idVisible(QUESTS_SCREEN(2)))
                            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27730)))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can finish a walking chalenge in the fourth world", scenario.start, async () => {
        Given("I login as a user with the second world unlocked", given.logInAndGoToTab("quests", CUSTOMER_13, AUTH_13), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50200)))
            When("I start a walking challenge", when.startChallengeFromQuests(175, "short stroll"), async () => {
                Then("I should be on the short stroll challenge", then.textVisible("0 steps"))
                When("I walk over 500 steps", when.sendSteps(550, 33000), async () => {
                    Then("I should be on the challenge complete screen", then.onChallengeComplete(550, 175))
                    When("I tap collect", when.tapText("collect"), async () => {
                        Then("I should be on quests", then.idVisible(QUESTS_SCREEN(3)))
                        When("I go to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                            Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(550, 10))
                            Then("I should see my updated coin amount in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50210)))
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
                When("I start a meditation challenge", when.startChallengeFromQuests(175, "meditation"), async () => {
                    When("I wait to complete this challenge", when.wait(63000), async () => {
                        Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(5, 175))
                        When("I tap collect", when.tapText("collect"), async () => {
                            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(3)))
                            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(50230)))
                        })
                    })
                })
            })
        })
    })



})
