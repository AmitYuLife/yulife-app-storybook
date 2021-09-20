import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { Style } from "@styles";

interface IProps {
  markdown: string;
  title?: string;
  wrapperStyle?: ViewStyle;
  markdownContainerStyle?: ViewStyle;
}

const HeadingAndCopy = (props: IProps) => {
  const { markdown, markdownContainerStyle, title, wrapperStyle } = props;
  const titleMarginTop = !title ? {} : { marginTop: Style.adjust(30) };

  return (
    <View style={[styles.wrapper, titleMarginTop, wrapperStyle]}>
      {!title ? null : <TextTemplate type={"h3"}>{title}</TextTemplate>}
      <Markdown
        text={markdown}
        containerStyle={StyleSheet.flatten([styles.markdownContainer, markdownContainerStyle])}
      />
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
