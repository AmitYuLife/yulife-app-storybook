import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { ChallengesHistoryScreen } from "../../../../screens";

interface IProps extends IConnectedScreenProps {
  componentId?: string;
  level: GetCurrentWorld_getCurrentWorld;
  onPressActivityHistory: () => void;
  onPressCta?: () => void;
}

function ChallengesHistoryContainer({ level, onPressActivityHistory, componentId }: IProps) {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

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
