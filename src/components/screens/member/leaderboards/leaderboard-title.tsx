import React from "react";
import { Image, TouchableOpacity, View, ViewStyle, StyleSheet, TextStyle, ImageStyle, Platform } from "react-native";
import { Text } from "@components/atoms";
import { LEADERBOARD_TOP_SCREEN } from "@ids";
import { truncate } from "../../../../services/utils";
import { Style } from "@styles";
import { InfoIcon } from "./svg/leaderboard";
import { LEADERBOARD_INFO_BUTTON } from "@ids";

interface OwnProps {
  hide: boolean;
}

type LeaderboardTitleProps = InfoButtonProps & LeaderboardLabelProps & OwnProps;

export function LeaderboardTitle(props: LeaderboardTitleProps) {
  const { onPressInfo, onPressLabel, name } = props;
  return (
    <>
      <InfoButton onPressInfo={onPressInfo} />
      <LeaderboardLabel name={name} onPressLabel={onPressLabel} />
    </>
  );
}

interface LeaderboardLabelProps {
  onPressLabel: () => void;
  name: string;
}

function LeaderboardLabel({ onPressLabel, name }: LeaderboardLabelProps) {
  return (
    <View pointerEvents="box-none" style={styles.leaderboardNameAbsolute}>
      <TouchableOpacity style={styles.row} activeOpacity={1} onPress={onPressLabel}>
        <View style={styles.leaderboardNameWrapper} testID={LEADERBOARD_TOP_SCREEN}>
          <Text style={styles.leaderboardName}>{truncate(name, 16)}</Text>
          <Text style={styles.leaderboardSteps}>30 day steps</Text>
        </View>
        <View style={styles.changeLeaderboardArrowWrapper}>
          <Image style={styles.changeLeaderboardArrow} source={require("@assets/icons/v.png")} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

interface InfoButtonProps {
  onPressInfo: () => void;
}

function InfoButton({ onPressInfo }: InfoButtonProps) {
  return (
    <TouchableOpacity style={styles.leaderboardInfoButton} onPress={onPressInfo} testID={LEADERBOARD_INFO_BUTTON}>
      <InfoIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  leaderboardInfoButton: {
    height: Style.adjust(32),
    width: Style.adjust(32),
    right: Style.adjust(8),
    position: "absolute",
  } as ViewStyle,
  leaderboardNameAbsolute: {
    position: "absolute",
    left: Style.SCALE_UP_AND_DOWN(44),
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  leaderboardNameWrapper: {
    alignSelf: "center",
    alignItems: "center",
  } as ViewStyle,
  leaderboardName: {
    color: "#333333",
    fontSize: Style.adjust(18),
    textAlign: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginBottom: Style.adjust(8),
    marginTop: Platform.select({ ios: 2, android: -4 }),
  } as TextStyle,
  leaderboardSteps: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  changeLeaderboardArrowWrapper: {
    marginTop: Style.adjust(7),
    marginLeft: Style.adjust(16),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ImageStyle,
  changeLeaderboardArrow: {
    width: Style.adjust(13),
    height: Style.adjust(7),
  } as ImageStyle,
});
