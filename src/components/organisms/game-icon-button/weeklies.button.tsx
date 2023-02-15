import React, { memo } from "react";
import { WeekliesIcon } from "@atoms/icon/weeklies-icon";
import { GameButton } from "./_base.button";
import { useRemainingTime } from "./helpers/useRemainingTime";
import { Colours } from "@styles";
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
  const badge = hasBadge ? getBadge(hasJoined, claimableRewards) : undefined;
  const label = isClaimed ? t("labels.cta.done") : time.shortFormat;

  return (
    <GameButton
      onPress={onPress}
      badge={badge}
      badgeColor={Colours.status.er300}
      badgeStyle={badgeStyle}
      label={label}
      Icon={<WeekliesIcon hasBadge={hasBadge} active={!isClaimed} animated={hasBadge} />}
      accessibilityLabel={""}
      testID={WEEKLY_GOAL_ICON(parseInt(time.shortFormat))}
    />
  );
};

const getBadge = (hasJoined: boolean, claimableRewards: number) => {
  if (!hasJoined) {
    return "1";
  }

  return String(claimableRewards);
};

export const Weeklies = memo(_Weeklies);

const badgeStyle = { right: 1, top: 1 };
