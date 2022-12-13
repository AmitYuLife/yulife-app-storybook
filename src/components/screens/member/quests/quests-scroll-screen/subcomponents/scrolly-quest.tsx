import * as React from "react";
import { View } from "react-native";
import { IMapSlice, MAP_SLICE_HEIGHT } from "../assets";
import { FlashList, FlashListProps, ListRenderItemInfo } from "@shopify/flash-list";

import MapSlice from "./map-slice";
import styles from "../quests-screen.styles";
import { FC, memo, useCallback } from "react";
import { Style } from "@styles";

export interface IScrollQuestProps {
  data: IMapSlice[];
  initialScrollIndex: number;
  onViewableItemsChanged?: FlashListProps<IMapSlice>["onViewableItemsChanged"];
  setFlatListRef: (ref: FlashList<IMapSlice>) => void;
  offsets: number[];
}

const VIEWABILITY_CONFIG = {
  minimumViewTime: 400,
  viewAreaCoveragePercentThreshold: 95,
  waitForInteraction: true,
};

const ScrollyQuest: FC<IScrollQuestProps> = ({
  data,
  initialScrollIndex,
  onViewableItemsChanged,
  setFlatListRef,
  offsets,
}) => {
  const keyExtractor = useCallback((level: IMapSlice) => level.id, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IMapSlice>) => {
    return <MapSlice {...item} />;
  }, []);

  return (
    <View style={styles.scrollViewWrapper}>
      <FlashList
        data={data}
        drawDistance={Style.DEVICE_HEIGHT}
        inverted={true}
        initialScrollIndex={initialScrollIndex}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ref={setFlatListRef}
        estimatedItemSize={MAP_SLICE_HEIGHT}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={VIEWABILITY_CONFIG}
        decelerationRate={"fast"}
        snapToOffsets={offsets}
        directionalLockEnabled={true}
      />
    </View>
  );
};

export default memo(
  ScrollyQuest,
  (prevProps, nextProps) =>
    prevProps.initialScrollIndex === nextProps.initialScrollIndex &&
    prevProps.data.length === nextProps.data.length &&
    prevProps.offsets.length === nextProps.offsets.length
);
