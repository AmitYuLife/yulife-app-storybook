import React from "react";
import { View, ListRenderItemInfo } from "react-native";
import { DuelImage } from "@components/screens/member/duels-hub/subcomponents";
import { Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import styles from "./search-item.styles";
import { t } from "@locale";
import { DUEL_SEARCH_LIST_ITEM } from "@ids";
import { SearchedOpponent } from "../duels-search.container";
import { TextTemplate } from "@atoms";

function DuelsSearchItem({ item, index }: ListRenderItemInfo<SearchedOpponent>) {
  return (
    <TouchableOpacityWithDelay onPress={item?.onPress}>
      <View style={index === 0 ? [styles.opponentCard, styles.firstCard] : styles.opponentCard}>
        <View style={styles.nameSection} testID={DUEL_SEARCH_LIST_ITEM(item.name)}>
          <View style={styles.duelImageWrapper}>
            <DuelImage uri={item?.avatar?.uri} />
          </View>
          {!item?.name ? null : <Text style={styles.nameText}>{item.name}</Text>}
        </View>
        <TextTemplate type="l2" color={item.duelTextColor}>
          {t("modals.duels.search.item_duel")}
        </TextTemplate>
      </View>
    </TouchableOpacityWithDelay>
  );
}

export default DuelsSearchItem;
