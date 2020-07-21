import React, { useState, useRef, FC } from "react";
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
  onPressOut?: () => void;
} & StaticProps;

const ANDROID_SAFEGUARD = 0.1;

const AnimatedScrollView: any = Animated.createAnimatedComponent(ScrollView); // it works, but I can't make TS stop shouting for ref

const HorizontalScroller: FC<Props> & StaticProps = ({
  items = Array.from({ length: 50 }).map((_, i) => i),
  highlightLabel = "",
  highlightStyle,
  highlightLabelWrapperStyle,
  highlightLabelStyle,
  activeTextStyle,
  newActiveIndexCallback,
  onPressOut = () => null,
}) => {
  const [scrollX] = useState(new Animated.Value(0));
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);
  const handleSwipe = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset;

    const activeIndex = Math.floor(x ? x / ITEM_WIDTH + ANDROID_SAFEGUARD : 0);
    const hasStoppedBeyondCenter = x % ITEM_WIDTH > 0;
    if (hasStoppedBeyondCenter) {
      scrollViewRef.current.scrollTo({ x: activeIndex * ITEM_WIDTH });
    }

    timeoutRef.current = setTimeout(() => {
      if (newActiveIndexCallback) {
        newActiveIndexCallback(activeIndex);
      }
    }, 750);
  };
  return (
    <View style={styles.wrapper}>
      <Highlight style={highlightStyle} />
      <AnimatedScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        onTouchStart={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }}
        onScrollEndDrag={onPressOut}
        onMomentumScrollEnd={handleSwipe}
        ref={scrollViewRef}
        scrollEventThrottle={16}
        contentContainerStyle={styles.contentContainer}
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
              style={activeTextStyle}
              translateY={getTranslateYValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
              opacity={getActiveTextOpacityValue({ scrollX, index, itemWidth: ITEM_WIDTH })}
            >
              {item}
            </ItemText>
          </Wrapper>
        ))}
      </AnimatedScrollView>
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
