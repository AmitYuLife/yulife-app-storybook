import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import {
  STEPS_COUNT,
  CYCLING_COUNT,
  MINDFUL_COUNT,
  YUCOIN_POWER_INFO,
} from "@ids";
import { AUTH_1 } from "../../_data/mongo/auths";
import { CUSTOMER_1 } from "../../_data";

Feature("As a user I can get past the login screen", async () => {
  Scenario("Japan", scenario.start, async () => {
    Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
      Given(
        "I login and go to the daily steps screen",
        given.logInAndGoToTab("yucoin", CUSTOMER_1, AUTH_1, true, "Japan"),
        async () => {
          When("I have done 20 steps", given.sendSteps(20), async () => {
            Then("I should see 20 steps", then.idVisible(STEPS_COUNT(20), 2000));
          });
          When("I have done 11.3 km cycling", given.addCyclingData(11345), async () => {
            When("I have done 13 min Mindfulness", given.sendMindfulnessData(800), async () => {
              When("I update the screen to see today activity", given.triggerAppUpdateState, async () => {
                When("I wait two seconds", when.wait(2000), async () => {
                  Then("I should see 11.3 km done today", then.idVisible(CYCLING_COUNT("7.0 mi"), 2000));
                  Then("I should see 13 min mindful done today", then.idVisible(MINDFUL_COUNT("13 min")));
                  Then("I should see the amount of yucoin I earned today", then.textVisible("208 YuCoin today"));
                  Then("I should see the i icon near the Coin", then.idVisible(YUCOIN_POWER_INFO));
                })
              });
            });
          });
        }
      );
    });
  });
});
