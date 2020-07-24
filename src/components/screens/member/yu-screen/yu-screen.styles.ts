import { ImageStyle, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { NavBar } from "@components/molecules";
import { Style } from "@styles/index";
import deviceInfoModule from "react-native-device-info";

const navBarPositionBot = NavBar.positionBottom;
const navBarHeightApprox = Style.adjust(55);
const navbarMarginToLastElement = Style.adjust(16);
const navBarNotchedIosExtraPadding = Platform.OS === "ios" && deviceInfoModule.hasNotch() ? -44 : 0;
const padBot = navBarPositionBot + navBarHeightApprox + navbarMarginToLastElement + navBarNotchedIosExtraPadding;

export default StyleSheet.create({
  padTop: {
    height: Style.adjust(40),
  } as ViewStyle,
  padBot: {
    height: padBot,
  } as ViewStyle,
  editAvatarImage: {
    height: Style.SCALE_UP_AND_DOWN(32),
    width: Style.SCALE_UP_AND_DOWN(32),
    marginRight: Style.SCALE_UP_AND_DOWN(16),
  } as ImageStyle,
  noAvatarWrapper: {
    flexDirection: "row",
    width: "100%",
    height: Style.SCALE_UP_AND_DOWN(380),
    paddingLeft: Style.SCALE_UP_AND_DOWN(18),
  } as ViewStyle,
  employerBenefitsItemWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: Style.SCALE_UP_AND_DOWN(112),
    width: Style.SCALE_UP_AND_DOWN(96),
    alignItems: "center",
  } as ViewStyle,

  employerBenefitsItemImage: {
    height: Style.SCALE_UP_AND_DOWN(75),
    width: Style.SCALE_UP_AND_DOWN(63),
  } as ImageStyle,

  employerBenefitsItemText: {
    color: "#526980",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.SCALE_UP_AND_DOWN(17),
    textAlign: "center",
  } as TextStyle,
});
