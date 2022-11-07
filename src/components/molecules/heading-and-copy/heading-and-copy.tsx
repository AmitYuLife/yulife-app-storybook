import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import Markdown from "@components/molecules/markdown/markdown";
import { Style } from "@styles";
import { ITextTemplateType } from "@atoms/text/text-template";
import { getMarkdownStyles } from "../markdown/markdown.styles";
import { parseJSON } from "@utils";

interface IProps {
  markdown: string;
  title?: string;
  titleType?: ITextTemplateType;
  wrapperStyle?: ViewStyle;
  markdownContainerStyle?: ViewStyle;
  markdownStyles?: string;
}

const HeadingAndCopy = (props: IProps) => {
  const { markdown, markdownContainerStyle, title, titleType = "h3", wrapperStyle } = props;
  const titleMarginTop = !title ? {} : { marginTop: Style.adjust(30) };

  const safeMarkdownStyles = useMemo(() => {
    const { data, isValid } = parseJSON(props.markdownStyles);
    const safeData = isValid ? data : {};

    return getMarkdownStyles(safeData);
  }, [props.markdownStyles]);

  return (
    <View style={[styles.wrapper, titleMarginTop, wrapperStyle]}>
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
