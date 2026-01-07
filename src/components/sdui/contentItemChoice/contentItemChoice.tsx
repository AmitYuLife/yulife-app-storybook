import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Platform, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";
import { isEmpty, omit, omitBy } from "lodash";
import {
  ContentItemChoiceDesign,
  ContentItemChoiceFragment as GqlChoice,
  ContentItemConfirmCheckboxType,
} from "@graphql/__generated";
import { Style, templateTextStyles, TemplateTextType, StyleSheet } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { CheckBox } from "@molecules";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { CONTENT_ITEM_CHOICE } from "@ids";
import colours from "@styles/colours";
import { templateTextStylesLineHeight } from "@styles/textStyles";

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
    design: serverDesign,
    alignTop = false,
  } = props;
  const value = useMemo(() => serverValue || {}, [serverValue]);
  const design = serverDesign ?? ContentItemChoiceDesign.Default;
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

  const textInputRef = useRef<TextInput>(null);

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

  const designStyles: typeof defaultDesignStyles =
    design === ContentItemChoiceDesign.Default ? defaultDesignStyles : ({} as never);

  const isOtherOptionMultiline = design === ContentItemChoiceDesign.Default;

  return (
    <View
      key={id}
      testID={CONTENT_ITEM_CHOICE(id)}
      style={[baseStyles.choiceWrapper, designStyles.choiceWrapper || {}, mapServerStyles(serverStyles)]}
    >
      {renderOptions.map(({ value: optionKey, label }) => {
        const isOtherOption = otherOptionInputKey === optionKey;
        const currentValue = isOtherOption ? otherOptionKey : optionKey;
        const isChecked = isOtherOption ? otherEnabled.current : !!value[currentValue];

        const alignTopCheckbox = alignTop && (!isOtherOption || isOtherOptionMultiline);

        return (
          <View key={currentValue}>
            <CheckBox
              testID={`${id}_${optionKey}`}
              checked={isChecked}
              value={currentValue}
              label={label}
              onChange={onValueChange(currentValue, !isChecked)}
              checkboxType={
                multiSelect ? ContentItemConfirmCheckboxType.Cubic : ContentItemConfirmCheckboxType.Circular
              }
              textType={textType}
              textStyles={{
                ...(designStyles.checkboxText || {}),
                ...serverTextStyles,
              }}
              rowStyles={{
                ...(alignTopCheckbox ? { alignItems: "flex-start", marginTop: 0 } : { alignItems: "center" }),
                ...(designStyles.rowStyles || {}),
                ...(isChecked ? designStyles.checkedRowStyles || {} : {}),
                ...serverRowStyles,
              }}
              touchCheckboxOnly={isOtherOption}
              animated={true}
              shouldAlignTop={alignTopCheckbox && isOtherOption} // for internal checkbox marginTop
            >
              {isOtherOption ? (
                <TouchableOpacity
                  style={designStyles.otherOptionWrapper}
                  activeOpacity={1}
                  onPress={onValueChange(currentValue, true)}
                >
                  <View
                    style={StyleSheet.flatten([baseStyles.inputWrapper, designStyles.inputWrapper || {}])}
                    pointerEvents={isChecked ? "auto" : "box-only"}
                  >
                    <TextInput
                      key={`${id}-other`}
                      editable={isChecked}
                      testID={`${CONTENT_ITEM_CHOICE(id)}-other`}
                      style={StyleSheet.flatten([
                        Platform.OS === "web" ? baseStyles.inputItemWeb : {},
                        baseStyles.inputItem,
                        designStyles.textInput || {},
                        getTemplateTextStyles(textType),
                        isChecked ? {} : baseStyles.uncheckedInput,
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
                      multiline={isOtherOptionMultiline}
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

  // we use the line height from the text styles to calc min/max heights
  const lineHeight = templateTextStylesLineHeight[textType];

  return textStyles
    ? {
        ...textStyles,
        lineHeight: undefined,
        minHeight: Style.adjust(lineHeight || 20),
        maxHeight: Style.adjust(lineHeight * 3), // 3 lines
      }
    : {};
};

const baseStyles = StyleSheet.create({
  choiceWrapper: {
    marginStart: Style.adjust(24),
    marginEnd: Style.adjust(64),
  },
  inputWrapper: {
    paddingStart: Style.adjust(12),
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
    alignContent: "center",
  } as unknown as ViewStyle,
  uncheckedInput: {
    color: colours.neutral.n400,
  },
});

const defaultDesignStyles = StyleSheet.create({
  choiceWrapper: {
    marginEnd: Style.adjust(24),
  },
  rowStyles: {
    flexDirection: "row-reverse",
    textAlign: "left",
    justifyContent: "space-between",

    borderWidth: 1,
    borderColor: colours.neutral.n100,
    borderRadius: Style.adjust(16),

    paddingHorizontal: Style.adjust(24),
    paddingVertical: Style.adjust(16),
    marginBottom: Style.adjust(16),
  },
  checkedRowStyles: {
    backgroundColor: "#FFF5FA",
    borderColor: colours.primary.p60,
  },
  checkboxText: {
    display: "flex",
    width: "85%",
    paddingStart: 0,
  },
  otherOptionWrapper: {
    width: "85%",
  },
  inputWrapper: {
    paddingStart: 0,
    paddingBottom: 0,
  },
  textInput: {
    width: "100%",
  },
});
