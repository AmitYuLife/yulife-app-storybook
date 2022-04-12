import React, { ComponentProps, memo } from "react";
import { ViewStyle, View, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { CHECK_BOX_STATE } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";
import { CheckBoxType } from "./check-box-type";

interface ICheckBox {
  checked: boolean;
  value: string;
  label: string;
  onChange: (value: string) => void;
  children?: React.ReactChild;
  testID?: string;
  colour?: string;
  strokeColor?: string;
  activeCheckboxFillColor?: string;
  checkboxType?: ComponentProps<typeof CheckBoxType>["type"];
  shouldAlignTop?: boolean;
}

function CheckBox(props: ICheckBox) {
  const {
    checked,
    value,
    onChange,
    label,
    children,
    testID,
    colour = Colours.neutral.n800,
    strokeColor = Colours.neutral.n400,
    activeCheckboxFillColor = Colours.primary.p600,
    checkboxType = "circular",
    shouldAlignTop = false,
  } = props;

  return (
    <TouchableOpacityWithDelay
      activeOpacity={1}
      style={[styles.wrapper, shouldAlignTop && styles.alignTopWrapper]}
      onPress={() => onChange(value)}
    >
      <View style={shouldAlignTop ? styles.adjustForLineHeight : null} testID={CHECK_BOX_STATE(label, checked)}>
        <CheckBoxType
          type={checkboxType}
          checked={checked}
          testID={testID}
          strokeColor={strokeColor}
          activeCheckboxFillColor={activeCheckboxFillColor}
        />
      </View>
      {children || (
        <View style={styles.textWrapper}>
          <TextTemplate type="b2" color={colour}>
            {label}
          </TextTemplate>
        </View>
      )}
    </TouchableOpacityWithDelay>
  );
}

export default memo(CheckBox);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: Style.adjust(6),
    alignItems: "center",
  } as ViewStyle,
  alignTopWrapper: {
    alignItems: "flex-start",
  } as ViewStyle,
  adjustForLineHeight: {
    marginTop: Style.adjust(6),
  } as ViewStyle,
  textWrapper: {
    paddingLeft: Style.adjust(12),
  } as ViewStyle,
});
