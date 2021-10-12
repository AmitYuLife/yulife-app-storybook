import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { QUESTS_SCREEN, LEVEL_CHALLENGE_BUTTON, CHALLENGE_TILE, GENERIC_SCREEN_HEADING, CHALLENGE_PROGRESS_BAR, GENERIC_SCREEN_CTA, BUTTON_CLOSE_CHALLENGE, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";
import { CUSTOMER_9, AUTH_9 } from "@data";

Feature("As a user I can take a challenge", async () => {
    
    Scenario("I can take a challenge and cancel it", scenario.start, async () => {
        Given("I login and go to the quests tab", given.logInAndGoToTab("quests"), async () => {
            Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
            Then("I should see the level 1 circle", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                When("I tap this challenge", when.tapID(CHALLENGE_TILE("short stroll")), async () => {
                    Then("I should see a screen with a take challenge option", then.textVisible("short stroll / 0 min"))
                    When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
                        Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 5000))
                        When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
                            Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                            Then("I should see the cancel button", then.idVisible(BUTTON_CLOSE_CHALLENGE))
                            When("I tap this button", when.tapID(BUTTON_CLOSE_CHALLENGE), async () => {
                                Then("I should see the cancel challenge confirmation screen", then.textVisible("Call it quits?"))
                                When("I tap exit", when.tapText("Exit challenge"), async () => {
                                    Then("I should be back on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
                                    When("I go back to the yuicoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                        Then("I should see the number of points I started with", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                                    })
                                })
                            })

                        })
                    })
                })
            })
        })
    })

    Scenario("I can fail a challenge", scenario.start, async () => {
        Given("I login and go to the quests tab", given.logInAndGoToTab("quests"), async () => {
            Then("I should be on the quests screen", then.idVisible(QUESTS_SCREEN(0)))
            Then("I should see the level 1 circle", then.idVisible(LEVEL_CHALLENGE_BUTTON(1)))
            When("I tap this button", when.tapID(LEVEL_CHALLENGE_BUTTON(1)), async () => {
                Then("I should see the shor t stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                When("I tap this challenge", when.tapID(CHALLENGE_TILE("short stroll")), async () => {
                    Then("I should see a screen with a take challenge option", then.textVisible("short stroll / 0 min"))
                    When("I tap 'take challenge'", when.tapText("Take challenge"), async () => {
                        Then("I should see a screen asking me to turn on notifications", then.idVisible(GENERIC_SCREEN_HEADING("don't miss out"), 5000))
                        When("I dismiss this screen", when.tapID(GENERIC_SCREEN_CTA("maybe later")), async () => {
                            Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                            When("I wait for the challenge to end", when.wait(35000), async () => {
                                Then("I should see the didn't make it screen", then.textVisible("you didn’t make it", 5000))
                                Then("I should see the sub copy", then.textVisible("so close! why not try again?"))
                                When("I tap back to quests", when.tapText("back to quests"), async () => {
                                    Then("I should be back on quests", then.idVisible(QUESTS_SCREEN(0)))
                                    When("I go back to the yuicoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                        Then("I should see the number of points I started with", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)))
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    Scenario("I can complete a chest challenge", scenario.start, async () => {
        Given("I am on the quest tab as a user with a chest challenge", given.logInAndGoToTab("quests", CUSTOMER_9, AUTH_9), async () => {
            Then("I should see my coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(760)))
            Then("I should see level 7 unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(7)))
            When("I tap level 7", when.tapID(LEVEL_CHALLENGE_BUTTON(7)), async () => {
                Then("I should see a screen telling me to take a challenge to unlock a chest", then.textVisible("take a challenge to unlock the chest"))
                When("I tap 'lets do it'", when.tapText("let's do it"), async () => {
                    Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                    Then("I should see the brisk walk challenge", then.idVisible(CHALLENGE_TILE("brisk walk")))
                    Then("I should see the long walk challenge", then.idVisible(CHALLENGE_TILE("long walk")))
                    Then("I should see the meditation challenge", then.idVisible(CHALLENGE_TILE("meditation")))
                    When("I start the long walk challenge", when.startChallenge("long walk"), async () => {
                        Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                        When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
                            Then("I should see the well done screen", then.onChallengeComplete(3050, 7))
                            When("I tap collect on the well done screen", when.tapText("collect", 5000), async () => {
                                Then("I should see the first day streak screen", then.textVisible("First day done!", 10000))
                                    When("I dismiss the streak screen", when.tapText("Done", 5000), async()=>{
                                        Then("I should see the chest unlocked screen telling me I get 200 yucoin", then.textVisible("you get 200 yucoin"))
                                        When("I dismiss the chest unlock screen", when.tapText("collect", 5000), async () => {
                                            Then("I should be on the quest screen", then.idVisible(LEVEL_CHALLENGE_BUTTON(8), 3000))
                                            When("I back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                                                Then("I should see my updated coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(1030)))
                                                Then("I should see the number of steps I just completed", then.textVisible("3,050 steps"))
                                                Then("I should see the number of coins I've earned today (270)", then.textVisible("270 yucoin today"))
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

