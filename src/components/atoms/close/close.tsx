import { BUTTON_CLOSE } from "@ids";
import * as React from "react";
import { Image, Platform, StyleSheet, TouchableOpacity, TouchableWithoutFeedbackProps, ViewStyle } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../styles";

const getTop = () => {
  if (isIphoneX()) {
    return 55;
  }

  if (Platform.OS === "ios") {
    return 30;
  }

  return 15;
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.SCALE_UP_AND_DOWN(10),
    position: "absolute",
    right: Style.SCALE_UP_AND_DOWN(5),
    top: Style.SCALE_UP_AND_DOWN(getTop()),
  } as ViewStyle,
});

const Close: React.SFC<TouchableWithoutFeedbackProps> = ({ onPress, style = {} }) => (
  <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress} testID={BUTTON_CLOSE}>
    <Image source={require("../../../../assets/icons/close.png")} />
  </TouchableOpacity>
);

export default Close;
