import React from "react";
import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "../../../../styles";
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
      markdownStyles={StyleSheet.flatten([markdownStyles, props.style])}
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

const fontSize = Platform.select({
  ios: Style.adjust(16),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: Style.adjust(16),
      },
    ],
    Style.adjust(16)
  ),
});

const markdownStyles = {
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize,
    lineHeight: fontSize * 1.5,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: "#464647",
    marginTop: Style.adjust(32),
    textAlign: "left",
    marginBottom: Style.adjust(16),
  },
  list: {
    marginBottom: Style.adjust(8),
    marginTop: Style.adjust(16),
  },
  listItem: {
    flexDirection: "row",
    marginVertical: Style.adjust(4),
    fontSize: Style.adjust(16),
  },
  listItemBullet: {
    marginTop: Style.adjust(10),
    width: Style.adjust(4),
    height: Style.adjust(4),
    backgroundColor: "black",
    borderRadius: 2,
    marginRight: Style.adjust(10),
  },
};
