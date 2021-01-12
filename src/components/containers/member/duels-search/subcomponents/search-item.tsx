import React from "react";
import { View, ListRenderItemInfo } from "react-native";
import { Navigation } from "react-native-navigation";
import { DuelImage } from "@components/screens/member/duels-hub/subcomponents";
import { MODALS } from "@navigation/constants";
import { SearchForDuelOpponent_searchForDuelOpponent } from "@graphql/_core/schema/SearchForDuelOpponent";
import { Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import styles from "./search-item.styles";

function renderSearchItem({ item, index }: ListRenderItemInfo<SearchForDuelOpponent_searchForDuelOpponent>) {
  const opponentId = item?.customerId;

  const onPress = async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.duelInvite,
        name: MODALS.duelInvite,
        passProps: {
          opponentId,
        },
      },
    });
  };

  return (
    <TouchableOpacityWithDelay onPress={onPress}>
      <View style={index === 0 ? [styles.opponentCard, styles.firstCard] : styles.opponentCard}>
        <View style={styles.nameSection}>
          <DuelImage uri={item?.avatar} />
          {!item?.fullName ? null : <Text style={styles.nameText}>{item.fullName}</Text>}
        </View>
        <Text style={styles.duelText}>{"Duel >"}</Text>
      </View>
    </TouchableOpacityWithDelay>
  );
}

export default renderSearchItem;
