import React, { useState, useCallback, memo } from "react";
import { ImageStyle, StyleSheet, View, ViewStyle } from "react-native";
import { RemoteImage, TextInputError } from "@atoms";
import { TextTemplate } from "@atoms/text/text-template";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { MODALS } from "@navigation/constants";
import { Colours, Style } from "@styles";
import { Navigation } from "react-native-navigation";
import { ArrowRight } from "@atoms/icon/arrow-right";
import { ISelectInput, ISelectInputOption } from "@atoms/select-input/select-input.types";
import { showSelectInputModal } from "@atoms/select-input/select-input.helper";

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
  const closeModal = useCallback(() => Navigation.dismissOverlay(MODALS.listPicker), []);

  const onPress = useCallback(
    async () =>
      await showSelectInputModal({
        title: modalPlaceHolder,
        options,
        onPress: (option: ISelectInputOption) => {
          setValue(option);
          onChange(option.value);
          closeModal();
        },
      }),
    [closeModal, onChange, options, modalPlaceHolder]
  );

  return (
    <>
      <TouchableOpacityWithDelay
        onPress={onPress}
        style={StyleSheet.flatten([
          styles.wrapper,
          { borderBottomColor: getBorderColour(!!errorMessage, !!value?.label) },
        ])}
      >
        {iconUri ? <RemoteImage uri={iconUri} width={Style.adjust(24)} height={Style.adjust(24)} /> : icon}
        <View style={styles.textWrapper}>
          <TextTemplate type="b2" color={value?.label ? Colours.darkGray : Colours.neutral.n400}>
            {value?.label || placeholder}
          </TextTemplate>
        </View>
        <View style={styles.arrow}>
          <ArrowRight color={Colours.neutral.n400} />
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
    marginLeft: Style.adjust(16),
  } as ViewStyle,
});

export default memo(SelectInput);
