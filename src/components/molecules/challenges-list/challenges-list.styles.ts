import { StyleSheet, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../styles";

const scrollViewHeightAdd = isIphoneX() ? 41 : 35;

const styles = StyleSheet.create({
  rightColumnWrapper: {
    marginLeft: "auto",
    marginTop: Style.SCALE_UP_AND_DOWN(37),
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    width: "100%",
  } as ViewStyle,
  scrollView: {
    height: Style.DEVICE_HEIGHT - Style.SCALE_UP_AND_DOWN(134 + scrollViewHeightAdd),
    marginTop: Style.SCALE_UP_AND_DOWN(isIphoneX() ? 65 : 40),
  } as ViewStyle,
  contentContainer: { paddingBottom: Style.SCALE_UP_AND_DOWN(30) } as ViewStyle,
});

export default styles;
