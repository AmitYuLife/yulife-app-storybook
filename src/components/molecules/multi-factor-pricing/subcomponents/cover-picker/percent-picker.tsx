import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { View, FlatList as RNFlatList, Animated, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { mapServerStyles } from "@components/sdui";
import { FlatList } from "@atoms/flat-list/flat-list";
import { createSnapToOffsets, getOverlayOpacity, renderItem } from "./render-item";
import { ITEM_WIDTH, styles, highlightStyles } from "./styles";
import { Colours } from "@styles";
import { Loading, TextTemplate } from "@atoms";
import { SduiStyle } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";

interface Props {
  range: {
    min: number;
    max: number;
    step: number;
  };
  styleVariants: Array<{
    id: string;
    minVisibleIndex: number | null;
    maxVisibleIndex: number | null;
    item: { color: string };
    overlay: {
      backdropStyles: Array<{ property: string; value: string }>;
      highlightLabel: string;
      highlightLabelColor: string;
      overlayTitle: string;
      overlayTitleWrapperStyles: Array<{ property: string; value: string }>;
    };
  }>;
  coverMap: Array<{
    coverType: CoverType;
    max: number;
  }>;
  styles: Array<{ property: string; value: string }>;
  onPickCover: (cover: { coverType: CoverType; value: number }) => () => void;
  activeValue: number;
}
export const PercentPicker = memo((props: Props) => {
  let { current: canChangeDynamicData } = useRef(false);
  const { activeValue, onPickCover, styleVariants } = props;
  const [showLoading, setShowLoading] = useState(true);
  const listRef = useRef(null as RNFlatList);
  const { current: scrollX } = useRef(new Animated.Value(0));
  const renderGracePeriodTimeout = useRef(null);

  const itemRange = useMemo(() => {
    const { min, max, step } = props.range;

    return Array.from({ length: (max - min) / step + 1 }).map((_, i) => min + step * i);
  }, [props.range]);

  const coverMap = useMemo(() => {
    if (!props.coverMap?.length) {
      return {};
    }

    const localCoverMap = [...props.coverMap];

    return itemRange.reduce((acc, curr) => {
      acc[curr] = {
        coverType: localCoverMap[0].coverType,
      };

      if (curr + 1 > localCoverMap[0].max) {
        localCoverMap.shift();
      }

      return acc;
    }, {} as Record<number, { coverType: CoverType }>);
  }, [props.coverMap, itemRange]);

  const handleTouchStart = () => {
    canChangeDynamicData = true;
  };

  const updateCursor = () => {
    if (listRef.current?.scrollToOffset) {
      const activeIndex = itemRange.findIndex((item) => item === activeValue);
      listRef.current.scrollToOffset({ offset: activeIndex * ITEM_WIDTH, animated: true });
    }
  };

  const handleInitialLayout = () => {
    renderGracePeriodTimeout.current = setTimeout(() => {
      updateCursor();
      setShowLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => clearTimeout(renderGracePeriodTimeout.current);
  }, []);

  useEffect(updateCursor, [activeValue]);

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (event.nativeEvent.velocity.x) {
      /**
       * will be handled by handleMomentumScrollEnd
       */
      return null;
    }

    const activeIndex = getActiveIndex(event.nativeEvent.contentOffset.x, ITEM_WIDTH);

    if (canChangeDynamicData) {
      const item = itemRange[activeIndex];
      const coverType = coverMap[item].coverType;
      onPickCover({ coverType, value: item })();
    }

    canChangeDynamicData = false;
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (canChangeDynamicData) {
      const activeIndex = getActiveIndex(event.nativeEvent.contentOffset.x, ITEM_WIDTH);
      const item = itemRange[activeIndex];
      const coverType = coverMap[item].coverType;

      onPickCover({ coverType, value: item })();
    }

    canChangeDynamicData = false;
  };

  return (
    <View onLayout={handleInitialLayout} style={mapServerStyles(props.styles)}>
      <View style={styles.wrapper}>
        {styleVariants.map((styleVariant, index) => (
          <Overlay
            key={index}
            scrollValue={scrollX}
            itemWidth={ITEM_WIDTH}
            itemsLength={itemRange.length}
            minVisibleIndex={styleVariant.minVisibleIndex}
            maxVisibleIndex={styleVariant.maxVisibleIndex}
            backdropStyles={styleVariant.overlay.backdropStyles}
            highlightLabel={styleVariant.overlay.highlightLabel}
            highlightLabelColor={styleVariant.overlay.highlightLabelColor}
            overlayTitle={styleVariant.overlay.overlayTitle}
            overlayTitleWrapperStyles={styleVariant.overlay.overlayTitleWrapperStyles}
          />
        ))}
        <FlatList
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
          forwardRef={listRef}
          data={itemRange}
          renderItem={renderItem({ scrollX, itemsLength: itemRange.length, styleVariants })}
          keyExtractor={keyExtractor}
          snapToOffsets={createSnapToOffsets(itemRange.length)}
          onTouchStart={handleTouchStart}
          onScrollEndDrag={handleScrollEndDrag}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          style={styles.flatList}
          contentContainerStyle={styles.contentContainer}
          windowSize={itemRange?.length}
        />
        {!showLoading ? null : (
          <View style={styles.loadingWrapper}>
            <Loading style={styles.loading} />
          </View>
        )}
      </View>
    </View>
  );
});

interface OverlayProps {
  scrollValue: Animated.Value;
  itemWidth: number;
  itemsLength: number;
  minVisibleIndex: number;
  maxVisibleIndex: number;
  backdropStyles: SduiStyle[];
  highlightLabel: string;
  highlightLabelColor: string;
  overlayTitle: string;
  overlayTitleWrapperStyles: SduiStyle[];
}

function Overlay({
  itemWidth,
  scrollValue,
  itemsLength,
  minVisibleIndex,
  maxVisibleIndex,
  backdropStyles,
  highlightLabelColor,
  highlightLabel,
  overlayTitle = "",
  overlayTitleWrapperStyles,
}: OverlayProps) {
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        highlightStyles.overlayWrapper,
        {
          opacity: getOverlayOpacity({
            scrollValue,
            itemWidth,
            itemsLength,
            minVisibleIndex,
            maxVisibleIndex,
          }),
        },
      ]}
    >
      <View style={[highlightStyles.backdrop, mapServerStyles(backdropStyles)]} />
      {!highlightLabel ? null : (
        <View style={highlightStyles.highlightLabelWrapper}>
          <TextTemplate type="b2b" color={highlightLabelColor}>
            {highlightLabel}
          </TextTemplate>
        </View>
      )}
      {!overlayTitle ? null : (
        <View style={[highlightStyles.overlayTitleWrapper, mapServerStyles(overlayTitleWrapperStyles)]}>
          <TextTemplate color={Colours.neutral.white} type="l2b">
            {overlayTitle}
          </TextTemplate>
        </View>
      )}
    </Animated.View>
  );
}

function getActiveIndex(offset: number, itemWidth: number) {
  const activeIndex = Math.round(offset / itemWidth);

  return activeIndex;
}

function keyExtractor(item: number) {
  return `${item}`;
}
