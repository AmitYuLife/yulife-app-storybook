import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as ids from "@ids";
import * as data from "@data";
import { twoDaysAgoDate } from "./_resources/consts";
import { getLocalisedString as t } from "@i18n";

Feature("As a user I can opt in and take an event", async () => {
    Scenario("I can take and complete a 3 star challenge event and hit all the event milestones", scenario.start, async () => {
        Given("I login and go to yucoin page", given.logInAndGoToTab("yucoin", data.CUSTOMER_72, data.AUTH_72), async () => {
            Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN))
            Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(ids.CYCLING_COUNT("km")))
            Then("I should see the correct 3 star event for me to complete and the progress bar", then.threeStarEventToBeCompletedVisible(0, 0))
            Then("I should see I have done 0 steps today", then.textVisible("0 steps"))
            Then("I should see 200 yucoin earned today", then.yuCoinTodayEarned([200]))
            Then("I should see my yucoin total in the top of the page", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700)))
        })
        When("I click on the event challenge", when.tapChallenge("0 / 4 " + t("perfect challenges")), async () => {
            When("I scroll", when.scrollUntilTextVisible(ids.EVENT_DIALOG_SCREEN_SCROLL, data.GOALS_4.data.descriptionTitle, "down"), async () => {
                Then("I should be on the event screen and see the correct earn rates for the challenges", then.eventScreenDetailsAreCorrect(data.GOALS_4))
                Then("I should see all milestones visible to take and their correct yucoin and stars", then.allMilestonesVisible)
            })
        })
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap take take a challenge", when.tapText(t("Take a challenge (%{challengesLeft} left today)", { challengesLeft: 4 })), async () => {
                Then("I should see the level 152 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(152)))
            })
        })
        When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 1st challenge
        When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("short stroll", 400), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 10, 400))
        })
        When("I tap collect", when.tapText(t("Collect")), async () => {
            Then("I should see my yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700 + 10)))
        })
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see the longest number of steps I have done today", then.textVisible("400 steps"))
            Then("I should see I have earned 10 YuCoin today from the walk", then.yuCoinTodayEarned([210]))
            Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and hit the correct milestone", then.yuCoinPageEventDataCorrect(1, 0.25))
        })
        When("I tap on the event challenge", when.tapChallenge(data.GOALS_4.data.title), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(1, 0.25))
            Then("I should see Claim available for the first milestone", then.claimVisible(1))
        })
        When("I click Claim rewards", when.tapText(t("Claim rewards")), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage(data.GOALS_4.data.title, "100", 1, data.GOAL_REWARD_MILESTONE_9.data.rewardDescription))
        })
        When("I click Claim", when.tapText(t("Claim")), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the first milestone complete and the other 2 incomplete", then.firstChallengeClaimedVisible)
            })
        })
        When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should see my new total yucoin earned today with the 1st milestone completed", then.yuCoinTodayEarned([210], 100))
        })
        When("I tap take a challenge", when.tapText(t("Take a challenge (%{challengesLeft} left today)", { challengesLeft: 3 })), async () => {
            Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(3)))
            Then("I should see the yucoin total updated with the claimed milestone YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1710)))
        })
        When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 2nd challenge

        When("I complete a brisk walk challenge", when.selectAndCompleteWalkingChallenge("brisk walk", 1200), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 50, (1200 + 400)))
        })
        When("I tap collect", when.tapText(t("Collect")), async () => {
            Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1710 + 50)))
        })
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see the longest number of steps I have done today", then.textVisible("1,200 steps"))
            Then("I should see I have earned YuCoin today from the walk", then.yuCoinTodayEarned([1210, 50]))
            Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and the correct milestone I am on", then.yuCoinPageEventDataCorrect(2, 0.5))
        })
        When("I tap on the event challenge", when.tapChallenge(data.GOALS_4.data.title), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(2, 0.5))
            Then("I should see not see claim available for the second milestone", then.textNotVisible("Claim"))
        })
        When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
            When("I tap take a challenge", when.tapText("Take a challenge (2 left today)"), async () => {
                Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(3)))
                Then("I should see the yucoin total still at 1770 as I have not reached or claimed the next milestone", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1760)))
            })
        })
        When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 3rd challenge

        When("I complete a long walk challenge", when.selectAndCompleteWalkingChallenge("long walk", 3000), async () => {
            Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(152, 60, (1600 + 3000)))
        })
        When("I tap collect", when.tapText(t("Collect")), async () => {
            Then("I should see the yucoin total updated with the challenge yucoin and daily step milestone yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1760 + 60 + 10)))
        })
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see the longest number of steps I have done today", then.textVisible("3,000 steps"))
            Then("I should see the yucoin page event bar showing the number of 3 star challenges completed and hit the correct milestone", then.yuCoinPageEventDataCorrect(3, 0.75))
            Then("I should see I have earned 60 and 10 YuCoin today from the walk", then.yuCoinTodayEarned([200, 1070, 10, 50]))
        })
        When("I tap on the event challenge", when.tapChallenge(data.GOALS_4.data.title), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(3, 0.75))
            Then("I should see Claim available for the first milestone", then.claimVisible(2))
        })
        When("I click Claim rewards", when.tapText(t("Claim rewards")), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage(data.GOALS_4.data.title, data.GOAL_REWARD_MILESTONE_10.data.rewardValue.toString(), 2, data.GOAL_REWARD_MILESTONE_10.data.rewardDescription))
        })
        When("I click Claim", when.tapText(t("Claim")), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the first and second milestones complete and the final one incomplete", then.firstAndSecondChallengeClaimedVisible)
            })
        })
        When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
            Then("I should see my new total yucoin earned today with the 2nd milestone completed", then.yuCoinTodayEarned([1270, 10, 50], 150))
        })
        When("I go back to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
            Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(3)))
            Then("I should see the yucoin total updated with the claimed milestone YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(3330)))
        })
        When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
            Then("I should be on the quest screen and see 5 challenges unlocked", then.allChallengesVisible)
            Then("I should see the yucoin value for the 5 unlocked challenges", then.challengesYuCoinValuesCorrect(6))
        })

        // 4th challenge

        When("I complete a meditation challenge at level 152", when.selectAndCompleteMeditationChallenge(600), async () => {
            Then("I am on the event completed page", then.onCompletedAllEventMilestonesPage(data.GOALS_4.data.title, data.GOAL_REWARD_MILESTONE_11.data.rewardDescription, data.GOAL_REWARD_MILESTONE_11.data.rewardTitle, data.GOAL_REWARD_MILESTONE_9.data.rewardTitle, data.GOAL_REWARD_MILESTONE_10.data.rewardTitle))
        })
        When("I click Claim", when.tapText(t("Claim")), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the third milestone complete", then.milestoneComplete(0))
            })
        })
        When("I click Great! button", when.tapText(t("Great!")), async () => {
            When("I tap level 152", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
                Then("I can see all my challenges done and yucoin earned", then.allChallengesAndYuCoinsAwardedVisible)
                Then("I should see all my total yucoin earned", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(5410)))
            })
        })
        When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                Then("I should see the longest number of steps I have done today", then.textVisible("3,000 steps"))
                Then("I should see meditation I have done today", then.textVisible("10 min"))
                Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"))
                Then("I should see all my total yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(5410)))
                Then("I should see I have earned 4,920 YuCoin today total from all milestones and challenges completed", then.yuCoinTodayEarned([50, 60, 60, 20, 200, 20], 450))
            })
        })
    })

    Scenario("Passive data is correctly logged for an event that has backfill enabled", scenario.start, async () => {
        Given("I login and go to yucoin page", given.logInAndGoToTab("yucoin", data.CUSTOMER_81, data.AUTH_81), async () => {
            Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN))
            Then("I should see I have done 0 steps today", then.textVisible("0 steps"))
        })
        When("I have done 75,001 steps yesterday", when.addStepsHistoricalData(4000), async () => {
            Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN))
        })
        When("I tap the menu icon", when.tapID(ids.MENU_ICON, 1500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
            Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
        })
        When("I pull down the activity history page to refresh", when.swipeFromText(twoDaysAgoDate, "down", "fast"), async () => {
            Then("I should see the historical steps from yesterday loaded in meaning the refresh has worked", then.canSeeYesterdaysSteps)
        })
        When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER(t("activity history"))), async () => {
            When("I join the challenge", when.tapText(t("Join")), async () => {
                When("I click confirm", when.tapText(t("Confirm")), async () => {
                    Then("I should be on the event screen", then.onEventDetailsScreen(data.GOALS_5))
                    Then("I should see 4,000 steps have been completed", then.textVisible("4,000 / 10,000 steps"))
                })
            })
        })
    })
})

