import { TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { Colours, Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps {
  markdown?: string;
  title?: string;
}

export const ContentItemMarkdown = memo(function (props: IProps) {
  const { markdown, title } = props;
  const titleMarginTop = !title ? {} : { marginTop: Style.adjust(30) };
  return (
    <View style={[styles.wrapper, titleMarginTop]}>
      {!title ? null : <TextTemplate type={"h3"}>{title}</TextTemplate>}
      {!markdown ? null : (
        <Markdown text={markdown} containerStyle={styles.markdownContainer} markdownStyles={markdownStyles} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  } as ViewStyle,
  markdownContainer: {
    marginTop: Style.adjust(8),
  },
});

const markdownStyles = {
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n800,
  },
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n900,
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
