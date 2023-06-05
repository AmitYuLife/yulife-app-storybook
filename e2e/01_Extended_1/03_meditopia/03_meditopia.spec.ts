import { Feature, Scenario, Given, When, Then, FeatureOnly, ScenarioOnly } from "@yu-life/yulife-bdd-framework";
import * as scenario from "./_steps/scenario";
import * as given from "./_steps/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import { LEVEL_CHALLENGE_BUTTON, NAV_BAR, VIEW_TOP_RIGHT_COIN_COUNTER, STEPS_COUNT, MINDFUL_COUNT } from "@ids";
import { CUSTOMER_MEDITOPIA_1, AUTH_MEDITOPIA_1, CUSTOMER_MEDITOPIA_2, AUTH_MEDITOPIA_2 } from "@data";

Feature("As a user I can take a Meditopia challenge", async () => {
  Scenario("I can successfully take and complete a 5 minute Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_MEDITOPIA_1, AUTH_MEDITOPIA_1), async () => {
      Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "meditation"), async () => {
      Then("I am on the Challenge Details screen", then.onChallengeDetailsScreen("60 x"));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "60"));
    });
    When("I tap the Awareness content card", when.tapAwarenessContentCard("5", "60"), async () => {
      When("I wait 3 seconds", when.wait3Seconds, async () => {
        Then("I should be on the Awareness Content intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 1, 60, 200)
        );
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I complete the 5 min Meditopia session (plays a 15 sec test video)", when.completeMeditopiaContentSession, async () => {
        Then("I should be on the challenge completion well done screen", then.onMeditopiaChallengeComplete(5, 1, "60"));
      });
    });
    When("I tap collect on the well done screen", when.tapText("Collect", 5000), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
    });
    When("I dismiss the streak screen", when.tapText("Done", 5000), async () => {
      Then("I should be on the quest screen", then.idVisible(LEVEL_CHALLENGE_BUTTON(2), 3000));
    });
    When("I back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
      Then("I should see my updated coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(270)));
      Then("I should see the number of steps I just completed", then.idVisible(STEPS_COUNT(0)));
      Then("I should see the number of mindfulness mins I just completed", then.idVisible(MINDFUL_COUNT("5 min")));
      Then("I should see the number of coins I've earned today (60)", then.textVisible("270 YuCoin today"));
    });
  });

  Scenario("I can successfully take and complete a 14 minute Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 10 who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_MEDITOPIA_2, AUTH_MEDITOPIA_2), async () => {
      Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(550)));
    });
    When("I select a 14 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(10, "meditation"), async () => {
      Then("I am on the Challenge details screen", then.on3ChallengesDetailsScreen);
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen2Challenges("5", "20", "14", "30"));
    });
    When("I tap the 14 mins Awareness content card", when.tapAwarenessContentCard("14", "30"), async () => {
      When("I wait 3 seconds", when.wait3Seconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 3, 30, 550));
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I complete the 14 min Meditopia session (plays a 15 sec test video)", when.completeMeditopiaContentSession, async () => {
        Then("I should be on the challenge completion well done screen", then.onMeditopiaChallengeComplete(14, 10, "30"));
      });
    });
    When("I tap collect on the well done screen", when.tapText("Collect", 5000), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
    });
    When("I dismiss the streak screen", when.tapText("Done", 4000), async () => {
      Then("I should be on the quest screen", then.idVisible(LEVEL_CHALLENGE_BUTTON(11), 3000));
    });
    When("I back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
      Then("I should see my updated coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(600)));
      Then("I should see the number of steps I just completed", then.idVisible(STEPS_COUNT(0)));
      Then("I should see the number of mindfulness mins I just completed", then.idVisible(MINDFUL_COUNT("14 min")));
      Then("I should see the number of coins I've earned today (250)", then.textVisible("250 YuCoin today"));
    });
  });

  Scenario("I can successfully take and quit a Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_MEDITOPIA_1, AUTH_MEDITOPIA_1), async () => {
      Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "meditation"), async () => {
      Then("I am on the Challenge details screen", then.onChallengeDetailsScreen("60 x"));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "60"));
    });
    When("I tap the Awareness content card", when.tapAwarenessContentCard("5", "60"), async () => {
      When("I wait 3 seconds", when.wait3Seconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 1, 60, 200));
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I quit the challenge half way through", when.startAndQuitMeditopiaChallenge, async () => {
        Then("I should see the quit challenge confirmation sceen", then.isOnQuitChallengeScreen);
      });
    });
    When("I return to the challenge", when.closeQuitChallengeScreen, async () => {
      When("I quit the challenge again", when.quitMeditopiaChallenge, async () => {
        Then("I should see the quit challenge confirmation sceen", then.isOnQuitChallengeScreen);
      });
    });
    When("I exit the challenge via the quit challenge confirmation sceen", when.exitMeditopiaChallenge, async () => {
      Then("I should be on choose Meditopia content screen", then.isOnTodaysMeditationScreen("5", "60"));
    });
  });

  Scenario("I can successfully take, pause, start and finish a Meditopia challenge in app", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_MEDITOPIA_1, AUTH_MEDITOPIA_1), async () => {
      Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "meditation"), async () => {
      Then("I am on the Challenge Details screen", then.onChallengeDetailsScreen("60 x"));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "60"));
    });
    When("I tap the Awareness content card", when.tapAwarenessContentCard("5", "60"), async () => {
      When("I wait 3 seconds", when.wait3Seconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 1, 60, 200));
      });
    });
    When("I tap start session", when.tapStartSession, async () => {
      When("I start and pause the challenge half way through", when.pauseMeditopiaChallenge, async () => {
        Then("I should see the paused time on the screen", then.pauseChallengeTimeVisible);
      });
    });
    When("I continue to play the Meditopia challenge to finish", when.playAndFinishMeditopiaChallenge, async () => {
      Then("I should be on the challenge completion well done screen", then.onMeditopiaChallengeComplete(5, 1, "60"));
    });
  });

  Scenario("I can successfully take a Meditopia challenge in app and hide the on screen elements", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_MEDITOPIA_1, AUTH_MEDITOPIA_1), async () => {
      Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "meditation"), async () => {
      Then("I am on the Challenge details screen", then.onChallengeDetailsScreen("60 x"));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "60"));
    });
    When("I tap the Awareness content card", when.tapAwarenessContentCard("5", "60"), async () => {
      When("I wait 3 seconds", when.wait3Seconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 1, 60, 200));
      });
    });
    When("I start a Meditopia challenge", when.startMeditopiaChallenge, async () => {
      When("I click on the timer in the middle of the screen", when.clickScrubber, async () => {
        Then("The exit button, scrubber and pause/play button is hidden", then.onScreenButtonsNotVisible);
      });
    });
  });

  Scenario("I can successfully take a Meditopia challenge in app, close and reopen the app, and the challenge still runs", scenario.start, async () => {
    Given("I login as a user on level 1 who has meditation unlocked", given.logInAndGoToTab("quests", CUSTOMER_MEDITOPIA_1, AUTH_MEDITOPIA_1), async () => {
      Then("I should see my current coin amount", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I select a 5 min content meditopia challenge", when.selectMeditopiaChallengeFromQuests(1, "meditation"), async () => {
      Then("I am on the Challenge details screen", then.onChallengeDetailsScreen("60 x"));
    });
    When("I tap Take Challenge", when.tapTakeChallenge, async () => {
      Then("I should be on the Today's meditation screen", then.isOnTodaysMeditationScreen("5", "60"));
    });
    When("I tap the Awareness content card", when.tapAwarenessContentCard("5", "60"), async () => {
      When("I wait 3 seconds", when.wait3Seconds, async () => {
        Then("I should be on the Awareness meditation intro screen", then.onMeditationContentIntroScreen("Awareness", 15, 1, 60, 200));
      });
    });
    When("I start a Meditopia challenge", when.startMeditopiaChallenge, async () => {
      When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
        When("I wait", when.wait(15000), async () => {
          Then("I should be on the Well Done challenge complete screen", then.onMeditopiaChallengeComplete(5, 1, "60"));
        })
      })
    });
    When("I tap collect on the well done screen", when.tapText("Collect", 5000), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
    });
    When("I dismiss the streak screen", when.tapText("Done", 5000), async () => {
      Then("I should be on the quest screen", then.idVisible(LEVEL_CHALLENGE_BUTTON(2), 3000));
    });
    When("I back to the yucoin tab", when.tapID(NAV_BAR("yucoin")), async () => {
      Then("I should see my updated coins in the top right", then.idVisible(VIEW_TOP_RIGHT_COIN_COUNTER(270)));
      Then("I should see the number of steps I just completed", then.idVisible(STEPS_COUNT(0)));
      Then("I should see the number of coins I've earned today (270) - 10 from passive and 60 from challenge", then.textVisible("270 YuCoin today"));
    });
  });
});
