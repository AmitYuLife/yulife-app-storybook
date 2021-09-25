import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList as RNFlatList, Animated, StyleSheet, View, ViewStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";
import { FlatList, TextTemplate } from "@atoms";
import { ProgressItems } from "./progress-items";
import { Controller } from "./controller";
import { Page } from "./page";
import { Dismiss } from "./dismiss";

export interface IPageItem {
  heading: string;
  paragraph: string;
  styles?: Array<{ property: string; value: string }>;
  backgroundImage: {
    uri: string;
  };
}

interface Props {
  id: string;
  title: string;
  button: {
    label: string;
    onPress: () => void;
  };
  close: {
    icon: {
      id: string;
      uri: string;
    };
    onPress: () => void;
  };
  items: Array<IPageItem>;
  dismissMinVisibleIndex: number;
  autoPlaySpeedMs: number;
  theme: {
    primaryColor: string;
  };
}

export const FullScreenSwiper = memo((props: Props) => {
  const { items, title, button, close, dismissMinVisibleIndex, autoPlaySpeedMs } = props;
  const animationRef = useRef(null as ReturnType<typeof Animated.timing>);
  const {
    activeIndex,
    setActiveIndex,
    userInteractionToggler,
    setUserInteractionToggler,
    listRef,
  } = useScrollHandler();

  const { width, interpolatedValue } = useMemo(() => {
    const width = (Style.DEVICE_WIDTH - Style.adjust(24)) / items.length;
    const interpolatedValue = new Animated.Value(-width);

    return { width, interpolatedValue };
  }, [items.length]);

  const snapToOffsets = useMemo(() => Array.from({ length: items.length }).map((_, i) => i * Style.DEVICE_WIDTH), [
    items.length,
  ]);

  const handleChangeActiveIndex = useCallback(
    (increment: number) => () => {
      const min = 0;
      const max = items.length - 1;
      let incremented = 0;

      setActiveIndex((activeIndex) => {
        incremented = activeIndex + increment;

        if (incremented < min) {
          return min;
        }

        if (incremented > max) {
          close.onPress();
          return activeIndex;
        }

        return incremented;
      });

      if (incremented - 1 < max) {
        setUserInteractionToggler((val) => !val);
      }
    },
    [activeIndex, setActiveIndex, items.length]
  );

  return (
    <View style={styles.screen}>
      <View style={[styles.inner, { backgroundColor: props.theme.primaryColor }]}>
        <FlatList
          forwardRef={listRef}
          snapToOffsets={snapToOffsets}
          renderItem={({ item }) => <Page {...item} />}
          data={items}
          scrollEnabled={false}
        />
        <ProgressItems
          userInteractionToggler={userInteractionToggler}
          activeIndex={activeIndex}
          length={items.length}
          onChangeActiveIndex={handleChangeActiveIndex(1)}
          width={width}
          interpolatedValue={interpolatedValue}
          animationRef={animationRef}
          autoPlaySpeedMs={autoPlaySpeedMs}
        />
        <Controller handleChangeActiveIndex={handleChangeActiveIndex} />
        <View style={styles.title}>
          <TextTemplate color={Colours.neutral.white} type="l1b">
            {title}
          </TextTemplate>
        </View>
        {activeIndex < dismissMinVisibleIndex ? null : <Dismiss button={button} close={close} />}
      </View>
    </View>
  );
});

const borderRadius = Platform.select({ ios: 20, android: 0 });
const styles = StyleSheet.create({
  screen: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
    justifyContent: "flex-end",
  } as ViewStyle,
  inner: {
    height: Style.DEVICE_HEIGHT - Platform.select({ ios: 40, android: 0 }),
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    flexDirection: "row",
    overflow: "hidden",
  } as ViewStyle,
  title: {
    position: "absolute",
    top: Style.adjust(40),
    left: Style.adjust(16),
  } as ViewStyle,
  button: {
    position: "absolute",
    left: Style.adjust(32),
    right: Style.adjust(32),
    bottom: Style.adjust(32),
  } as ViewStyle,
});

function useScrollHandler() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteractionToggler, setUserInteractionToggler] = useState(false);
  const listRef = useRef(null as RNFlatList);

  useEffect(() => {
    const offset = Style.DEVICE_WIDTH * activeIndex;

    listRef.current.scrollToOffset({ offset, animated: true });
  }, [activeIndex]);

  return { listRef, activeIndex, setActiveIndex, userInteractionToggler, setUserInteractionToggler };
}
