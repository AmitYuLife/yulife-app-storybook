import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Style } from "@styles";
import Switch from "@molecules/switch/switch";
import { ILeaderboard } from "@redux/user/user.reducer";
import { LEADERBOARD_STATUS, LEADERBOARD_SWITCH } from "@ids";

interface Props {
  leaderboards: ILeaderboard[];
  activeLeaderboardId: string;
  onPress: (id: string) => void;
  onChangeLeaderboardConsent: (leaderboardId: string, consent: boolean) => void;
}

export const LeaderboardListItems = (props: Props) => {
  const { leaderboards, activeLeaderboardId, onPress, onChangeLeaderboardConsent } = props;

  if (!leaderboards || !leaderboards.length) {
    return null;
  }

  return (
    <View>
      {leaderboards.map((item) => (
        <LeaderboardListItem
          key={item.leaderboardId}
          isActive={item.leaderboardId === activeLeaderboardId}
          consent={item.consent}
          name={item.name}
          onPress={() => onPress(item.leaderboardId)}
          onSwitchPress={() => onChangeLeaderboardConsent(item.leaderboardId, item.consent)}
        />
      ))}
    </View>
  );
};

interface LeaderboardListItemProps {
  onPress: () => void;
  onSwitchPress: () => void;
  name: string;
  isActive: boolean;
  consent: boolean;
}

const LeaderboardListItem = ({ onPress, onSwitchPress, isActive, name, consent }: LeaderboardListItemProps) => {
  return (
    <View style={buttonStyles.wrapper} testID={LEADERBOARD_STATUS(name, consent ? "active" : "inactive")}>
      <TouchableOpacityWithDelay style={buttonStyles.nameWrapper} onPress={onPress}>
        <Text bold={isActive}>{name}</Text>
      </TouchableOpacityWithDelay>
      <Switch testID={LEADERBOARD_SWITCH(name)} value={consent} onPress={onSwitchPress} />
    </View>
  );
};

const MARGIN = Style.adjust(16);

const buttonStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: MARGIN,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
  } as ViewStyle,
  nameWrapper: {
    paddingVertical: MARGIN,
  },
});
