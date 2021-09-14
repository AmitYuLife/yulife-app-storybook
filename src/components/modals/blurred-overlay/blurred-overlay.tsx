import React, { useEffect, useRef, ReactElement, cloneElement } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { BlurView } from "@react-native-community/blur";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { MODALS } from "@navigation/constants";

interface IProps {
  children: ReactElement;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

const BlurredOverlay = ({ children }: IProps) => {
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
    fadeOut.start(() => {
      Navigation.dismissOverlay(MODALS.blurredOverlay);
    });
  };

  useBackHandler(() => {
    Navigation.dismissOverlay(MODALS.blurredOverlay);
    return true;
  });

  return (
    <Animated.View testID="blur-provider.overlay-container" style={[styles.wrapper, { opacity }]}>
      <BlurView blurAmount={5} blurType="light" style={styles.blur} />
      <View style={styles.blur} onTouchStart={handleClose} />
      {cloneElement(children, { closeOverlay: handleClose })}
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
  },
});

export default BlurredOverlay;
