import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { BUSINESS_ACCOUNT_USA_2_NPC, CUSTOMER_USA_3, CUSTOMER_USA_4, CUSTOMER_USA_5 } from "../_data";
import * as ids from "@ids";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import { idVisible } from "@utils";
import { leaderboardCommunitiesMessage, wellbeingHubHeaderMessage } from "./_resources/constants";

Feature("Mutual of Omaha specific tests", async () => {
  Scenario("Various features are not visible for a MOO user", scenario.start, async () => {
    Given("I login and go to the 'Leaderboard' screen", given.logInAndGoToTab("leaderboard", CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should see my YuCoin balance is 10 for my first login", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10))); // not 200
      Then("I can't see the duels button", then.idNotVisible(ids.DUELS_BUTTON));
      Then("I can't see the search button", then.idNotVisible(ids.SEARCH_BUTTON));
      Then("I can't see a referral button", then.idNotVisible(ids.REFERRAL_BUTTON("Invite a colleague")));
      Then("I can find another user", then.idVisible(ids.LEADERBOARD_EMPLOYEE_NAME("Axel")));
    });
    When("I tap on another user", when.tapID(ids.LEADERBOARD_EMPLOYEE_NAME("Axel")), async () => {
      Then("I can't see the p2p gifting card", then.idNotVisible(ids.P2P_GIFTING_CARD));
      Then("I can't see the duel statistics", then.idNotVisible(ids.INSPECT_SECTION_HEADER("Duel Statistics")));
      Then("I can see the first name", then.idVisible(ids.YUSCREEN_V5_USERNAME("Axel")));
      Then("I have a way to go back", then.idVisible(ids.LEFT_HEADING_BUTTON()));
    });
    When("I go back from the 'Inspect' screen", when.tapID(ids.LEFT_HEADING_BUTTON()), async () => {
      Then("I should be back on the 'Leaderboard' screen", then.idVisible(ids.LEADERBOARD_SCROLL_LIST));
      When("I tap the 'Yu' tab", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I shouldn't see the hero card for gifting", then.idNotVisible(ids.HERO_CARD_SECTION));
        Then("I should see the 'Yu' screen scroll view", then.idVisible(ids.YUSCREEN_SCROLL_VIEW));
      });
    });
    When("I swipe to the bottom of the screen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
      Then("I can't see a referral button", then.idNotVisible(ids.REFERRAL_BUTTON("Invite a colleague")));
      Then("I can see a way to open the 'Menu'", then.idVisible(ids.MENU_ICON_BADGE(false)));
    });
    When("I open the hamburger menu", when.tapID(ids.MENU_ICON_BADGE(false)), async () => {
      Then("I can't see an option to invite a colleague", then.textNotVisible("Invite a Colleague"));
    });
  });

  Scenario("Mentions of companies are not present for MOO users", scenario.start, async () => {
    Given("I login and go to the 'Leaderboard' screen", given.loginAsUser(CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should see my YuCoin balance is 10 for my first login", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10)));
    });
    When("I go to the leaderboard", when.tapID(ids.NAV_BAR("leaderboard"), 2000), async () => {
      Then("I should see the Leaderboard info button", then.idVisible(ids.LEADERBOARD_INFO_BUTTON));
    });
    When("I tap the tooltip", when.tapID(ids.LEADERBOARD_INFO_BUTTON), async () => {
      Then("I should see the updated copy for the communities section that doesn't mention companies", then.textVisible(leaderboardCommunitiesMessage, 5000));
      Then("I have a way to close the 'Leaderboard Info' screen", then.idVisibleAtIndex(ids.BUTTON_CLOSE, 0));
    });
    When("I click to close this screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      Then("I have a way to open the 'Menu'", then.idVisible(ids.MENU_ICON_BADGE(false)));
    });
    When("I open the hamburger menu", when.tapID(ids.MENU_ICON_BADGE(false)), async () => {
      Then("I can go to the 'Wellbeing Hub'", then.idVisible(ids.MENU_ITEM("WellbeingHub")));
    });
    When("I click the Wellbeing Hub", when.tapText("Wellbeing Hub", 3000), async () => {
      Then("I can confirm my location", then.idVisible(ids.WELLBEING_HUB_LOCATION_CONFIRM, 3000));
    });
    When("I confirm my location", when.tapID(ids.WELLBEING_HUB_LOCATION_CONFIRM, 3000), async () => {
      Then("I should see the updated copy for the wellbeing hub that doesn't mention companies", then.idVisible(ids.WELLBEING_HUB_DESCRIPTION(wellbeingHubHeaderMessage), 5000));
    });
  });

  Scenario("As a user on the US region, I should be able to get US rewards", scenario.withBattlePassRewards([BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId]), async () => {
    Given("I login and go to the rewards screen", given.logInAndGoToTab("rewards", CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should be on the location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM, 5000));
    });
    When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM), async () => {
      Then("I should see the first item 'Mystery Box'", then.idVisible(ids.BATTLE_PASS_LIST_ITEM_TITLE("Mystery Box"), 5000));
    });
    When("I tap on the 'Mystery Box'", when.tapID(ids.BATTLE_PASS_LIST_ITEM_TITLE("Mystery Box")), async () => {
      Then("I should see the rewards list", then.idVisible(ids.ITEM_DETAILS_HALF_MODAL_LIST, 5000));
      /**
       * The following scrollWithLimitedAttemptsUntilIdVisible configuration is delicate.
       * If we don't find the target fast enough, detox memory seems to run out and it just crashes.
       * If it's too fast, we risk scrolling past the target, and it will cause the test to be flaky.
       */
      When("I scroll to the bottom", when.scrollWithLimitedAttemptsUntilIdVisible(ids.ITEM_DETAILS_HALF_MODAL_LIST, ids.ITEM_DETAILS_REWARD("$5 Target voucher"), "up", 30, 1000, 0.3, 0.5, 0.6, "fast"), async () => {
        Then("I should be able to see the US related rewards such as `Starbucks US voucher'", then.checkUsMysteryBoxRewardsVisible);
      });
    });
  });

  Scenario("Restricted goals work on the MoO pricing tier", scenario.start, async () => {
    Given("I login as a non-MoO pricing tier user and go to the YuCoin screen", given.logInAndGoToTab("yucoin", CUSTOMER_USA_5.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should see the event card 'step to it! - MoO Restriction test' ", then.idVisible(ids.EVENT_CARD("Step to it! - MoO Restriction test"), 2000));
    });
    When("I log out and log in again with a MoO pricing tier user", when.fullRestartAndLogin(CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should NOT see the event card 'step to it! - MoO Restriction test' ", then.idNotVisible(ids.EVENT_CARD("Step to it! - MoO Restriction test"), 2000));
    });
  });
});
