import React, { cloneElement, ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import { Animated, Modal, View, ViewStyle } from "react-native";
import { Navigation } from "@navigation/main";
import { useBackHandler, usePressedInWithDelay } from "@hooks";
import { MODALS } from "@navigation/constants";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";

import { StyleSheet } from "@styles";
import { IBlurProps } from "@atoms/blur/blur";
import BlurredWrapper from "@atoms/blurred-wrapper/blurred-wrapper";

interface IProps extends Pick<Partial<IBlurProps>, "type"> {
  children: ReactElement;
  withBlurBackground: boolean;
  wrapperStyle?: ViewStyle;
  closeOnBlur?: boolean;
  backgroundColor?: string;
  onClose?: VoidFunctionOrSduiActionPayload;
  // set withModal to true when you need to show the overlay on top of another modal (android specific)
  withModal?: boolean;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

// TODO: This sucks too many props, unncessary animation, purge it
const BlurredOverlay = ({
  children,
  closeOnBlur = true,
  type = "light",
  onClose,
  withModal = false,
  wrapperStyle,
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

  const Wrapper = useMemo(
    () => (
      <BlurredWrapper testID="blur-provider.overlay-container" type={type} contentStyle={wrapperStyle}>
        <>
          <View style={styles.blur} onTouchStart={closeOnBlur ? handlePress : null} />
          {cloneElement(children as React.ReactElement<{ closeOverlay: () => void }>, { closeOverlay: handlePress })}
        </>
      </BlurredWrapper>
    ),
    [type, closeOnBlur, handlePress, children, wrapperStyle]
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
