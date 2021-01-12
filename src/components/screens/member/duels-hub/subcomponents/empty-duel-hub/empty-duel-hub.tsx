import React from "react";
import { View } from "react-native";
import { DuelEmpty } from "..";
import { DuelHubTab } from "@components/containers/member/duels-hub/duels-hub.container";
import { EMPTY_DUELS_HUB } from "@ids";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface Props {
  activeTab: DuelHubTab;
}

async function navigateToDuelsSearch() {
  await Navigation.push(ROUTES.duelsHub, {
    component: {
      id: ROUTES.duelsSearch,
      name: ROUTES.duelsSearch,
    },
  });
}

function _EmptyDuelHub({ activeTab }: Props) {
  const { text, buttonText } =
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
    <View testID={EMPTY_DUELS_HUB}>
      <DuelEmpty text={text} buttonText={buttonText} onPress={navigateToDuelsSearch} />
    </View>
  );
}

const EmptyDuelHub = React.memo(_EmptyDuelHub);

export default EmptyDuelHub;
