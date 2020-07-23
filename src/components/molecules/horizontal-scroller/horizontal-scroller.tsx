import React, { useState, useRef, FC, useEffect } from "react";
import {
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  ViewStyle,
  TextStyle,
} from "react-native";
import styles, { ITEM_WIDTH, HIGHLIGHT_RADIUS } from "./horizontal-scroller.styles";
import { Wrapper } from "./subcomponents/wrapper";
import {
  getInactiveTextOpacityValue,
  getActiveTextOpacityValue,
  getTranslateYValue,
  getWrapperScaleValue,
} from "./horizontal-scroller.animation";
import { Highlight, HighlightLabel } from "./subcomponents/highlight";
import { SideGradients } from "./subcomponents/side-gradients";
import { ItemText } from "./subcomponents/item-text";

interface StaticProps {
  DEFAULT_HIGHLIGHT_RADIUS?: number;
}

type Props = {
  items: number[];
  highlightLabel?: string;
  highlightStyle?: ViewStyle;
  highlightLabelWrapperStyle?: ViewStyle;
  highlightLabelStyle?: TextStyle;
  activeTextStyle?: TextStyle;
  newActiveIndexCallback?: (activeIndex: number) => void;
} & StaticProps;

const ANDROID_SAFEGUARD = 0.1;

const HorizontalScroller: FC<Props> & StaticProps = ({
  items = Array.from({ length: 50 }).map((_, i) => i),
  highlightLabel = "",
  highlightStyle,
  highlightLabelWrapperStyle,
  highlightLabelStyle,
  activeTextStyle,
  newActiveIndexCallback,
}) => {
  const timerRef = useRef(null);

  const cancelTimer = () => {
    if (timerRef?.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return cancelTimer;
  }, []);

  const [scrollX] = useState(new Animated.Value(0));
  const scrollViewRef = useRef<ScrollView | null>(null);

  const handleSwipe = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset;
    let activeIndex = Math.round(x ? x / ITEM_WIDTH + ANDROID_SAFEGUARD : 0);

    if (activeIndex >= items.length) {
      activeIndex = items.length - 1;
    }

    if (activeIndex < 0) {
      activeIndex = 0;
    }

    timerRef.current = setTimeout(() => {
      scrollViewRef?.current?.scrollTo({ x: activeIndex * ITEM_WIDTH });

      if (newActiveIndexCallback) {
        newActiveIndexCallback(activeIndex);
      }
    }, 700);
  };

  return (
    <View style={styles.wrapper}>
      <Highlight style={highlightStyle} />
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        onScrollEndDrag={handleSwipe}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={0}
        onTouchStart={cancelTimer}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {items.map((item, index) => (
          <Wrapper
            key={index} // no reorder
            scale={getWrapperScaleValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
          >
            <ItemText
              translateY={getTranslateYValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
              opacity={getInactiveTextOpacityValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
            >
              {item}
            </ItemText>
            <ItemText
              active={true}
              style={activeTextStyle}
              translateY={getTranslateYValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
              opacity={getActiveTextOpacityValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
            >
              {item}
            </ItemText>
          </Wrapper>
        ))}
      </Animated.ScrollView>
      <HighlightLabel
        label={highlightLabel}
        wrapperStyle={highlightLabelWrapperStyle}
        labelStyle={highlightLabelStyle}
      />
      <SideGradients />
    </View>
  );
};

HorizontalScroller.DEFAULT_HIGHLIGHT_RADIUS = HIGHLIGHT_RADIUS;

export default HorizontalScroller;
