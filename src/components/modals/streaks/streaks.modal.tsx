import { useMutation, useQuery } from "@apollo/client";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StreaksScreen } from "@screens";
import { useBackHandler } from "@hooks";
import { streakCopy } from "./copy";
import { Props } from "./streaks.types";
import { getSubHeading } from "./_helpers/get-subheading";
import { getLabelCtaPrimary } from "./_helpers/get-label-cta-primary";
import { useBackHandlerCallback } from "./_helpers/use-back-handler-callback";
import { useTimer } from "./_helpers/use-timer";
import { useSubmitHandler } from "./_helpers/use-submit-handler";
import { getHeading } from "./_helpers/get-heading";
import { gql } from "@graphql/__generated";
import { RewardCard } from "@components/molecules/reward-card/reward-card";
import { View } from "react-native";
import { streaksModalStyles } from "./streaks.modal.styles";
import { TextTemplate } from "@atoms";
import Hint from "@components/molecules/hint/hint";
import { getStreakAwardId } from "@redux/streaks/streaks.selectors";
import { Navigation } from "@navigation/main";

// TODO: needs refactor to bring everything together, logic is all over the place and 12 files for so little functionality
const StreaksModal: React.FC<Props> = ({
  componentId,
  onPressCtaPrimary,
  onPressCtaSecondary,
  streakCompleted,
  isDoneToday,
  streakMax,
  nextStreakAvailableAt,
  reward,
  type,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const backHandler = useBackHandlerCallback(onPressCtaSecondary);
  useBackHandler(backHandler);

  const streakAwardId = useSelector(getStreakAwardId);
  const shouldShowTimer = streakMax === streakCompleted && !!streakAwardId;

  const { timeRemaining } = useTimer({ nextStreakAvailableAt, shouldShowTimer });
  const [collectAward] = useMutation(gql("CollectAwardDocument"));

  const { data } = useQuery(gql("GetStreakDetailsDocument"), {
    fetchPolicy: "no-cache",
  });

  const onSubmit = useSubmitHandler({ streakAwardId, onPressCtaPrimary, setLoading, collectAward });

  const { copy, handlePressHint } = useMemo(() => {
    const remainingStreak = (streakMax - streakCompleted).toString();
    const streakType = type === "yucoin" ? "YuCoin" : type;

    const pressHintHandler = data?.getStreakDetails?.hint?.onPress
      ? () => dispatch(data.getStreakDetails.hint.onPress)
      : null;

    return {
      copy: streakCopy(remainingStreak, reward, streakType),
      handlePressHint: pressHintHandler,
    };
  }, [streakMax, streakCompleted, type, reward, data]);

  const onIconPress = useCallback(() => {
    Navigation.dismissModal(componentId);
  }, [componentId]);

  const heading = getHeading({
    isDoneToday,
    streakMax,
    streakAwardId,
    streakCompleted,
    copy,
  });

  const subheading = getSubHeading({
    isDoneToday,
    streakMax,
    streakAwardId,
    streakCompleted,
    copy,
  });

  return (
    <StreaksScreen
      onIconPress={onIconPress}
      heading={heading}
      subHeading={subheading}
      ribbonLabel={`${reward} ${type === "yucoin" ? "YuCoin" : "Voucher"}`}
      primaryButtonLabel={getLabelCtaPrimary({
        streakMax,
        isDoneToday,
        streakAwardId,
        streakCompleted,
        copy,
      })}
      streakAwardId={streakAwardId}
      streakCompleted={streakCompleted}
      streakMax={streakMax}
      onSubmit={onSubmit}
      reward={reward}
      isLoading={isLoading}
      onPressCtaSecondary={onPressCtaSecondary}
      timeRemaining={timeRemaining.time}
      accessibilityTimeRemaining={timeRemaining.accessibility}
    >
      <View>
        {!data?.getStreakDetails?.goalMilestone ? null : (
          <View style={streaksModalStyles.rewardMilestoneSection}>
            <TextTemplate textAlign="center" type="b2b">
              {data.getStreakDetails.teaserTitle}
            </TextTemplate>
            <View style={streaksModalStyles.sectionWrapper}>
              <RewardCard
                progress={data.getStreakDetails.goalMilestone.progress}
                target={data.getStreakDetails.goalMilestone.target}
                rewardQuantity={data.getStreakDetails.goalMilestone.rewardQuantity}
                rewardTitle={data.getStreakDetails.goalMilestone.rewardTitle}
                primaryColor={data.getStreakDetails.goalMilestone.theme.primaryColor}
                secondaryColor={data.getStreakDetails.goalMilestone.theme.secondaryColor}
                overlayColor={data.getStreakDetails.goalMilestone.theme.overlayColor}
                rewardImage={data.getStreakDetails.goalMilestone.image}
                overlayImage={data.getStreakDetails.goalMilestone.overlayImage}
                showSparks={data.getStreakDetails.goalMilestone.showSparks}
              />
            </View>
          </View>
        )}
        {!data?.getStreakDetails?.hint ? null : (
          <View style={streaksModalStyles.hintWrapper}>
            <Hint
              label={data.getStreakDetails.hint.label}
              description={data.getStreakDetails.hint.description}
              image={data.getStreakDetails.hint.image}
              onPress={handlePressHint}
            />
          </View>
        )}
      </View>
    </StreaksScreen>
  );
};

export default memo(StreaksModal);
