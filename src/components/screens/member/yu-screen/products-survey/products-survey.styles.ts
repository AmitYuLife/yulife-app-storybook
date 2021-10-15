import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";

export default StyleSheet.create({
  viewWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    paddingBottom: Style.adjust(20),
  } as ViewStyle,

  headerTextWrapper: {
    marginVertical: Style.adjust(16),
    marginHorizontal: Style.adjust(24),
  } as ViewStyle,

  checkboxWrapper: {
    width: "90%",
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(24),
  },

  textArea: {
    alignSelf: "center",
    marginBottom: Style.adjust(32),
    backgroundColor: Colours.neutral.n50,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    color: "#000",
    minHeight: Style.adjust(160),
    width: "85%",
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(16),
  } as TextStyle,

  textAreaFocus: {
    borderColor: "#F664A4",
  } as TextStyle,

  footerWrapper: {
    width: "100%",
    marginBottom: Style.adjust(60),
  } as ViewStyle,

  submitButton: {
    alignSelf: "center",
    marginBottom: Platform.select({ ios: Style.adjust(25), android: 0 }),
  } as ViewStyle,

  greetingsWrapper: {
    flex: 1,
  } as ViewStyle,

  greetingsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: 1,
  } as ViewStyle,

  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.9,
  } as ViewStyle,

  headerTextGreetings: {
    paddingBottom: Style.adjust(32),
    paddingTop: Style.adjust(16),
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,

  buttonWrapper: {
    flex: 0.2,
    justifyContent: "flex-end",
  },
});
