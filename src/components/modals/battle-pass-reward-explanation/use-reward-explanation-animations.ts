import { useState } from "react";
import {
  clamp,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { MAX_SCROLL_HEIGHT, TITLE_Y_POSITION } from "./battle-pass-reward-explanation-constants";

const RAYS_OFFSET_Y = -35;
const PARALAX_STARS_OFFSET_Y = 70;
const REWARD_CONTAINER_MAX_Y = -35;
const HEADER_TOP_CONTAINER_MAX_Y = -239;

export  const useRewardExplanationAnimations = () => {
  const scrollPercentage = useSharedValue(0);
  const contentOffset = useSharedValue(0);
  const [showSmallTitle, setShowSmallTitle] = useState(false);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    "worklet";

    scrollPercentage.value = clamp(interpolate(event.contentOffset.y, [0, MAX_SCROLL_HEIGHT], [0, 1]), -1, 1);
    contentOffset.value = event.contentOffset.y;
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
          translateY: interpolate(scrollPercentage.value, [0, 1], [0, (HEADER_TOP_CONTAINER_MAX_Y)]),
        },
      ],
    };
  });

  const raysContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollPercentage.value, [0, 1], [0.5, 0.2]),
      transform: [
        {
          translateY: interpolate(scrollPercentage.value, [0, 1], [0, (RAYS_OFFSET_Y)]),
        },
      ],
    };
  });

  const paralaxStarsStyle = useAnimatedStyle(() => {
    return {
      top: PARALAX_STARS_OFFSET_Y,
      opacity: 0.8,
      width: "100%",
      height: "100%",
      position: "absolute",
      alignItems: "center",
      transform: [{ translateY: contentOffset.value / 2 }],
    };
  });

  return {
    scrollHandler,
    showSmallTitle,
    paralaxStarsStyle,
    raysContainerStyle,
    rewardContainerStyle,
    headerTopContainerStyle,
  };
};
