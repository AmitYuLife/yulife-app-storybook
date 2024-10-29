import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import { emptySeasonalRewardVisible } from "./_resources/constants";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("I can view and use all battle pass features", async () => {
    Scenario("I can view battle pass, donate YuCoin and successfully level up", scenario.start, () => {
        Given("I trigger the battle pass season worker", given.triggerGenerateBattlePassSeason, async () => {
            Given("I trigger the random chest pool worker", given.triggerCreateRandomChestPool, async () => {
                Given("I login and navigate to the rewards store", given.logInAndGoToTab("rewards", data.CUSTOMER_CARMY, data.AUTH_CARMY), async () => {
                    Then("I should be on the location modal", then.idVisible(ids.REWARDS_LOCATION_CONFIRM));
                });
            });
        });
        When("I confirm my store location", when.tapID(ids.REWARDS_LOCATION_CONFIRM, 2000), async () => {
            Then("I should be on the rewards screen", then.idVisible(ids.REWARDS_SCREEN, 1500));
            Then("I should see my coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85200)))
        });
        When("I tap on the 'Donate' tab", when.tapID(ids.REWARDS_TABS("Donate"), 3000), async () => {
            Then("I should be on the battle pass screen", then.idVisible(ids.BATTLE_PASS_SCREEN, 2000));
            Then("I should see no progress on the bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 60, 0), 2000));
        });
        When("I tap on the 'Purchased' tab", when.tapID(ids.PURCHASED_TAB_BUTTON, 2500), async () => {
            Then("I should see there are no purchased rewards yet", then.textVisible(emptySeasonalRewardVisible));
        });
        When("I tap on the 'Go to rewards' button", when.tapID(ids.CHECK_REWARDS_BUTTON, 2500), async () => {
            Then("I should see all impact cards available", then.impactCardsVisible);
        });
        When("I tap to donate to Clean the ocean", when.donate("ocean", 2), async () => {
            Then("I should see progress on the bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(40, 60, 0), 2000));
        });
        When("I donate to complete the level", when.donate("ocean"), async () => {
            Then("I should see the level up modal", then.idVisible(ids.DONATION_LEVEL_UP_MODAL, 2000));
        });
        When("I donate to complete the level", when.tapID(ids.CTA_CONTINUE, 2000), async () => {
            Then("I should see level 2 on the prograss bar", then.idVisible(ids.DONATIONS_PROGRESS_BAR(0, 90, 1), 2000));
            Then("I should see my updated coin balance at the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(85140)))
        });
    });
});
