import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { t } from "@locale";
import { StarRating } from "@molecules";
import { Colours, Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { TARGET, REWARD_AMOUNT, TARGET_AND_REWARD } from "@ids";
import { SurgeIcon } from "@atoms/icon/surge-icon";
import { IStarRatingProps } from "@components/molecules/star-rating/star-rating";
import { ChallengeDetailsBadge, ChallengeDetailsBadgeIntent } from "./challenge-details-badge";

export interface IMilestone {
  target: string;
  rewardType: string;
  rewardAmount: number;
}

export interface IChallengeDetailsMilestoneProps {
  bonusAmount: number;
  milestone: IMilestone;
  stars: IStarRatingProps;
  surgeMultiplier: number;
}

/**
 * The number of stars to display
 * when there is only 1 milestone.
 */
const DEFAULT_STARS_FOR_ONE_MILESTONE = 3;
const YUCOIN_REWARD_TYPE = "yucoin";

export const ChallengeDetailsMilestone = memo(
  ({ milestone, surgeMultiplier, stars, bonusAmount }: IChallengeDetailsMilestoneProps): JSX.Element => {
    const isSurgeShown = useMemo((): boolean => {
      return surgeMultiplier && milestone.rewardType === YUCOIN_REWARD_TYPE;
    }, [surgeMultiplier, milestone.rewardType]);

    const rewardTextColour = useMemo((): string => {
      if (isSurgeShown) {
        return Colours.secondary.s100S3;
      }

      return Colours.neutral.n850;
    }, [isSurgeShown]);

    const rewardAmount = useMemo(
      () => (bonusAmount ? milestone.rewardAmount - bonusAmount : milestone.rewardAmount),
      [bonusAmount, milestone.rewardAmount]
    );

    const { totalStars, activeStars } = useMemo(() => {
      return {
        totalStars: stars.totalStars > 1 ? stars.totalStars : DEFAULT_STARS_FOR_ONE_MILESTONE,
        activeStars: stars.totalStars > 1 ? stars.activeStars : DEFAULT_STARS_FOR_ONE_MILESTONE,
      };
    }, [stars]);

    return (
      <View>
        <View style={styles.row} testID={TARGET_AND_REWARD(milestone.target, rewardAmount)}>
          <View testID={TARGET(milestone.target)}>
            <TextTemplate type="b2">{milestone.target}</TextTemplate>
            <StarRating activeStars={activeStars} totalStars={totalStars} />
          </View>
          <View style={styles.rewardWrapper} testID={REWARD_AMOUNT(rewardAmount)}>
            {!isSurgeShown ? null : (
              <ChallengeDetailsBadge
                icon={<SurgeIcon />}
                intent={ChallengeDetailsBadgeIntent.surge}
                text={t("screens.challenges.details.surge_badge", { multiplier: surgeMultiplier })}
              />
            )}
            <View style={styles.rewardAmount}>
              <TextTemplate
                textAlign="right"
                color={rewardTextColour}
                type="b2b"
                accessibilityLabel={t("yu_coin.lower_case_amount", { rewardAmount })}
              >
                {rewardAmount}
              </TextTemplate>
            </View>
          </View>
          {milestone.rewardType === YUCOIN_REWARD_TYPE ? (
            <Image width={Style.adjust(16)} source={require("@assets/icons/yucoin.png")} />
          ) : (
            <TextTemplate type="b2">{milestone.rewardType}</TextTemplate>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderRadius: Style.adjust(10),
    borderColor: Colours.neutral.n200,
    paddingVertical: Style.adjust(17),
    paddingHorizontal: Style.adjust(20),
    backgroundColor: Colours.neutral.white,
  },
  rewardWrapper: {
    marginStart: "auto",
    alignItems: "center",
    flexDirection: "row",
    marginEnd: Style.adjust(5),
  },
  rewardAmount: {
    minWidth: Style.adjust(30),
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
});
