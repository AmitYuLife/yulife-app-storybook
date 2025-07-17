import { Feature, Given, Scenario, Then, When } from "@yu-life/yulife-bdd-framework";
import { navigation } from "@navigation";
import * as then from "./_steps/then";
import * as scenario from "../admin/_common/scenario";
import * as data from "../admin/_data";
import * as ids from "@ids";

Feature("[HEALTH-CHECK TEST] - As a user I can get past the login screen", async () => {
  Scenario("I can login with correct login detail and see the connection setup for daily activities", scenario.start, async () => {
    Given("I have entered a valid email address and valid password", navigation.login.loginOnly(data.CUSTOMER_2, data.AUTH_2, true), async () => {
      Then("I should not longer be on the login screen", then.notOnLoginScreen);
      Then("I should see the signup reward screen", then.signupRewardVisible);
    });
    When("I tap let's go", navigation.common.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN")), async () => {
      Then("I should see a prompt to connect to the health app", then.connectionSetupScreenVisible);
    });
    When("I tap X to skip connection", navigation.common.tapID(ids.BUTTON_CLOSE), async () => {
      Then("[FAIL CASE - DO NOT FIX] - I should see my total yucoin balance of xxxxx", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1)));
      Then("I can see the health sync component", then.healthDataSyncComponent);
    });
  });
});
