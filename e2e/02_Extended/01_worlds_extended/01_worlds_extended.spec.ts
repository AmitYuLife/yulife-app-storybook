import { Feature, Scenario, Given, When, Then } from "@bdd";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_22, AUTH_22, CUSTOMER_23, AUTH_23 } from "_utils/data/stubs";
import { LEVEL_CHALLENGE_BUTTON, CHALLENGE_TILE, CHALLENGE_PROGRESS_BAR, QUESTS_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";


Feature("As a user I can complete challenges across multiple worlds", async () => {

    Scenario("I can transition from the first world to the second one", scenario.start, () => {
        Given("I login as a user on level 49", given.logInAndGoToTab("quests", CUSTOMER_22, AUTH_22), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 49 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(49)))
            When("I tap the bubble", when.tapID(LEVEL_CHALLENGE_BUTTON(49)), async () => {
                Then("I should see a screen telling me to take a challenge to unlock a chest", then.textVisible("take a challenge to unlock the chest"))
                When("I tap 'lets do it'", when.tapText("let's do it"), async () => {
                    Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
                    When("I complete this challenge", when.startChallenge("short stroll"), async () => {
                        Then("I should be on the challenge screen", then.idVisible(CHALLENGE_PROGRESS_BAR))
                        When("I walk 500 steps", when.sendSteps(500, 35000), async () => {
                            Then("I should see the times up modal", then.textVisible("time’s up!"))
                            When("I tap see result", when.tapText("see result"), async () => {
                                Then("I should see the well done screen", then.onChallengeComplete(500, 49))
                                When("I tap collect on the well done screen", when.tapText("collect"), async () => {
                                    Then("I should see the chest unlocked screen telling me I get 200 yucoin", then.textVisible("you get 200 yucoin"))
                                    When("I tap collect", when.tapText("collect"), async () => {
                                        Then("I should see the level 50 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(50)))
                                        When("I tap this level 50 button", when.tapID(LEVEL_CHALLENGE_BUTTON(50)), async () => {
                                            Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
                                            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17910)))
                                            Then("I should see the level 51 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
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
                        Then("I should have unlocked the third world", then.idVisible(QUESTS_SCREEN(2), 5000))
                        Then("I should see the level 99 challenge button on the second world", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
                        When("I complete a level 99 meditation challenge", when.completeNewWorldMeditation(99), async () => {
                            Then("I should be on the third world", then.idVisible(QUESTS_SCREEN(2)))
                            Then("I should see the level 101 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(101)))
                            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17930)))
                        })
                    })
                })
            })
        })
    })

    Scenario("I can transition from the second to third world without tapping the level 100 challenge button", scenario.start, async () => {
        Given("I login as a user on level 99", given.logInAndGoToTab("quests", CUSTOMER_23, AUTH_23), async () => {
            Then("I should my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
            Then("I should see level 99", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
            When("I complete the level 99 challenge", when.completeNewWorldShortStroll(99), async () => {
                Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
                Then("I should still see level 99", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
                When("I complete a level 99 meditation challenge", when.completeNewWorldMeditation(99), async () => {
                    Then("I should see the level 100 unity challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(100)))
                    When("I tap the level 100 unity challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(100)), async () => {
                        Then("I should be on the third world", then.idVisible(QUESTS_SCREEN(2)))
                        Then("I should see the level 101 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(101)))
                        Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17930)))
                    })
                })
            })
        })
    })

})




