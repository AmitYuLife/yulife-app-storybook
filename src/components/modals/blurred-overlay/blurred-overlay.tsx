import React, { cloneElement, ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import { Animated, Modal, StyleSheet, View, ViewStyle } from "react-native";
import { Navigation } from "@navigation/main";
import { BlurView, BlurViewProps } from "@react-native-community/blur";
import { useBackHandler, usePressedInWithDelay } from "@hooks";
import { MODALS } from "@navigation/constants";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";

interface IProps extends Pick<BlurViewProps, "blurAmount" | "blurType"> {
  children: ReactElement;
  withBlurBackground: boolean;
  wrapperStyle?: ViewStyle;
  closeOnBlur?: boolean;
  blurAmount?: number;
  backgroundColor?: string;
  onClose?: VoidFunctionOrSduiActionPayload;
  // set withModal to true when you need to show the overlay on top of another modal (android specific)
  withModal?: boolean;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

const BlurredOverlay = ({
  children,
  withBlurBackground,
  wrapperStyle,
  closeOnBlur = true,
  blurType = "light",
  blurAmount = 5,
  backgroundColor = "rgba(0,0,0,.5)",
  onClose,
  withModal = false,
}: IProps) => {
  const { handleSduiAction: handleOnClose } = useSduiCallbackFunctionOrReduxAction(onClose, () =>
    Navigation.dismissOverlay(MODALS.blurredOverlay)
  );
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

  const handleClose = useCallback(() => {
    fadeOut.start(({ finished }) => {
      if (!finished) {
        return;
      }

      handleOnClose();
    });
  }, [fadeOut, handleOnClose]);

  useBackHandler(() => {
    handleClose();
    return true;
  });

  const { handlePress } = usePressedInWithDelay({ onPress: handleClose });

  const wrapperStyles = useMemo((): ViewStyle[] => {
    return [styles.wrapper, { opacity, ...wrapperStyle }, { backgroundColor }];
  }, [backgroundColor, opacity, wrapperStyle]);

  const Wrapper = useMemo(
    () => (
      <Animated.View testID="blur-provider.overlay-container" style={wrapperStyles} accessibilityViewIsModal={true}>
        {!withBlurBackground ? null : <BlurView blurAmount={blurAmount} blurType={blurType} style={styles.blur} />}
        <View style={styles.blur} onTouchStart={closeOnBlur ? handlePress : null} />
        {cloneElement(children, { closeOverlay: handlePress })}
      </Animated.View>
    ),
    [wrapperStyles, withBlurBackground, blurAmount, blurType, closeOnBlur, children, handlePress]
  );

  return withModal ? <Modal transparent={true}>{Wrapper}</Modal> : Wrapper;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    // without border overlay will not be dismissed for android devices on press outside the view
    borderColor: "transparent",
  },
});

export default BlurredOverlay;
