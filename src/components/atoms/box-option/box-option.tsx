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
  wrapperStyle?: ViewStyle;
  innerHeight?: number;
}

const SHADOW_HEIGHT = media.select(
  [
    {
      condition: Platform.OS === "android" && Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
      value: 5,
    },
  ],
  4
);

export const BoxOption = memo(
  ({ testID, children, onPress, isSelected, selectedStyle, wrapperStyle, innerHeight = Style.adjust(104) }: Props) => {
    const { translateY } = useAnimation({ isSelected });

    const totalHeight = innerHeight + SHADOW_HEIGHT;

    return (
      <TouchableWithoutFeedback testID={testID} onPress={onPress}>
        <View style={StyleSheet.flatten([styles.wrapper, { height: totalHeight }, wrapperStyle])}>
          <View style={styles.shadowWrapper} />
          <Animated.View
            style={[
              styles.innerWrapper,
              isSelected && selectedStyle,
              { transform: [{ translateY }], height: innerHeight },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

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

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle,
  innerWrapper: {
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
