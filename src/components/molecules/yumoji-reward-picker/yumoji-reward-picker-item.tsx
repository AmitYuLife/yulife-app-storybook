import { GlowingSpinner, Image } from "@atoms";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo, useMemo } from "react";
import Animated, { FadeIn, useAnimatedStyle, withTiming, ZoomOut } from "react-native-reanimated";
import { Pressable } from "..";
import { StyleSheet } from "react-native";

const YumojiRewardPickerItem = ({
  image,
  onPress,
  isActive,
  noneSelected,
}: {
  isActive: boolean;
  image: ImageSource;
  onPress: () => void;
  noneSelected?: boolean;
}) => {
  const style = useAnimatedStyle(() => {
    const opacity = (() => {
      if (isActive) {
        return 1;
      }

      if (noneSelected) {
        return 0.8;
      }

      return 0.5;
    })();

    const scale = (() => {
      if (isActive) {
        return 1.2;
      }

      if (noneSelected) {
        return 1;
      }

      return 0.9;
    })();

    return {
      opacity: withTiming(opacity),
      transform: [{ scale: withTiming(scale) }],
    };
  });

  const wrapperStyle = useMemo(() => [styles.container, style], [style]);
  return (
    <Pressable delay={1000} onPress={onPress}>
      <Animated.View style={wrapperStyle}>
        {isActive || noneSelected ? (
          <Animated.View style={styles.glowContainer} entering={FadeIn.duration(600)} exiting={ZoomOut.duration(600)}>
            <GlowingSpinner size={Style.adjust(150)} />
          </Animated.View>
        ) : null}
        <Image source={image} width={Style.adjust(100)} height={Style.adjust(100)} suppressLoadingUi={true} />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(150),
    height: Style.adjust(150),
  },
  glowContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default memo(YumojiRewardPickerItem);
