import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import { healthPathUnlockedCopy } from "engagement_surveys/_resources/fixtures";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("Health Pathways", async () => {
  Scenario("Pathways initial state loads correctly with no reflections completed", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_9.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 5_000), async () => {
        Then("I should see the 'Today's Reflection' hero card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 5_000));
        Then("I should see the correct description on the hero card", then.textVisible(healthPathUnlockedCopy, 2_000));
      });
    });
    When("I tap the 'Today's Reflection' hero card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("I should see the Pathways streaks", then.idVisible(ids.PATHWAYS_STREAKS, 3_000));
      Then("I should see all streak days marked as 'not completed'", then.assertStreakDayState(0));
      Then("I should see the reflection items with the correct status", async () => {
        then.idVisible(ids.PATHWAYS_REFLECTION_ITEMS(4));
        then.idVisible(ids.PATHWAYS_REFLECT_CHEST("locked"));
        then.idVisible(ids.PATHWAYS_REFLECTION_ITEM(0, "active"));
        then.assertReflectionItemsStatus(1, 4, "locked");
      });
    });
    When("I scroll down to the 'Your Mood' section", when.scrollFromID(ids.PATHWAYS_SCREEN, "up", "fast", 0.5, 2_000), async () => {
      Then("I should see the mood week view", then.idVisible(ids.MOOD_WEEK_VIEW));
      Then("I should see today marked as 'not completed' in the mood view", then.idVisible(ids.MOOD_TODAY_COMPLETED(false)));
    });
    When("I tap to view the calendar", when.tapID(ids.MOOD_VIEW_CALENDAR, 2_000), async () => {
      Then("I should see today marked as 'not completed' in the calendar", then.idVisible(ids.MOOD_VIEW_CALENDAR_TODAY_COMPLETED(false)));
    });
    When("I tap to go back", when.tapID(ids.BUTTON_CLOSE_HEADER("Mood Calendar"), 2_000), async () => {
      Then("I should land back on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
    });
  });
});
