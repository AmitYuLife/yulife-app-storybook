import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as helper from "./_steps/helpers";
import { CUSTOMER_DENTAL_2, AUTH_DENTAL_2, CUSTOMER_85, AUTH_85 } from "@data";

Feature("DENTAL SAD", async () => {
  Scenario("I should see a notification that my policy is Cancelled", scenario.start, async () => {
    Given("I login as a user with Bupa Dental product approved but Cancelled",given.loginToYuScreen(false, CUSTOMER_DENTAL_2, AUTH_DENTAL_2), async () => {
        helper.CANCELED_DENTAL_POLICY();
        helper.PACKAGE_COVERING("Common");
        helper.BUPA_CLAIM();
        helper.PAYMENT_HISTORY("£12.99", "Failed");
        helper.FAQ();
      }
    );
  });

  Scenario("Canceled Dental", scenario.start, async () => {
    Given("I login as a user who got Dental canceled, should not see Dental slot or buy Dental again",given.loginToYuScreen(false, CUSTOMER_85, AUTH_85),async () => {
        Then(`I should be on YuScreen V4 and see cancelled Dental case `, then.onYuscreenV4(CUSTOMER_85, "cancelledDental", "0"));
      })
    })
});
