import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as ids from "@ids";
import * as scenario from "./_steps/scenario";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as given from "./_steps/given";
import * as data from "./_data";
import { getFullName } from "_utils/users";

Feature("P2P gifting", async () => {
  Scenario("I should see 18 selectable messages", scenario.start, async () => {
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
            Then("I can see and select through all 18 gift messages", then.cycleThroughGiftMessages);
          });
        });
      });
    });
  });
});
