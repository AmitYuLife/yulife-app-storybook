import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList as RNFlatList, Animated, View, ViewStyle, Platform } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { FlatList, TextTemplate } from "@atoms";
import { ProgressItems } from "./progress-items";
import { Controller } from "./controller";
import { Dismiss } from "./dismiss";
import { useDispatch } from "react-redux";
import { ContentItemLottieFragment as GqlLottie } from "@graphql/__generated";
import { ContentItemLottie } from "@components/sdui";
import { TEXT_TEMPLATE } from "@ids";
import { sduiEventActionCreator } from "@components/sdui/_utils/sduiEventActionCreator";

type ContextAwareGqlLottie = Omit<GqlLottie, "onAnimationEnd"> & { onAnimationEnd: () => void };
interface Props {
  id: string;
  title: string;
  button: {
    label: string;
    onPress: () => void;
    isLoading: boolean;
    disabled: boolean;
  };
  close: {
    icon: {
      id: string;
      uri?: string;
    };
    onPress: (currentIndex: number) => void;
  };
  items: Array<ContextAwareGqlLottie>;
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

export const FullScreenLottieSwiper = memo((props: Props) => {
  const dispatch = useDispatch();
  const { items, title, button, close, ctaMinVisibleIndex, dismissMinVisibleIndex, autoPlaySpeedMs, theme } = props;
  const animationRef = useRef(null as ReturnType<typeof Animated.timing>);
  const { activeIndex, setActiveIndex, userInteractionToggler, setUserInteractionToggler, listRef } =
    useScrollHandler(items);

  const params = useMemo(() => {
    const width = (Style.DEVICE_WIDTH - Style.adjust(24)) / items.length;
    const interpolatedValue = new Animated.Value(-width);

    return { width, interpolatedValue };
  }, [items.length]);
  const { width, interpolatedValue } = params;

  const snapToOffsets = useMemo(
    () => Array.from({ length: items.length }).map((_, i) => i * Style.DEVICE_WIDTH),
    [items.length]
  );

  const handleChangeActiveIndex = useCallback(
    (increment: number, autoMove: boolean = false) =>
      () => {
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
                new_modal_name: items[incremented].id,
                previous_modal_name: items[i].id,
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
    [setActiveIndex, items.length]
  );

  const getItemLayout = useCallback((_: any, index: number) => {
    return { length: Style.DEVICE_WIDTH, offset: Style.DEVICE_WIDTH * index, index };
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: GqlLottie; index: number }) => (
      <ContentItemLottie
        autoPlay={false}
        id={item.id}
        loop={item.loop}
        styles={item.styles}
        onAnimationEnd={item.onAnimationEnd}
        uri={item.uri}
        shouldPlay={index === activeIndex}
        shouldUseFadeIn={true}
        aspectRatio={item.aspectRatio}
      />
    ),
    [activeIndex]
  );

  return (
    <View style={[styles.screen, { backgroundColor: props.theme.primaryColor }]}>
      <View style={styles.inner}>
        <FlatList
          forwardRef={listRef}
          snapToOffsets={snapToOffsets}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          data={items}
          scrollEnabled={false}
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
          <TextTemplate color={theme.titleColor || Colours.neutral.white} type="l1b" testID={TEXT_TEMPLATE(title)}>
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
});

function useScrollHandler(items: ContextAwareGqlLottie[]) {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);
  const [userInteractionToggler, setUserInteractionToggler] = useState(false);
  const listRef = useRef(null as RNFlatList);

  useEffect(() => {
    dispatch(
      sduiEventActionCreator("modal_viewed", {
        name: items[activeIndex].id,
        modal_index: activeIndex,
      })
    );

    const offset = Style.DEVICE_WIDTH * activeIndex;

    listRef.current.scrollToOffset({ offset, animated: true });
  }, [activeIndex]);

  return { listRef, activeIndex, setActiveIndex, userInteractionToggler, setUserInteractionToggler };
}
