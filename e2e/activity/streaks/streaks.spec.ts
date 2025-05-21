import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";

Feature("As a user I can use the streaks functionality", async () => {
  Scenario("I can start a new streak and complete a challenge", scenario.start, async () => {
    Given("I login", given.logInWithStreakScreen(data.CUSTOMER_5, data.AUTH_5), async () => {
      When("I tap the streak button", when.tapText("0/5"), async () => {
        Then("I should see the streak screen", then.onStartStreakFromHome);
      });
      When("I tap take a challenge", when.tapID(ids.STREAKS_SCREEN_BUTTON, 2000), async () => {
        When("I tap to close the quest map onboarding modal", when.tapID(ids.QUEST_MAP_ONBOARDING_CLOSE, 2000), async () => {
          Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
        });
      });
      When("I tap the level 1 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
        When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
          Then("I should be on the level one quest screen", then.idVisible(ids.CHALLENGE_SET));
          Then("I should see an unlocked short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
        });
      });
      When("I tap the unlocked short stroll challenge", when.tapID(ids.CHALLENGE_TILE("Short Stroll")), async () => {
        Then("I should see a screen with a take challenge option", then.canSeeNewChallengePage("short stroll", data.USER_5.data.earnRate));
      });
      When("I tap 'take challenge'", when.tapID(ids.CHALLENGE_TAKE_CHALLENGE_BUTTON, 2000), async () => {
        When("I wait", when.wait(5000), async () => {
          When("I dismiss the notification screen if visible", when.dismissNotificationScreenIfVisible, async () => {
            Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
          });
        });
      });
      When("I walk over 300 steps", when.sendSteps(400, 38000), async () => {
        Then("I should see the well done screen", then.onChallengeComplete(400, 1));
      });
      When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
        Then("I should see the completed streak day 1 modal", then.completedTodayStreakCopyVisible(1));
      });
      When("I tap 'done'", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
        Then("I should be on the quest screen", then.idVisible(ids.QUESTS_SCREEN(0)));
        Then("I should see the level 2 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(2)));
      });
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see 1/5 streaks", then.textVisible("1/5"));
        Then("I should see the amount of yucoin I earned today", then.textVisible(`240 ${t("YuCoin")} ${t("today")}`));
        Then("I should see the number of steps I walked today", then.idVisible(ids.STEPS_COUNT(400)));
      });
      When("I tap '1/5", when.tapText("1/5"), async () => {
        Then("I should see the completed modal again", then.completedTodayStreakCopyVisible(1));
      });
    });
  });

  Scenario("I can continue a streak", scenario.start, async () => {
    Given("I login as a user with a streak", given.loginAsUser(data.CUSTOMER_6, data.AUTH_6), async () => {
      Then("I should be on the yucoin tab", then.idVisible(ids.DAILY_STEPS_SCREEN));
      Then("I should see my 1/5 streak", then.textVisible("1/5"));
      When("I tap 1/5", when.tapText("1/5"), async () => {
        Then("I should see the streak screen", then.headingStartStreakCopyVisible(2));
      });
      When("I tap take a challenge", when.tapID(ids.STREAKS_SCREEN_BUTTON, 2000), async () => {
        Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
      });
      When("I start a challenge", when.startChallenge("Short Stroll"), async () => {
        Then("The challenge should start", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
      });
      When("I walk over 300 steps", when.sendSteps(400, 35000), async () => {
        Then("I should see the well done screen", then.onChallengeComplete(400, 2));
      });
      When("I tap collect", when.tapID(ids.CTA_COLLECT), async () => {
        Then("I should see the completed streak day 2 modal", then.completedTodayStreakCopyVisible(2));
      });
      When("I tap 'done'", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
        Then("I should be on the quest screen", then.idVisible(ids.QUESTS_SCREEN(0)));
        Then("I should see the level 3 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(3)));
      });
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see 2/5 streaks", then.textVisible("2/5"));
        Then("I should see the amount of yucoin I earned today", then.textVisible(`240 ${t("YuCoin")} ${t("today")}`));
        Then("I should see the number of steps I walked today", then.idVisible(ids.STEPS_COUNT(400)));
      });
      When("I tap '2/5", when.tapText("2/5"), async () => {
        Then("I should see the completed modal again", then.completedTodayStreakCopyVisible(2));
      });
    });
  });

  Scenario("I can get a reward after I complete a streak", scenario.start, async () => {
    Given("I login as a user with 4/5 streaks", given.loginAsUser(data.CUSTOMER_7, data.AUTH_7), async () => {
      Then("I should see 4/5 on the yucoin tab", then.textVisible("4/5"));
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
        Then("I should see the fifth level is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
      });
      When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
        Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
        Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
        Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
      });
      When("I start the short stroll challenge", when.startChallenge("Short Stroll"), async () => {
        Then("The challenge should start", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
      });
      When("I walk over 100 steps", when.sendSteps(400, 35000), async () => {
        Then("I should see the well done screen", then.onChallengeComplete(400, 5));
      });
      When("I tap collect", when.tapID(ids.CTA_COLLECT), async () => {
        Then("I should see my reward of 400 coins", then.idVisible(ids.STREAKS_SCREEN_BUTTON));
      });
      When("I tap collect 400 yucoin", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
        Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      });
      When("I tap the level 6 challenge", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(6)), async () => {
        Then("I should see a challenge unavailable screen", then.idVisible(ids.QUEST_DETAIL_HALF_MODAL("Unlock at level 6")));
      });
      When("I tap 'got it'", when.tapID(ids.SCROLLABLE_CONTENT_CTA), async () => {
        Then("I should be back on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      });
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see the coins I earned today", then.textVisible("540 YuCoin today"));
        Then("I should see the steps I completed today", then.idVisible(ids.STEPS_COUNT(400)));
        Then("I should see my total yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(980)));
      });
    });
  });

  Scenario("I can break a streak", scenario.start, async () => {
    Given("I had a 2/5 streak yesterday, and didn't complete a challenge", given.loginAsUser(data.CUSTOMER_8, data.AUTH_8), () => {
      Then("I should see 0/5 on the daily steps screen", then.textVisible("0/5"));
      When("I tap this I should see the start a streak screen", when.tapText("0/5"), async () => {
        Then("I should see the streak screen", then.headingStartStreakCopyVisible(1));
      });
      When("I tap take a challenge", when.tapID(ids.STREAKS_SCREEN_BUTTON, 2000), async () => {
        Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
      });
      When("I start the short stroll challenge", when.startChallenge("Short Stroll"), async () => {
        Then("The challenge should start", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
      });
      When("I walk over 100 steps", when.sendSteps(400, 35000), async () => {
        Then("I should see the well done screen", then.onChallengeComplete(400, 3));
      });
      When("I tap collect", when.tapID(ids.CTA_COLLECT), async () => {
        Then("I should see the complete streak day 1 screen", then.completedTodayStreakCopyVisible(1));
      });
    });
  });

  Scenario("Failing a challenge should not affect my streak, and I can still complete a streak", scenario.start, async () => {
    Given("I login as a user with a streak", given.loginAsUser(data.CUSTOMER_7, data.AUTH_7), async () => {
      Then("I should see 4/5 on the yucoin tab", then.textVisible("4/5", 3000));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see the fifth level is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
    });
    When("I tap the level 5 challenge button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
    });
    When("I start the short stroll challenge", when.startChallenge("Short Stroll"), async () => {
      Then("The challenge should start", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
    });
    When("I wait for the challenge to finish", when.wait(32000), async () => {
      Then("I should see the challenge failed screen", then.textVisible("You were so close!", 6000));
    });
    When("I tap Got it", when.tapID(ids.CTA_GOT_IT), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I go back to the yucoin screen", when.tapID(ids.NAV_BAR("yucoin"), 2000), async () => {
      Then("I should still see 4/5 streaks", then.textVisible("4/5", 5000));
    });
    When("I tap 4/5", when.tapText("4/5"), async () => {
      Then("I should see the start streak screen", then.headingStartStreakCopyVisible(5));
    });
    When("I tap take a challenge", when.tapID(ids.STREAKS_SCREEN_BUTTON, 3000), async () => {
      When("I start a challenge", when.startChallenge("Short Stroll"), async () => {
        When("I complete the challenge", when.sendSteps(300, 38000), async () => {
          Then("I should see the challenge complete screen", then.onChallengeComplete(300, 5));
        });
      });
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
      Then("I should see my streak is completed", then.completedTodayStreakCopyVisible(5));
    });
    When("I click Collect", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
      When("I go back to the yucoin screen", when.tapID(ids.NAV_BAR("yucoin"), 2000), async () => {
        When("I click the streak icon", when.tapText("5/5", 2000), async () => {
          Then("I should see the completed screen", then.completedTodayStreakCopyVisible(5));
          Then("I should see a notice of when the next streak is", then.textVisible("Begin your next streak in"));
        });
      });
    });
  });

  Scenario("I can redeem a challenge the next day", scenario.start, async () => {
    Given("I login as a user who activated a challenge yesterday", given.loginAsUser(data.CUSTOMER_15, data.AUTH_15), async () => {
      Then("I should see my current yucoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(520), 2000));
      When("I tap quests", when.tapID(ids.NAV_BAR("quests")), async () => {
        Then("I should see the well done screen", then.onChallengeComplete(450, 4));
      });
      When("I tap collect", when.tapID(ids.CTA_COLLECT, 2000), async () => {
        Then("I should see my updated yucoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560), 3000));
      });
    });
  });

  Scenario("I can redeem a challenge the next day and move to level 52 if i have last active challenge from yesterday", scenario.start, async () => {
    Given("I login as a user who activated a challenge yesterday", given.loginAsUser(data.CUSTOMER_42, data.AUTH_42), async () => {
      Then("I should see 0/5 on the daily steps screen", then.textVisible("0/5"));
      Then("I should see my current yucoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(520)));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see the well done screen", then.onChallengeComplete(4000, 51));
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT), async () => {
      Then("I should see my updated yucoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(840)));
      Then("I should see the fifth level is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
    });
    When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 0/5 on the daily steps screen", then.textVisible("0/5"));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      When("I tap on level 51", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(51)), async () => {
        Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Long Walk", "320", 3)));
      });
    });
    When("I go back to quests", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap on level 52", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(52)), async () => {
        When("I start the short stroll challenge", when.startChallenge("Short Stroll"), async () => {
          Then("The challenge should start", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
        });
      });
    });
    When("I walk over 300 steps", when.sendSteps(305, 35000), async () => {
      Then("I should see the well done screen", then.onChallengeComplete(305, 52));
    });
    When("I tap collect", when.tapID(ids.CTA_COLLECT), async () => {
      Then("I should see the complete streak day 1 screen", then.completedTodayStreakCopyVisible(1));
    });
    When("I tap 'done'", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
      Then("I should be back on the quests screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(52)));
    });
    When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see the coins I earned today", then.textVisible("280 YuCoin today"));
      Then("I should see the steps I completed today", then.idVisible(ids.STEPS_COUNT(305)));
      Then("I should see my total yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(920)));
      Then("I should see 1/5 on the daily steps screen", then.textVisible("1/5"));
    });
  });
});
