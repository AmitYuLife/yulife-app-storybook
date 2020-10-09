import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours } from "@styles";

export default StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  touchable: {
    flex: 2,
  } as ViewStyle,
  text: {
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,
  accept: {
    fontSize: 16,
    lineHeight: 24,
    color: "#E30D76",
    textDecorationLine: "underline",
  } as TextStyle,
  flex4: {
    flex: 4,
  } as TextStyle,
  flex3: {
    flex: 3,
    textAlign: "right",
  } as TextStyle,
  lastMargin: {
    marginBottom: 24,
  } as ViewStyle,
  firstInvitationItem: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  } as ViewStyle,
  lastInvitationItem: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  } as ViewStyle,
});
