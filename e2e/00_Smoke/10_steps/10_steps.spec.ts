import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario"
import * as given from "./_steps/given"
import * as when from "./_steps/when"
import * as then from "./_steps/then"
import { NAV_BAR, MENU_ICON, ACTIVITY_HISTORY_SCREEN, BUTTON_CLOSE_HEADER, LEADERBOARD_TITLE, STEPS_COUNT, DUELS_BUTTON } from "@ids";
import { CUSTOMER_40, AUTH_40, USER_40_LEADERBOARD } from "@data";

Feature("As a user my steps are monitored correctly", async () => {
    
    Scenario("Leaderboard is reset and duels are unavailable if I walk a => 75k steps average over 5 consecutive days within the last 5 days", scenario.start, async () => {
        Given("I login", given.loginToYuScreen(false, CUSTOMER_40, AUTH_40), async () => {
            When("I go back to the yucoin tab", when.tapID(NAV_BAR("yucoin"), 3000), async () => {
                Then("I should see my steps today as 0", then.idVisible(STEPS_COUNT(0)))
            })
            When("I have done 75,000 steps over every day over the last 4 days", when.addSteps4DaysHistoricalData(75000), async () => {
                Then("I should still see 0 steps for today", then.idVisible(STEPS_COUNT(0)));
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
            When("I scroll down this page", when.swipeFromText("07", "down", "fast"), async () => {
                Then("I should see the historical steps loaded in", then.canSee4DaysHistoricalSteps)
            })
            When("I go back", when.tapID(BUTTON_CLOSE_HEADER("activity history")), async () => {
                Then("I should be the yucoin tab", then.onDailySteps)
            })
            When("I go to the leaderboard screen", when.tapID(NAV_BAR("leaderboard")), async () => {
                Then("I should see the leaderboard consent screen as my leaderboard has been reset", then.onLeaderboardConsent)
                When("I tap 'Yes'", when.tapText("Yes"), async () => {
                    Then("I should see the leaderboard title", then.idVisible(LEADERBOARD_TITLE(USER_40_LEADERBOARD.data.name)))
                    Then("I should not see the duel button on the leaderboard screen", then.idNotVisible(DUELS_BUTTON))
                })
            })
        })
    })
})
