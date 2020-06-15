import React from "react";
import { Image, TouchableOpacity, View, ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { Text } from "@components/atoms";
import { LEADERBOARD_TOP_SCREEN } from "@ids";
import { toCapitalLetter } from "../../../../services/utils";
import { Style } from "@styles";
import { InfoIcon } from "./svg/leaderboard";

interface OwnProps {
  hide: boolean;
}

type LeaderboardTitleProps = InfoButtonProps & LeaderboardLabelProps & OwnProps;

export function LeaderboardTitle(props: LeaderboardTitleProps) {
  const { onPressInfo, onPressLabel, name } = props;
  if (props.hide) {
    return null;
  }
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
          <Text numberOfLines={1} style={styles.leaderboardName}>
            {toCapitalLetter(name)}
          </Text>
          <Text style={styles.leaderboardSteps}>30 day steps</Text>
        </View>
        <View style={styles.changeLeaderboardArrow}>
          <Image source={require("../../../../../assets/icons/v.png")} />
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
    <TouchableOpacity style={styles.leaderboardInfoButton} onPress={onPressInfo}>
      <InfoIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  leaderboardInfoButton: {
    height: 32,
    width: 32,
    right: 8,
    position: "absolute",
  } as ViewStyle,
  leaderboardNameAbsolute: {
    position: "absolute",
    left: Style.SCALE_UP_AND_DOWN(32),
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
    width: Style.DEVICE_WIDTH / 3,
    textAlign: "center",
    lineHeight: Style.adjust(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  } as TextStyle,
  leaderboardSteps: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  changeLeaderboardArrow: {
    marginTop: Style.adjust(4),
    marginLeft: Style.adjust(16),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ImageStyle,
});
