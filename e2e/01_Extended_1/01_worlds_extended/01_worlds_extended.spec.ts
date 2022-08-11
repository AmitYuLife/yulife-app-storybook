import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { CUSTOMER_22, AUTH_22, CUSTOMER_23, AUTH_23, CUSTOMER_24, AUTH_24, CUSTOMER_39, AUTH_39, CUSTOMER_41, AUTH_41 } from "@data";
import { LEVEL_CHALLENGE_BUTTON, NAV_BAR, QUESTS_SCREEN, VIEW_TOP_RIGHT_COIN_COUNTER, YUCOIN, QUESTS_SCREEN_YUNIVERSAL, CHALLENGE_TILE, STEPS_COUNT, DAILY_STEPS_SCREEN, ACTIVITY_FEED } from "@ids";


Feature("As a user I can complete challenges across multiple worlds", async () => {
    Scenario("I can transition from the first world (forest) to the second world (ocean)", scenario.start, () => {
        Given("I login as a user on level 49", given.logInAndGoToTab("quests", CUSTOMER_22, AUTH_22), async () => {
            Then("I should see my coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should see the level 49 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(49)))
        })
        When("I complete a walking challenge", when.completeNewWorldShortStroll(49), async () => {
            Then("I should see the level 50 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(50)))
        })
        When("I tap this level 50 button", when.tapID(LEVEL_CHALLENGE_BUTTON(50)), async () => {
            Then("The yunity screens should be correct", then.yunityCorrect("Forest"))
            Then("I should be on the forest chest screen", then.isOnChestScreen("Forest"))
        })
        When("I tap 'Open the chest'", when.tapText("Open the chest"), async()=>{
            Then("I should see You have earned text", then.textVisible("You have earned"))
            Then("I should see the three rewards earned for completing forest", then.forestThreeRewardsVisible)   
        })
        When("I tap Claim rewards", when.tapText("Claim rewards"), async () => {
            Then("I should have unlocked the second ocean world", then.idVisible(QUESTS_SCREEN(1), 5000))
            Then("I should see the level 51 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(51)))
            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17910)))
        })
        When("I tap the YuCoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
            Then("I should see 210 YuCoin today", then.textVisible("210 YuCoin today", 2000))
        })
    }) 
    

    Scenario("I can transition from the second world (ocean) to third world (desert), when I tap the level 100 challenge button", scenario.start, async () => {
        Given("I login as a user on level 99", given.logInAndGoToTab("quests", CUSTOMER_23, AUTH_23), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17700)))
            Then("I should be on the second world", then.idVisible(QUESTS_SCREEN(1)))
            Then("I should see level 99", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
        })
        When("I complete the level 99 challenge", when.completeNewWorldShortStroll(99), async () => {
            Then("I should still be on the second ocean world", then.idVisible(QUESTS_SCREEN(1)))
            Then("I should still see level 99", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
        })
        When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(99), "down", "slow"), async () => {
            Then("I should see the level 100 ocean unity challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(100)))
        })
        When("I tap the level 100 ocean unity challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(100)), async () => {
            Then("The yunity screens should be Ocean", then.yunityCorrect("Ocean"))
            Then("I should be on the ocean chest screen", then.isOnChestScreen("Ocean"))
        })
        When("I tap 'Open the chest'", when.tapText("Open the chest"), async()=>{
            Then("I should see You have earned text", then.textVisible("You have earned"))
            Then("I should see the three rewards earned for completing ocean", then.oceanThreeRewardsVisible)   
        })
        When("I tap Claim rewards", when.tapText("Claim rewards"), async () => {
            Then("I should see the level 99 challenge button on the second world (ocean)", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17910)))
        })
        When("I complete a level 99 meditation challenge", when.completeNewWorldMeditation(99), async () => {
            Then("I should be on the new third world (desert)", then.idVisible(QUESTS_SCREEN(2)))
            Then("I should see the level 101 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(101)))
            Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(17950)))
        })
        When("I scroll back down to the ocean second world", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(101), "up", "slow"), async () => {
            When("I scroll back down to the ocean second world", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(100), "up", "fast"), async () => {
                Then("I should see the level 99 challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(99)))
            })
        })
        When("I tap the level 99 challenge button", when.tapID(LEVEL_CHALLENGE_BUTTON(99)), async () => {
            Then("I should see the short stroll challenge I just completed with the correct stars", then.onChallengeHistory("short stroll", 99, [10], [3]))
            Then("I should see the meditation challenge I just completed with the correct stars", then.onChallengeHistory("meditation", 99, [40], [1]))
            Then("I should see the number of minutes for meditation", then.textVisible("10 mins"))
        })
    })
    

    Scenario("I can transition from the third world (desert) to the fourth world (mountain)", scenario.start, () => {
        Given("I login as a user on level 149", given.logInAndGoToTab("quests", CUSTOMER_41, AUTH_41), async () => {
            Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27700)))
            Then("I should be on the desert third world", then.idVisible(QUESTS_SCREEN(2)))
            Then("I should see level 149", then.idVisible(LEVEL_CHALLENGE_BUTTON(149)))
            When("I complete the level 149 challenge", when.completeNewWorldShortStroll(149), async () => {
                Then("I should be on the desert third world still", then.idVisible(QUESTS_SCREEN(2)))
                Then("I should still see level 149", then.idVisible(LEVEL_CHALLENGE_BUTTON(149)))
                When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(149), "down", "slow"), async () => {
                    Then("I should see the level 150 desert unity challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(150)))
                    When("I tap the level 150 desert unity challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(150)), async () => {
                        Then("The desert yunity screen should be correct", then.yunityCorrect("Desert"))
                        Then("I should be on the desert chest screen", then.isOnChestScreen("Desert"))
                        When("I tap 'Open the chest'", when.tapText("Open the chest"), async()=>{
                            Then("I should see You have earned text", then.textVisible("You have earned"))
                            Then("I should see the three rewards earned for completing desert", then.desertThreeRewardsVisible)   
                            When("I tap Claim rewards", when.tapText("Claim rewards"), async () => {
                                Then("I should see the level 149 challenge button on the desert third world", then.idVisible(LEVEL_CHALLENGE_BUTTON(149)))
                                Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27910)))
                                When("I complete a level 149 meditation challenge", when.completeNewWorldMeditation(149), async () => {
                                    Then("I should see the level 149 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(149)))
                                    When("I complete a second level 149 meditation challenge", when.completeNewWorldMeditation(149), async () => {
                                        Then("I should be on new Yunity with the mountain world screen", then.idVisible(QUESTS_SCREEN(3), 3000))
                                        Then("I should see the level 151 challenge button", then.idVisible(LEVEL_CHALLENGE_BUTTON(151)))
                                        Then("I should see my updated coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(27990)))
                                        When("I scroll back down to the desert third world", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(151), "up", "slow"), async () => {
                                            When("I scroll back down to the desert third world", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(150), "up", "fast"), async () => {
                                                Then("I should see the level 149 challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(149)))
                                                When("I tap the level 149 challenge button", when.tapID(LEVEL_CHALLENGE_BUTTON(149)), async () => {
                                                    Then("I should see the short stroll challenge I just completed with the correct stars", then.onChallengeHistory("short stroll", 149, [10], [3], 0))
                                                    Then("I should see the meditation challenges I just completed with the correct stars", then.onChallengeHistory("meditation", 149, [40, 40], [1, 1], 10))
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
        })
    }) 
    

    Scenario("When I get to level 200 my earn rate should be doubled", scenario.start, async()=>{
        Given("I login as a user on level 199", given.logInAndGoToTab("quests", CUSTOMER_24, AUTH_24), async () => {
            Then("I should be on the mountain fourth world", then.idVisible(QUESTS_SCREEN(3)))
            Then("I should see level 199", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
            When("I complete the level 199 challenge", when.completeNewWorldShortStroll(199), async () => {
                Then("I should be on the fourth mountain world", then.idVisible(QUESTS_SCREEN(3)))
                Then("I should still see level 199", then.idVisible(LEVEL_CHALLENGE_BUTTON(199)))
                When("I scroll up", when.scrollFromID(LEVEL_CHALLENGE_BUTTON(199), "down", "slow"), async () => {
                    Then("I should see the level 200 unity challenge", then.idVisible(LEVEL_CHALLENGE_BUTTON(200)))
                    When("I tap the level 200 unity challenge", when.tapID(LEVEL_CHALLENGE_BUTTON(200)), async () => {
                        Then("I should see the first part of the mountain yunity screen", then.mountainYunityFirstPartCorrect)
                        Then("The mountain yunity screen should be correct", then.yunityCorrect("Mountain1"))
                        When("I tap 'Continue'",  when.tapText("Continue"), async () => {
                            Then("I should see that I have earned a Yunity Mountain Chest", then.mountainChestMessageVisible)
                            When("I tap 'Open the chest'", when.tapText("Open the chest"), async()=>{
                                Then("I should see You have earned text", then.textVisible("You have earned"))
                                Then("I should see the two rewards earned for completing mountain", then.mountainTwoRewardsVisible)   
                                When("I tap Claim rewards", when.tapText("Claim rewards"), async () => {
                                    Then("I should be on the Explore the Yuniverse screen", then.isOnExploreYuniverseScreen)
                                    When("I tap Explore the Yuniverse", when.tapText("Explore the Yuniverse", 2000), async () => {
                                        Then("I should be on the today screen", then.idVisible(DAILY_STEPS_SCREEN))
                                        Then("I should see my Yucoin total for today", then.textVisible("210 YuCoin today", 2000))
                                        When("I tap the YuCoin image", when.tapID(YUCOIN, 2000), async () => {
                                            When("I tap on I for activity feed info", when.tapID(ACTIVITY_FEED, 1000), async () => {
                                                Then("I should see 10 YuCoin for 2000 steps", then.textVisible("10 YuCoin for 2000 steps"))
                                                Then("I should NOT see 20 YuCoin for 1.6 km cycling", then.textNotVisible("20 YuCoin for 1.6 km cycling"))
                                                Then("I should NOT see 10 YuCoin for 1.6 km cycling", then.textNotVisible("10 YuCoin for 1.6 km cycling"))
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

    Scenario("When I get to level 200 I can take another challenge", scenario.start, async()=>{
        Given("I login as a user on level 201", given.logInAndGoToTab("quests", CUSTOMER_39, AUTH_39), async () => {
            Then("I should see the first Level open", then.idVisible(QUESTS_SCREEN_YUNIVERSAL(1)))
            Then("I should have right ammount of coins 20420 ", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(20420)))
        })
        When("I tap at level 1", when.tapIDAtPoint(QUESTS_SCREEN_YUNIVERSAL(1), 187, 537), async () => {
            Then("I should see Yuniversal I", then.textVisible("Yuniversal I"))
            Then("I should see the short stroll challenge", then.idVisible(CHALLENGE_TILE("short stroll")))
            Then("I should see righ ammount of coin reward", then.textVisible("10 YuCoin"))
            Then("I should see the long walk challenge", then.idVisible(CHALLENGE_TILE("long walk")))
            Then("I should see the meditation challenge", then.idVisible(CHALLENGE_TILE("meditation")))
        })
        When("I complete short stroll challenge", when.completYuniversWorldShortStroll, async () => {
            Then("Level 2 should exist in the screen", then.idExist(QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should have right ammount of coins 20430 ", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(20430)))
        })
            
        When("I tap at level 2", when.tapIDAtPoint(QUESTS_SCREEN_YUNIVERSAL(2), 187, 655), async () => {
            Then("I should i just completed a level", then.textVisible("You have just completed a level"))
        })
        When("I press got it", when.tapText("got it"), async () => {
            Then("Level 2 should exist in the screen", then.idExist(QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I go back to the daily steps screen", when.tapID(NAV_BAR("yucoin")), async()=>{
            Then("I should have right amount of coins 20430 ", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(20430)))
            Then("I should see 10 YuCoin today", then.textVisible("10 YuCoin today"))
            Then("I should see 400 steps", then.idVisible(STEPS_COUNT(400), 2000));
            Then('I should see Take a challenge', then.textVisible("Take a challenge (3 left)"))
        })
        When("I tap the yucoin image", when.tapID(YUCOIN), async()=>{
            Then("I should see correct steps and data in", then.onTodaysYucoin(400))
        })
        When("I press Take a challenge (3 left)", when.tapText("Take a challenge (3 left)"), async () => {
            Then("Level 2 should exist in the screen", then.idExist(QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should have right ammount of coins 20430 ", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(20430)))
        })
    })
})




