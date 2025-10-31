import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { longWalkMaxReward } from "./_resources/constants";

Feature("Level boosts", async () => {
  Scenario("I can see boosted challenges and receive boosted rewards", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_122, data.AUTH_122, true, "UK"), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      Then("I should see that level 50 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)));
    });
    When("I tap the level 50 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(50), 3000), async () => {
      Then("I should see that I've achived Yunity with the Forest", then.canSeeForestYunity);
    });
    When("I tap continue", when.tapText("Continue", 4000), async () => {
      Then("I should see that I've achieved the chest", then.canSeeForestYunityChestIntro);
    });
    When("I tap open", when.tapText("Open the chest", 2000), async () => {
      Then("I can see the Boost card", then.idVisible(ids.YUNITY_CARD("1 Level\nBoost")));
      Then("I should see the Yunity Rewards", then.yunityRewardsVisible(["1 Level\nBoost", "Ocean\nOutfit", "+1 Challenge\nper day"]));
    });
    When("I tap claim rewards", when.tapText("Claim rewards", 2000), async () => {
      Then("I should see that level 51 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
    });
    When("I tap the level 51 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51), 3000), async () => {
      Then("I can see the boosted challenge tiles", then.canSeeChallengeTiles(data.USER_122, "boost"));
    });
    When("I tap the tile", when.tapID(ids.CHALLENGE_TILE("Long Walk"), 3000), async () => {
      Then("I can see the challenge page with the boost tab", then.canSeeNewChallengePage("long walk", data.USER_122.data.earnRate, longWalkMaxReward));
    });
    When("I click back button", when.tapID(ids.SCREEN_CLOSE, 3000), async () => {
      When("I tap the level 51 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51), 3000), async () => {
        When("I complete the long walk", when.selectAndCompleteWalkingChallenge("Long Walk", 4000), async () => {
          Then("I can see the completed page", then.stepsChallengeDataCorrect(51, 160, 4000));
        });
      });
    });
    When("I Tap collect", when.tapText("Collect", 3000), async () => {
      Then("I can see the yucoin balance is correct", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(680)));
    });
    When("I go the yucsreen", when.tapID(ids.NAV_BAR("yu"), 3000), async () => {
      When("I start the yumoji builder", when.startYumojiBuilder(ids.MALE_BODY), async () => {
        Then("I should be on the Yumoji edit screen", then.textVisible("Edit your Yumoji"));
      });
    });
    When("I swipe right on the yumoji categories", when.scrollFromID(ids.CATEGORY_TYPE("hairStyle"), "left", "slow", undefined, 4000), async () => {
      When("I tap on the 'chest' category", when.tapID(ids.CATEGORY_TYPE("chest"), 3000), async () => {
        Then("I should see the yumoji item I just unlocked", then.idVisible(ids.YUMOJI_PART_ID_STATUS("available", "yumoji_male_chest_base_ocean"), 3000));
      });
    });
  });
});
