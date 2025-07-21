import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "../_data";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

const locale = process.env.TARGET_LOCALE || "en-US";

Feature("US: Referrals Page", async () => {
  Scenario("When I go to the leaderboard tab I should see the referrals section invite a colleague.", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("leaderboard", data.CUSTOMER_USA_5.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.LEADERBOARD_INFO_BUTTON, "up", "fast"), async () => {
        Then("I should see the leaderboard 'Invite a Colleague' section", then.idVisible(ids.LEADERBOARD_USER_REFERRAL));
      });
    });
  });
});
