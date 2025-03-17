import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem, User73LeaderboardLB1Item } from "activity/leaderboard/_resources/fixtures";
import { getFullName } from "_utils/users";
import { getTranslation } from "_utils/translations/getTranslations";
import { P2P_GIFTING_AMOUNTS, P2P_MESSAGES } from "./_resources/constants";

const locale = process.env.TARGET_LOCALE || "en-GB";
const translation = getTranslation(locale);

Feature("P2P gifting", async () => {
  Scenario("I can send someone a YuCoin gift from the leaderboard", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_18, data.AUTH_18), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
          Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
          Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem, User73LeaderboardLB1Item], 2000));
        });
      });
    });
    When("I click on Lynton Stock", when.clickUser(data.CUSTOMER_50), async () => {
      Then("I should be on the Inspect screen", then.isOnInspectScreen);
      Then("Lyntons's name is visible", then.idVisible(ids.TEXT_TEMPLATE(getFullName(data.CUSTOMER_50))));
      Then("I can see the P2P gifting modal", then.giftingModalVisible(data.CUSTOMER_50.data.firstName));
    });
    When("I click to send a gift", when.tapID(ids.P2P_START_BUTTON, 2000), async () => {
      When("I click on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
        Then("Then I am on the P2P gifting selection screen with Lynton already selected", then.giftingSelectionScreenVisible([data.CUSTOMER_50]));
      });
    });
    When("I search for a user who hasn't consented to the leaderboard", when.typeViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_16)), async () => {
      Then("I should not see any user", then.searchReferralVisible);
    });
    When("I search for a different user who has consented - Tywin Lannister", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_73)), async () => {
      Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search")));
    });
    When("I select Tywin Lanister", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search")), async () => {
      Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_73]));
    });
    When("I tap next to see the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      Then("I see the message selection screen", then.messageSelectionScreenVisible(2));
    });
    When("I tap next without selecting a message", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      Then("I am still on the message selection screen", then.messageSelectionScreenVisible(2));
    });
    When("I select You got this!", when.tapID(ids.P2P_MESSAGE(P2P_MESSAGES[4])), async () => {
      When("I tap next", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        Then("I see the correct YuCoin gift amounts, with 250 not displaying due to my total value", then.giftingAmountScreenVisible(2, 520));
      });
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go back again", when.tapID(ids.BACK_BUTTON), async () => {
        When("I deselect Tywin Lannister", when.tapID(ids.P2P_DESELECT_USER(data.CUSTOMER_73.data.firstName)), async () => {
          Then("I can see only one user selected", then.selectedUsersVisible([data.CUSTOMER_50]));
        });
      });
    });
    When("I tap next to get to the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      When("I tap next again to go to the selection page", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        Then("I see the new header clarifying the sender loses YuCoin", then.textVisible("Add some of your YuCoin as a gift!"));
        Then("I see the correct YuCoin gift amounts, with 250 now displaying as I'm only sending to 1 person", then.giftingAmountScreenVisible(1, 520));
      });
    });
    When("I select 250 YuCoin", when.tapID(ids.P2P_GIFTING_AMOUNT(`${P2P_GIFTING_AMOUNTS[4]} YuCoin`)), async () => {
      When("I tap next to see the preview screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        When("I tap to add a sticker", when.tapID(ids.P2P_STICKER, 2000), async () => {
          Then("I should see the stickers modal appear", then.idVisible(ids.P2P_STICKER_MODAL));
        });
      });
    });
    When("I tap on the 'trophy' sticker", when.tapID(ids.P2P_STICKER_ITEMS("trophy"), 2000), async () => {
      When("I tap to select the sticker", when.tapID(ids.CTA_SELECT, 1500), async () => {
        Then("I am on the preview screen", then.onGiftingPreviewScreen(P2P_MESSAGES[4], P2P_GIFTING_AMOUNTS[4]));
        Then("I should see the background slider", then.idVisible(ids.P2P_SLIDER, 1000));
      });
    });
    When("I tap to select the ocean background", when.tapID(ids.P2P_SLIDER_ITEM("ocean"), 1500), async () => {
      When("I press to send the gift", when.tapID(ids.P2P_SEND_BUTTON, 1500), async () => {
        When("I wait", when.wait(3000), async () => {
          Then("I am on the gifting success screen", then.onGiftingSuccessScreen(1));
        });
      });
    });
    When("I click to continue", when.pressGiftingGotIt, async () => {
      Then("I am back on the leaderboard screen I started on", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
      Then("My YuCoin amount is depleted to the correct amount - 270 yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(270)));
    });
    When("I log out and log in again as Lynton Stock", when.fullRestartAndLogin(data.CUSTOMER_50, data.AUTH_50, true, 3500), async () => {
      When("I dismiss the modal", when.tapID(ids.BUTTON_BASE("SIGN_UP_REWARD_SCREEN")), async () => {
        When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
          Then("I can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
        });
      });
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should be in the gift view screen and see the correct background", then.idVisible(ids.P2P_GIFT_VIEW("ocean"), 2500));
      Then("I can see the gift message", then.idVisible(ids.P2P_MESSAGE("You got this! 💪"), 2500));
      Then("I can see the correct gift sticker", then.idVisible(ids.P2P_STICKER_ITEMS("trophy")));
    });
  });

  Scenario("I should be restricted from sending a gift to the same user after reaching the gifting limit, and I can see 18 selectable messages and 24 selectable stickers", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_18, data.AUTH_18), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        When("I go to my YuScreen", when.tapID(ids.NAV_BAR("yu")), async () => {
          Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
        });
      });
    });
    When("I tap on the hero card", when.tapID(ids.HERO_CARD_SECTION), async () => {
      Then("I should see the soft landing intro screen", then.idVisible(ids.GIFTING_INTRO));
    });
    When("I tap on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
      Then("Then I am on the gifting selection screen", then.idVisible(ids.INPUT_FIELD));
    });
    When("I search for Ryan Howard", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_17)), async () => {
      Then("I should see that Rayan can not be selected", then.idVisible(ids.DISABLED_USER_REASON("Gift limit reached, try again tomorrow.")));
    });
    When("I search for a different user - Lynton Stock", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_50)), async () => {
      Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_50), undefined, undefined, "search")));
    });
    When("I select Lynton", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_50), undefined, undefined, "search")), async () => {
      Then("I should see Lynton selected", then.selectedUsersVisible([data.CUSTOMER_50]));
    });
    When("I tap next to see the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      Then("I should not see the soft landing intro screen for the second time", then.idNotVisible(ids.GIFTING_INTRO));
      Then("I can see and select through all 18 gift messages", then.cycleThroughGiftMessages);
    });
    When("I tap next", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      When("I select 250 YuCoin", when.tapID(ids.P2P_GIFTING_AMOUNT(`${P2P_GIFTING_AMOUNTS[4]} YuCoin`)), async () => {
        When("I tap next to see the message preview screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
          Then("I should be in the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("yuniversal")));
        });
      });
    });
    When("I tap to add a sticker", when.tapID(ids.P2P_STICKER, 2000), async () => {
      Then("I should see the stickers modal appear", then.idVisible(ids.P2P_STICKER_MODAL));
      Then("I can see and select through all 24 stickers", then.cycleThroughStickers);
    });
  });

  Scenario("I should be able to see my gifts from the notification center", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_17, data.AUTH_17), async () => {
      When("I trigger the gift notification", when.triggerGiftReceivedNotification(data.CUSTOMER_18, data.USER_18_GIFT_A), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
      Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true), 2500));
      Then("I should see the correct MaxYu values before the gift claim", then.idVisible(ids.WEEKLY_PROGRESS_BAR(200, 240, "#E30D76"), 2000));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should be in the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
      Then("I can see the gift message", then.idVisible(ids.P2P_MESSAGE(data.USER_18_GIFT_A.data.message), 2500));
    });
    When("I tap to thank them for the gift", when.tapID(ids.P2P_THANK_THEM_MESSAGE, 2500), async () => {
      Then("I can see the 'Already thanked them' message", then.textVisible(getTranslation(locale).screens.gifting.already_thanked_them, 2500));
      Then("I should see the correct gift amount", then.idVisible(ids.SENDER_GIFTING_AMOUNT(data.USER_18_GIFT_A.data.amount), 2500));
    });
    When("I tap to send my own message", when.tapID(ids.P2P_SEND_YOUR_OWN_MESSAGE, 2500), async () => {
      Then("I should see the soft landing intro screen", then.idVisible(ids.GIFTING_INTRO));
    });
    When("I tap to close the soft landing intro screen", when.tapID(ids.SCREEN_CLOSE, 2500), async () => {
      Then("I should be back on my yuscreen", then.yuScreenV5HeaderVisible(false, "Ryan Howard", "Forest", "2", false));
      Then("I should see my updated YuCoin banalace", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(810), 2500));
      Then("I can also see the correct MaxYu values after the gift claim", then.idVisible(ids.WEEKLY_PROGRESS_BAR(450, 240, "#E30D76"), 2000));
    });
  });

  Scenario("Business leavers cannot send gifts but can still view previously received gifts", scenario.start, async () => {
    Given("I login as a business leaver", given.logInAndGoToTab("yu", data.CUSTOMER_28, data.AUTH_28), async () => {
      When("I trigger the gift notification", when.triggerGiftReceivedNotification(data.CUSTOMER_17, data.USER_17_GIFT_A), async () => {
        Then("I should not see the gifting hero card available as a business leaver", then.idNotVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("The notification centre should display a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true), 2500));
    });
    When("I open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I should see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should still be able to see the gift my colleague sent before leaving", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
      Then("I can see the correct gift message", then.idVisible(ids.P2P_MESSAGE(data.USER_17_GIFT_A.data.message), 2500));
    });
  });

  Scenario("I should only see the notification center 'Thanks for the gift' dot once and not again when I reopen the notification center", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_19, data.AUTH_19), async () => {
      When("I trigger the 'Thanks for the gift!' notification", when.triggerThanksForGiftNotification(data.CUSTOMER_20, data.USER_20_GIFT_A), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
      Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true), 2500));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I can see the users name in the correct way", then.textVisible(`${getFullName(data.CUSTOMER_20, "UK")} said thanks.`));
      Then("I can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("Thanks for the gift!"), 2500));
      Then("I can see the pink arrow", then.idNotVisible(ids.ARROW_BUTTON, 2500));
      Then("I can see the pink dot", then.idNotVisible(ids.PINK_DOT, 2500));
    });
  });

  Scenario("I should only see the notification center 'You received a gift' pink dot once and whereas the pink arrow should stay", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_19, data.AUTH_19), async () => {
      When("I trigger the 'You received a gift!' notification", when.triggerGiftReceivedNotification(data.CUSTOMER_20, data.USER_20_GIFT_B), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
      Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true), 2500));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
      Then("I can see the user name in the correct way", then.textVisible(`Check out what ${getFullName(data.CUSTOMER_20, "UK")} sent you.`));
      Then("I can see the pink arrow", then.idVisible(ids.ARROW_BUTTON, 2500));
      Then("I can see the pink dot", then.idVisible(ids.PINK_DOT, 2500));
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should be in the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
    });
    When("I tap the X to close the gift", when.tapID(ids.SCREEN_CLOSE, 2500), async () => {
      Then("I am back onto the notifications page and can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
      Then("I can see the pink arrow is still visible", then.idVisible(ids.ARROW_BUTTON, 2500));
      Then("I should no longer see the pink dot", then.idNotVisible(ids.PINK_DOT, 2500));
    });
  });

  // bringing this function in to test fix for LCS-758. Will prevent people being able to get around the sending limit
  Scenario("When returning a gift through the notification centre, no users are pre-selected", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_17, data.AUTH_17), async () => {
      When("I trigger the gift notification", when.triggerGiftReceivedNotification(data.CUSTOMER_18, data.USER_18_GIFT_A), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
      Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true), 2500));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should be in the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
      Then("I can see the gift message", then.idVisible(ids.P2P_MESSAGE(data.USER_18_GIFT_A.data.message), 2500));
    });
    When("I tap to send my friends a gift", when.tapID(ids.RETURN_GIFT_BUTTON, 2000), async () => {
      Then("I see a button to get started", then.idVisible(ids.CTA_GET_STARTED, 2000));
    });
    When("I click on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
      Then("Then I am on the P2P gifting selection screen", then.textVisible(translation.screens.gifting.top_bar.select_target.heading, 2000));
      Then("I see the input field", then.idVisible(ids.INPUT_FIELD));
      Then("The input field has no value", then.inputHasValue(ids.INPUT_FIELD, ""));
    });
  });
});

