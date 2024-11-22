import { useState } from "react";
import {
  clamp,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { MAX_SCROLL_HEIGHT, TITLE_Y_POSITION } from "./item-details-constants";

const RAYS_OFFSET_Y = -35;
const REWARD_CONTAINER_MAX_Y = -35;
const HEADER_TOP_CONTAINER_MAX_Y = -239;

export const useItemDetailsAnimations = () => {
  const scrollPercentage = useSharedValue(0);
  const [showSmallTitle, setShowSmallTitle] = useState(false);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    "worklet";

    scrollPercentage.value = clamp(interpolate(event.contentOffset.y, [0, MAX_SCROLL_HEIGHT], [0, 1]), -1, 1);
    if (!showSmallTitle && event.contentOffset.y > TITLE_Y_POSITION) {
      runOnJS(setShowSmallTitle)(true);
    } else if (showSmallTitle && event.contentOffset.y < TITLE_Y_POSITION) {
      runOnJS(setShowSmallTitle)(false);
    }
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - wrong reanimated types
  const rewardContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollPercentage.value, [0, 1], [0, REWARD_CONTAINER_MAX_Y]),
        },
        {
          scale: interpolate(scrollPercentage.value, [0, 1], [1, 0.7]),
        },
      ],
    };
  });

  const headerTopContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollPercentage.value, [0, 1], [0, HEADER_TOP_CONTAINER_MAX_Y]),
        },
      ],
    };
  });

  const raysContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollPercentage.value, [0, 1], [0.5, 0.2]),
      transform: [
        {
          translateY: interpolate(scrollPercentage.value, [0, 1], [0, RAYS_OFFSET_Y]),
        },
      ],
    };
  });

  const shadowStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollPercentage.value, [0.4, 1], [0, 1]),
    };
  });

  return {
    scrollHandler,
    showSmallTitle,
    raysContainerStyle,
    rewardContainerStyle,
    headerTopContainerStyle,
    shadowStyle,
  };
};
