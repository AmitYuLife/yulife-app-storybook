import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as helper from "./_steps/helpers";
import { CUSTOMER_DENTAL_2, AUTH_DENTAL_2 } from "@data";

Feature("DENTAL SAD", async () => {
  Scenario("I should see a notification that my policy is Cancelled", scenario.start, async () => {
    Given(
      "I login as a user with Bupa Dental product approved but Cancelled",
      given.loginToYuScreen(false, CUSTOMER_DENTAL_2, AUTH_DENTAL_2),
      async () => {
        helper.CANCELED_DENTAL_POLICY();
        helper.PACKAGE_COVERING("Common");
        helper.BUPA_CLAIM();
        helper.FAQ();
        helper.PAYMENT_HISTORY("£12.99", "Failed");
      }
    );
  });
});
