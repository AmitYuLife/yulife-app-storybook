import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_22, AUTH_22, CUSTOMER_23, AUTH_23, CUSTOMER_24, AUTH_24, CUSTOMER_39, AUTH_39, CUSTOMER_41, AUTH_41, CUSTOMER_60, AUTH_60, CUSTOMER_61, AUTH_61, CUSTOMER_63, AUTH_63, CUSTOMER_64, AUTH_64 } from "@data";
import { LEVEL_CHALLENGE_BUTTON, NAV_BAR, QUESTS_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER, YUCOIN, QUESTS_SCREEN_YUNIVERSAL, CHALLENGE_TILE, STEPS_COUNT, DAILY_STEPS_SCREEN, ACTIVITY_FEED, YUCOIN_POWER } from "@ids";

Feature("As a user I can complete challenges across multiple worlds", async () => {
    Scenario("I can't transition from the first world (forest) to the second world (ocean) on the same day", scenario.start, () => {
        Given("I login as a user on level 49", given.logInAndGoToTab("quests", CUSTOMER_60, AUTH_60), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 49 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(49)))
        })
        When("I complete a walking challenge", when.completeNewWorldShortStroll(49), async () => {
            Then("I should see the level 50 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(50)))
        })
        When("I tap this level 50 button", when.tapID(LEVEL_CHALLENGE_BUTTON(50)), async () => {
            Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
        })
        When("I tap got it", when.tapText("Got it"), async () => {
            Then("I should see the level 50 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(50)))
        })
    }) 

    Scenario("When I have unlocked level 50 and level 51, I can do two challenges for level 51", scenario.start, () => {
        Given("I login as a user on level 51", given.logInAndGoToTab("quests", CUSTOMER_61, AUTH_61), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 51 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
        })
        When("I scroll down", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(51), "up", "slow"), async () => {
            Then("I should see the level 50 chest unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(50)))
        })
        When("I tap the level 50 chest", when.tapID(LEVEL_CHALLENGE_BUTTON(50)), async () => {
            Then("I should see the on screen message I have achieved Yunity Forest", then.yunityCorrect("Forest"))
        })
        When("I wait", when.wait(3000), async () => {
            Then("I should see the level 51 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(51), 2000))
        })
        When("I complete a walking challenge at level 51", when.completeChallenge(51, "short stroll"), async () => {
            Then("I should see the level 51 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
        })
        When("I tap this level 52 button", when.tapID(LEVEL_CHALLENGE_BUTTON(52)), async () => {
            Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
        })
        When("I tap got it", when.tapText("Got it"), async () => {
            Then("I should see the level 51 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
        })
        When("I complete a second walking challenge at level 51", when.completeSecondChallenge(51, "short stroll"), async () => {
            Then("I should see the level 51 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
        })
        When("I tap this level 52 button", when.tapID(LEVEL_CHALLENGE_BUTTON(52)), async () => {
            Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
        })
    }) 

    Scenario("I can't transition from the level 199 to the yuniverse level 200 on the same day", scenario.start, () => {
        Given("I login as a user on level 199", given.logInAndGoToTab("quests", CUSTOMER_63, AUTH_63), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 49 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
        })
        When("I complete a walking challenge", when.completeNewWorldShortStroll(199), async () => {
            Then("I should see the level 199 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
        })
        When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(199), "down", "slow"), async () => {
            When("I tap level 200 button", when.tapID(LEVEL_CHALLENGE_BUTTON(200)), async () => {
                Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
            })
        })
        When("I tap got it", when.tapText("Got it"), async () => {
            Then("I should see the level 199 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
        })
    }) 

    Scenario("When I have unlocked level 200 and level 201, I can do two challenges for level 201", scenario.start, () => {
        Given("I login as a user on level 201", given.logInAndGoToTab("quests", CUSTOMER_64, AUTH_64), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 201 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I complete a walking challenge at level 201", when.completeChallenge(201, "short stroll"), async () => {
            Then("I should see the level 201 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap this level 202 button", when.tapID(LEVEL_CHALLENGE_BUTTON(202)), async () => {
            Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
        })
        When("I tap got it", when.tapText("Got it"), async () => {
            Then("I should see the level 201 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I complete a second walking challenge at level 201", when.completeSecondChallenge(201, "short stroll"), async () => {
            Then("I should see the level 201 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap this level 202 button", when.tapID(LEVEL_CHALLENGE_BUTTON(202)), async () => {
            Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
        })
    }) 
})




