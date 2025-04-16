import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "./_data";

Feature("I can view and use the wellbeing hub", async () => {
  Scenario("As a user, I should be able to see my SaaS perk details for my Asken membership", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async () => {
      When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
        When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
          Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN));
          Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible);
        });
      });
      When("I select the Health Insurance tab", when.tapID(ids.CHIP_LIST_ITEM("ブパ")), async () => {
        Then("I should see the 'Asken' title", then.idVisible(ids.TEXT_TEMPLATE("あすけん")));
      });
      When("I tap to open Asken card", when.tapID(ids.TEXT_TEMPLATE("あすけん")), async () => {
        Then("I should see the 'Asken' title", then.textVisible("あすけん"));
      });
      When("I swipe up", when.swipeFromText("あすけん", "up", "fast"), async () => {
        Then("I should see the Company title", then.idVisible(ids.VOUCHER_CODE_TITLE("グループコード1")));
        Then("I should see the Luna Code 1", then.idVisibleAtIndex(ids.VOUCHER_CODE("YUG0001186"), 0));
      });
    });
  });

  Scenario("As a user, I should be able to see my SaaS perk details for my LunaLuna membership", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async () => {
      When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
        When("I tap to confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
          Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN));
          Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible);
        });
      });
      When("I select the Health Insurance tab", when.tapID(ids.CHIP_LIST_ITEM("ブパ")), async () => {
        Then("I should see the 'LunaLuna' title", then.idVisible(ids.TEXT_TEMPLATE("ルナルナ")));
      });
      When("I tap to open LunaLuna card", when.tapID(ids.TEXT_TEMPLATE("ルナルナ")), async () => {
        Then("I should see the 'LunaLuna' title", then.textVisible("ルナ・ルナとは？"));
      });
      When("I swipe up", when.swipeFromText("ルナ・ルナとは？", "up", "fast"), async () => {
        Then("I should see the Luna Code 1 title", then.idVisible(ids.VOUCHER_CODE_TITLE("専用コード")));
        Then("I should see the Luna Code 1", then.idVisibleAtIndex(ids.VOUCHER_CODE("0001186"), 0));
        Then("I should see the Luna Code 1 title", then.idVisible(ids.VOUCHER_CODE_TITLE("専用番号")));
        Then("I should see the Luna Code 2", then.idVisibleAtIndex(ids.VOUCHER_CODE("0001186"), 1));
      });
    });
  });
});
