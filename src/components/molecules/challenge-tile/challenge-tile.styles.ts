import { ImageStyle, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { Style } from "../../../styles";

const FULL_HEIGHT = Style.adjust(199);
const BOTOM_HEIGHT = Style.adjust(79);
const RADIUS = Style.adjust(20);

const styles = StyleSheet.create({
  contentReward: {
    color: "rgb(51,51,51)",
    fontSize: Style.adjust(12),
  } as TextStyle,
  contentRewardWrapper: {
    marginTop: 2,
  } as ViewStyle,
  contentTitle: {
    color: "rgb(51,51,51)",
    fontSize: Style.adjust(17),
  } as TextStyle,
  contentWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(15),
    paddingTop: Style.adjust(
      Platform.select({
        ios: 11,
        android: 4,
      })
    ),
  } as ViewStyle,
  imageBackground: {
    backgroundColor: "rgba(255,255,255,0.5)",
    overflow: "hidden",
    bottom: 0,
    height: FULL_HEIGHT - BOTOM_HEIGHT,
    left: 0,
    position: "absolute",
    right: 0,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
  } as ViewStyle,
  imageBackgroundLocked: {
    backgroundColor: "transparent",
    height: FULL_HEIGHT,
  } as ViewStyle,
  imageNext: {
    height: Style.adjust(25),
    width: Style.adjust(25),
  } as ImageStyle,
  imageWrapper: {
    height: Style.adjust(165),
  } as ViewStyle,
  imageWrapperLocked: {
    alignItems: "center",
    height: FULL_HEIGHT,
    justifyContent: "center",
    borderRadius: RADIUS,
    overflow: "hidden",
  } as ViewStyle,
  imageWrapperNext: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: Style.adjust(55),
  } as ViewStyle,
  lockedImage: {
    marginBottom: Style.adjust(9),
  } as ImageStyle,
  lockedLabel: {
    fontSize: Style.adjust(17),
  } as TextStyle,
  lockedOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: RADIUS,
    bottom: 0,
    height: "auto",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  } as ViewStyle,
  sectionBottomWrapper: {
    backgroundColor: "rgba(255,255,255,0.9)",
    flexDirection: "row",
    height: BOTOM_HEIGHT,
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    overflow: "hidden",
  } as ViewStyle,
  wrapper: {
    maxHeight: FULL_HEIGHT,
    justifyContent: "flex-end",
    marginTop: Style.adjust(26),
    width: Style.adjust(165),
    borderRadius: RADIUS,
  } as ViewStyle,
  remoteImage: {
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
