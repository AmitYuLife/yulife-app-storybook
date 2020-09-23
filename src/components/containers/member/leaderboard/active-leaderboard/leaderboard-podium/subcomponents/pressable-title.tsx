import React from "react";
import { View, StyleSheet, ViewStyle, Platform, TextStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { LEADERBOARD_TOP_SCREEN } from "@ids";
import { truncate } from "@services/utils";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Svg, { Path } from "react-native-svg";

export interface LeaderboardPressableTitleProps {
  onPressLabel: () => void;
  name: string;
}

export function LeaderboardPressableTitle({ onPressLabel, name }: LeaderboardPressableTitleProps) {
  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <TouchableOpacityWithDelay style={styles.row} onPress={onPressLabel}>
        <Title title={name} />
        <Arrow />
      </TouchableOpacityWithDelay>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
});

function Title({ title }: { title: string }) {
  return (
    <View style={titleStyles.wrapper} testID={LEADERBOARD_TOP_SCREEN}>
      <Text style={titleStyles.title}>{truncate(title, 16)}</Text>
      <Text style={titleStyles.caption}>30 day steps</Text>
    </View>
  );
}

const titleStyles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
  } as ViewStyle,
  title: {
    color: Colours.blue.b200,
    fontSize: Style.adjust(18),
    textAlign: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginBottom: Style.adjust(8),
    marginTop: Platform.select({ ios: 2, android: -4 }),
  } as TextStyle,
  caption: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
});

function Arrow() {
  return (
    <Svg width="12" height="8" viewBox="0 0 12 8" style={arrowStyles.wrapper}>
      <Path
        d="M0.666687 1.33334L6.00002 6.66667L11.3334 1.33334"
        stroke="#6AA3DC"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </Svg>
  );
}

const arrowStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(7),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ViewStyle,
  image: {
    width: Style.adjust(13),
    height: Style.adjust(7),
  } as ImageStyle,
});
