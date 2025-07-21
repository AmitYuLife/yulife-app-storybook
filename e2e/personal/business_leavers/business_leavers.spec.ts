import { Given, When, Then, Feature, Scenario, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { getFullName } from "_utils/users";

Feature("As a business leaver I should still have app access", async () => {
  Scenario("As a business leaver with no personal products, I should still have app access", scenario.start, () => {
    Given("I trigger the free product worker", given.triggerFreeProduct, async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(9), async () => {
        When("I login", when.logInAndGoToTab("yu", data.CUSTOMER_LEAVER, data.AUTH_LEAVER), async () => {
          Then("I should see the new header section", then.yuScreenV5HeaderVisible(false, "Bus Leaf", "Mountain", "399", true));
          Then("Even with the referral setting enabled, I should not see the referral button, as I am a leaver", then.idNotVisible(ids.REFERRAL_BUTTON("Invite a colleague")));
        });
      });
    });
    When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
      When("I wait", when.wait(2000), async () => {
        Then("I should see the users full name", then.idVisible(ids.LEADERBOARD_NAME("Bus Leaf", 0, 1, "#464647")));
        Then("I should see this is the public leaderboard", then.idVisible(ids.LEADERBOARD_TITLE("Public")));
      });
    });
    When("I tap search", when.tapID(ids.SEARCH_BUTTON), async () => {
      When("I search for a different leaver", when.searchLeaderboard(data.CUSTOMER_126_LEAVER_WELLBEING.data.firstName), async () => {
        Then("I can still see that user in the list", then.idVisible(ids.SEARCH_RESULTS([getFullName(data.CUSTOMER_126_LEAVER_WELLBEING)]), 2000));
      });
    });
    When("I tap the leaver", when.tapText(getFullName(data.CUSTOMER_126_LEAVER_WELLBEING)), async () => {
      Then("I should be on the Inspect screen", then.idVisible(ids.INSPECT_SCREEN));
      Then("The leaver's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_126_LEAVER_WELLBEING))));
    });
  });

  Scenario("As a business leaver, I should retain access to the reward store for 90 days before it expires", scenario.start, () => {
    Given("I trigger the deactivate employee worker", given.triggerDeactivateEmployee(data.BUSINESS_EMPLOYEE_STORE_ACCESS_PERIOD), async () => {
      When("I login", when.logInAndGoToTab("rewards", data.CUSTOMER_STORE_ACCESS_PERIOD, data.AUTH_STORE_ACCESS_PERIOD, true), async () => {
        Then("I should see the modal to select store location", then.idVisible(ids.REWARDS_LOCATION_CONFIRM, 1500));
      });
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 1500), async () => {
      Then("I should be on the Rewards tab", then.idVisible(ids.REWARDS_SCREEN));
      Then("I should see the store grace period warning displaying the correct remaining dates", then.rewardAccessWarningVisible("89"));
    });
  });

  Scenario("As a business leaver, I should not be able to have access on the reward store when the access has expired", scenario.start, () => {
    When("I login", when.logInAndGoToTab("rewards", data.CUSTOMER_STORE_ACCESS_DENIED, data.AUTH_STORE_ACCESS_DENIED, true), async () => {
      Then("I should see that the reward store is not available anymore", then.idVisible(ids.REWARDS_UNAVAILABLE_PURCHASE_HISTORY, 1500));
    });
  });

  Scenario("As a business leaver who never had access to the rewards store, I should not receive access during the 90-day grace period", scenario.start, () => {
    // After triggering the deactivateEmployee worker, the user who previously did not have access to the rewards store should still not have access during the 90-day grace period
    Given("I trigger the deactivate employee worker", given.triggerDeactivateEmployee(data.BUSINESS_EMPLOYEE_STORE_ACCESS_NEVER), async () => {
      When("I login", when.logInAndGoToTab("rewards", data.CUSTOMER_STORE_ACCESS_NEVER, data.AUTH_STORE_ACCESS_NEVER, true), async () => {
        Then("I should see that the reward store is still not available for this user", then.idVisible(ids.REWARDS_UNAVAILABLE_PURCHASE_HISTORY, 1500));
      });
    });
  });
});
