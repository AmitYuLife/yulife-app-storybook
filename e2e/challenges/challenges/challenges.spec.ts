import { Feature, Scenario, Given, When, Then, ScenarioOnly, FeatureOnly, ScenarioSkip, FeatureSkip, WhenSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as helper from "./_resources/helpers";
import * as ids from "@ids";
import * as data from "../_data";
import { getLocalisedString as t } from "@i18n";
import { getFullName } from "_utils/users";
import { questFTUEButton } from "./_resources/fixtures";
import { yuscreenImages } from "@images";

Feature("As a user I can take a challenge", async () => {
  Scenario("I can take a challenge and cancel it", scenario.start, async () => {
    Given("I login and go to the quests tab", given.logInAndGoToTab("quests", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      Then("I should see the level 1 circle", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)));
    });
    When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
      Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
    });
    When("I tap this challenge", when.tapID(ids.CHALLENGE_TILE("Short Stroll")), async () => {
      Then("I should see a screen with a take challenge option", then.canSeeNewChallengePage("short stroll", data.USER_1.data.earnRate));
    });
    When("I tap 'take challenge'", when.tapText(t("Take challenge")), async () => {
      When("I dismiss this screen if visible", when.dismissNotificationScreenIfVisible, async () => {
        Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
        Then("I should see the cancel button", then.idVisible(ids.BUTTON_CLOSE_CHALLENGE));
      });
    });
    When("I tap this button", when.tapID(ids.BUTTON_CLOSE_CHALLENGE), async () => {
      Then("I should see the cancel challenge confirmation screen", then.textVisible("Call it quits?"));
    });
    When("I tap exit", when.tapText(t("Exit challenge")), async () => {
      Then("I should be back on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
    });
    When("I go back to the yuicoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see the number of points I started with", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
  });

  Scenario("Active challenge should be cancelled on logout", scenario.start, async () => {
    Given("I login and go to the yucoin screen", given.logInAndGoToTab("yucoin", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should see 0 steps for today", then.idVisible(ids.STEPS_COUNT(0)));
    });
    When("I tap take a challenge", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
      When("I tap the first level button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
        Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
      });
    });
    When("I start the 'Short Stroll' challenge", when.startChallenge("Short Stroll"), async () => {
      When("I walk over 300 steps", when.sendSteps(400, 3000), async () => {
        Then("I should see the active challenge progress bar", then.idVisible(ids.CHALLENGE_PROGRESS_BAR, 3000));
      });
    });
    When("I log out and log in again", when.fullRestartAndLogin(data.CUSTOMER_1, data.AUTH_1, true, 3500), async () => {
      Then("I should still see 0 steps for today", then.idVisible(ids.STEPS_COUNT(0), 2000));
    });
    When("I tap the 'Back to challenge' button", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON, 1500), async () => {
      Then("I should see the failed challenge screen", then.idVisible(ids.CHALLENGE_FAILED_SCREEEN, 2000));
    });
  });

  Scenario("I can fail a challenge", scenario.start, async () => {
    Given("I login and go to the quests tab", given.logInAndGoToTab("quests", data.CUSTOMER_1, data.AUTH_1), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      Then("I should see the level 1 circle", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)));
      When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
        Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
        When("I tap this challenge", when.tapID(ids.CHALLENGE_TILE("Short Stroll")), async () => {
          Then("I should see a screen with a take challenge option", then.canSeeNewChallengePage("short stroll", data.USER_1.data.earnRate));
          When("I tap 'take challenge'", when.tapText(t("Take challenge")), async () => {
            When("I dismiss this screen", when.dismissNotificationScreenIfVisible, async () => {
              Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
              When("I wait for the challenge to end", when.wait(35000), async () => {
                Then("I should see the didn't make it screen", then.textVisible("You were so close!", 5000));
                Then("I should see the sub copy", then.textVisible("Why not try again?"));
                When("I tap Got it", when.tapText(t("Got it")), async () => {
                  Then("I should be back on quests", then.idVisible(ids.QUESTS_SCREEN(0)));
                  When("I go back to the yuicoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                    Then("I should see the number of points I started with", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  Scenario("I can complete a chest challenge", scenario.start, async () => {
    Given("I am on the quest tab as a user with a chest challenge", given.logInAndGoToTab("quests", data.CUSTOMER_9, data.AUTH_9), async () => {
      Then("I should see my coins in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(760)));
      Then("I should see level 7 unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(7)));
    });
    When("I tap level 7", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(7)), async () => {
      Then("I should see a screen telling me to take a challenge to unlock a my reward", then.textVisible("Almost there! Take a challenge to unlock your reward."));
    });
    When("I tap 'lets do it'", when.tapText(t("Let's do it")), async () => {
      Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
      Then("I should see the brisk walk challenge", then.idVisible(ids.CHALLENGE_TILE("Brisk Walk")));
      Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
      Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
    });
    When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
      Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
    });
    When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
      Then("I should see the well done screen", then.onChallengeComplete(3050, 7));
    });
    When("I tap collect on the well done screen", when.tapText(t("Collect"), 3000), async () => {
      When("I wait 10 seconds", when.wait(10000), async () => {
        Then("I should see the first day streak screen", then.textVisible("First day done!"));
      });
    });
    When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
      Then("I should see the chest unlocked screen telling me I get 200 yucoin", then.textVisible("You get 200 YuCoin", 2000));
    });
    When("I tap collect on the collect reward screen", when.tapText(t("Collect"), 1000), async () => {
      Then("I should be on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(8), 3000));
    });
    When("I back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see my updated coins in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1050)));
      Then("I should see the number of steps I just completed", then.idVisible(ids.STEPS_COUNT(3050)));
      Then("I should see the number of coins I've earned today (450)", then.textVisible("490 YuCoin today"));
    });
  });

  Scenario("I can complete today's challenge and then the homepage button updates to invite a colleague through a link and a QR code", scenario.start, async () => {
    Given("I am on the quest tab as a user with a daily challenge", given.logInAndGoToTab("quests", data.CUSTOMER_35, data.AUTH_35), async () => {
      Then("I should see my coins in the top right", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(3280)));
      When("I tap level 6", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(6)), async () => {
        Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
        Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
        Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
        When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
          Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
          When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
            Then("I should see the well done screen", then.onChallengeComplete(3050, 6));
            When("I tap collect on the well done screen", when.tapText(t("Collect"), 5000), async () => {
              Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
              When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
                Then("I should be on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(7), 3000));
                When("I tap yucoin in the tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
                  Then("I should see the Invite a colleague button", then.idVisible(ids.REFERRALS_BUTTON_HOMEPAGE));
                  When("I tap on the invite button", when.tapID(ids.REFERRALS_BUTTON_HOMEPAGE), async () => {
                    Then("I should be on the Invite a Colleague page", then.isOnInivteColleaguePage);
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  Scenario("I can take challenge with a higher earn rate of 13, see the correct higher number of yucoin earned, and complete the profile viewed event", scenario.start, async () => {
    Given("I login and go to rewards", given.logInAndGoToTab("yucoin", data.CUSTOMER_52, data.AUTH_52), async () => {
      Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
    });
    When("I tap the yucoin", when.tapID(ids.DAILYSTEP_SCREEN_COIN), async () => {
      Then("I should be on today's earning screen and see the correct yucoin earn power", then.onTodaysEarnings(0, "0.0 / 9.6 km", 0, "78"));
    });
    When("I tap 13", when.tapID(ids.YUCOIN_POWER("13")), async () => {
      Then("I am on the YuCoin Power overview screen", then.yuCoinPowerInfoVisible(data.USER_52.data.earnRate));
    });
    When("I scroll down the page", when.scrollFromID(ids.YUCOIN_EXPLAINED_SCROLL_VIEW, "up", "fast"), async () => {
      Then("I should see Got it!", then.textVisible("Got it!"));
    });
    When("I tap Got it", when.tapText(t("Got it!"), 2000), async () => {
      When("I tap Take a challenge (1 left)", when.tapText(t(`Take a challenge (%{amount} left)`, { amount: 1 }), 2000), async () => {
        Then("I should see the level 1 circle", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)));
      });
    });
    When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
      Then("I should see the short stroll and meditation challenge rewards of 26-78 yucoin each", then.canSeeChallengeTiles(data.USER_52));
    });
    When("I click to go back", when.tapID(ids.BUTTON_TOP_LEFT_BAR), async () => {
      When("I go to the yucoin today tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see the correct event for me to complete and the progress bar", then.eventToBeCompletedVisible(0, 0));
      });
    });
    When("I click on the challenge profiles viewed", when.tapChallenge("0 / 5 " + t("profiles viewed")), async () => {
      When("I scroll to text", when.scrollUntilTextVisible(ids.EVENT_DIALOG_SCREEN_SCROLL, data.GOALS_2.data.description, "down"), async () => {
        Then("I should be on the event screen and see the correct earn rates for the challenges", then.onEventDetailsScreen);
      });
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go to the leaderboard tab", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
        When("I scroll up from steps", when.swipeFromText("Steps", "down", "fast"), async () => {
          Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_7.data.name)));
        });
      });
    });
    helper.INSPECT_USER(data.CUSTOMER_55, "Forest", data.CUSTOMER_52)();
    When("I go to the yucoin today tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I click on the challenge profiles viewed", when.tapChallenge("0 / 5 " + t("profiles viewed")), async () => {
        Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(1, 0.2));
        Then("I should see Claim available for the first milestone", then.claimVisible(1));
      });
    });
    When("I click Claim rewards", when.tapText(t("Claim rewards")), async () => {
      Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("Ends on the 10th", "650", 1, "1 Profile viewed"));
    });
    When("I click Claim", when.tapText(t("Claim")), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should see the first milestone complete", then.milestoneComplete(0));
      });
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(1, 0.2));
      Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(data.GOAL_REWARD_MILESTONE_3.data.rewardValue, data.USER_52.data.earnRate, 1));
    });
    When("I go to the leaderboard tab", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
      When("I scroll up from steps", when.scrollFromID(ids.LEADERBOARD_EMPLOYEE_NAME("Simone Posner"), "down", "fast"), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_7.data.name)));
      });
    });
    helper.INSPECT_USER(data.CUSTOMER_54, "Forest", data.CUSTOMER_52)();
    When("I go to the yucoin today tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I click on the challenge profiles viewed", when.tapChallenge("1 / 5 " + t("profiles viewed")), async () => {
        Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(2, 0.4));
        Then("I should see Claim available for the second milestone", then.claimVisible(2));
      });
    });
    When("I click Claim rewards", when.tapText(t("Claim rewards")), async () => {
      Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("Ends on the 10th", "650", 2, "2 Profiles viewed"));
    });
    When("I click Claim", when.tapText(t("Claim")), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should see the second milestone complete", then.milestoneComplete(1));
      });
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(2, 0.4));
      Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(data.GOAL_REWARD_MILESTONE_3.data.rewardValue, data.USER_52.data.earnRate, 2));
    });
    When("I go to the leaderboard tab", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
      When("I scroll up from steps", when.scrollFromID(ids.LEADERBOARD_EMPLOYEE_NAME("Simone Posner"), "down", "fast"), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_7.data.name)));
      });
    });
    helper.INSPECT_USER(data.CUSTOMER_58, "Forest", data.CUSTOMER_52)();
    When("I go to the yucoin today tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I click on the challenge profiles viewed", when.tapChallenge("2 / 5 " + t("profiles viewed")), async () => {
        Then("I should be on the event screen with the correct event completion", then.eventCompletedVisible(3, 0.6));
        When("I swipe from a claimed reward", when.swipeFromIDAtIndex(ids.ANIMATED_CIRCLE("#40C057"), 1, "left", "slow"), async () => {
          Then("I should see Claim available for the third milestone", then.claimVisible(3));
        });
      });
    });
    When("I click Claim rewards", when.tapText(t("Claim rewards")), async () => {
      Then("I should be on the event milestone page", then.onCompletedEventMilestonePage("Ends on the 10th", "650", 3, "3 Profiles viewed"));
    });
    When("I click Claim", when.tapText(t("Claim")), async () => {
      When("I wait", when.wait(5000), async () => {
        Then("I should see the third milestone complete", then.milestoneComplete(2));
      });
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the yucoin page event bar showing the number of profiles viewed and hit the correct milestone", then.yuCoinPageEventDataCorrect(3, 0.6));
      Then("I should see the correct yucoin earned so far today", then.yuCoinEarnedFromEvent(data.GOAL_REWARD_MILESTONE_3.data.rewardValue, data.USER_52.data.earnRate, 3));
    });
    When("I go to the leaderboard tab", when.tapID(ids.NAV_BAR("leaderboard")), async () => {
      When("I scroll up from steps", when.scrollFromID(ids.LEADERBOARD_EMPLOYEE_NAME("Simone Posner"), "down", "fast"), async () => {
        Then("I should see the leaderboard title", then.idVisible(ids.LEADERBOARD_TITLE(data.SOCIAL_GROUP_7.data.name)));
      });
    });
    When("I scroll to the bottom of the bottom of the leaderboard", when.scrollFromID(ids.LEADERBOARD_SCROLL_LIST, "up", "fast"), async () => {
      Then("I should see Stephen's name in the leaderboard", then.textVisible(getFullName(data.CUSTOMER_57)));
    });
    helper.INSPECT_USER(data.CUSTOMER_57, "Forest", data.CUSTOMER_52)();
    When("I scroll to the bottom of the bottom of the leaderboard", when.scrollFromID(ids.LEADERBOARD_SCROLL_LIST, "up", "fast"), async () => {
      Then("I should see Milton's name in the leaderboard", then.textVisible(getFullName(data.CUSTOMER_56)));
    });
    helper.INSPECT_USER(data.CUSTOMER_56, "Forest", data.CUSTOMER_52)();
    When("I go to the yucoin today tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I click on the challenge profiles viewed", when.tapChallenge("3 / 5 " + t("profiles viewed")), async () => {
        Then("I should be on the completed events milestone page", then.onCompletedEventPage("Ends on the 10th", "5 Profiles viewed", "650"));
      });
    });
    When("I click Claim", when.tapText(t("Claim")), async () => {
      When("I wait", when.wait(3000), async () => {
        Then("The 5 profiles badge is claimed", then.milestoneComplete(0));
      });
    });
    When("I click Great!", when.tapID(ids.COLLECT_EVENT_REWARD_BUTTON), async () => {
      Then("I can see the milestones and challenge are complete", then.challengeComplete);
    });
    When("I click the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the correct yucoin earned so far today after completing the challenge", then.yuCoinEarnedFromEvent(data.GOAL_REWARD_MILESTONE_3.data.rewardValue, data.USER_52.data.earnRate, 5));
    });
  });

  Scenario("When I have unlocked level 50 and level 51, I can do two challenges for level 51", scenario.start, () => {
    Given("I login as a user on level 51", given.logInAndGoToTab("quests", data.CUSTOMER_61, data.AUTH_61), async () => {
      Then("I should see my coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17700)));
      Then("I should see the level 51 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
    });
    When("I scroll down", when.scrollFromID(ids.LEVEL_CHALLENGE_BUTTON(51), "up", "slow"), async () => {
      Then("I should see the level 50 chest unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(50)));
    });
    When("I tap the level 50 chest", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(50)), async () => {
      Then("I should see the on screen message I have achieved Yunity Forest", then.yunityCorrect("Forest"));
    });
    When("I wait", when.wait(3000), async () => {
      When("I scroll up", when.scrollFromID(ids.LEVEL_CHALLENGE_BUTTON(50), "down", "slow"), async () => {
        Then("I should see the level 51 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51), 2000));
      });
    });
    When("I complete a walking challenge at level 51", when.completeChallenge(51, "Short Stroll"), async () => {
      Then("I should see the challenge hint on the succes screen", then.successScreenHintVisible);
    });
    When("I tap the hint", when.tapText("Unlock more challenges"), async () => {
      Then("I should see the challenge hint on the succes screen, as it should not be tappable", then.successScreenHintVisible);
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done"), async () => {
        Then("I should see the level 51 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
      });
    });
    When("I tap this level 52 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(52)), async () => {
      Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked("52"));
    });
    When("I tap got it", when.tapText(t("Got it")), async () => {
      Then("I should see the level 51 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
    });
    When("I complete a second walking challenge at level 51", when.completeSecondChallenge(51, "Short Stroll"), async () => {
      Then("I should see the level 51 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(51)));
    });
    When("I tap this level 52 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(52)), async () => {
      Then("I should see a message that the next level will be available in 12 hours", then.nextLevelLocked("52"));
    });
  });

  Scenario("I am able to start a meditation challenge, close, then reopen the app", scenario.start, () => {
    Given("I login as a user who has meditation unlocked", given.logInAndGoToTab("quests", data.CUSTOMER_13, data.AUTH_13), async () => {
      Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(50200)));
    });
    When("I send the mindfulness data", when.sendMindfulnessData(500), async () => {
      When("I start a meditation challenge", when.startMeditationChallengeFromQuests(175), async () => {
        Then("I should be on the Meditation challenge progress screen", then.idVisible(ids.CHALLENGE_PROGRESS_SCREEN("meditation")));
      });
    });
    When("I close and reopen the app", when.closeAndReopenApp, async () => {
      Then("I should be on the Meditation challenge progress screen", then.idVisible(ids.CHALLENGE_PROGRESS_SCREEN("meditation")));
    });
    When("I wait for the challenge to complete", when.wait(50000), async () => {
      Then("I should see the Collect button", then.idVisible(ids.CTA_COLLECT));
    });
    When("I click collect", when.tapID(ids.CTA_COLLECT), async () => {
      When("I tap Done", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(50240)));
        Then("I should see the level 175 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(175)));
      });
    });
  });

  Scenario("I can confirm the accurate reset of data and successfully redeem a challenge initiated the day before, completed just after midnight", scenario.start, async () => {
    Given("I login as a user who initiated a walking challenge yesterday", given.loginAsUser(data.CUSTOMER_132, data.AUTH_132), async () => {
      Then("I should see my updated coin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(520)));
    });
    When("I tap the quests screen", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see the well done screen", then.onChallengeComplete(450, 1));
      When("I tap to collect the reward from the walking challenge I completed just after midnight", when.tapText(t("Collect")), async () => {
        Then("I should still see the correct yucoin balance", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(560)));
      });
    });
    When("I go to the yucoin screen", when.navigateTo("yucoin"), async () => {
      Then("I should see that my daily steps activity is correct", then.textVisible("0 steps"));
      Then("I should see the correct amount of YuCoin collected today", then.textVisible("200 YuCoin today"));
      Then("I should see that I still have 1 challenge left", then.textVisible("Take a challenge (1 left today)"));
    });
  });

  Scenario("I can take a long walk challenge and still successfully complete and collect the chest reward after midnight", scenario.start, async () => {
    helper.START_WALKING_CHALLENGE_FAKE_TIME();
    helper.END_WALKING_CHALLENGE_FAKE_TIME();
  });

  Scenario("I can take a long walk challenge, put app in background, open app and still successfully complete and collect the chest reward after midnight", scenario.start, async () => {
    helper.START_WALKING_CHALLENGE_MINIMISE_FAKE_TIME();
    helper.END_WALKING_CHALLENGE_FAKE_TIME();
  });

  Scenario("If I have the correct toggle, I can see the quest map FTUE", scenario.start, async () => {
    Given("I login and go to the quests tab", given.logInAndGoToTab("quests", data.CUSTOMER_2, data.AUTH_2), async () => {
      Then("I should see the quest FTUE", then.onQuestFTUE);
    });
    When("I go back to the YuCoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I tap take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
        Then("I should see the quest FTUE", then.onQuestFTUE);
      });
    });
    When("I tap lets go", when.tapText(questFTUEButton), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0)));
      Then("I should see the level 1 circle", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1)));
    });
    When("I tap on the challenge button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
      Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
      Then("I should see the brisk walk challenge", then.idVisible(ids.CHALLENGE_TILE("Brisk Walk")));
      Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
      Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
    });
  });

  Scenario("'Take a challenge' button should take user(level dependent) straight to the challenge page", scenario.start, async () => {
    Given("I login and go to the quests tab", given.logInAndGoToTab("yucoin", data.CUSTOMER_10, data.AUTH_10), async () => {
      Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(12200)));
    });
    When("I tap take a challenge", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
      Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
      Then("I should see the brisk walk challenge", then.idVisible(ids.CHALLENGE_TILE("Brisk Walk")));
      Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
      Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should be on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(101), 3000));
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I tap '0/5", when.tapText("0/5"), async () => {
        When("I tap take a challenge", when.tapID(ids.STREAKS_SCREEN_BUTTON), async () => {
          Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
          Then("I should see the brisk walk challenge", then.idVisible(ids.CHALLENGE_TILE("Brisk Walk")));
          Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
          Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
        });
      });
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 1000), async () => {
        When("I tap on the YuCoin Badge", when.tapYuCoinIcon, async () => {
          When("I tap take a challenge", when.tapID(ids.TAKE_A_CHALLENGE_LEFT_BUTTON), async () => {
            Then("I should see the short stroll challenge", then.idVisible(ids.CHALLENGE_TILE("Short Stroll")));
            Then("I should see the brisk walk challenge", then.idVisible(ids.CHALLENGE_TILE("Brisk Walk")));
            Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
            Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
          });
        });
      });
    });
  });

  Scenario("'Take a challenge' button should NOT take user in yuniversal 7 straight to the challenge page", scenario.start, async () => {
    Given("I login and go to the quests tab", given.logInAndGoToTab("yucoin", data.CUSTOMER_11, data.AUTH_11), async () => {
      Then("I should see my current coin amount", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(12200)));
    });
    When("I tap take a challenge", when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON), async () => {
      Then("I should see the quest map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)));
    });
  });

  Scenario("I can start a challenge with the new quest map redesign", scenario.start, async () => {
    Given("I login and go to the quests tab", given.logInAndGoToTab("quests", data.CUSTOMER_8, data.AUTH_8), async () => {
      Then("I should see levels 1 to 4 have been completed", then.levelSVGVisible(1, 4, "#FFD600"));
      Then("I should see levels 6 and 7 are incomplete", then.levelSVGVisible(6, 7, "#F5F5F5"));
      Then("I should see level 5 is the one I am currently on", then.levelSVGVisible(5, 5, "rgb(226, 1, 119)"));
    });
    When("I tap level 1", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
      Then("I should be on the level 1 summary page", then.textVisible("Level 1 Summary"));
    });
    When("I go back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap level 6", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(6)), async () => {
        Then("I should see 'Unlock at level 6", then.textVisible("Unlock at level 6"));
      });
    });
    When("I tap got it", when.tapText("Got it"), async () => {
      When("I tap level 5", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
        Then("I should see Short Stroll", then.textVisible("Short Stroll"));
        Then("I should see the brisk walk challenge", then.idVisible(ids.CHALLENGE_TILE("Brisk Walk")));
        Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
        Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Meditation")));
        Then("I should see the meditation challenge", then.idVisible(ids.CHALLENGE_TILE("Yudoku")));
      });
    });
    When("I start the short stroll", when.startChallenge("Short Stroll"), async () => {
      Then("I should be on the short stroll challange screen", then.textVisible("0 steps"));
    });
  });
});
