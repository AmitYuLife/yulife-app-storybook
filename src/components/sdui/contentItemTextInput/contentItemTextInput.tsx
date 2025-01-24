import React, { ComponentProps, memo, useCallback, useState } from "react";
import { KeyboardType, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { CONTENT_ITEM_INPUT } from "@ids";
import {
  ContentItemFormTextInputType,
  ContentItemTextInputFragment as GqlTextInput,
  ContentItemTextInputValidationType as ValidationType,
} from "@graphql/__generated";
import { TextField } from "@components/molecules";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import media, { DEVICES } from "@styles/media";
import { addCommasToNumber } from "@utils";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";

interface Props extends GqlTextInput {
  value: string;
  onChange: (value: string) => void;
}

const getValidationError = (value: string, validation: GqlTextInput["validation"]) => {
  return (
    validation.find((v) => {
      switch (v.validationType) {
        case ValidationType.MinNumber:
          return Number(value) < Number(v.validationValue);
        case ValidationType.MaxNumber:
          return Number(value) > Number(v.validationValue);
        case ValidationType.Regex:
        default:
          return !new RegExp(v.validationValue).test(value);
      }
    })?.validationName || ""
  );
};

export const ContentItemTextInputBase = ({
  onChange,
  id,
  heading,
  value,
  prefixValue,
  type,
  validation,
  styles: serverStyles,
  inputTextStyles,
  keyboardType,
  showErrorWhenFocused,
}: Props) => {
  const [indentWidth, setIndentWidth] = useState(0);

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    setIndentWidth(event.nativeEvent.layout.width + 8);
  }, []);

  const errorMessage = validation?.length && value && getValidationError(value, validation);

  return (
    <View style={[styles.inputWrapper, mapServerStyles(serverStyles)]}>
      {prefixValue ? (
        <View style={styles.prefixWrapper} onLayout={handleTextLayout}>
          <TextTemplate type="h3">{prefixValue}</TextTemplate>
        </View>
      ) : null}
      <TextField
        type={mapTextFieldType(type)}
        placeholderIndentSize={indentWidth}
        value={value}
        placeholder={heading}
        key={id}
        onChange={onChange}
        testID={CONTENT_ITEM_INPUT(id)}
        showError={!!errorMessage}
        errorMessage={errorMessage}
        inputTextStyle={mapServerStyles(inputTextStyles)}
        keyboardType={mapKeyboardType(keyboardType)}
        showErrorWhenFocused={showErrorWhenFocused}
      />
    </View>
  );
};

export const ContentItemTextInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey, formatValue);

  return <ContentItemTextInputBase {...props} value={value} onChange={onChange} />;
});

const TOP = media.select(
  [
    {
      condition: Style.DEVICE_HEIGHT >= DEVICES.iPhone12ProMax.height,
      value: 54,
    },
  ],
  52
);

const styles = StyleSheet.create({
  prefixWrapper: {
    position: "absolute",
    left: 0,
    top: TOP,
    bottom: 0,
    height: 32,
  },
  inputWrapper: {
    paddingTop: Style.adjust(24),
    marginHorizontal: Style.adjust(24),
  } as ViewStyle,
});

const mapTextFieldType = (type: ContentItemFormTextInputType): ComponentProps<typeof TextField>["type"] => {
  switch (type) {
    case ContentItemFormTextInputType.Number:
      return "Number";
    case ContentItemFormTextInputType.Email:
    default:
      return "Text";
  }
};

const formatValue = (value: unknown) => {
  if (!value) {
    return null;
  }

  if (typeof value === "number") {
    return String(addCommasToNumber(value));
  }

  return value as string;
};

function mapKeyboardType(keyboardType: string): KeyboardType {
  switch (keyboardType) {
    case "default":
    case "number-pad":
    case "decimal-pad":
    case "numeric":
    case "email-address":
    case "phone-pad":
    case "url":
      return keyboardType as KeyboardType;
  }

  return null;
}
