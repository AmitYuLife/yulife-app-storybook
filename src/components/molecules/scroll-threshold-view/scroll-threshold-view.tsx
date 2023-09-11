import React, { memo, useRef, useState } from "react";
import { Animated, NativeScrollEvent, ScrollViewProps } from "react-native";

export interface IScrollViewProps extends ScrollViewProps {
  /**
   * The amount a user should scroll (in pixels)
   * before the threshold is reached.
   */
  scrollThreshold: number;
  /**
   * Callback function that triggers once the scroll threshold is reached.
   */
  onThresholdStateChanged: (isThresholdReached: boolean) => void;
}

/**
 * A ScrollView with an additional callback function that triggers once the specified scroll threshold is reached.
 */
const ScrollThresholdView = memo(({ scrollThreshold, onThresholdStateChanged, ...props }: IScrollViewProps) => {
  const scrollY = useRef(new Animated.Value(0))?.current;
  const [isThresholdReached, setIsThresholdReached] = useState<boolean>(false);

  const onScroll = Animated.event<NativeScrollEvent>([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: true,
    listener: ({
      nativeEvent: {
        contentOffset: { y },
      },
    }) => {
      if (!isThresholdReached && y > scrollThreshold) {
        setIsThresholdReached(true);
        onThresholdStateChanged(true);
      }

      if (isThresholdReached && y < scrollThreshold) {
        setIsThresholdReached(false);
        onThresholdStateChanged(false);
      }
    },
  });

  return <Animated.ScrollView onScroll={onScroll} {...props} />;
});

export default ScrollThresholdView;
