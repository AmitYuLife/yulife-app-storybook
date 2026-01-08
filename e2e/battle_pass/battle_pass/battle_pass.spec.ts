import { Given, When, Then, Feature, Scenario, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import { couponsTermsAndConditions, endOfSeasonHarmonyTitle, EndOfSeasonMockItems, rewardHints } from "./_resources/fixtures";
import { outOfCoinsMessage, cardDetails } from "./_resources/constants";
import { BUSINESS_THE_BEAR, BUSINESS_ACCOUNT_2 } from "battle_pass/_data";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("I can view and use all battle pass features", async () => {
  Scenario("I can view battle pass, donate YuCoin and successfully level up", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_THE_BEAR.data.business_account_id]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          When("I navigate to the rewards store", when.tapID(ids.NAV_BAR("rewards"), 5000), async () => {
            Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 5000));
            Then("I should see my coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85200)));
          });
        });
      });
    });
    When("I tap on the 'Reward Pass' teaser", when.tapID(ids.REWARD_PASS("Impact Pass"), 3000), async () => {
      Then("I should be on the battle pass screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
      Then("I should see no progress on the bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 60, 0), 2000));
      Then("I should see all impact cards available", then.impactCardsVisible());
    });
    When("I donate to Feed families", when.donate("meal", 2), async () => {
      Then("I should see progress on the bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(40, 60, 0), 2000));
    });
    When("I donate to complete the level", when.donate("ocean"), async () => {
      Then("I should see the level up modal", then.idVisible(ids.DONATION_LEVEL_UP_MODAL, 2000));
    });
    When("I tap to claim the reward from the level up modal", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
      When("I tap X to close the prize modal", when.tapIDAtIndex(ids.BUTTON_CLOSE, 1, 2000), async () => {
        Then("I should see the first reward is now available to claim", then.idVisible(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Claim", 1), 2000));
        Then("I should see my updated coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85140), 2000));
        Then("I should see level 2 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 90, 1), 2000));
      });
    });
    When("I tap to claim my first reward", when.tapID(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Claim", 1), 2000), async () => {
      When("I tap to open the prize", when.tapID(ids.CLAIM_REWARD_MODAL, 5000), async () => {
        Then("I should see 6 items available to claim", then.idVisible(ids.CLAIMED_REWARD_ITEMS(6), 2000));
        Then("I should see the wallet reward hint info card", then.multipleTextVisible([rewardHints.wallet.title, rewardHints.wallet.description]));
      });
    });
    When("I tap to continue", when.tapID(ids.CONTINUE_CHEST_PRIZE_BUTTON, 2000), async () => {
      Then("The wallet reward pop-up should be visible", then.assertWalletPopUp);
    });
    When("I dismiss the reward pop-up", when.dismissRewardPopUp, async () => {
      When("I donate to Clean the ocean and complete the next level", when.donate("ocean", 5), async () => {
        When("I tap to claim my prize", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
          When("I tap to open the prize", when.tapID(ids.CLAIM_REWARD_MODAL, 5000), async () => {
            When("I tap to continue", when.tapID(ids.CONTINUE_CHEST_PRIZE_BUTTON, 2000), async () => {
              When("I dismiss the reward pop-up again", when.dismissRewardPopUp, async () => {
                Then("I should see level 3 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(10, 120, 2), 2000));
              });
            });
          });
        });
      });
    });
    When("I scroll up the donations list", when.scrollFromID(ids.IMPACT_DONATION_TITLE("Feed families"), "down", "slow", 0.3, 2000), async () => {
      When("I donate to 'Provide water' and complete the season", when.donate("water", 6), async () => {
        When("I tap to claim my prize", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
          When("I dismiss the reward pop-up", when.dismissRewardPopUp, async () => {
            Then("I should see the end of season modal with the correct title", then.textVisible(endOfSeasonHarmonyTitle, 2000));
            Then("I should see the end of season action button", then.idVisible(ids.DONATION_END_OF_SEASON_BUTTON, 2000));
          });
        });
      });
    });
    When("I terminate the app", when.terminateApp, async () => {
      When("I follow the deep link to the rewards store", when.goToRewardStore, async () => {
        When("I tap on the 'Reward Pass' teaser", when.tapID(ids.REWARD_PASS("Impact Pass"), 3000), async () => {
          Then("I should see the updated end of season modal values", then.assertEndOfSeasonItems(EndOfSeasonMockItems));
        });
      });
    });
  });

  Scenario("I can successfully level up and claim a mystery box as the first reward", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_THE_BEAR.data.business_account_id]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          When("I navigate to the 'Quest' screen", when.tapID(ids.NAV_BAR("quests"), 5000), async () => {
            When("I tap level 10", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(10), 3000), async () => {
              Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll"), 2500));
            });
          });
        });
      });
    });
    When("I start a challenge", when.startChallenge("Short Stroll"), async () => {
      Then("The challenge should start", then.idVisible(ids.CHALLENGE_PROGRESS_BAR, 3000));
    });
    When("I walk over 300 steps", when.sendSteps(400, 35000), async () => {
      Then("I should see the well done screen", then.onChallengeComplete(400, 10));
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
      Then("I should see the completed streak day 1 modal", then.completedTodayStreakCopyVisible(1));
    });
    When("I tap 'done'", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
      Then("I should be on the quest screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I go back to the rewards screen", when.tapID(ids.NAV_BAR("rewards"), 2000), async () => {
      When("I tap on the 'Reward Pass' teaser", when.tapID(ids.REWARD_PASS("Impact Pass"), 3000), async () => {
        Then("I should be on the battle pass screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
        Then("I should see the correct season title", then.idVisible(ids.BATTLE_PASS_TITLE("Season of Harmony"), 2000));
        Then("I should see the active season description", then.idVisible(ids.BATTLE_PASS_DESCRIPTION("3 rewards remaining"), 2000));
      });
    });
    When("I donate to 'Plant a tree' twice", when.donate("tree", 2), async () => {
      When("I tap donate to 'Provide water' and complete my first level", when.donate("water", 1), async () => {
        Then("I should NOT see the insufficient balance error message", then.textNotVisible(outOfCoinsMessage, 2000));
        Then("I should see the level up modal", then.idVisible(ids.DONATION_LEVEL_UP_MODAL, 2000));
      });
    });
    When("I tap to claim the reward from the level up modal", when.tapID(ids.LEVEL_UP_CLAIM_MODAL_BUTTON, 2000), async () => {
      When("I tap to open the prize", when.tapID(ids.CLAIM_REWARD_MODAL, 5000), async () => {
        Then("I should see 6 items available to claim", then.idVisible(ids.CLAIMED_REWARD_ITEMS(6), 2000));
      });
    });
    When("I tap to continue", when.tapID(ids.CONTINUE_CHEST_PRIZE_BUTTON, 2000), async () => {
      Then("The wallet reward pop-up should be visible", then.assertWalletPopUp);
    });
    When("I dismiss the reward pop-up", when.dismissRewardPopUp, async () => {
      Then("I should see level 2 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 90, 1), 2000));
      Then("I should see that the reward has successfully been claimed", then.idExist(ids.CLAIMED_BATTLE_PASS_LIST_ITEM(1), 2000));
      Then("I should see the correct remaining rewards count", then.idVisible(ids.BATTLE_PASS_DESCRIPTION("2 rewards remaining"), 2000));
    });
    When("I relaunch the app", when.relaunchAppWithoutSync, async () => {
      Then("I should see my avatar being first on the 'Plant trees' donations list", then.idVisibleAtIndex(ids.DONATION_LIST_AVATARS(1), 0, 4000));
    });
    When("I tap the 'Plant trees' donation list item", when.tapID(ids.IMPACT_DONATION_TITLE("Plant trees")), async () => {
      Then("I should see the correct donated amount and position for the 'trees' leaderboard", then.idVisible(ids.LEADERBOARD_NAME("Carmy Berzatto", "40", 1, "#464647")));
    });
    When("I tap to go back", when.tapID(ids.BUTTON_TOP_LEFT_BAR, 2000), async () => {
      When("I tap the 'Provide water' donation list item", when.tapID(ids.IMPACT_DONATION_TITLE("Provide water")), async () => {
        Then("I should also see correct donated amount for the 'water' leaderboard", then.idVisible(ids.LEADERBOARD_NAME("Carmy Berzatto", "20", 1, "#464647")));
      });
    });
  });

  Scenario("I can successfully level up and claim an extra challenge power-up", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_THE_BEAR.data.business_account_id]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login", given.loginAsUser(data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          When("I navigate to the 'YuCoin' screen", when.tapID(ids.NAV_BAR("yucoin"), 5000), async () => {
            Then("I see that I have only one challenge available for today", then.textVisible("Take a challenge (1 left today)", 3000));
          });
        });
      });
    });
    When("I tap on 'Take a challenge' button", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON, 2000), async () => {
      Then("I should see the consumables indicator on the inventory banner", then.idVisible(ids.INVENTORY_BANNER_ITEM_COUNT(2), 2000));
    });
    When("I tap on the inventory banner", when.tapID(ids.INVENTORY_BANNER, 2000), async () => {
      Then("I should see the 'Extra Brisk Walk' consumable available", then.idVisible(ids.INVENTORY_ITEM("Extra Brisk Walk challenge"), 2000));
      Then("I should see the 'Boost any challenge' consumable available", then.idVisible(ids.INVENTORY_ITEM("Boost any challenge"), 2000));
    });
    When("I tap to select the Extra Short Stroll challenge", when.tapID(ids.INVENTORY_ITEM("Extra Brisk Walk challenge"), 2000), async () => {
      When("I tap to activate the extra challenge", when.tapID(ids.ACTIVATE_POWER_UP_BUTTON(true), 2000), async () => {
        Then("I should see the inventory item activated", then.idVisible(ids.ACTIVATED_INVENTORY_ITEM, 2000));
      });
    });
    When("I tap to select the 'Boost any challenge' consumable", when.tapID(ids.INVENTORY_ITEM("Boost any challenge"), 2000), async () => {
      When("I tap to activate the Boost power up", when.tapID(ids.ACTIVATE_POWER_UP_BUTTON(true), 2000), async () => {
        When("I close inventory", when.tapID(ids.CLOSE_INVENTORY, 2000), async () => {
          Then("I should see the Extra Brisk Walk indicator activated", then.idVisible(ids.EXTRA_CHALLENGE_INDICATOR(1), 2000));
          Then("I should see the boost on the challenge list tiles activated", then.idVisible(ids.CHALLENGE_TILE_BOOST_TAG("Short Stroll", "90", true), 2000));
        });
      });
    });
    When("I go back", when.tapID(ids.BACK_BUTTON, 2500), async () => {
      When("I go to the rewards store", when.tapID(ids.NAV_BAR("rewards"), 4000), async () => {
        When("I tap on the 'Reward Pass' teaser", when.tapID(ids.REWARD_PASS("Impact Pass"), 3000), async () => {
          Then("I should be on the donations screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
        });
      });
    });
    When("I tap on the Extra Challenge reward tile", when.tapID(ids.BATTLE_PASS_LIST_ITEM(2), 2000), async () => {
      Then("I should see the correct subtitle on the info modal", then.idVisible(ids.ITEM_DETAILS_SUBTITLE("Spend YuCoin to unlock a reward"), 2000));
    });
    When("I scroll down on the info modal", when.scrollFromID(ids.ITEM_DETAILS_SUBTITLE("Spend YuCoin to unlock a reward"), "up", "slow", 0.4), async () => {
      Then("I should see the info for all the available extra challenges", then.extraChallengesInfoModalVisible);
    });
    When("I tap the button 'Got it' to close the modal", when.tapID(ids.REWARDS_MODAL_INFO_BUTTON, 2000), async () => {
      Then("I should be back on the donations screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
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
        Then("I should see the '8' spinning rewards", then.idVisible(ids.SPINNING_REWARD_ITEMS(7), 2000));
      });
    });
    When("I tap to open the spinning rewards chest", when.tapID(ids.CLAIM_REWARD_MODAL, 2000), async () => {
      Then("I should see the random extra challenge reward", then.extraChallengeRewardModalVisible);
      Then("I should see the power-up reward hint info card", then.multipleTextVisible([rewardHints.powerUp.title, rewardHints.powerUp.description]));
    });
    When("I tap to continue", when.tapID(ids.CONTINUE_CHEST_PRIZE_BUTTON, 2000), async () => {
      When("I dismiss the reward pop-up", when.dismissRewardPopUp, async () => {
        Then("I should see that the reward has successfully been claimed", then.idVisible(ids.CLAIMED_BATTLE_PASS_LIST_ITEM(2), 3000));
        Then("I should see level 3 on the progress bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(10, 120, 2), 3000));
      });
    });
    When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      When("I go to the 'Quests' screen", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        When("I tap on level 10", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(10)), async () => {
          When("I tap to check my inventory", when.tapID(ids.INVENTORY_BANNER, 2000), async () => {
            Then("I should NOT be able to activate the second extra challenge power up", then.idVisible(ids.ACTIVATE_POWER_UP_BUTTON(false), 2000));
          });
        });
      });
    });
    When("I close inventory", when.tapID(ids.CLOSE_INVENTORY, 2000), async () => {
      When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
        When("I go to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
          Then("I should now see that I have two available challenges for today", then.textVisible("Take a challenge (2 left today)"));
          Then("I see my updated YuCoin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85040)));
        });
      });
    });
  });

  Scenario("As a member with concurrent employments, I should be able to access Battle Pass if one of my employments has it enabled for me", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_ACCOUNT_2.data.business_account_id]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login and navigate to the rewards store", given.logInAndGoToTab("rewards", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 1500));
        });
      });
    });
    When("I tap on the 'Reward Pass' teaser", when.tapID(ids.REWARD_PASS("Impact Pass"), 3000), async () => {
      Then("I should be able to see the battle pass", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
    });
  });

  Scenario("I can view, adjust and validate coupon values before completing checkout", scenario.start, () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_THE_BEAR.data.business_account_id]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login and navigate to the rewards store", given.logInAndGoToTab("rewards", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
          Then("I should see my coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85200)));
        });
      });
    });
    When("I tap to open Wallet", when.tapID(ids.SHINE_BUTTON("Wallet"), 2500), async () => {
      Then("I should see the 'M&S' coupon available for purchase", then.idVisible(ids.WALLET_CARD_TITLE("M&S"), 2000));
    });
    When("I tap the 'M&S' Coupon card", when.tapID(ids.WALLET_CARD_TITLE("M&S"), 2000), async () => {
      Then("I should see the correct discount info", then.textVisible("10%", 1500));
      Then("I should see the correct Coupon name", then.textVisible(data.CORE_REWARDS_MARKS_AND_SPENCER.data.name["en-GB"]));
      Then("I should see the Coupon description", then.idVisible(ids.WALLET_COUPON_ITEM_DESCRIPTION("One time use"), 2000));
    });
    When("I tap the voucher card to adjust its values", when.tapID(ids.WALLET_COUPON_ITEM_DESCRIPTION("One time use"), 2000), async () => {
      Then("I should see multiple available denominations", then.multipleIDVisible([ids.TEXT_TEMPLATE("£100", "b2b"), ids.TEXT_TEMPLATE("£5", "b2b")]));
      Then("I should see the coupon input field", then.idVisible(ids.CONTENT_ITEM_INPUT("coupon-input"), 2000));
      Then("I should see the currency info warning", then.idVisible(ids.TEXT_TEMPLATE("You can only redeem it in GBP (£).", "b2"), 2000));
      Then("I should see the reward details info button", then.idVisible(ids.TERTIARY_BUTTON("How can my voucher be used"), 2000));
    });
    When("I tap the reward details info button", when.tapID(ids.TERTIARY_BUTTON("How can my voucher be used"), 2000), async () => {
      Then("I should be on the reward details screen", then.textVisible(data.CORE_REWARDS_MARKS_AND_SPENCER.data.redemptionSteps.info["en-GB"]));
    });
    When("I tap to go back to the edit screen", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      When("I select the '£20' value pill", when.tapID(ids.TEXT_TEMPLATE("£20", "b2b"), 2000), async () => {
        Then("I should see the minimum denomination error message", then.textVisible("Must be at least £50.", 2000));
        Then("I should see that the checkout cta button is disabled", then.idVisible(ids.BUTTON_BASE("Checkout", true), 2000));
      });
    });
    When("I select the '£100' value pill", when.tapID(ids.TEXT_TEMPLATE("£100", "b2b"), 2000), async () => {
      Then("I should see the correct discount amount", then.idVisible(ids.TEXT_TEMPLATE("£10.00", "b2b"), 2000));
      Then("I should see the correct remaining payable amount", then.idVisible(ids.TEXT_TEMPLATE("£90.00", "b1b"), 2000));
      Then("I should see that the 'Checkout' cta button is now enabled", then.idVisible(ids.BUTTON_BASE("Checkout", false), 2000));
    });
    When("I tap to checkout", when.tapID(ids.BUTTON_BASE("Checkout", false), 2000), async () => {
      Then("I should see the terms and conditions checkbox", then.idVisible(ids.CHECK_BOX_STATE(couponsTermsAndConditions, false), 2000));
      Then("I should see that the total payable amount is still '£90'", then.idVisible(ids.TEXT_TEMPLATE("£90", "b1b"), 2000));
      Then("I should see the 'Accept terms and conditions' title", then.idVisible(ids.TEXT_TEMPLATE("Accept terms and conditions", "b1b"), 2000));
      Then("I should see that the 'Continue to Payment' cta button is disabled", then.idVisible(ids.BUTTON_BASE("Continue to Payment", true), 2000));
    });
    When("I tap to edit the Coupon values", when.tapID(ids.TEXT_TEMPLATE("Edit", "b2b"), 2000), async () => {
      Then("I should see the multiple available denominations", then.multipleIDVisible([ids.TEXT_TEMPLATE("£75", "b2b"), ids.TEXT_TEMPLATE("£2.50", "b2b")]));
    });
    When("I select the '£75' value pill", when.tapID(ids.TEXT_TEMPLATE("£75", "b2b"), 2000), async () => {
      Then("I should see the updated discount amount", then.idVisible(ids.TEXT_TEMPLATE("£7.50", "b2b"), 2000));
      Then("I should see the correct remaining payable amount", then.idVisible(ids.TEXT_TEMPLATE("£67.50", "b1b"), 2000));
    });
    When("I tap to checkout", when.tapID(ids.BUTTON_BASE("Checkout", false), 2000), async () => {
      When("I mark the terms and conditions checkbox", when.tapID(ids.CHECK_BOX_STATE(couponsTermsAndConditions, false), 2000), async () => {
        Then("I should see that the 'Continue to Payment' cta button is now enabled", then.idVisible(ids.BUTTON_BASE("Continue to Payment", false), 2000));
        Then("I should see that checkbox is now selected", then.idVisible(ids.CHECK_BOX_STATE(couponsTermsAndConditions, true), 2000));
      });
    });
    When("I tap to continue to payment", when.tapID(ids.BUTTON_BASE("Continue to Payment", false), 2500), async () => {
      When("I fill in the required card details on the Stripe payment modal", when.completeStripePayment(cardDetails, "67.50"), async () => {
        Then("I should see the purchase success screen", then.idVisible(ids.TEXT_TEMPLATE("You've successfully purchased a gift card!", "b2"), 4000));
      });
    });
    When("I tap to view my gift card", when.tapID(ids.BUTTON_BASE("View gift card", false), 4000), async () => {
      Then("I should see that payment was successful", then.idVisible(ids.VOUCHER_CODE_TITLE(`£75 ${data.CORE_REWARDS_MARKS_AND_SPENCER.data.name["en-GB"]} voucher`), 5000));
      Then("I should see the coupon email in my inbox", then.assertCouponEmailReceived(data.CUSTOMER_CARMY.data.email, data.CORE_REWARDS_MARKS_AND_SPENCER.data.name["en-GB"]));
    });
  });
});
