import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { QUESTS_SCREEN, LEVEL_CHALLENGE_BUTTON, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER, DAILY_STEPS_SCREEN, BACK_BUTTON, CYCLING_COUNT} from "@ids";
import { CUSTOMER_72, AUTH_72, GOALS_4, GOAL_REWARD_MILESTONE_9, GOAL_REWARD_MILESTONE_10, GOAL_REWARD_MILESTONE_11 } from "@data";

Feature("As a user I can opt in and take an event", async () => {
    Scenario("I can take and complete a 3 star challenge event and hit all the event milestones", scenario.start, async () => {
        Given("I login and go to yucoin page", given.logInAndGoToTab("yucoin", CUSTOMER_72, AUTH_72), async () => {
            Then("I should be on the yucoin screen", then.idVisible(DAILY_STEPS_SCREEN))
            Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(CYCLING_COUNT("km")))
            Then("I should see the correct 3 star event for me to complete and the progress bar", then.threeStarEventToBeCompletedVisible(0, 0))
            Then("I should see I have done 0 steps today", then.textVisible("0 steps"))
            Then("I should see 200 yucoin earned today", then.yuCoinTodayEarned([200]))
            Then("I should see my yucoin total in the top of the page", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(700)))
        })
        When("I click on the event challenge", when.tapChallenge("0 / 4 perfect challenges"), async () => {
            Then("I should be on the event screen and see the correct earn rates for the challenges", then.on3starEventDetailsScreen)
            Then("I should see all milestones visible to take and their correct yucoin and stars", then.allMilestonesVisible)
        })
        When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
            When("I tap take take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
                Then("I should see the level 152 is unlocked", then.idVisible(LEVEL_CHALLENGE_BUTTON(152)))
            })
        })
        When("I tap level 152 button", when.tapID(LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 1st challenge
        When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("short stroll", 400), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 10, 400))
        })
        When("I tap collect", when.tapText("Collect"), async () => {
            Then("I should see my yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(700 + 10)))
        })
        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see the longest number of steps I have done today", then.textVisible("400 steps"))
            Then("I should see I have earned 10 YuCoin today from the walk", then.yuCoinTodayEarned([210]))
            Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and hit the correct milestone", then.yuCoinPageEventDataCorrect(1, 0.25))
        })
        When("I tap on the event challenge", when.tapChallenge(GOALS_4.data.title), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(1, 0.25))
            Then("I should see Claim available for the first milestone", then.claimVisible(1))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage(GOALS_4.data.title, "100", 1, GOAL_REWARD_MILESTONE_9.data.rewardDescription))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the first milestone complete and the other 2 incomplete", then.firstChallengeClaimedVisible)
            })
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see my new total yucoin earned today with the 1st milestone completed", then.yuCoinTodayEarned([210], 100))
        })
        When("I tap take a challenge", when.tapText("Take a challenge (3 left today)"), async () => {
            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(3)))
            Then("I should see the yucoin total updated with the claimed milestone YuCoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(1710)))
        })
        When("I tap level 152 button", when.tapID(LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 2nd challenge

        When("I complete a brisk walk challenge", when.selectAndCompleteWalkingChallenge("brisk walk", 1200), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 60, (1200 + 400)))
        })
        When("I tap collect", when.tapText("Collect"), async () => {
            Then("I should see the yucoin total updated", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(1710 + 60))) 
        })
        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see the longest number of steps I have done today", then.textVisible("1,200 steps"))
            Then("I should see I have earned 60 YuCoin today from the walk", then.yuCoinTodayEarned([1210, 60]))
            Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and the correct milestone I am on", then.yuCoinPageEventDataCorrect(2, 0.5))
        })
        When("I tap on the event challenge", when.tapChallenge(GOALS_4.data.title), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(2, 0.5))
            Then("I should see not see claim available for the second milestone", then.textNotVisible("Claim"))
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            When("I tap take a challenge", when.tapText("Take a challenge (2 left today)"), async () => {
                Then("I should be on quests", then.idVisible(QUESTS_SCREEN(3)))
                Then("I should see the yucoin total still at 1770 as I have not reached or claimed the next milestone", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(1770)))
            })
        })
        When("I tap level 152 button", when.tapID(LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 3rd challenge

        When("I complete a long walk challenge", when.selectAndCompleteWalkingChallenge("long walk", 3000), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 60, (1600 + 3000)))
        })
        When("I tap collect", when.tapText("Collect"), async () => {
            Then("I should see the yucoin total updated with the challenge yucoin and daily step milestone yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(1770 + 60 + 10))) 
        })
        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see the longest number of steps I have done today", then.textVisible("3,000 steps"))
            Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and hit the correct milestone", then.yuCoinPageEventDataCorrect(3, 0.75))
            Then("I should see I have earned 60 and 10 YuCoin today from the walk", then.yuCoinTodayEarned([200, 1070, 10, 60]))
        })
        When("I tap on the event challenge", when.tapChallenge(GOALS_4.data.title), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(3, 0.75))
            Then("I should see Claim available for the first milestone", then.claimVisible(2))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage(GOALS_4.data.title, GOAL_REWARD_MILESTONE_10.data.rewardValue.toString(), 2, GOAL_REWARD_MILESTONE_10.data.rewardDescription))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the first and second milestones complete and the final one incomplete", then.firstAndSecondChallengeClaimedVisible)
            })
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see my new total yucoin earned today with the 2nd milestone completed", then.yuCoinTodayEarned([1270, 10, 60], 150))
        })
        When("I go back to the quests tab", when.tapID(NAV_BAR("quests"), 3000), async () => {
            Then("I should be on quests", then.idVisible(QUESTS_SCREEN(3)))
            Then("I should see the yucoin total updated with the claimed milestone YuCoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3340)))
        })
        When("I tap level 152 button", when.tapID(LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 4th challenge

        When("I complete a meditation challenge at level 152", when.selectAndCompleteMeditationChallenge("meditation", 600), async () => {
             // we need triggerAppUpdateState to mimic a user leaving the app to meditate and then returning to the yulife app
            When("I trigger app update", when.triggerAppUpdateState, async () => {
                When("I wait", when.wait(5000), async () => {
                    When("I tap awesome", when.tapText("Awesome"), async () => {
                        Then("I am on the event completed page", then.onCompletedAllEventMilestonesPage(GOALS_4.data.title, GOAL_REWARD_MILESTONE_11.data.rewardDescription, GOAL_REWARD_MILESTONE_9.data.rewardDescription, GOAL_REWARD_MILESTONE_10.data.rewardDescription, GOAL_REWARD_MILESTONE_11.data.rewardTitle, GOAL_REWARD_MILESTONE_9.data.rewardTitle, GOAL_REWARD_MILESTONE_10.data.rewardTitle))
                    })
                })
            })
        })

        // Pressing claim button is causing a warning. Devs looking into it.

        // When("I click Claim", when.tapText("Claim"), async () => {
        //     When("I wait", when.wait(5000), async () => {
        //         Then("I should see the third milestone complete", then.milestoneComplete(0))
        //     })
        // })
        // When("I click Great! button", when.tapText("Great!"), async () => {
        //     When("I tap level 152", when.tapID(LEVEL_CHALLENGE_BUTTON(152)), async () => {
        //         Then("I can see all my challenges done and yucoin earned", then.allChallengesAndYuCoinsAwardedVisible)
        //         Then("I should see all my total yucoin earned including 20 for daily mindfulness milestone yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3340 + 60 + 20 + 200 * 10)))
        //     })
        // })
        // When("I tap the back button", when.tapID(BACK_BUTTON), async () => {
        //     When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
        //         Then("I should see the longest number of steps I have done today", then.textVisible("3,000 steps"))
        //         Then("I should see meditation I have done today", then.textVisible("10 min"))
        //         Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
        //         Then("I should see all my total yucoin earned including 20 for daily mindfulness milestone yucoin", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(3340 + 60 + 20 + 200 * 10)))
        //         Then("I should see I have earned 4,700 YuCoin today total from all milestones and challenges completed", then.yuCoinTodayEarned([2640, 60, 20], 200))
        //     })
        // })
    })
})

