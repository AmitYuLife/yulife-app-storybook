import { When, Then, Given } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";
import * as ids from "@ids";
import * as data from "../../_data";
import * as given from "../../_common/given";

export const START_YUDOKU_MINIMISE_FAKE_TIME = async () => {
  jest.useFakeTimers();

  const currentTime = 1700611170000; // 21-11-23 23:59:30 GMT
  jest.setSystemTime(currentTime);

  /**
   * @NOTE
   * @expect the jest system time to be set to the fake time throughout the duration of the test until jest.useRealTimers is executed
   * @expect the real time to remain unaffected and not be set to the fake time
   *
   * While detox matchers do not have support for the expect statements mentioned below, they can still be used to test in a jest-only environment:
   * To check if the current time matches a specific value, you can use the expect(new Date().valueOf()).toBe(currentTime) statement.
   * To ensure that the system time provided by jest is not equal to the current time, you can use the expect(jest.getRealSystemTime().valueOf()).not.toBe(currentTime) statement.
   *
   * To verify the testing process, log the times after setting the fake current time in both sessions using console.log:
   * console.log('[ jest system time ] :>> ', new Date().valueOf());
   * console.log('[ real system time ] :>> ', jest.getRealSystemTime().valueOf());
   */

  Given(
    "I login as a user with 4/5 streaks",
    given.loginAsUser(data.CUSTOMER_7, data.AUTH_7),
    async () => {
      Then(
        "I should see 640 YuCoin in the top right hand corner",
        then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(640))
      );
    }
  );
  When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
    Then("I should see the fifth level is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
  });
  When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5), 2000), async () => {
    When(
      "I scroll down the challenge list",
      when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"),
      async () => {
        Then("I should see the Yudoku challenge", then.idVisible(ids.CHALLENGE_TILE("Yudoku")));
      }
    );
  });
  When("I tap the soduku challenge", when.tapSudoku, async () => {
    Then("I am on the sudoku page", then.amOnSudokuPage);
  });
  When("I start the soduku game", when.tapStartGame, async () => {
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      When("I wait", when.wait(15000), async () => {
        Then("I am back on the sudoku page", then.amOnSudokuChallenge);
      });
    });
  });
};

export const START_YUDOKU_CLOSE_OPEN_APP_FAKE_TIME = async () => {
  jest.useFakeTimers();

  const currentTime = 1700611170000; // 21-11-23 23:59:30 GMT
  jest.setSystemTime(currentTime);

  Given(
    "I login as a user with 4/5 streaks",
    given.loginAsUser(data.CUSTOMER_7, data.AUTH_7),
    async () => {
      Then(
        "I should see 640 YuCoin in the top right hand corner",
        then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(640))
      );
    }
  );
  When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests")), async () => {
    Then("I should see the fifth level is unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(5)));
  });
  When("I tap this button", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(5)), async () => {
    When(
      "I scroll down the challenge list",
      when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"),
      async () => {
        Then("I should see the Yudoku challenge", then.idVisible(ids.CHALLENGE_TILE("Yudoku")));
      }
    );
  });
  When("I tap the soduku challenge", when.tapSudoku, async () => {
    Then("I am on the sudoku page", then.amOnSudokuPage);
  });
  When("I start the soduku game", when.tapStartGame, async () => {
    When("I close and reopen the app", when.quitAndReopenApp, async () => {
      When(
        "I tap on the daily screen YuCoin icon",
        when.tapID(ids.DAILYSTEP_SCREEN_COIN, 3000),
        async () => {
          When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
            Then("I can see the paused game screen", then.onMidGamePausedScreenAfterQuit);
          });
        }
      );
    });
  });
};

export const END_YUDOKU_FAKE_TIME = async () => {
  const currentTime = 1700611260000; // 22-11-23 00:01:00 GMT
  jest.setSystemTime(currentTime);

  When("I complete the Yudoku", when.completeYudoku(false, false), async () => {
    Then(
      "I should see my reward of 60 coins",
      then.idVisible(ids.SUDOKU_STAT("Reward", "60"), 4000)
    );
  });
  When(
    "I tap to collect my 60 YuCoin reward",
    when.tapID(ids.SODOKU_COMPLETED_REWARD_COLLECT, 3000),
    async () => {
      Then(
        "I should see my completed streak modal",
        then.idVisible(ids.STREAK_TICKS("5", true), 5000)
      );
    }
  );
  When(
    "I tap to collect my streak reward",
    when.tapID(ids.STREAKS_SCREEN_BUTTON, 3000),
    async () => {
      When("I go back to the yucoin tab", when.tapID(ids.NAV_BAR("yucoin")), async () => {
        Then("I should see my total yucoin", then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(1000)));
      });
    }
  );

  jest.useRealTimers();
};
