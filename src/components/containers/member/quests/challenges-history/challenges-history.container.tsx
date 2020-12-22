import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { GetCurrentQuestLevels_getCurrentQuestLevels } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { ChallengesHistoryScreen } from "../../../../screens";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface IProps extends IConnectedScreenProps {
  componentId?: string;
  level: GetCurrentQuestLevels_getCurrentQuestLevels;
  onPressActivityHistory: () => void;
  onPressCta?: () => void;
}

function ChallengesHistoryContainer({ level, onPressActivityHistory, componentId }: IProps) {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  useBackHandler(() => {
    handleClose();
    return true;
  });

  return (
    <ChallengesHistoryScreen
      level={level}
      onPressActivityHistory={onPressActivityHistory}
      onPressCta={handleClose}
      onLeftMenuPress={handleClose}
    />
  );
}

export default ChallengesHistoryContainer;
