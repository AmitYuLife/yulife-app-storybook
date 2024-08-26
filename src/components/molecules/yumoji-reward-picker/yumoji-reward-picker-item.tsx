import { GlowingSpinner, Image } from "@atoms";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo, useMemo } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { PressableWithDelay } from "..";
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
    <PressableWithDelay onPress={onPress} delay={0}>
      <Animated.View style={wrapperStyle}>
        {isActive || noneSelected ? <GlowingSpinner size={150} /> : null}
        <Image source={image} width={Style.adjust(100)} height={Style.adjust(100)} suppressLoadingUi={true} />
      </Animated.View>
    </PressableWithDelay>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(150),
    height: Style.adjust(150),
    paddingVertical: Style.adjust(16),
  },
});

export default memo(YumojiRewardPickerItem);
