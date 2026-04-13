import { Feature, Scenario, Given, When, Then, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import { healthPathUnlockedCopy } from "engagement_surveys/_resources/fixtures";
import { GENERIC_AUTH_PASSWORD } from "_utils/users/auth";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as data from "../_data";
import * as ids from "@ids";
import { weeklyQuestsTimeRemaining } from "@navigation";
import moment from "moment";

Feature("Health Pathways", async () => {
  Scenario("Pathways initial state loads correctly with no reflections completed", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_9.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 5_000), async () => {
        Then("I should see the 'Today's Reflection' hero card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 5_000));
        Then("I should see the correct description on the hero card", then.textVisible(healthPathUnlockedCopy, 2_000));
      });
    });
    When("I tap the 'Today's Reflection' hero card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("I should see the Pathways streaks", then.idVisible(ids.PATHWAYS_STREAKS, 3_000));
      Then("I should see all streak days marked as 'not completed'", then.assertStreakDayState(0));
      Then("I should see the reflection items with the correct status", async () => {
        await then.idVisible(ids.PATHWAYS_REFLECTION_ITEMS(4))();
        await then.idVisible(ids.PATHWAYS_REFLECT_CHEST("locked"))();
        await then.idVisible(ids.PATHWAYS_REFLECTION_ITEM(0, "active"))();
        await then.assertReflectionItemsStatus(1, 4, "locked")();
      });
    });
    When("I scroll down to the 'Your Mood' section", when.scrollFromID(ids.PATHWAYS_SCREEN, "up", "fast", 0.5, 2_000), async () => {
      Then("I should see the mood week view", then.idVisible(ids.MOOD_WEEK_VIEW));
      Then("I should see today marked as 'not completed' in the mood view", then.idVisible(ids.MOOD_TODAY_COMPLETED(false)));
    });
    When("I tap to view the calendar", when.tapID(ids.MOOD_VIEW_CALENDAR, 2_000), async () => {
      Then("I should see today marked as 'not completed' in the calendar", then.idVisible(ids.MOOD_VIEW_CALENDAR_TODAY_COMPLETED(false)));
    });
    When("I tap to go back", when.tapID(ids.BUTTON_CLOSE_HEADER("Mood Calendar"), 2_000), async () => {
      Then("I should land back on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
    });
  });

  Scenario("Completing a reflection marks day 1 as completed", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_9.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 5_000), async () => {
        Then("I should see the 'Today's Reflection' hero card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 5_000));
      });
    });
    When("I tap the 'Today's Reflection' hero card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("I should see all streak days marked as 'not completed'", then.assertStreakDayState(0));
    });
    When("I tap to the first reflection item", when.tapID(ids.PATHWAYS_REFLECTION_ITEM(0, "active"), 2_000), async () => {
      Then("I should see the daily reflections header", then.idVisible(ids.TEXT_TEMPLATE("Daily Reflections", "h3"), 3_000));
    });
    When("I tap 'See terms and conditions'", when.tapID(ids.SEE_TERMS_AND_CONDITIONS_BUTTON, 2_000), async () => {
      Then("I should see the privacy and consent screen", then.idVisible(ids.TEXT_TEMPLATE("Your privacy and consent", "h3"), 3_000));
    });
    When("I tap 'Consent and continue'", when.tapID(ids.BUTTON_BASE("Consent and continue", false), 2_000), async () => {
      Then("I see 'How rested do you feel today?' and Next is disabled", then.assertQuestionAndNextDisabled("How rested do you feel today?", "b2b"));
    });
    When("I select 'Extremely tired' and tap Next", when.answerAndNextCheckbox("Extremely tired"), async () => {
      Then("I see 'How has your day been so far?' and Next is disabled", then.assertQuestionAndNextDisabled("How has your day been so far?", "b2b"));
    });
    When("I select 'Average' and tap Next", when.answerAndNextCheckbox("Average"), async () => {
      Then("I see 'How are you feeling today?' and Next is disabled", then.assertQuestionAndNextDisabled("How are you feeling today?", "b2b"));
    });
    When("I select 'tired' and tap Next", when.answerAndNextImageChoice("reflection.how_you_feel_today.tired"), async () => {
      Then("I see 'How many hours of sleep did you get last night?' and Next is disabled", then.assertQuestionAndNextDisabled("How many hours of sleep did you get last night?", "b2b"));
    });
    When("I select 'Less than 5 hours' and tap Next", when.answerAndNextCheckbox("Less than 5 hours"), async () => {
      Then("I see 'Are you a morning or night person?' and Next is disabled", then.assertQuestionAndNextDisabled("Are you a morning or night person?", "b2b"));
    });
    When("I select 'Morning person' and tap Next", when.answerAndNextCheckbox("Morning person"), async () => {
      Then("I see 'In the past 6 months, how often have you felt stressed?' and Next is disabled", then.assertQuestionAndNextDisabled("In the past 6 months, how often have you felt stressed?", "b2b"));
    });
    When("I select 'Always' and tap Next", when.answerAndNextCheckbox("Always"), async () => {
      Then(
        "I see 'In the past week, how often did you manage to stay focused on important tasks without getting sidetracked?' and Next is disabled",
        then.assertQuestionAndNextDisabled("In the past week, how often did you manage to stay focused on important tasks without getting sidetracked?", "b2b")
      );
    });
    When("I select 'Often' and tap Next", when.answerAndNextCheckbox("Often"), async () => {
      Then("I see 'How often do you socialise with friends, family, or community groups?' and Next is disabled", then.assertQuestionAndNextDisabled("How often do you socialise with friends, family, or community groups?", "b2b"));
    });
    When("I select 'Always (everyday)' and tap Next", when.answerAndNextCheckbox("Always (everyday)"), async () => {
      Then("I see 'Have you found yourself using tobacco products more than once in the past 6 months?' and Next is disabled", then.assertQuestionAndNextDisabled("Have you found yourself using tobacco products more than once in the past 6 months?", "b2b"));
    });
    When("I select 'I have used tobacco products more than once in the last 6 months.' and tap Next", when.answerAndNextCheckbox("I have used tobacco products more than once in the last 6 months."), async () => {
      Then("I see 'Have you found yourself drinking more than once in the past 6 months?' and Next is disabled", then.assertQuestionAndNextDisabled("Have you found yourself drinking more than once in the past 6 months?", "b2b"));
    });
    When("I select 'Yes' and tap Next", when.answerAndNextCheckbox("Yes"), async () => {
      Then("I see 'Are you happy with your current diet?' and Next is disabled", then.assertQuestionAndNextDisabled("Are you happy with your current diet?", "b2b"));
    });
    When("I select 'Yes' and tap Next for diet", when.answerAndNextCheckbox("Yes"), async () => {
      Then("I see 'What is your height?'", then.assertPickerQuestion("What is your height?", "Enter your height"));
    });
    When("I select my height and tap Next", when.selectPickerValueAndNext("Enter your height"), async () => {
      Then("I see 'What is your current weight?'", then.assertPickerQuestion("What is your current weight?", "Enter your weight"));
    });
    When("I select my weight and tap Next", when.selectPickerValueAndNext("Enter your weight"), async () => {
      Then("I should see day 1 marked as completed", then.idVisible(ids.PATHWAY_STREAK_DAY(1, true), 5_000));
    });
    When("I tap Continue after reflection completion", when.tapID(ids.PATHWAYS_REFLECTED_CONTINUE, 2_000), async () => {
      Then("I should see the reflections reminder modal title", then.idVisible(ids.GENERIC_SCREEN_HEADING("Stay on track with your reflections"), 5_000));
    });
    When("I tap Enable and allow notifications", when.tapEnableAndAllowNotifications, async () => {
      Then("I should be on the Settings screen", then.idVisible(ids.SETTINGS_SCREEN, 3_000));
      Then("I should see the Reflection reminder toggle off", then.idVisible(ids.SETTINGS_SWITCH("Reflection reminder", false), 3_000));
    });
    When("I enable the Reflection reminder", when.tapID(ids.SETTINGS_SWITCH("Reflection reminder", false), 2_000), async () => {
      Then("I should see the Reflection reminder toggle on", then.idVisible(ids.SETTINGS_SWITCH("Reflection reminder", true), 3_000));
    });
    When("I tap the Reflection reminder time", when.tapID(ids.SETTINGS_REMINDER_TIME("Reflection reminder"), 2_000), async () => {
      Then("I should see the time picker", then.textVisible("Select", 3_000));
    });
    When("I scroll to a new time and confirm", when.scrollTimePickerAndConfirm(1), async () => {
      Then("I should see the new reminder time set at 12:00", then.textVisible("12:00", 2_000));
    });
    When("I go back from Settings", when.tapID(ids.BUTTON_CLOSE_HEADER("Settings"), 2_000), async () => {
      When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 5_000), async () => {
        Then("I should see the 'Today's Reflection' hero card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 5_000));
      });
    });
    When("I tap the 'Today's Reflection' hero card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("I should see the next day reflection in a locked state", then.idVisible(ids.PATHWAYS_REFLECTION_UNLOCKS_IN, 2_000));
    });
    When("I scroll down to the 'Your Mood' section", when.scrollFromID(ids.PATHWAYS_SCREEN, "up", "fast", 0.5, 2_000), async () => {
      Then("I should see todays mood monitor state completed", then.idVisible(ids.MOOD_TODAY_COMPLETED(true), 3_000));
    });
  });

  Scenario("Health Pathway challenge completes successfully", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_9.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I open the debug menu item 'pathways-progress'", when.openDebugMenuItem("pathways-progress", "pathways progress"), async () => {
        When("I set 'Last day complete' and save", when.setPathwaysProgress("Last day complete"), async () => {
          When("I exit debug", when.closeDebug, async () => {
            When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 5_000), async () => {
              Then("I should see the 'Today's Reflection' hero card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 5_000));
            });
          });
        });
      });
    });
    When("I tap the 'Today's Reflection' hero card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("I should see the Health challenge unlocked", then.idVisible(ids.PATHWAYS_REFLECT_CHEST("completed"), 3_000));
    });
    When("I tap the Health challenge button", when.tapID(ids.HEALTH_CHALLENGE_BUTTON, 2_000), async () => {
      Then("I should see the challenge intro title", then.idVisible(ids.CHALLENGE_INTRO_TITLE, 3_000));
    });
    When("I tap Continue", when.tapID(ids.LABELS_CTA_CONTINUE, 2_000), async () => {
      When("I tap to start the box breathing", when.tapID(ids.BUTTON_BASE("Start", false), 4_000), async () => {
        When("I wait for the breathing exercise to complete", when.wait(65_000), async () => {
          Then("I can see my 90 reward coins", then.idVisible(ids.CHALLENGE_REWARD(90), 3_000));
        });
      });
    });
    When("I collect my reward", when.tapID(ids.CTA_COLLECT, 2_000), async () => {
      Then("I should see the feedback screen", then.textVisible("How do you feel?", 3_000));
      Then("I should see the feedback description", then.textVisible("How do you feel now compared to when you started this challenge?", 2_000));
      Then("I should see the feedback slider on the default state", then.idVisible(ids.SLIDABLE_POSITION(2), 3_000));
    });
    When("I select 'Better' on the feedback scale", when.tapID(ids.SLIDABLE_POSITION(3), 3_000), async () => {
      Then("I should see the feedback slider updated", then.idVisible(ids.SLIDABLE_POSITION(2), 3_000));
    });
    When("I tap Continue on the feedback screen", when.tapID(ids.LABELS_CTA_CONTINUE, 2_000), async () => {
      Then("I should land back on the Yuscreen", then.idVisible(ids.YUSCREEN_V5_USERNAME("Ronnie James Dio"), 3_000));
    });
    When("I scroll to the earn from activities carousel", when.scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.MAXIMISE_YU_NUDGE_LIST, "down"), async () => {
      When("I swipe to the health challenge nudge", when.scrollWithLimitedAttemptsUntilIdVisible(ids.MAXIMISE_YU_NUDGE_LIST, ids.NUDGE_ITEM_WRAPPER("pathway-challenge-nudge"), "left", 5, 3_000, 0.5, 0.8), async () => {
        Then("I should see the completed health challenge in the carousel", then.idVisible(ids.NUDGE_ITEM_WRAPPER("pathway-challenge-nudge"), 3_000));
      });
    });
    When("I navigate to the Quests", when.tapID(ids.NAV_BAR("quests"), 2_000), async () => {
      When("I tap 855 level challenge", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(855), 2_000), async () => {
        Then("I should see the health challenge title", then.idVisible(ids.PATHWAYS_CHALLENGE_TITLE("Yunity Quest")));
        Then("I should see the health challenge completed", then.idVisible(ids.PATHWAYS_CHALLENGE_COMPLETED));
      });
    });
    When("I go back", when.tapID(ids.BUTTON_TOP_LEFT_BAR, 2_000), async () => {
      When("I navigate to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin"), 2_000), async () => {
        Then("I should be on the YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 2_000));
        Then("I should see 1 min mindful done today", then.idVisible(ids.MINDFUL_COUNT("1 min"), 2_000));
      });
    });
    When("I click on the YuCoin Icon to see the breakdown of my earnings", when.tapYuCoinIcon, async () => {
      Then("I'm on the 'Today's Earnings' screen", then.idVisible(ids.TODAYS_EARNINGS));
    });
    When("I scroll further down the screen", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast"), async () => {
      Then("I can see the Yunity Quest completed today", then.idVisible(ids.ACTIVITY_LISTING("Yunity Quest", 90)));
    });
  });

  Scenario("Health challenge remains accessible after completing all daily challenges", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_10.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I open the debug menu and select Pathways Progress", when.openDebugMenuItem("pathways-progress", "pathways progress"), async () => {
        When("I mark 'Last day complete' and save", when.setPathwaysProgress("Last day complete"), async () => {
          When("I exit the debug menu", when.closeDebug, async () => {
            When("I navigate to the Quests screen", when.tapID(ids.NAV_BAR("quests"), 2_000), async () => {
              Then("I should still see my current level unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(856), 3_000));
            });
          });
        });
      });
    });
    When("I tap on my current level", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(856), 2_000), async () => {
      Then("I should see the Yunity Quest challenge", then.idVisible(ids.PATHWAYS_CHALLENGE_TITLE("Yunity Quest"), 2_000));
      Then("The Health challenge should still be open and available", then.idNotVisible(ids.PATHWAYS_CHALLENGE_COMPLETED, 2_000));
    });
  });

  Scenario("I can view and decline advice card recommendations successfully", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_11.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I open the debug menu and select Pathways Progress", when.openDebugMenuItem("pathways-progress", "pathways progress"), async () => {
        When("I select 'Last day' and save", when.setPathwaysProgress("Last day"), async () => {
          When("I exit the debug menu", when.closeDebug, async () => {
            When("I navigate to the YuScreen", when.tapID(ids.NAV_BAR("yu"), 5_000), async () => {
              Then("I should see the 'Today's Reflection' hero card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 5_000));
            });
          });
        });
      });
    });
    When("I tap the 'Today's Reflection' hero card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Today's reflection"), 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("I should see the last streak day available", then.idVisible(ids.PATHWAY_STREAK_DAY(5, false), 3_000));
    });
    When("I scroll down to the 'Insights' section", when.scrollFromID(ids.PATHWAYS_SCREEN, "up", "fast", 0.5, 2_000), async () => {
      Then("I should see my recommended health advice card", then.idVisible(ids.PATHWAYS_ADVICE_CARD, 3_000));
    });
    When("I tap on the advice card", when.tapID(ids.PATHWAYS_ADVICE_CARD, 2_000), async () => {
      Then("I should land on the advice card detail screen", then.idVisible(ids.LEFT_HEADING_BUTTON("NEW_INSIGHT_UNLOCKED!"), 7_000));
      Then("I should see the 'Useful' button", then.idVisible(ids.BUTTON_BASE("Useful", false), 3_000));
      Then("I should see the 'Not useful' button", then.textVisible("Not useful", 3_000));
    });
    When("I tap the 'Not useful' button to decline the advice", when.tapText("Not useful", 3_000), async () => {
      Then("I should be back on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("The declined advice card should no longer be visible", then.idNotVisible(ids.PATHWAYS_ADVICE_CARD, 3_000));
      Then("I should see the smoking cessation intervention card", then.idVisible(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 3_000));
    });
    When("I tap the smoking cessation intervention card", when.tapID(ids.YUSCREEN_FEATURE_CARD_SECTION_TITLE("Looking to quit smoking?"), 2_000), async () => {
      Then("I should be on the smoking entry screen", then.idVisible(ids.TEXT_TEMPLATE("Start your quit-smoking journey!", "h2"), 3_000));
    });
  });

  Scenario("Day 5 reflection accessible via today's earnings when hero card is unavailable", scenario.start, async () => {
    Given("I am logged in", given.loginAsUser(data.CUSTOMER_13.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I open the debug menu item 'pathways-progress'", when.openDebugMenuItem("pathways-progress", "pathways progress"), async () => {
        When("I set Day 5 with a pre-existing quest awarded", when.setPathwaysProgress("Last day", "Award"), async () => {
          When("I exit debug", when.closeDebug, async () => {
            When("I navigate to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin"), 5_000), async () => {
              Then("I should see the YuCoin screen", then.idVisible(ids.DAILY_STEPS_SCREEN, 5_000));
            });
          });
        });
      });
    });
    When("I tap the YuCoin icon to see today's earnings", when.tapYuCoinIcon, async () => {
      Then("I should be on the 'Today's Earnings' screen", then.idVisible(ids.TODAYS_EARNINGS));
    });
    When("I scroll down to find the reflection activity", when.scrollFromID(ids.TODAYS_EARNINGS, "up", "fast", 0.5, 2_000), async () => {
      Then("I should see the Daily Reflection entry", then.textVisible("Daily Reflection", 3_000));
    });
    When("I tap the Let's go! button to access reflections", when.tapIDAtIndex(ids.ACTIVITY_FEED_BUTTON, 0, 2_000), async () => {
      Then("I should land on the Pathways screen", then.idVisible(ids.PATHWAYS_SCREEN, 3_000));
      Then("The quest chest should be active and accessible", then.idVisible(ids.PATHWAYS_REFLECT_CHEST("active"), 3_000));
      Then("I should NOT still be on the Today's Earnings screen", then.idNotVisible(ids.TODAYS_EARNINGS, 2_000));
    });
  });

  Scenario("Yesterday's completed pathway challenge appears in activity history", scenario.start, async () => {
    Given("I am logged in as a user who completed a pathway challenge yesterday", given.loginAsUser(data.CUSTOMER_12.customer, GENERIC_AUTH_PASSWORD), async () => {
      Then("I should see the menu icon", then.idVisible(ids.MENU_ICON, 5_000));
    });
    When("I tap the menu icon", when.tapID(ids.MENU_ICON, 2_000), async () => {
      When("I tap Activity History", when.tapMenuItem("Activity History"), async () => {
        Then("I should be on the Activity History screen", then.idVisible(ids.ACTIVITY_HISTORY_SCREEN, 4_000));
        Then("I should see the Yunity Quest entry in the additional rewards section", then.multipleTextVisible(["Yunity Quest", "90"], 4_000));
      });
    });
  });

  Scenario("Complete 3 Reflections weekly quest is visible for a user with pathways enabled", scenario.start, async () => {
    Given("I am logged in as a level 201+ user with pathways enabled", given.loginAsUser(data.CUSTOMER_15.customer, GENERIC_AUTH_PASSWORD), async () => {
      When("I navigate to the Quests screen", when.tapID(ids.NAV_BAR("quests"), 5_000), async () => {
        Then("I should see the Weekly Quests icon", then.idVisible(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true), 5_000));
      });
    });
    When("I tap the Weekly Quests icon", when.tapID(ids.WEEKLY_GOAL_ICON(weeklyQuestsTimeRemaining(), true), 2_000), async () => {
      Then("I should see the Weekly quest popup", then.textVisible("Weekly quest", 3_000));
      Then("I should see the 'Complete 3 reflections' quest option", then.textVisible("Complete 3 reflections", 3_000));
    });
    When("I tap 'Let's go' without selecting a quest", when.tapText("Let's go", 2_000), async () => {
      Then("Nothing happens, I should not see the next modal", then.textNotVisible("Reward"));
    });
    When("I select the 'Complete 3 reflections' quest", when.tapText("Complete 3 reflections", 2_000), async () => {
      When("I tap 'Let's go'", when.tapText("Let's go", 2_000), async () => {
        Then("I should see the claimable YuCoin reward of 100", then.idVisible(ids.CLAIMABLE_YUCOIN("100"), 3_000));
        Then("I should see the reflection progress", then.textVisible("0 / 3 reflections completed this week", 2_000));
      });
    });
  });
});
