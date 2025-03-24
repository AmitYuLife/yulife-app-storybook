import React, { ComponentProps, memo, useCallback, useContext, useState } from "react";
import { KeyboardType, LayoutChangeEvent, StyleSheet, TextInputProps, View, ViewStyle } from "react-native";
import { CONTENT_ITEM_INPUT } from "@ids";
import {
  ContentItemFormTextInputType,
  ContentItemTextInputAlignment,
  ContentItemTextInputFragment as GqlTextInput,
  ContentItemTextInputValidationType as ValidationType,
} from "@graphql/__generated";
import { TextField } from "@components/molecules";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import media, { DEVICES } from "@styles/media";
import { formatNumber } from "@utils";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { SduiDispatchContext } from "../_context/SduiProvider";

interface Props extends GqlTextInput {
  value: string;
  onChange: (value: string) => void;
}

const getValidationError = (value: string, validation: GqlTextInput["validation"]) => {
  const strippedNumber = value?.replace(/,/g, "");
  const numberValue = Number(strippedNumber);
  const decimalPart = strippedNumber?.split?.(".")?.[1];

  return (
    validation.find((v) => {
      switch (v.validationType) {
        case ValidationType.MinNumber:
          return numberValue < Number(v.validationValue);
        case ValidationType.MaxNumber:
          return numberValue > Number(v.validationValue);
        case ValidationType.MaximumDecimalNumbers:
          if (!decimalPart) {
            return false;
          }

          return decimalPart.length > Number(v.validationValue);
        // Old validations have no validateType, can't assume that default is the regex.
        case ValidationType.Regex:
        case null:
        case undefined:
          return !new RegExp(v.validationValue).test(value);
        /** older versions of the app with validationType should not fallback to regex
         * it was the only supported validationValue before validationType was introduced on 4.48
         */
        default:
          return false;
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
  prefixTextStyles,
  inputTextAlign,
  hideErrorIcon,
  maximumFractionDigits,
}: Props) => {
  const [indentWidth, setIndentWidth] = useState(0);

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    setIndentWidth(event.nativeEvent.layout.width + 8);
  }, []);

  const errorMessage = validation?.length && value && getValidationError(value, validation);

  return (
    <View style={[styles.inputWrapper, mapServerStyles(serverStyles)]}>
      {prefixValue ? (
        <View style={[styles.prefixWrapper, mapServerStyles(prefixTextStyles)]} onLayout={handleTextLayout}>
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
        textAlign={castTextInputAlignGqlToProps(inputTextAlign)}
        hideErrorIcon={hideErrorIcon}
        maximumFractionDigits={maximumFractionDigits}
      />
    </View>
  );
};

export const ContentItemTextInput = memo((props: Props) => {
  const { answerKey, localDispatchActionsOnChange } = props;
  const { value, onChange } = useSduiOnChange<string>(
    answerKey,
    formatValue({ maximumFractionDigits: props.maximumFractionDigits })
  );

  const localContextDispatch = useContext(SduiDispatchContext);

  const onInputChange = useCallback(
    (val: string) => {
      onChange(val);

      if (localDispatchActionsOnChange?.length) {
        localDispatchActionsOnChange.forEach((action) => {
          localContextDispatch({
            type: action.type,
            payload: action.payload,
          });
        });
      }
    },
    [onChange, localDispatchActionsOnChange, localContextDispatch]
  );

  return <ContentItemTextInputBase {...props} value={value} onChange={onInputChange} />;
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

const formatValue =
  ({ maximumFractionDigits = 2 }: { maximumFractionDigits?: number }) =>
  (value: unknown) => {
    if (!value) {
      return null;
    }

    if (typeof value === "number") {
      return formatNumber(String(value), maximumFractionDigits);
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

const castTextInputAlignGqlToProps = (inputTextAlign: GqlTextInput["inputTextAlign"]): TextInputProps["textAlign"] => {
  switch (inputTextAlign) {
    case ContentItemTextInputAlignment.Center:
      return "center";
    case ContentItemTextInputAlignment.Left:
      return "left";
    case ContentItemTextInputAlignment.Right:
      return "right";
    default:
      return undefined;
  }
};
