import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    height: Style.adjust(165),
    flexDirection: "row",
    paddingLeft: Style.adjust(21),
    paddingRight: Style.adjust(21),
  } as ViewStyle,
  transparentView: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: (Style.DEVICE_WIDTH - 42) / 3,
    height: "100%",
    position: "absolute",
  } as ViewStyle,
  componentWrapper: {
    width: (Style.DEVICE_WIDTH - 42) / 3,
    justifyContent: "center",
  } as ViewStyle,
  armourWrapper: {
    height: Style.adjust(64),
    width: Style.adjust(64),
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: Style.adjust(20),
    marginTop: Style.adjust(10),
  } as ViewStyle,
  armourWrapperActive: {
    height: Style.adjust(80),
    width: Style.adjust(80),
    borderRadius: 10,
    alignSelf: "center",
    marginTop: Style.adjust(10),
    marginBottom: Style.adjust(15),
  } as ViewStyle,
  packageText: {
    fontSize: 14,
    lineHeight: 15,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    textAlign: "center",
  } as TextStyle,
  packageTextActive: {
    fontSize: 16,
    lineHeight: 15,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    textAlign: "center",
  } as TextStyle,
  selectedBackground: {
    position: "absolute",
    marginRight: 0,
    marginLeft: 0,
    alignSelf: "center",
    height: Style.adjust(133),
    width: Style.adjust(104),
    borderRadius: 19,
  } as ViewStyle,
  selectedBackgroundAbsolute: {
    position: "absolute",
    marginBottom: -30,
    height: Style.adjust(91),
    width: Style.adjust(78),
    borderRadius: 21,
  } as ViewStyle,
  imageActivePackage: {
    height: Style.adjust(80),
    width: Style.adjust(80),
  } as ImageStyle,
  imageActiveEpicPackage: {
    height: Style.adjust(95),
    width: Style.adjust(85),
    marginLeft: Style.adjust(-4),
    marginTop: Style.adjust(-15),
  } as ImageStyle,
  imagePassiveEpicPackage: {
    height: Style.adjust(69),
    width: Style.adjust(64),
    marginTop: -11,
    marginLeft: -3,
  } as ImageStyle,
  imagePassivePackage: {
    height: Style.adjust(64),
    width: Style.adjust(64),
  } as ImageStyle,
});
