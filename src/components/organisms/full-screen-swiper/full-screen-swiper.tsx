import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList as RNFlatList, Animated, StyleSheet, View, ViewStyle, Platform, ListRenderItem } from "react-native";
import { Colours, Style } from "@styles";
import { FlatList, TextTemplate } from "@atoms";
import { ProgressItems } from "./progress-items";
import { Controller } from "./controller";
import { Page, IPageItem } from "./page";
import { Dismiss } from "./dismiss";
import { useDispatch } from "react-redux";
import { sduiEventActionCreator } from "@components/containers/products/product-step/utils/sduiEventActionCreator";

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
    onPress: (currentIndex: number) => void;
  };
  items: Array<IPageItem>;
  dismissMinVisibleIndex: number;
  ctaMinVisibleIndex?: number;
  autoPlaySpeedMs: number;
  theme: {
    primaryColor: string;
    titleColor?: string;
    progressBarForegroundColor?: string;
    progressBarBackgroundColor?: string;
  };
}

export const FullScreenSwiper = memo((props: Props) => {
  const dispatch = useDispatch();
  const { items, title, button, close, ctaMinVisibleIndex, dismissMinVisibleIndex, autoPlaySpeedMs, theme } = props;
  const animationRef = useRef(null as ReturnType<typeof Animated.timing>);
  const { activeIndex, setActiveIndex, userInteractionToggler, setUserInteractionToggler, listRef } =
    useScrollHandler(items);

  const {
    calculatedWidth: width,
    calculatedInterpolatedValue: interpolatedValue,
    calculatedSnapToOffsets: snapToOffsets,
  } = useMemo(() => {
    if (!items) {
      return { calculatedWidth: 0, calculatedInterpolatedValue: new Animated.Value(0), calculatedSnapToOffsets: [] };
    }

    const calculatedWidth = (Style.DEVICE_WIDTH - Style.adjust(24)) / items.length;
    const calculatedInterpolatedValue = new Animated.Value(-calculatedWidth);
    const calculatedSnapToOffsets = Array.from({ length: items.length }).map((_, i) => i * Style.DEVICE_WIDTH);

    return { calculatedWidth, calculatedInterpolatedValue, calculatedSnapToOffsets };
  }, [items]);

  const handleChangeActiveIndex = useCallback(
    (increment: number, autoMove: boolean = false) =>
      () => {
        if (!items) {
          return null;
        }

        const min = 0;
        const max = items.length - 1;

        setActiveIndex((i) => {
          const incremented = i + increment;

          if (incremented - 1 < max) {
            setUserInteractionToggler((val) => !val);
          }

          if (incremented < min) {
            return i;
          }

          if (incremented > max) {
            return i;
          }

          if (i !== incremented) {
            dispatch(
              sduiEventActionCreator("modal_movement", {
                new_modal_name: items[incremented].heading,
                previous_modal_name: items[i].heading,
                interaction: !autoMove,
                elapsed: autoMove,
                direction: increment > 0 ? "Forwards" : "Backwards",
                new_modal_index: incremented,
                previous_modal_index: i,
              })
            );
          }

          return incremented;
        });
      },
    [setActiveIndex, items]
  );

  const getItemLayout = useCallback((_: any, index: number) => {
    return { length: Style.DEVICE_WIDTH, offset: Style.DEVICE_WIDTH * index, index };
  }, []);

  const renderItem: ListRenderItem<IPageItem> = useCallback(
    ({ item, index }) => <Page {...item} isActive={index === activeIndex} />,
    [activeIndex]
  );

  if (!items || !theme) {
    return null;
  }

  return (
    <View style={[styles.screen, { backgroundColor: theme.primaryColor }]}>
      <View style={styles.inner}>
        <FlatList
          forwardRef={listRef}
          snapToOffsets={snapToOffsets}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          data={items}
          scrollEnabled={false}
          windowSize={3}
          initialNumToRender={3}
        />
        <ProgressItems
          userInteractionToggler={userInteractionToggler}
          activeIndex={activeIndex}
          length={items.length}
          onChangeActiveIndex={handleChangeActiveIndex(1, true)}
          width={width}
          interpolatedValue={interpolatedValue}
          animationRef={animationRef}
          autoPlaySpeedMs={autoPlaySpeedMs}
          progressBarForegroundColor={theme.progressBarForegroundColor}
          progressBarBackgroundColor={theme.progressBarBackgroundColor}
        />
        <Controller handleChangeActiveIndex={handleChangeActiveIndex} />
        <View style={styles.title}>
          <TextTemplate color={theme.titleColor || Colours.neutral.white} type="l1b">
            {title}
          </TextTemplate>
        </View>
        <Dismiss
          currentIndex={activeIndex}
          button={activeIndex < ctaMinVisibleIndex ? null : button}
          close={activeIndex < dismissMinVisibleIndex ? null : close}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  screen: {
    height: Style.DEVICE_HEIGHT,
    width: Style.DEVICE_WIDTH,
    justifyContent: "flex-end",
  } as ViewStyle,
  inner: {
    height: Style.DEVICE_HEIGHT - Platform.select({ ios: 40, android: 0 }),
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

function useScrollHandler(items: IPageItem[]) {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteractionToggler, setUserInteractionToggler] = useState(false);
  const listRef = useRef(null as RNFlatList);

  useEffect(() => {
    if (items[activeIndex]) {
      dispatch(
        sduiEventActionCreator("modal_viewed", {
          name: items[activeIndex].id,
          modal_index: activeIndex,
        })
      );

      const offset = Style.DEVICE_WIDTH * activeIndex;

      listRef.current.scrollToOffset({ offset, animated: true });
    }
  }, [activeIndex]);

  return { listRef, activeIndex, setActiveIndex, userInteractionToggler, setUserInteractionToggler };
}
