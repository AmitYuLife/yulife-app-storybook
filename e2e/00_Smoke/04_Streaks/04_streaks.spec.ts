import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_5, AUTH_5, CUSTOMER_6, AUTH_6, CUSTOMER_7, AUTH_7, CUSTOMER_8, AUTH_8, CUSTOMER_15, AUTH_15 } from "@data";
import { QUESTS_SCREEN, LEVEL_CHALLENGE_BUTTON, CHALLENGE_SET, CHALLENGE_TILE, GENERIC_SCREEN_CTA, GENERIC_SCREEN_HEADING, CHALLENGE_PROGRESS_BAR, NAV_BAR, DAILY_STEPS_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER, CHALLENGE_UNAVAILABLE } from "@ids";
import { idVisible } from "@utils";


Feature("As a user I can use the streaks functionality", async () => {
    // Challenges fail even though 200 steps are made
    Scenario("I can start a new streak and complete a challenge", scenario.start, async () => {
        Given("I login", given.logInWithStreakScreen(CUSTOMER_5, AUTH_5), async () => {
            Then("I should see the streak screen", then.onStartStreak)
            When("I tap take a challenge", when.tapText("Take a challenge"), async () => {
                Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                When("I tap the level 1 button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                    Then("I should be on the level one quest screen", then.idVisible(CHALLENGE_SET))
                    Then("I should see an unlocked short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                    When("I tap the unlocked short stroll challenge", when.tapID(CHALLENGE_TILE("short stroll")), async () => {
                        Then("I should see a screen with a take challenge option", then.textVisible("short stroll / 0 min"))
                        Then("I should see the number of steps I need to complete the challenge", then.textVisible("100 steps"))
                        When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
                            Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 5000))
                            When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
                                Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                                When("I walk over 100 steps", when.sendSteps(200, 38000), async () => {
                                    Then("I should see the well done screen", then.onChallengeComplete(200, 1))
                                    When("I tap collect", when.tapText("collect"), async () => {
                                        Then("..I should see the completed streak day 1 modal", then.completedTodayStreakCopyVisible(1))
                                        When("I tap 'done'", when.tapText("Done"), async () => {
                                            Then("I should be on the quest screen", then.idVisible(QUESTS_SCREEN(0)))
                                            Then("I should see the level 2 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(2)))
                                            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                                When("I continue the intro", when.finishIntro, async () => {
                                                    Then("I should see 1/5 streaks", then.textVisible("1/5"))
                                                    Then("I should see the amount of yucoin I earned today", then.textVisible("60 yucoin today"))
                                                    Then("I should see the number of steps I walked today", then.textVisible("108 steps"))
                                                    When("I tap '1/5", when.tapText("1/5"), async () => {
                                                        Then("I should see the completed modal again", then.completedTodayStreakCopyVisible(1))
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
            })
        })
    })

    Scenario("I can continue a streak", scenario.start, async () => {
        Given("I login as a user with a streak", given.loginAsUser(CUSTOMER_6, AUTH_6), async () => {
            Then("I should be on the yucoin tab", then.idVisible(DAILY_STEPS_SCREEN))
            Then("I should see my 1/5 streak", then.textVisible("1/5"))
            When("I tap 1/5", when.tapText("1/5"), async () => {
                Then("I should see the streak screen", then.headingStartStreakCopyVisible(2))
                When("I tap take a challenge", when.tapText("Take a challenge"), async () => {
                    Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                    Then("I should see the second challenge set is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(2)))
                    When("I tap the level 2 button", when.tapID(LEVEL_CHALLENGE_BUTTON(2)), async () => {
                        Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                        When("I start a challenge", when.startChallenge("short stroll"), async () => {
                            Then("The challenge should start", idVisible(CHALLENGE_PROGRESS_BAR))
                            When("I walk over 100 steps", when.sendSteps(200, 35000), async () => {
                                Then("I should see the well done screen", then.onChallengeComplete(200, 2))
                                When("I tap collect", when.tapText("collect"), async () => {
                                    Then("I should see the completed streak day 2 modal", then.completedTodayStreakCopyVisible(2))
                                    When("I tap 'done'", when.tapText("Done"), async () => {
                                        Then("I should be on the quest screen", then.idVisible(QUESTS_SCREEN(0)))
                                        Then("I should see the level 3 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(3)))
                                        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                            Then("I should see 2/5 streaks", then.textVisible("2/5"))
                                            Then("I should see the amount of yucoin I earned today", then.textVisible("60 yucoin today"))
                                            Then("I should see the number of steps I walked today", then.textVisible("200 steps"))
                                            When("I tap '2/5", when.tapText("2/5"), async () => {
                                                Then("I should see the completed modal again", then.completedTodayStreakCopyVisible(2))
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
    })

    Scenario("I can get a reward after I complete a streak", scenario.start, async () => {
        Given("I login as a user with 4/5 streaks", given.loginAsUser(CUSTOMER_7, AUTH_7), async () => {
            Then("I should see 4/5 on the yucoin tab", then.textVisible("4/5"))
            When("I go to the quests tab", when.tapID(NAV_BAR("quests")), async () => {
                Then("I should see the fifth level is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(5)))
                When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(5)), async () => {
                    Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                    Then("I should see the long walk challenge", then.idVisible(CHALLENGE_TILE("long walk")))
                    Then("I should see the meditation challenge", then.idVisible(CHALLENGE_TILE("meditation")))
                    When("I start the short stroll challenge", when.startChallenge("short stroll"), async () => {
                        Then("The challenge should start", idVisible(CHALLENGE_PROGRESS_BAR))
                        When("I walk over 100 steps", when.sendSteps(200, 35000), async () => {
                            Then("I should see the well done screen", then.onChallengeComplete(200, 5))
                            When("I tap collect", when.tapText("collect"), async () => {
                                Then("I should see my reward of 2500 coins", then.textVisible("Collect 2500 YuCoin"))
                                When("I tap collect 2500 yucoin", when.tapText("Collect 2500 YuCoin"), async () => {
                                    Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                                    When("I tap the level 6 challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(6)), async () => {
                                        Then("I should see a challenge unavailable screen", then.idVisible(CHALLENGE_UNAVAILABLE))
                                        When("I tap 'got it'", when.tapText("got it"), async () => {
                                            Then("I should be back on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                                            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                                Then("I should see the coins I earned today", then.textVisible("2,510 yucoin today"))
                                                Then("I should see the steps I completed today", then.textVisible("200 steps"))
                                                Then("I should see my total yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3150)))
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
    })

    Scenario("I can break a streak", scenario.start, async () => {
        Given("I had a 2/5 streak yesterday, and didn't complete a challenge", given.loginAsUser(CUSTOMER_8, AUTH_8), () => {
            Then("I should see 0/5 on the daily steps screen", then.textVisible("0/5"))
            When("I tap this I should see the start a streak screen", when.tapText("0/5"), async () => {
                Then("I should see the streak screen", then.headingStartStreakCopyVisible(1))
                When("I tap take a challenge", when.tapText("Take a challenge"), async () => {
                    Then("I should see the third level is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(3)))
                    When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(3)), async () => {
                        Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                        When("I start the short stroll challenge", when.startChallenge("short stroll"), async () => {
                            Then("The challenge should start", idVisible(CHALLENGE_PROGRESS_BAR))
                            When("I walk over 100 steps", when.sendSteps(200, 35000), async () => {
                                Then("I should see the well done screen", then.onChallengeComplete(200, 3))
                                When("I tap collect", when.tapText("collect"), async () => {
                                    Then("I should see the complete streak day 1 screen", then.completedTodayStreakCopyVisible(1))
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("Failing a challenge should not affect my streak, and I can still complete a challenge", scenario.start, async () => {
        Given("I login as a user with a streak", given.loginAsUser(CUSTOMER_7, AUTH_7), async () => {
            Then("I should see 4/5 on the yucoin tab", then.textVisible("4/5"))
            When("I go to the quests tab", when.tapID(NAV_BAR("quests")), async () => {
                Then("I should see the fifth level is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(5)))
                When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(5)), async () => {
                    Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                    When("I start the short stroll challenge", when.startChallenge("short stroll"), async () => {
                        Then("The challenge should start", idVisible(CHALLENGE_PROGRESS_BAR))
                        When("I wait for the challenge to finish", when.wait(32000), async () => {
                            Then("I should see the challenge failed screen", then.textVisible("you didn’t make it", 5000))
                            When("I tap back to quests", when.tapText("back to quests"), async () => {
                                Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                                When("I go back to the yuicoin screen", when.tapID(NAV_BAR("yucoin")), async () => {
                                    Then("I should still see 4/5 streaks", then.textVisible("4/5"))
                                    When("I tap 4/5", when.tapText("4/5"), async () => {
                                        Then("I should see the start streak screen", then.headingStartStreakCopyVisible(5))
                                        When("I tap take a challenge", when.tapText("Take a challenge"), async () => {
                                            Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                                            When("I start a challenge", when.startChallengeFromQuests(5, "short stroll"), async () => {
                                                When("I complete the challenge", when.sendSteps(300, 38000), async () => {
                                                    Then("I should see the challenge complete screen", then.onChallengeComplete(300, 5))
                                                    When("I tap collect", when.tapText("collect"), async () => {
                                                        Then("I should see my streak is completed", then.completedTodayStreakCopyVisible(5))
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
            })
        })
    })

    Scenario("I can redeem a challenge the next day", scenario.start, async () => {
        Given("I login as a user who activated a challenge yesterday", given.loginAsUser(CUSTOMER_15, AUTH_15), async () => {
            Then("I should see my updated coin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(580)))
            When("I tap quests", when.tapID(NAV_BAR("quests")), async () => {
                Then("I should see the well done screen", then.onChallengeComplete(450, 4))
                When("I tap collect", when.tapText("collect"), async () => {
                    Then("I should see my updated yucoin balance", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(580)))
                })
            })
        })
    })

})
