import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Radio, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { PressableWithDelay } from "@molecules";
import { ILeaderboard } from "@redux/user/user.reducer";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

interface IProps {
  communities: ILeaderboard[];
  onSelect: (id: string) => void;
  activeLeaderboardId: string;
}

interface IItem extends ILeaderboard {
  onPress: () => void;
  selected: string;
}

const LeaderboardCommunityOverlay = ({ activeLeaderboardId, communities, onSelect }: IProps) => {
  const [selected, setSelected] = useState(activeLeaderboardId || "");
  return (
    <View style={styles.wrapper}>
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={40}
        data={(communities || []).map((community) => ({
          ...community,
          onPress: () => {
            setSelected(community.leaderboardId);
            onSelect(community.leaderboardId);
          },
          selected,
        }))}
        renderItem={renderItem}
        refreshing={false}
      />
    </View>
  );
};

const renderItem = ({ item }: ListRenderItemInfo<IItem>) => (
  <PressableWithDelay style={styles.button} key={item.leaderboardId} onPress={item.onPress}>
    <TextTemplate type="b2" textAlign="center">
      {item.name}
    </TextTemplate>
    <View style={styles.radio}>
      <Radio selected={item.selected === item.leaderboardId} />
    </View>
  </PressableWithDelay>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(24),
    flex: 1,
    flexDirection: "row",
    marginBottom: Style.adjust(80),
  },
  button: {
    width: "100%",
    flexDirection: "row",
    marginBottom: Style.adjust(16),
  },
  radio: {
    position: "absolute",
    right: 0,
  },
});

export default memo(LeaderboardCommunityOverlay);
