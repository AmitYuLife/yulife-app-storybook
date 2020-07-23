import React, { memo } from "react";
import { View, StyleSheet, Platform, ViewStyle } from "react-native";
import { BetaText } from "@components/molecules";

interface Props {
  show?: boolean;
  logo?: string;
  heading?: string;
}

const _Beta = ({ show, logo, heading }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <View style={centerBeta({ logo, heading })}>
      <BetaText />
    </View>
  );
};

export const Beta = memo(_Beta);

const styles = StyleSheet.create({
  alignBetaBottomHeading: {
    marginBottom: Platform.select({ ios: -4, android: -5 }),
  } as ViewStyle,
  alignBetaBottomLogo: {
    marginBottom: Platform.select({ ios: -2, android: 0 }),
  } as ViewStyle,
});

function centerBeta({ heading, logo }: { heading?: string; logo?: string }) {
  if (heading) {
    return styles.alignBetaBottomHeading;
  }

  if (logo) {
    return styles.alignBetaBottomLogo;
  }

  return {};
}
