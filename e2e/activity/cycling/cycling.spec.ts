import { Feature, Scenario, Given, When, Then, FeatureOnly, FeatureSkip, ScenarioSkip, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import { getLocalisedString as t } from "@i18n";

Feature("As a user my cycling distance is monitored correctly", async () => {
  Scenario("I can take and complete a cycling event and hit all the event milestones", scenario.start, async () => {
    Given("I login and go to YuCoin screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_71, data.AUTH_71), async () => {
      Then("I should be on the YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2000));
      Then("I should not see any cycling stats on the screen as I have cycled 0km so far today", then.idNotVisible(ids.CYCLING_COUNT("km")));
      Then("I should see the correct cycling event for me to complete and the progress bar", then.cyclingEventToBeCompletedVisible(0, 0));
    });
    When("I click on the event challenge 10,000 rides", when.tapChallenge(t("%{currentValue} / %{targetValue} %{progressUnit}", { currentValue: 0, targetValue: "10,000", progressUnit: "rides" }), 3000), async () => {
      Then("I should be on the event screen and see the correct earn rates for the challenges", then.onCyclingEventDetailsScreen);
    });
    When("I tap take cycling ride", when.tapID(ids.EVENT_DIALOG_BUTTON, 3000), async () => {
      When("I have done 2 km today", when.addCyclingData(2000), async () => {
        When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
          When("I wait", when.wait(10000), async () => {
            When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
              Then("I should see 2 km cycled", then.idVisible(ids.CYCLING_COUNT("2.0 km"), 2000));
              Then("I should see I have earned 10 YuCoin from the cycle", then.textVisible(t(`210 ${t("YuCoin")} ${t("today")}`), 2000));
            });
          });
        });
      });
    });
    When("I click on the event challenge 10,000 rides", when.tapChallenge(t("%{currentValue} / %{targetValue} %{progressUnit}", { currentValue: 0, targetValue: "10,000", progressUnit: "rides" }), 3000), async () => {
      Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(2000, 10000, 0.2));
      Then("I should see Claim available for the first milestone", then.claimVisible(1));
    });
    When("I click Claim rewards CTA", when.tapID(ids.EVENT_DIALOG_BUTTON), async () => {
      Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("50", 1));
    });
    When("I click Claim", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should see the first milestone complete", then.milestoneComplete(0));
      });
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(2000, 0.2));
      Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(210, data.USER_71.data.earnRate, data.GOAL_REWARD_MILESTONE_6.data.rewardValue));
    });
    When("I have done 3 km today", when.addCyclingData(3000), async () => {
      When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
        When("I wait", when.wait(10000), async () => {
          When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see 5 km cycled", then.idVisible(ids.CYCLING_COUNT("5.0 km")));
            Then("I should see I have earned 20 YuCoin from the cycle", then.textVisible(t(`730 ${t("YuCoin")} ${t("today")}`), 4000));
          });
        });
      });
    });
    When("I click on the event challenge 10,000 rides", when.tapChallenge(t("%{currentValue} / %{targetValue} %{progressUnit}", { currentValue: "2,000", targetValue: "10,000", progressUnit: "rides" })), async () => {
      Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(5000, 10000, 0.5));
      Then("I should see Claim available for the first milestone", then.claimVisible(2));
    });
    When("I click Claim", when.tapID(ids.EVENT_DIALOG_BUTTON), async () => {
      Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("100", 2));
    });
    When("I click Claim", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should see the second milestone complete", then.milestoneComplete(1));
      });
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(5000, 0.5));
      Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(730, data.USER_71.data.earnRate, data.GOAL_REWARD_MILESTONE_7.data.rewardValue));
    });
    When("I have done 5 km today", when.addCyclingData(5000), async () => {
      When("I update the screen to see today's activity pulled through", given.triggerAppUpdateState, async () => {
        When("I wait", when.wait(10000), async () => {
          When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 3000), async () => {
            Then("I should see 10 km cycled", then.idVisible(ids.CYCLING_COUNT("10.0 km")));
            Then("I should see I have earned 30 YuCoin from the cycle", then.textVisible(t(`1,760 ${t("YuCoin")} ${t("today")}`)));
          });
        });
      });
    });
    When("I click on the event challenge 10,000 rides", when.tapChallenge(t("%{currentValue} / %{targetValue} %{progressUnit}", { currentValue: "5,000", targetValue: "10,000", progressUnit: "rides" }), 3000), async () => {
      Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("150", 3));
    });
    When("I click Claim", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON, 3000), async () => {
      Then("I should see the third milestone complete", then.milestoneComplete(0));
    });
    When("I click Great! button", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON, 2000), async () => {
      Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(10000, 10000, 1));
      Then("I should see all 3 milestones complete", then.allChallengesCompleteVisible);
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON, 2000), async () => {
      Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(1760, data.USER_71.data.earnRate, data.GOAL_REWARD_MILESTONE_8.data.rewardValue));
      Then("I should see 10 km cycled", then.idVisible(ids.CYCLING_COUNT("10.0 km")));
    });
  });

  Scenario("Cycling data is successfully synced on log in through today's activities query", scenario.start, async () => {
    Given("I login and go to Yucoin screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_73, data.AUTH_73), async () => {
      Then("I should see my current YuCoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560), 5000));
    });
    When("I tap to see my daily activity", when.tapID(ids.DAILYSTEP_SCREEN_COIN, 3000), async () => {
      When("I swipe to the bottom of the screen", when.swipeFromText("Daily core activities", "up", "fast"), async () => {
        Then("I should also be able to see the 7.0 Km completed today", then.textVisible("7.0 / 9.6 km", 4000));
      });
      When("I go back to the YuCoin screen", when.tapID(ids.LEFT_HEADING_BUTTON("TODAY’S_EARNINGS"), 3000), async () => {
        Then("I should see the correct today's cycling stats", then.idVisible(ids.CYCLING_COUNT("7.0 km"), 5000));
      });
    });
  });
});
