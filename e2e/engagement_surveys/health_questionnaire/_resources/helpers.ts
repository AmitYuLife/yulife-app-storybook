import { When, Then, Given } from "@yu-life/yulife-bdd-framework";
import * as when from "../_steps/when";
import * as then from "../_steps/then";
import * as ids from "@ids";
import { getLocalisedString as t } from "@i18n";

export const takeChallengeFromYuCoinScreen =
  (expectedLabel: string, firstTime: boolean) => async () => {
    When(
      "I tap take a challenge",
      when.tapID(ids.YUCOIN_SCREEN_TAKE_CHALLENGE_BUTTON),
      async () => {
        When(
          "I start the 'Short Stroll' challenge",
          when.startChallenge("Short Stroll"),
          async () => {
            When("I walk over 300 steps", when.sendSteps(400, 38000), async () => {
              Then(
                "I should see the continue button once the challenge is completed",
                then.idVisible(ids.CHALLENGE_SUCCESS_CTA, 3000)
              );
            });
          }
        );
      }
    );
    if (firstTime) {
      When("I tap collect", when.tapID(ids.CHALLENGE_SUCCESS_CTA), async () => {
        Then("I should see the first day streak screen", then.textVisible("First day done!"));
      });
      When("I dismiss the streak screen", when.tapText(t("Done"), 5000), async () => {
        When("I go back to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin")), async () => {
          Then(
            `I should see the YuScreen CTA '${expectedLabel}'`,
            then.textVisible(expectedLabel, 3000)
          );
        });
      });
    } else {
      When("I tap collect", when.tapID(ids.CHALLENGE_SUCCESS_CTA), async () => {
        When("I go back to the YuCoin screen", when.tapID(ids.NAV_BAR("yucoin")), async () => {
          Then(
            `I should see the YuScreen CTA '${expectedLabel}'`,
            then.textVisible(expectedLabel, 3000)
          );
        });
      });
    }
  };
