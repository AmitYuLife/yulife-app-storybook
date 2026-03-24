import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import * as scenario from "./_common/scenario";
import * as given from "./_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "./_data";
import * as ids from "@ids";

Feature("Cash Plan Reward and Product Details Page Experience", async () => {
  Scenario("Core cash plan policyholder does NOT see the reward store", scenario.start, async () => {
    Given("I login as the Core cash plan policyholder", given.loginAsUser(data.CUSTOMER_CASH_CORE.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the rewards tab", when.goToRewardsTab, async () => {
        Then("I should NOT see the reward store list", then.idNotVisible(ids.SHOPFRONT_REWARDS_LIST, 5000));
      });
    });
  });

  Scenario("Epic cash plan policyholder sees the reward store", scenario.start, async () => {
    Given("I login as the Epic cash plan policyholder", given.loginAsUser(data.CUSTOMER_CASH_EPIC.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the rewards tab", when.goToRewardsTab, async () => {
        Then("I should see the reward store", then.idVisible(ids.SHOPFRONT_REWARDS_LIST, 7000));
      });
    });
  });

  Scenario("Core cash plan dependant does NOT see the reward store", scenario.start, async () => {
    Given("I login as a Core cash plan dependant", given.loginAsUser(data.CUSTOMER_CASH_CORE["dependant_customer_0"], GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the rewards tab", when.goToRewardsTab, async () => {
        Then("I should NOT see the reward store list", then.idNotVisible(ids.SHOPFRONT_REWARDS_LIST, 5000));
      });
    });
  });

  Scenario("Epic cash plan dependant sees the reward store", scenario.start, async () => {
    Given("I login as an Epic cash plan dependant", given.loginAsUser(data.CUSTOMER_CASH_EPIC["dependant_customer_0"], GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the rewards tab", when.goToRewardsTab, async () => {
        Then("I should see the reward store", then.idVisible(ids.SHOPFRONT_REWARDS_LIST, 7000));
      });
    });
  });

  Scenario("Core policyholder sees all dependant names on product details", scenario.start, async () => {
    Given("I login as the Core cash plan policyholder", given.loginAsUser(data.CUSTOMER_CASH_CORE.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to YuScreen", when.tapID(ids.NAV_BAR("yu"), 2000), async () => {
        When("I scroll to the cash plan product", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health cash plan"), "down"), async () => {
          When("I tap the cash plan product", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health cash plan")), async () => {
            When("I scroll down to see dependants", when.scrollUntilIdVisible(ids.PRODUCT_DETAILS_SCROLL_VIEW, ids.FEATURES_CONTENT, "down"), async () => {
              Then("I should see my first dependant", then.idVisible(ids.TEXT_TEMPLATE("Coredependant Bohrer", "b2b"), 2000));
              Then("I should see my second dependant", then.idVisible(ids.TEXT_TEMPLATE("Spousy Bohrer", "b2b"), 2000));
              Then("I should see my child dependant", then.idVisible(ids.TEXT_TEMPLATE("Corechild Bohrer", "b2b"), 2000));
            });
          });
        });
      });
    });
  });

  Scenario("Dependant sees policyholder but NOT other dependants on product details", scenario.start, async () => {
    Given("I login as a Core cash plan dependant", given.loginAsUser(data.CUSTOMER_CASH_CORE["dependant_customer_0"], GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to YuScreen", when.tapID(ids.NAV_BAR("yu"), 2000), async () => {
        When("I scroll to the cash plan product", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health cash plan"), "down"), async () => {
          When("I tap the cash plan product", when.tapID(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD("Health cash plan")), async () => {
            Then("I should see the policyholder name", then.textExists("Coremain Bohrer"));
            Then("I should NOT see the other spouse dependant", then.idNotExist(ids.TEXT_TEMPLATE("Spousy Bohrer", "b2b")));
            Then("I should NOT see the child dependant", then.idNotExist(ids.TEXT_TEMPLATE("Corechild Bohrer", "b2b")));
          });
        });
      });
    });
  });
});
