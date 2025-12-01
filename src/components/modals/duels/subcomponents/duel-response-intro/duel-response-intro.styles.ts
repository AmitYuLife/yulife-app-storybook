import { ViewStyle, TextStyle } from "react-native";
import { Style, Colours, StyleSheet } from "@styles";

const styles = StyleSheet.create({
  wrapper: { flex: 1 } as ViewStyle,
  bodyWrapper: {
    alignSelf: "center",
    flex: 1,
  } as ViewStyle,
  avatarSection: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  versusText: {
    fontSize: 40,
    color: Colours.primary.p600,
  } as TextStyle,
  heading: {
    color: Colours.darkestGray,
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(18),
    fontSize: Style.adjust(32),
    paddingHorizontal: Style.adjust(20),
    textAlign: "center",
  } as TextStyle,
  boldHeading: {
    color: Colours.darkestGray,
    fontSize: Style.adjust(40),
    paddingHorizontal: Style.adjust(20),
    textAlign: "center",
  } as TextStyle,
  versusSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: Style.adjust(14),
  } as ViewStyle,
  flexBasis50: {
    flexBasis: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Style.adjust(20),
  } as ViewStyle,
  flexBasis120: {
    flexBasis: 120,
  } as ViewStyle,
  youText: {
    fontSize: 40,
    textAlign: "right",
  } as TextStyle,
  opponentNameText: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: "left",
  } as TextStyle,
  ctaWrapper: {
    justifyContent: "flex-end",
    marginBottom: 30,
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
});

export default styles;
