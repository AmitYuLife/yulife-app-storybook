import { useState, useCallback, memo, useMemo } from "react";
import { LayoutChangeEvent, View, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, withSequence, withTiming, FadeInUp } from "react-native-reanimated";
import { TextTemplate } from "@atoms/text/text-template";

import { StyleSheet } from "@styles";
interface IRollingTextItemProps {
  oldValue: string;
  value: string;
  index: number;
}

const RollingTextItem = ({ oldValue, value, index }: IRollingTextItemProps) => {
  const [height, setHeight] = useState<number>(0);

  const style = useAnimatedStyle(() => {
    if (oldValue === value) {
      return {};
    }

    return {
      transform: [
        { translateY: withSequence(withTiming(0, { duration: 700 }), withTiming(-height / 2, { duration: 700 })) },
      ],
    };
  });

  const opacityStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      opacity: withSequence(withTiming(0, { duration: 700 }), withTiming(1, { duration: 700 })),
    };
  });

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setHeight(e.nativeEvent.layout.height);
  }, []);

  const containerStyle: ViewStyle = useMemo(
    () => ({
      alignItems: index === 0 ? "flex-end" : "flex-start",
    }),
    [index]
  );
  return (
    <Animated.View entering={FadeInUp.duration(300)} style={styles.wrapper}>
      <Animated.View style={style} onLayout={onLayout}>
        <View onLayout={onLayout} style={containerStyle}>
          <View>
            <TextTemplate type="time" color="#A0A09B">
              {oldValue}
            </TextTemplate>
            <Animated.View style={opacityStyle}>
              <TextTemplate type="time" color="#ffffff">
                {oldValue}
              </TextTemplate>
            </Animated.View>
          </View>
          <View>
            <TextTemplate type="time" color="#ffffff">
              {value}
            </TextTemplate>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 0.5,
  },
});

export default memo(RollingTextItem);
