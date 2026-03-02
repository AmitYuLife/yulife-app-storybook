import { Style } from "@styles";
import React, { FC, memo, useMemo } from "react";
import { Animated, ImageSourcePropType, ImageStyle, View, ViewStyle } from "react-native";

export interface IProps {
  avatar: ImageSourcePropType;
  scale?: Animated.Value;
}

const YUMOJI_PIN = require("./assets/planets/yumoji_pin.png");
export const YUMOJI_HEIGHT = Style.adjust(58);
export const YUMOJI_WIDTH = Style.adjust(46);
export const AVATAR_RADIUS = Style.adjust(38);
const EOTWYumojiIcon: FC<IProps> = memo(({ avatar, scale }) => {
  const styles = useMemo(
    () => ({
      containerStyle: {
        alignItems: "center",
        justifyContent: "flex-start",
      } as ViewStyle,
      avatarContainer: {
        position: "absolute",
        margin: 5,
        paddingTop: AVATAR_RADIUS,
        width: AVATAR_RADIUS - 4,
        height: AVATAR_RADIUS - 4,
        borderRadius: AVATAR_RADIUS / 2 - 2,
        transform: scale ? [{ scale }] : undefined,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "flex-start",
      } as Animated.WithAnimatedObject<ViewStyle>,
      avatar: {
        position: "absolute",
        width: AVATAR_RADIUS - 2,
        height: 2.3 * (AVATAR_RADIUS - 4),
        transform: scale ? [{ scale }] : undefined,
      } as Animated.WithAnimatedObject<ImageStyle>,
      pin: {
        transform: scale ? [{ scale }] : undefined,
        width: YUMOJI_WIDTH,
        height: YUMOJI_HEIGHT,
      } as Animated.WithAnimatedObject<ImageStyle>,
    }),
    [scale]
  );
  return (
    <View style={styles.containerStyle}>
      <Animated.Image source={YUMOJI_PIN} style={styles.pin} />
      <Animated.View style={styles.avatarContainer}>
        <Animated.Image style={styles.avatar} resizeMode="center" source={avatar} />
      </Animated.View>
    </View>
  );
});

export default EOTWYumojiIcon;
