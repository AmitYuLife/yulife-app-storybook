import React, { memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { FlatList } from "@atoms";
import { Colours, Style } from "@styles";
import { CHOICE_WIDTH, COMPONENT_HEIGHT } from "./styles";
import { renderItem } from "./renderItem";
import { Label } from "./label";
import { useScrollHandler } from "./useScrollHandler";

interface Props {
  label: string;
  items: Array<{ label: string; value: number }>;
  onIndexChange: (index: number) => void;
  activeValue: number;
  style?: ViewStyle;
}

const LabelledHorizontalScroller = (props: Props) => {
  const { label, items, onIndexChange, activeValue, style } = props;
  const snapToOffsets = useMemo(() => Array.from({ length: items.length }).map((_, i) => i * CHOICE_WIDTH), [items]);
  const {
    listRef,
    scrollX,
    handleScroll,
    handleMomentumScrollEnd,
    handleScrollEndDrag,
    handleTouchStart,
  } = useScrollHandler({
    items,
    onIndexChange,
    activeValue,
  });

  return (
    <View style={[styles.wrapper, style]}>
      <Label label={label} />
      <View style={styles.flatListWrapper}>
        <FlatList
          forwardRef={listRef}
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          onScrollEndDrag={handleScrollEndDrag}
          onTouchStart={handleTouchStart}
          data={items}
          renderItem={renderItem({ scrollX })}
          snapToOffsets={snapToOffsets}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
};

export default memo(LabelledHorizontalScroller);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderColor: Colours.neutral.n100,
    paddingHorizontal: Style.adjust(26),
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle,
  flatList: {
    width: CHOICE_WIDTH * 3,
    height: COMPONENT_HEIGHT,
  } as ViewStyle,
  flatListWrapper: {
    width: CHOICE_WIDTH * 3,
    overflow: "hidden",
  } as ViewStyle,
  contentContainer: {
    paddingLeft: CHOICE_WIDTH,
    paddingRight: CHOICE_WIDTH,
  } as ViewStyle,
});
