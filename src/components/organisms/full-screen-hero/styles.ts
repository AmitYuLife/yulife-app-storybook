import { Colours, Style, templateTextStyles } from "@styles";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    marginTop: Style.adjust(Platform.select({ ios: 4, android: 12 })),
  },
});

export const markdownStyles = StyleSheet.create({
  text: {
    ...templateTextStyles.l1,
    textAlign: "center",
    color: Colours.inkStrong,
  },
  link: {
    color: Colours.inkStrong,
  },
});
