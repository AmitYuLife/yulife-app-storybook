import React, { ComponentProps, memo } from "react";
import { ViewStyle, View } from "react-native";
import { Colours, Style, TemplateTextType, StyleSheet } from "@styles";
import { CHECK_BOX_STATE } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules";
import { TextTemplate } from "@atoms";
import { CheckBoxType } from "./check-box-type";
import { DETOX_ENABLED } from "@services/socket";

interface ICheckBox {
  checked: boolean;
  value: string;
  label: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
  testID?: string;
  colour?: string;
  strokeColor?: string;
  activeCheckboxFillColor?: string;
  checkboxType?: ComponentProps<typeof CheckBoxType>["type"];
  shouldAlignTop?: boolean;
  touchCheckboxOnly?: boolean;
  rowStyles?: ViewStyle;
  textType?: TemplateTextType;
  textStyles?: ViewStyle;
  animated?: boolean;
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
    touchCheckboxOnly,
    rowStyles = {},
    textType,
    textStyles = {},
    animated = false,
  } = props;

  const OuterWrapper = touchCheckboxOnly ? View : TouchableOpacityWithDelay;
  const CheckboxWrapper = touchCheckboxOnly ? TouchableOpacityWithDelay : View;

  return (
    <OuterWrapper
      activeOpacity={1}
      style={[styles.wrapper, shouldAlignTop && styles.alignTopWrapper, rowStyles]}
      onPress={() => {
        if (!touchCheckboxOnly) {
          onChange(value);
        }
      }}
      delay={100}
    >
      <CheckboxWrapper
        onPress={() => {
          if (touchCheckboxOnly) {
            onChange(value);
          }
        }}
        style={shouldAlignTop ? styles.adjustForLineHeight : null}
        testID={CHECK_BOX_STATE(label, checked)}
        collapsable={DETOX_ENABLED ? false : undefined}
        activeOpacity={1}
        delay={100}
      >
        <CheckBoxType
          type={checkboxType}
          checked={checked}
          testID={testID}
          strokeColor={strokeColor}
          activeCheckboxFillColor={activeCheckboxFillColor}
          animated={animated}
        />
      </CheckboxWrapper>
      {children || (
        <View style={StyleSheet.flatten([styles.textWrapper, textStyles])}>
          <TextTemplate type={textType || "b2"} color={colour}>
            {label}
          </TextTemplate>
        </View>
      )}
    </OuterWrapper>
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
    paddingStart: Style.adjust(12),
  } as ViewStyle,
});
