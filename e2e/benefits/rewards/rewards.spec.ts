import { Given, When, Then, Scenario, Feature, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { getLocalisedString } from "@i18n";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

Feature("Rewards should act correctly", async () => {
  Scenario("I cannot redeem a reward if I don't have enough coin", scenario.start, () => {
    Given("I log in and go to reward", given.logInAndGoToTab("rewards", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see the modal to select store location", then.rewardsLocationModalVisible(4000));
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN, 3000));
    });
    When("I scroll down the rewards list", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow", 0.5), async () => {
      Then("I should see the John Lewis Reward", then.rewardVisible(data.CORE_REWARDS_JOHN_LEWIS));
    });
    When("I tap on the John Lewis reward", when.tapRewardInList(data.CORE_REWARDS_JOHN_LEWIS), async () => {
      Then("I should be on the reward page", then.textVisible("To redeem John Lewis:", 2500)); //onRewardScreen(data.CORE_REWARDS_JOHN_LEWIS))
    });
    When("I scroll to the bottom of the page", when.swipeFromText("To redeem John Lewis:", "up", "fast"), async () => {
      Then("I should see the Buy voucher with YuCoin button", then.textVisible("Buy voucher with YuCoin"));
    });
    When("I tap the button", when.tapText("Buy voucher with YuCoin"), async () => {
      Then("I should see the denominations modal", then.denominationListVisible(data.CORE_REWARDS_JOHN_LEWIS, 200));
    });
    When("I tap to buy a denomination", when.tapDenomination(data.CORE_REWARDS_JOHN_LEWIS, 0), async () => {
      Then("I should see the confirm modal", then.textVisible("Confirm purchase"));
    });
    When("I tap 'Confirm'", when.tapText("Confirm", 2500), async () => {
      Then("I should see the not enough YuCoin modal", then.textVisible("You do not have enough YuCoin to purchase this reward", 3000));
    });
    When("I click Got it", when.tapText("Got it", 3000), async () => {
      Then("I should be back on the John Lewis reward page", then.textVisible("Have a question?"));
    });
  });

  Scenario("I cannot redeem a locked reward", scenario.start, () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see the modal to select store location", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN));
    });
    When("I scroll down the rewards list", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow", 0.3), async () => {
      Then("I should see the locked bloom reward", then.idVisible(ids.REWARD_ITEM(data.CORE_REWARDS_BLOOM_UNAVAILABLE.data._id)));
    });
    When("I tap on the locked reward", when.tapRewardInList(data.CORE_REWARDS_BLOOM_UNAVAILABLE), async () => {
      Then("I should see an update in progress pop up ", then.textVisible("update in progress"));
    });
    When("I tap 'back to rewards'", when.tapText("back to rewards"), async () => {
      Then("I should be back on the rewards screen", then.idVisible(ids.REWARDS_SCREEN));
    });
    When("I scroll up until the locked reward is visible", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow", 0.7), async () => {
      Then("I should see the locked amazon reward", then.idVisible(ids.REWARD_ITEM(data.CORE_REWARDS_AMAZON_UNAVAILABLE.data._id), 3000));
      Then("I should see the 'Undergoing maintenance' text on the locked reward", then.textVisibleAtIndex("Undergoing maintenance", 1, 3000));
    });
  });

  Scenario("I can purchase multiple rewards and adjust the voucher amount successfully", scenario.start, () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_3, data.AUTH_3), () => {
      Then("I should see the modal to select store location", then.rewardsLocationModalVisible());
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2500), async () => {
      Then("I should be on the rewards store", then.idVisible(ids.REWARDS_SCREEN));
      Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(42200)));
    });
    When("I scroll down the rewards list", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow", 0.7), async () => {
      Then("I should see the Amazon Reward", then.rewardVisible(data.CORE_REWARDS_AMAZON));
    });
    When("I tap this reward", when.tapRewardInList(data.CORE_REWARDS_AMAZON), async () => {
      Then("I should be on the Amazon reward page", then.onRewardScreen(data.CORE_REWARDS_AMAZON));
    });
    When("I scroll to the bottom of the page", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast"), async () => {
      When("I tap the button", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
        Then("I should see the buy button", then.buyButtonVisible(data.CORE_REWARDS_AMAZON));
        Then("I should see the £ amount drop down", then.denominationListVisible(data.CORE_REWARDS_AMAZON, 42200));
      });
    });
    When("I tap the drop down", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon"), async () => {
      Then("I should see the confirm modal", then.textVisible("Confirm purchase"));
    });
    When("I tap 'Cancel'", when.tapText("Cancel", 2500, true), async () => {
      Then("I should not see the confirm modal", then.textNotVisible("Confirm purchase"));
    });
    When("I tap the 'Buy voucher with YuCoin' button", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
      Then("I should see the £ amount drop down", then.denominationListVisible(data.CORE_REWARDS_AMAZON, 42200));
    });
    When("I tap the drop down", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon"), async () => {
      When("I tap 'Confirm'", when.tapText("Confirm"), async () => {
        Then("I should be on the purchase screen", then.onRewardPurchasedScreen(data.CORE_REWARDS_AMAZON));
        Then("I should see the custom purchase code title", then.idVisible(ids.VOUCHER_CODE_TITLE("Free Gummy Bears")));
        Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(35200)));
      });
    });
    When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap on the Amazon reward", when.tapRewardInList(data.CORE_REWARDS_AMAZON), async () => {
        When("I scroll to the bottom of the page", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast"), async () => {
          When("I tap to purchase the reward", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
            When("I select this time the second option of £24 voucher", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon", 1), async () => {
              When("I confrim the purchase", when.tapText("Confirm"), async () => {
                Then("I should see the custom voucher code", then.idVisible(ids.VOUCHER_CODE("TestAmazonCode456")));
                Then("I should see my update YuCoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(21200)));
              });
            });
          });
        });
      });
    });
    When("I go back again to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap on the Amazon reward", when.tapRewardInList(data.CORE_REWARDS_AMAZON), async () => {
        When("I scroll to the bottom of the page", when.scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "fast"), async () => {
          When("I tap to purchase the reward", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin")), async () => {
            When("I select this time the third option of £36 voucher", when.tapDenominationList(data.CORE_REWARDS_AMAZON, "Amazon", 2), async () => {
              When("I confrim the purchase", when.tapText("Confirm"), async () => {
                Then("I should see the custom voucher code", then.idVisible(ids.VOUCHER_CODE("TestAmazonCode789")));
                Then("I should see my update YuCoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
              });
            });
          });
        });
      });
    });
    When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap to open Wallet", when.tapID(ids.SHINE_BUTTON("Wallet"), 1000), async () => {
        When("I tap to open the Amazon wallet card", when.tapID(ids.WALLET_CARD_TITLE("Amazon"), 1000), async () => {
          Then("I should see all three purchased Amazon vouchers", then.multiplePurchasedRewardVisible(["£36", "£24", "£12"]));
        });
      });
    });
  });

  Scenario("I cannot buy a reward if there are issues with a provider", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_4, data.AUTH_4), async () => {
      Then("I should see the modal to select store location", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should be on the rewards tab", then.idVisible(ids.REWARDS_SCREEN));
    });
    When("I scroll down the rewards list", when.scrollFromID(ids.REWARDS_SCREEN, "up", "slow", 0.5), async () => {
      Then("I should see the Broken Item Reward", then.rewardVisible(data.CORE_REWARDS_BROKEN));
    });
    When("I tap this reward", when.tapRewardInList(data.CORE_REWARDS_BROKEN), async () => {
      Then("I should be on the reward page", then.textVisible("To redeem Broken Item:", 1500));
    });
    When("I scroll to the bottom of the page", when.swipeFromText("To redeem Broken Item:", "up", "fast"), async () => {
      Then("I should see the buy button", then.textVisible("Buy voucher with YuCoin"));
    });
    When("I tap the buy button", when.tapText("Buy voucher with YuCoin"), async () => {
      Then("I should see the denominations modal", then.denominationListVisible(data.CORE_REWARDS_BROKEN, 15200));
    });
    When("I tap to buy a denomination", when.tapDenomination(data.CORE_REWARDS_BROKEN, 0), async () => {
      Then("I should see the confirm modal", then.textVisible("Confirm purchase"));
    });
    When("I tap 'Confirm'", when.tapText("Confirm", 2000), async () => {
      Then("I should see that the reward is unavailable", then.textVisible("Reward could not be found", 2000));
    });
  });

  Scenario("I can login and view my previously purchased rewards", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_2, data.AUTH_2), async () => {
      Then("I should see the modal to select store location", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should see my coin balance in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I tap to open Wallet", when.tapID(ids.SHINE_BUTTON("Wallet"), 1000), async () => {
      When("I tap on the Nike wallet card", when.tapID(ids.WALLET_CARD_TITLE(data.CORE_REWARDS_NIKE.data.name), 1000), async () => {
        Then("I should see the Nike reward has the correct label", then.idVisible(ids.WALLET_ITEM_LABEL("GIFT CARD")));
      });
    });
    When("I tap on the Nike wallet card", when.tapID(ids.WALLET_ITEM_TITLE("£10"), 1000), async () => {
      Then("I should see the correct reward info I have previously purchased", then.purchasedRewardVisible(data.CORE_REWARDS_NIKE, 0));
    });
  });

  Scenario("I can view my previously purchased rewards with copy based on user language preference", scenario.start, async () => {
    Given("I login as a user", given.loginAsUser(data.CUSTOMER_2, data.AUTH_2), async () => {
      When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
        Then("I see the content location modal's confirmation button", then.idVisible(ids.REWARDS_LOCATION_CONFIRM));
      });

      When("I confirm the content location", when.tapID(ids.REWARDS_LOCATION_CONFIRM), async () => {
        Then("I can see the wallet navigation icon", then.idVisible(ids.SHINE_BUTTON("Wallet")));
      });

      When("I tap the wallet navigation icon", when.tapID(ids.SHINE_BUTTON("Wallet")), async () => {
        Then("I can see my purchased rewards", then.idVisible(ids.WALLET_CARD_TITLE(data.CORE_REWARDS_NIKE.data.name)));
      });

      When("I tap on a reward", when.tapID(ids.WALLET_CARD_TITLE(data.CORE_REWARDS_NIKE.data.name), 1000), async () => {
        Then("I can see my gift cards on the reward", then.idVisible(ids.WALLET_ITEM_TITLE("£10")));
      });

      When("I tap on a gift card", when.tapID(ids.WALLET_ITEM_TITLE("£10")), async () => {
        Then("I should be on the purchase screen with the correct copy", then.onRewardPurchasedScreen(data.CORE_REWARDS_NIKE, "en-GB"));
      });

      When("I go back from the purchased gift card screen", when.tapID(ids.LEFT_HEADING_BUTTON()), async () => {
        Then("I can see my gift cards on the reward", then.idVisible(ids.WALLET_ITEM_TITLE("£10")));
      });

      When("I go back from the reward wallet items screen", when.tapID(ids.LEFT_HEADING_BUTTON(getLocalisedString("Wallet"))), async () => {
        Then("I can see my purchased rewards", then.idVisible(ids.WALLET_CARD_TITLE(data.CORE_REWARDS_NIKE.data.name)));
      });

      When("I go back from the rewards wallet screen", when.tapID(ids.LEFT_HEADING_BUTTON(getLocalisedString("Wallet"))), async () => {
        Then("I am back on the tab view", then.idVisible(ids.BUTTON_TOP_LEFT_BAR));
      });

      When("I press the menu button", when.tapID(ids.BUTTON_TOP_LEFT_BAR), async () => {
        Then("I can see settings", then.idVisible(ids.MENU_ITEM(getLocalisedString("Settings"))));
      });

      When("I tap settings", when.tapID(ids.MENU_ITEM(getLocalisedString("Settings"))), async () => {
        Then("I can see the settings screen", then.idVisible(ids.SETTINGS_SCREEN));
      });

      When("I scroll down to change my language", when.scrollWithLimitedAttemptsUntilIdVisible(ids.SETTINGS_SCREEN_SCROLL, ids.TEXT_TEMPLATE(getLocalisedString("Language"))), async () => {
        Then("I can see the option to change my language", then.idVisible(ids.TEXT_TEMPLATE(getLocalisedString("Language"))));
      });

      When("I press the option to change my language", when.tapID(ids.TEXT_TEMPLATE(getLocalisedString("Language"))), async () => {
        Then("I can see a different language option", then.idVisible(ids.SETTINGS_NAME("en-US")));
      });

      When("I select a different language", when.tapID(ids.SETTINGS_NAME("en-US")), async () => {
        Then("The app should restart, bringing me to the tab view", then.idVisible(ids.NAV_BAR("rewards")));
      });

      When("I go to the rewards tab", when.tapID(ids.NAV_BAR("rewards")), async () => {
        Then("I can see the wallet navigation icon", then.idVisible(ids.SHINE_BUTTON(getLocalisedString("Wallet"))));
      });

      When("I tap the wallet navigation icon", when.tapID(ids.SHINE_BUTTON(getLocalisedString("Wallet"))), async () => {
        Then("I can see my purchased rewards", then.idVisible(ids.WALLET_CARD_TITLE(data.CORE_REWARDS_NIKE.data.name)));
      });

      When("I tap on a reward", when.tapID(ids.WALLET_CARD_TITLE(data.CORE_REWARDS_NIKE.data.name), 1000), async () => {
        Then("I can see my gift cards on the reward", then.idVisible(ids.WALLET_ITEM_TITLE("£10")));
      });

      When("I tap on a gift card", when.tapID(ids.WALLET_ITEM_TITLE("£10")), async () => {
        Then("I should be on the purchase screen with the correct copy", then.onRewardPurchasedScreen(data.CORE_REWARDS_NIKE, "en-US"));
      });
    });
  });

  Scenario("As a member with two concurrent employments, one with store enabled and one without, I should be able to access the store", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see that I have access to the rewards store, even though one of my employments does not", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should see the 'Avios' Miles reward", then.rewardVisible(data.CORE_REWARDS_AVIOS));
    });
    When("I scroll down this page", when.scrollFromID(ids.REWARDS_SCREEN, "up", "fast", 0.7), async () => {
      Then("I should see the 'Ultra Amazin' reward, only visible to those with store access level 4", then.rewardVisible(data.CORE_REWARDS_ULTRA_AMAZIN));
    });
  });

  Scenario("As a user with multiple employments, if one of my employments does not have reward store settings explicitly set, my overall store access should resolve to the default values", scenario.start, async () => {
    // storeAccessLevel has been purged as a concept, but this scenario still serves as a test for concurrent employments settings conflict resolutions
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_130.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see that I have access to the rewards store, as is the default setting value", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      When("I scroll down this page", when.scrollWithLimitedAttemptsUntilIdVisible(ids.REWARDS_SCREEN, data.CORE_REWARDS_AMAZUNG.data._id, "up"), async () => {
        Then("I should see the 'Amazung Prime' reward, as my storeAccessLevel resolved to the default setting value", then.rewardVisible(data.CORE_REWARDS_AMAZUNG));
      });
    });
  });

  Scenario("I can login and see the Tillo rewards store item for Hobbycraft", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_131.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see that I have access to the rewards store", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should see my YuCoin balance on the top right showing", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(5200)));
      Then("I should see the 'Hobbycraft' reward from Tillo", then.rewardVisible(data.CORE_REWARDS_HOBBYCRAFT));
    });
    When("I click on the 'Hobbycraft' card", when.tapRewardInList(data.CORE_REWARDS_HOBBYCRAFT), async () => {
      Then("I should see the 'Hobbycraft' reward page", then.onRewardScreen(data.CORE_REWARDS_HOBBYCRAFT));
    });
    When("I click on the 'Buy voucher with YuCoin' button", when.tapID(ids.BUTTON_BASE("Buy voucher with YuCoin", false)), async () => {
      Then("I should see the denominations modal", then.denominationListVisible(data.CORE_REWARDS_HOBBYCRAFT, 5200));
    });
    When("I click on '£25 - 2,500 YuCoin' ", when.tapID(ids.TEXT_TEMPLATE("£25 - 2,500 YuCoin", undefined)), async () => {
      Then("I should see the confirm modal", then.textVisible("Confirm purchase"));
    });
    When("I tap 'Confirm'", when.tapText("Confirm"), async () => {
      Then("I should be on the purchase screen", then.onRewardPurchasedScreen(data.CORE_REWARDS_HOBBYCRAFT));
      Then("I should see my updated YuCoin balance on the top right showing", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(2700)));
    });
  });

  Scenario("I can enter my mobile number when claiming a Bluelabel or Shoprite reward voucher", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_132.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see that I have access to the rewards store", then.rewardsLocationModalVisible());
    });
    When("I dismiss the modal", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should see my YuCoin balance on the top right showing", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(25200)));
    });
    When("I click on the 'MTN' reward", when.tapRewardInList(data.CORE_REWARDS_MTN), async () => {
      Then("I should see the 'MTN' reward page", then.onRewardScreen(data.CORE_REWARDS_MTN));
    });
    When("I click on the 'Claim Reward' button", when.tapID(ids.BUTTON_BASE("Claim Reward", false)), async () => {
      When("I click on 'Monthly 120MB Data' denomination", when.tapID(ids.TEXT_TEMPLATE("Monthly 120MB Data - 815 YuCoin", undefined)), async () => {
        Then("I should be brought to the mobile number entry screen", then.idVisible(ids.TEXT_TEMPLATE("We need your mobile phone number to proceed:", "h3")));
      });
    });
    When("I enter my mobile number", when.enterMobileNumber("0830012300"), async () => {
      When("I tap 'Continue'", when.tapID(ids.BUTTON_BASE("Continue", false)), async () => {
        Then("I should be on the final confirmation screen", then.idVisible(ids.TEXT_TEMPLATE("You're about to buy R 20 worth of mobile data for 815 YuCoin.", "h3")));
      });
    });
    When("I close the claim modal", when.tapID(ids.SCREEN_CLOSE), async () => {
      When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
        When("I click on the 'Checkers' reward", when.tapRewardInList(data.CORE_REWARDS_CHECKERS), async () => {
          Then("I should see the 'Checkers' reward page", then.onRewardScreen(data.CORE_REWARDS_CHECKERS));
        });
      });
    });
    When("I scroll to the bottom", when.scrollFromID(ids.SDUI_BODY_SCROLL, "up", "fast"), async () => {
      Then("I should see the claim reward button", then.idVisible(ids.BUTTON_BASE("Claim Reward", false)));
    });
    When("I click on the 'Claim Reward' button", when.tapID(ids.BUTTON_BASE("Claim Reward", false)), async () => {
      When("I click on 'Monthly 120MB Data' denomination", when.tapID(ids.TEXT_TEMPLATE("R 25 - 1,020 YuCoin", undefined)), async () => {
        Then("I should be brought to the mobile number entry screen", then.idVisible(ids.TEXT_TEMPLATE("Let us know the mobile number associated with your Shoprite account:", "h3")));
      });
    });
    When("I enter my mobile number", when.enterMobileNumber("0830012300"), async () => {
      When("I tap 'Continue'", when.tapID(ids.BUTTON_BASE("Continue", false)), async () => {
        Then("I should be on the final confirmation screen", then.idVisible(ids.TEXT_TEMPLATE("You're about to buy a R 25 saving voucher for 1,020 YuCoin.", "h3")));
      });
    });
    When("I confirm the final modal", when.tapID(ids.BUTTON_BASE("Confirm", false)), async () => {
      Then("I should see the claimed voucher entry", then.idVisible(ids.VOUCHER_CODE_TITLE("R 25 Checkers voucher")));
      Then("I should see my updated YuCoin balance on the top right showing", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(24180)));
    });
  });

  Scenario("Rewards from different regions should not appear together when changing store location", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("rewards", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see that I have access to the rewards store", then.rewardsLocationModalVisible());
    });
    When("I confirm the UK as my selected store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 3500), async () => {
      Then("I should see the 'Avios' Miles reward", then.rewardVisible(data.CORE_REWARDS_AVIOS));
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
      });
    });
    When("I scroll down", when.scrollFromID(ids.SETTINGS_SCREEN_SCROLL, "up", "slow", 0.4), async () => {
      When("I tap on the 'Store location' option", when.tapID(ids.TEXT_TEMPLATE("Store location", undefined), 3500), async () => {
        When("I select Argentina as my preferred store location", when.tapID(ids.TEXT_TEMPLATE("Argentina", undefined), 500), async () => {
          When("I confirm my store location", when.tapID(ids.STORE_LOCATION_CONFIRM_BUTTON, 500), async () => {
            Then("I should be back on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
          });
        });
      });
    });
    When("I close settings", when.tapID(ids.BUTTON_CLOSE_HEADER("Settings"), 500), async () => {
      Then("I should be back on the reward store", then.idVisible(ids.SHOPFRONT_REWARDS_LIST, 2500));
      Then("I should not see any UK-specific rewards", then.idNotVisible(ids.REWARD_ITEM(data.CORE_REWARDS_AVIOS.data._id), 2500));
    });
  });
});
