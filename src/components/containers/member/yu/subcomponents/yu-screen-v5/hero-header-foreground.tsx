import React, { FC, memo, useContext, useMemo } from "react";
import { Animated, Image, ImageSourcePropType, View } from "react-native";
import { YuScreenContext } from "../../context/yu-screen.context";
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

  const memoizedStyles = useMemo(() => {
    return {
      wrapper: { ...styles.foregroundWrapper, transform: [{ translateY }] },
      yumojiWrapper: { ...styles.yumojiWrapper, opacity: yumojiOpacity, transform: [{ scale: yumojiScale }] },
    };
  }, []);

  return (
    <View style={styles.foregroundContainer}>
      <View style={styles.bottomHider}>
        <Animated.View style={memoizedStyles.wrapper}>
          <Image style={styles.platformImage} source={platformImage} {...PLATFORM_SIZE} />
          <View style={styles.platformFill} />
          <View style={styles.offsetFill} />
        </Animated.View>
      </View>
      {!yumojiRemoteUrl ? null : (
        <Animated.View style={memoizedStyles.yumojiWrapper}>
          <YumojiAvatar uri={yumojiRemoteUrl} />
        </Animated.View>
      )}
    </View>
  );
});
