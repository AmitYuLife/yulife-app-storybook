import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "../_data";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import { GiftFromBizUsa2 } from "./_resources/fixture";

const locale = process.env.TARGET_LOCALE || "en-US";

Feature("P2P gifting", async () => {
  Scenario("As a user on the Mutual of Omaha pricing tier search features should be disabled.", scenario.start, async () => {
    Given("I log in", given.logInAndGoToTab("yucoin", data.CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      When("I trigger the issue coin to NPC Biz", when.triggerIssueCoinToNpcBiz(data.BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId, 30000, "1234"), async () => {
        When("I trigger the business sending 100 YuCoin to the user", when.triggerSendGiftFromNpcBiz(data.BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId, [GiftFromBizUsa2]), async () => {
          When("I trigger the search token worker", when.triggerSearchTokens(55), async () => {
            Then("I should be back on YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2000));
          });
        });
      });
    });
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      Then("I can see the notification centre icon is visible", then.idVisible(ids.NOTIF_CENTRE, 2500));
      Then("I can see the notification centre has a visible red badge", then.idVisible(ids.NOTIF_ICON_BADGE(true, 0), 2500));
    });
    When("I tap on nav leaderboard link", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
      Then("I can see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE("SG1")));
      Then("I can see leaderboard score for Axel but only his first name is visible", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Axel", "4,200", 1, "leaderboard"), 0));
      Then("I can see leaderboard score for Barry but only his first name is visible", then.idVisibleAtIndex(ids.LEADERBOARD_NAME("Barry", "1,000", 2, "leaderboard"), 1));
      Then("I should not see the duel button on the leaderboard screen", then.idNotVisible(ids.DUELS_BUTTON));
      Then("I should not see the search button on the leaderboard screen", then.idNotVisible(ids.SEARCH_BUTTON));
    });
    When("I tap to open the notification center", when.tapID(ids.NOTIF_CENTRE, 2000), async () => {
      When("I wait 5 seconds", when.wait(5000), async () => {
        Then("I can see I've received a gift", then.idVisible(ids.INBOX_MESSAGE_ITEM("You received a gift!")));
      });
    });
    When("I tap the gift", when.tapID(ids.INBOX_MESSAGE_ITEM("You received a gift!")), async () => {
      Then("I should see the gift I received", then.idVisible(ids.P2P_MESSAGE("A gift for you")));
    });
    When("I tap the spend your yucoin cta", when.tapID(ids.P2P_SPEND_YOUR_YUCOIN), async () => {
      Then("I should be on the reward store season complete page", then.idVisible(ids.SEASON_COMPLETE_NEW_SEASON_COMING));
    });
  });
});
