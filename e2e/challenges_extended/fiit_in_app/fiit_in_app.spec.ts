import { Given, When, Then, Feature, Scenario, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { fiitCardioMedia, fiitRebalanceMedia } from "./_resources/constants";
import { bodyCoachWorkout10 } from "./_resources/fixtures";

Feature("Fiit in app", async () => {
  Scenario("As a user with access to Fiit in-app challenges, I am able to complete a Fiit challenge ", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_FIIT, data.AUTH_FIIT), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0), 3000));
      Then("I should see that level 5 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5), 3000));
    });
    When("I tap the level 5 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the 'Workouts' challenge tile", then.idVisible(ids.CHALLENGE_TILE("Workouts")));
      });
    });
    When("I tap on the 'Workouts' challenge tile", when.tapID(ids.CHALLENGE_TILE("Workouts")), async () => {
      Then("I should be able to see details about the challenge", then.canSeeNewChallengePage("workouts", data.USER_FIIT.data.earnRate));
    });
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      When("I click on 'Cardio'", when.tapFiitCategory("Cardio"), async () => {
        Then("I should be on the 'Cardio classes' screen and see the various media available", then.canSeeFiitMediaList(fiitCardioMedia, data.USER_FIIT));
      });
    });
    When("I tap on one of the videos", when.tapFiitVideo(data.MEDIA_5), async () => {
      Then("I should see the video description screen", then.canSeeVideoDescription(data.MEDIA_5, data.USER_FIIT, 2500));
    });
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapID(ids.GENERIC_SCREEN_CTA("maybe later"), 1200), async () => {
        When("I pause the video", when.pauseVideo(true), async () => {
          Then("I can see the video is paused", then.isVideoPaused(true));
        });
      });
    });
    When("I unpause the video", when.pauseVideo(false, 2000), async () => {
      When("I wait for the video to finish", when.wait(20000), async () => {
        Then("I can see the challenge reward screen", then.canSeeFiitChallengeRewardScreen(data.USER_FIIT, data.MEDIA_5, 5));
      });
    });
    When("I tap 'Collect'", when.tapID(ids.CTA_COLLECT, 3500), async () => {
      Then("I can see I've completed day one of a streak", then.completedTodayStreakCopyVisible(1));
    });
    When("I tap 'done'", when.tapID(ids.STREAKS_SCREEN_BUTTON, 2000), async () => {
      Then("I am taken to the Quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I go to the yucoin screen", when.navigateTo("yucoin"), async () => {
      Then("I should see 314 YuCoin have been earned today", then.canSeeYuCoinEarntToday(314));
    });
    When("I click on the YuCoin Icon to see the breakdown of my earnings", when.tapYuCoinIcon, async () => {
      Then("I'm on the 'Today's Earnings' screen", then.idVisible(ids.TODAYS_EARNINGS));
    });
    When("I scroll further down the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast"), async () => {
      Then("I can see 1/1 challenges completed today", then.textVisible("Today's challenges (1/1)", 3000));
      Then("I can see the fiit challenge completed today, with the correct duration", then.canSeeFiitCompleted(data.MEDIA_5));
    });
  });

  Scenario("As a user with access to Fiit in-app challenges, I am able to start watching and then cancel the challenge mid video", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_FIIT, data.AUTH_FIIT), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      Then("I should see that level 5 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
    });
    When("I tap the level 5 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the 'Workouts' challenge tile", then.idVisible(ids.CHALLENGE_TILE("Workouts")));
      });
    });
    When("I tap on the 'Workouts' challenge tile", when.tapID(ids.CHALLENGE_TILE("Workouts")), async () => {
      Then("I should be able to see details about the challenge", then.canSeeNewChallengePage("workouts", data.USER_FIIT.data.earnRate));
    });
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      When("I click on 'Rebalance'", when.tapFiitCategory("Rebalance"), async () => {
        Then("I should be on the 'Rebalance classes' screen and see the various media available", then.canSeeFiitMediaList(fiitRebalanceMedia, data.USER_FIIT));
      });
    });
    When("I tap on one of the videos", when.tapFiitVideo(data.MEDIA_7), async () => {
      Then("I should see the video description screen", then.canSeeVideoDescription(data.MEDIA_7, data.USER_FIIT, 2500));
    });
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapID(ids.GENERIC_SCREEN_CTA("maybe later"), 1000), async () => {
        When("I tap the close button to quit the challenge part way through", when.tapID(ids.FIIT_MEDIA_PLAYER_CLOSE, 1000), async () => {
          Then("I should see the quit challenge confirmation screen", then.isOnQuitChallengeScreen);
        });
      });
    });
    When("I exit the challenge", when.exitChallenge, async () => {
      Then("I should be back on the 'Rebalance classes' screen", then.canSeeFiitMediaList(fiitRebalanceMedia, data.USER_FIIT));
    });
  });

  Scenario("As a user with access to Fiit in-app challenges, I am able to complete a Fiit challenge, close the app and open it again, and still be awarded YuCoin", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_FIIT, data.AUTH_FIIT), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0), 3000));
      Then("I should see that level 5 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5), 3000));
    });
    When("I tap the level 5 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the 'Workouts' challenge tile", then.idVisible(ids.CHALLENGE_TILE("Workouts")));
      });
    });
    When("I tap on the 'Workouts' challenge tile", when.tapID(ids.CHALLENGE_TILE("Workouts")), async () => {
      Then("I should be able to see details about the challenge", then.canSeeNewChallengePage("workouts", data.USER_FIIT.data.earnRate));
    });
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      When("I click on 'Rebalance'", when.tapFiitCategory("Rebalance"), async () => {
        Then("I should be on the 'Rebalance classes' screen and see the various media available", then.canSeeFiitMediaList(fiitRebalanceMedia, data.USER_FIIT));
      });
    });
    When("I tap on one of the videos", when.tapFiitVideo(data.MEDIA_7), async () => {
      Then("I should see the video description screen", then.canSeeVideoDescription(data.MEDIA_7, data.USER_FIIT, 2500));
    });
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapID(ids.GENERIC_SCREEN_CTA("maybe later"), 1200), async () => {
        Then("The video is playing", then.isVideoPaused(false));
      });
    });
    When("I close and reopen the app", when.relaunchAppWithoutSync, async () => {
      Then("I should see the challenge hint on the success screen", then.successScreenHintVisible);
    });
    When("I tap 'Collect'", when.tapID(ids.CTA_COLLECT, 4000), async () => {
      When("I tap 'Done' on the first day streak modal", when.tapID(ids.STREAKS_SCREEN_BUTTON, 200), async () => {
        Then("I am taken to the Quests screen", then.idVisible(ids.QUESTS_SCREEN(0), 3000));
      });
    });
    When("I go to the yucoin screen", when.navigateTo("yucoin"), async () => {
      Then("I should see 314 YuCoin today have been earnt today", then.canSeeYuCoinEarntToday(314));
    });
    When("I click on the YuCoin Icon to see the breakdown of my earnings", when.tapYuCoinIcon, async () => {
      Then("I'm on the 'Today's Earnings' screen", then.idVisible(ids.TODAYS_EARNINGS));
    });
    When("I scroll further down the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast"), async () => {
      Then("I can see 1/1 challenges completed today", then.textVisible("Today's challenges (1/1)", 3000));
      Then("I can see the fiit challenge completed today, with the correct duration", then.canSeeFiitCompleted(data.MEDIA_7));
    });
  });

  Scenario("As a user with workouts enabled, I am able to close-open app, and still be able to complete a body coach workout", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_BODY_COACH, data.AUTH_BODY_COACH), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I tap the level 5 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the 'Workouts' challenge tile", then.textVisible("Workouts"));
      });
    });
    When("I tap on the 'Workouts' challenge tile", when.tapText("Workouts"), async () => {
      Then("I should be able to see details about the challenge", then.canSeeNewChallengePage("workouts", data.USER_BODY_COACH.data.earnRate));
    });
    When("I tap 'Take challenge'", when.tapTakeChallenge, async () => {
      When("I tap on the body coach tile", when.tapText("Body Coach"), async () => {
        Then("I should be on the 'Body Coach classes' screen", then.idVisible(ids.FIIT_CATEGORY_LIST_HEADER("Body Coach classes")));
        Then("I should see all the available Body Coach workouts listed in order", then.canSeeBodyCoachWorkouts);
      });
    });
    When("I select the last workout", when.tapText("Ultimate Beginner #10"), async () => {
      Then("I should see the workout info", then.canSeeBodyCoachVideoInfo(bodyCoachWorkout10, data.USER_BODY_COACH));
    });
    When("I tap to play the video (15 seconds only in detox)", when.playFiitVideo, async () => {
      When("I tap 'maybe later'", when.tapID(ids.GENERIC_SCREEN_CTA("maybe later"), 1200), async () => {
        When("I pause the video", when.pauseVideo(true), async () => {
          Then("I can see the video is paused", then.isVideoPaused(true));
        });
      });
    });
    When("I unpause the video", when.pauseVideo(false), async () => {
      Then("The video is playing", then.isVideoPaused(false));
    });
    When("I close and reopen the app", when.minimiseAndReopenApp, async () => {
      When("I tap the menu icon to close the referrals popover", when.tapID(ids.NAV_BAR("yucoin"), 2500), async () => {
        When("I navigate to the quests screen", when.tapID(ids.NAV_BAR("quests")), async () => {
          Then("I should see the challenge hint on the success screen", then.successScreenHintVisible);
        });
      });
    });
    When("I tap 'Collect'", when.tapID(ids.CTA_COLLECT, 4000), async () => {
      Then("I am taken to the Quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I navigate to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see that 314 YuCoin have been earned today", then.canSeeYuCoinEarntToday(314));
      Then("I can see I've completed day one of a streak", then.idVisible(ids.STREAKS_BUTTON_LABEL("1/5"), 2000));
    });
  });
});
