import { Markdown } from "@components/molecules";
import { Colours, Style, StyleSheet, templateTextMarkdownStyles } from "@styles";
import { Platform } from "react-native";

interface IPathwaysReflectionMarkdownProps {
  text: string;
}

export const PathwaysReflectionMarkdown = ({ text }: IPathwaysReflectionMarkdownProps) => {
  return <Markdown markdownStyles={markdownStyles} text={text} />;
};

const markdownStyles = StyleSheet.create({
  paragraph: {
    paddingVertical: 0,
  },
  text: {
    ...templateTextMarkdownStyles.l1,
    color: Colours.neutral.white,
  },
  imageWrapper: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    transform: [{ translateY: Style.adjust(16 / 2 + Platform.select({ ios: -2, android: -5 })) }],
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
});
