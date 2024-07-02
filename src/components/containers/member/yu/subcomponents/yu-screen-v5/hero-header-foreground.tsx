import React, { FC, memo, useContext } from "react";
import { Animated, Image, ImageSourcePropType, View } from "react-native";
import { YuScreenContext } from "../../context/yu-screen.context";
import { Style } from "@styles";
import { YumojiAvatar } from "./yumoji-avatar";
import { styles } from "./hero-header.styles";
import { PLATFORM_SIZE } from "./yu-screen.styles";

interface Props {
  collapsed?: boolean;
  platformImage: ImageSourcePropType;
  yumojiOpacity: Animated.Value;
  yumojiScale: Animated.Value;
  translateY: Animated.Value;
}

export const HeroHeaderForeground: FC<Props> = memo(({ platformImage, yumojiOpacity, yumojiScale, translateY }) => {
  const { yumojiRemoteUrl } = useContext(YuScreenContext);

  const wrapperStyle = [
    styles.foregroundWrapper,
    {
      transform: [{ translateY }],
    },
  ];

  const offsetFillStyle = [
    styles.offsetFill,
    {
      height: Style.adjust(PLATFORM_SIZE.height + 2),
    },
  ];

  const yumojiWrapperStyle = [
    styles.yumojiWrapper,
    {
      opacity: yumojiOpacity,
      transform: [{ scale: yumojiScale }],
    },
  ];

  return (
    <View style={styles.foregroundContainer}>
      <View style={styles.bottomHider}>
        <Animated.View style={wrapperStyle}>
          <Image style={styles.platformImage} source={platformImage} {...PLATFORM_SIZE} />
          <View style={styles.platformFill} />
          <View style={offsetFillStyle} />
        </Animated.View>
      </View>
      <Animated.View style={yumojiWrapperStyle}>
        <YumojiAvatar uri={yumojiRemoteUrl} />
      </Animated.View>
    </View>
  );
});
