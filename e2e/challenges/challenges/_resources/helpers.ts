import { When, Then, Given } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";
import * as ids from "@ids";
import * as data from "../../_data";
import * as given from "../../_common/given";
import { getFullName } from "_utils/users";

export const INSPECT_USER =
  (
    customerPersonalData: typeof data.CUSTOMER_52,
    world: string,
    userLevel: number,
    customer: typeof data.CUSTOMER_52
  ) =>
  async () => {
    When(
      "I swipe down the list",
      when.scrollFromID(ids.LEADERBOARD_SCROLL_LIST, "up", "slow"),
      async () => {
        When(
          `I click on user ${getFullName(customerPersonalData)} name`,
          when.tapText(getFullName(customerPersonalData), 4000),
          async () => {
            Then("I should be on the Inspect screen", then.idVisible(ids.INSPECT_SCREEN, 3000));
            Then(
              "I should see the user name",
              then.idVisible(ids.YUSCREEN_V5_USERNAME(getFullName(customerPersonalData)), 2000)
            );
            Then(
              "I should see user's level and world",
              then.idVisible(ids.YUSCREEN_V5_WORLD_AND_LEVEL(world, userLevel), 2000)
            );
          }
        );
        When(
          "I scroll down to the challenge button",
          when.scrollFromID(ids.INSPECT_SCREEN, "up", "slow", 1),
          async () => {
            Then(
              "I should see the Average mindfulness section",
              then.textVisible("Average mindfulness")
            );
          }
        );
        When("I close inspect view", when.tapID(ids.SCREEN_CLOSE, 2000), async () => {
          Then(
            "I should be back on the leaderboard LB4",
            then.textVisibleAtIndex(getFullName(customer), 0, 3000)
          );
        });
      }
    );
  };

export const START_WALKING_CHALLENGE_FAKE_TIME = async () => {
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
    "I am on the quest tab as a user with a chest challenge",
    given.logInAndGoToTab("quests", data.CUSTOMER_9, data.AUTH_9),
    async () => {
      Then(
        "I should see my coins in the top right",
        then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(760))
      );
      Then("I should see level 7 unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(7)));
    }
  );
  When("I tap level 7", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(7)), async () => {
    Then(
      "I should see a screen telling me to take a challenge to unlock a my reward",
      then.textVisible("Almost there! Take a challenge to unlock your reward.")
    );
  });
  When("I tap 'lets do it'", when.tapText("Let's do it"), async () => {
    Then("I should see the long walk challenge", then.idVisible(ids.CHALLENGE_TILE("Long Walk")));
  });
  When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
    Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
  });
};

export const START_WALKING_CHALLENGE_MINIMISE_FAKE_TIME = async () => {
  jest.useFakeTimers();

  const currentTime = 1700611170000; // 21-11-23 23:59:30 GMT
  jest.setSystemTime(currentTime);

  Given(
    "I am on the quest tab as a user with a chest challenge",
    given.logInAndGoToTab("quests", data.CUSTOMER_9, data.AUTH_9),
    async () => {
      Then(
        "I should see my coins in the top right",
        then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(760))
      );
      Then("I should see level 7 unlocked", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(7)));
    }
  );
  When("I tap level 7", when.tapID(ids.LEVEL_CHALLENGE_BUTTON(7)), async () => {
    Then(
      "I should see a screen telling me to take a challenge to unlock a my reward",
      then.textVisible("Almost there! Take a challenge to unlock your reward.")
    );
  });
  When("I tap 'lets do it'", when.tapText("Let's do it"), async () => {
    When(
      "I scroll down the challenge list",
      when.scrollFromID(ids.CHALLENGE_SET, "up", "fast"),
      async () => {
        Then(
          "I should see the long walk challenge",
          then.idVisible(ids.CHALLENGE_TILE("Long Walk"))
        );
      }
    );
  });
  When("I start the long walk challenge", when.startChallenge("Long Walk"), async () => {
    When("I minimise and reopen the app", when.minimiseAndReopenApp, async () => {
      When("I wait", when.wait(15000), async () => {
        Then("I should be on the challenge screen", then.idVisible(ids.CHALLENGE_PROGRESS_BAR));
      });
    });
  });
};

export const END_WALKING_CHALLENGE_FAKE_TIME = async () => {
  const currentTime = 1700611260000; // 22-11-23 00:01:00 GMT
  jest.setSystemTime(currentTime);

  When("I walk over 3000 steps", when.sendSteps(3050, 35000), async () => {
    Then("I should see the well done screen", then.onChallengeComplete(3050, 7));
  });
  When("I tap collect on the well done screen", when.tapText("Collect", 1000), async () => {
    When("I wait 10 seconds", when.wait(10000), async () => {
      Then("I should see the first day streak screen", then.textVisible("First day done!"));
    });
  });
  When("I dismiss the streak screen", when.tapText("Done", 5000), async () => {
    Then(
      "I should see the chest unlocked screen telling me I get 200 yucoin",
      then.textVisible("You get 200 YuCoin", 2000)
    );
  });
  When("I tap collect on the collect reward screen", when.tapText("Collect", 1000), async () => {
    Then("I should be on the quest screen", then.idVisible(ids.LEVEL_CHALLENGE_BUTTON(8), 3000));
  });

  jest.useRealTimers();
};
