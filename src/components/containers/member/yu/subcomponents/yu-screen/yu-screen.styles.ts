import { Style, TOP_BAR } from "@styles";
import media from "@styles/media";
import { Platform, StyleSheet } from "react-native";

const PAD_TOP = Platform.select({
  ios: media.select(
    [
      {
        condition: Style.hasNotch,
        value: TOP_BAR.HEIGHT + Style.adjust(8),
      },
    ],
    TOP_BAR.HEIGHT + Style.adjust(22)
  ),
  android: TOP_BAR.HEIGHT + Style.adjust(20),
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  },
  scrollView: {
    width: Style.DEVICE_WIDTH,
  },
  userInfoWrapper: {
    alignItems: "center",
  },
});

export { PAD_TOP, styles };
