import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { GetCurrentUser_getCurrentUser_leaderboards } from "@graphql/_core/schema";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface Props {
  leaderboards: GetCurrentUser_getCurrentUser_leaderboards[];
  activeLeaderboardId: string;
  onPress: (id: string) => void;
}

export const LeaderboardListItems = (props: Props) => {
  const { leaderboards, activeLeaderboardId, onPress } = props;

  if (!leaderboards || !leaderboards.length) {
    return null;
  }

  return (
    <View>
      {leaderboards.map((item) => (
        <LeaderboardListItem
          key={item.leaderboardId}
          isActive={item.leaderboardId === activeLeaderboardId}
          name={item.name}
          onPress={() => onPress(item.leaderboardId)}
        />
      ))}
    </View>
  );
};

interface LeaderboardListItemProps {
  onPress: () => void;
  name: string;
  isActive: boolean;
}

const LeaderboardListItem = ({ onPress, isActive, name }: LeaderboardListItemProps) => {
  return (
    <TouchableOpacityWithDelay style={buttonStyles.wrapper} onPress={onPress}>
      <Text bold={isActive}>{name}</Text>
    </TouchableOpacityWithDelay>
  );
};

const buttonStyles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 8,
  } as ViewStyle,
});
