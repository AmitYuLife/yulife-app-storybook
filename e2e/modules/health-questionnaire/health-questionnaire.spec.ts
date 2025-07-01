import { Feature, Scenario, Given, Then, When } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./scenario";
import * as given from "./given";
import * as when from "./when";
import * as then from "./then";

Feature("Health Questionnaire (HQ)", async () => {
  Scenario("I should be able to input my weight in Pounds (lbs)", scenario.start, async () => {
    Given("I login as a user", given.login, async () => {
      Then("I should see my YuCoin before claiming HQ reward", then.seePreHQYuCoinEarned);

      When("I finish health questionnaire", when.finishHealthQuestionnaire, async () => {
        Then("I should see my YuCoin after claiming HQ reward", then.seePostHQYuCoinEarned);
      });
    });
  });
});
