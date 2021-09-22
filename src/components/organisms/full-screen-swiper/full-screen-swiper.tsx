import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList as RNFlatList, Animated, StyleSheet, View, ViewStyle, Platform } from "react-native";
import { Colours, Style } from "@styles";
import { Button, FlatList, TextTemplate } from "@atoms";
import { ProgressItems } from "./progress-items";
import { Controller } from "./controller";
import { Page } from "./page";

export interface IPageItem {
  backgroundColor: string;
  backgroundImage?: string;
  title: string;
  heading: string;
  paragraph: string;
}

interface Props {
  button: {
    onPress: () => void;
    label: string;
  };
  onClose: () => void;
  items: Array<IPageItem>;
  title: string;
}

export const FullScreenSwiper = memo((props: Props) => {
  const { items, onClose, title, button } = props;
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
          onClose();
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

  // This will prevent the screen to "flash" on android devices
  const screenBackgroundColor = items[activeIndex]?.backgroundColor;
  return (
    <View style={[styles.screen, { backgroundColor: screenBackgroundColor }]}>
      <View style={styles.inner}>
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
        />
        <Controller handleChangeActiveIndex={handleChangeActiveIndex} />
        <View style={styles.title}>
          <TextTemplate color={Colours.neutral.white} type="l1b">
            {title}
          </TextTemplate>
        </View>
        <View style={styles.button}>
          <Button label={button.label} onPress={button.onPress} />
        </View>
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

    listRef.current.scrollToOffset({ offset, animated: false });
  }, [activeIndex]);

  return { listRef, activeIndex, setActiveIndex, userInteractionToggler, setUserInteractionToggler };
}
