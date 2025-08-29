import { BUTTON_CLOSE } from "@ids";
import * as React from "react";
import { Image, Platform, ViewStyle, ImageStyle } from "react-native";
import { Style, StyleSheet } from "@styles";
import { TouchableOpacityWithDelay } from "@molecules";

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

interface IProps {
  imageStyle?: ImageStyle;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function Close({ onPress, style = {}, imageStyle }: IProps) {
  return (
    <TouchableOpacityWithDelay style={[styles.wrapper, style]} onPress={onPress} testID={BUTTON_CLOSE}>
      <Image style={imageStyle} source={require("@assets/icons/close.png")} />
    </TouchableOpacityWithDelay>
  );
}
