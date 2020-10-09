import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  headingInvite: {
    color: "rgb(51,51,51)",
    fontSize: 48,
    textAlign: "center",
  } as TextStyle,
  headingResponse: {
    color: "rgb(51,51,51)",
    fontSize: 40,
    textAlign: "center",
  } as TextStyle,
  versusImage: {
    width: 48,
    height: 48,
  } as ImageStyle,
  container: {
    flex: 1,
  } as ViewStyle,
  titleSection: {
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 40,
  } as ViewStyle,
  avatarSection: {
    flex: 9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
    alignItems: "center",
  } as ViewStyle,
  versusSection: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 40,
  } as ViewStyle,
  buttonSection: {
    marginTop: 20,
    marginBottom: 30,
  } as ViewStyle,
  flex50: {
    flexBasis: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  flex120: {
    flexBasis: 120,
  } as ViewStyle,
  vsText: {
    fontSize: 40,
    color: Colours.primary.p600,
  } as TextStyle,
  youText: {
    fontSize: 40,
    textAlign: "right",
    paddingRight: 8,
  } as TextStyle,
  opponentNameText: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: "left",
    paddingLeft: 8,
  } as TextStyle,
  opponentFallback: {
    fontSize: 40,
    lineHeight: 40,
    textAlign: "left",
    paddingLeft: 16,
  } as TextStyle,
  secondaryBtnWrapper: {
    marginTop: 8,
  } as ViewStyle,
});
