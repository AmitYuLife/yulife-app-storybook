import { Given, When, Then, Feature, Scenario, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import { emptyInventoryState, emptySeasonalRewardVisible, locationModalTitle } from "./_resources/constants";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("I can view and use all battle pass features", async () => {
  Scenario("I can view battle pass, donate YuCoin and successfully level up", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason, async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login and navigate to the rewards store", given.logInAndGoToTab("rewards", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          Then("I should be on the location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM, 4000));
        });
      });
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2000), async () => {
      Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 1500));
      Then("I should see my coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85200)));
    });
    When("I tap on the 'Donate' tab", when.tapID(ids.REWARDS_TABS("Donate"), 3000), async () => {
      Then("I should be on the battle pass screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
      Then("I should see no progress on the bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 60, 0), 2000));
    });
    When("I tap on the 'Purchased' tab", when.tapID(ids.PURCHASED_TAB_BUTTON, 2500), async () => {
      When("I tap on the 'Gift Cards' tab", when.tapID(ids.WALLET_CATEGORY_LABEL("Gift Cards"), 2500), async () => {
        Then("I should see my wallet is still empty", then.idVisible(ids.EMPTY_WALLET_TITLE("Your wallet is ready to be filled!")));
      });
    });
    When("I tap on to go back", when.tapID(ids.BACK_BUTTON, 2500), async () => {
      Then("I should see all impact cards available", then.impactCardsVisible);
    });
    When("I tap to donate to Clean the ocean", when.donate("ocean", 2), async () => {
      Then("I should see progress on the bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(40, 60, 0), 2000));
    });
    When("I donate to complete the level", when.donate("ocean"), async () => {
      Then("I should see the level up modal", then.idVisible(ids.DONATION_LEVEL_UP_MODAL, 2000));
    });
    When("I tap to claim the reward from the level up modal", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
      When("I tap X to close the prize modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1, 2000), async () => {
        Then("I should see the first reward is now available to claim", then.idVisible(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Claim", 1), 2000));
        Then("I should see my updated coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85140)));
        Then("I should see level 2 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 90, 1), 2000));
      });
    });
  });

  Scenario("I can successfully level up and claim a mystery box as the first reward", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason, async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        When("I login and navigate to the rewards store", given.logInAndGoToTab("rewards", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          Then("I should see the store location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM, 4000));
        });
      });
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2000), async () => {
      When("I tap on the 'Donate' tab", when.tapID(ids.REWARDS_TABS("Donate"), 3000), async () => {
        Then("I should be on the battle pass screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
        Then("I should see the correct season title", then.idVisible(ids.BATTLE_PASS_TITLE("Season of Harmony"), 2000));
        Then("I should see the active season description", then.idVisible(ids.BATTLE_PASS_DESCRIPTION("3 rewards remaining"), 2000));
      });
    });
    When("I tap donate to Plant a tree and complete my first level", when.donate("tree", 3), async () => {
      Then("I should see the level up modal", then.idVisible(ids.DONATION_LEVEL_UP_MODAL, 2000));
    });
    When("I tap to claim the reward from the level up modal", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
      When("I tap to open the prize", when.tapID(ids.CLAIM_REWARD_MODAL, 5000), async () => {
        Then("I should see 6 items available to claim", then.idVisible(ids.CLAIMED_REWARD_ITEMS(6), 2000));
      });
    });
    When("I tap to claim my prize", when.tapID(ids.CLAIM_REWARD_BUTTON, 2000), async () => {
      Then("I should be back on the donations screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
      Then("I should see level 2 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 90, 1), 2000));
      Then("I should see that the reward has successfully been claimed", then.idExist(ids.CLAIMED_BATTLE_PASS_LIST_ITEM, 2000));
      Then("I should see the correct remaining rewards count", then.idVisible(ids.BATTLE_PASS_DESCRIPTION("2 rewards remaining"), 2000));
    });
  });

  Scenario("I can successfully level up and claim an extra challenge power-up", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason, async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        When("I login and go to the YuCoin screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          Then("I see that I have only one challenge available for today", then.textVisible("Take a challenge (1 left today)"));
        });
      });
    });
    When("I tap on 'Take a challenge' button", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON, 2000), async () => {
      When("I tap on the inventory banner", when.tapID(ids.INVENTORY_BANNER, 2000), async () => {
        Then("I should see that my inventory is empty", then.textVisible(emptyInventoryState, 1000));
      });
    });
    When("I tap on 'Go to rewards' button", when.tapID(ids.INVENTORY_GO_TO_REWARDS, 2000), async () => {
      Then("I should be on the location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM));
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2000), async () => {
      When("I tap on the 'Donate' tab", when.tapID(ids.REWARDS_TABS("Donate"), 3000), async () => {
        Then("I should be on the donations screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
      });
    });
    When("I donate to Plant a tree and complete my first level", when.donate("tree", 3), async () => {
      Then("I should see the level up modal", then.idVisible(ids.DONATION_LEVEL_UP_MODAL, 2000));
    });
    When("I tap to claim the reward from the level up modal", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 4000), async () => {
      When("I tap X to close the prize modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1, 2000), async () => {
        Then("I should see the first reward is now available to claim", then.idVisible(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Claim", 1), 2000));
      });
    });
    When("I donate to Plant a tree and progress to the third level", when.donate("tree", 5), async () => {
      When("I tap to claim the reward from the level up modal", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
        Then("I should see that the reward has successfully been claimed", then.idVisible(ids.CLAIMED_BATTLE_PASS_LIST_ITEM, 2000));
        Then("I should see level 3 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(10, 120, 2), 2000));
      });
    });
    When("I go back to the Quests screen", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
      When("I tap on level 10", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(10)), async () => {
        When("I tap to check my inventory", when.tapID(ids.INVENTORY_BANNER, 2000), async () => {
          Then("I should see the Extra Short Stroll power up available", then.idVisible(ids.INVENTORY_ITEM("Extra Short Stroll challenge"), 2000));
        });
      });
    });
    When("I tap to select the Extra Short Stroll challenge", when.tapID(ids.INVENTORY_ITEM("Extra Short Stroll challenge"), 2000), async () => {
      When("I tap to activate the extra challenge", when.tapID(ids.INVENTORY_ACTIVATE_POWER_UP, 2000), async () => {
        Then("I should see the inventory item activated", then.idVisible(ids.ACTIVATED_INVENTORY_ITEM, 2000));
      });
    });
  });
  When("I close inventory", when.tapID(ids.CLOSE_INVENTORY, 2000), async () => {
    Then("I should see the Extra Short Stroll indicator activated", then.idVisible(ids.EXTRA_CHALLENGE_INDICATOR(1), 2000));
  });
  When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
    When("I go to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
      Then("I should now see that I have two available challenges for today", then.textVisible("Take a challenge (2 left today)"));
      Then("I see my updated YuCoin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85040)));
    });
  });

  Scenario("As a member with concurrent employments, I should be able to access the battlepass if one of my employments has it enabled for me", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason, async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login and navigate to the rewards store", given.logInAndGoToTab("rewards", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          Then("I should be on the location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM, 4000));
        });
      });
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2000), async () => {
      Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 1500));
    });
    When("I tap on the 'Donate' tab", when.tapID(ids.REWARDS_TABS("Donate"), 3000), async () => {
      Then("I should be able to see the battle pass", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
    });
  });
});
