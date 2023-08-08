import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import * as ids from "@ids";
import * as data from "@data";
import { twoDaysAgoDate } from "./_resources/consts"
import { getLocalisedString as t } from "@i18n";

Feature("As a user my activity is monitored correctly", async () => {
    Scenario("Leaderboard is reset and duels are unavailable if I walk >= 75k steps average over 5 consecutive days within the last 5 days", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(false, data.CUSTOMER_40, data.AUTH_40), async () => {
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                Then("I should see my steps today as 0", then.idVisible(ids.STEPS_COUNT(0)))
            })
            When("I have done 3 days of 75,000 steps from 4 days ago", when.addSteps3DaysHistoricalData(75000), async () => {
                When("I have done 75,001 steps yesterday", when.addStepsHistoricalData(75001), async () => {
                    Then("I should still see 0 steps for today", then.idVisible(ids.STEPS_COUNT(0)));
                })
            })
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.LEADERBOARD_2.data.name)))
                Then("I should see the duel button on the leaderboard screen", then.idVisible(ids.DUELS_BUTTON))
            })
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                When("I have done 75,000 steps", when.sendSteps(75000, 3000), async () => {
                    Then("I should see 75,000 steps", then.idVisible(ids.STEPS_COUNT(75000)));
                })
            })
            When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
                Then("I should see the menu items", then.menuItemsVisible)
            })
            When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
                Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
            })
            When("I pull down the activity history page to refresh", when.swipeFromText(twoDaysAgoDate, "down", "fast"), async () => {
                Then("I should see the historical steps from yesterday loaded in meaning the refresh has worked", then.canSeeYesterdaysSteps)
            })
            When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER(t("activity history"))), async () => {
                Then("I should be the yucoin tab", then.onDailySteps)
            })
            When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen as my leaderboard has been reset", then.onLeaderboardConsent)
            })
            When("I tap 'Yes'", when.tapText(t("Yes")), async () => {
                Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.LEADERBOARD_2.data.name)))
                Then("I should not see the duel button on the leaderboard screen", then.idNotVisible(ids.DUELS_BUTTON))
            })
        })
    })

    Scenario("I can do 32 days of steps and see the data queried and displayed correctly", scenario.start, async () => {
        When("I have done 32 days of steps", when.addSteps32DaysHistoricalData(2000), async () => {
            Given("I login", given.loginToYuScreen(false, data.CUSTOMER_66, data.AUTH_66), async () => {
                When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should see my steps today as 0", then.idVisible(ids.STEPS_COUNT(0)))
                })
            })
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
            Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see all steps from the past 32 days ago loaded in", then.activityHistoryScrollStepDataCorrect)
        })
    })

    Scenario("I can do 32 days of cycling and see the data queried and displayed correctly", scenario.start, async () => {
        When("I have done 32 days of cycling", when.addCycling32DaysHistoricalData(3000), async () => {
            Given("I login", given.loginToYuScreen(false, data.CUSTOMER_66, data.AUTH_66), async () => {
                When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should see my steps today as 0", then.idVisible(ids.STEPS_COUNT(0)))
                })
            })
        })
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
            Then("I should not see cycling distance displayed on my yuscreen", then.idNotVisible(ids.CYCLING_COUNT("0 km")))
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
            Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see all km cycled from the past 32 days ago loaded in", then.activityHistoryScrollCyclingDataCorrect)
        })
    })

    Scenario("I can do 32 days of meditation and see the data queried and displayed correctly", scenario.start, async () => {
        When("I have done 32 days of meditating", when.addMins32DaysHistoricalData(300), async () => {
            Given("I login", given.loginToYuScreen(false, data.CUSTOMER_66, data.AUTH_66), async () => {
                When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should not see any mindfulness mins displayed for today", then.idNotVisible(ids.MINDFUL_COUNT("0 min")))
                })
            })
        })
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
            Then("I should see the menu items", then.menuItemsVisible)
        })
        When("I tap activity history", when.tapID(ids.MENU_ITEM(t("Activity History"))), async () => {
            Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
            Then("I should see all mindful minutes from the past 32 days ago loaded in", then.activityHistoryScrollMinsDataCorrect)
        })
    })

    Scenario("I can see my activity history successfully updates after 5 days of inactivity", scenario.start, async () => {
        Given("I add 5 days of steps data", given.addStepsHistoricalDataMulitple(4000, 5), async () => {
            When("I login", when.loginToYuScreen(false, data.CUSTOMER_83, data.AUTH_83), async () => {
                When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
                    Then("I should see my steps today are at 0", then.idVisible(ids.STEPS_COUNT(0)))
                })
                When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
                    Then("I should see the menu items", then.menuItemsVisible)
                })
                When("I tap on activity history", when.tapMenuItem(t("Activity History")), async () => {
                    Then("I should be on the activity history page", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500))
                    Then("I should be able to see the steps from the last 5 days are being successfully displayed", then.canSeeHistoricalSteps(5, 4000))
                    Then("I should be able to see the completed challenge from the sixth day, which is seeded data", then.scrollUntilTextVisible(ids.ACTIVITY_HISTORY_SCREEN_SCROLL, "Short Stroll / 125 steps", "down"))
                })
            })
        })
    })
})


