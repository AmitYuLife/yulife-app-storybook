import React, { ComponentProps, memo, useEffect, useMemo, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";
import { Header } from "./subcomponents/header";
import { Content } from "./subcomponents/content";
import { Item } from "./subcomponents/item";

interface Props {
  header: string;
  subheading?: string;
  headerIcon: Source;
  style?: ViewStyle;
  items: ComponentProps<typeof Item>[];
  infoIcon: Source;
}

const DURATION = 60;
const EXPAND_DURATION = 360;

const INITIAL_TICK = 0;

export const Accordion = memo((props: Props) => {
  const { subheading, style, header, headerIcon, items, infoIcon } = props;
  const [collapsed, setCollapsed] = useState(false);
  const collapseAnimatedValue = useRef(new Animated.Value(0)).current;
  const absoluteContentViewRef = useRef(null as View);
  /**
   * manages force re-render to trigger measurements
   */
  const [, setTick] = useState(INITIAL_TICK);
  const tickTimeout = useRef(null);
  useEffect(() => {
    tickTimeout.current = setTimeout(() => {
      setTick((tick) => tick + 1);
    }, 1000);

    return () => clearTimeout(tickTimeout.current);
  }, []);

  /**
   * there is a state where header height is undetermined
   * header height is variable, depends on device aspect ratio
   *
   * the content is absolutely positioned for its animation
   * and it needs the exact value of the header height to function
   */
  const [headerHeight, setHeaderHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const arrowRotateInterpolation = collapseAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const translateYInterpolation = collapseAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-headerHeight - contentHeight, 0],
  });

  const toggleCollapse = () => {
    setCollapsed((isCollapsed) => !isCollapsed);
  };

  useEffect(() => {
    const anim1 = Animated.timing(collapseAnimatedValue, {
      toValue: collapsed ? 0 : 1,
      useNativeDriver: true,
      duration: collapsed ? EXPAND_DURATION : DURATION,
    });
    Animated.parallel([anim1]).start();
  }, [collapsed]);

  useEffect(() => {
    if (!absoluteContentViewRef.current) {
      return;
    }

    absoluteContentViewRef.current.measure((_x, _y, _width, height) => {
      setContentHeight(height);
    });
  }, [items, headerHeight, absoluteContentViewRef.current]);

  const onLayoutHeader = (event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  };

  const wrapperStyle = useMemo(() => {
    return [styles.wrapper, { height: getHeight({ headerHeight, collapsed, contentHeight }) }, style];
  }, [headerHeight, collapsed, contentHeight, style]);

  const innerWrapperStyle = useMemo(() => {
    return [styles.innerWrapper, { height: collapsed ? headerHeight : contentHeight + 2 }];
  }, [collapsed, headerHeight, contentHeight]);

  return (
    <View style={wrapperStyle}>
      <View style={innerWrapperStyle}>
        <Content
          absoluteContentViewRef={absoluteContentViewRef}
          items={items}
          headerHeight={headerHeight}
          translateYInterpolation={translateYInterpolation}
          infoIcon={infoIcon}
        />
        <Header
          onLayout={onLayoutHeader}
          onPress={toggleCollapse}
          arrowRotateInterpolation={arrowRotateInterpolation}
          header={header}
          subheading={subheading}
          headerIcon={headerIcon}
          collapsed={collapsed}
        />
      </View>
    </View>
  );
});

interface GetHeight {
  headerHeight: number;
  collapsed: boolean;
  contentHeight: number;
}

const getHeight = ({ headerHeight, collapsed, contentHeight }: GetHeight) => {
  if (!headerHeight) {
    return "auto";
  }

  if (collapsed) {
    return headerHeight;
  }

  return contentHeight + 2;
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  } as ViewStyle,
  innerWrapper: {
    overflow: "hidden",
    borderRadius: 16,
  } as ViewStyle,
});
