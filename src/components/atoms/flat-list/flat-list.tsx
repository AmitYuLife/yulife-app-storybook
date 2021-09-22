import { Style } from "@styles";
import React, { memo, Ref } from "react";
import {
  Animated,
  FlatListProps,
  ViewabilityConfig,
  FlatList as RNFlatList,
  StyleSheet,
  ViewStyle,
} from "react-native";

type Props = FlatListProps<any> & {
  forwardRef?: Ref<RNFlatList>;
};

const _FlatList = ({
  forwardRef,
  horizontal = true,
  directionalLockEnabled = true,
  data,
  renderItem,
  keyExtractor = defaultKeyExtractor,
  viewabilityConfig = defaultViewabilityConfig,
  ...flatListProps
}: Props) => {
  return (
    <Animated.FlatList
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
