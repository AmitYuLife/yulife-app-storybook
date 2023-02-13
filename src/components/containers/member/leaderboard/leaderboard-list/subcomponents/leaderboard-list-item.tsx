import React, { useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import Switch from "@molecules/switch/switch";
import { ILeaderboard } from "@redux/user/user.reducer";
import { LEADERBOARD_STATUS, LEADERBOARD_SWITCH } from "@ids";
import { getMetricName, t } from "@locale";
import { FlashList } from "@shopify/flash-list";
import { LeaderboardMetric } from "@graphql/member";

interface Props {
  leaderboards: ILeaderboard[];
  activeLeaderboardId: string;
  onPress: (id: string) => void;
  onRefresh: () => void;
  onChangeLeaderboardConsent: (leaderboardId: string, consent: boolean) => void;
}

export const LeaderboardListItems = ({
  leaderboards,
  activeLeaderboardId,
  onPress,
  onChangeLeaderboardConsent,
  onRefresh,
}: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: ILeaderboard }) => (
      <LeaderboardListItem
        key={item.leaderboardId}
        isActive={item.leaderboardId === activeLeaderboardId}
        consent={item.consent}
        name={item.name}
        onPress={() => onPress(item.leaderboardId)}
        onSwitchPress={() => onChangeLeaderboardConsent(item.leaderboardId, item.consent)}
      />
    ),
    [activeLeaderboardId, onChangeLeaderboardConsent, onPress]
  );

  if (!leaderboards || !leaderboards.length) {
    return null;
  }

  const activeLeaderboard = leaderboards.find((board) => board.leaderboardId === activeLeaderboardId) || {
    metric: "steps",
    days: 30,
  };
  const metricName = getMetricName(activeLeaderboard.metric as LeaderboardMetric);

  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      estimatedItemSize={80}
      contentContainerStyle={styles.wrapper}
      onRefresh={onRefresh}
      data={leaderboards}
      renderItem={renderItem}
      refreshing={false}
      ListHeaderComponent={
        <View style={styles.header}>
          <TextTemplate type="b2">
            {t("screens.leaderboard.invites.subheading", { days: activeLeaderboard.days, metric: metricName })}
          </TextTemplate>
        </View>
      }
    />
  );
};

const MARGIN = Style.adjust(24);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: MARGIN,
  },
  header: {
    marginBottom: Style.adjust(24),
    marginTop: Style.adjust(16),
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
    flex: 1,
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
