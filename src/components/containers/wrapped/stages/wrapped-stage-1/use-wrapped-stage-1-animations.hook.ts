import { Style } from "@styles";
import { Easing, useAnimatedStyle, withDelay, withSequence, withTiming } from "react-native-reanimated";

interface IWrappedStage1AnimationsArgs {
  isExiting: boolean;
}

export const WRAPPED_1_YUGI_SCALE = 0.5;
export const WRAPPED_1_YUGI_ASPECT = 1025 / 481;
export const WRAPPED_1_GRASS_ASPECT = 890 / 1080;
export const WRAPPED_1_WATER_ASPECT = 811 / 1080;

export const useWrappedStage1Animations = ({ isExiting }: IWrappedStage1AnimationsArgs) => {
  const grassHeight = Style.DEVICE_WIDTH * WRAPPED_1_GRASS_ASPECT;
  const waterHeight = Style.DEVICE_WIDTH * WRAPPED_1_WATER_ASPECT;
  const yugiHeight = Style.DEVICE_WIDTH * WRAPPED_1_YUGI_ASPECT * WRAPPED_1_YUGI_SCALE;

  const grassStyle = useAnimatedStyle(() => {
    return {
      width: Style.DEVICE_WIDTH,
      height: grassHeight,
      position: "absolute",
      bottom: withSequence(
        withTiming(-grassHeight),
        withTiming(-grassHeight + 250, { duration: 900, easing: Easing.inOut(Easing.ease) })
      ),
    };
  });

  const waterStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      height: waterHeight * 1.2,
      width: Style.DEVICE_WIDTH * 1.2,
      left: -Style.DEVICE_WIDTH * 0.1,
      bottom: withSequence(
        withTiming(-waterHeight * 1.2),
        withTiming(-waterHeight * 1.2 + 485, { duration: 1200, easing: Easing.inOut(Easing.ease) })
      ),
    };
  });

  const wrapperStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      height: "100%",
      transform: [
        {
          translateY: isExiting
            ? withTiming(Style.SCREEN_HEIGHT, { duration: 2000 })
            : withSequence(
                withTiming(0),
                withDelay(300, withTiming(0)),
                withTiming(100, { duration: 1500, easing: Easing.inOut(Easing.ease) })
              ),
        },
      ],
    };
  });

  const yugiStyle = useAnimatedStyle(() => {
    const yugiWidth = Style.DEVICE_WIDTH * WRAPPED_1_YUGI_SCALE;

    return {
      bottom: Style.DEVICE_HEIGHT * 0.3,
      height: yugiHeight,
      position: "absolute",
      width: Style.DEVICE_WIDTH * WRAPPED_1_YUGI_SCALE,
      right: withSequence(
        withTiming(-yugiWidth),
        withDelay(1800, withTiming(-yugiWidth)),
        withTiming(-yugiWidth * 0.1, { duration: 1500, easing: Easing.out(Easing.ease) })
      ),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      height: "100%",
      backgroundColor: "#FFFABF",
      opacity: withDelay(1000, withTiming(isExiting ? 0 : 1, { duration: 1000 })),
    };
  });

  return {
    yugiStyle,
    grassStyle,
    waterStyle,
    wrapperStyle,
    containerStyle,
  };
};
