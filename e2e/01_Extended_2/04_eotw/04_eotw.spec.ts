import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as data from "@data"
import * as ids from "@ids"
import { weeklyQuestsTimeRemaining } from "@navigation";
import { getFullName } from "_utils/users";

Feature("End of the world/Yuniverse", async () => {
    Scenario("I complete level 200, enter EOTW with a yucoin surge of 2 and take 4 challenges at level 1", scenario.start, () => {
        Given("I login as a user on level 200 with a earn rate of 6", given.logInAndGoToTab("yucoin", data.CUSTOMER_69, data.AUTH_69), async () => {
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should see the level 200 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(200)))
        })
        When("I tap level 200 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(200)), async () => {
            Then("I should see that I have achieved Yunity Mountain", then.yunityCorrect("Mountain"))
            Then("I should see the correct rewards in the chest for moving into EOTW/yuniverse", then.mountainTwoRewardsVisible())
        })
        When("I wait", when.wait(1000), async () => {
            When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
                Then("I am on explore the yuniverse screen", then.isOnExploreYuniverseScreen)
            })
        })
        When("I tap explore the yuniverse", when.tapText("Explore the Yuniverse"), async () => {
            Then("I should be on the yucoin", then.idVisible(ids.DAILY_STEPS_SCREEN))
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(1)))
        })
        When("I tap level 1 button", when.tapYuniverseLevelForFirstTime(1, 185, 588), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.yuniverseChallengesVisible)
            Then("I should see the 2x surge yucoin value for the 5 unlocked challenges", then.canSeeChallengeTiles(data.USER_69, "boost"))
        })

        // first challenge - short stroll
        When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(1, 12, 400))
        })
        When("I tap collect", when.tapText("Collect"), async () => {
            When("I tap done", when.tapText("Done", 3000), async () => {
                Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700 + 12), 2500))
                Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
            })
        })
        When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"))
            Then("I should see the correct number of steps done today", then.stepsDoneToday(400))
            Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(200, 12))
        })
        When("I go to the today's earnings screen", when.tapText("400 steps"), async () => {
            Then("I see the correct yucoin earned today so far", then.textVisible("212 YuCoin"))
            Then("I can see my total steps", then.textVisible("400 / 12000 steps"))
        })
        When("I swipe down the screen", when.swipeFromText("0 / 30 mindful mins", "up", "fast"), async () => {
            Then("I can see 1/4 challenges completed today", then.textVisible("Today's challenges (1/4)"))
            Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"))
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (3 left)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I tap level 1 button a second time", when.tapYuniverseLevelAfterFirstTime(185, 588), async () => {
            Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible)
        })

        // second challenge - brisk walk 
        When("I complete a brisk walk challenge", when.selectAndCompleteWalkingChallenge("Brisk Walk", 1200), async () => {
            Then("I should see the correct number of yucoin earned and steps completed in the task", then.stepsChallengeDataCorrect(1, 60, (400 + 1200)))
        })
        When("I tap collect", when.tapText("Collect"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17712 + 60)))
        })
        When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"))
            Then("I should see the correct number of steps done today", then.stepsDoneToday(1200))
            Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(212, 60))
        })
        When("I go to the today's earnings screen", when.tapText("1,200 steps"), async () => {
            Then("I see the correct yucoin earned today so far", then.textVisible("272 YuCoin"))
            Then("I can see my total steps", then.textVisible("1200 / 12000 steps"))
        })
        When("I swipe down the screen", when.swipeFromText("Daily core activities", "up", "fast"), async () => {
            Then("I can see 2/4 challenges completed today", then.textVisible("Today's challenges (2/4)"))
            Then("I can see my short stroll completed today", then.textVisible("Brisk Walk (1,600 steps)"))
            Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"))
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (2 left)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I tap level 1 button a third time", when.tapYuniverseLevelAfterFirstTime(185, 588), async () => {
            Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible)
        })

        // third challenge - long walk 

        When("I complete a long walk challenge at level 251", when.selectAndCompleteWalkingChallenge("Long Walk", 2000), async () => {
            Then("I should see the correct number of yucoin earned and steps completed in the task", then.stepsChallengeDataCorrect(1, 72, (400 + 1200 + 2000)))
        })
        When("I tap collect", when.tapText("Collect"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
            Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17772 + 78), 2500))
        })
        When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"))
            Then("I should see the correct number of steps done today", then.stepsDoneToday(2000))
            Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(272, 78, 2500))
        })
        When("I go to the today's earnings screen", when.tapText("2,000 steps"), async () => {
            Then("I see the correct yucoin earned today so far", then.textVisible("350 YuCoin"))
            Then("I can see my total steps", then.textVisible("2000 / 12000 steps"))
        })
        When("I swipe down the screen", when.swipeFromText("Today's challenges (3/4)", "up", "fast"), async () => {
            Then("I can see 3/4 challenges completed today", then.textVisible("Today's challenges (3/4)"))
            Then("I can see my short stroll completed today", then.textVisible("Long Walk (3,600 steps)"))
            Then("I can see my short stroll completed today", then.textVisible("Brisk Walk (1,600 steps)"))
            Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"))
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (1 left)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
        })
        When("I tap level 1 button a fourth time", when.tapYuniverseLevelAfterFirstTime(185, 588), async () => {
            Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible)
        })

        // fourth challenge - meditation

        When("I complete a meditation challenge at level 1", when.selectAndCompleteMeditationChallenge(180), async () => {
            Then("I should see the correct number of yucoin earned and steps completed in the task", then.meditationChallengeDataCorrect(1, 48, 3))
        })

        When("I tap collect", when.tapText("Collect"), async () => {
            When("I go to quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
                Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)))
                Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17850 + 48)))
            })
        })
        When("I trigger app update", when.triggerAppUpdateState, async () => {
            When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
                Then("I should see the correct number of steps done today", then.stepsDoneToday(2000))
                Then("I should see the correct number of mindful minutes", then.textVisible("3 min"))
                Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(350, 48, 2500))
            })
        })
        When("I go to the today's earnings screen", when.tapText("2,000 steps"), async () => {
            Then("I see the correct yucoin earned today so far", then.textVisible("398 YuCoin"))
            Then("I can see my total steps", then.textVisible("2000 / 12000 steps"))
            Then("I can see my total mins", then.textVisible("3 / 30 mindful mins"))
        })
        When("I swipe down the screen", when.swipeFromText("Today's challenges (4/4)", "up", "fast"), async () => {
            Then("I can see 4/4 challenges completed today", then.textVisible("Today's challenges (4/4)"))
            Then("I can see my mins completed today", then.textVisible("Meditation (3 mins)"))
            Then("I can see my short stroll completed today", then.textVisible("Long Walk (3,600 steps)"))
            Then("I can see my short stroll completed today", then.textVisible("Brisk Walk (1,600 steps)"))
            Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"))
            Then("I should not see any challenges left", then.textNotVisible("Take a challenge (1 left)"))
            Then("I should see the welldone banner as I have completed 4 challenges today", then.idVisible(ids.WELLDONE_BANNER))
        })
    })

    Scenario("I complete level 7 in EOTW, I finish EOTW and enter the red planet with a yucoin surge of 2", scenario.start, () => {
        Given("I login as a user on level 207 with a earn rate of 6", given.logInAndGoToTab("yucoin", data.CUSTOMER_70, data.AUTH_70), async () => {
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
            When("I tap Check out my power", when.tapText("Check out my power"), async () => {
                Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
            })
        })
        When("I create my yumoji", when.createDefaultYumoji, async () => {
            Then("I should be on the yuscreen v4", then.idVisible(ids.V4_YUSCREEN))
            Then("I should see my Yumoji", then.idVisible(ids.YUMOJI_AVATAR_YUSCREEN_V4))
            Then("I should see my fullname", then.textVisible(getFullName(data.CUSTOMER_70)))
            Then("I should see I am in the Yuniversal world", then.textVisible("Yuniversal"))
        })
        When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
                Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)))
            })
        })
        When("I tap level 7 button", when.tapYuniverseLevelForFirstTime(7, 187, 263), async () => {
            Then("I should be on the celestial chest screen", then.celestialChestEarned)
        })
        When("I tap open the chest", when.tapText("Open the chest"), async () => {
            Then("I can see the 3 celestial chest rewards, which each earn me my earn rate (6) * 50", then.celestialChestAwardsVisible(data.USER_70))
        })
        When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
            Then("I am on the space travel screen", then.idVisible(ids.SPACE_TRAVEL_SCREEN))
        })
        When("I tap travel", when.tapText("Travel"), async () => {
            When("I wait", when.wait(7000), async () => {
                When("I tap a new beginning", when.tapText("A new beginning"), async () => {
                    Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN))
                })
            })
        })
        When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
            Then("I should see I am now in the Forest world", then.textVisible("Forest"))
            Then("I should see I am now on level 201", then.idVisible(ids.USER_LEVEL(201)))
        })
        When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
            Then("I should see level 201 unlocked in the red planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a short stroll challenge at level 201", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
            When("I tap collect", when.tapText("Collect"), async () => {
                When("I tap done", when.tapText("Done"), async () => {
                    Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
                    Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18326)))
                })
            })
        })
        When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (3 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button a second time", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a brisk walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Brisk Walk", 800), async () => {
            When("I tap collect", when.tapText("Collect"), async () => {
                Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
                Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18356)))
            })
        })
        When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (2 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button a third time", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a long walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Long Walk", 2000), async () => {
            When("I tap collect", when.tapText("Collect"), async () => {
                Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
                Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18386)))
            })
        })
        When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
            Then("I should see the level 201 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
        })
        When("I tap level 201 button a fourth time", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
        When("I complete a meditation challenge at level 201", when.selectAndCompleteMeditationChallenge(180), async () => {
            When("I tap collect", when.tapText("Collect"), async () => {
                Then("I should see the level 201 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
                Then("I should see level 201 has 3 stars", then.idVisible(ids.LEVEL_STAR_COUNT(3)))
                Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18398)))
            })
        })
        When("I tap level 201", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            Then("I should see all the challenges I completed along with the yucoin awarded", then.challengesAndYuCoinsAwardedVisible)
        })
        When('I tap back', when.tapID(ids.BACK_BUTTON), async () => {
            When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
            })
        })
    })

    Scenario("As a user, I want the celestial chest to be based on earn rate, so that I am rewarded on my policy amounts", scenario.start, () => {
        Given("I login as a user on level 207 with a earn rate of 9", given.logInAndGoToTab("yucoin", data.CUSTOMER_78, data.AUTH_78), async () => {
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
            When("I tap Check out my power", when.tapText("Check out my power"), async () => {
                Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen)
            })
        })
        When("I create my yumoji", when.createDefaultYumoji, async () => {
            Then("I should be on the yuscreen v4", then.idVisible(ids.V4_YUSCREEN))
            Then("I should see my Yumoji", then.idVisible(ids.YUMOJI_AVATAR_YUSCREEN_V4))
            Then("I should see my fullname", then.textVisible(getFullName(data.CUSTOMER_78)))
            Then("I should see I am in the Yuniversal world", then.textVisible("Yuniversal"))
        })
        When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
            When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
                Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)))
            })
        })
        When("I tap level 7 button", when.tapYuniverseLevelForFirstTime(7, 187, 263), async () => {
            Then("I should be on the celestial chest screen", then.celestialChestEarned)
        })
        When("I tap open the chest", when.tapText("Open the chest"), async () => {
            Then("I can see the 3 celestial chest rewards, which earns me my earn rate (9) * 50", then.celestialChestAwardsVisible(data.USER_78))
        })
    })

    Scenario("As a level 201+ user, I have weekly quests so I have extra activity", scenario.start, async () => {
        Given("I login as a user on level 201", given.logInAndGoToTab("yucoin", data.CUSTOMER_81, data.AUTH_81), async () => {
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
            Then("I should see level 201 unlocked in the red planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
            Then("I should see the Weekly Quests activty icon", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)))
        })
        When("I tap the Weekly Goals icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)), async () => {
            Then("I can see the Weekly quests pop-up", then.weeklyQuestsPopUpVisible)
        })
        When("I click the button text without a challenge selected", when.tapText("Let's go"), async () => {
            Then("Nothing happens, I cannot see the next modal", then.textNotVisible("Reward"))
        })
        When("I click the challenge", when.tapWeeklyChallenge("100"), async () => {
            When("I tap the button", when.tapText("Let's go"), async () => {
                Then("I can see the modal", then.challengeSelectedModalVisible("100", "2"))
            })
        })
        When("I click the close button", when.tapText("Close"), async () => {
            Then('I can no longer see the modal', then.textNotVisible("Weekly quests"))
            Then("I should see the Weekly Quests activty icon with no badge", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), false)))
        })
        When("I tap level 201 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            When("I complete a short stroll challenge at level 201", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
                When("I tap collect", when.tapText("Collect"), async () => {
                    When("I tap done", when.tapText("Done"), async () => {
                        Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
                    })
                })
            })
        })
        When("I tap the Weekly Goals icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), false)), async () => {
            Then("I can see the modal with the challenge progress", then.challengeProgressShown(1, 2, "#F43E8E"))
        })
        When("I click the close button", when.tapText("Close"), async () => {
            Then('I can no longer see the modal', then.textNotVisible("Weekly quests"))
        })
        When("I tap level 201 button a second time", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
            When("I complete a brisk walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Brisk Walk", 800), async () => {
                When("I tap collect", when.tapText("Collect"), async () => {
                    Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)))
                    Then("I should see the Weekly Quests activty icon with the badge", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)))
                })
            })
        })
        When("I tap the Weekly Goals icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)), async () => {
            Then("I can see the modal with the challenge progress", then.challengeProgressShown(2, 2, "#F43E8E"))
            Then("I can see the challenge is completed", then.completedChallengeModalVisible)
        })
        When("I tap the claim button", when.tapText("Claim"), async () => {
            Then("I can see the modal has changed to show a challenge has been claimed", then.challengeIsClaimed(2, 2))
        })
        When("I click the close button", when.tapText("Close"), async () => {
            Then('I can no longer see the modal', then.textNotVisible("Weekly quests"))
            Then("I should see the Weekly Quests activty icon with the badge", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), false)))
            Then("I can see the Icon has changed to the Done state", then.textVisible("Done"))
        })
    })

    Scenario("I complete level 400, enter EOTW with a yucoin surge of 2 and take 4 challenges at level 1", scenario.start, () => {
        Given("I login as a user on level 400 with a earn rate of 10", given.logInAndGoToTab("yucoin", data.CUSTOMER_89, data.AUTH_89), async () => {
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should see the level 200 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(400)))
        })
        When("I tap level 400 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(400)), async () => {
            Then("I should see that I have achieved Yunity Mountain", then.yunityCorrect("Mountain"))
            Then("I should see the correct rewards in the chest for moving into EOTW/yuniverse", then.mountainTwoRewardsVisible(true))
        })
        When("I wait", when.wait(5000), async () => {
            When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
                Then("I should be on the yucoin", then.idVisible(ids.DAILY_STEPS_SCREEN))
                Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
            })
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(1)))
        })
        When("I tap level 1 button", when.tapYuniverseLevelForFirstTime(1, 185, 588, 430), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.yuniverseChallengesVisible)
            Then("I should see the boosted yucoin value for the 5 unlocked challenges", then.canSeeChallengeTiles(data.USER_89, "boost"))
        })
    })

    Scenario("I complete level 7 in EOTW, I finish EOTW and enter the bright planet with a yucoin surge of 2", scenario.start, () => {
        Given("I login as a user on level 407 with a earn rate of 6", given.logInAndGoToTab("yucoin", data.CUSTOMER_90, data.AUTH_90), async () => {
            Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
            Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)))
        })
        When("I tap level 7 button", when.tapYuniverseLevelForFirstTime(7, 187, 263, 180), async () => {
            Then("I should be on the celestial chest screen", then.celestialChestEarned)
        })
        When("I tap open the chest", when.tapText("Open the chest"), async () => {
            Then("I can see the 3 celestial chest rewards, which each earn me my earn rate (6) * 50", then.celestialChestAwardsVisible(data.USER_90))
        })
        When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
            Then("I am on the space travel screen", then.idVisible(ids.SPACE_TRAVEL_SCREEN))
        })
        When("I tap travel", when.tapText("Travel"), async () => {
            When("I wait", when.wait(7000), async () => {
                When("I tap a new beginning", when.tapText("A new beginning"), async () => {
                    Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN))
                })
            })
        })
        When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
            When("I tap check this out", when.tapText("Check out my power"), async () => {
                When("I tap do this later", when.tapText("I'll do this later"), async () => {
                    Then("I should see I am now in the Forest world", then.textVisible("Forest"))
                    Then("I should see I am now on level 401", then.idVisible(ids.USER_LEVEL(401)))
                })
            })
        })
        When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
            Then("I should see level 401 unlocked in the red planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(401)))
        })
        When("I tap level 401 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(401)), async () => {
            Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible)
        })
    })
})
