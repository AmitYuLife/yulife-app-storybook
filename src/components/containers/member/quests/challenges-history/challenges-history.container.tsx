import React, { memo, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { GetQuestMapLevel } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "@app/typings";
import { ChallengesHistoryScreen } from "@screens";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_QUEST_MAP_LEVEL } from "@graphql/challenges";
import { ChallengesLoading } from "@components/molecules";

interface IProps extends IConnectedScreenProps {
  componentId?: string;
  level: number;
  onPressActivityHistory: () => void;
  onPressCta?: () => void;
}

function ChallengesHistoryContainer({ level, onPressActivityHistory, componentId }: IProps) {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  useBackHandler(() => {
    handleClose();
    return true;
  });

  const { loading, data } = useQuery<GetQuestMapLevel>(GQL_QUERY_GET_QUEST_MAP_LEVEL, {
    variables: { level },
    fetchPolicy: "network-only",
  });

  return loading ? (
    <ChallengesLoading currentLevel={level} />
  ) : (
    <ChallengesHistoryScreen
      level={data?.getQuestMapLevel}
      onPressActivityHistory={onPressActivityHistory}
      onPressCta={handleClose}
      onLeftMenuPress={handleClose}
    />
  );
}

export default memo(ChallengesHistoryContainer);
