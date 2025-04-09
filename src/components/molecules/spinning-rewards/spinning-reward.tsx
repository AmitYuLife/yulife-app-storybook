import { Image } from "@atoms";
import { SPINNING_REWARD_ITEMS } from "@ids";
import { Style } from "@styles";
import { ImageSource } from "expo-image";
import { memo } from "react";
import Animated, { SharedValue, useAnimatedStyle, ZoomIn } from "react-native-reanimated";

interface ISpinningRewardProps {
  image: ImageSource;
  radius: SharedValue<number>;
  index: number;
  offset: number;
  time: SharedValue<number>;
}

const CIRCLE_CENTER = { x: Style.DEVICE_WIDTH / 2, y: Style.DEVICE_HEIGHT / 2 };
const IMAGE_SIZE = 70;

const SpinningReward = ({ image, time, offset, index, radius }: ISpinningRewardProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - wrong reanimated types
  const animatedStyle = useAnimatedStyle(() => {
    const theta = (time.value + offset) * 2 * Math.PI;

    const x = CIRCLE_CENTER.x + radius.value * Math.cos(theta);
    const y = CIRCLE_CENTER.y + radius.value * Math.sin(theta);

    return {
      position: "absolute",
      opacity: 0.5,
      transform: [{ translateX: x - CIRCLE_CENTER.x }, { translateY: y - CIRCLE_CENTER.y }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Animated.View entering={ZoomIn.delay(index * 100).duration(600)} key={index}>
        <Image
          source={image}
          width={Style.adjust(IMAGE_SIZE)}
          height={Style.adjust(IMAGE_SIZE)}
          suppressLoadingUi={true}
          testID={SPINNING_REWARD_ITEMS(index)}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default memo(SpinningReward);
