import React, { memo } from "react";
import { WeekliesIcon } from "@atoms/icon/weeklies-icon";
import { GameButton } from "./_base.button";
import { useRemainingTime } from "./helpers/useRemainingTime";
import { Colours } from "@styles";
import { WEEKLY_GOAL_ICON } from "@ids";

type Props = {
  onPress: () => void;
  claimableRewards?: number;
  endDateTime: string;
};

const _Weeklies = ({ endDateTime, onPress, claimableRewards }: Props) => {
  const time = useRemainingTime(endDateTime);
  const hasBadge = claimableRewards && claimableRewards > 0;
  const badge = hasBadge ? String(claimableRewards) : undefined;

  return (
    <GameButton
      onPress={onPress}
      badge={badge}
      badgeColor={Colours.status.er300}
      badgeStyle={badgeStyle}
      label={time.shortFormat}
      Icon={<WeekliesIcon hasBadge={hasBadge} />}
      accessibilityLabel={""}
      testID={WEEKLY_GOAL_ICON(parseInt(time.shortFormat))}
    />
  );
};

export const Weeklies = memo(_Weeklies);

const badgeStyle = { right: 1, top: 1 };
