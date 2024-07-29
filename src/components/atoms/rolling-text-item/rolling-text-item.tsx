import { TextTemplate } from "@atoms/text/text-template";
import { useState, useCallback, memo } from "react";
import { LayoutChangeEvent, View } from "react-native";
import Animated, { useAnimatedStyle, withSequence, withTiming, FadeInUp } from "react-native-reanimated";

interface IRollingTextItemProps {
  oldValue: string;
  value: string;
}

const RollingTextItem = ({ oldValue, value }: IRollingTextItemProps) => {
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

  return (
    <Animated.View entering={FadeInUp.duration(300)}>
      <Animated.View style={style} onLayout={onLayout}>
        <View onLayout={onLayout}>
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

export default memo(RollingTextItem);
