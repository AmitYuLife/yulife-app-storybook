import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, ImageStyle, Platform } from "react-native";
import { Text } from "@atoms";
import Button from "@atoms/button/button";
import { Colours, Style } from "@styles";
import { YuCoinIcon } from "@atoms";
import { GET_STARTED_BUTTON, EMPTY_YUSCREEN_COPY } from "@ids";

interface Props {
  onUnlockPress: () => void;
}

export const CreateAvatarPrompt = memo(function ({ onUnlockPress }: Props) {
  return (
    <View style={styles.wrapper} testID={EMPTY_YUSCREEN_COPY}>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Create your Yumoji to</Text>
        <Text style={styles.label}>unlock personal protection</Text>
        <View style={styles.row}>
          <Text style={styles.label}>{"and earn "}</Text>
          <YuCoinIcon style={styles.yucoin} />
        </View>
        <Text style={styles.label}>{" 100 YuCoin."}</Text>
      </View>
      <View style={styles.ctaWrapper} testID={GET_STARTED_BUTTON}>
        <Button onPress={onUnlockPress} label="Get Started" size="Small" />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: Style.adjust(4),
    marginTop: Style.adjust(8),
  } as ViewStyle,
  textWrapper: {
    marginBottom: Style.adjust(16),
    flexDirection: "row",
    flexWrap: "wrap",
  } as ViewStyle,
  label: {
    color: "#5A5A5C",
    fontSize: Style.adjust(16, {
      shrinkThreshold: Platform.OS === "android" && Style.DEVICE_WIDTH < 370,
      shrinkMultiplier: 0.15,
    }),
    lineHeight: Style.adjust(18),
    marginTop: Style.adjust(8),
    letterSpacing: Style.isWideScreen() ? 1 : 0.5,
  } as TextStyle,
  ctaWrapper: {
    maxWidth: Style.adjust(174),
  } as ViewStyle,
  ctaLabel: {
    fontSize: Style.adjust(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 24,
    letterSpacing: 0.8,
  } as TextStyle,
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  yucoin: {
    tintColor: Colours.neutral.n800,
    marginBottom: -4,
    width: Style.adjust(16),
    height: Style.adjust(16),
  } as ImageStyle,
});
