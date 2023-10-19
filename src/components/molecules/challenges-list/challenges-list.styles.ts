import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../styles";

const styles = StyleSheet.create({
  leftColumnWrapper: {
    marginRight: 8,
  } as ViewStyle,
  rightColumnWrapper: {
    marginTop: 37,
    marginLeft: 8,
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  scrollView: {
    height: Style.DEVICE_HEIGHT,
    width: "100%",
  } as ViewStyle,
  contentContainer: { paddingBottom: Style.SCALE_UP_AND_DOWN(30) } as ViewStyle,
});

export default styles;
