import { TextStyle, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style, TOP_BAR, StyleSheet } from "@styles";

export default StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  dailyStepsOnlineWrapper: {
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(-16),
  } as ViewStyle,
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(35),
  } as TextStyle,
  headingOffline: {
    fontSize: Style.SCALE_UP_AND_DOWN(25),
  } as TextStyle,
  lastUpdate: {
    color: "rgb(96,96,96)",
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginTop: Style.SCALE_UP_AND_DOWN(15),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(235),
  } as TextStyle,
  navBarWrapper: {
    bottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 20 : 10),
    paddingBottom: Style.SCALE_UP_AND_DOWN(15),
    position: "absolute",
  } as ViewStyle,
  permissionText: {
    color: "rgb(96,96,96)",
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(300),
  } as TextStyle,
  whiteText: {
    color: "#FFF",
  } as TextStyle,
  counterWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  } as ViewStyle,
  rightIconList: {
    position: "absolute",
    right: Style.adjust(16),
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  leftIconList: {
    position: "absolute",
    left: Style.adjust(16),
    top: TOP_BAR.TOP_BAR_WITH_PAD,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  informationIcon: {
    position: "absolute",
    top: Style.adjust(40),
    left: Style.adjust(37),
  },
  yucoinBadgeWrapper: {
    width: Style.adjust(218),
    height: Style.adjust(Style.isShortToMediumAndroid() ? 208 : 218),
  },
  yucoinBadge: {
    ...StyleSheet.absoluteFillObject,
    margin: 9,
  },
});
