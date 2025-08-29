import React, { memo } from "react";
import { WeekliesIcon } from "@atoms/icon/weeklies-icon";
import { GameButton } from "./_base.button";
import { useRemainingTime } from "./helpers/useRemainingTime";
import { WEEKLY_GOAL_ICON } from "@ids";
import { t } from "@locale";

type Props = {
  onPress: () => void;
  claimableRewards?: number;
  hasJoined: boolean;
  isClaimed: boolean;
  endDateTime: string;
};

const _Weeklies = ({ endDateTime, onPress, claimableRewards, hasJoined, isClaimed }: Props) => {
  const time = useRemainingTime(endDateTime);
  const hasBadge = (claimableRewards && claimableRewards > 0) || !hasJoined;
  const label = isClaimed ? t("labels.cta.done") : time.shortFormat;

  return (
    <GameButton
      onPress={onPress}
      label={label}
      Icon={<WeekliesIcon hasBadge={hasBadge} active={!isClaimed} animated={hasBadge} />}
      accessibilityLabel={""}
      testID={WEEKLY_GOAL_ICON(parseInt(time.shortFormat), hasBadge)}
    />
  );
};

export const Weeklies = memo(_Weeklies);
