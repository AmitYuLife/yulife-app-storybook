import React, { useState, FC } from "react";
import { View, Animated, NativeSyntheticEvent, NativeScrollEvent, ViewStyle, TextStyle } from "react-native";
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
  const [scrollX] = useState(new Animated.Value(0));

  const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const hasMomentum = event.nativeEvent.velocity;

    if (hasMomentum) {
      // let handleMomentumScrollEnd handle
      return;
    }

    handleSwipe(event);
  };

  const handleSwipe = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { x } = event.nativeEvent.contentOffset;
    let activeIndex = Math.round(x ? x / ITEM_WIDTH + ANDROID_SAFEGUARD : 0);

    if (activeIndex >= items.length) {
      activeIndex = items.length - 1;
    }

    if (activeIndex < 0) {
      activeIndex = 0;
    }

    if (newActiveIndexCallback) {
      newActiveIndexCallback(activeIndex);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Highlight style={highlightStyle} />
      <Animated.ScrollView
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        onScrollEndDrag={handleScrollEndDrag}
        onMomentumScrollEnd={handleSwipe}
        snapToInterval={ITEM_WIDTH}
        disableScrollViewPanResponder={true}
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
