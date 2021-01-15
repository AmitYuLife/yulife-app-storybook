import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { SvgXml } from "react-native-svg";
import { Style, Colours } from "@styles";
import { PressableWithDelay } from "@components/molecules";
import { ArrowRightSvg, Text } from "@atoms";

export interface IFaq {
  label: string;
  onPress: () => void;
  styles?: { [key: string]: ViewStyle | TextStyle };
  iconSvgXml?: string;
  redirectType: "internal" | "external";
}

export const Faq = memo(({ label = "", onPress, styles, iconSvgXml }: IFaq) => {
  const style = { ...defaultStyles, ...styles };

  return (
    <PressableWithDelay
      onPress={onPress}
      style={({ pressed }) => [
        !pressed && {
          bottom: 4,
          borderBottomColor: Colours.neutral.n100,
          borderBottomWidth: 5,
        },
        style.wrapper,
      ]}
    >
      {!iconSvgXml ? null : (
        <View pointerEvents="none" style={style.iconWrapper}>
          <SvgXml xml={iconSvgXml} width={24} height={24} />
        </View>
      )}
      <View style={style.labelWrapper}>
        <Text bold={true} style={style.label}>
          {label}
        </Text>
      </View>
      <View style={style.imageWrapper}>
        <ArrowRightSvg />
      </View>
    </PressableWithDelay>
  );
});

const defaultStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
    marginTop: Style.adjust(8),
    minHeight: Style.adjust(60),
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 10,
  } as ViewStyle,
  iconWrapper: {
    marginLeft: Style.adjust(16),
  } as ViewStyle,
  imageWrapper: {
    marginLeft: "auto",
    paddingRight: Style.adjust(16),
  } as ViewStyle,
  labelWrapper: {
    marginLeft: Style.adjust(16),
    maxWidth: Style.DEVICE_WIDTH - 128,
  } as ViewStyle,
  label: {
    letterSpacing: 1,
    color: Colours.products.fib.n800,
    lineHeight: Style.adjust(24),
    fontSize: Style.adjust(16),
  } as TextStyle,
});
