import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";

Feature("As a user I can complete challenges across multiple worlds", async () => {
  Scenario("I can complete a meditation challenge in the first world", scenario.start, async () => {
    Given("I login as a user who has meditation unlocked", given.loginAsUser(data.CUSTOMER_7, data.AUTH_7), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(640)));
      });
    });
    When("I send the mindfulness data", when.sendMindfulnessData(180), async () => {
      When("I start a meditation challenge", when.startMeditationChallengeFromQuests(5), async () => {
        Then("I should be on the Meditation challenge progress screen", then.idVisible(ids.CHALLENGE_PROGRESS_SCREEN("meditation")));
      });
    });
    When("I wait to complete this challenge", when.wait(65000), async () => {
      Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(3, 5));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      Then("I should see the streak completed screen", then.completedTodayStreakCopyVisible(5));
      Then("I should see the number of points I just earned", then.textVisible("Collect 300 YuCoin"));
    });
    When("I tap the collect 400 yucoin CTA", when.tapText("Collect 300 YuCoin"), async () => {
      Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(0)));
      Then("I should see my updated coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(960)));
      Then("I should on the quests tab", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I tap a past level", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      Then("I should see the challenge I just completed with the correct stars", then.onChallengeHistory("Meditation", "20", 1, 5));
    });
    When("I tap full history", when.tapText("Full activity history"), async () => {
      Then("I should be on the activity history", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 2500));
    });
  });

  Scenario("I can finish a walking challenge in the second world", scenario.start, async () => {
    Given("I login as a user with the second world unlocked", given.loginAsUser(data.CUSTOMER_3, data.AUTH_3), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        When("I start a walking challenge", when.startChallengeFromQuests(90, "Short Stroll"), async () => {
          Then("I should be on the short stroll challenge", then.textVisible("0 steps"));
        });
      });
    });
    When("I walk 450 steps", when.sendSteps(450, 33000), async () => {
      Then("I should be on the challenge complete screen", then.onChallengeComplete(450, 90));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      Then("I should see the 'Completed streak day 1' screen", then.completedTodayStreakCopyVisible(1));
    });
    When("I tap done", when.tapText("Done"), async () => {
      Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(1)));
    });
    When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(450, 280));
      Then("I should see my updated coin amount in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17780)));
    });
  });

  Scenario("I can complete a meditation challenge in the second world", scenario.start, async () => {
    Given("I login as a user who has meditation unlocked", given.loginAsUser(data.CUSTOMER_3, data.AUTH_3), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my updated coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      });
    });
    When("I send the mindfulness data", when.sendMindfulnessData(180), async () => {
      When("I start a meditation challenge", when.startMeditationChallengeFromQuests(90), async () => {
        Then("I should be on the Meditation challenge progress screen", then.idVisible(ids.CHALLENGE_PROGRESS_SCREEN("meditation")));
      });
    });
    When("I wait to complete this challenge", when.wait(65000), async () => {
      Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(3, 90));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      Then("I should see the 'Completed streak day 1' screen", then.completedTodayStreakCopyVisible(1));
    });
    When("I tap done", when.tapText("Done"), async () => {
      Then("I should see my updated coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17740)));
      Then("I should on the quests tab", then.idVisible(ids.QUESTS_SCREEN(1)));
    });
    When("I tap a past level", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(90)), async () => {
      Then("I should see other challenges to take", then.multipleIDVisible([ids.CHALLENGE_TILE("Short Stroll"), ids.CHALLENGE_TILE("Brisk Walk"), ids.CHALLENGE_TILE("Long Walk"), ids.CHALLENGE_TILE("Meditation")]));
    });
  });

  Scenario("I can finish a walking challenge in the third world", scenario.start, async () => {
    Given("I login as a user with the second world unlocked", given.loginAsUser(data.CUSTOMER_12, data.AUTH_12), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(27700)));
        Then("I should be on the third world quests screen", then.idVisible(ids.QUESTS_SCREEN(2)));
      });
    });
    When("I start a walking challenge", when.startChallengeFromQuests(115, "Short Stroll"), async () => {
      Then("I should be on the short stroll challenge", then.textVisible("0 steps"));
    });
    When("I walk over 500 steps", when.sendSteps(600, 33000), async () => {
      Then("I should be on the challenge complete screen", then.onChallengeComplete(600, 115));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done"), async () => {
        Then("I should be on the third world quests screen", then.idVisible(ids.QUESTS_SCREEN(2)));
      });
    });
    When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(600, 240));
      Then("I should see my updated coin amount in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(27740)));
    });
  });

  Scenario("I can complete a meditation challenge in the third world", scenario.start, async () => {
    Given("I login as a user who has meditation unlocked", given.loginAsUser(data.CUSTOMER_12, data.AUTH_12), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(27700)));
        Then("I should be on the third world quests screen", then.idVisible(ids.QUESTS_SCREEN(2)));
      });
    });
    When("I send the mindfulness data", when.sendMindfulnessData(300), async () => {
      When("I start a meditation challenge", when.startMeditationChallengeFromQuests(115), async () => {
        Then("I should be on the Meditation challenge progress screen", then.idVisible(ids.CHALLENGE_PROGRESS_SCREEN("meditation")));
        Then("I should no longer see the modal", then.textNotVisible("Choose an app to start"));
      });
    });
    When("I wait to complete this challenge", when.wait(66000), async () => {
      Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(5, 115));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done"), async () => {
        Then("I should be on the third world quests screen", then.idVisible(ids.QUESTS_SCREEN(2)));
        Then("I should see my updated coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(27740)));
      });
    });
  });

  Scenario("I can finish a walking challenge in the fourth world", scenario.start, async () => {
    Given("I login as a user with the second world unlocked", given.loginAsUser(data.CUSTOMER_13, data.AUTH_13), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(50200)));
      });
    });
    When("I start a walking challenge", when.startChallengeFromQuests(175, "Short Stroll"), async () => {
      Then("I should be on the short stroll challenge", then.textVisible("0 steps"));
    });
    When("I walk over 500 steps", when.sendSteps(550, 35000), async () => {
      Then("I should be on the challenge complete screen", then.onChallengeComplete(550, 175));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done"), async () => {
        Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(3)));
      });
    });
    When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see my steps and coints from today", then.stepsAndCoinsVisible(550, 240));
      Then("I should see my updated coin amount in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(50240)));
    });
  });

  Scenario("I can complete a meditation challenge in the fourth world", scenario.start, async () => {
    Given("I login as a user who has meditation unlocked", given.loginAsUser(data.CUSTOMER_13, data.AUTH_13), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(50200)));
      });
    });
    When("I send the mindfulness data", when.sendMindfulnessData(300), async () => {
      When("I start a meditation challenge", when.startMeditationChallengeFromQuests(175), async () => {
        Then("I should be on the Meditation challenge progress screen", then.idVisible(ids.CHALLENGE_PROGRESS_SCREEN("meditation")));
        Then("I should no longer see the modal", then.textNotVisible("Choose an app to start"));
      });
    });
    When("I wait to complete this challenge", when.wait(65000), async () => {
      Then("I should be on the challenge complete screen", then.onMeditationChallengeComplete(5, 175));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap Done", when.tapText("Done"), async () => {
        Then("I should be on quests", then.idVisible(ids.QUESTS_SCREEN(3)));
        Then("I should see my updated coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(50240)));
      });
    });
  });
});
