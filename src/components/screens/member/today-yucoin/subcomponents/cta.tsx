import React, { ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import MinimalButton from "@atoms/button/minimalButton";
import { Colours } from "@styles";

interface IProps {
  hide?: boolean;
}

export default function CTA({ hide, onPress, title }: IProps & Partial<ComponentProps<typeof MinimalButton>>) {
  return hide ? null : (
    <View style={styles.ctaWrapper}>
      <MinimalButton
        onPress={onPress}
        title={title}
        height={50}
        backgroundColor={Colours.darkHotPink}
        shadowColor={Colours.darkHotPinkShadow}
        color="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ctaWrapper: {
    alignSelf: "center",
    width: 300,
  } as ViewStyle,
});
