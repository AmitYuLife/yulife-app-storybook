import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { Style, TemplateTextType, StyleSheet } from "@styles";
import { getMarkdownStyles } from "../markdown/markdown.styles";
import { parseJSON } from "@utils";
import { MARKDOWN } from "@ids";

interface IProps {
  testID?: string;
  markdown: string;
  title?: string;
  titleType?: TemplateTextType;
  wrapperStyle?: ViewStyle;
  markdownContainerStyle?: ViewStyle;
  markdownStyles?: string;
}

const HeadingAndCopy = (props: IProps) => {
  const { markdown, markdownContainerStyle, title, titleType = "h3", wrapperStyle, testID } = props;
  const titleMarginTop = !title ? {} : { marginTop: Style.adjust(30) };

  const safeMarkdownStyles = useMemo(() => {
    const { data, isValid } = parseJSON(props.markdownStyles);
    const safeData = isValid ? data : {};

    return getMarkdownStyles(safeData);
  }, [props.markdownStyles]);

  return (
    <View style={[styles.wrapper, titleMarginTop, wrapperStyle]} testID={testID || MARKDOWN(markdown)}>
      {!title ? null : <TextTemplate type={titleType}>{title}</TextTemplate>}
      <Markdown
        text={markdown}
        containerStyle={StyleSheet.flatten([styles.markdownContainer, markdownContainerStyle])}
        markdownStyles={safeMarkdownStyles}
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
