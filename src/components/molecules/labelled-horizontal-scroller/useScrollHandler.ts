import { useEffect, useRef, useState } from "react";
import { Animated, NativeScrollEvent, NativeSyntheticEvent, FlatList as RNFlatList } from "react-native";
import { CHOICE_WIDTH } from "./styles";
import { DETOX_ENABLED } from "@services/socket";

interface UseScrollHandler {
  items: Array<{ label: string; value: number }>;
  onIndexChange: (index: number) => void;
  activeValue: number;
}

export function useScrollHandler({ items, onIndexChange, activeValue }: UseScrollHandler) {
  const listRef = useRef(null as RNFlatList);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);
  const willTriggerOnIndexChangeRef = useRef(false);

  const updateCursor = (idx: number) => {
    if (listRef.current?.scrollToIndex) {
      listRef.current.scrollToOffset({ offset: CHOICE_WIDTH * idx, animated: !DETOX_ENABLED });
    }
  };

  useInitialiseActiveIndex({ items, setActiveIndex, activeValue, updateCursor });

  useEffect(() => {
    const localActiveIndex = items.findIndex(({ value }) => value === activeValue);
    setActiveIndex(localActiveIndex);

    updateCursor(localActiveIndex);
  }, [activeValue]);

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: true,
  });

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (willTriggerOnIndexChangeRef.current) {
      const idx = Math.round(event.nativeEvent.contentOffset.x / CHOICE_WIDTH);
      setActiveIndex(idx);
      onIndexChange(idx);
    }

    willTriggerOnIndexChangeRef.current = false;
  };

  const handleTouchStart = () => {
    willTriggerOnIndexChangeRef.current = true;
  };

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (event.nativeEvent.velocity.x) {
      /**
       * will be handled by handleMomentumScrollEnd
       */
      return null;
    }

    const idx = Math.round(event.nativeEvent.contentOffset.x / CHOICE_WIDTH);

    if (willTriggerOnIndexChangeRef.current) {
      onIndexChange(idx);
    }

    willTriggerOnIndexChangeRef.current = false;
  };

  return {
    listRef,
    activeIndex,
    handleScroll,
    handleMomentumScrollEnd,
    handleTouchStart,
    handleScrollEndDrag,
    scrollX,
  };
}

const GRACE_PERIOD_MS = 2000;
interface UseInitialiseActiveIndex {
  updateCursor: (index: number) => void;
  setActiveIndex: (index: number) => void;
  items: Array<{ label: string; value: number }>;
  activeValue: number;
}
function useInitialiseActiveIndex({ updateCursor, setActiveIndex, items, activeValue }: UseInitialiseActiveIndex) {
  const hasInitialised = useRef(false);
  const gracePeriod = useRef(null);

  useEffect(() => {
    clearTimeout(gracePeriod.current);
    gracePeriod.current = setTimeout(() => {
      if (!hasInitialised.current && !!activeValue) {
        const localActiveIndex = items.findIndex(({ value }) => value === activeValue);
        setActiveIndex(localActiveIndex);
        updateCursor(localActiveIndex);

        hasInitialised.current = true;
      }
    }, GRACE_PERIOD_MS);

    return () => clearTimeout(gracePeriod.current);
  }, [activeValue]);
}
