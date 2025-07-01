import { noop } from "@utils";
import { isNil } from "lodash";
import { useCallback } from "react";
import { FlatList } from "react-native";
import { useTimeout } from "./useTimeout";

interface UseScrollToIndexOptions {
  scrollToIndex?: number;
  dataLength: number;
  isLoading?: boolean;
  scrollDelay?: number;
  animated?: boolean;
  viewPosition?: number;
}

export const useScrollToIndex = <T>(
  flatListRef: React.RefObject<FlatList<T>>,
  {
    scrollToIndex,
    dataLength,
    isLoading = false,
    scrollDelay = 100,
    animated = true,
    viewPosition = 0.5,
  }: UseScrollToIndexOptions
) => {
  const scrollToIndexInternal = useCallback(
    (index: number) => {
      flatListRef.current?.scrollToIndex({
        index,
        animated,
        viewPosition,
      });
    },
    [flatListRef, animated, viewPosition, scrollToIndex, dataLength, isLoading, scrollDelay]
  );

  const canScroll = !isNil(scrollToIndex) && scrollToIndex >= 0 && scrollToIndex < dataLength && !isLoading;

  useTimeout(() => scrollToIndexInternal(scrollToIndex), scrollDelay, canScroll);

  return { handleScrollToIndexFailed: noop };
};
