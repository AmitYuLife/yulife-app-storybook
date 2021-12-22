import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export const useScrollHandlers = ({ items, itemWidth, onScrollEnd }: any) => {
  const [canScroll, setCanScroll] = useState(false);

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (event.nativeEvent.velocity.x) {
      /**
       * will be handled by handleMomentumScrollEnd
       */
      return null;
    }

    if (canScroll) {
      handleScrollEnd(event.nativeEvent.contentOffset.x);
    }

    setCanScroll(false);
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (canScroll) {
      handleScrollEnd(event.nativeEvent.contentOffset.x);
    }

    setCanScroll(false);
  };

  const handleScrollEnd = (contentOffsetX: number) => {
    let index = Math.round(contentOffsetX / itemWidth);
    if (index > items.length - 1) {
      index = items.length - 1;
    }

    if (index < 0) {
      index = 0;
    }

    onScrollEnd(index);
  };

  const handleScrollBeginDrag = () => {
    setCanScroll(true);
  };

  return { canScroll, setCanScroll, handleScrollEndDrag, handleMomentumScrollEnd, handleScrollBeginDrag };
};
