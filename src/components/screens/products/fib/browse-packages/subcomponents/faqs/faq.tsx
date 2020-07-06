import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { Style, Colours } from "@styles";
import { arrowRightSvg } from "./svgs";
import { Text } from "@atoms";

interface IAdditionalBenefit {
  label: string;
  onPress: () => void;
}

export const Faq = memo(({ label = "", onPress }: IAdditionalBenefit) => (
  <TouchableOpacity onPress={onPress} style={styles.wrapper}>
    <View style={styles.labelWrapper}>
      <Text bold style={styles.label}>
        {label}
      </Text>
    </View>
    <View style={styles.imageWrapper}>
      <SvgXml height={18} width={18} xml={arrowRightSvg} />
    </View>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: Style.adjust(16),
    marginTop: Style.adjust(8),
    paddingVertical: Style.adjust(16),
    minHeight: Style.adjust(64),
  } as ViewStyle,
  imageWrapper: {
    marginLeft: "auto",
    paddingRight: Style.adjust(24),
  } as ViewStyle,
  labelWrapper: {
    marginLeft: Style.adjust(16),
    maxWidth: Style.adjust(240),
  } as ViewStyle,
  label: {
    letterSpacing: 1,
    color: Colours.products.fib.n800,
    lineHeight: Style.adjust(24),
    fontSize: Style.adjust(16),
  } as TextStyle,
});
