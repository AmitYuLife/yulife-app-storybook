import React, { memo, useState } from "react";
import { View } from "react-native";
import { Radio, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { Pressable } from "@molecules";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { ISocialGroup } from "@redux/leaderboards/leaderboards.types";
import { useSelector } from "react-redux";
import { getActiveSocialGroup } from "@redux/leaderboards/leaderboards.selectors";
import { COMMUNITY_LIST_ITEM, LEADERBOARD_COMMUNITY_LIST } from "@ids";

interface IProps {
  socialGroups: ISocialGroup[];
  onSelect: (socialGroup: { id: string; name: string }) => void;
}

interface IItem {
  socialGroup: ISocialGroup;
  onPress: () => void;
  selected: boolean;
}

// TODO: This should be replaced with GenericSelectorModal
const LeaderboardCommunityOverlay = ({ socialGroups = [], onSelect }: IProps) => {
  const activeSocialGroup = useSelector(getActiveSocialGroup);
  const [selectedSocialGroupId, setSelectedSocialGroupId] = useState(activeSocialGroup?.socialGroupId || "");

  return (
    <View style={styles.wrapper}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={socialGroups.map((socialGroup) => ({
          socialGroup,
          onPress: () => {
            setSelectedSocialGroupId(socialGroup.socialGroupId);
            onSelect({ id: socialGroup.socialGroupId, name: socialGroup.name });
          },
          selected: socialGroup.socialGroupId === selectedSocialGroupId,
        }))}
        renderItem={renderItem}
        refreshing={false}
        testID={LEADERBOARD_COMMUNITY_LIST(socialGroups.map((gr) => gr.name))}
      />
    </View>
  );
};

const renderItem = ({ item }: ListRenderItemInfo<IItem>) => (
  <Pressable
    style={styles.button}
    onPress={item.onPress}
    testID={COMMUNITY_LIST_ITEM(item.socialGroup.name)}
    delay={1000}
  >
    <TextTemplate type="b2" textAlign="center">
      {item.socialGroup.name}
    </TextTemplate>
    <View style={styles.radio}>
      <Radio selected={item.selected} />
    </View>
  </Pressable>
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
