import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import MinimalButton from "@atoms/button/minimalButton";
import { Colours, Style } from "@styles";
import YuCoinIcon from "../earn-rate-explained/subcomponents/yucoin.icon";

interface Props {
  onUnlockPress: () => void;
}

export const CreateAvatarPrompt = memo(function ({ onUnlockPress }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textWrapper}>
        <Text style={styles.label}>Create your avatar to unlock personal protection and earn </Text>
        <YuCoinIcon style={{ color: "#5A5A5C", marginBottom: 2 }} />
        <Text style={styles.label}> 100 yucoin.</Text>
      </Text>
      <View style={styles.ctaWrapper}>
        <MinimalButton
          height={Style.adjust(55)}
          onPress={onUnlockPress}
          title="Get Started"
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          color={"white"}
          titleStyle={styles.ctaLabel}
        />
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
  },
  label: {
    color: "#5A5A5C",
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    marginTop: Style.adjust(8),
    letterSpacing: Style.isWideScreen() ? 1 : 0.5,
  } as TextStyle,
  earningCoinWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  smallYucoinImage: {
    height: Style.adjust(16),
    width: Style.adjust(16),
    marginTop: Style.adjust(2),
  } as ImageStyle,
  earningCoinText: {
    color: "#5A5A5C",
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    lineHeight: Style.adjust(24),
    marginBottom: Style.adjust(16),
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
});
