import React from "react";
import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "../../../../styles";
import Markdown from "@components/molecules/markdown/markdown";

export interface IMarkdownFibProps {
  text: string;
}

export default function MarkdownFib(props: IMarkdownFibProps) {
  const { text } = props;
  return <Markdown text={text} containerStyle={styles.markdownContainer} markdownStyles={styles} />;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  wrapper: {
    position: "absolute",
    top: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    left: 0,
    right: 0,
    height: "100%",
  },
  markdownContainer: {
    marginHorizontal: 32,
    marginBottom: 4,
    marginTop: 4,
  },
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
  header: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#464647",
    marginTop: 32,
    textAlign: "left",
    marginHorizontal: 32,
    marginBottom: 16,
  },
  list: {
    marginBottom: 8,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 12,
  },
  listItemBullet: {
    marginTop: 10,
    width: 4,
    height: 4,
    backgroundColor: "black",
    borderRadius: 2,
    marginRight: 10,
  },
});
