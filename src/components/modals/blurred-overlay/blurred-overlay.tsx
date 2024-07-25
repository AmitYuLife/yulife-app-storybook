import React, { useEffect, useRef, ReactElement, cloneElement } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import { Navigation } from "@navigation/main";
import { BlurView } from "@react-native-community/blur";
import { useBackHandler, usePressedInWithDelay } from "@hooks";
import { MODALS } from "@navigation/constants";

interface IProps {
  children: ReactElement;
  withBlurBackground: boolean;
  wrapperStyle?: ViewStyle;
  closeOnBlur?: boolean;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

const BlurredOverlay = ({ children, withBlurBackground, wrapperStyle, closeOnBlur = true }: IProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = Animated.timing(opacity, {
    toValue: 1,
    ...commonProps,
  });
  const fadeOut = Animated.timing(opacity, {
    toValue: 0,
    ...commonProps,
  });

  useEffect(() => {
    fadeIn.start();
    return () => {
      fadeIn.stop();
      fadeOut.stop();
    };
  }, [fadeIn, fadeOut]);

  const handleClose = () => {
    fadeOut.start(({ finished }) => {
      if (finished) {
        Navigation.dismissOverlay(MODALS.blurredOverlay);
      }
    });
  };

  useBackHandler(() => {
    handleClose();
    return true;
  });

  const { handlePress } = usePressedInWithDelay({ onPress: handleClose });

  return (
    <Animated.View
      testID="blur-provider.overlay-container"
      style={[styles.wrapper, { opacity, ...wrapperStyle }]}
      accessibilityViewIsModal={true}
    >
      {!withBlurBackground ? null : <BlurView blurAmount={5} blurType="light" style={styles.blur} />}
      <View style={styles.blur} onTouchStart={closeOnBlur ? handlePress : null} />
      {cloneElement(children, { closeOverlay: handlePress })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    // without border overlay will not be dismissed for android devices on press outside the view
    borderColor: "transparent",
  },
});

export default BlurredOverlay;
