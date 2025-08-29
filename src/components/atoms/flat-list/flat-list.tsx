import { Style, StyleSheet } from "@styles";
import React, { memo, Ref, useEffect, useState } from "react";
import {
  Animated,
  FlatListProps,
  ViewabilityConfig,
  FlatList as RNFlatList,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

type Props = FlatListProps<any> & {
  forwardRef?: Ref<RNFlatList>;
  /**
   * throttle is introduced to protect against destructive user behavior
   * especially on use cases where onScroll (e.g. onMomentumScrollEnd, onScrollEndDrag)
   * callbacks are passed and update states that affect the FlatList
   */
  throttleTimeoutMs?: number;
  /**
   * throttle can be safely disabled for FlatList instances
   * that do not need onScroll (e.g. onMomentumScrollEnd, onScrollEndDrag) callbacks
   */
  disableThrottle?: boolean;
};

const _FlatList = ({
  forwardRef,
  horizontal = true,
  directionalLockEnabled = true,
  data,
  renderItem,
  keyExtractor = defaultKeyExtractor,
  viewabilityConfig = defaultViewabilityConfig,
  throttleTimeoutMs = 1000,
  disableThrottle,
  onMomentumScrollEnd,
  onScrollEndDrag,
  ...flatListProps
}: Props) => {
  const [allowInteraction, setAllowInteraction] = useState(true);

  useEffect(() => {
    if (disableThrottle) {
      return;
    }

    let throttleTimeout: ReturnType<typeof setTimeout>;
    if (!allowInteraction) {
      throttleTimeout = setTimeout(() => {
        setAllowInteraction(true);
      }, throttleTimeoutMs);
    }

    return () => clearTimeout(throttleTimeout);
  }, [allowInteraction]);

  const handleScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!disableThrottle) {
      setAllowInteraction(false);
    }

    if (onScrollEndDrag) {
      onScrollEndDrag(e);
    }
  };

  const handleMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!disableThrottle) {
      setAllowInteraction(false);
    }

    if (onMomentumScrollEnd) {
      onMomentumScrollEnd(e);
    }
  };

  return (
    <Animated.FlatList
      scrollEnabled={allowInteraction}
      style={styles.defaultStyle}
      directionalLockEnabled={directionalLockEnabled}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal={horizontal}
      viewabilityConfig={viewabilityConfig}
      ref={forwardRef}
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      onScrollEndDrag={handleScrollEndDrag}
      onMomentumScrollEnd={handleMomentumScrollEnd}
      {...flatListProps}
    />
  );
};

export const FlatList = memo(_FlatList);

const styles = StyleSheet.create({
  defaultStyle: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
});

/**
 * Used to extract a unique key for a given item at the specified index.
 * Key is used for caching and as the react key to track item re-ordering.
 * The default extractor checks item.key, then item.id, and then falls back to using the index, like React does.
 */
function defaultKeyExtractor(_: any, index: number) {
  return index.toString();
}

/**
 *
 */
const defaultViewabilityConfig: ViewabilityConfig = {
  itemVisiblePercentThreshold: 80,
  waitForInteraction: true,
};
