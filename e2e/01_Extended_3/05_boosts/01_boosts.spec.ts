import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework"
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "@data"
import * as ids from "@ids"

Feature("Level boosts", async () => {
  Scenario("I can see boosted challenges and receive boosted rewards", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_122, data.AUTH_122, true, "United Kingdom", false), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)))
      Then("I should see that level 50 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)))
    })
    When("I tap the level 50 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(50)), async () => {
      Then("I should see that I've achived Yunity with the Forest", then.canSeeForestYunity)
    })
    When("I tap continue", when.tapText("Continue"), async () => {
      Then("I should see that I've achieved the chest", then.canSeeForestYunityChestIntro)
    })
    When("I tap open", when.tapText("Open the chest"), async () => {
      Then("I can see the Boost card", then.idVisible(ids.YUNITY_CARD("1 Level\nBoost")))
    })
    When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
      Then("I should see that level 51 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)))
    })
    When("I tap the level 51 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51)), async () => {
      Then("I can see the boosted challenge tiles", then.canSeeBoostedChallengeTiles(data.USER_122))
    })
    When("I tap the tile", when.tapID(ids.CHALLENGE_TILE("Long Walk")), async () => {
      Then("I can see the challenge page with the boost tab", then.canSeeChallengePage("10", 60, true))
    })
    When("I click back button", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I tap the level 51 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51)), async () => {
        When("I complete the long walk", when.selectAndCompleteWalkingChallenge("Long Walk", 4000), async () => {
          Then("I can see the completed page", then.stepsChallengeDataCorrect(51, 120, 4000))
        })
      })
    })
    When('I Tap collect', when.tapText("Collect"), async () => {
      Then("I can see the yucoin balance is correct", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(data.USER_GAME_STATE_122.data.currentBalance + 120)))
    })
  })
})