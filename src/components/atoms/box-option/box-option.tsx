import React, { useEffect, memo, useRef } from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Animated, ViewStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import * as media from "@styles/media";

interface Props {
  onPress: () => void;
  children: React.ReactElement;
  isSelected: boolean;
  selectedStyle: ViewStyle;
  testID?: string;
}

export const BoxOption = memo(({ testID, children, onPress, isSelected, selectedStyle }: Props) => {
  const { translateY } = useAnimation({ isSelected });

  return (
    <TouchableWithoutFeedback testID={testID} onPress={onPress}>
      <View style={styles.wrapper}>
        <View style={styles.shadowWrapper} />
        <Animated.View style={[styles.innerWrapper, isSelected && selectedStyle, { transform: [{ translateY }] }]}>
          {children}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const useAnimation = ({ isSelected }: Partial<Props>) => {
  const translateY = useRef(new Animated.Value(isSelected ? 4 : 0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isSelected ? 4 : 0,
      duration: 160,
      useNativeDriver: true,
    }).start();
  }, [isSelected, translateY]);

  return { translateY };
};

const SHADOW_HEIGHT = media.select(
  [
    {
      condition: Platform.OS === "android" && Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
      value: 5,
    },
  ],
  4
);
const INNER_HEIGHT = Style.adjust(88);
const TOTAL_HEIGHT = SHADOW_HEIGHT + INNER_HEIGHT;

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(98),
    height: TOTAL_HEIGHT,
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle,
  innerWrapper: {
    height: INNER_HEIGHT,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  shadowWrapper: {
    position: "absolute",
    top: SHADOW_HEIGHT,
    borderRadius: 16,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colours.neutral.n100,
  } as ViewStyle,
});
