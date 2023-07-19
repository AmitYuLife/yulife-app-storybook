import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { DropdownSolidIcon } from "@atoms/icon/dropdown-solid-icon";
import { Style } from "@styles";
import { PressableWithDelay } from "@molecules";
import { DuelsIcon } from "@atoms/icon/duels-icon";
import { t } from "@locale";

const colour = "#345E8C";

interface IActiveLeaderBoard {
  name: string;
  days?: number;
}

interface IProps {
  onLeftPress: () => void;
  onRightPress: () => void;
  showDuels: boolean;
  activeLeaderboard: IActiveLeaderBoard;
  metricName: string;
}

const LeaderboardNavigation = ({ onLeftPress, onRightPress, activeLeaderboard, showDuels, metricName }: IProps) => (
  <View style={styles.wrapper}>
    <PressableWithDelay style={styles.info} onPress={onLeftPress}>
      <View style={styles.wrapper}>
        <TextTemplate type="l1b" color={colour}>
          {activeLeaderboard.name}
        </TextTemplate>
        <View style={styles.dropdown}>
          <DropdownSolidIcon colour={colour} width={8} height={8} />
        </View>
      </View>
      <View>
        <TextTemplate type="l1" color={colour}>
          {t("screens.leaderboard.podium.steps", { days: activeLeaderboard?.days || 30, metric: metricName })}
        </TextTemplate>
      </View>
    </PressableWithDelay>
    {!showDuels ? null : (
      <PressableWithDelay style={styles.duels} onPress={onRightPress}>
        <View style={styles.duelsIcon}>
          <DuelsIcon colour={colour} />
        </View>
        <TextTemplate type="l1b" color={colour}>
          {t("screens.leaderboard.podium.duels_button")}
        </TextTemplate>
      </PressableWithDelay>
    )}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  info: {
    flexDirection: "column",
  },
  dropdown: {
    backgroundColor: "#BBD8F6",
    borderRadius: 100,
    width: Style.adjust(20),
    height: Style.adjust(20),
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Style.adjust(8),
    paddingTop: Style.adjust(2),
  },
  duels: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    borderRadius: 24,
    backgroundColor: "#BBD8F6",
    paddingTop: Style.adjust(8),
    paddingBottom: Style.adjust(8),
    paddingLeft: Style.adjust(10),
    paddingRight: Style.adjust(10),
  },
  duelsIcon: {
    marginRight: Style.adjust(8),
  },
});

export default memo(LeaderboardNavigation);
