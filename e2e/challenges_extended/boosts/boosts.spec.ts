import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { longWalkMaxReward } from "./_resources/constants";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("Level boosts", async () => {
  Scenario("I can see boosted challenges and receive boosted rewards", scenario.start, () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_122, data.AUTH_122), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
        Then("I should see that level 50 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)));
      });
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

  Scenario("User with active Yuniversal boost can not activate boost consumables", scenario.start, () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_YUNIVERSAL_BOOST.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see the level 51", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51), 4_000));
      });
    });
    When("I tap level 51", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51), 3_000), async () => {
      When("I open the Inventory modal", when.openInventoryModal(), async () => {
        Then("I should see the boost consumable item in the list", then.inventoryItemVisible("Boost a Long Walk"));
        Then("The Activate button should be disabled", then.activateButtonDisabled);
      });
    });
    When("I tap on the disabled boost consumable item", when.tapInventoryItem("Boost a Long Walk"), async () => {
      Then("The item should not be selectable", then.itemNotSelectable);
      Then("The Activate button should remain disabled", then.activateButtonDisabled);
    });
  });

  Scenario("User with active consumable boost can not activate another boost consumable", scenario.start, () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_CONSUMABLE_BOOST.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see the level 10", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(10), 4_000));
      });
    });
    When("I tap level 10", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(10), 3_000), async () => {
      When("I open the Inventory modal", when.openInventoryModal(), async () => {
        Then("I should see the active boost consumable with Activated badge", then.inventoryItemActivated);
        Then("The Activate button should be disabled", then.activateButtonDisabled);
      });
    });
    When("I tap on a disabled boost consumable", when.tapInventoryItem("Boost a Brisk Walk"), async () => {
      Then("The item should not be selectable", then.itemNotSelectable);
      Then("The Activate button should remain disabled", then.activateButtonDisabled);
    });
  });

  Scenario("Non boost consumables remain usable when a boost is active", scenario.start, () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_MIXED_CONSUMABLES.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see the level 10", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(10), 4_000));
      });
    });
    When("I tap level 10", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(10), 3_000), async () => {
      When("I open the Inventory modal", when.openInventoryModal(), async () => {
        Then("Boost consumables should be greyed out", then.inventoryItemVisible("Boost a Long Walk"));
        Then("Non-boost consumables (e.g., extra challenge) should be visible", then.inventoryItemVisible("Extra Brisk Walk challenge"));
      });
    });
    When("I tap on an enabled non-boost consumable", when.tapInventoryItem("Extra Brisk Walk challenge"), async () => {
      Then("The Activate button should be enabled", then.activateButtonEnabled);
    });
  });
});
