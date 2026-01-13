import { Feature, Given, Scenario, Then, When } from "@yu-life/yulife-bdd-framework";
import { navigation } from "@navigation";
import * as then from "./_steps/then";
import * as scenario from "../admin/_common/scenario";
import * as data from "../admin/_data";
import * as ids from "@ids";
import { GENERIC_AUTH_PASSWORD } from "../_utils/users/auth";

Feature("As a user I can perform a quick healthcheck of the app for testing purposes", async () => {
  Scenario("I can login with correct login detail and see the connection setup for daily activities", scenario.start, async () => {
    Given("I have entered a valid email address and valid password", navigation.login.loginAsUser(data.CUSTOMER_2.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I do something", [], () => {
        Then("I should not longer be on the login screen", then.notOnLoginScreen);
        Then("I should see the signup reward screen", then.signupRewardVisible);
        Then("I can see the health sync component", then.healthDataSyncComponent);
      });
    });
    When("I tap on the rewards tab", navigation.common.tapText("Rewards"), async () => {
      When("I confirm my location selection", navigation.common.tapText("Confirm selection"), async () => {
        // Should fail, do not fix
        Then("I should see my total yucoin balance of 1", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1)));
      });
    });
    When("I tap on the quest tab", navigation.common.tapText("Quests"), async () => {
      Then("I should see the quest screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    // Should fail, do not fix
    When("I tap on something that doesn't exist", navigation.common.tapText("This is not a valid text"), async () => {
      // Should fail, do not fix
      Then("I should see an error message", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1)));
    });
  });
});
