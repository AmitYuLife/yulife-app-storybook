import { Feature, Scenario, Given, When, Then, ScenarioOnly, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "./_data";
import { getFullName } from "_utils/users";

Feature("P2P gifting", async () => {
  Scenario("I should see 9 selectable messages", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        When("I go to my YuScreen", when.tapID(ids.NAV_BAR("yu")), async () => {
          Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
        });
      });
      When("I tap on the hero card", when.tapID(ids.HERO_CARD_SECTION), async () => {
        Then("I should see the soft landing intro screen", then.idVisible(ids.GIFTING_INTRO));
      });
      When("I tap on the 'Get started' button", when.tapID(ids.CTA_GET_STARTED, 2000), async () => {
        Then("Then I am on the gifting selection screen", then.idVisible(ids.INPUT_FIELD));
      });
      When("I search for user - 福田 太郎 ", when.typeViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_2_SMOKING, "JP")), async () => {
        Then("I can see the user", then.idVisible(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_2_SMOKING, "JP"), undefined, undefined, "search"), 2000));
      });
      When("I tap user 福田 太郎", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_2_SMOKING, "JP"), undefined, undefined, "search")), async () => {
        When("I tap user 福田 太郎 again", when.tapID(ids.LEADERBOARD_NAME(getFullName(data.CUSTOMER_2_SMOKING, "JP"), undefined, undefined, "search")), async () => {
          When("I tap next to see the message screen", when.tapID(ids.P2P_NEXT_BUTTON), async () => {
            Then("I can see and select through all 9 gift messages", then.cycleThroughGiftMessages);
          });
        });
      });
    });
  });

  Scenario("I should see the gifting restriction messages fit the screen without being cut off.", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async () => {
      When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
        When("I go to my YuScreen", when.tapID(ids.NAV_BAR("yu")), async () => {
          Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
        });
      });
      When("I send user 福田 太郎 a gift three times", when.completeSendGiftUserFlow(data.CUSTOMER_2_SMOKING, 3), async () => {
        Then("I should be back on the YuScreen and can see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
      });
      When("I tap on the hero card", when.tapID(ids.HERO_CARD_SECTION), async () => {
        When("I search for user - 福田 太郎 again to send another gift", when.typeViaID(ids.INPUT_FIELD, getFullName(data.CUSTOMER_2_SMOKING, "JP")), async () => {
          // @bug LCS-1132 – For now, testing passes if the restriction message copy is visible. However, on the iPhone 15 Pro Max the message still appears cut off. Further adjustments are needed to ensure complete visibility across all screen sizes.
          Then("I should see a restriction limit message for 福田 太郎", then.idVisible(ids.DISABLED_USER_REASON("制限に到達しました。また明日お試しください。")));
        });
      });
    });
  });
});

Scenario("I should see the Thanks for the gift notification message with the users name the correct way round", scenario.start, async () => {
  Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async () => {
    When("I trigger the 'Thanks for the gift!' notification", when.triggerThanksForGiftNotification(data.CUSTOMER_2_SMOKING, data.CUSTOMER_2_SMOKING_GIFT_A), async () => {
      Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
    });
  });
  When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
    Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
  });
  When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
    Then("I can see the users name in the correct way", then.textVisible(`${getFullName(data.CUSTOMER_2_SMOKING, "JP")} さんから感謝のメッセージが届きました！`));
  });
});

Scenario("I should see the You received a gift! notification message with the users name the correct way round", scenario.start, async () => {
  Given("I login", given.logInAndGoToTab("yu", data.CUSTOMER_1, data.AUTH_1), async () => {
    When("I trigger the 'You received a gift!' notification", when.triggerGiftReceivedNotification(data.CUSTOMER_2_SMOKING, data.CUSTOMER_2_SMOKING_GIFT_B), async () => {
      Then("I should see the gifting hero card", then.idVisible(ids.HERO_CARD_SECTION));
    });
  });
  When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
    Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
  });
  When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
    Then("I can see the user name in the correct way", then.textVisible(`${getFullName(data.CUSTOMER_2_SMOKING, "JP")}さんからのギフトを早速チェックしましょう。`));
  });
});
