import { When, Then, Given } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";
import * as given from "../../_common/given";
import * as ids from "@ids";
import * as data from "../../_data";

export const START_MEDITATION_FAKE_TIME = async () => {
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
    "I login as a user on level 1 who has meditation unlocked",
    given.loginAsUser(data.CUSTOMER_MEDITOPIA_1, data.AUTH_MEDITOPIA_1),
    async () => {
      When("I go to the quests tab", when.tapID(ids.NAV_BAR("quests"), 3000), async () => {
        Then(
          "I should see my current coin amount",
          then.idVisible(ids.VIEW_TOP_RIGHT_COIN_COUNTER(200))
        );
      });
    }
  );
  When(
    "I select a 5 min content meditopia challenge",
    when.selectMeditopiaChallengeFromQuests(1, "Meditation"),
    async () => {
      Then(
        "I am on the Challenge Details screen",
        then.canSeeNewChallengePage("meditation", data.USER_MEDITOPIA_1.data.earnRate)
      );
    }
  );
  When("I tap Take Challenge", when.tapTakeChallenge, async () => {
    Then(
      "I should be on the Today's meditation screen",
      then.isOnTodaysMeditationScreen("5", "40")
    );
  });
  When(
    "I tap the Relaxing the body content card",
    when.tapMeditopiaContentCard("5", "40"),
    async () => {
      When("I wait 5 seconds", when.waitTenSeconds, async () => {
        Then(
          "I should be on the Awareness Content intro screen",
          then.onMeditationContentIntroScreen("Awareness", 15, 2, 60, 200)
        );
      });
    }
  );
  When("I tap start session", when.tapStartSession, async () => {
    When(
      "I start and pause the challenge half way through",
      when.pauseMeditopiaChallenge(),
      async () => {
        Then("I should see the paused time on the screen", then.pauseChallengeTimeVisible);
      }
    );
  });
};

export const END_MEDITATION_FAKE_TIME = async () => {
  const currentTime = 1700611260000; // 22-11-23 00:01:00 GMT
  jest.setSystemTime(currentTime);

  When(
    "I continue to play the Meditopia challenge to finish",
    when.playAndFinishMeditopiaChallenge,
    async () => {
      Then(
        "I should be on the challenge completion well done screen",
        then.onMeditopiaChallengeComplete(5, 1, "40")
      );
    }
  );

  jest.useRealTimers();

  When("I tap continue on the well done screen", when.tapID(ids.CHALLENGE_SUCCESS_CTA), async () => {
    Then("I should see the first day streak screen", then.textVisible("First day done!", 10000));
  });
};
