import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { ListPicker } from "@components/molecules";
import { BlurView } from "@react-native-community/blur";
import { ISelectInputOption } from "@atoms/select-input/select-input.types";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface IProps {
  options: ISelectInputOption[];
  onPress: (option: ISelectInputOption) => void;
  closeModal: () => void;
  title: string;
}

const commonProps = {
  duration: 300,
  useNativeDriver: true,
};

const ListPickerModal = ({ options, onPress, closeModal, title }: IProps) => {
  const items = useMemo(
    () =>
      options.map((option) => ({
        ...option,
        onPress: () => onPress(option),
      })),
    [options]
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

  const handleClose = () => {
    fadeOut.start(() => {
      closeModal();
    });
  };

  const onTouchStart = useCallback(() => closeModal(), [closeModal]);

  useBackHandler(() => {
    closeModal();
    return true;
  });

  return (
    <>
      <Animated.View testID="blur-provider.overlay-container" style={[styles.wrapper, { opacity }]}>
        <BlurView blurAmount={5} blurType="light" style={styles.blur} />
        <View style={styles.blur} onTouchStart={onTouchStart} />
        <ListPicker onPressCancel={handleClose} instruction={title} items={items} />
      </Animated.View>
    </>
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

export default ListPickerModal;
