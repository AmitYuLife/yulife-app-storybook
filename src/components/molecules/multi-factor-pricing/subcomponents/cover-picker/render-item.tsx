import React, { memo, ReactChild } from "react";
import { Animated, ListRenderItemInfo, TextStyle, StyleSheet } from "react-native";
import { Text } from "@atoms";
import { styles, ITEM_WIDTH } from "./styles";
import { Style } from "@styles";
import { ContentItemScrollableItemsPicker_styleVariants } from "@graphql/_core/schema";

export const createSnapToOffsets = (length: number) => {
  return Array.from({ length }).map((_, i) => ITEM_WIDTH * i);
};

interface ParentProps {
  scrollX: Animated.Value;
  itemsLength: number;
  styleVariants: ContentItemScrollableItemsPicker_styleVariants[];
}

export const renderItem = ({ scrollX, itemsLength, styleVariants }: ParentProps) => ({
  item,
  index,
}: ListRenderItemInfo<number>) => (
  <MemoizedItem scrollX={scrollX} index={index} item={item} itemsLength={itemsLength} styleVariants={styleVariants} />
);

const MemoizedItem = memo(
  ({
    scrollX,
    index,
    item,
    styleVariants,
    itemsLength,
  }: ParentProps & Pick<ListRenderItemInfo<number>, "item" | "index">) => (
    <Wrapper scale={getWrapperScaleValue({ scrollX, index, itemWidth: ITEM_WIDTH })}>
      <ItemText
        translateY={getTranslateYValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
        opacity={new Animated.Value(1)}
      >
        {item}
      </ItemText>
      <>
        {styleVariants.map((styleVariant) => (
          <Animated.View
            key={styleVariant.id}
            style={{
              ...StyleSheet.absoluteFillObject,
              opacity: getOverlayOpacity({
                scrollValue: scrollX,
                itemWidth: ITEM_WIDTH,
                itemsLength,
                minVisibleIndex: styleVariant.minVisibleIndex,
                maxVisibleIndex: styleVariant.maxVisibleIndex,
              }),
            }}
          >
            <ItemText
              translateY={getTranslateYValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
              opacity={getActiveTextOpacityValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
              style={{ color: styleVariant.item.color }}
              active={true}
            >
              {item}
            </ItemText>
          </Animated.View>
        ))}
      </>
    </Wrapper>
  )
);

interface Props {
  children: ReactChild | ReactChild[];
  scale: any;
}

export const Wrapper = memo(({ children, scale }: Props) => (
  <Animated.View style={[styles.itemWrapper, { transform: [{ scale }] }]}>{children}</Animated.View>
));

interface ItemTextProps {
  children: ReactChild;
  translateY: Animated.AnimatedInterpolation;
  opacity: Animated.AnimatedInterpolation;
  active?: boolean;
  style?: TextStyle;
  testID?: string;
}

function ItemText({ children, opacity, translateY, active, style, testID }: ItemTextProps) {
  const wrapperStyle = active ? styles.itemLabelActiveWrapper : styles.itemWrapper;
  const labelStyle = [active ? styles.itemLabelActive : styles.itemLabel, style];

  return (
    <Animated.View
      style={[
        wrapperStyle,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Text bold={active} style={labelStyle} testID={testID}>
        {children}
      </Text>
    </Animated.View>
  );
}

function getWrapperScaleValue({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) {
  return scrollX.interpolate({
    inputRange: [index * itemWidth - itemWidth, index * itemWidth, index * itemWidth + itemWidth],
    outputRange: [1, 1.5, 1],
    extrapolate: "clamp",
  });
}

export function getInactiveTextOpacityValue({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) {
  return scrollX.interpolate({
    inputRange: [index * itemWidth - itemWidth, index * itemWidth, index * itemWidth + itemWidth],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
}

function getActiveTextOpacityValue({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) {
  return scrollX.interpolate({
    inputRange: [
      index * itemWidth - itemWidth,
      index * itemWidth - itemWidth + itemWidth / 2,
      index * itemWidth,
      index * itemWidth + itemWidth - itemWidth / 2,
      index * itemWidth + itemWidth,
    ],
    outputRange: [0, 1, 1, 1, 0],
    extrapolate: "clamp",
  });
}

const TRANSLATE_Y_VALUE = -4;
function getTranslateYValue({ scrollX = new Animated.Value(0), index = 0, itemWidth = 0 }) {
  return scrollX.interpolate({
    inputRange: [
      index * itemWidth - itemWidth,
      index * itemWidth - itemWidth + itemWidth / 2,
      index * itemWidth,
      index * itemWidth + itemWidth - itemWidth / 2,
      index * itemWidth + itemWidth,
    ],
    outputRange: [0, TRANSLATE_Y_VALUE, TRANSLATE_Y_VALUE, TRANSLATE_Y_VALUE, 0],
    extrapolate: "clamp",
  });
}

export function getOverlayOpacity(args: {
  scrollValue: Animated.Value;
  itemsLength: number;
  itemWidth: number;
  minVisibleIndex: number;
  maxVisibleIndex: number;
}) {
  const {
    scrollValue = new Animated.Value(0),
    itemsLength = 0,
    itemWidth = 0,
    minVisibleIndex = 0,
    maxVisibleIndex = 0,
  } = args;

  const MIN_X_OFFSET = -Style.DEVICE_WIDTH;
  const MAX_X_OFFSET = itemsLength * itemWidth;
  const minVisibleOffset = minVisibleIndex * itemWidth;
  const maxVisibleOffset = maxVisibleIndex * itemWidth;

  const minVisibleIndexInputRange = [MIN_X_OFFSET, maxVisibleOffset - itemWidth, maxVisibleOffset];
  if (!minVisibleIndex) {
    return scrollValue.interpolate({
      inputRange: minVisibleIndexInputRange,
      outputRange: [1, 1, 0],
      extrapolate: "clamp",
    });
  }

  if (!maxVisibleIndex) {
    return scrollValue.interpolate({
      inputRange: [minVisibleOffset - itemWidth, minVisibleOffset, MAX_X_OFFSET],
      outputRange: [0, 1, 1],
      extrapolate: "clamp",
    });
  }

  return scrollValue.interpolate({
    inputRange: [
      minVisibleOffset - itemWidth,
      minVisibleOffset - itemWidth + itemWidth / 2,
      maxVisibleOffset,
      maxVisibleOffset + itemWidth - itemWidth / 2,
      maxVisibleOffset + itemWidth,
    ],
    outputRange: [0, 1, 1, 1, 0],
    extrapolate: "clamp",
  });
}
