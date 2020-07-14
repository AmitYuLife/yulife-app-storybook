import React, { useState, useRef } from "react";
import { View, Animated, NativeSyntheticEvent, NativeScrollEvent, ScrollView } from "react-native";
import styles, { ITEM_WIDTH } from "./horizontal-scroller.styles";
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

interface Props {
  items: number[];
  highlightLabel?: string;
}

const ANDROID_SAFEGUARD = 0.1;

const AnimatedScrollView: any = Animated.createAnimatedComponent(ScrollView); // it works, but I can't make TS stop shouting for ref

export default function HorizontalScroller({
  items = Array.from({ length: 50 }).map((_, i) => i),
  highlightLabel = "",
}: Props) {
  const [scrollX] = useState(new Animated.Value(0));
  const scrollViewRef = useRef<ScrollView | null>(null);
  const handleSwipe = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset;
    const activeIndex = Math.floor(x ? x / ITEM_WIDTH + ANDROID_SAFEGUARD : 0);
    const hasStoppedBeyondCenter = x % ITEM_WIDTH > 0;
    if (hasStoppedBeyondCenter) {
      scrollViewRef.current.scrollTo({ x: activeIndex * ITEM_WIDTH });
    }
  };
  return (
    <View style={styles.wrapper}>
      <Highlight />
      <AnimatedScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        onMomentumScrollEnd={handleSwipe}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment={"start"}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        disableIntervalMomentum={true}
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
              active
              translateY={getTranslateYValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
              opacity={getActiveTextOpacityValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
            >
              {item}
            </ItemText>
          </Wrapper>
        ))}
      </AnimatedScrollView>
      <HighlightLabel label={highlightLabel} />
      <SideGradients />
    </View>
  );
}
