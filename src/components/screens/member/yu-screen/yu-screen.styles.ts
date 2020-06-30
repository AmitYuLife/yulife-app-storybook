import { ImageStyle, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { TopBar, NavBar } from "@components/molecules";
import { Style } from "@styles/index";
import deviceInfoModule from "react-native-device-info";

const getTopBarFiller = () => {
  if (Platform.OS === "android") {
    return 6;
  }

  if (Style.isIphoneXPlus()) {
    return 52;
  }

  if (Style.isIphoneX()) {
    return 50;
  }

  return 30;
};

const navBarPositionBot = NavBar.positionBottom;
const navBarHeightApprox = Style.adjust(55);
const navbarMarginToLastElement = Style.adjust(16);
const navBarNotchedIosExtraPadding = Platform.OS === "ios" && deviceInfoModule.hasNotch() ? -44 : 0;
const padBot = navBarPositionBot + navBarHeightApprox + navbarMarginToLastElement + navBarNotchedIosExtraPadding;

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
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
  topbarWrapper: {
    left: 0,
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    paddingBottom: Style.adjust(12),
    position: "absolute",
    right: 0,
    backgroundColor: "white",
  } as ViewStyle,
  topbarFiller: {
    height: TopBar.height + getTopBarFiller(),
  } as ViewStyle,
});
