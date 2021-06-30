import { TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface IProps {
  markdown: string;
  title?: string;
}

const HeadingAndCopy = (props: IProps) => {
  const { markdown, title } = props;
  const titleMarginTop = !title ? {} : { marginTop: Style.adjust(30) };
  return (
    <View style={[styles.wrapper, titleMarginTop]}>
      {!title ? null : <TextTemplate type={"h3"}>{title}</TextTemplate>}
      <Markdown text={markdown} containerStyle={styles.markdownContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  } as ViewStyle,
  markdownContainer: {
    marginTop: Style.adjust(8),
  },
});

export default memo(HeadingAndCopy);
