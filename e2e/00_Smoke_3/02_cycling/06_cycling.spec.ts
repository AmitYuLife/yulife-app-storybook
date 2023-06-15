import { Feature, Scenario, Given, When, Then, FeatureOnly, FeatureSkip, ScenarioSkip, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_cycling/scenario"
import * as given from "./_cycling/given"
import * as when from "./_cycling/when"
import * as then from "./_cycling/then"
import { NAV_BAR, MENU_ICON, ACTIVITY_HISTORY_SCREEN, BUTTON_CLOSE_HEADER, CYCLING_COUNT, DAILY_STEPS_SCREEN, BACK_BUTTON } from "@ids";
import { CUSTOMER_65, AUTH_65, CUSTOMER_71, AUTH_71, USER_71, GOAL_REWARD_MILESTONE_6, GOAL_REWARD_MILESTONE_7, GOAL_REWARD_MILESTONE_8 } from "@data";
Feature("As a user my cycling distance is monitored correctly", async () => {
    // please keep this ScenarioSkip in for now
    ScenarioSkip("I cycled to work for a week and should see my data correctly stored", scenario.start, async () => {
        Given("I login as a user with 3 days worth of cycling data from 4 days ago", given.loginToYuScreen(false, CUSTOMER_65, AUTH_65), async () => {
            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(CYCLING_COUNT("km")))
            })
        })
        When("I have done 7.5 km today", when.addCyclingData(7500), async () => {
            When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
                When("I wait", when.wait(10000), async () => {
                    When("I tap awesome", when.tapText("Awesome"), async () => {
                        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                            Then("I should see 7.5km cycled", then.idVisible(CYCLING_COUNT("7.5 km")))
                        })
                    })
                })
            })
        })
        When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
            Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see the historical cycle records from the previous 3 days loaded in meaning the refresh has worked", then.canSeePreviousDaysCycling)
        })
        When("I go back", when.tapID(BUTTON_CLOSE_HEADER("activity history")), async () => {
            Then("I should be on the yucoin tab and can see daily cycling", then.onDailyCycling("7.5 km", 40))
        })
    })

    Scenario("I can take and complete a cycling event and hit all the event milestones", scenario.start, async () => {
        Given("I login and go to rewards", given.logInAndGoToTab("yucoin", CUSTOMER_71, AUTH_71), async () => {
            Then("I should be on the yucoin screen", then.idVisible(DAILY_STEPS_SCREEN))
            Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(CYCLING_COUNT("km")))
            Then("I should see the correct cycling event for me to complete and the progress bar", then.cyclingEventToBeCompletedVisible(0, 0))
        })
        When("I click on the event challenge 10,000 rides", when.tapChallenge("0 / 10,000 rides"), async () => {
            Then("I should be on the event screen and see the correct earn rates for the challenges", then.onCyclingEventDetailsScreen)
        })
        When("I tap take cycling ride", when.tapText("Take cycling ride"), async () => {
            When("I have done 2 km today", when.addCyclingData(2000), async () => {
                When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
                    When("I wait", when.wait(10000), async () => {
                        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                            Then("I should see 2 km cycled", then.idVisible(CYCLING_COUNT("2.0 km")))
                            Then("I should see I have earned 10 YuCoin from the cycle", then.textVisible("210 YuCoin today"))
                        })
                    })
                })
            })
        })
        When("I click on the event challenge 10,000 rides", when.tapChallenge("0 / 10,000 rides"), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(2000, 0.2))
            Then("I should see Claim available for the first milestone", then.claimVisible(1))
        })
        When("I click Claim rewards CTA", when.tapText("Claim rewards"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("50", 1))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the first milestone complete", then.milestoneComplete(0))
            })
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(2000, 0.2))
            Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(210, USER_71.data.earnRate, GOAL_REWARD_MILESTONE_6.data.rewardValue))
        })
        When("I have done 3 km today", when.addCyclingData(3000), async () => {
            When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
                When("I wait", when.wait(10000), async () => {
                    When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                        Then("I should see 5 km cycled", then.idVisible(CYCLING_COUNT("5.0 km")))
                        Then("I should see I have earned 20 YuCoin from the cycle", then.textVisible("730 YuCoin today"))
                    })
                })
            })
        })
        When("I click on the event challenge 10,000 rides", when.tapChallenge("2,000 / 10,000 rides"), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(5000, 0.5))
            Then("I should see Claim available for the first milestone", then.claimVisible(2))
        })
        When("I click Claim", when.tapText("Claim rewards"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("100", 2))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the second milestone complete", then.milestoneComplete(1))
            })
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(5000, 0.5))
            Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(730, USER_71.data.earnRate, GOAL_REWARD_MILESTONE_7.data.rewardValue))
        })
        When("I have done 5 km today", when.addCyclingData(5000), async () => {
            When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
                When("I wait", when.wait(10000), async () => {
                    When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                        Then("I should see 10 km cycled", then.idVisible(CYCLING_COUNT("10.0 km")))
                        Then("I should see I have earned 30 YuCoin from the cycle", then.textVisible("1,760 YuCoin today"))
                    })
                })
            })
        })
        When("I click on the event challenge 10,000 rides", when.tapChallenge("5,000 / 10,000 rides"), async () => {
            Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("150", 3))
        })
        When("I click Claim", when.tapText("Claim"), async () => {
            When("I wait", when.wait(5000), async () => {
                Then("I should see the third milestone complete", then.milestoneComplete(0))
            })
        })
        When("I click Great! button", when.tapText("Great!"), async () => {
            Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(10000, 1))
            Then("I should see all 3 milestones complete", then.allChallengesCompleteVisible)
        })
        When("I click the back button", when.tapID(BACK_BUTTON), async () => {
            Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(1760, USER_71.data.earnRate, GOAL_REWARD_MILESTONE_8.data.rewardValue))
            Then("I should see 10 km cycled", then.idVisible(CYCLING_COUNT("10.0 km")))
        })
    })
})
