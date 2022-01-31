import React, { memo } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ContentItemProductDetailsHeader_benefit } from "@graphql/_core/schema";
import Markdown from "@components/molecules/markdown/markdown";
import { Style } from "@styles";

interface Props {
  benefit?: ContentItemProductDetailsHeader_benefit;
  onLayout?: (event: LayoutChangeEvent) => void;
  style: ViewStyle;
}

export const Benefit = memo(({ benefit, style, onLayout }: Props) => {
  if (!benefit) {
    return null;
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
});
