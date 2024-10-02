import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { FlatList as RNFlatList, StyleSheet, View, ViewStyle, Platform, ListRenderItem, Pressable } from "react-native";
import { Colours, Style } from "@styles";
import { FlatList, TextTemplate } from "@atoms";
import { Controller } from "./controller";
import { Page, IPageItem } from "./page";
import { Dismiss } from "./dismiss";
import { useDispatch } from "react-redux";
import { sduiEventActionCreator } from "@components/containers/products/product-step/utils/sduiEventActionCreator";
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { ProgressItems } from "./progress-items";

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
      uri?: string;
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
  onlyAllowForward?: boolean;
  forwardOnScreenPress?: boolean;
}

export const FullScreenSwiper = memo((props: Props) => {
  const dispatch = useDispatch();
  const {
    items,
    title,
    button,
    close,
    ctaMinVisibleIndex,
    dismissMinVisibleIndex,
    autoPlaySpeedMs,
    theme,
    onlyAllowForward,
    forwardOnScreenPress,
  } = props;
  const { activeIndex, setActiveIndex, setUserInteractionToggler, listRef } = useScrollHandler(items);
  const maskWidth = useSharedValue(0);
  const maskStyle = useAnimatedStyle(() => ({
    width: maskWidth.value,
    height: "100%",
    backgroundColor: theme.progressBarForegroundColor || Colours.primary.p600,
    ...StyleSheet.absoluteFillObject,
  }));

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

  const moveForward = useCallback(handleChangeActiveIndex(1), [handleChangeActiveIndex]);

  const onScreenPress = useCallback(() => {
    if (forwardOnScreenPress) {
      moveForward?.();
    }
  }, [forwardOnScreenPress, moveForward]);

  useEffect(() => {
    const itemsLength = items.length;

    maskWidth.value = withSequence(
      withTiming(activeIndex * (Style.DEVICE_WIDTH / itemsLength), { duration: 0 }),
      withTiming(
        (activeIndex + 1) * (Style.DEVICE_WIDTH / itemsLength),
        {
          duration: autoPlaySpeedMs,
          easing: Easing.linear,
        },
        (finished) => {
          if (!finished) {
            return;
          }

          runOnJS(moveForward)();
        }
      )
    );
  }, [activeIndex]);

  const renderItem: ListRenderItem<IPageItem> = useCallback(
    ({ item, index }) => <Page {...item} isActive={index === activeIndex} />,
    [activeIndex]
  );

  if (!items || !theme) {
    return null;
  }

  return (
    <Pressable onPress={onScreenPress}>
      <View style={[styles.screen, { backgroundColor: theme.primaryColor }]}>
        <View style={styles.inner}>
          <FlatList
            forwardRef={listRef}
            snapToInterval={Style.DEVICE_WIDTH}
            renderItem={renderItem}
            data={items}
            scrollEnabled={false}
            windowSize={3}
            initialNumToRender={3}
          />
          <Controller onlyAllowForward={onlyAllowForward} handleChangeActiveIndex={handleChangeActiveIndex} />
          <ProgressItems
            backgroundColor={props.theme.progressBarBackgroundColor}
            count={items.length}
            maskStyle={maskStyle}
          />
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
    </Pressable>
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

export default FullScreenSwiper;
