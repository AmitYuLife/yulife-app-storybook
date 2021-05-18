import { StyleSheet, ViewStyle, Platform } from "react-native";
import { Style } from "@styles";
import media from "@styles/media";

const marginTop = Platform.select({
  ios: Style.adjust(40),
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: 0,
      },
    ],
    Style.adjust(40)
  ),
});

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop,
  } as ViewStyle,
});
