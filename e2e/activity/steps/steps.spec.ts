import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import { twoDaysAgoDate } from "./_resources/consts";
import { getLocalisedString as t } from "@i18n";

Feature("As a user my activity is monitored correctly", async () => {
  Scenario("Leaderboard is reset and duels are unavailable if I walk >= 75k steps average over 5 consecutive days within the last 5 days", scenario.start, async () => {
    Given("I login", given.loginToYuScreen(false, data.CUSTOMER_40, data.AUTH_40), async () => {
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
        Then("I should see my steps today as 0", then.idVisible(ids.STEPS_COUNT(0)));
      });
      When("I have done 3 days of 75,000 steps from 4 days ago", when.addSteps3DaysHistoricalData(75000), async () => {
        When("I have done 75,001 steps yesterday", when.addStepsHistoricalData(75500), async () => {
          Then("I should still see 0 steps for today", then.idVisible(ids.STEPS_COUNT(0)));
        });
      });
      When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        Then("I should be on the leaderboard screen", then.textVisible("Angela Martin"));
        Then("I should see the duel button on the leaderboard screen", then.idVisible(ids.DUELS_BUTTON));
      });
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
        When("I have done 75,000 steps", when.sendSteps(75000, 3000), async () => {
          Then("I should see 75,000 steps", then.idVisible(ids.STEPS_COUNT(75000)));
        });
      });
      When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
        Then("I should see the menu items", then.menuItemsVisible("enhanced"));
      });
      When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
        Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500));
      });
      When("I refresh the activity history page", when.tapID(ids.LEFT_HEADING_BUTTON("Activity history"), 2000), async () => {
        Then("I should see the historical steps from yesterday loaded in meaning the refresh has worked", then.canSeeYesterdaysSteps);
      });
      When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER("Activity history")), async () => {
        Then("I should be the yucoin tab", then.onDailySteps());
      });
      When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
        When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
          Then("I should see the join the leaderboard button", then.idVisible(ids.LEADEADRBOARD_JOIN_BUTTON, 2000));
          Then("I should not see the duel button on the leaderboard screen", then.idNotVisible(ids.DUELS_BUTTON));
        });
      });
    });
  });

  Scenario("I can do 28 days of steps and see the data queried and displayed correctly", scenario.start, async () => {
    When("I have done 28 days of steps in the past month", when.addSteps28DaysHistoricalData(2000), async () => {
      Given("I login", given.loginToYuScreen(false, data.CUSTOMER_66, data.AUTH_66), async () => {
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
          Then("I should see my steps today as 0", then.idVisible(ids.STEPS_COUNT(0)));
        });
      });
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      Then("I should see the menu items", then.menuItemsVisible("enhanced"));
    });
    When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
      Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500));
    });
    When("I tap the previous month", when.tapPreviousMonth(), async () => {
      Then("I should see all steps from the past 28 days ago loaded in", then.activityHistoryScrollStepDataCorrect(2000, 28));
    });
  });

  Scenario("I can do 28 days of cycling and see the data queried and displayed correctly", scenario.start, async () => {
    When("I have done 28 days of cycling in the past month", when.addCycling28DaysHistoricalData(3000), async () => {
      Given("I login", given.loginToYuScreen(false, data.CUSTOMER_66, data.AUTH_66), async () => {
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
          Then("I should see my steps today as 0", then.idVisible(ids.STEPS_COUNT(0)));
        });
      });
    });
    When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I should not see cycling distance displayed on my yuscreen", then.idNotVisible(ids.CYCLING_COUNT("0 km")));
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      Then("I should see the menu items", then.menuItemsVisible("enhanced"));
    });
    When("I tap activity history", when.tapMenuItem(t("Activity History")), async () => {
      When("I tap the previous month", when.tapPreviousMonth(), async () => {
        Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500));
        Then("I should see all km cycled from the past 28 days ago loaded in", then.activityHistoryScrollCyclingDataCorrect(3000, 28));
      });
    });
  });

  Scenario("I can do 28 days of meditation and see the data queried and displayed correctly", scenario.start, async () => {
    When("I have done 28 days of meditating in the past month", when.addMins28DaysHistoricalData(4), async () => {
      Given("I login", given.loginToYuScreen(false, data.CUSTOMER_66, data.AUTH_66), async () => {
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
          Then("I should not see any mindfulness mins displayed for today", then.idNotVisible(ids.MINDFUL_COUNT("0 min")));
        });
      });
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      Then("I should see the menu items", then.menuItemsVisible("enhanced"));
    });
    When("I tap activity history", when.tapID(ids.MENU_ITEM(t("Activity History"))), async () => {
      When("I tap the previous month", when.tapPreviousMonth(), async () => {
        Then("I should be on activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500));
        Then("I should see all mindful minutes from the past 28 days ago loaded in", then.activityHistoryScrollMinsDataCorrect(4));
      });
    });
  });

  Scenario("I can see my activity history successfully updates after 5 days of inactivity", scenario.start, async () => {
    Given("I add 5 days of steps data", given.addStepsHistoricalDataMulitple(4000, 5), async () => {
      When("I login", when.loginToYuScreen(false, data.CUSTOMER_83, data.AUTH_83), async () => {
        When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
          Then("I should see my steps today are at 0", then.idVisible(ids.STEPS_COUNT(0)));
        });
        When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
          Then("I should see the menu items", then.menuItemsVisible("basic"));
        });
        When("I tap on activity history", when.tapMenuItem(t("Activity History")), async () => {
          Then("I should be on the activity history page", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500));
          Then("I should be able to see the steps from the last 5 days are being successfully displayed", then.canSeeHistoricalSteps(5, 4000));
          Then("I should be able to see the completed challenge from the sixth day, which is seeded data", then.scrollUntilTextVisible(ids.ACTIVITY_HISTORY_SCREEN, "Short Stroll 125 Steps", "down"));
        });
      });
    });
  });
});
