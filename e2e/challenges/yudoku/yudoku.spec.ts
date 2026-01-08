import { Given, When, Then, Feature, Scenario, FeatureOnly, ScenarioOnly, ScenarioSkip } from "@yu-life/yulife-bdd-framework";
import * as scenario from "../_common/scenario";
import * as given from "../_common/given";
import * as when from "./_steps/when";
import * as then from "./_steps/then";
import * as ids from "@ids";
import * as data from "../_data";
import { PracticeYudokuAnswers } from "./_resources/constants";
import { DefaultYudokuLeaderboard, User67LeaderboardItemSudoku, User68LeaderboardItemSudoku, User71LeaderboardItemSudoku } from "./_resources/fixtures";
import { getLocalisedString as t } from "@i18n";
import * as helper from "./_resources/helpers";

Feature("Yudoku", async () => {
  Scenario("I can play, pause, and complete Sudoku and join/view the leaderboard", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("quests", data.CUSTOMER_86, data.AUTH_86), async () => {
      Then("I should see 700 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700), 2000));
    });
    When("I tap on level 152", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152), 3000), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
      Then("I cannot see leaderboard content", then.cannotSeeLeaderboard);
      Then("I can see the users personal best", then.canSeePersonalBest(data.USER_STAT_86));
      Then("I can see todays time is n/a", then.idVisible(ids.SUDOKU_STAT("Today's time", "n/a")));
      Then("I can see the 60 reward", then.idVisible(ids.SUDOKU_STAT("Reward", 60)));
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      When("I go to the how to play screen", when.tapHowToPlay, async () => {
        Then("I can see the how to play screen", then.amOnSudokuHowToPlay);
      });
    });
    When("I dismiss the modal", when.tapID(ids.BUTTON_CLOSE_HEADER("button_only")), async () => {
      When("I go to the join leaderboard", when.tapJoinTheLeaderboard, async () => {
        Then("I can see the join leaderboard screen", then.amOnLeaderboardIntroModal);
      });
    });
    When("I tap the join button", when.tapJoinLeaderboardButton, async () => {
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_71, data.SUDOKU_ANSWER_71, 1));
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_67, data.SUDOKU_ANSWER_67, 2));
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_68, data.SUDOKU_ANSWER_68, 3));
    });
    When("I press back", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I can see the home screen has leaderboard related content", then.canSeeHomeAfterLeaderboardJoin);
      Then("I can see the leaderboard entries on the home screen", then.canSeeLeaderboard(data.CUSTOMER_71, data.SUDOKU_ANSWER_71, 1, true));
      Then("I can see the leaderboard entries on the home screen", then.canSeeLeaderboard(data.CUSTOMER_68, data.SUDOKU_ANSWER_68, 3, true));
      Then("I can see the leaderboard entries on the home screen", then.canSeeLeaderboard(data.CUSTOMER_67, data.SUDOKU_ANSWER_67, 2, true));
    });
    When("I tap start game", when.tapStartGame, async () => {
      When("I tap maybe later", when.dismissNotificationScreenIfVisible, async () => {
        Then("I am on the Sudoku challenge screen", then.amOnSudokuChallenge);
      });
    });
    When("I tap the first empty cell", when.tapID(ids.CELL_ROW_COLUMN(8, 6, 0)), async () => {
      When("I tap the hint button", when.tapSudokuHint, async () => {
        Then("I can see the info as its my first time", then.hintInfoTooltipIsVisible);
      });
    });
    When("I tap Use a hint", when.tapUseAHint, async () => {
      Then("I can see 30s have been added", then.plus30sIsVisible);
      Then("I can see the cell has been filled in", then.idVisible(ids.CELL_ROW_COLUMN(8, 6, 4)));
      Then("I can see the timer for the hint is active", then.idVisible(ids.SUDOKU_HINT_TIMER(60)));
      Then("I can see the chosen figure is now green", then.idVisible(ids.SUDOKU_NUMBER_INPUT(4, true)));
    });
    When("I tap the second empty cell", when.tapID(ids.CELL_ROW_COLUMN(8, 7, 0)), async () => {
      When("I tap the incorrect number", when.tapID(ids.SUDOKU_NUMBER_INPUT(8)), async () => {
        Then("I can see the cell has been filled in", then.idVisible(ids.CELL_ROW_COLUMN(8, 7, 8)));
        Then("I can see I now have 1 mistake", then.canSeeMistakes(1));
      });
    });
    When("I tap the undo button", when.tapUndo, async () => {
      Then("I should see the second cell no longer contains that number", then.idVisible(ids.CELL_ROW_COLUMN(8, 7, 0)));
    });
    When("I click pause", when.tapSudokuPause, async () => {
      Then("I can see the pause modal", then.canSeeSudokuPauseModal(1, "Easy"));
    });
    When("I click resume", when.tapResumeGame, async () => {
      Then("I can no longer see the modal", then.cannotSeePauseModal);
    });
    When("I tap the back button", when.tapID(ids.BACK_BUTTON), async () => {
      Then("I can see the paused game screen", then.onMidGamePausedScreen);
    });
    When("I click resume game", when.tapResumeSudoku, async () => {
      When("I tap the second cell", when.tapID(ids.CELL_ROW_COLUMN(8, 7, 0)), async () => {
        When("I enter the correct number", when.tapID(ids.SUDOKU_NUMBER_INPUT(7)), async () => {
          Then("I can see the cell has been filled in", then.idVisible(ids.CELL_ROW_COLUMN(8, 7, 7)));
        });
      });
    });
    When("I tap the last empty cell", when.tapID(ids.CELL_ROW_COLUMN(8, 8, 0)), async () => {
      When("I tap the correct number", when.tapID(ids.SUDOKU_NUMBER_INPUT(8)), async () => {
        Then("I can see I am on the challenge completed screen", then.amOnYudokuCompleted(1, 1));
      });
    });
    When("I tap collect", when.tapCollect, async () => {
      Then("I should see the level 152", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(152)));
      Then("I should see yuCoin has increased", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(760)));
    });
    When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
      Then("I should see the Sodoku challenge is completed", then.canSeeCompleted);
      Then("I should see the start game button is unavailable", then.cannotSeeStartGame);
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the summary", then.onSudokuSummaryScreen(1, 1, data.CUSTOMER_86));
      Then("I can see the leaderboard entry first place is the user", then.canSeeManuallyEnteredLeaderboard(data.CUSTOMER_86, 1));
    });
    When("I go to the leaderboard", when.tapLeaderboard, async () => {
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_71, data.SUDOKU_ANSWER_71, 2));
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_68, data.SUDOKU_ANSWER_68, 4));
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_67, data.SUDOKU_ANSWER_67, 3));
    });
  });

  Scenario("I can see Sudoku leaderboard empty states", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_58, data.AUTH_58), async () => {
      Then("I should see 700 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(665)));
    });
    When("I tap take take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
      Then("I cannot see leaderboard content", then.cannotSeeLeaderboard);
    });
    When("I go to the join leaderboard", when.tapJoinTheLeaderboard, async () => {
      Then("I can see the join leaderboard screen", then.amOnLeaderboardIntroModal);
    });
    When("I tap the join button", when.tapJoinLeaderboardButton, async () => {
      Then("I can see the start prompt", then.canSeeStartPrompt);
    });
    When("I dismiss the modal", when.tapID(ids.BUTTON_CLOSE_RIGHT_ID, 2000), async () => {
      Then("I can see the empty leaderboard state", then.canSeeEmptyLeaderboard);
    });
  });

  Scenario("I am penalised when making more than 3 mistakes", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_86, data.AUTH_86), async () => {
      Then("I should see 700 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700)));
    });
    When("I tap take take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
    });
    When("I tap start game", when.tapStartGame, async () => {
      When("I tap maybe later", when.dismissNotificationScreenIfVisible, async () => {
        Then("I am on the Sudoku challenge screen", then.amOnSudokuChallenge);
      });
    });
    When("I tap the first empty cell", when.tapID(ids.CELL_ROW_COLUMN(8, 6, 0)), async () => {
      When("I tap the incorrect number", when.tapID(ids.SUDOKU_NUMBER_INPUT(8)), async () => {
        Then("I can see I now have 1 mistake", then.canSeeMistakes(1));
      });
    });
    When("I tap the incorrect number", when.tapID(ids.SUDOKU_NUMBER_INPUT(7)), async () => {
      Then("I can see I now have 1 mistake", then.canSeeMistakes(2));
    });
    When("I tap the incorrect number", when.tapID(ids.SUDOKU_NUMBER_INPUT(8)), async () => {
      Then("I can see I now have 1 mistake", then.canSeeMistakes(3));
    });
    When("I tap the incorrect number", when.tapID(ids.SUDOKU_NUMBER_INPUT(7)), async () => {
      Then("I can see 30s have been added", then.plus30sIsVisible);
      Then("I can see I now have 1 mistake", then.canSeeMistakes(4));
    });
  });

  Scenario("I can cancel a yudoku", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_86, data.AUTH_86), async () => {
      Then("I should see 700 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700)));
    });
    When("I tap take take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
    });
    When("I tap start game", when.tapStartGame, async () => {
      When("I tap maybe later", when.dismissNotificationScreenIfVisible, async () => {
        Then("I am on the Sudoku challenge screen", then.amOnSudokuChallenge);
      });
    });
    When("I press back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I press cancel", when.tapText("Cancel"), async () => {
        Then("I am on the cancel page", then.amOnCancelPage);
      });
    });
    When("I press cancel", when.tapID(ids.CANCEL_CANCEL_CHALLENGE), async () => {
      Then("I am on the pause screen", then.onMidGamePausedScreen);
    });
    When("I press cancel", when.tapText("Cancel"), async () => {
      When("I click exit challenge", when.tapExitChallenge, async () => {
        Then("I should see the level 152", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(152)));
      });
    });
    When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
      When("I tap the soduku challenge", when.tapSudoku, async () => {
        Then("I can see the disclaimer for a 2nd attempt", then.canSeeAttemptDisclaimer);
      });
    });
    When("I complete the Yudoku", when.completeYudoku(), async () => {
      When("I tap level 152 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(152)), async () => {
        When("I tap the soduku challenge", when.tapSudoku, async () => {
          When("I tap join", when.tapJoinLeaderboardFromYudoku, async () => {
            When("I tap back", when.tapID(ids.BACK_BUTTON), async () => {
              Then("I cannot see a leaderbord entry for the user, Cersei is still first", then.canSeeLeaderboard(data.CUSTOMER_71, data.SUDOKU_ANSWER_71, 1, true));
              Then("I can see there is data.an Unrdata.anked label", then.idVisible(ids.SUDOKU_UNRANKED_LABEL));
              Then("I can see the personal best has not updated", then.canSeePersonalBest(data.USER_STAT_86));
            });
          });
        });
      });
    });
  });

  Scenario("I can go to and leave the Yudoku leaderboard", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_76, data.AUTH_76), async () => {
      Then("I should see 200 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I tap take take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
      When("I tap level 1 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
        When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
          Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
        });
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
    });
    When("I go to the join leaderboard", when.tapJoinLeaderboardFromYudoku, async () => {
      When("I press back", when.tapID(ids.BACK_BUTTON), async () => {
        Then("I can see the home screen has leaderboard related content", then.canSeeHomeAfterLeaderboardJoin);
      });
    });
    When("I press back", when.tapID(ids.BACK_BUTTON), async () => {
      When("I press back", when.tapID(ids.BACK_BUTTON), async () => {
        When("I go to the main leaderboard", when.navigateTo("leaderboard"), async () => {
          When("I go to the Yudoku tab", when.tapID(ids.LEADBOARD_TAB("Yudoku")), async () => {
            Then("I can see the leaderboard", then.leaderboardVisible([User71LeaderboardItemSudoku, User68LeaderboardItemSudoku, User67LeaderboardItemSudoku]));
          });
        });
      });
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
      });
    });
    When("I tap leaderboards", when.tapText("Leaderboards"), async () => {
      Then("I can see the option for Yudoku leaderboards", then.idVisible(ids.SETTINGS_SWITCH("Yudoku", true)));
    });
    When("I tap the toggle", when.tapID(ids.SETTINGS_SWITCH("Yudoku", true)), async () => {
      When("I tap turn it off", when.tapText("Turn it off"), async () => {
        Then("I can see the option for Yudoku leaderboards is off ", then.idVisible(ids.SETTINGS_SWITCH("Yudoku", false)));
      });
    });
    When("I go back", when.tapID(ids.BUTTON_CLOSE_HEADER("Leaderboards")), async () => {
      Then("I can see the not joined leaderboard state", then.onLeaderboardWithoutConsent);
    });
    When("I tap join leaderboard", when.tapText("Join the Leaderboard"), async () => {
      When("I tap the Yudoku switch", when.tapLeaderboardConsentSwitch(DefaultYudokuLeaderboard, false), async () => {
        When("I press continue", when.tapText("Continue"), async () => {
          Then("I should see the leaderboard", then.leaderboardVisible([User71LeaderboardItemSudoku, User68LeaderboardItemSudoku, User67LeaderboardItemSudoku]));
        });
      });
    });
    When("I tap the menu icon in the top left", when.tapID(ids.MENU_ICON, 500), async () => {
      When("I tap settings", when.tapMenuItem("Settings"), async () => {
        Then("I should be on the settings tab", then.idVisible(ids.SETTINGS_SCREEN, 2500));
      });
    });
    When("I tap leaderboards", when.tapText("Leaderboards"), async () => {
      Then("I can see the option for Yudoku leaderboards is on", then.idVisible(ids.SETTINGS_SWITCH("Yudoku", true)));
    });
    When("I close settings", when.tapID(ids.BUTTON_CLOSE_HEADER("Leaderboards")), async () => {
      When("I go to quests", when.navigateTo("quests"), async () => {
        When("I tap level 1 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
          When("I tap the soduku challenge", when.tapSudoku, async () => {
            When("I complete the Yudoku", when.completeYudoku(false), async () => {
              When("I scroll down the challenges info hint", when.scrollFromID(ids.HINT_VARIANT("challenges"), "up", "fast"), async () => {
                When("I tap collect", when.tapText("Collect"), async () => {
                  Then("I should see my first streak completed", then.idVisible(ids.STREAK_TICKS("1", true), 5000));
                });
              });
            });
          });
        });
      });
    });
    When("I tap to collect my streak reward", when.tapID(ids.STREAKS_SCREEN_BUTTON, 3000), async () => {
      When("I tap level 1 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
        Then("I can see the slot for a completed yudoku", then.idVisible(ids.CHALLENGE_HISTORY_NEW_SLOT("Yudoku", "120", 3)));
        Then("I can see the level summary page yudoku leaderboard button", then.canSeeYudokuLeaderboardButton("Today"));
      });
    });
    When("I tap yudoku leaderboard", when.tapID(ids.LEVEL_SUMMARY_YUDOKU_LEADERBOARD("Today")), async () => {
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_71, data.SUDOKU_ANSWER_71, 2));
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_67, data.SUDOKU_ANSWER_67, 3));
      Then("I can see the leaderboard entries", then.canSeeLeaderboard(data.CUSTOMER_68, data.SUDOKU_ANSWER_68, 4));
    });
  });

  Scenario("I can see my yudoku daily time in the earnings screen", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_84, data.AUTH_84), async () => {
      Then("I should see 700 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700)));
    });
    When("I click on the YuCoin Icon to see the breakdown of my earnings", when.tapYuCoinIcon, async () => {
      Then("I can see the Sudoku challenge is completed", then.canSeeEarntSudoku("6m 40s"));
    });
  });

  Scenario("I can take the Yudoku practice game as many times as I want", scenario.start, () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_76, data.AUTH_76), async () => {
      Then("I should see 200 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200)));
    });
    When("I tap take take a challenge", when.tapText("Take a challenge (1 left today)"), async () => {
      When("I tap level 1 button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(1)), async () => {
        When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
          Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
        });
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
      Then("I can see the practice button", then.idVisible(ids.SUDOKU_PRACTICE_BUTTON));
    });
    When("I tap practice game", when.tapID(ids.SUDOKU_PRACTICE_BUTTON), async () => {
      Then("I am on the Sudoku challenge screen", then.amOnSudokuChallenge);
    });
    When("I tap a cell", when.tapID(ids.CELL_ROW_COLUMN(0, 3, 0)), async () => {
      When("I tap the incorrect answer", when.tapID(ids.SUDOKU_NUMBER_INPUT(7)), async () => {
        When("I tap the hint button", when.tapSudokuHint, async () => {
          When("I tap Use a hint", when.tapUseAHint, async () => {
            Then("I can see 30s have been added", then.plus30sIsVisible);
          });
        });
      });
    });
    When("I complete the Yudoku practice game", when.completeYudokuPractice(PracticeYudokuAnswers), async () => {
      Then("I am on the completed practice yudoku screen", then.amOnCompletedPracticeScreen(1, 1));
    });
    When("I click continue", when.tapText("Continue"), async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
    });
    When("I tap practice game because it is still available", when.tapID(ids.SUDOKU_PRACTICE_BUTTON), async () => {
      Then("I am on the Sudoku challenge screen", then.amOnSudokuChallenge);
      Then("i can see the board has cleared", then.idVisible(ids.CELL_ROW_COLUMN(0, 3, 0)));
    });
  });

  Scenario("I can get a reward after I complete a streak with Yudoku", scenario.start, async () => {
    Given("I login as a user with 4/5 streaks", given.logInAndGoToTab("yucoin", data.CUSTOMER_7, data.AUTH_7), async () => {
      Then("I should see 640 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(640)));
    });
    When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 2000), async () => {
      Then("I should see the fifth level is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
    });
    When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5), 2000), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the Yudoku challenge", then.idVisible(ids.CHALLENGE_TILE("Yudoku")));
      });
    });
    When("I tap the Yudoku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
    });
    When("I complete the Yudoku", when.completeYudoku(false), async () => {
      Then("I should see my reward of 60 coins", then.idVisible(ids.SUDOKU_STAT("Reward", "60"), 4000));
      Then("I should see the challenge hint on the success screen", then.successScreenHintVisible);
    });
    When("I tap collect", when.tapCollect, async () => {
      Then("I should see my completed streak modal", then.idVisible(ids.STREAK_TICKS("5", true), 5000));
    });
    When("I tap to collect my streak reward", when.tapID(ids.STREAKS_SCREEN_BUTTON, 3000), async () => {
      Then("I should be on the quests screen", then.idVisible(ids.QUESTS_SCREEN(0), 3000));
    });
    When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin"), 2000), async () => {
      Then("I should see the coins I earned today", then.textVisible("560 YuCoin today", 1500));
      Then("I should see my total yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1000), 2000));
    });
  });

  Scenario("I can start a Yudoku before midnight, put app in background, open app and finish it after midnight", scenario.start, async () => {
    helper.START_YUDOKU_MINIMISE_FAKE_TIME();
    helper.END_YUDOKU_FAKE_TIME();
  });

  Scenario("I can start a Yudoku before midnight, force close the app, open app and finish it after midnight", scenario.start, async () => {
    helper.START_YUDOKU_CLOSE_OPEN_APP_FAKE_TIME();
    When("I click resume game", when.tapResumeSudoku, async () => {
      helper.END_YUDOKU_FAKE_TIME();
    });
  });

  Scenario("I can close and reopen the app during a yudoku challenge", scenario.start, async () => {
    Given("I login", given.logInAndGoToTab("yucoin", data.CUSTOMER_86, data.AUTH_86), async () => {
      Then("I should see 700 YuCoin in the top right hand corner", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(700)));
    });
    When("I tap take take a challenge", when.tapText("Take a challenge (4 left today)"), async () => {
      When("I scroll down the challenge list", when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"), async () => {
        Then("I should see the Sodoku tile is available", then.canSeeSudokuTile);
      });
    });
    When("I tap the soduku challenge", when.tapSudoku, async () => {
      Then("I am on the sudoku page", then.amOnSudokuPage);
    });
    When("I tap start game", when.tapStartGame, async () => {
      When("I tap maybe later", when.dismissNotificationScreenIfVisible, async () => {
        Then("I am on the Sudoku challenge screen", then.amOnSudokuChallenge);
      });
    });
    When("I close and reopen the app", when.closeAndReopenApp, async () => {
      Then("I am back on the Sudoku challenge screen", then.amOnSudokuChallenge);
    });
    When("I complete the Yudoku", when.completeYudoku(true, false, 3000), async () => {
      Then("I should see that level 152 is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(152)));
    });
  });
});
