import { Feature, Given, Scenario, Then, When, ScenarioOnly, FeatureOnly } from "@yu-life/yulife-bdd-framework";
import * as given from "./_steps/given";
import * as then from "./_steps/then";
import * as when from "./_steps/when";
import * as scenario from "./_steps/scenario";
import { BUSINESS_ACCOUNT_USA_2_NPC, CUSTOMER_USA_4 } from "../_data";
import * as ids from "@ids";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import { idVisible } from "@utils";
import { leaderboardCommunitiesMessage, wellbeingHubHeaderMessage } from "./_resources/constants";

Feature("Mutual of Omaha specific tests", async () => {
  Scenario("Various features are not visible for a MOO user", scenario.start, async () => {
    Given("I login and go to the daily steps screen", given.logInAndGoToTab("leaderboard", CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should see my YuCoin balance is 10 for my first login, not 200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10)));
      Then("I can't see the duels button", then.idNotVisible(ids.DUELS_BUTTON));
      Then("I can't see the search button", then.idNotVisible(ids.SEARCH_BUTTON));
      Then("I can't see a referall button", then.idNotVisible(ids.REFERRAL_BUTTON("Invite a colleague")));
    });
    When("I tap on another employee", when.tapID(ids.LEADERBOARD_EMPLOYEE_NAME("Axel")), async () => {
      Then("I can't see the p2p gifting card", then.idNotVisible(ids.P2P_GIFTING_CARD));
      Then("I can't see the duel statistics", then.idNotVisible(ids.INSPECT_SECTION_HEADER("Duel Statistics")));
      Then("I can still only see the first name", then.idVisible(ids.YUSCREEN_V5_USERNAME("Axel")));
    });
    When("I click to close this screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      When("I go to the yuscreen", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I shouldn't see the hero card for gifting", then.idNotVisible(ids.HERO_CARD_SECTION));
      });
    });
    When("I swipe to the bottom of the screen", when.scrollFromID(ids.YUSCREEN_SCROLL_VIEW, "up", "fast"), async () => {
      Then("I can't see a referall button", then.idNotVisible(ids.REFERRAL_BUTTON("Invite a colleague")));
    });
    When("I open the hamburger menu", when.tapID(ids.MENU_ICON_BADGE(false)), async () => {
      Then("I can't see an option to invite a colleague", then.textNotVisible("Invite a Colleague"));
    });
  });

  Scenario("Mentions of companies are not present for MOO users", scenario.start, async () => {
    Given("I login and go to the daily steps screen", given.logInAndGoToTab("leaderboard", CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
      Then("I should see my YuCoin balance is 10 for my first login, not 200", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(10)));
    });
    When("I tap the tooltip", when.tapID(ids.LEADERBOARD_INFO_BUTTON), async () => {
      Then("I should see the updated copy for the communities section that doesn't mention companies", then.textVisible(leaderboardCommunitiesMessage));
    });
    When("I click to close this screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 0), async () => {
      When("I open the hamburger menu", when.tapID(ids.MENU_ICON_BADGE(false)), async () => {
        When("I click the Wellbeing Hub", when.tapText("Wellbeing Hub"), async () => {
          When("I confirm my location", when.tapText("Confirm selection", 2000), async () => {
            Then("I should see the updated copy for the wellbeing hub that doesn't mention companies", then.textVisible(wellbeingHubHeaderMessage));
          });
        });
      });
    });
  });

  Scenario("As a user on the US region, I should be able to get US rewards", scenario.start, async () => {
    Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason([BUSINESS_ACCOUNT_USA_2_NPC.business.data.businessAccountId]), async () => {
      Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
        Given("I login and go to the rewards screen", given.logInAndGoToTab("rewards", CUSTOMER_USA_4.customer, GENERIC_AUTH_PASSWORD, true, "US"), async () => {
          Then("I should be on the location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM, 4000));
        });
        When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2000), async () => {
          Then("I should see the first item 'Mystery Box'", then.idVisible(ids.BATTLE_PASS_LIST_ITEM_TITLE("Mystery Box"), 1500));
        });
      });
    });
    When("I tap on the 'Mystery Box'", when.tapID(ids.BATTLE_PASS_LIST_ITEM_TITLE("Mystery Box"), 3000), async () => {
      When("I scroll to the bottom of the rewards'", when.mysteryRewardUsPreviewScrollToBottom, async () => {
        Then("I should be able to see the US related rewards such as `Starbucks US voucher'", then.checkUsMysteryBoxRewardsVisible);
      });
    });
  });
});
