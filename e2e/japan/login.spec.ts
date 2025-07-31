import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import * as ids from "@ids";
import * as data from "./_data";

Feature("As a user I can get past the login screen", async () => {
  Scenario("Japan", scenario.start, async () => {
    Given("I have authorised fitkit and done 10 steps today", given.authoriseFitkit(), async () => {
      Given("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1, true, "JP"), async () => {
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
            Then("I should see the amount of yucoin I earned today", then.textVisible("206 YuCoin today"));
            Then("I should see the i icon near the Coin", then.idVisible(ids.YUCOIN_POWER_INFO));
          });
        });
      });
    });
    When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
      When("I confirm my region", when.tapID(ids.REWARDS_LOCATION_CONFIRM), async () => {
        Then("I can see the translated pill for 'All'", then.textVisible("すべて", 3000));
      });
    });
    When("I go to the YuScreen", when.tapID(ids.NAV_BAR("yu")), async () => {
      When("I scroll until I see all the product cards", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_PROTECTION_TITLE, "down"), async () => {
        Then("I should see the tall card for GHealth", then.idVisible(ids.YUSCREEN_V5_TALL_CARD("入院への備え")));
        Then("I should see the tall card for ExGL", then.idVisible(ids.YUSCREEN_V5_TALL_CARD("万一への備え")));
        Then("I should see the product title written as '保障内容'", then.textVisible("保障内容"));
      });
    });
  });

  Scenario("I can view the Wellbeing Hub screen as a yulife user", scenario.start, async () => {
    Given("I have authorised fitkit", given.authoriseFitkit(), async () => {
      When("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1, true, "JP"), async () => {
        Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(400)));
      });
      When("I go to Wellbeing Hub", when.goToWellbeingHub, async () => {
        Then("I should see the the Wellbeing Hub location modal appear", then.idVisible(ids.WELLBEING_HUB_LOCATION_CONFIRM));
      });
      When("I confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 2000), async () => {
        Then("I should be on the Wellbeing Hub screen", then.idVisible(ids.WELLBEING_HUB_SCREEN));
        Then("I should see all Wellbeing Hub services", then.wellbeingServiceVisible);
      });
    });
  });

  Scenario("I should only have Yoga available in Workout categories", scenario.start, async () => {
    Given("I have authorised fitkit", given.authoriseFitkit(), async () => {
      When("I login and go to the daily steps screen", given.logInAndGoToTab("quests", data.CUSTOMER_1, data.AUTH_1, true, "JP"), async () => {
        Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      });
    });
    When("I tap on the first level button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
      Then("I should see the 'Workouts' challenge tile", then.idVisible(ids.CHALLENGE_TILE("エクササイズ")));
    });
    When("I tap on the 'Workouts' challenge tile", when.tapID(ids.CHALLENGE_TILE("エクササイズ"), 2000), async () => {
      When("I tap to take a challenge", when.tapID(ids.CHALLENGE_TAKE_CHALLENGE_BUTTON, 2000), async () => {
        Then("I should only see the 'Yoga' content available", then.idVisible(ids.MEDIA_LIST_ITEM_TITLE("ヨガ")));
        Then("I should not see the 'Rebalance' content", then.idNotVisible(ids.MEDIA_LIST_ITEM_TITLE("有酸素運動")));
        Then("I should not see the 'Strength' content", then.idNotVisible(ids.MEDIA_LIST_ITEM_TITLE("体力アップ")));
      });
    });
  });

  Scenario("I see the correct Square card layout for my Japanese products", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_2_SMOKING, data.AUTH_2, true, "JP"), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, `${data.CUSTOMER_2_SMOKING.data.lastName} ${data.CUSTOMER_2_SMOKING.data.firstName}`, "フォレスト", "219", true));
      });
    });
    When("I scroll until I see all the product cards", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_SMOKING_TILE, "down"), async () => {
      Then("I should see the square card for GHealth", then.idVisible(ids.YUSCREEN_V5_SQUARE_CARD("入院への備え"), 3000));
      Then("I should see the square card for GCI", then.idVisible(ids.YUSCREEN_V5_SQUARE_CARD("がん・急性心筋梗塞・脳卒中への備え")));
      Then("I should see the square card for ExGL", then.idVisible(ids.YUSCREEN_V5_SQUARE_CARD("万一への備え")));
    });
  });

  Scenario("I see search for a user by kanji, their latin, or their furigana name", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_2_SMOKING, data.AUTH_2, true, "JP"), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        Then("I should be on YuScreen V5", then.yuScreenV5HeaderVisible(false, `${data.CUSTOMER_2_SMOKING.data.lastName} ${data.CUSTOMER_2_SMOKING.data.firstName}`, "フォレスト", "219", true));
      });
    });
    When("I tap on the hero card", when.tapID(ids.HERO_CARD_SECTION), async () => {
      Then("I should see the soft landing intro screen", then.idVisible(ids.GIFTING_INTRO));
    });
    When("I tap on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
      Then("Then I am on the gifting selection screen", then.idVisible(ids.INPUT_FIELD));
    });
    When("I search a user with their kanji name", when.replaceTextViaID(ids.INPUT_FIELD, data.CUSTOMER_1.data.firstName), async () => {
      Then("I can see the user appear", then.idVisible(ids.LEADERBOARD_EMPLOYEE_NAME(`${data.CUSTOMER_1.data.lastName} ${data.CUSTOMER_1.data.firstName}`)));
    });
    When("I search a user with their latin name", when.replaceTextViaID(ids.INPUT_FIELD, data.CUSTOMER_1.data.name_variants.latin), async () => {
      Then("I can see the user appear", then.idVisible(ids.LEADERBOARD_EMPLOYEE_NAME(`${data.CUSTOMER_1.data.lastName} ${data.CUSTOMER_1.data.firstName}`)));
    });
    When("I search a user with their furigana name", when.replaceTextViaID(ids.INPUT_FIELD, data.CUSTOMER_1.data.name_variants.furigana), async () => {
      Then("I can see the user appear", then.idVisible(ids.LEADERBOARD_EMPLOYEE_NAME(`${data.CUSTOMER_1.data.lastName} ${data.CUSTOMER_1.data.firstName}`)));
    });
  });
});
