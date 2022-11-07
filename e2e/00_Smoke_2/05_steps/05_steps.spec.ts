import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { NAV_BAR, MENU_ICON, ACTIVITY_HISTORY_SCREEN, BUTTON_CLOSE_HEADER, LEADERBOARD_TITLE, STEPS_COUNT, DUELS_BUTTON, CYCLING_COUNT, MINDFUL_COUNT } from "@ids";
import { CUSTOMER_40, AUTH_40, USER_40_LEADERBOARD, CUSTOMER_66, AUTH_66 } from "@data";
import { twoDaysAgoDate } from "./_steps/consts"


Feature("As a user my activity is monitored correctly", async () => {
    Scenario("Leaderboard is reset and duels are unavailable if I walk >= 75k steps average over 5 consecutive days within the last 5 days", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(false, CUSTOMER_40, AUTH_40), async () => {
            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                Then("I should see my steps today as 0", then.idVisible(STEPS_COUNT(0)))
            })
            When("I have done 3 days of 75,000 steps from 4 days ago", when.addSteps3DaysHistoricalData(75000), async () => {
                When("I have done 75,001 steps yesterday", when.addStepsHistoricalData(75001), async () => {
                    Then("I should still see 0 steps for today", then.idVisible(STEPS_COUNT(0)));
                })
            })
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_40_LEADERBOARD.data.name)))
                Then("I should see the duel button on the leaderboard screen", then.idVisible(DUELS_BUTTON))
            })
            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                When("I have done 75,000 steps", when.sendSteps(75000, 3000), async () => {
                    Then("I should see 75,000 steps", then.idVisible(STEPS_COUNT(75000)));
                })
            })
            When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
                Then("I should see the menu items", then.menuItemsVisible)
            })
            When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
                Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
            })
            When("I pull down the activity history page to refresh", when.swipeFromText(twoDaysAgoDate, "down", "fast"), async () => {
                Then("I should see the historical steps from yesterday loaded in meaning the refresh has worked", then.canSeeYesterdaysSteps)
            })
            When("I go back", when.tapID(BUTTON_CLOSE_HEADER("activity history")), async () => {
                Then("I should be the yucoin tab", then.onDailySteps)
            })
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen as my leaderboard has been reset", then.onLeaderboardConsent)
            })
            When("I tap 'Yes'", when.tapText("Yes"), async () => {
                Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_40_LEADERBOARD.data.name)))
                Then("I should not see the duel button on the leaderboard screen", then.idNotVisible(DUELS_BUTTON))
            })
        })
    })

    Scenario("I can do 32 days of steps and see the data queried and displayed correctly", scenario.start, async () => {
        When("I have done 32 days of steps", when.addSteps32DaysHistoricalData(2000), async () => {
            Given("I login", given.loginToYuScreen(false, CUSTOMER_66, AUTH_66), async () => {
                When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should see my steps today as 0", then.idVisible(STEPS_COUNT(0)))
                })
            })        
        })
        When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
            Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see all steps from the past 32 days ago loaded in", then.activityHistoryScrollStepDataCorrect)
        })
    })

    Scenario("I can do 32 days of cycling and see the data queried and displayed correctly", scenario.start, async () => {
        When("I have done 32 days of cycling", when.addCycling32DaysHistoricalData(3000), async () => {
            Given("I login", given.loginToYuScreen(false, CUSTOMER_66, AUTH_66), async () => {
                When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should see my steps today as 0", then.idVisible(STEPS_COUNT(0)))
                })
            })
        })
        When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
            Then("I should not see cycling distance displayed on my yuscreen", then.idNotVisible(CYCLING_COUNT("0 km")))
        })
        When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
            Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see all km cycled from the past 32 days ago loaded in", then.activityHistoryScrollCyclingDataCorrect)
        })
    })

    Scenario("I can do 32 days of meditation and see the data queried and displayed correctly", scenario.start, async () => {
        When("I have done 32 days of meditating", when.addMins32DaysHistoricalData(300), async () => {
            Given("I login", given.loginToYuScreen(false, CUSTOMER_66, AUTH_66), async () => {
                When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should not see any mindfulness mins displayed for today", then.idNotVisible(MINDFUL_COUNT("0 min")))
                })
            })
        })
        When("I tap the menu icon in the top left", when.tapID(MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem("Activity History"), async () => {
            Then("I should be on activity history", then.idVisible(ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see all mindful minutes from the past 32 days ago loaded in", then.activityHistoryScrollMinsDataCorrect)
        }) 
    })
})
    

