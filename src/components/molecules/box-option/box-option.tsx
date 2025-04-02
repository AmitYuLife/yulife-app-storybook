import React, { useEffect, memo, useRef } from "react";
import { StyleSheet, View, Animated, ViewStyle, Platform, TouchableOpacityProps } from "react-native";
import { Style, Colours } from "@styles";
import * as media from "@styles/media";
import { TouchableWithDelay } from "@molecules";
import { usePressedInWithDelay } from "@hooks";
import { IBoxProps } from "@atoms/box/box.types";

type Props = Pick<TouchableOpacityProps, "importantForAccessibility" | "testID" | "accessibilityLabel"> &
  Pick<IBoxProps, "br"> & {
    onPress: () => void;
    children: React.ReactElement;
    isSelected?: boolean;
    selectedStyle?: ViewStyle | ViewStyle[];
    debounce?: boolean;
    wrapperStyle?: ViewStyle;
    innerWrapperStyle?: ViewStyle | ViewStyle[];
    innerHeight?: number;
    disabled?: boolean;
    showShadow?: boolean;
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

const DEFAULT_INNER_HEIGHT = Style.adjust(104);
export const BOX_OPTION_BORDER_RADIUS = Style.adjust(16);

const BoxOption = memo(
  ({
    children,
    onPress,
    isSelected,
    testID,
    selectedStyle = {},
    wrapperStyle,
    innerWrapperStyle,
    innerHeight,
    disabled,
    showShadow = true,
    debounce = true,
    accessibilityLabel,
    importantForAccessibility,
    br = BOX_OPTION_BORDER_RADIUS,
  }: Props) => {
    const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress });
    const { translateY } = useAnimation({ isSelected, isPressedIn });

    const safeInnerHeight = innerHeight || DEFAULT_INNER_HEIGHT;
    const totalHeight = safeInnerHeight + SHADOW_HEIGHT;

    return (
      <TouchableWithDelay
        debounce={debounce}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={debounce ? handlePress : onPress}
        testID={testID}
        disabled={disabled || !onPress}
        accessibilityLabel={accessibilityLabel}
        importantForAccessibility={importantForAccessibility}
      >
        <View style={StyleSheet.flatten([styles.wrapper, { height: totalHeight }, wrapperStyle, { borderRadius: br }])}>
          {!showShadow ? null : <View style={[styles.shadowWrapper, { borderRadius: br }]} />}
          <Animated.View
            style={[
              styles.innerWrapper,
              innerWrapperStyle,
              (isSelected || isPressedIn) && selectedStyle,
              { borderRadius: br },
              { transform: [{ translateY }], height: safeInnerHeight },
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
    borderRadius: BOX_OPTION_BORDER_RADIUS,
    overflow: "hidden",
  } as ViewStyle,
  innerWrapper: {
    borderRadius: BOX_OPTION_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  shadowWrapper: {
    position: "absolute",
    top: SHADOW_HEIGHT,
    borderRadius: BOX_OPTION_BORDER_RADIUS,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colours.neutral.n100,
  } as ViewStyle,
});
