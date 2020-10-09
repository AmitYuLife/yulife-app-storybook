import React, { FC } from "react";
import { View } from "react-native";
import { DuelEmpty } from "..";
import { DuelHubTab } from "@components/containers/member/duels-hub/duels-hub.container";

interface IProps {
  onPressClose: () => void;
  activeTab: DuelHubTab;
}

const EmptyDuelHub: FC<IProps> = ({ onPressClose, activeTab }) => {
  const copy =
    activeTab === "active"
      ? {
          text: "You don’t have any upcoming duels. Why not challenge a colleague?",
          buttonText: "Challenge a colleague",
        }
      : {
          text: "You don’t have any past duels recorded. Why not challenge a colleague?",
          buttonText: "Challenge a colleague",
        };
  return (
    <View>
      <DuelEmpty {...copy} onPress={onPressClose} />
    </View>
  );
};

export default EmptyDuelHub;
