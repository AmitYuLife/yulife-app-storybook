import { memo } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ContentItemProductDetailsHeader } from "@graphql/__generated";
import Markdown from "@components/molecules/markdown/markdown";
import { Style, StyleSheet, templateTextMarkdownStyles } from "@styles";
import { YU_COIN_POWER_HEIGHT_WIDTH_MULTIPLIER } from "@components/molecules";

interface Props {
  benefit?: ContentItemProductDetailsHeader["benefit"];
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
      {!title ? null : <TextTemplate type="b1b">{title}</TextTemplate>}
      {!markdown ? null : (
        <Markdown text={markdown} markdownStyles={markdownStyles} containerStyle={styles.markdownContainer} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: Style.adjust(14),
    paddingHorizontal: Style.adjust(24),
    backgroundColor: "#F2F2FA", // No Figma name
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    transform: [{ translateY: Style.adjust(-8) }], // move up to reveal border radius
    marginBottom: Style.adjust(-8), // negative margin to negate the transform for content below
  } as ViewStyle,
  placeholder: {
    height: YU_COIN_POWER_HEIGHT,
  } as ViewStyle,
  markdownContainer: {
    paddingHorizontal: 0,
    marginVertical: Style.adjust(8),
  } as ViewStyle,
});

const markdownStyles = StyleSheet.create({
  h1: { ...templateTextMarkdownStyles.h1, paddingBottom: Style.adjust(8) },
  h2: { ...templateTextMarkdownStyles.h2, paddingBottom: Style.adjust(8) },
  h3: { ...templateTextMarkdownStyles.h3, paddingBottom: Style.adjust(8) },
  paragraph: templateTextMarkdownStyles.b2,
});
