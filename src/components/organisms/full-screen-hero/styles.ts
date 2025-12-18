import { Colours, Style, templateTextMarkdownStyles, StyleSheet } from "@styles";
import { Platform } from "react-native";

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  logo: {
    alignSelf: "center",
    marginTop: Style.adjust(Platform.select({ ios: 4, android: 12 })),
  },
});

export const markdownStyles = StyleSheet.create({
  text: {
    ...templateTextMarkdownStyles.l1,
    textAlign: "center",
    color: Colours.inkStrong,
  },
  link: {
    color: Colours.inkStrong,
  },
});
