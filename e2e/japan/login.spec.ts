import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import * as ids from "@ids";
import { AUTH_1 } from "./_data/mongo/auths";
import { CUSTOMER_1 } from "./_data";

Feature("As a user I can get past the login screen", async () => {
  Scenario("Japan", scenario.start, async () => {
    Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
      Given("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", CUSTOMER_1, AUTH_1, true, "Japan"), async () => {
        When("I have done 20 steps", given.sendSteps(20), async () => {
          Then("I should see 20 steps", then.idVisible(ids.STEPS_COUNT(20), 2000));
        });
      });
    });
    When("I have done 11.3 km cycling", given.addCyclingData(11345), async () => {
      When("I have done 13 min Mindfulness", given.sendMindfulnessData(800), async () => {
        When("I update the screen to see today activity", given.triggerAppUpdateState, async () => {
          When("I wait two seconds", when.wait(2000), async () => {
            Then("I should see 11.3 km done today", then.idVisible(ids.CYCLING_COUNT("11.3 km"), 2000));
            Then("I should see 13 min mindful done today", then.idVisible(ids.MINDFUL_COUNT("13分")));
            Then("I should see the amount of yucoin I earned today", then.textVisible("208 YuCoin today"));
            Then("I should see the i icon near the Coin", then.idVisible(ids.YUCOIN_POWER_INFO));
          });
        });
      });
    });
    When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
      When("I confirm my region", when.tapID(ids.REWARDS_LOCATION_CONFIRM), async () => {
        Then("I can see the translated pill for 'All'", then.textVisible("すべて"))
      })
    })
  });

  Scenario("I can view the Wellbeing Hub screen as a yulife user", scenario.start, async () => {
    Given("I have authorised fitkit", given.authoriseFitkit(), async () => {
      When("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", CUSTOMER_1, AUTH_1, true, "Japan"), async () => {
        Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(400)))
      })
      When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
        Then("I should see the the Wellbeing Hub location modal appear", then.idVisible(ids.WELLBEING_HUB_LOCATION_CONFIRM))
      })
      When("I confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
        Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN))
        Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible)
      })
    })
  })

  Scenario("I should only have Yoga available in Workout categories", scenario.start, async () => {
    Given("I have authorised fitkit", given.authoriseFitkit(), async () => {
      When("I login and go to the daily steps screen", given.logInAndGoToTab("quests", CUSTOMER_1, AUTH_1, true, "Japan"), async () => {
        Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)))
      })
    })
    When("I tap on the first level button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
      Then("I should see the 'Workouts' challenge tile", then.idVisible(ids.CHALLENGE_TILE("エクササイズ")))
    })
    When("I tap on the 'Workouts' challenge tile", when.tapID(ids.CHALLENGE_TILE("エクササイズ"), 2000), async () => {
      When("I tap to take a challenge", when.tapID(ids.CHALLENGE_TAKE_CHALLENGE_BUTTON, 2000), async () => {
        Then("I should only see the 'Yoga' content available", then.idVisible(ids.MEDIA_LIST_ITEM_TITLE("ヨガ")))
        Then("I should not see the 'Rebalance' content", then.idNotVisible(ids.MEDIA_LIST_ITEM_TITLE("有酸素運動")))
        Then("I should not see the 'Strength' content", then.idNotVisible(ids.MEDIA_LIST_ITEM_TITLE("体力アップ")))
      })
    })
  })
});