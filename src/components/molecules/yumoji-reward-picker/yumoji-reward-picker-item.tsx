import { GlowingSpinner, Image } from "@atoms";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo } from "react";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { PressableWithDelay } from "..";

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
      alignItems: "center",
      width: Style.adjust(150),
      justifyContent: "center",
      height: Style.adjust(150),
      opacity: withTiming(opacity),
      paddingVertical: Style.adjust(16),
      transform: [{ scale: withTiming(scale) }],
    };
  });

  return (
    <PressableWithDelay onPress={onPress} delay={0}>
      <Animated.View style={style}>
        {isActive || noneSelected ? <GlowingSpinner size={150} /> : null}
        <Image source={image} width={Style.adjust(100)} height={Style.adjust(100)} suppressLoadingUi={true} />
      </Animated.View>
    </PressableWithDelay>
  );
};

export default memo(YumojiRewardPickerItem);
