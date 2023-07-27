import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_60, AUTH_60, CUSTOMER_61, AUTH_61, CUSTOMER_63, AUTH_63, CUSTOMER_64, AUTH_64, CUSTOMER_67, AUTH_67, CUSTOMER_68, AUTH_68, CUSTOMER_79, AUTH_79, CUSTOMER_80, AUTH_80, USER_79, USER_80, CUSTOMER_89, AUTH_89, CUSTOMER_91, AUTH_91, CUSTOMER_92, AUTH_92 } from "@data";
import { LEVEL_CHALLENGE_BUTTON, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER, QUESTS_SCREEN_YUNIVERSAL, LEVEL_STAR_COUNT, BACK_BUTTON } from "@ids";
import { getLocalisedString as t } from "@i18n"

Feature("I can get to and complete challenges in the bright planet", async () => {
    Scenario("When I am at level 401 I can see all my challenges with their yucoin value and I can take max 4 in a day", scenario.start, () => {
        Given("I login as a user on level 401", given.logInAndGoToTab("yucoin", CUSTOMER_91, AUTH_91), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", {noOfChallenges: "4"})), async () => {
            Then("I should see the level 401 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
        })
        When("I tap level 401 button", when.tapID(LEVEL_CHALLENGE_BUTTON(401)), async () => {
            Then("I should be on the level 401 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a short stroll challenge at level 401", when.selectAndCompleteWalkingChallenge("short stroll", 400), async () => {
            When("I tap done", when.tapText("Done"), async () => {
                Then("I should see the level 401 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
                Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17720)))
            })
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"))
        })
        When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", {noOfChallenges: "3"})), async () => {
            Then("I should see the level 401 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
        })
        When("I tap level 401 button a second time", when.tapID(LEVEL_CHALLENGE_BUTTON(401)), async () => {
            Then("I should be on the level 401 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a brisk walk challenge at level 401", when.selectAndCompleteWalkingChallenge("brisk walk", 800), async () => {
            Then("I should see the level 401 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17820)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"))
        })
        When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", {noOfChallenges: "2"})), async () => {
            Then("I should see the level 401 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
        })
        When("I tap level 401 button a third time", when.tapID(LEVEL_CHALLENGE_BUTTON(401)), async () => {
            Then("I should be on the level 401 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a long walk challenge at level 401", when.selectAndCompleteWalkingChallenge("long walk", 2000), async () => {
            Then("I should see the level 401 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17920)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"))
        })
        When("I tap take a challenge", when.tapText(t("Take a challenge (%{noOfChallenges} left today)", {noOfChallenges: "1"})), async () => {
            Then("I should see the level 401 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
        })
        When("I tap level 401 button a fourth time", when.tapID(LEVEL_CHALLENGE_BUTTON(401)), async () => {
            Then("I should be on the level 401 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a meditation challenge at level 401", when.selectAndCompleteMeditationChallengeWithoutMedia(180), async () => {
            Then("I should see the level 401 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(401)))
            Then("I should see level 401 has 3 stars", then.idVisible(LEVEL_STAR_COUNT(3)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17960)))
        })
        When("I tap level 401", when.tapID(LEVEL_CHALLENGE_BUTTON(401)), async () => {
            Then("I should see all the challenges I completed along with the yucoin awarded", then.challengesAndYuCoinsAwardedVisible)
        })
        When("I tap back", when.tapID(BACK_BUTTON), async () => {
            When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
                Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
            })
        })
    }) 

    Scenario("As a user opening a Yunity Chest at level 400, I want the chest to contain a 7 day surge and YuCoin worth 50x the users earn rate", scenario.start, () => {
        Given("I login as a user with level 400 unclaimed", given.logInAndGoToTab("quests", CUSTOMER_80, AUTH_80), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 400 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(400)))
        })
        When("I tap the level 400 button", when.tapID(LEVEL_CHALLENGE_BUTTON(400)), async () => {
            Then("I should see that I've achived Yunity with the Forest", then.yunityCorrect("Forest"))
        })
        When("I tap to open the chest", when.tapText(t("Open the chest")), async () => {
            Then("I should see I have the correct items in the Yunity Chest", then.yunityChestAwardsVisible(USER_80, 7))
        })
    })

    Scenario("I can't transition from the level 399 to the yuniverse level 400 on the same day", scenario.start, () => {
        Given("I login as a user on level 399", given.logInAndGoToTab("quests", CUSTOMER_92, AUTH_92), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 399 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(399)))
        })
        When("I complete a walking challenge", when.completeNewWorldShortStroll(399), async () => {
            Then("I should see the level 399 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(399)))
        })
        When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(399), "down", "slow"), async () => {
            When("I tap level 400 button", when.tapID(LEVEL_CHALLENGE_BUTTON(400)), async () => {
                Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
            })
        })
    })
})





