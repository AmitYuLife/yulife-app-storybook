import { Scenario, Given, When, Then, Feature, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import * as consts from "./_resources/constants";
import { P2P_GIFTING_AMOUNTS, P2P_MESSAGES } from "activity/p2p_gifting/_resources/constants";

Feature("As a user I can see birthday notifications in the app if consented, and send gifts accordingly", async () => {
  Scenario("I can when it's other users birthdays and send them a gift", scenario.start, async () => {
    Given("I trigger the nofitications", given.triggerBirthdayNotifications, async () => {
      Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_47, data.AUTH_47), async () => {
        Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
        Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Gill Stock", "Forest", "1", true));
        Then("I can see I have a notification", then.idVisible(ids.NOTIF_ICON_BADGE(true, 1)));
      });
    });
    When("I tap to see the notification", when.tapID(ids.NOTIF_ICON_BADGE(true, 1)), async () => {
      Then("I should see the birthday notification for Michael Scott", then.birthdayNotificationVisible(data.CUSTOMER_18));
    });
    When("I tap on the notification", when.tapBirthdayNotification(data.CUSTOMER_18), async () => {
      Then("I see the message selection screen", then.messageSelectionScreenVisible(1));
    });
    When("I select Have a nice day!", when.tapID(ids.P2P_MESSAGE(P2P_MESSAGES[5])), async () => {
      When("I tap next", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        Then("I see the correct YuCoin gift amounts", then.giftingAmountScreenVisible(1, 700));
      });
    });
    When("I select 25 YuCoin", when.tapID(ids.P2P_GIFTING_AMOUNT(`${P2P_GIFTING_AMOUNTS[1]} YuCoin`)), async () => {
      When("I tap next to see the preview screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        When("I tap to add a sticker", when.tapID(ids.P2P_STICKER, 2000), async () => {
          Then("I should see the stickers modal appear", then.idVisible(ids.P2P_STICKER_MODAL));
        });
      });
    });
    When("I tap on one of the gift stickers", when.tapID(ids.P2P_STICKER_ITEMS("gift-3"), 2000), async () => {
      Then("I am on the preview screen", then.onGiftingPreviewScreen(P2P_MESSAGES[5], P2P_GIFTING_AMOUNTS[1]));
      Then("I should see the background slider", then.idVisible(ids.P2P_SLIDER, 1000));
    });
    When("I tap to select the ocean background", when.tapID(ids.P2P_SLIDER_ITEM("ocean"), 1500), async () => {
      When("I press to send the gift", when.tapID(ids.P2P_SEND_BUTTON, 1500), async () => {
        When("I wait", when.wait(3000), async () => {
          Then("I am on the gifting success screen", then.onGiftingSuccessScreen(1));
        });
      });
    });
    When("I click to continue", when.pressGiftingGotIt, async () => {
      Then("I should be back on the YuScreen", then.yuScreenV5HeaderVisible(false, "Gill Stock", "Forest", "1", true));
      Then("I can see my YuCoin amount has dropped by 25", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(675)));
    });
    When("I tap the menu", when.tapID(ids.BUTTON_TOP_LEFT_BAR), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        When("I tap leaderboards", when.tapText("Leaderboards and birthday"), async () => {
          Then("I can see the Birthday toggle, currently set to true", then.birthdayToggleVisible(true));
        });
      });
    });
    When("I tap the toggle", when.tapID(ids.BIRTHDAY_TOGGLE(true)), async () => {
      Then("I see the modal for turning off birthdays", then.birthdayModalVisible(false));
    });
  });

  Scenario("If I havn't consented to birthdays, I don't see notifications, but I can toggle them on", scenario.start, async () => {
    Given("I trigger the nofitications", given.triggerBirthdayNotifications, async () => {
      Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_17, data.AUTH_17), async () => {
        Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
        Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Ryan Howard", "Forest", "2", false));
        Then("I can see I don't have a notification as I havn't consented", then.idVisible(ids.NOTIF_ICON_BADGE(false)));
      });
    });
    When("I tap the menu", when.tapID(ids.BUTTON_TOP_LEFT_BAR), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        When("I tap leaderboards", when.tapText("Leaderboards and birthday"), async () => {
          Then("I can see the Birthday toggle, currently set to false", then.birthdayToggleVisible(false));
        });
      });
    });
    When("I tap the toggle", when.tapID(ids.BIRTHDAY_TOGGLE(false)), async () => {
      Then("I see the modal for turning on birthdays", then.birthdayModalVisible(true));
    });
    When("I tap to turn on birthdays", when.tapID(ids.GENERIC_SCREEN_CTA(consts.turnOnBirthdaysConfirm)), async () => {
      Then("I can see the Birthday toggle is now set to true", then.birthdayToggleVisible(true));
    });
    When("I close the app before I press the claim button", when.restartWithData, async () => {
      Given("I trigger the nofitications", given.triggerBirthdayNotifications, async () => {
        Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_17, data.AUTH_17, true), async () => {
          Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
          Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Ryan Howard", "Forest", "2", false));
          Then("I can see I now do have a notification", then.idVisible(ids.NOTIF_ICON_BADGE(true, 1)));
        });
      });
    });
    When("I tap to see the notification", when.tapID(ids.NOTIF_ICON_BADGE(true, 1)), async () => {
      Then("I should see the birthday notification for Michael Scott", then.birthdayNotificationVisible(data.CUSTOMER_18));
    });
  });

  Scenario("As a user without a birthday set, I am presented with a modal to do so when triggering the toggles", scenario.start, async () => {
    Given("I trigger the nofitications", given.triggerBirthdayNotifications, async () => {
      Given("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_19, data.AUTH_19), async () => {
        Then("I should see a menu icon in the top left", then.idVisible(ids.MENU_ICON, 1500));
        Then("I can see I don't have a notification as I havn't consented", then.idVisible(ids.NOTIF_ICON_BADGE(false)));
      });
    });
    When("I tap the menu", when.tapID(ids.BUTTON_TOP_LEFT_BAR), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        When("I tap leaderboards", when.tapText("Leaderboards and birthday"), async () => {
          Then("I can see the Birthday toggle, currently set to false", then.birthdayToggleVisible(false));
        });
      });
    });
    When("I tap the toggle", when.tapID(ids.BIRTHDAY_TOGGLE(false)), async () => {
      Then("I see the modal for setting my birthday", then.onSetBirthdayModal);
    });
  });
});
