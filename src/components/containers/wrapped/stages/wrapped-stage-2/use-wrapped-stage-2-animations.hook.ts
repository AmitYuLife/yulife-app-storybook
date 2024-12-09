import { Style } from "@styles";
import {
  Easing,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { WRAPPED_STAGE_2_WRAPPER_OFFSET } from "./wrapped-stage-2.constants";

interface IUseWrappedStage2AnimationsArgs {
  coralHeight: number;
  isExiting: boolean;
}

const WATER_ASPECT = 978 / 1080;
const CORAL_DURATION = 1500;

export const useWrappedStage2Animations = ({ coralHeight, isExiting }: IUseWrappedStage2AnimationsArgs) => {
  const waterHeight = Style.DEVICE_WIDTH * WATER_ASPECT;

  const coralStyle = useAnimatedStyle(() => {
    const easing = Easing.inOut(Easing.bezierFn(0.12, -0.05, 0.74, 0.42));
    return {
      width: Style.DEVICE_WIDTH,
      height: coralHeight,
      position: "absolute",
      bottom: withSequence(
        withTiming(-coralHeight + 10),
        withDelay(180, withTiming(-coralHeight)),
        withTiming(waterHeight * 0.25, { duration: CORAL_DURATION + 600, easing: Easing.out(Easing.ease) })
      ),
      transform: [
        {
          translateY: withRepeat(
            withSequence(
              withTiming(0, { duration: CORAL_DURATION, easing }),
              withTiming(-10, { duration: CORAL_DURATION, easing })
            ),
            -1,
            true
          ),
        },
      ],
    };
  });

  const waterStyle = useAnimatedStyle(() => {
    return {
      width: Style.DEVICE_WIDTH * 1.2,
      left: -Style.DEVICE_WIDTH * 0.1,
      height: waterHeight * 1.2,
      position: "absolute",
      top: withSequence(
        withTiming(-waterHeight),
        withSpring(Style.DEVICE_HEIGHT - waterHeight * 0.6, { damping: 10, stiffness: 10 })
      ),
    };
  });

  const wrapperStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      position: "absolute",
      height: "100%",
      transform: [
        {
          translateY: isExiting ? withTiming(Style.SCREEN_HEIGHT, { duration: 2000 }) : WRAPPED_STAGE_2_WRAPPER_OFFSET,
        },
      ],
    };
  });

  return {
    coralStyle,
    waterStyle,
    wrapperStyle,
  };
};
