import React, { useEffect, useMemo, useRef } from "react";
import { Animated, Platform, StyleSheet } from "react-native";
import { ListPicker } from "@components/molecules";
import { BlurView } from "react-native-blur";
import { ISelectInputOption } from "@atoms/select-input/select-input.types";

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

  return (
    <>
      <Animated.View testID="blur-provider.overlay-container" style={[styles.wrapper, { opacity }]}>
        <BlurView blurAmount={5} blurType="light" style={styles.blur} />
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
    backgroundColor: Platform.select({ android: "rgba(255,255,255,0.85)", ios: "transparent" }),
  },
});

export default ListPickerModal;
