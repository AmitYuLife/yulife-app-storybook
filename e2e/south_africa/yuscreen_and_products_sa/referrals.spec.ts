import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as given from "./_steps/given";
import * as scenario from "./_steps/scenario";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import { AUTH_SA_3 } from "../_data/mongo/auths";
import { CUSTOMER_SA_3 } from "../_data";
import * as ids from "@ids";

Feature("SA: Referrals Page", async () => {
  Scenario("When I go to the leaderboard tab I should see the referrals section invite a colleague.", scenario.start, async () => {
    Given("I login as a user", given.logInAndGoToTab("leaderboard", CUSTOMER_SA_3, AUTH_SA_3, true, "SA"), async () => {
      When("I scroll to the bottom", when.scrollFromID(ids.LEADERBOARD_INFO_BUTTON, "up", "fast"), async () => {
        Then("I should see the leaderboard 'Invite a Colleague' section", then.idVisible(ids.LEADERBOARD_USER_REFERRAL));
      });
    });
  });
});
