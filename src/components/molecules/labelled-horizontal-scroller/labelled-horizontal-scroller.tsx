import React, { memo, useEffect, useMemo, useState } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { FlatList, Image, Loading } from "@atoms";
import { Colours, Style } from "@styles";
import { CHOICE_WIDTH, COMPONENT_HEIGHT } from "./styles";
import { renderItem } from "./renderItem";
import { Label } from "./label";
import { useScrollHandler } from "./useScrollHandler";
import Pressable from "../pressable/pressable";
import { DATE_PICKER, EDIT_BUTTON } from "@ids";

interface Props {
  label: string;
  items: Array<{ label: string; value: number }>;
  onIndexChange: (index: number) => void;
  activeValue: number;
  style?: ViewStyle;
  buttonIconUrl: string;
  onPressListViewCallback: () => void;
}

const LabelledHorizontalScroller = (props: Props) => {
  const { label, items, onIndexChange, activeValue, style, buttonIconUrl, onPressListViewCallback } = props;
  const snapToOffsets = useMemo(() => Array.from({ length: items.length }).map((_, i) => i * CHOICE_WIDTH), [items]);
  const { listRef, scrollX, handleScroll, handleMomentumScrollEnd, handleScrollEndDrag, handleTouchStart } =
    useScrollHandler({
      items,
      onIndexChange,
      activeValue,
    });
  const [showList, setShowList] = useState(false);
  const activeValueIndex = items.findIndex((item) => item.value === activeValue);
  const [hasInitialised, setHasInitialised] = useState(false);
  useEffect(() => {
    if (!showList) {
      return;
    }

    const initializationDelay = setTimeout(() => {
      setHasInitialised(true);
    }, 1000);

    return () => clearTimeout(initializationDelay);
  }, [showList]);
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
          windowSize={100}
          testID={DATE_PICKER}
        />
        {hasInitialised ? null : (
          <View style={StyleSheet.flatten([styles.baseOverlay, styles.loadingWrapper])}>
            <Loading />
          </View>
        )}
        {showList ? null : (
          <Pressable
            delay={1000}
            style={styles.baseOverlay}
            onPress={() => {
              setShowList(true);
              onIndexChange(activeValueIndex > -1 ? activeValueIndex : 0);
              if (onPressListViewCallback) {
                onPressListViewCallback();
              }
            }}
            testID={EDIT_BUTTON}
          >
            <Image width={Style.adjust(24)} source={{ uri: buttonIconUrl }} />
          </Pressable>
        )}
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
    paddingVertical: Style.adjust(8),
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: Colours.neutral.white,
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
    paddingStart: CHOICE_WIDTH,
    paddingEnd: CHOICE_WIDTH,
  } as ViewStyle,
  loadingWrapper: {
    paddingEnd: Style.adjust(20),
  } as ViewStyle,
  baseOverlay: {
    width: CHOICE_WIDTH * 3,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "white",
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
