import React, { memo, useCallback } from "react";
import { View } from "react-native";
import { Icon } from "@atoms";
import { TouchableOpacityWithDelay, TextField, ListPicker } from "@molecules";
import { StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { VoidFunction, addCommasToNumber } from "@utils";
import { Navigation } from "@navigation/main";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { ContentItemDropdownInput as GqlInput } from "@graphql/_core/schema";
import { MODALS } from "@navigation/constants";
interface Option {
  label: string;
  value: string;
  onPress: VoidFunction;
}
interface Props {
  errorMessage?: string;
  heading: string;
  value: string;
  options: Option[];
  selectInstruction: string;
  onChange?: (value: string) => void;
}

export const ContentItemDropdownInputBase = memo((props: Props) => {
  const { heading, value, errorMessage, options, selectInstruction, onChange } = props;
  const selectedOption = options.find((option) => option.value === value);

  const onPress = useCallback(async () => {
    const child = <ListPicker instruction={selectInstruction} items={options} />;
    await Navigation.showOverlayWithChild(child);
  }, [options, selectInstruction]);

  const handleChanged = useCallback(
    (val: string) => {
      if (!onChange) {
        return;
      }

      onChange(val);
    },
    [onChange]
  );

  return (
    <>
      <TouchableOpacityWithDelay onPress={onPress} style={styles.wrapper}>
        <View style={styles.listPickerWrapper}>
          <View style={styles.textWrapper}>
            <TextField
              value={selectedOption?.label || value}
              placeholder={heading}
              onChange={handleChanged}
              editable={false}
              inputTextStyle={styles.text}
              showError={!!errorMessage}
              errorMessage={errorMessage}
            />
          </View>
          <View style={styles.iconWrapper}>
            <Icon.ArrowIcon direction="down" />
          </View>
        </View>
      </TouchableOpacityWithDelay>
    </>
  );
});

export const ContentItemDropdownInput = memo((props: GqlInput) => {
  const { answerKey, dropdownOptions, validation, ...rest } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey, formatValue);
  const options = dropdownOptions.map(({ label, value: val }) => ({
    label,
    value: val,
    onPress: () => {
      onChange(val);
      Navigation.dismissOverlay(MODALS.blurredOverlay);
    },
  }));

  const errorMessage =
    (validation?.length &&
      value &&
      validation.find((v) => !new RegExp(v.validationValue).test(value))?.validationName) ||
    "";

  return (
    <ContentItemDropdownInputBase
      {...rest}
      errorMessage={errorMessage}
      options={options}
      value={value}
      onChange={onChange}
    />
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    marginHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(24),
  } as ViewStyle,
  listPickerWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  } as ViewStyle,
  textWrapper: {
    flex: 1,
    paddingRight: Style.adjust(6),
  } as ViewStyle,
  iconWrapper: {
    marginBottom: Style.adjust(6),
  } as ViewStyle,
  text: {
    color: Colours.neutral.black,
  } as ViewStyle,
});

const formatValue = (value: unknown) => {
  if (!value) {
    return null;
  }

  if (typeof value === "number") {
    return String(addCommasToNumber(value));
  }

  return value as string;
};

export default ContentItemDropdownInput;
