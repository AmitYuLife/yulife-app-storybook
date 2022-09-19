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
      avatar: {
        position: "absolute",
        margin: 5,
        paddingTop: AVATAR_RADIUS,
        width: AVATAR_RADIUS - 4,
        height: AVATAR_RADIUS - 4,
        borderRadius: AVATAR_RADIUS / 2 - 2,
        transform: scale ? [{ scale }] : undefined,
        overflow: "hidden",
      } as Animated.WithAnimatedObject<ImageStyle>,
      pin: {
        transform: scale ? [{ scale }] : undefined,
      } as Animated.WithAnimatedObject<ImageStyle>,
    }),
    []
  );
  return (
    <View style={styles.containerStyle}>
      <Animated.Image width={YUMOJI_WIDTH} height={YUMOJI_HEIGHT} source={YUMOJI_PIN} style={styles.pin} />
      <Animated.Image style={styles.avatar} resizeMode="center" width={AVATAR_RADIUS - 2} source={avatar} />
    </View>
  );
});

export default EOTWYumojiIcon;
