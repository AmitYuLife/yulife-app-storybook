import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";

export default StyleSheet.create({
  image: {
    height: Style.SCALE_UP_AND_DOWN(100),
    width: "100%",
  } as ImageStyle,
  imageWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    width: "100%",
    marginTop: 20,
  } as ViewStyle,
  backgroundImageBase: {
    width: "100%",
  } as ImageStyle,
  backgroundImageWrapper: {
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  } as ViewStyle,
  topBarWrapper: {
    zIndex: 3,
    width: "100%",
  } as ViewStyle,
  list: {
    width: "100%",
    backgroundColor: "white",
    flex: 1,
    overflow: "hidden",
  } as ViewStyle,
  footer: {
    height: Style.SCALE_UP_AND_DOWN(28),
  } as ViewStyle,
  leaderboardList: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  } as ViewStyle,
  listWrapperMargin: {
    marginBottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 45 : 79),
    alignItems: "center",
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  grayscaleWrapper: {
    backgroundColor: "rgb(236, 236, 236)",
  } as ViewStyle,
  navbarWrapper: {
    height: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 25 : 15),
    paddingBottom: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 0 : 25),
    alignItems: "center",
  } as ViewStyle,
  leaderboardOfflineWrapper: { justifyContent: "center", alignItems: "center", flex: 1 } as ViewStyle,
  leaderboardOfflineImage: { position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" } as ImageStyle,
  leaderboardOfflineText: { fontSize: Style.SCALE_UP_AND_DOWN(20), lineHeight: Style.SCALE_UP_AND_DOWN(20) },
});
