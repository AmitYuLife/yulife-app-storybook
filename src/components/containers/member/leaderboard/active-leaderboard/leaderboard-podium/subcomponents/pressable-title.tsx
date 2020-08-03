import React from "react";
import { Image, View, StyleSheet, ViewStyle, Platform, TextStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { LEADERBOARD_TOP_SCREEN } from "@ids";
import { truncate } from "@services/utils";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";

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
    color: "#333333",
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
    <View style={arrowStyles.wrapper}>
      <Image style={arrowStyles.image} source={require("@assets/icons/v.png")} />
    </View>
  );
}

const arrowStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(7),
    marginLeft: Style.adjust(16),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ViewStyle,
  image: {
    width: Style.adjust(13),
    height: Style.adjust(7),
  } as ImageStyle,
});
