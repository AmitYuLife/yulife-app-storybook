import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { GetQuestMapLevel } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "@app/typings";
import { useBackHandler } from "@hooks";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "@graphql/challenges";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import ChallengesHistoryNewScreen from "@components/screens/member/challenges/challenges-history-new/challenges-history-new.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { t } from "@locale";

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
  const userFeatures = useSelector(getUserFeatures);
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
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
      showSudokuLeaderboard={userFeatures?.showBrainGameSudoku}
    />
  );
}

export default memo(ChallengesHistoryNewContainer);
