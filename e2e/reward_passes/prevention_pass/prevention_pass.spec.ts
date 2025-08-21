import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as commonWhen from "../_common/when";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import moment from "moment";
import * as textConstants from "./constants.text";

Feature("Prevention pass", async () => {
  Scenario("I can freshly join the Prevention Pass and check the FAQ", scenario.start, async () => {
    Given("I login and go to the rewards screen", given.logInAndGoToTab("rewards", data.CUSTOMER_PREVENTION_PASS_01, data.AUTH_PREVENTION_PASS_01), async () => {
      When("I go to the reward pass screen", when.tapText("Prevention Pass"), async () => {
        Then("I should see the next reward progress bar", then.textVisible("0 / 1 levels", 500));
        Then("I should see how many levels I have to complete in total", then.textVisible("Complete 500 levels", 500));
        Then("I should see how many days I have left", then.textVisible(`${moment(data.BATTLE_PASS_SEASON_01.data.endLocalDate).diff(moment(), "days")} days left`, 500));

        When("I scroll to the bottom of the page", when.swipeFromText("Prevention pass", "up", "fast"), async () => {
          When("I click on the first FAQ", when.tapID("game_mechanics_faqs_how_do_i_level"), async () => {
            Then("I am on the FAQ page for the first FAQ", then.onFAQPage(textConstants.LEARN_MORE_FAQ_PAGE1));
          });

          When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I click on the second FAQ", when.tapID("game_mechanics_faqs_how_do_i_claim"), async () => {
              Then("I am on the FAQ page for the second FAQ", then.onFAQPage(textConstants.LEARN_MORE_FAQ_PAGE2));
            });
          });

          When("I click to go back", when.tapID(ids.BACK_BUTTON), async () => {
            When("I click on the third FAQ", when.tapID("game_mechanics_faqs_time_runs_out"), async () => {
              Then("I am on the FAQ page for the third FAQ", then.onFAQPage(textConstants.LEARN_MORE_FAQ_PAGE3));
            });
          });
        });
      });
    });
  });

  Scenario("I can claim all the milestones", scenario.start, async () => {
    Given("I login and go to the rewards screen", given.logInAndGoToTab("rewards", data.CUSTOMER_PREVENTION_PASS_02, data.AUTH_PREVENTION_PASS_02), async () => {
      const ASSERTIONS = [
        { levelIncValue: 1, position: 1, rewardDetailsTextAssertion: "" },
        { levelIncValue: 4, position: 2, rewardDetailsTextAssertion: "" },
        { levelIncValue: 20, position: 3, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 4, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 5, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 6, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 7, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 8, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 9, rewardDetailsTextAssertion: "" },
        { levelIncValue: 50, position: 10, rewardDetailsTextAssertion: "" },
        { levelIncValue: 125, position: 11, rewardDetailsTextAssertion: "" },
      ];

      let level = 0;

      for (let i = 0; i < ASSERTIONS.length; i += 1) {
        const { levelIncValue, position, rewardDetailsTextAssertion } = ASSERTIONS[i];
        level += levelIncValue;

        const nextLevelIncValue = ASSERTIONS[i + 1]?.levelIncValue || 0;

        When(`I reach game level ${level}`, commonWhen.levelUpForBattlePasses(data.CUSTOMER_PREVENTION_PASS_02.data.customerId, levelIncValue), async () => {
          When(`I go to the reward pass screen (level ${level})`, when.tapText("Prevention Pass"), async () => {
            // Last milestone does not have a progress bar
            if (nextLevelIncValue) {
              Then(`I can see the next reward progress bar (level ${level})`, then.textVisible(`0 / ${nextLevelIncValue} levels`, 500));
            }

            When(`I press Claim for bupa health assessments (level ${level})`, when.tapID(ids.COMPLETED_BATTLE_PASS_LIST_ITEM("Claim", position)), async () => {
              When(`I scroll to the left of the milestone list (level ${level})`, when.scrollFromID(ids.BATTLE_PASS_LIST_ITEM(position), "right", "slow", 0.4), async () => {
                Then(`I can see the milestone is claimed (level ${level})`, then.idVisible(ids.CLAIMED_BATTLE_PASS_LIST_ITEM(position)));
                When(`I press on the claimed milestone (level ${level})`, when.tapID(ids.BATTLE_PASS_LIST_ITEM(position)), async () => {
                  // Then("I can see the reward details", then.textVisible(rewardDetailsTextAssertion));
                  // TODO: should be back button
                  When(`I can go back to the unlocked rewards screen (level ${level})`, when.tapID(ids.SCREEN_CLOSE), async () => {
                    When(`I can go back to the rewards screen (level ${level})`, when.tapID(ids.BACK_BUTTON), async () => {
                      Then(`I can see the reward store front (level ${level})`, then.textVisible("Prevention Pass"));
                    });
                  });
                });
              });
            });
          });
        });
      }
    });
  });
});
