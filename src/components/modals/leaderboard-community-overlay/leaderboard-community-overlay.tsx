import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Radio, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { PressableWithDelay } from "@molecules";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { ISocialGroup } from "@redux/leaderboards/leaderboards.reducer";
import { useSelector } from "react-redux";
import { getActiveSocialGroup } from "@redux/leaderboards/leaderboards.selectors";

interface IProps {
  socialGroups: ISocialGroup[];
  onSelect: (id: string) => void;
}

interface IItem {
  socialGroup: ISocialGroup;
  onPress: () => void;
  selected: boolean;
}

const LeaderboardCommunityOverlay = ({ socialGroups = [], onSelect }: IProps) => {
  const activeSocialGroup = useSelector(getActiveSocialGroup);
  const [selectedSocialGroupId, setSelectedSocialGroupId] = useState(activeSocialGroup?.socialGroupId || "");

  return (
    <View style={styles.wrapper}>
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={40}
        data={socialGroups.map((socialGroup) => ({
          socialGroup,
          onPress: () => {
            setSelectedSocialGroupId(socialGroup.socialGroupId);
            onSelect(socialGroup.socialGroupId);
          },
          selected: socialGroup.socialGroupId === selectedSocialGroupId,
        }))}
        renderItem={renderItem}
        refreshing={false}
      />
    </View>
  );
};

const renderItem = ({ item }: ListRenderItemInfo<IItem>) => (
  <PressableWithDelay style={styles.button} onPress={item.onPress}>
    <TextTemplate type="b2" textAlign="center">
      {item.socialGroup.name}
    </TextTemplate>
    <View style={styles.radio}>
      <Radio selected={item.selected} />
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
