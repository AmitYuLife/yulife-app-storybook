import React, { useEffect, useState, FC, memo, useCallback } from "react";
import { AccessibilityInfo, View } from "react-native";
import { IMapSlice, MAP_SLICE_HEIGHT } from "../assets";
import { FlashList, FlashListProps, ListRenderItemInfo } from "@shopify/flash-list";
import MapSlice from "./map-slice";
import MapSliceAccessibility from "./map-slice-accessibility";
import styles from "../quests-screen.styles";
import { QuestsMapContext, QuestsMapLevel } from "../quests.context";
import FastImage from "react-native-fast-image";
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
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const { formattedLevels } = React.useContext(QuestsMapContext);
  const keyExtractor = useCallback((level: IMapSlice) => level.id, []);

  useEffect(() => {
    (async () => {
      const screenReaderEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      if (screenReaderEnabled) {
        setIsScreenReaderEnabled(screenReaderEnabled);
      }
    })();
  }, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IMapSlice>) => {
    return <MapSlice {...item} />;
  }, []);

  const currentLevelIndex = formattedLevels.findIndex((level: QuestsMapLevel) => level.isNext);

  if (isScreenReaderEnabled) {
    return (
      <View style={styles.accessibilityMapWrapper}>
        <FastImage source={require("@assets/daily-screen/planets/bright/forest.png")} style={styles.image} />
        <View accessibilityRole="list">
          {formattedLevels.slice(currentLevelIndex, currentLevelIndex + 7).map((level) => (
            <View key={`${level.id}-${level.level}`} accessible={true}>
              <MapSliceAccessibility {...level} />
            </View>
          ))}
        </View>
      </View>
    );
  }

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
