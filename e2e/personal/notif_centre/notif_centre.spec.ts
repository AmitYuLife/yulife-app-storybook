import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import { AUTH_34, AUTH_CUSTOMER_LEAVER_NOTIF, CUSTOMER_34, CUSTOMER_LEAVER_CONCURRENT_NOTIF, CUSTOMER_LEAVER_NO_STORE_NOTIF, CUSTOMER_LEAVER_NOTIF } from "../_data";
import { INBOX_MESSAGE_ITEM, NOTIF_CENTRE, VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";

Feature("Notification centre", async () => {
  Scenario("I can access the notification centre", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", CUSTOMER_34, AUTH_34), async () => {
      Then("I should see 220 YuCoin in the top right hand corner", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      Then("I can see the notification centre icon is visible", then.idVisible(NOTIF_CENTRE));
    });
    When("I click on the notification centre", when.tapID(NOTIF_CENTRE), async () => {
      Then("I can see I am on the notification centre modal", then.amOnNotificationModal);
      Then("I can see the empty state for the modal", then.notifCentreEmptyStateVisible);
    });
  });

  Scenario("I should see the deactivation notifications once I'm deactivated", scenario.start, () => {
    Given("I deactivate the pending leaver", given.deactivatePendingLeaversByDate(CUSTOMER_LEAVER_NOTIF["business_employee_0"].data.businessAccountId, "team"), async () => {
      Given("I login", given.logInAndGoToTab("yucoin", CUSTOMER_LEAVER_NOTIF.customer, AUTH_CUSTOMER_LEAVER_NOTIF), async () => {
        Then("I can see the notification centre icon is visible", then.idVisible(NOTIF_CENTRE));
      });
    });
    When("I click on the notification centre", when.tapID(NOTIF_CENTRE), async () => {
      Then("I can see I am on the notification centre modal", then.amOnNotificationModal);
      Then("I can see the email update reminder notification", then.idVisible(INBOX_MESSAGE_ITEM("Keep your YuLife access")));
      Then("I can see the reward store grace period notification", then.idVisible(INBOX_MESSAGE_ITEM("Your store closes in 90 days")));
    });
    When("I click on the reward store grace period notification", when.tapID(INBOX_MESSAGE_ITEM("Your store closes in 90 days")), async () => {
      Then("I should be on the Rewards tab", then.idVisible(ids.REWARDS_SCREEN));
      Then("I should see the store grace period warning displaying the correct remaining dates", then.rewardAccessWarningVisible("89"));
    });
  });

  Scenario("As a user who does not have reward store access, I should not see the grace period deactivation notification", scenario.start, () => {
    Given("I deactivate the pending leaver", given.deactivatePendingLeaversByDate(CUSTOMER_LEAVER_NO_STORE_NOTIF["business_employee_0"].data.businessAccountId, "team"), async () => {
      Given("I login", given.logInAndGoToTab("yucoin", CUSTOMER_LEAVER_NO_STORE_NOTIF.customer, AUTH_CUSTOMER_LEAVER_NOTIF), async () => {
        Then("I can see the notification centre icon is visible", then.idVisible(NOTIF_CENTRE));
      });
    });
    When("I click on the notification centre", when.tapID(NOTIF_CENTRE), async () => {
      Then("I can see I am on the notification centre modal", then.amOnNotificationModal);
      Then("I can see the email update reminder notification", then.idVisible(INBOX_MESSAGE_ITEM("Keep your YuLife access")));
      Then("I can NOT see the reward store grace period notification", then.idNotVisible(INBOX_MESSAGE_ITEM("Your store closes in 90 days")));
    });
  });

  Scenario("As a user with concurrent employments, if my remaining employment still has reward store access, then I should not see the grace period notification", scenario.start, () => {
    Given("I deactivate the pending leaver", given.deactivatePendingLeaversByDate(CUSTOMER_LEAVER_CONCURRENT_NOTIF["business_employee_0"].data.businessAccountId, "team"), async () => {
      Given("I login", given.logInAndGoToTab("yucoin", CUSTOMER_LEAVER_CONCURRENT_NOTIF.customer, AUTH_CUSTOMER_LEAVER_NOTIF), async () => {
        Then("I can see the notification centre icon is visible", then.idVisible(NOTIF_CENTRE));
      });
    });
    When("I click on the notification centre", when.tapID(NOTIF_CENTRE), async () => {
      Then("I can see I am on the notification centre modal", then.amOnNotificationModal);
      Then("I can see the email update reminder notification", then.idVisible(INBOX_MESSAGE_ITEM("Keep your YuLife access")));
      Then("I can NOT see the reward store grace period notification", then.idNotVisible(INBOX_MESSAGE_ITEM("Your store closes in 90 days")));
    });
  });
});