Scenario("I can send multiple people a YuCoin gift", scenario.start, async () => {
  Given("I login", given.loginAsUser(data.CUSTOMER_18, data.AUTH_18), async () => {
    When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
      When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
        Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem, User73LeaderboardLB1Item], 2000));
      });
    });
  });
  When("I click on Lynton Stock", when.clickUser(data.CUSTOMER_50), async () => {
    Then("I should be on the Inspect screen", then.isOnInspectScreen);
    Then("Lyntons's name is visible", then.idVisible(ids.TEXT_TEMPLATE(getFullName(data.CUSTOMER_50))));
    Then("I can see the P2P gifting modal", then.giftingModalVisible(data.CUSTOMER_50.data.firstName));
  });
  When("I click to send a gift", when.tapID(ids.P2P_START_BUTTON, 2000), async () => {
    When("I click on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
      Then("Then I am on the P2P gifting selection screen with Lynton already selected", then.giftingSelectionScreenVisible([data.CUSTOMER_50]));
    });
  });
  When("I search for a different user who has consented - Tywin Lannister", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_73)), async () => {
    Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search")));
  });
  When("I select Tywin Lanister", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search")), async () => {
    Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_73]));
  });
  When("I search for yet another user who has consented - Gill Stock", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_47)), async () => {
    Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_47), undefined, undefined, "search")));
  });
  When("I select Gill Stock", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_47), undefined, undefined, "search")), async () => {
    Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_73, data.CUSTOMER_47]));
  });
  When("I tap next to see the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
    Then("I see the message selection screen", then.messageSelectionScreenVisible(3));
  });
  When("I select You got this!", when.tapID(ids.P2P_MESSAGE(P2P_MESSAGES[4])), async () => {
    When("I tap next", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      Then("I see the correct YuCoin gift amounts, with 250 not displaying due to my total value", then.giftingAmountScreenVisible(3, 520));
    });
  });
  When("I select 100 YuCoin", when.tapID(ids.P2P_GIFTING_AMOUNT(`${P2P_GIFTING_AMOUNTS[3]} YuCoin`)), async () => {
    When("I tap next to see the preview screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      When("I tap to add a sticker", when.tapID(ids.P2P_STICKER, 2000), async () => {
        Then("I should see the stickers modal appear", then.idVisible(ids.P2P_STICKER_MODAL));
      });
    });
  });
  When("I tap on the 'trophy' sticker", when.tapID(ids.P2P_STICKER_ITEMS("trophy"), 2000), async () => {
    When("I tap to select the sticker", when.tapID(ids.CTA_SELECT, 1500), async () => {
      Then("I am on the preview screen", then.onGiftingPreviewScreen(P2P_MESSAGES[4], P2P_GIFTING_AMOUNTS[3]));
      Then("I should see the background slider", then.idVisible(ids.P2P_SLIDER, 1000));
    });
  });
  When("I tap to select the ocean background", when.tapID(ids.P2P_SLIDER_ITEM("ocean"), 1500), async () => {
    When("I press to send the gift", when.tapID(ids.P2P_SEND_BUTTON, 1500), async () => {
      When("I wait", when.wait(3000), async () => {
        Then("I am on the gifting success screen", then.onGiftingSuccessScreen(3));
      });
    });
  });
  When("I click to continue", when.pressGiftingGotIt, async () => {
    Then("I am back on the leaderboard screen I started on", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
    Then("My YuCoin amount is depleted by 300 yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(220)));
  });
});
