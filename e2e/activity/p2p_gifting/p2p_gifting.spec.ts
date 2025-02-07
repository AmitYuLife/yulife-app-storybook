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
    // this doesn't match the ticket currently so need to address this
    When("I search for a user who hasn't consented to the leaderboard", when.typeViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_16)), async () => {
      Then("I can see the error message", then.textVisible(getTranslation(locale).screens.leaderboard.search.friends_not_found));
    });
    When("I search for a different user who has consented - Ryan Howard", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_17)), async () => {
      Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_17), undefined, undefined, "search")));
    });
    When("I select Ryan Howard", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_17), undefined, undefined, "search")), async () => {
      When("I select Ryan Howard again due to the keyboard being up", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_17), undefined, undefined, "search")), async () => {
        When("I search for a different user who has consented - Tywin Lannister", when.replaceTextViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_73)), async () => {
          When("I select Tywin Lanister", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_73), undefined, undefined, "search")), async () => {
            Then("I can now see all these users are selected", then.selectedUsersVisible([data.CUSTOMER_50, data.CUSTOMER_17, data.CUSTOMER_73]));
          });
        });
      });
    });
    When("I tap next to see the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      Then("I see the message selection screen", then.messageSelectionScreenVisible(3));
    });
    When("I tap next without selecting a message", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      Then("I am still on the message selection screen", then.messageSelectionScreenVisible(3));
    });
    When("I select You got this!", when.tapID(ids.P2P_MESSAGE(P2P_MESSAGES[2])), async () => {
      When("I tap next", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
        Then("I see the correct YuCoin gift amounts, with 250 not displaying due to my total value", then.giftingAmountScreenVisible(3, 520));
      });
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go back again", when.tapID(ids.BACK_BUTTON), async () => {
        When("I deselect Ryan Howard", when.tapID(ids.P2P_DESELECT_USER(data.CUSTOMER_17.data.firstName)), async () => {
          When("I deselect Tywin Lannister", when.tapID(ids.P2P_DESELECT_USER(data.CUSTOMER_73.data.firstName)), async () => {
            Then("I can see only one user selected", then.selectedUsersVisible([data.CUSTOMER_50]));
          });
        });
      });
    });
    When("I tap next to get to the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
      When("I tap next again to go to the selection page", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
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
    When("I tap on the 'gift' sticker", when.tapID(ids.P2P_STICKER_ITEMS("gift-2"), 2000), async () => {
      When("I tap to select the sticker", when.tapID(ids.CTA_SELECT, 1500), async () => {
        Then("I am on the preview screen", then.onGiftingPreviewScreen(P2P_MESSAGES[2], P2P_GIFTING_AMOUNTS[4]));
        Then("I should see the background slider", then.idVisible(ids.P2P_SLIDER, 1000));
      });
    });
    When("I tap to select the forest background", when.tapID(ids.P2P_SLIDER_ITEM("forest"), 1500), async () => {
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
  });

  Scenario("I should be restricted from sending a gift to the same user after reaching the gifting limit", scenario.start, async () => {
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
    });
  });
});
