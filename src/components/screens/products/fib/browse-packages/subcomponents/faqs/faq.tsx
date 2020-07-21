import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { Style, Colours } from "@styles";
import { arrowRightSvg, externalLinkSvg } from "./svgs";
import { Text } from "@atoms";

export interface IFaq {
  label: string;
  onPress: () => void;
  styles?: { [key: string]: ViewStyle | TextStyle };
  iconSvgXml?: string;
  redirectType: "internal" | "external";
}

export const Faq = memo(({ label = "", onPress, styles, iconSvgXml, redirectType }: IFaq) => {
  const style = { ...defaultStyles, ...styles };

  return (
    <TouchableOpacity onPress={onPress} style={style.wrapper}>
      {!iconSvgXml ? null : (
        <View pointerEvents="none" style={style.iconWrapper}>
          <SvgXml xml={iconSvgXml} width={40} height={40} />
        </View>
      )}
      <View style={style.labelWrapper}>
        <Text bold style={style.label}>
          {label}
        </Text>
      </View>
      <View style={style.imageWrapper}>
        <SvgXml height={18} width={18} xml={redirectType === "internal" ? arrowRightSvg : externalLinkSvg} />
      </View>
    </TouchableOpacity>
  );
});

const defaultStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: Style.adjust(16),
    marginTop: Style.adjust(8),
    paddingVertical: Style.adjust(16),
    minHeight: Style.adjust(64),
  } as ViewStyle,
  iconWrapper: {
    marginLeft: Style.adjust(10),
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
