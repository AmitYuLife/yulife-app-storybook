import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles";

const styles = StyleSheet.create({
  wrapper: {
    flex: 2,
    marginTop: Style.SCALE_UP_AND_DOWN(30),
    marginBottom: Style.SCALE_UP_AND_DOWN(15),
  } as ViewStyle,
  bodyWrapper: {
    flex: 1,
    width: "100%",
    paddingHorizontal: Style.adjust(20),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(22),
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  description: { textAlign: "left", fontSize: 20, lineHeight: 32, marginBottom: 24 } as TextStyle,
  ctaWrapper: {
    justifyContent: "flex-end",
    marginBottom: 30,
  } as ViewStyle,
  avatarSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  } as ViewStyle,
});

export default styles;
