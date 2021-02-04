import React from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
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
    <View style={styles.wrapper}>
      <Text style={styles.description}>
        By turning on a leaderboard, you are opting in to share your most recent 30 day step data with other members of
        the leaderboard. This can be toggled off at any time.
      </Text>
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

const MARGIN = Style.adjust(24);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
    marginHorizontal: MARGIN,
  },
  description: {
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    marginBottom: Style.adjust(24),
    color: Colours.neutral.n800,
  },
});

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
        <Text bold={isActive} style={isActive ? buttonStyles.active : null}>
          {name}
        </Text>
        <Text style={StyleSheet.flatten([buttonStyles.textSmall, consent ? buttonStyles.active : null])}>
          {consent ? "On" : "Off"}
        </Text>
      </TouchableOpacityWithDelay>
      <Switch testID={LEADERBOARD_SWITCH(name)} value={consent} onPress={onSwitchPress} />
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.1)",
  } as ViewStyle,
  nameWrapper: {
    paddingVertical: MARGIN,
  },
  textSmall: {
    color: Colours.neutral.n400,
    fontSize: Style.adjust(12),
    marginTop: 5,
  } as TextStyle,
  active: {
    color: Colours.primary.p600,
  } as TextStyle,
});
