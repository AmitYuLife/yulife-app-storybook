import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "./_data";
import * as ids from "@ids";
import * as constants from "./_resources/constants";
import * as fixtures from "./_resources/fixtures";
import { getLocalisedString as t } from "@i18n";
import moment from "moment";

Feature("Seasons work as expected in the GHI Rewards Game", async () => {
  Scenario("Rewards transfer as expected between seasons", scenario.start, async () => {
    Given("I run the worker to create the next season", given.createNextSeasonParticipations, async () => {
      When("I login as a user", given.logInAndGoToTab("quests", data.CUSTOMER_137_GHI_REWARDS, data.AUTH_137), async () => {
        Then("I should see level 315", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(315)));
      });
    });
    When("I go to the store to select my region before returning to the YuScreen", when.setStoreRegion, async () => {
      When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
        Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
        Then("I see the more rewards ahead modal as this employee has the toggle on and a new season has started", then.moreRewardsAheadModalVisible(false));
        Then("I shouldn't see the group health rewards heading as the feature toggle is hiding them", then.textNotVisible(constants.groupHealthRewardsHeading));
      });
    });
    When("I swipe to the top", when.swipeFromText("FAQs", "down", "fast"), async () => {
      When("I close the screen", when.tapIDAtIndex(ids.BUTTON_CLOSE, 2), async () => {
        When("I go to rewards", when.tapID(ids.NAV_BAR("rewards")), async () => {
          Then("I can't see Bupa as I claimed it last year and it's available every 2 seasons", then.textNotVisible("Bupa In-person Health Assessment"));
        });
      });
    });
    When("I scroll down slightly", when.swipeFromText("Boots Voucher", "up", "slow"), async () => {
      Then("I still can't see Bupa as I claimed it last year and it's available every 2 seasons", then.textNotVisible("Bupa In-person Health Assessment"));
    });
    When("I scroll up", when.swipeFromText("Avios Miles", "down", "fast"), async () => {
      When("I tap on the YorkTest reward", when.tapRewardInList(data.CORE_REWARDS_YORK_GHI_REWARDS), async () => {
        Then("I should be on the rewards page for YorkTest as this is set to always claimable", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW));
        Then("I should see all the reward information for YorkTest", then.onBootsAndYorkRewardsClaimPage(fixtures.YORK_REWARDS_CLAIM_PAGE_DETAILS, true));
      });
    });
    When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap on the Boots reward", when.tapRewardInList(data.CORE_REWARDS_BOOTS_GHI_REWARDS), async () => {
        Then("I should be on the rewards page for Boots as this is set to always claimable", then.idVisible(ids.SDUI_SCREEN_SCROLL_VIEW));
        Then("I should see all the reward information for Boots", then.onBootsAndYorkRewardsClaimPage(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS, true));
      });
    });
    When("I go back to the rewards screen", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap on the Urban reward", when.tapRewardInList(data.CORE_REWARDS_URBAN_GHI_REWARDS), async () => {
        Then("I can see I still have a voucher to claim from the previous season", then.idVisible(ids.TEXT_TEMPLATE("1 voucher left to claim", "b1b")));
      });
    });
    When("I scroll to the button to claim", when.scrollUntilTextVisible(ids.SDUI_BODY_SCROLL, fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS.buttonText, "down"), async () => {
      When("I click to claim my voucher", when.tapText(fixtures.BOOTS_REWARDS_CLAIM_PAGE_DETAILS.buttonText), async () => {
        When("I tap confirm", when.tapText(t("Confirm")), async () => {
          Then("I should see the reward information for Urban and the confirmation", then.onUrbanRewardsClaimPage(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS, false, "10"));
        });
      });
    });
    When("I tap to go back to the rewards screen", when.tapIDAtIndex(ids.BACK_BUTTON, 0), async () => {
      When("I wait", when.wait(3000), async () => {
        When("I click to see the purchase history", when.tapID(ids.PURCHASED_TAB_BUTTON, 1000), async () => {
          Then("I can see the purchase for today for Urban Massage", then.groupHealthRewardsPurchasedVisible(fixtures.URBAN_REWARDS_CLAIM_PAGE_DETAILS));
        });
      });
    });
  });

  Scenario("Users still get a second season if they didn't progress in season 1", scenario.start, async () => {
    Given("I run the worker to create the next season", given.createNextSeasonParticipations, async () => {
      When("I login as a user", given.logInAndGoToTab("yu", data.CUSTOMER_140_GHI_REWARDS, data.AUTH_140), async () => {
        When(`I tap the product`, when.tapID(ids.SLOT_TITLE("Health Insurance")), async () => {
          Then("I should see correct product details", then.onGHIProductPage(fixtures.GHI_REWARDS_PAGE_DETAILS_1));
          Then("I see the more rewards ahead modal as this employee has the toggle on and a new season has started", then.moreRewardsAheadModalVisible(false));
          Then("I shouldn't see the group health rewards heading as the feature toggle is hiding them", then.textNotVisible(constants.groupHealthRewardsHeading));
        });
      });
    });
    When("I click to learn more", when.tapText(constants.learnMoreButton), async () => {
      Then("I should be on the GHI rewards learn more page and see I am in a new season", then.onGHIRewardsLearnMorePage("started", 0, moment().add(1, "years").format("YYYY-MM-DD")));
    });
  });
});
