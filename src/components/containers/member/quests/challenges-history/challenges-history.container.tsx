import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { GetQuestMapLevel } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "@app/typings";
import { ChallengesHistoryScreen } from "@screens";
import { useBackHandler } from "@hooks";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "@graphql/challenges";
import { ChallengesLoading } from "@components/molecules";

interface IProps extends IConnectedScreenProps {
  componentId?: string;
  level: number;
  yuniversalMap?: number;
  levelName?: string;
  onPressActivityHistory: () => void;
  onPressCta?: () => void;
}

function ChallengesHistoryContainer({ level, yuniversalMap, levelName, onPressActivityHistory, componentId }: IProps) {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  useBackHandler(() => {
    handleClose();
    return true;
  });

  const name = useMemo(() => levelName || `level ${level}`, [level, levelName]);

  //use default policy to avoid issues if app goes to background mode during query
  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
    variables: { level, yuniversalMap },
  });

  return loading || !data?.getQuestMapLevel ? (
    <ChallengesLoading onBackPress={handleClose} currentLevel={level} yuniversalMap={yuniversalMap} />
  ) : (
    <ChallengesHistoryScreen
      level={data?.getQuestMapLevel}
      yuniversalMap={yuniversalMap}
      name={name}
      onPressActivityHistory={onPressActivityHistory}
      onPressCta={handleClose}
      onLeftMenuPress={handleClose}
    />
  );
}

export default memo(ChallengesHistoryContainer);
