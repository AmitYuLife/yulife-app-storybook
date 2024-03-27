import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import { omit, omitBy, isEmpty } from "lodash";
import { ContentItemConfirmCheckboxType, ContentItemChoiceFragment as GqlChoice } from "@graphql/__generated";
import { Style, templateTextStyles, TemplateTextType } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { CheckBox } from "@molecules";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { CONTENT_ITEM_CHOICE } from "@ids";
import colours from "@styles/colours";

export type ChoiceAnswerValue = Record<string, boolean | string> | undefined;

type Props = GqlChoice & {
  value: ChoiceAnswerValue;
  onChange: (value: ChoiceAnswerValue) => void;
};

export const ContentItemChoiceBase = (props: Props) => {
  const {
    id,
    onChange,
    choiceOptions: options,
    value: serverValue = undefined,
    multiSelect,
    otherOption,
    styles: serverStyles,
    labelTextType,
    textStyles,
    rowStyles,
  } = props;
  const value = useMemo(() => serverValue || {}, [serverValue]);
  const [_, refreshState] = useState<number>();

  const otherOptionKey = `__${otherOption?.value}`;
  const otherOptionInputKey = otherOption?.value;

  const otherEnabled = useRef(false);
  const otherOptionValue = useRef("");

  useEffect(() => {
    const newOtherEnabled = !!value[otherOptionInputKey];
    const newOtherOptionValue = value[otherOptionInputKey] || "";

    if (newOtherEnabled && newOtherOptionValue) {
      otherEnabled.current = newOtherEnabled;
      otherOptionValue.current = newOtherOptionValue as string;
      refreshState(Date.now());
    }
  }, [value, otherOptionInputKey]);

  const textInputRef = useRef<TextInput>();

  const focusTextInput = useCallback(() => {
    // Small delay for new state to process (and input field become enabled)
    setTimeout(() => textInputRef.current?.focus?.(), 50);
  }, []);

  const onValueChange = useCallback(
    (optionKey: string, optionValue: boolean | string) => () => {
      // radio buttons cannot be unselected
      if (!multiSelect && optionValue === false) {
        return;
      }

      let update = {
        ...(multiSelect ? value : {}),
        [optionKey]: optionValue,
      };

      // "other" input field updated
      if (otherOptionInputKey === optionKey) {
        otherOptionValue.current = optionValue as string;
      }

      // "other" option checked/unchecked
      if (otherOptionKey === optionKey) {
        otherEnabled.current = !!optionValue;
        update = omit(update, otherOptionKey); // don't store "other" option in data

        // "other" option checked, add input value to data
        if (optionValue) {
          update[otherOptionInputKey] = otherOptionValue.current;
          focusTextInput();
        }

        // "other" option unchecked, remove input value from data
        if (!optionValue) {
          update = omit(update, otherOptionInputKey);
        }
      }

      // remove "other" option if another radio button was selected
      if (!multiSelect && ![otherOptionKey, otherOptionInputKey].includes(optionKey)) {
        otherEnabled.current = false;
      }

      const changeUpdate = omitBy(update, (x) => x === false);

      onChange(isEmpty(changeUpdate) ? undefined : changeUpdate);
    },
    [multiSelect, value, otherOptionInputKey, focusTextInput, otherOptionKey, onChange]
  );

  const textType = (labelTextType as TemplateTextType) || "b2";

  const serverTextStyles = useMemo(() => mapServerStyles(textStyles), [textStyles]);
  const serverRowStyles = useMemo(() => mapServerStyles(rowStyles), [rowStyles]);

  const renderOptions = useMemo(() => (otherOption ? [...options, otherOption] : options), [options, otherOption]);

  return (
    <View key={id} testID={CONTENT_ITEM_CHOICE(id)} style={[styles.choiceWrapper, mapServerStyles(serverStyles)]}>
      {renderOptions.map(({ value: optionKey, label }) => {
        const isOtherOption = otherOptionInputKey === optionKey;
        const currentValue = isOtherOption ? otherOptionKey : optionKey;
        const isChecked = isOtherOption ? otherEnabled.current : !!value[currentValue];

        return (
          <View key={currentValue}>
            <CheckBox
              checked={isChecked}
              value={currentValue}
              label={label}
              onChange={onValueChange(currentValue, !isChecked)}
              checkboxType={
                multiSelect ? ContentItemConfirmCheckboxType.Cubic : ContentItemConfirmCheckboxType.Circular
              }
              textType={textType}
              textStyles={serverTextStyles}
              rowStyles={{ ...serverRowStyles, ...styles.rowStyles }}
              touchCheckboxOnly={isOtherOption}
            >
              {isOtherOption ? (
                <TouchableOpacity activeOpacity={1} onPress={onValueChange(currentValue, true)}>
                  <View
                    style={StyleSheet.flatten([styles.inputWrapper])}
                    pointerEvents={isChecked ? "auto" : "box-only"}
                  >
                    <TextInput
                      key={`${id}-other`}
                      editable={isChecked}
                      testID={`${CONTENT_ITEM_CHOICE(id)}-other`}
                      style={StyleSheet.flatten([
                        Platform.OS === "web" ? styles.inputItemWeb : {},
                        styles.inputItem,
                        getTemplateTextStyles(textType),
                        isChecked ? {} : styles.uncheckedInput,
                      ])}
                      ref={textInputRef}
                      onChangeText={(text) => {
                        onValueChange(optionKey, text)();
                      }}
                      value={otherOptionValue.current ?? ""}
                      keyboardType="default"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoComplete="off"
                      autoCorrect={false}
                      maxLength={otherOption?.maxLength || 60}
                      placeholder={label}
                      placeholderTextColor={colours.neutral.n400}
                    />
                  </View>
                </TouchableOpacity>
              ) : null}
            </CheckBox>
          </View>
        );
      })}
    </View>
  );
};

export const ContentItemChoice = memo((props: GqlChoice) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<ChoiceAnswerValue>(answerKey);

  return <ContentItemChoiceBase {...props} value={value} onChange={onChange} />;
});

const getTemplateTextStyles = (textType?: TemplateTextType) => {
  if (!textType) {
    return {};
  }

  const textStyles = templateTextStyles[textType];

  return textStyles
    ? {
        ...textStyles,
        lineHeight: undefined,
        height: Style.adjust(Number(textStyles.lineHeight) || 20),
      }
    : {};
};

const styles = StyleSheet.create({
  choiceWrapper: {
    marginLeft: Style.adjust(24),
    marginRight: Style.adjust(64),
  },
  rowStyles: {
    alignItems: "center",
  },
  inputWrapper: {
    paddingLeft: Style.adjust(12),
    paddingBottom: Style.adjust(2),
  },
  inputItem: {
    color: colours.neutral.n800,
    width: Style.adjust(200),
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  inputItemWeb: {
    outlineStyle: "none",
  } as ViewStyle,
  uncheckedInput: {
    color: colours.neutral.n400,
  },
});
