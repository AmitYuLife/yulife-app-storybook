import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  Animated,
  StyleSheet,
  ViewStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";
import { getInactiveTextOpacityValue, getActiveTextOpacityValue } from "../scroll-picker.animation";
import { ITEM_HEIGHT, WRAPPER_HEIGHT } from "../scroll-picker.styles";
import { ItemText, Wrapper } from "./item-text";
import { Overlays } from "./overlays";
import { Style } from "@styles";
import { Placeholder } from "./placeholder";
import { Item } from "../scroll-picker-modal";

const ANDROID_SAFEGUARD = 0.01;

interface Props {
  items: Item[];
  onIndexChange: (value: number) => void;
  defaultIndex: number;
}
export const Picker = ({ items = [], onIndexChange, defaultIndex = 0 }: Props) => {
  const listRef = useRef<ScrollView>(null);
  const scrollY = useRef(new Animated.Value(0));
  const scrollToDefaultIndexDelay = useRef(null);

  useEffect(() => {
    onIndexChange(defaultIndex);

    scrollToDefaultIndexDelay.current = setTimeout(() => {
      listRef.current.scrollTo({ y: defaultIndex * ITEM_HEIGHT, animated: false });
    }, 0);

    return () => clearTimeout(scrollToDefaultIndexDelay.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleSwipe = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = event.nativeEvent.contentOffset;
    let newIndex = Math.round(y ? y / ITEM_HEIGHT + ANDROID_SAFEGUARD : 0);

    if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    if (newIndex < 0) {
      newIndex = 0;
    }

    if (onIndexChange) {
      onIndexChange(newIndex);
    }

    return newIndex;
  };

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY.current } } }], {
    useNativeDriver: true,
  });

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const hasMomentum = event.nativeEvent.velocity.y;

    if (hasMomentum) {
      // let handleMomentumScrollEnd handle
      return;
    }

    const activeIndex = handleSwipe(event);
    listRef.current.scrollTo({ y: activeIndex * ITEM_HEIGHT });
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const activeIndex = handleSwipe(event);
    listRef.current.scrollTo({ y: activeIndex * ITEM_HEIGHT, animated: false });
  };

  return (
    <View style={styles.wrapper}>
      <Animated.ScrollView
        ref={listRef}
        scrollEventThrottle={16}
        onScrollEndDrag={handleScrollEndDrag}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}
      >
        <Placeholder />
        {items.map((item: Item, index: number) => (
          <Wrapper key={index}>
            <ItemText
              opacity={getInactiveTextOpacityValue({ scrollY: scrollY.current, index, itemHeight: ITEM_HEIGHT })}
            >
              {item.label}
            </ItemText>
            <ItemText
              opacity={getActiveTextOpacityValue({ scrollY: scrollY.current, index, itemHeight: ITEM_HEIGHT })}
              active={true}
            >
              {item.label}
            </ItemText>
          </Wrapper>
        ))}
        <Placeholder />
      </Animated.ScrollView>
      <Overlays />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: WRAPPER_HEIGHT,
    alignSelf: "center",
    flex: 1,
    marginHorizontal: Style.adjust(16),
  } as ViewStyle,
  scrollWrapper: {
    height: WRAPPER_HEIGHT,
  } as ViewStyle,
});
