import { Feature, Scenario, Given, When, Then, ScenarioOnly, WhenSkip, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem, User73LeaderboardLB1Item } from "activity/leaderboard/_resources/fixtures";
import { getFullName } from "_utils/users";
import { getTranslation } from "_utils/translations/getTranslations";
import { P2P_GIFTING_AMOUNTS, P2P_MESSAGES, P2P_GIFTING_STICKERS } from "./_resources/constants";
import moment from "moment";
import { GiftNpcAltra } from "./_resources/fixtures";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";

const locale = process.env.TARGET_LOCALE || "en-GB";
const translation = getTranslation(locale);

Feature("P2P gifting - UK", async () => {
  Scenario("I can send someone a YuCoin gift from the leaderboard", scenario.start, async () => {
    Given("I login", given.loginAsUser(data.CUSTOMER_18, data.AUTH_18, true, "UK"), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        When("I go to the leaderboard screen", when.tapID(ids.NAV_BAR("leaderboard"), 4000), async () => {
          Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
          Then("I should see the leaderboard", then.leaderboardVisible([User17LeaderboardItem, User18LeaderboardItem, User47LeaderboardItem, User50LeaderboardItem, User73LeaderboardLB1Item], 2000));
        });
      });
    });
    When("I click on Lynton Stock", when.clickUser(data.CUSTOMER_50), async () => {
      Then("I should be on the Inspect screen", then.isOnInspectScreen);
      Then("Lyntons's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_50))));
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
      Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search"), 3000));
    });
    When("I search for Tywin Lanister", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search"), 2000), async () => {
      When("I select Tywin Lanister", when.tapID(ids.LEADERBOARD_EMPLOYEE_NAME(getFullName(data.CUSTOMER_73)), 2500), async () => {
        Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_73]));
      });
    });
    When("I tap next to see the message screen", when.tapID(ids.P2P_NEXT_BUTTON, 2000), async () => {
      Then("I see the message selection screen", then.messageSelectionScreenVisible(2));
    });
    When("I tap next without selecting a message", when.tapID(ids.P2P_NEXT_BUTTON, 2000), async () => {
      Then("I am still on the message selection screen", then.messageSelectionScreenVisible(2));
    });
    When("I select You got this!", when.tapID(ids.P2P_MESSAGE(P2P_MESSAGES[4]), 2000), async () => {
      When("I tap next", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        Then("I see the correct YuCoin gift amounts, with 250 not displaying due to my total value", then.giftingAmountScreenVisible(2, 520));
      });
    });
    When("I go back", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      When("I go back again", when.tapID(ids.BACK_BUTTON, 2000), async () => {
        When("I deselect Tywin Lannister", when.tapID(ids.P2P_DESELECT_USER(data.CUSTOMER_73.data.firstName)), async () => {
          Then("I can see only one user selected", then.selectedUsersVisible([data.CUSTOMER_50]));
        });
      });
    });
    When("I tap next to get to the message screen", when.tapID(ids.P2P_NEXT_BUTTON, 2000), async () => {
      When("I tap next again to go to the selection page", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        Then("I see the new header clarifying the sender loses YuCoin", then.textVisible("Add some of your YuCoin as a gift!"));
        Then("I see the correct YuCoin gift amounts, with 250 now displaying as I'm only sending to 1 person", then.giftingAmountScreenVisible(1, 520));
      });
    });
    When("I select 250 YuCoin", when.tapID(ids.P2P_GIFTING_AMOUNT(`${P2P_GIFTING_AMOUNTS[4]} YuCoin`), 2000), async () => {
      When("I tap next to see the preview screen", when.tapID(ids.P2P_NEXT_BUTTON, 2000), async () => {
        When("I tap to add a sticker", when.tapID(ids.P2P_STICKER, 2000), async () => {
          Then("I should see the stickers modal appear", then.idVisible(ids.P2P_STICKER_MODAL));
        });
      });
    });
    When("I tap on the 'trophy' sticker", when.tapID(ids.P2P_STICKER_ITEMS("trophy"), 2000), async () => {
      Then("I am on the preview screen", then.onGiftingPreviewScreen(P2P_MESSAGES[4], P2P_GIFTING_AMOUNTS[4]));
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
      Then("I am back on the leaderboard screen I started on", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_C1.data.name)));
      Then("My YuCoin amount is depleted to the correct amount - 270 yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(270)));
    });
    When("I log out and log in again as Lynton Stock", when.fullRestartAndLogin(data.CUSTOMER_50, data.AUTH_50), async () => {
      When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 4000), async () => {
        Then("I can see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
      });
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should be in the gift view screen and see the correct background", then.idVisible(ids.P2P_GIFT_VIEW("ocean"), 2500));
      Then("I can see the gift message", then.idVisible(ids.P2P_MESSAGE("You got this! 💪"), 2500));
      Then("I can see the correct gift sticker", then.idVisible(ids.P2P_STICKER_ITEMS("trophy")));
    });
  });

  // @UPDATE skipping as on the runners it can seem to select a user once searched properly - looking into changing how we do this
  ScenarioSkip("I should be restricted from sending a gift to the same user after reaching the gifting limit, and I can see 18 selectable messages and 33 selectable stickers", scenario.start, async () => {
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
      Then(`I can see and select through all ${P2P_MESSAGES.length} gift messages`, then.cycleThroughGiftMessages);
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
      Then(`I can see and select through all ${P2P_GIFTING_STICKERS.length} stickers`, then.cycleThroughStickers);
    });
    When("I tap the magic sticker", when.tapID(ids.P2P_STICKER_ITEMS("magic"), 2000), async () => {
      Then("I should see the magic sticker selected", then.idVisible(ids.P2P_STICKER_ITEMS("magic"), 2000));
      Then("I should see the slay message selected", then.idVisible(ids.P2P_MESSAGE("SLAY 💅"), 2000));
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
      Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true, 0), 2500));
      Then("I should see the correct MaxYu values before the gift claim", then.idVisible(ids.WEEKLY_PROGRESS_BAR(200, 270, "#E30D76"), 2000));
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
    When("I tap to send my friends a gift", when.tapID(ids.P2P_SEND_YOUR_FRIENDS_A_GIFT, 2500), async () => {
      Then("I should see the soft landing intro screen", then.idVisible(ids.GIFTING_INTRO));
    });
    When("I tap to close the soft landing intro screen", when.tapID(ids.SCREEN_CLOSE, 2500), async () => {
      Then("I should be back on my yuscreen", then.yuScreenV5HeaderVisible(false, "Ryan Howard", "Forest", "2", false));
      Then("I should see my updated YuCoin banalace", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(810), 2500));
      Then("I can also see the correct MaxYu values after the gift claim", then.idVisible(ids.WEEKLY_PROGRESS_BAR(450, 270, "#E30D76"), 2000));
    });
  });

  Scenario("Business leavers cannot send gifts but can still view previously received gifts", scenario.start, async () => {
    Given("I login as a business leaver", given.logInAndGoToTab("yu", data.CUSTOMER_28, data.AUTH_28), async () => {
      When("I trigger the gift notification", when.triggerGiftReceivedNotification(data.CUSTOMER_17, data.USER_17_GIFT_A), async () => {
        Then("I should not see the gifting hero card available as a business leaver", then.idNotVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I should see my gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
    });
    When("I tap to open the notification message", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should still be able to see the gift my colleague sent before leaving", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
      Then("I can see the correct gift message", then.idVisible(ids.P2P_MESSAGE(data.USER_17_GIFT_A.data.message), 2500));
    });
  });

  Scenario("I should be able to receive a gift as a non-fully onboarded employee", scenario.start, async () => {
    Given("I login as a valid, non-onboarded employee", given.logInAndGoToTab("yu", data.CUSTOMER_142, data.AUTH_142), async () => {
      When("I trigger the gift notification", when.triggerGiftReceivedNotification(data.CUSTOMER_18, data.USER_18_GIFT_D), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I should see the gift notification", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500));
    });
    When("I tap the gift notification", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should land on the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
      Then("I can see the gift message", then.idVisible(ids.P2P_MESSAGE(data.USER_18_GIFT_D.data.message), 2500));
    });
    When("I tap to thank the sender", when.tapID(ids.P2P_THANK_THEM_MESSAGE, 2500), async () => {
      Then("I should see the 'Already thanked' message", then.textVisible(getTranslation(locale).screens.gifting.already_thanked_them, 2500));
      Then("I should see the correct gift amount", then.idVisible(ids.SENDER_GIFTING_AMOUNT(data.USER_18_GIFT_D.data.amount), 2500));
    });
  });

  Scenario("I should only see the notification center 'Thanks for the gift' dot once and not again when I reopen the notification center", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_19, data.AUTH_19), async () => {
      When("I trigger the 'Thanks for the gift!' notification", when.triggerThanksForGiftNotification(data.CUSTOMER_20, data.USER_20_GIFT_A), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
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

  Scenario("When returning a gift through the notification centre, no users are pre-selected, preventing people being able to bypass the sending limit", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_17, data.AUTH_17), async () => {
      When("I trigger the gift notification", when.triggerGiftReceivedNotification(data.CUSTOMER_18, data.USER_18_GIFT_A), async () => {
        Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I can see my gift notification", then.idVisibleAtIndex(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 0, 3000));
    });
    When("I tap to open the notification message", when.tapIDAtIndex(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 0, 2500), async () => {
      Then("I should be in the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("forest"), 2500));
      Then("I can see the gift message", then.idVisible(ids.P2P_MESSAGE(data.USER_18_GIFT_A.data.message), 2500));
    });
    When("I tap to send my friends a gift", when.tapID(ids.P2P_SEND_YOUR_FRIENDS_A_GIFT, 2000), async () => {
      Then("I see a button to get started", then.idVisible(ids.CTA_GET_STARTED, 2000));
    });
    When("I click on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
      Then("Then I am on the P2P gifting selection screen", then.textVisible(translation.screens.gifting.top_bar.select_target.heading, 2000));
      Then("I see the input field", then.idVisible(ids.INPUT_FIELD));
      Then("The input field has no value", then.inputHasValue(ids.INPUT_FIELD, ""));
    });
  });

  Scenario("I should see gift auto claim notification in the app inbox", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_138, data.AUTH_138), async () => {
      When("I trigger worker", when.trigger7DayAutoClaim(moment().add(8, "days").toDate()), async () => {
        Then("I should see my YuCoin balance before the auto claim is triggered", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(250)));
      });
    });
    When("I trigger the 'You received a gift!' notification 10 YuCoin gift", when.triggerGiftReceivedNotification(data.CUSTOMER_139, data.USER_139_GIFT_B), async () => {
      When("I trigger the 'You received a gift!' notification 50 YuCoin gift", when.triggerGiftReceivedNotification(data.CUSTOMER_139, data.USER_16_GIFT_B), async () => {
        Then("I should be back on YuCoin screen", then.idVisible(ids.HERO_CARD_SECTION, 2000));
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I should see my YuCoin balance go up by 60 YuCoin from the auto claimed gifts", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(310)));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      When("I wait 5 seconds", when.wait(5000), async () => {
        Then("I can see that a gift sent 10 days ago triggered an auto-claimed notification displaying '+10 YuCoin!' and does not have the Pink Dot or Arrow", then.idVisible(ids.NOTIFICATION_PINK_DOT_ARROW("+10 YuCoin!", false, false)));
        Then("I can see that a gift sent 10 days ago triggered an auto-claimed notification displaying '+50 YuCoin!' and does not have the Pink Dot or Arrow", then.idVisible(ids.NOTIFICATION_PINK_DOT_ARROW("+50 YuCoin!", false, false), 2000));
        Then("I can see the heading copy is correct for the auto claimed messages", then.textVisible(`+50 YuCoin!`));
        Then("I can see the message copy is correct for the auto claimed messages", then.textVisible(`Your unclaimed gift from ${getFullName(data.CUSTOMER_16, "UK")} was added to your balance.`));
      });
    });
    When("I tap to on +10 YuCoin! notification", when.tapID(ids.INBOX_MESSAGE_ITEM("+10 YuCoin!"), 2000), async () => {
      Then("Nothing should happen and I should still be on the notification centre", then.idVisible(ids.CONNECTION_SETUP_TITLE));
    });
  });

  // Worker fixed, but needs updating for the altered 'Spend your YuCoin' flow in the gift review screen
  ScenarioSkip("I should see gift auto claim notification in the app inbox for a gift sent from a business", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_140_NPC_ALTRA.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I trigger the issue coin to NPC Biz", when.triggerIssueCoinToNpcBiz(data.BUSINESS_ACCOUNT_14_NPC_ALTRA.business.data.businessAccountId, 30000, "1234"), async () => {
        When("I trigger the business sending 5000 YuCoin to the user", when.triggerSendGiftFromNpcBiz(data.BUSINESS_ACCOUNT_14_NPC_ALTRA.business.data.businessAccountId, [GiftNpcAltra]), async () => {
          When("I trigger auto claim worker", when.trigger7DayAutoClaim(moment().add(8, "days").toDate()), async () => {
            Then("I should be back on YuCoin screen", then.idVisible(ids.HERO_CARD_SECTION, 2000));
            Then("I should see my YuCoin balance before the auto claim is triggered", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
          });
        });
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I should see my YuCoin balance after the auto claim is triggered", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(5200)));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      When("I wait 5 seconds", when.wait(5000), async () => {
        Then("I can see that a gift sent 8 days ago from the Altra Capital triggered an auto-claimed notification displaying '+5000 YuCoin!' and does not have the Pink Dot or Arrow", then.idVisible(ids.NOTIFICATION_PINK_DOT_ARROW("+5,000 YuCoin!", false, false)));
      });
    });
    When("I tap to on +5000 YuCoin! notification", when.tapID(ids.INBOX_MESSAGE_ITEM("+5,000 YuCoin!"), 2500), async () => {
      Then("Nothing should happen and I should still be on the notification centre", then.idVisible(ids.CONNECTION_SETUP_TITLE));
    });
    When("I tap to on you received a gift notification", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!"), 2500), async () => {
      Then("I should be in the gift view screen", then.idVisible(ids.P2P_GIFT_VIEW("yuniversal"), 2500));
    });
    When("I scroll to the bottom", when.scrollFromID(ids.P2P_GIFT_VIEW("yuniversal"), "up", "fast", 0.5), async () => {
      Then(
        "I can see the gift message",
        then.idVisible(
          ids.P2P_MESSAGE(
            "Hello, world! Another great day to receive a gift for hardworking. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Hello, world! Another great day to receive a gift for hardworking."
          )
        )
      );
      Then("I can see the thank them button", then.idVisible(ids.P2P_THANK_THEM_MESSAGE, 2500));
      Then("I can see the heart greyed out", then.idVisible(ids.P2P_THANK_THEM_HEART(false), 2500));
      Then("I can see the CTA button at the bottoms copy", then.idVisible(ids.P2P_SEND_YOUR_FRIENDS_A_GIFT, 2500));
    });
    When("I tap thank them", when.tapID(ids.P2P_THANK_THEM_MESSAGE, 2500), async () => {
      Then("I can see the you've thanked them button", then.idVisible(ids.P2P_ALREADY_THANK_THEM_MESSAGE, 2500));
      Then("I can see the heart coloured pink", then.idVisible(ids.P2P_THANK_THEM_HEART(true), 2500));
      Then("I should see the CTA button at the bottoms copy has stayed the same", then.idVisible(ids.P2P_SEND_YOUR_FRIENDS_A_GIFT, 2500));
    });
  });

  // @UPDATE skipping as on the runners it can seem to select a user once searched properly - looking into changing how we do this
  ScenarioSkip("I can send multiple people a YuCoin gift", scenario.start, async () => {
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
      Then("Lyntons's name is visible", then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(data.CUSTOMER_50))));
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
    When("I tap the text at the top of the screen to dismiss the keyboard", when.tapText("Who would you like to send this to?"), async () => {
      When("I select Tywin Lanister", when.tapTextAtIndex(getFullName(data.CUSTOMER_73), 1), async () => {
        Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_73]));
      });
    });
    When("I search for yet another user who has consented - Gill Stock", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_47)), async () => {
      Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_47), undefined, undefined, "search")));
    });
    When("I tap the text at the top of the screen to dismiss the keyboard", when.tapText("Who would you like to send this to?"), async () => {
      When("I select Gill Stock", when.tapTextAtIndex(getFullName(data.CUSTOMER_47), 1), async () => {
        Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_73, data.CUSTOMER_47]));
      });
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
      Then("I am on the preview screen", then.onGiftingPreviewScreen(P2P_MESSAGES[4], P2P_GIFTING_AMOUNTS[3]));
      Then("I should see the background slider", then.idVisible(ids.P2P_SLIDER, 1000));
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

  Scenario("I should see the app inbox filter out a message sent from a missing/unknown user", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_19, data.AUTH_19), async () => {
      When("I trigger the 7 day auto claim worker", when.trigger7DayAutoClaim(moment().add(8, "days").toDate()), async () => {
        Then("I should see my YuCoin balance before the auto claim is triggered", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(450)));
      });
    });
    When("I trigger the worker to send the logged in user a 100 yucoin gift", when.triggerGiftReceivedNotification(data.CUSTOMER_UNKNOWN, data.USER_UNKNOWN_GIFT_B), async () => {
      When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
        Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true, 0), 2500));
        Then("As more then 7 days has passed since I received the gift, I should see my YuCoin balance go up by 100 YuCoin because of the auto claim gift", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(550)));
      });
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      Then("I should see the 'Wow, its quiet in here!' notification as the gift sender is missing", then.idVisible(ids.NOTIFICATIONS_EMPTY, 2500));
    });
    When("I tap the X to close the notification center", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0, 2000), async () => {
      When("I go to Today's Earnings", when.tapID(ids.STEPS_COUNT(0)), async () => {
        Then("I see I've earned 300 yucoin today so far on the todays earnings screen", then.textVisible("300 YuCoin"));
      });
    });
    When("I swipe to the bottom", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast"), async () => {
      Then("I see I've earned 100 yucoin today from a received gift", then.idVisible(ids.ACTIVITY_LISTING("Gift received", "100"), 2000));
      Then("I see I've earned 200 yucoin today from the Download bonus", then.idVisible(ids.ACTIVITY_LISTING("Download bonus", "200"), 2000));
    });
  });
});
