import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_60, AUTH_60, CUSTOMER_61, AUTH_61, CUSTOMER_63, AUTH_63, CUSTOMER_64, AUTH_64, CUSTOMER_67, AUTH_67, CUSTOMER_68, AUTH_68, CUSTOMER_79, AUTH_79, CUSTOMER_80, AUTH_80, USER_79, USER_80 } from "@data";
import { LEVEL_CHALLENGE_BUTTON, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER, QUESTS_SCREEN_YUNIVERSAL, LEVEL_STAR_COUNT } from "@ids";

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
        When("I tap got it", when.tapText("Okay, got it"), async () => {
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
        When("I tap got it", when.tapText("Okay, got it"), async () => {
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
            Then("I should see the level 199 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
        })
        When("I complete a walking challenge", when.completeNewWorldShortStroll(199), async () => {
            Then("I should see the level 199 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
        })
        When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(199), "down", "slow"), async () => {
            When("I tap level 200 button", when.tapID(LEVEL_CHALLENGE_BUTTON(200)), async () => {
                Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
            })
        })
        When("I tap got it", when.tapText("Okay, got it"), async () => {
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
        When("I tap got it", when.tapText("Okay, got it"), async () => {
            Then("I should see the level 201 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I complete a second walking challenge at level 201", when.completeSecondChallenge(201, "short stroll"), async () => {
            Then("I should see the level 201 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap this level 202 button", when.tapID(LEVEL_CHALLENGE_BUTTON(202)), async () => {
            Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked)
        })
    }) 

    Scenario("When I am at level 201 I can see all my challenges with their yucoin value and I can take max 4 in a day", scenario.start, () => {
        Given("I login as a user on level 201", given.logInAndGoToTab("yucoin", CUSTOMER_64, AUTH_64), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button", when.tapID(LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a short stroll challenge at level 201", when.selectAndCompleteWalkingChallenge("short stroll", 400), async () => {
            When("I tap done", when.tapText("Done"), async () => {
                Then("I should see the level 201 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
                Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17720)))
            })
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (3 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button a second time", when.tapID(LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a brisk walk challenge at level 201", when.selectAndCompleteWalkingChallenge("brisk walk", 800), async () => {
            Then("I should see the level 201 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17820)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (2 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button a third time", when.tapID(LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a long walk challenge at level 201", when.selectAndCompleteWalkingChallenge("long walk", 2000), async () => {
            Then("I should see the level 201 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17920)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button a fourth time", when.tapID(LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a meditation challenge at level 201", when.selectAndCompleteMeditationChallengeWithoutMedia(180), async () => {
            Then("I should see the level 201 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(201)))
            Then("I should see level 201 has 3 stars", then.idVisible(LEVEL_STAR_COUNT(3)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17960)))
        })
        When("I tap level 201", when.tapID(LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should see all the challenges I completed along with the yucoin awarded", then.challengesAndYuCoinsAwardedVisible)
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
        })
    }) 

    Scenario("When I am at level 251 I can see all my challenges with their yucoin value and I can take max 4 in a day", scenario.start, () => {
        Given("I login as a user on level 251", given.logInAndGoToTab("yucoin", CUSTOMER_67, AUTH_67), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should see the level 251 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
        })
        When("I tap level 251 button", when.tapID(LEVEL_CHALLENGE_BUTTON(251)), async () => {
            Then("I should be on the level 251 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a short stroll challenge at level 251", when.selectAndCompleteWalkingChallenge("short stroll", 400), async () => {
            When("I tap done", when.tapText("Done"), async () => {
                Then("I should see the level 251 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
                Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17720)))
            })
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (3 left today)"), async () => {
            Then("I should see the level 251 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
        })
        When("I tap level 251 button a second time", when.tapID(LEVEL_CHALLENGE_BUTTON(251)), async () => {
            Then("I should be on the level 251 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a brisk walk challenge at level 251", when.selectAndCompleteWalkingChallenge("brisk walk", 800), async () => {
            Then("I should see the level 251 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17820)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (2 left today)"), async () => {
            Then("I should see the level 251 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
        })
        When("I tap level 251 button a third time", when.tapID(LEVEL_CHALLENGE_BUTTON(251)), async () => {
            Then("I should be on the level 251 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a long walk challenge at level 251", when.selectAndCompleteWalkingChallenge("long walk", 2000), async () => {
            Then("I should see the level 251 challenge button still available", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17920)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
            Then("I should see the level 251 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
        })
        When("I tap level 251 button a fourth time", when.tapID(LEVEL_CHALLENGE_BUTTON(251)), async () => {
            Then("I should be on the level 251 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a meditation challenge at level 251", when.selectAndCompleteMeditationChallengeWithoutMedia(180), async () => {
            Then("I should see the level 251 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(251)))
            Then("I should see level 251 has 3 stars", then.idVisible(LEVEL_STAR_COUNT(3)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17960)))
        })
        When("I tap level 251", when.tapID(LEVEL_CHALLENGE_BUTTON(251)), async () => {
            Then("I should see all the challenges I completed along with the yucoin awarded", then.challengesAndYuCoinsAwardedVisible)
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
        })
    }) 

    Scenario("When I am in the yuniverse at stage 1 I can see all my challenges with their yucoin value and I can take max 4 in a day", scenario.start, () => {
        Given("I login as a user in the yuniverse at stage 1", given.logInAndGoToTab("yucoin", CUSTOMER_68, AUTH_68), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(1)))
        })
        When("I tap level 1 button", when.tapYuniverseLevelForFirstTime(187, 537), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.yuniverseChallengesVisible)
        })
        When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("short stroll", 400), async () => {
            When("I tap done", when.tapText("Done", 3000), async () => {
                Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17720)))
                Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
            })
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (3 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I tap level 1 button a second time", when.tapYuniverseLevelAfterFirstTime(187, 537), async () => {
            Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible)
        })
        When("I complete a brisk walk challenge", when.selectAndCompleteWalkingChallenge("brisk walk", 800), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17820)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (2 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I tap level 1 button a third time", when.tapYuniverseLevelAfterFirstTime(187, 537), async () => {
            Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible)
        })
        When("I complete a long walk challenge at level 251", when.selectAndCompleteWalkingChallenge("long walk", 2000), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17920)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I tap level 1 button a fourth time", when.tapYuniverseLevelAfterFirstTime(187, 537), async () => {
            Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible)
        })
        When("I complete a meditation challenge at level 1", when.selectAndCompleteMeditationChallengeWithMedia(180), async () => {
            Then("I should be on the yuniverse map", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17960)))
        })
        When("I go to yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
        })
    }) 

    Scenario("As a user opening a Yunity Chest at level 250, I want the chest to contain a 1 day surge and YuCoin worth 50x the users earn rate", scenario.start, () => {
        Given("I login as a user with level 250 unclaimed", given.logInAndGoToTab("quests", CUSTOMER_79, AUTH_79), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 250 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(250)))
        })
        When("I tap the level 250 button", when.tapID(LEVEL_CHALLENGE_BUTTON(250)), async () => {
            Then("I should see that I've achived Yunity with the Forest", then.yunityCorrect("Forest"))
        })
        When("I tap to open the chest", when.tapText("Open the chest"), async () => {
            Then("I should see I have the correct items in the Yunity Chest", then.yunityChestAwardsVisible(USER_79, 1))
        })
    })
})




