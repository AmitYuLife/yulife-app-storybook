import React, { memo } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ContentItemProductDetailsHeader_benefit } from "@graphql/_core/schema";
import Markdown from "@components/molecules/markdown/markdown";
import { Style } from "@styles";
import { YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER } from "@components/molecules";

interface Props {
  benefit?: ContentItemProductDetailsHeader_benefit;
  onLayout?: (event: LayoutChangeEvent) => void;
  style: ViewStyle;
}

const YU_COIN_POWER_HEIGHT = Style.DEVICE_WIDTH * YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER;

export const Benefit = memo(({ benefit, style, onLayout }: Props) => {
  if (!benefit) {
    return <View onLayout={onLayout} style={styles.placeholder} />;
  }

  const { title, markdown } = benefit;

  return (
    <View onLayout={onLayout} style={[styles.wrapper, style]}>
      {!title ? null : <TextTemplate type="h3">{title}</TextTemplate>}
      {!markdown ? null : <Markdown text={markdown} />}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(24),
    backgroundColor: "#F2F2FA", // No Figma name
  } as ViewStyle,
  placeholder: {
    height: YU_COIN_POWER_HEIGHT,
  } as ViewStyle,
});
