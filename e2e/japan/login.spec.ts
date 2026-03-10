import { Feature, Given, Scenario, ScenarioOnly, Then, When } from "@yu-life/yulife-bdd-framework";

import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import * as ids from "@ids";
import * as data from "./_data";
import { getTranslation } from "_utils/translations/getTranslations";

const locale = process.env.TARGET_LOCALE || "ja-JP";
const translation = getTranslation(locale);

Feature("As a user I can get past the login screen - JP", async () => {
  Scenario("I can login with correct login details", scenario.start, async () => {
    Given("I have authorised fitkit", given.authoriseFitkit(), async () => {
      Given("I login and go to the daily steps screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1, true, "JP"), async () => {
        When("I have done 20 steps", given.sendSteps(20), async () => {
          Then("I should see 20 steps", then.idVisible(ids.STEPS_COUNT(20)));
        });
      });
    });
    When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
      When("I confirm my region", when.tapID(ids.REWARDS_LOCATION_CONFIRM), async () => {
        Then("I can see the translated pill for 'search'", then.textVisible(getTranslation(locale).screens.rewards.search.placeholder, 3000));
      });
    });
    When("I go to the YuScreen", when.tapID(ids.NAV_BAR("yu")), async () => {
      When("I scroll until I see all the product cards", when.scrollYuScreenDown(0.3, 0.85, 2000), async () => {
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
      When("I confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 3000), async () => {
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
        Then("I should see the 'Yoga' content available", then.idVisible(ids.MEDIA_LIST_ITEM_TITLE("ヨガ")));
        Then("I should see the 'Rebalance' content", then.idVisible(ids.MEDIA_LIST_ITEM_TITLE("有酸素運動")));
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
    When("I scroll until I see all the product cards", when.scrollYuScreenDown(0.2, 0.85, 2000), async () => {
      Then("I should see the square card for GHealth", then.idExist(ids.YUSCREEN_V5_SQUARE_CARD("入院への備え"), 3000));
      Then("I should see the square card for GCI", then.idExist(ids.YUSCREEN_V5_SQUARE_CARD("がん・急性心筋梗塞・脳卒中への備え")));
      Then("I should see the square card for ExGL", then.idExist(ids.YUSCREEN_V5_SQUARE_CARD("万一への備え")));
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
