import { Box } from "@atoms";
import BattlePassLeaderboardHeaderFilterButton from "@components/molecules/battle-pass-leaderboard-header-filter-button/battle-pass-leaderboard-header-filter-button";
import { t } from "@locale";
import moment from "moment";
import React, { memo, useMemo } from "react";

interface IBattlePassLeaderboardHeaderProps {
  onPressDate: () => void;
  onPressSocialGroup?: () => void;
  selectedDate: string;
  activeSocialGroup?: string;
}

const BattlePassLeaderboardHeader = ({
  onPressDate,
  selectedDate,
  activeSocialGroup,
  onPressSocialGroup,
}: IBattlePassLeaderboardHeaderProps) => {
  const dateLabel = useMemo(() => moment(selectedDate).format(t("format.month_full")), [selectedDate]);

  return (
    <Box mb={5} gap={5} pb={10} flexDirection="row">
      <BattlePassLeaderboardHeaderFilterButton label={activeSocialGroup} onPress={onPressSocialGroup} />
      <BattlePassLeaderboardHeaderFilterButton label={dateLabel} onPress={onPressDate} />
    </Box>
  );
};

export default memo(BattlePassLeaderboardHeader);
