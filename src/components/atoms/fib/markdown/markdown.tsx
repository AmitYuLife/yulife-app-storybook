import React from "react";
import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import media from "@styles/media";

export interface IMarkdownFibProps {
  text: string;
  style?: StyleSheet.NamedStyles<ViewStyle>;
  wrapperStyle?: ViewStyle;
}

export default function MarkdownFib(props: IMarkdownFibProps) {
  const { text, wrapperStyle } = props;

  return (
    <Markdown
      text={text}
      containerStyle={StyleSheet.flatten([styles.markdownContainer, wrapperStyle])}
      markdownStyles={props.style}
    />
  );
}

const marginTop = Platform.select({
  ios: Style.adjust(12),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: 0,
      },
    ],
    Style.adjust(12)
  ),
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  wrapper: {
    height: "100%",
  },
  markdownContainer: {
    marginBottom: 4,
    marginTop,
    maxWidth: Style.DEVICE_WIDTH - 120,
  },
});
