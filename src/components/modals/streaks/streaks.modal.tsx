import { useMutation } from "@apollo/client";
import React, { useCallback, useMemo, useState } from "react";
import { connect } from "react-redux";
import { StreaksScreen } from "@screens";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import { streakCopy } from "./copy";
import { ConnectedState, Props } from "./streaks.types";
import { mapStateToProps } from "./_helpers/map-state-to-props";
import { getSubHeading } from "./_helpers/get-subheading";
import { getLabelCtaPrimary } from "./_helpers/get-label-cta-primary";
import { getStreakCompleted } from "./_helpers/get-streak-completed";
import { useBackHandlerCallback } from "./_helpers/use-back-handler-callback";
import { useTimer } from "./_helpers/use-timer";
import { useSubmitHandler } from "./_helpers/use-submit-handler";
import { getHeading } from "./_helpers/get-heading";
import { gql } from "@graphql/__generated";

const StreaksModal: React.FC<Props> = ({
  componentId,
  onPressCtaPrimary,
  onPressCtaSecondary,
  streakAwardId,
  streakCompleted,
  isDoneToday,
  streakMax,
  nextStreakAvailableAt,
  reward,
  type,
}) => {
  const [isLoading, setLoading] = useState(false);
  const backHandler = useBackHandlerCallback(onPressCtaSecondary);
  useBackHandler(backHandler);
  const handleClose = useCallback(() => Navigation.dismissModal(componentId), [componentId]);
  const { timeRemaining } = useTimer({ nextStreakAvailableAt, streakMax, streakCompleted, streakAwardId });
  const [collectAward] = useMutation(gql("CollectAwardDocument"));
  const onSubmit = useSubmitHandler({ streakAwardId, onPressCtaPrimary, setLoading, collectAward });

  const copy = useMemo(() => {
    const remainingStreak = (streakMax - streakCompleted).toString();
    const streakType = type === "yucoin" ? "YuCoin" : type;
    return streakCopy(remainingStreak, reward, streakType);
  }, [streakMax, streakCompleted, type, reward]);

  return (
    <StreaksScreen
      heading={getHeading({ isDoneToday, streakMax, streakAwardId, streakCompleted, copy })}
      subHeading={getSubHeading({ isDoneToday, streakMax, streakAwardId, streakCompleted, copy })}
      ribbonLabel={`${reward} ${type === "yucoin" ? "YuCoin" : "Voucher"}`}
      primaryButtonLabel={getLabelCtaPrimary({
        streakMax,
        isDoneToday,
        streakAwardId,
        streakCompleted,
        copy,
      })}
      streakAwardId={streakAwardId}
      streakCompleted={getStreakCompleted({ streakAwardId, streakCompleted, streakMax })}
      streakMax={streakMax}
      onSubmit={onSubmit}
      reward={reward}
      isLoading={isLoading}
      onPressCtaSecondary={onPressCtaSecondary}
      onClose={handleClose}
      timeRemaining={timeRemaining.time}
      accessibilityTimeRemaining={timeRemaining.accessibility}
    />
  );
};

export default connect<ConnectedState>(mapStateToProps)(StreaksModal);
