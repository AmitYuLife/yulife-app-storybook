import { ViewStyle, ImageStyle } from "react-native";
import { Style, TOP_BAR, StyleSheet } from "@styles";

export default StyleSheet.create({
  versusImage: {
    width: 48,
    height: 48,
  } as ImageStyle,
  container: {
    flex: 1,
    justifyContent: "space-between",
  } as ViewStyle,
  titleSection: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 40,
  } as ViewStyle,
  avatarSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: Style.DEVICE_WIDTH,
    alignItems: "center",
  } as ViewStyle,
  versusSection: {
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  } as ViewStyle,
  buttonSection: {
    marginTop: 20,
    marginBottom: 30,
  } as ViewStyle,
  flex50: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  secondaryBtnWrapper: {
    marginTop: 8,
  } as ViewStyle,
  introWrapper: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
