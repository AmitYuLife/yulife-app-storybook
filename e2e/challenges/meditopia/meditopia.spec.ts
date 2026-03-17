import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly, ScenarioSkip, FeatureSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import * as helper from "./_resources/helpers";

Feature("As a user I can take a Meditopia challenge", async () => {
  Scenario("I can successfully take and complete a 5 minute Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.loginAsUser(data.CUSTOMER_MEDITOPIA_1, data.AUTH_MEDITOPIA_1), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      });
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "Meditation"), async () => {
      Then("I am on the Challenge Details screen", then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_1.data.earnRate));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "40"));
    });
    When("I tap the Awareness card", when.tapMeditopiaContentCard("5", "40"), async () => {
      When("I wait ten seconds", when.waitTenSeconds, async () => {
        Then("I should be on the Awareness Content intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 2, 40, 200));
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I complete the 5 min Meditopia session (plays a 15 sec test video)", when.completeMeditopiaContentSession, async () => {
        Then("I should be on the challenge completion well done screen", then.onMeditopiaChallengeComplete(5, 1, "40"));
      });
    });
    When("I tap collect on the well done screen", when.tapText("Collect", 5000, true), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
    });
    When("I dismiss the streak screen", when.tapText("Done", 5000, true), async () => {
      Then("I should be on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(2), 3000));
    });
    When("I back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see my updated coins in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(240)));
      Then("I should see the number of steps I just completed", then.idVisible(ids.STEPS_COUNT(0)));
      Then("I should see the number of mindfulness mins I just completed", then.idVisible(ids.MINDFUL_COUNT("5 min")));
      Then("I should see the number of coins I've earned today (60)", then.textVisible("240 YuCoin today"));
    });
  });

  Scenario("I can successfully access and complete multiple Meditation sessions in a single day", scenario.start, async () => {
    Given("I login as a user on level 140 with 4 available daily challenges", given.loginAsUser(data.CUSTOMER_MEDITOPIA_2, data.AUTH_MEDITOPIA_2), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(550)));
      });
    });
    When("I go to the meditation challenge screen", when.selectMeditopiaChallengeFromQuests(140, "Meditation"), async () => {
      Then("I am on the Challenge details screen", then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_2.data.earnRate));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen2Challenges("5", "40", "14", "60"));
    });
    When("I tap the 14 mins Awareness content card", when.tapMeditopiaContentCard("14", "60"), async () => {
      Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 3, 60, 550));
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I complete the 14 min Meditopia session (plays a 15 sec test video)", when.completeMeditopiaContentSession, async () => {
        Then("I should be on the challenge completion well done screen", then.onMeditopiaChallengeComplete(14, 140, "60"));
        Then("I should see the challenge hint on the succes screen", then.successScreenHintVisible);
      });
    });
    When("I tap collect on the well done screen", when.tapID(ids.CTA_COLLECT, 2000), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
    });
    When("I dismiss the streak screen", when.tapID(ids.STREAKS_SCREEN_BUTTON, 2000), async () => {
      Then("I should be back on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(140), 3000));
    });
    When("I go to the meditation challenge screen for the second time", when.selectMeditopiaChallengeFromQuests(140, "Meditation"), async () => {
      When("I tap to take a challenge", when.tapTakeChallenge, async () => {
        Then("I should see the updated reward values on the Today's meditation screen", then.isOnTodaysMeditationScreen2Challenges("5", "20", "10", "30"));
      });
    });
    When("I tap the 5 mins Awareness card", when.tapMeditopiaContentCard("5", "20"), async () => {
      When("I tap to start the session", when.tapStartSession, async () => {
        When("I complete the 5 min Meditopia session", when.completeMeditopiaContentSession, async () => {
          Then("I should see the correct reward on the challenge completion screen", then.onMeditopiaChallengeComplete(5, 140, "20"));
        });
      });
    });
  });

  Scenario("I can successfully take and quit a Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.loginAsUser(data.CUSTOMER_MEDITOPIA_1, data.AUTH_MEDITOPIA_1), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      });
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "Meditation"), async () => {
      Then("I am on the Challenge details screen", then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_1.data.earnRate));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "40"));
    });
    When("I tap the Awareness content card", when.tapMeditopiaContentCard("5", "40"), async () => {
      When("I wait ten seconds", when.waitTenSeconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 1, 40, 200));
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I quit and exit the challenge half way through", when.startQuitAndExitMeditopiaChallenge(), async () => {
        Then("I should be on choose Meditopia content screen", then.isOnTodaysMeditationScreen("5", "40"));
      });
    });
  });

  Scenario("I can successfully take, pause, start and finish a Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.loginAsUser(data.CUSTOMER_MEDITOPIA_1, data.AUTH_MEDITOPIA_1), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      });
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "Meditation"), async () => {
      Then("I am on the Challenge Details screen", then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_1.data.earnRate));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "40"));
    });
    When("I tap the Awareness content card", when.tapMeditopiaContentCard("5", "40"), async () => {
      When("I wait ten seconds", when.waitTenSeconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 2, 40, 200));
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I start and pause the challenge half way through", when.pauseMeditopiaChallenge(), async () => {
        Then("I should see the paused time on the screen", then.pauseChallengeTimeVisible);
      });
    });
    When("I continue to play the Meditopia challenge to finish", when.playAndFinishMeditopiaChallenge, async () => {
      Then("I should be on the challenge completion well done screen", then.onMeditopiaChallengeComplete(5, 1, "40"));
    });
  });

  Scenario("I can successfully take a Meditopia challenge in app and hide the on screen elements", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.loginAsUser(data.CUSTOMER_MEDITOPIA_1, data.AUTH_MEDITOPIA_1), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
      });
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "Meditation"), async () => {
      Then("I am on the Challenge details screen", then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_1.data.earnRate));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "40"));
    });
    When("I tap the Awareness content card", when.tapMeditopiaContentCard("5", "40"), async () => {
      When("I wait ten seconds", when.waitTenSeconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 2, 40, 200));
      });
    });
    When("I start a Meditopia challenge", when.startMeditopiaChallenge, async () => {
      When("I click on the timer in the middle of the screen", when.clickScrubber, async () => {
        Then("The exit button, scrubber and pause/play button is hidden", then.onScreenButtonsNotVisible);
      });
    });
  });

  Scenario("I can successfully take a Meditopia challenge in app, close and reopen the app, and the challenge still runs", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.loginAsUser(data.CUSTOMER_MEDITOPIA_1, data.AUTH_MEDITOPIA_1), async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200), 5000));
      });
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "Meditation"), async () => {
      Then("I am on the Challenge details screen", then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_1.data.earnRate));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "40"));
    });
    When("I tap the Awareness content card", when.tapMeditopiaContentCard("5", "40"), async () => {
      When("I wait ten seconds", when.waitTenSeconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 2, 40, 200));
      });
    });
    When("I start a Meditopia challenge", when.startMeditopiaChallenge, async () => {
      When("I close and reopen the app", when.relaunchAppWithoutSync, async () => {
        When("I wait", when.wait(15000), async () => {
          Then("I should be on the Well Done challenge complete screen", then.onMeditopiaChallengeComplete(5, 1, "40"));
        });
      });
    });
    When("I tap collect on the well done screen", when.tapText("Collect", 5000, true), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
    });
    When("I dismiss the streak screen", when.tapText("Done", 5000, true), async () => {
      Then("I should be on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(2), 3000));
    });
    When("I back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see my updated coins in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(240)));
      Then("I should see the number of steps I just completed", then.idVisible(ids.STEPS_COUNT(0)));
      Then("I should see the number of coins I've earned today (270) - 10 from passive and 60 from challenge", then.textVisible("240 YuCoin today"));
    });
  });

  Scenario("I can take a Meditopia challenge in app and still successfully complete it after midnight", scenario.start, async () => {
    helper.START_MEDITATION_FAKE_TIME();
    helper.END_MEDITATION_FAKE_TIME();
  });
});
