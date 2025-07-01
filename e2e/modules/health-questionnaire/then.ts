import { VIEW_TOP_RIGHT_COIN_COUNTER } from "@ids";
import { expect } from "detox";
import { config } from "./_data";

export const seePreHQYuCoinEarned = async () => {
  await expect(element(by.id(VIEW_TOP_RIGHT_COIN_COUNTER(config.onboardingReward)))).toBeVisible();
};

export const seePostHQYuCoinEarned = async () => {
  await expect(
    element(
      by.id(
        VIEW_TOP_RIGHT_COIN_COUNTER(
          config.onboardingReward + config.earnRate * config.healthQuestionnaireEarnRateBasedReward
        )
      )
    )
  ).toBeVisible();
};
