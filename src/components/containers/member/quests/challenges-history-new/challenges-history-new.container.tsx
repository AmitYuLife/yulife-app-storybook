import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { IConnectedScreenProps } from "@app/typings";
import { useBackHandler } from "@hooks";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import ChallengesHistoryNewScreen from "@components/screens/member/challenges/challenges-history-new/challenges-history-new.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { t } from "@locale";
import { getActiveYudokuLeaderboard } from "@redux/leaderboards/leaderboards.selectors";
import { gql } from "@graphql/__generated";

interface IProps extends IConnectedScreenProps {
  level: number;
  levelName?: string;
  componentId?: string;
  yuniversalMap?: number;
  onPressCta?: () => void;
  onPressActivityHistory: () => void;
}

function ChallengesHistoryNewContainer({
  level,
  levelName,
  componentId,
  yuniversalMap,
  onPressActivityHistory,
}: IProps) {
  const { showBrainGameSudoku } = useSelector(getUserFeatures);
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  const activeYudokuLeaderboard = useSelector(getActiveYudokuLeaderboard);

  const { loading, data } = useQuery(gql("GetQuestMapLevelDocument"), {
    variables: { level, yuniversalMap: yuniversalMap ? yuniversalMap : undefined },
    fetchPolicy: "no-cache",
  });

  useBackHandler(() => {
    handleClose();
    return true;
  });

  const name = useMemo(
    () =>
      levelName
        ? t("screens.challenges.history.summary_named", { levelName })
        : t("screens.challenges.history.summary", { level }),
    [level, levelName]
  );

  const showSudokuLeaderboardButton = useMemo(
    () => activeYudokuLeaderboard?.consent && showBrainGameSudoku,
    [activeYudokuLeaderboard, showBrainGameSudoku]
  );

  if (loading || !data?.getQuestMapLevel) {
    return <LoadingScreen onBack={handleClose} />;
  }

  return (
    <ChallengesHistoryNewScreen
      name={name}
      onBack={handleClose}
      componentId={componentId}
      level={data?.getQuestMapLevel}
      leaderboardDate={data?.getQuestMapLevel?.date}
      onPressActivityHistory={onPressActivityHistory}
      showSudokuLeaderboard={showSudokuLeaderboardButton}
    />
  );
}

export default memo(ChallengesHistoryNewContainer);
