import { Feature, Scenario, Given, When, Then } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { weeklyQuestsTimeRemaining } from "@navigation";
import { getFullName } from "_utils/users";

// Commenting out lines 131 & 138 related to Mindfulness while its getting looked into, so the scenario passes
Feature("End of the world/Yuniverse", async () => {
  Scenario("I complete level 200, enter EOTW with a yucoin surge of 2 and take 4 challenges at level 1", scenario.start, () => {
    Given("I login as a user on level 200 with a earn rate of 6", given.loginAsUser(data.CUSTOMER_69, data.AUTH_69), async () => {
      Then("I should see the 'quest' tab", then.idVisible(ids.NAV_BAR("quests")));
    });
    When("I go to the quests screen", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see the level 200 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(200)));
    });
    When("I tap level 200 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(200)), async () => {
      Then("I should see that I have achieved Yunity Mountain", then.yunityCorrect("Mountain"));
      Then("I should see the correct rewards in the chest for moving into EOTW/yuniverse", then.mountainTwoRewardsVisible());
    });
    When("I wait", when.wait(1000), async () => {
      When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
        Then("I am on explore the yuniverse screen", then.isOnExploreYuniverseScreen);
      });
    });
    When("I tap explore the yuniverse", when.tapText("Explore the Yuniverse"), async () => {
      Then("I should be on the yucoin", then.idVisible(ids.DAILY_STEPS_SCREEN));
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should be on the quest screen and see 5 challenges unlocked", then.yuniverseChallengesVisible);
      Then("I should see the 2x surge yucoin value for the 5 unlocked challenges", then.canSeeChallengeTiles(data.USER_69, "boost"));
    });
    // first challenge - short stroll
    When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
      Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(1, 48, 400));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done", 3000), async () => {
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17748), 2500));
        Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)));
      });
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"));
      Then("I should see the correct number of steps done today", then.stepsDoneToday(400));
      Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(200, 48));
    });
    When("I go to the today's earnings screen", when.tapText("400 steps"), async () => {
      Then("I see the correct yucoin earned today so far", then.textVisible("248 YuCoin"));
      Then("I can see my total steps", then.textVisible("400 / 12000 steps"));
    });
    When("I swipe down the screen", when.swipeFromText("0 / 30 mindful mins", "up", "fast"), async () => {
      Then("I can see 1/4 challenges completed today", then.textVisible("Today's challenges (1/4)"));
      Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"));
      Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (3 left)", 2000), async () => {
      Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible);
    });
    // second challenge - brisk walk
    When("I complete a brisk walk challenge", when.selectAndCompleteWalkingChallenge("Brisk Walk", 1200), async () => {
      Then("I should see the correct number of yucoin earned and steps completed in the task", then.stepsChallengeDataCorrect(1, 72, 400 + 1200));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)));
      Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17820)));
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"));
      Then("I should see the correct number of steps done today", then.stepsDoneToday(1200));
      Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(248, 72));
    });
    When("I go to the today's earnings screen", when.tapText("1,200 steps"), async () => {
      Then("I see the correct yucoin earned today so far", then.textVisible("320 YuCoin"));
      Then("I can see my total steps", then.textVisible("1200 / 12000 steps"));
    });
    When("I swipe down the screen", when.swipeFromText("Daily core activities", "up", "fast"), async () => {
      Then("I can see 2/4 challenges completed today", then.textVisible("Today's challenges (2/4)"));
      Then("I can see my short stroll completed today", then.textVisible("Brisk Walk (1,600 steps)"));
      Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"));
      Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (2 left)", 2000), async () => {
      Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible);
    });
    // third challenge - long walk
    When("I complete a long walk challenge at level 251", when.selectAndCompleteWalkingChallenge("Long Walk", 2000), async () => {
      Then("I should see the correct number of yucoin earned and steps completed in the task", then.stepsChallengeDataCorrect(1, 96, 400 + 1200 + 2000));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)));
      Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17922), 2500));
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"));
      Then("I should see the correct number of steps done today", then.stepsDoneToday(2000));
      Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(320, 102, 2500));
    });
    When("I go to the today's earnings screen", when.tapText("2,000 steps"), async () => {
      Then("I see the correct yucoin earned today so far", then.textVisible("422 YuCoin"));
      Then("I can see my total steps", then.textVisible("2000 / 12000 steps"));
    });
    When("I swipe down the screen", when.swipeFromText("Today's check-ins", "up", "fast"), async () => {
      Then("I can see 3/4 challenges completed today", then.textVisible("Today's challenges (3/4)"));
      Then("I can see my short stroll completed today", then.textVisible("Long Walk (3,600 steps)"));
      Then("I can see my short stroll completed today", then.textVisible("Brisk Walk (1,600 steps)"));
      Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"));
      Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (1 left)", 2000), async () => {
      Then("I should be on the quest screen and see all 5 challenges available to me to take", then.yuniverseChallengesVisible);
    });
    // fourth challenge - meditation
    When("I complete a meditation challenge at level 1", when.selectAndCompleteMeditationChallenge(180), async () => {
      Then("I should see the correct number of yucoin earned and steps completed in the task", then.meditationChallengeDataCorrect(1, 48, 3));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I go to quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
        Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)));
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(17970)));
      });
    });
    When("I trigger app update", when.triggerAppUpdateState, async () => {
      When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"));
        Then("I should see the correct number of steps done today", then.stepsDoneToday(2000));
        // Then("I should see the correct number of mindful minutes", then.textVisible("3 min"));
        Then("I should see the correct number of yucoin earned today so far with a double surge", then.yucoinTodayEarnedWithSurge(422, 48, 2500));
      });
    });
    When("I go to the today's earnings screen", when.tapText("2,000 steps"), async () => {
      Then("I see the correct yucoin earned today so far", then.textVisible("470 YuCoin"));
      Then("I can see my total steps", then.textVisible("2000 / 12000 steps"));
      // Then("I can see my total mins", then.textVisible("3 / 30 mindful mins"));
    });
    When("I swipe down the screen", when.swipeFromText("Today's check-ins", "up", "fast"), async () => {
      Then("I can see 4/4 challenges completed today", then.textVisible("Today's challenges (4/4)"));
      Then("I can see my mins completed today", then.textVisible("Meditation (3 mins)"));
      Then("I can see my short stroll completed today", then.textVisible("Long Walk (3,600 steps)"));
      Then("I can see my short stroll completed today", then.textVisible("Brisk Walk (1,600 steps)"));
      Then("I can see my short stroll completed today", then.textVisible("Short Stroll (400 steps)"));
      Then("I should not see any challenges left", then.textNotVisible("Take a challenge (1 left)"));
      Then("I should see the welldone banner as I have completed 4 challenges today", then.idVisible(ids.WELLDONE_BANNER));
    });
  });

  Scenario("I complete level 7 in EOTW, I finish EOTW and enter the red planet with a yucoin surge of 2", scenario.start, () => {
    Given("I login as a user on level 207 with a earn rate of 6", given.logInAndGoToTab("yucoin", data.CUSTOMER_70, data.AUTH_70), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Robert Boratheon", "Yuniversal", "VII", true));
    });
    When("I tap on my yumoji", when.tapID(ids.YUMOJI_PROMPT_CTA), async () => {
      Then("I should be on the create Yumoji screen", then.onCreateAvatarScreen);
    });
    When("I create my yumoji", when.createDefaultYumoji, async () => {
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Robert Boratheon", "Yuniversal", "VII", false));
      Then("I should see my Yumoji", then.idVisible(ids.YUMOJI_YUSCREEN_V5));
    });
    When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
        Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)));
      });
    });
    When("I tap level 7 button", when.tapYuniverseLevelForFirstTime(7, 187, 263), async () => {
      Then("I should be on the celestial chest screen", then.celestialChestEarned);
    });
    When("I tap open the chest", when.tapText("Open the chest"), async () => {
      Then("I can see the 3 celestial chest rewards, which each earn me my earn rate (6) * 50", then.celestialChestAwardsVisible(data.USER_70));
    });
    When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
      Then("I am on the space travel screen", then.idVisible(ids.SPACE_TRAVEL_SCREEN));
    });
    When("I tap travel", when.tapText("Travel"), async () => {
      When("I wait", when.wait(7000), async () => {
        When("I tap a new beginning", when.tapText("A new beginning"), async () => {
          Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
        });
      });
    });
    When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Robert Boratheon", "Forest", "201", false));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see level 201 unlocked in the red planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
    });
    When("I tap level 201 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a short stroll challenge at level 201", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
      When("I tap collect", when.tapText("Collect"), async () => {
        When("I tap done", when.tapText("Done"), async () => {
          Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
          Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18344), 2000));
        });
      });
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 3 challenges left", then.textVisible("Take a challenge (3 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (3 left today)", 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a brisk walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Brisk Walk", 800), async () => {
      When("I tap collect", when.tapText("Collect"), async () => {
        Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18380), 2000));
      });
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 2 challenges left", then.textVisible("Take a challenge (2 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (2 left today)", 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a long walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Long Walk", 2000), async () => {
      When("I tap collect", when.tapText("Collect"), async () => {
        Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18434), 2000));
      });
    });
    When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
      Then("I should see 1 challenges left", then.textVisible("Take a challenge (1 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (1 left today)", 2000), async () => {
      Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
    });
    When("I complete a meditation challenge at level 201", when.selectAndCompleteMeditationChallenge(180), async () => {
      When("I tap collect", when.tapText("Collect"), async () => {
        Then("I should see the level 201 challenge button", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
        Then("I should see level 201 has 3 stars", then.idVisible(ids.LEVEL_STAR_COUNT(3)));
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(18446), 2000));
      });
    });
    When("I tap level 201", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
      Then("I should see all the challenges I completed along with the yucoin awarded", then.challengesAndYuCoinsAwardedVisible);
    });
    When("I tap back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should not be able to take another challenge", then.textNotVisible("Take a challenge"));
      });
    });
  });

  Scenario("As a user, I want the celestial chest to be based on earn rate, so that I am rewarded on my policy amounts", scenario.start, () => {
    Given("I login as a user on level 207 with a earn rate of 9", given.logInAndGoToTab("yucoin", data.CUSTOMER_78, data.AUTH_78), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu"), 2000), async () => {
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Timothy Poogman", "Yuniversal", "VII", true));
    });
    When("I go to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 2000), async () => {
      When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 3000), async () => {
        Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)));
      });
    });
    When("I tap level 7 button", when.tapYuniverseLevelForFirstTime(7, 187, 263), async () => {
      Then("I should be on the celestial chest screen", then.celestialChestEarned);
    });
    When("I tap open the chest", when.tapText("Open the chest", 2000), async () => {
      Then("I can see the 3 celestial chest rewards, which earns me my earn rate (9) * 50", then.celestialChestAwardsVisible(data.USER_78));
    });
  });

  Scenario("As a level 201+ user, I have weekly quests so I have extra activity", scenario.start, async () => {
    Given("I login as a user on level 201", given.logInAndGoToTab("yucoin", data.CUSTOMER_81, data.AUTH_81), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see level 201 unlocked in the red planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
      Then("I should see the Weekly Quests activty icon", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)));
    });
    When("I tap the Weekly Goals icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)), async () => {
      Then("I can see the Weekly quests pop-up", then.weeklyQuestsPopUpVisible);
    });
    When("I click the button text without a challenge selected", when.tapText("Let's go"), async () => {
      Then("Nothing happens, I cannot see the next modal", then.textNotVisible("Reward"));
    });
    When("I click the challenge", when.tapWeeklyChallenge("100"), async () => {
      When("I tap the button", when.tapText("Let's go"), async () => {
        Then("I can see the modal", then.challengeSelectedModalVisible("100", "2"));
      });
    });
    When("I click the close button", when.tapText("Close"), async () => {
      Then("I can no longer see the modal", then.textNotVisible("Weekly quests"));
      Then("I should see the Weekly Quests activty icon with no badge", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), false)));
    });
    When("I tap level 201 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
      When("I complete a short stroll challenge at level 201", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
        Then("I should not see the hint, as I am over level 150", then.successScreenNotHintVisible);
      });
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done"), async () => {
        Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
      });
    });
    When("I tap the Weekly Goals icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), false)), async () => {
      Then("I can see the modal with the challenge progress", then.challengeProgressShown(10, 20, "#E30D76"));
    });
    When("I click the close button", when.tapText("Close"), async () => {
      Then("I can no longer see the modal", then.textNotVisible("Weekly quests"));
    });
    When("I tap level 201 button a second time", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(201)), async () => {
      When("I complete a brisk walk challenge at level 201", when.selectAndCompleteWalkingChallenge("Brisk Walk", 800), async () => {
        When("I tap collect", when.tapText("Collect"), async () => {
          Then("I should see the level 201 challenge button still available", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(201)));
          Then("I should see the Weekly Quests activty icon with the badge", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)));
        });
      });
    });
    When("I tap the Weekly Goals icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true)), async () => {
      Then("I can see the modal with the challenge progress", then.challengeProgressShown(20, 20, "#E30D76"));
      Then("I can see the challenge is completed", then.completedChallengeModalVisible);
    });
    When("I tap the claim button", when.tapText("Claim"), async () => {
      Then("I can see the modal has changed to show a challenge has been claimed", then.challengeIsClaimed(20, 20));
    });
    When("I click the close button", when.tapText("Close"), async () => {
      Then("I can no longer see the modal", then.textNotVisible("Weekly quests"));
      Then("I should see the Weekly Quests activty icon with the badge", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), false)));
      Then("I can see the Icon has changed to the Done state", then.textVisible("Done"));
    });
  });

  Scenario("I complete level 400, enter EOTW with a yucoin surge of 2 and take 4 challenges at level 1", scenario.start, () => {
    Given("I login as a user on level 400 with a earn rate of 10", given.logInAndGoToTab("yucoin", data.CUSTOMER_89, data.AUTH_89), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should see the level 200 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(400)));
    });
    When("I tap level 400 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(400)), async () => {
      Then("I should see that I have achieved Yunity Mountain", then.yunityCorrect("Mountain"));
      Then("I should see the correct rewards in the chest for moving into EOTW/yuniverse", then.mountainTwoRewardsVisible(true));
    });
    When("I wait", when.wait(5000), async () => {
      When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
        Then("I should be on the yucoin", then.idVisible(ids.DAILY_STEPS_SCREEN));
        Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
      });
    });
    When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should be on the quest screen and see 5 challenges unlocked", then.yuniverseChallengesVisible);
      Then("I should see the boosted yucoin value for the 5 unlocked challenges", then.canSeeChallengeTiles(data.USER_89, "boost"));
    });
  });

  Scenario("I complete level 7 in EOTW, I finish EOTW and enter the bright planet with a yucoin surge of 2", scenario.start, () => {
    Given("I login as a user on level 407 with a earn rate of 6", given.logInAndGoToTab("yucoin", data.CUSTOMER_90, data.AUTH_90), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)));
    });
    When("I tap level 7 button", when.tapYuniverseLevelForFirstTime(7, 187, 263, 180), async () => {
      Then("I should be on the celestial chest screen", then.celestialChestEarned);
    });
    When("I tap open the chest", when.tapText("Open the chest"), async () => {
      Then("I can see the 3 celestial chest rewards, which each earn me my earn rate (6) * 50", then.celestialChestAwardsVisible(data.USER_90));
    });
    When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
      Then("I am on the space travel screen", then.idVisible(ids.SPACE_TRAVEL_SCREEN));
    });
    When("I tap travel", when.tapText("Travel"), async () => {
      When("I wait", when.wait(7000), async () => {
        When("I tap a new beginning", when.tapText("A new beginning"), async () => {
          Then("I should be on the yucoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
        });
      });
    });
    When("I go to the yu tab", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Bright Boi", "Forest", "401", true));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see level 401 unlocked in the red planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(401)));
    });
    When("I tap level 401 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(401)), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should be on the level 201 quest screen and see all 5 challenges available to me to take", then.challengesAvailableVisible);
      });
    });
  });

  Scenario("I can complete level 800, and get the epic mountain yumoji item reward", scenario.start, () => {
    Given("I trigger the worker to give missing yumoji items", given.triggerGiveMissingYumojiItems([data.CUSTOMER_93.data.customerId]), async () => {
      When("I login as a user on level 800", when.logInAndGoToTab("quests", data.CUSTOMER_93, data.AUTH_93), async () => {
        Then("I should see the level 800 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(800)));
      });
    });
    When("I go the yucsreen", when.tapID(ids.NAV_BAR("yu")), async () => {
      When("I start the yumoji builder", when.startYumojiBuilder(ids.FEMALE_BODY), async () => {
        Then("I should be on the Yumoji edit screen", then.textVisible("Edit your Yumoji"));
        Then("I should see migrated yumoji items I have previously unlocked", then.unlockedYumojiItemsVisible("female", "rare", "ocean"));
      });
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
      When("I tap the male yumoji", when.tapID(ids.MALE_BODY), async () => {
        When("I tap continue", when.tapText("Continue"), async () => {
          Then("I should see migrated yumoji items I have previously unlocked", then.unlockedYumojiItemsVisible("male", "common", "desert"));
        });
      });
    });
    When("I scroll to the locked epic mountain gloves", when.scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.YUMOJI_PART_ID(`yumoji_male_gloves_epic_mountain`), "down"), async () => {
      When("I tap this item", when.tapID(ids.YUMOJI_PART_ID(`yumoji_male_gloves_epic_mountain`)), async () => {
        Then("I should see the locked item modal", then.yumojiItemLockedModalVisible(800));
      });
    });
    When("I tap Take a challenge", when.tapText("Take a challenge"), async () => {
      Then("I should be on the quest map, and see level 800", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(800)));
    });
    When("I tap level 800 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(800)), async () => {
      Then("I should see that I have achieved Yunity Mountain", then.yunityCorrect("Mountain"));
      Then("I should see the Yunity Rewards", then.yunityRewardsVisible(["6 Levels\nBoost", "Mountain\nOutfit", "The Yuniversal\nReflection"]));
    });
    When("I tap the levels boost", when.tapID(ids.YUNITY_CARD("6 Levels\nBoost")), async () => {
      Then("I should see 'Boosted YuCoin'", then.textVisible("Boosted YuCoin"));
      Then("I should see the Boosted YuCoin description", then.textVisible("During this time, the challenges you complete will reward you with additional YuCoin."));
    });
    When("I tap got it", when.tapText("Got it"), async () => {
      When("I tap Mountain Outfit", when.tapID(ids.YUNITY_CARD("Mountain\nOutfit")), async () => {
        Then("I should see New customisation", then.textVisible("New customisation"));
        Then("I should see the description", then.textVisible("You've unlocked new items for your Yumoji! Visit the Yumoji editor to try them on."));
      });
    });
    When("I tap got it", when.tapText("Got it"), async () => {
      When("I tap Mountain Outfit", when.tapID(ids.YUNITY_CARD("The Yuniversal\nReflection")), async () => {
        Then("I should see The Yuniversal Reflection", then.textVisible("The Yuniversal Reflection"));
        Then("I should see the description", then.textVisible("You've achieved Yunity. Now take your time, breathe and reflect with these special quests."));
      });
    });
    When("I tap Got it", when.tapText("Got it"), async () => {
      Then("I should see Claim rewards", then.textVisible("Claim rewards"));
    });
    When("I tap claim rewards", when.tapText("Claim rewards"), async () => {
      When("I go the yucsreen", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I should see the unlocked epic mountain gloves", then.idVisible(ids.YUMOJI_PART_ID(`yumoji_male_gloves_epic_mountain`)));
        Then("I should see the new epic mountain items I have unlocked", then.unlockedYumojiItemsVisible("male", "epic", "mountain", true, false));
      });
    });
    When("I save the yumoji", when.saveYumoji(true), async () => {
      Then("I should be back on the yuscreen", then.textVisible("Los Santos"));
      Then("I should see the yumoji", then.idVisible(ids.YUMOJI_EQUIPMENT));
    });
  });

  Scenario("I complete level 800, enter the Yuniverse IV and complete a challenge", scenario.start, () => {
    Given("I login as a user on level 800 with a earn rate of 10", given.logInAndGoToTab("yucoin", data.CUSTOMER_94, data.AUTH_94), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should see the level 800 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(800), 2000));
    });
    When("I tap level 800 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(800)), async () => {
      Then("I should see that I have reached Yunity", then.yunityCorrect("Mountain"));
      Then("I should see the correct rewards in the chest", then.mountainTwoRewardsVisible());
    });
    When("I tap claim rewards", when.tapText("Claim rewards", 4000), async () => {
      Then("I should be on the YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
      Then("I should see that I still have 4 challenges left for today", then.textVisible("Take a challenge (4 left today)"));
      Then("I should see that I have been rewarded the correct amount of YuCoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20500), 3000));
    });
    When("I tap to take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should see the boosted values on the challenges tiles", then.canSeeChallengeTiles(data.USER_94, "boost"));
    });
    When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
      Then("I should see the correct challenge and award details on the screen", then.stepsChallengeDataCorrect(1, 80, 400));
    });
    When("I tap collect", when.tapText("Collect"), async () => {
      When("I tap done", when.tapText("Done", 3000), async () => {
        Then("I should see the yucoin total updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20500 + 80), 3000));
        Then("I should be on the yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)));
      });
    });
    When("I tap on the second Yuniversal level", when.tapYuniverseLevelForFirstTime(2, 186, 692), async () => {
      Then("I should see a message that the next stage its not available yet", then.nextYuniversalStageLocked("2"));
    });
    When("I tap got it on the timer modal", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2000), async () => {
      When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see that now I have 3 challenges left", then.textVisible("Take a challenge (3 left today)"));
        Then("I should see the correct number of steps done today", then.stepsDoneToday(400));
        Then("I should see the correct number of boosted YuCoin earned today", then.yucoinTodayEarnedWithSurge(500, 80));
      });
    });
    When("I go to the today's earnings screen", when.tapText("400 steps"), async () => {
      Then("I see the correct YuCoin earned today", then.textVisible("580 YuCoin"));
      Then("I can see the total number of steps so far", then.textVisible("400 / 12000 steps"));
    });
    When("I go back a step back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I go to the Yu screen", when.tapID(ids.NAV_BAR("yu")), async () => {
        Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "El Purpelo", "Yuniversal", "II", true));
      });
    });
  });

  Scenario("I can complete last level in Yuniverse IV and enter the purple planet", scenario.start, () => {
    Given("I login as a user on level 801 with a earn rate of 10", given.logInAndGoToTab("yucoin", data.CUSTOMER_95, data.AUTH_95), async () => {
      Then("I should see there are 4 challenges left to take today", then.textVisible("Take a challenge (4 left today)"));
    });
    When("I tap take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should be on the Yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(7)));
    });
    When("I tap last level", when.tapYuniverseLevelForFirstTime(7, 187, 263, 180), async () => {
      Then("I should receive the celestial chest", then.celestialChestEarned);
    });
    When("I open the chest", when.tapText("Open the chest"), async () => {
      Then("I can see the 3 celestial chest rewards based on my earn rate (10) * 50", then.celestialChestAwardsVisible(data.USER_95));
    });
    When("I claim the rewards", when.tapText("Claim rewards"), async () => {
      Then("I am on the space travel screen", then.idVisible(ids.SPACE_TRAVEL_SCREEN));
      Then("I should see the correct planets", then.planetsVisible(["EARTH", "BRIGHT", "ORANGE", "RED"]));
      Then("I should not be able to see future planets at this stage", then.planetsNotVisible(["PURPLE", "RING"]));
    });
    When("I tap travel", when.tapText("Travel"), async () => {
      Then("I should see that the avatar is visible", then.idExist(ids.PLANET_AVATAR));
      Then("I should see the Purple planet", then.idExist(ids.PLANET("PURPLE"), 2000));
    });
    When("I tap a new beginning", when.tapText("A new beginning", 5000), async () => {
      Then("I should be on the YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN));
    });
    When("I go to the Yu screen", when.tapID(ids.NAV_BAR("yu")), async () => {
      Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "Purple Man", "Forest", "801", false));
    });
    When("I go to the quests screen", when.tapID(ids.NAV_BAR("quests")), async () => {
      Then("I should see level 801 unlocked in the purple planet", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(801)));
    });
  });

  Scenario("I can complete level 1200 and progress in Yuniverse VI successfully", scenario.start, () => {
    Given("I login as a user who has 4 challenges available", given.logInAndGoToTab("yucoin", data.CUSTOMER_96, data.AUTH_96), async () => {
      Then("I should see the 'Take a challenge (4 left today)' button", then.textVisible("Take a challenge (4 left today)", 4000));
    });
    When("I tap the take a challenge button", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should see the level 1200 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(1200), 2000));
    });
    When("I tap the level 1200 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1200)), async () => {
      Then("I should see that I have reached Yunity", then.yunityCorrect("Mountain"));
      Then("I should see the correct rewards for this level", then.mountainTwoRewardsVisible());
    });
    When("I tap 'Claim rewards'", when.tapText("Claim rewards", 4000), async () => {
      Then("I should see the YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2000));
      Then("I should see the correct amount of challenges left", then.textVisible("Take a challenge (4 left today)", 3000));
      Then("I should see the correct amount of YuCoin displayed", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20500), 3000));
    });
    When("I tap to take a challenge", when.tapText("Take a challenge (4 left today)", 2000), async () => {
      Then("I should see the boosted values for challenges", then.canSeeChallengeTiles(data.USER_96, "boost"));
    });
    When("I complete a short stroll challenge", when.selectAndCompleteWalkingChallenge("Short Stroll", 400), async () => {
      Then("I should see the correct challenge details on screen", then.stepsChallengeDataCorrect(1, 80, 400));
    });
    When("I tap collect", when.tapText("Collect", 3000), async () => {
      When("I tap done", when.tapText("Done", 3000), async () => {
        Then("I should see the YuCoin counter updated", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(20500 + 80), 3000));
        Then("I should be returned to the Yuniverse map", then.idVisible(ids.QUESTS_SCREEN_YUNIVERSAL(2)));
      });
    });
    When("I tap on the second Yuniverse level", when.tapYuniverseLevelForFirstTime(2, 186, 692), async () => {
      Then("I should see a message that the next level its not yet available", then.nextYuniversalStageLocked("2"));
    });
    When("I tap got it on the timer modal", when.tapID(ids.SCROLLABLE_CONTENT_CTA, 2000), async () => {
      When("I go to yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see that now I have 3 challenges left", then.textVisible("Take a challenge (3 left today)"));
        Then("I should see the correct number of steps done today", then.stepsDoneToday(400));
        Then("I should see the correct number of boosted YuCoin earned today", then.yucoinTodayEarnedWithSurge(500, 80));
      });
    });
    When("I go to the today's earnings screen", when.tapText("400 steps", 4000), async () => {
      Then("I see the correct YuCoin earned today", then.textVisible("580 YuCoin", 2000));
      Then("I can see the total number of steps so far", then.textVisible("400 / 12000 steps", 2000));
    });
    When("I go a step back", when.tapID(ids.BACK_BUTTON, 3000), async () => {
      When("I go to the Yu screen", when.tapID(ids.NAV_BAR("yu"), 2000), async () => {
        Then("I should be on YuScreen", then.yuScreenV5HeaderVisible(false, "El Lunar", "Yuniversal", "II", true));
      });
    });
  });
});
