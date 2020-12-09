import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles/index";

export default StyleSheet.create({
  viewWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    paddingBottom: Style.adjust(20),
  } as ViewStyle,

  headerText: {
    marginTop: 16,
    marginBottom: 32,
    marginHorizontal: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: "#5A5A5C",
  } as TextStyle,

  checkboxWrapper: {
    width: "90%",
    paddingLeft: 24,
    paddingBottom: 24,
  },

  textArea: {
    alignSelf: "center",
    marginBottom: 32,
    backgroundColor: "#FAFAFE",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    color: "#000",
    minHeight: 160,
    width: "85%",
    paddingHorizontal: 16,
    paddingTop: 16,
  } as TextStyle,

  textAreaFocus: {
    borderColor: "#F664A4",
  } as TextStyle,

  footerWrapper: {
    width: "100%",
    marginBottom: 112,
  } as ViewStyle,

  submitButton: {
    alignSelf: "center",
    marginBottom: 32,
  } as ViewStyle,

  greetingsWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  } as ViewStyle,

  imageWrapper: {
    marginVertical: 32,
    alignSelf: "center",
    flex: 2,
  } as ViewStyle,

  headerTextGreetings: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: "#5A5A5C",
    paddingBottom: 32,
    paddingHorizontal: 32,
    paddingTop: 16,
  } as TextStyle,
});
