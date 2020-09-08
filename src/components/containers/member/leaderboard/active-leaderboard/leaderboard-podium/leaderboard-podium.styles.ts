import { Style } from "@styles";
import { StyleSheet, Platform, ViewStyle } from "react-native";
import { Yumoji } from "@atoms";

export const BODY_AVATAR_HEIGHT = Style.SCALE_UP_AND_DOWN(128.5);
export const BODY_AVATAR_WIDTH = Style.SCALE_UP_AND_DOWN(53);

export const LEADERBOARD_PODIUM_HEIGHT = Platform.select({ ios: Style.SCALE_UP_AND_DOWN(320), android: 328 });

const styles = StyleSheet.create({
  wrapper: {
    height: LEADERBOARD_PODIUM_HEIGHT,
  } as ViewStyle,
  avatarBase: {
    position: "absolute",
    top: 28,
  },
});

const EMPTY_CENTER_POSITION_X = Style.DEVICE_WIDTH / 2 - Yumoji.EMPTY_BODY_AVATAR_WIDTH / 2 + 2;
const CENTER_POSITION_Y = Style.SCALE_UP_AND_DOWN(40);

export const dynamicStyles = StyleSheet.create({
  avatar1: {
    marginTop: CENTER_POSITION_Y + Style.SCALE_UP_AND_DOWN(2),
    marginLeft: Style.SCALE_UP_AND_DOWN(162),
  },
  avatar2: {
    marginTop: CENTER_POSITION_Y + Style.SCALE_UP_AND_DOWN(30),
    marginLeft: Style.SCALE_UP_AND_DOWN(76),
  },
  avatar3: {
    marginTop: CENTER_POSITION_Y + Style.SCALE_UP_AND_DOWN(36),
    marginLeft: Style.SCALE_UP_AND_DOWN(247),
  },
  avatarEmpty1: {
    marginTop: CENTER_POSITION_Y,
    marginLeft: EMPTY_CENTER_POSITION_X,
  },
  avatarEmpty2: {
    marginTop: CENTER_POSITION_Y + 20,
    marginLeft: EMPTY_CENTER_POSITION_X - Style.SCALE_UP_AND_DOWN(80),
  },
  avatarEmpty3: {
    marginTop: CENTER_POSITION_Y + 32,
    marginLeft: EMPTY_CENTER_POSITION_X + Style.SCALE_UP_AND_DOWN(80),
  },
}) as any;

export default styles;
