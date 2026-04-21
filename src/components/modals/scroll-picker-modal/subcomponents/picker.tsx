/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import React, { memo, useEffect, useRef } from "react";
import { Animated, ViewStyle, NativeScrollEvent, NativeSyntheticEvent, View, FlatList } from "react-native";
import { ITEM_HEIGHT, WRAPPER_HEIGHT } from "../scroll-picker.styles";
import { Overlays } from "./overlays";
import { Style, StyleSheet } from "@styles";
import { SCROLL_PICKER } from "@ids";
import { renderItem } from "../flatlist-utils/renderItem";
import { IListItem, LIST_ITEM, Item } from "../flatlist-utils/types";
import { getItemLayout } from "../flatlist-utils/getItemLayout";
import { keyExtractor } from "../flatlist-utils/keyExtractor";

const ANDROID_SAFEGUARD = 0.01;

interface Props {
  id: string;
  items: Item[];
  onIndexChange: (value: number) => void;
  defaultIndex: number;
}
export const Picker = memo(({ id, items = [], onIndexChange, defaultIndex = 0 }: Props) => {
  "use no memo";
  const listRef = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0));
  const scrollToDefaultIndexDelay = useRef(null);

  useEffect(() => {
    onIndexChange(defaultIndex);

    scrollToDefaultIndexDelay.current = setTimeout(() => {
      listRef.current.scrollToIndex({ index: defaultIndex, animated: false });
    }, 0);

    return () => clearTimeout(scrollToDefaultIndexDelay.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

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
    listRef.current.scrollToIndex({ index: activeIndex });
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const activeIndex = handleSwipe(event);
    listRef.current.scrollToIndex({ index: activeIndex, animated: false });
  };

  const listData = getListData(items);

  return (
    <View style={styles.wrapper}>
      <Animated.FlatList
        ref={listRef}
        scrollEventThrottle={16}
        onScrollEndDrag={handleScrollEndDrag}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}
        getItemLayout={getItemLayout}
        data={listData}
        renderItem={renderItem({ scrollY: scrollY.current })}
        keyExtractor={keyExtractor}
        testID={SCROLL_PICKER(id)}
      />
      <Overlays />
    </View>
  );
});

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

const getListData = (items: Props["items"]) => {
  const list: IListItem[] = [{ type: LIST_ITEM.PLACEHOLDER, data: "top" }];

  for (const item of items) {
    list.push({
      type: LIST_ITEM.ITEM,
      data: item,
    });
  }

  list.push({ type: LIST_ITEM.PLACEHOLDER, data: "bottom" });

  return list;
};
