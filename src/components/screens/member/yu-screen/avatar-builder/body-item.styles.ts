import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "../../../../../styles";

const defaultStyles = {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
};

export default StyleSheet.create({
  bodyItemWrapper: {
    ...defaultStyles,
    height: Style.SCALE_UP_AND_DOWN(40),
    width: Style.SCALE_UP_AND_DOWN(40),
    marginHorizontal: Style.SCALE_UP_AND_DOWN(9),
  } as ViewStyle,
  bodyItemWrapperSelected: {
    ...defaultStyles,
    height: Style.SCALE_UP_AND_DOWN(50),
    width: Style.SCALE_UP_AND_DOWN(100),
    borderRadius: Style.SCALE_UP_AND_DOWN(30),
    backgroundColor: "#F1F1F1",
    marginHorizontal: Style.SCALE_UP_AND_DOWN(9),
    marginLeft: Style.SCALE_UP_AND_DOWN(0),
  } as ViewStyle,
});
