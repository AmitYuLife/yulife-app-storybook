import React, { memo, useContext, useEffect, useRef } from "react";
import { View, FlatList as RNFlatList, Animated, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemScrollableItemsPicker as Props } from "@graphql/_core/schema/GetPersonalProductStep";
import { ProductStepContext } from "../../product-step.context";
import { mapServerStyles } from "@components/sdui";
import { FlatList } from "@atoms/flat-list/flat-list";
import { createSnapToOffsets, getOverlayOpacity, renderItem } from "./renderItem";
import { ITEM_WIDTH, styles, highlightStyles } from "./product-step.scrollable-items-picker.styles";
import { getActiveIndex } from "./getActiveIndex";
import { Colours } from "@styles";
import { TextTemplate } from "@atoms";
import { SduiStyle } from "@graphql/_core/schema";

export const ProductStepPercentPicker = memo((props: Props) => {
  let { current: canChangeDynamicData } = useRef(false);
  const { answerKey, styleVariants } = props;
  const { min, max, step } = props.range;
  const itemRange = Array.from({ length: (max - min) / step + 1 }).map((_, i) => min + step * i);
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);
  const listRef = useRef(null as RNFlatList);
  const { current: scrollX } = useRef(new Animated.Value(0));
  const renderGracePeriodTimeout = useRef(null);

  const handleTouchStart = () => {
    canChangeDynamicData = true;
  };

  const updateCursor = () => {
    if (listRef.current?.scrollToOffset) {
      const activeIndex = itemRange.findIndex((item) => item === dynamicData[answerKey]);
      listRef.current.scrollToOffset({ offset: activeIndex * ITEM_WIDTH, animated: true });
    }
  };

  const handleInitialLayout = () => {
    renderGracePeriodTimeout.current = setTimeout(() => {
      updateCursor();
    }, 1000);
  };

  useEffect(() => {
    return () => clearTimeout(renderGracePeriodTimeout.current);
  }, []);

  useEffect(updateCursor, [dynamicData[answerKey]]);

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    if (event.nativeEvent.velocity.x) {
      /**
       * will be handled by handleMomentumScrollEnd
       */
      return null;
    }

    const activeIndex = getActiveIndex(event.nativeEvent.contentOffset.x, ITEM_WIDTH);
    if (canChangeDynamicData) {
      setDynamicData((oldState) => ({ ...oldState, [answerKey]: itemRange[activeIndex] }));
    }

    canChangeDynamicData = false;
  };

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (canChangeDynamicData) {
      const activeIndex = getActiveIndex(event.nativeEvent.contentOffset.x, ITEM_WIDTH);
      setDynamicData((oldState) => ({ ...oldState, [answerKey]: itemRange[activeIndex] }));
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
          snapToOffsets={createSnapToOffsets(itemRange.length)}
          contentContainerStyle={styles.contentContainer}
          onTouchStart={handleTouchStart}
          onScrollEndDrag={handleScrollEndDrag}
          onMomentumScrollEnd={handleMomentumScrollEnd}
        />
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
