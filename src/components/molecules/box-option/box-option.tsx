import React, { useEffect, memo, useRef } from "react";
import { StyleSheet, View, Animated, ViewStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import * as media from "@styles/media";
import { TouchableWithDelay } from "@molecules";
import { usePressedInWithDelay } from "@hooks";

interface Props {
  onPress: () => void;
  children: React.ReactElement;
  isSelected: boolean;
  selectedStyle: ViewStyle | ViewStyle[];
  testID?: string;
  wrapperStyle?: ViewStyle;
  innerWrapperStyle?: ViewStyle;
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

const BoxOption = memo(
  ({
    testID,
    children,
    onPress,
    isSelected,
    selectedStyle,
    wrapperStyle,
    innerWrapperStyle,
    innerHeight = Style.adjust(104),
  }: Props) => {
    const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress });
    const { translateY } = useAnimation({ isSelected, isPressedIn });

    const totalHeight = innerHeight + SHADOW_HEIGHT;

    return (
      <TouchableWithDelay testID={testID} onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={handlePress}>
        <View style={StyleSheet.flatten([styles.wrapper, { height: totalHeight }, wrapperStyle])}>
          <View style={styles.shadowWrapper} />
          <Animated.View
            style={[
              styles.innerWrapper,
              innerWrapperStyle,
              (isSelected || isPressedIn) && selectedStyle,
              { transform: [{ translateY }], height: innerHeight },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </TouchableWithDelay>
    );
  }
);

export default BoxOption;

const useAnimation = ({ isSelected, isPressedIn }: Partial<Props> & { isPressedIn: boolean }) => {
  const translateY = useRef(new Animated.Value(isSelected ? 4 : 0)).current;

  useEffect(() => {
    const animation = Animated.timing(translateY, {
      toValue: isSelected || isPressedIn ? 4 : 0,
      duration: 160,
      useNativeDriver: true,
    });

    animation.start();

    return () => animation.stop();
  }, [isSelected, isPressedIn, translateY]);

  return { translateY };
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: Style.adjust(16),
    overflow: "hidden",
  } as ViewStyle,
  innerWrapper: {
    borderRadius: Style.adjust(16),
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  shadowWrapper: {
    position: "absolute",
    top: SHADOW_HEIGHT,
    borderRadius: Style.adjust(16),
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colours.neutral.n100,
  } as ViewStyle,
});
