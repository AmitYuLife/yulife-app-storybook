import { BUTTON_CLOSE } from "@ids";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { Style } from "@styles";

const getTop = () => {
  if (Style.isAnyIphoneX()) {
    return 55;
  }

  if (Platform.OS === "ios") {
    return 30;
  }

  return 15;
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(10),
    position: "absolute",
    right: Style.adjust(5),
    top: Style.adjust(getTop()),
  } as ViewStyle,
});

interface IProps extends TouchableWithoutFeedbackProps {
  imageStyle?: ImageStyle;
}

export default function Close({ onPress, style = {}, imageStyle }: IProps) {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress} testID={BUTTON_CLOSE}>
      <Image style={imageStyle} source={require("../../../../assets/icons/close.png")} />
    </TouchableOpacity>
  );
}
