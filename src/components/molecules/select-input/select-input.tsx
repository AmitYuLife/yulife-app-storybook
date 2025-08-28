import React, { useState, useCallback, memo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { Navigation } from "@navigation/main";
import { Image, TextTemplate } from "@atoms";
import { ListPicker, TouchableOpacityWithDelay, TextInputError } from "@molecules";
import { ISelectInput, ISelectInputOption } from "./select-input.types";
import { MODALS } from "@navigation/constants";
import { Colours, Style } from "@styles";
import { ArrowButton } from "../arrow-button";

const getBorderColour = (error: boolean, value: boolean) => {
  if (error) {
    return Colours.lightRed;
  }

  if (value) {
    return Colours.picker.filled;
  }

  return Colours.picker.empty;
};

const SelectInput = ({
  iconUri,
  icon,
  onChange,
  placeholder,
  modalPlaceHolder,
  defaultValue,
  errorMessage,
  options,
}: ISelectInput) => {
  const [value, setValue] = useState(defaultValue);
  const closeModal = useCallback(() => Navigation.dismissOverlay(MODALS.blurredOverlay), []);

  const onPress = useCallback(async () => {
    const onOptionPress = (option: ISelectInputOption) => {
      setValue(option);
      onChange(option.value);
      closeModal();
    };

    const items = options?.map((option) => ({
      ...option,
      onPress: () => onOptionPress(option),
    }));

    const children = <ListPicker instruction={modalPlaceHolder} items={items} />;
    await Navigation.showOverlayWithChild({ children });
  }, [closeModal, onChange, options, modalPlaceHolder]);

  return (
    <>
      <TouchableOpacityWithDelay
        onPress={onPress}
        style={StyleSheet.flatten([
          styles.wrapper,
          { borderBottomColor: getBorderColour(!!errorMessage, !!value?.label) },
        ])}
      >
        {iconUri ? <Image source={{ uri: iconUri }} width={Style.adjust(24)} height={Style.adjust(24)} /> : icon}
        <View style={styles.textWrapper}>
          <TextTemplate type="b2" color={value?.label ? Colours.darkGray : Colours.neutral.n400}>
            {value?.label || placeholder}
          </TextTemplate>
        </View>
        <View style={styles.arrow}>
          <ArrowButton color={Colours.neutral.n400} />
        </View>
      </TouchableOpacityWithDelay>
      {!errorMessage ? null : <TextInputError>{errorMessage}</TextInputError>}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: 50,
    alignItems: "center",
    borderBottomColor: Colours.picker.empty,
    borderBottomWidth: 1,
    flexDirection: "row",
  } as ViewStyle,
  arrow: {
    position: "absolute",
    right: 0,
    transform: [{ rotate: "90deg" }],
  } as ImageStyle,
  textWrapper: {
    marginStart: Style.adjust(16),
  } as ViewStyle,
});

export default memo(SelectInput);
