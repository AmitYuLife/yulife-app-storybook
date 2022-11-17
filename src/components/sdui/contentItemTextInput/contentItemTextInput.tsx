import React, { ComponentProps, memo, useCallback, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { CONTENT_ITEM_INPUT } from "@ids";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema";
import { TextField } from "@components/molecules";
import { Style } from "@styles";
import { ContentItemFormTextInputType } from "@graphql/_core/schema/globalTypes";
import { TextTemplate } from "@atoms";
import media, { DEVICES } from "@styles/media";
import { useSduiActionUpdateBus } from "../_hooks";
import { addCommasToNumber } from "@utils";
import { mapServerStyles } from "../_utils/mapServerStyles";

interface Props extends GqlTextInput {
  value: string;
  onChange: (value: string) => void;
}

export const ContentItemTextInput = memo(
  ({ answerKey, onChange, id, heading, value, prefixValue, type, validation, styles: serverStyles }: Props) => {
    const [indentWidth, setIndentWidth] = useState(0);
    const [selectedValue, setSelectedValue] = useState(formatValue(value));
    const { updateBus } = useSduiActionUpdateBus();

    const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
      setIndentWidth(event.nativeEvent.layout.width + 8);
    }, []);

    const onValueChange = useCallback(
      (val: string) => {
        if (onChange) {
          onChange(val);
        }

        updateBus(answerKey, val);
        setSelectedValue(formatValue(val));
      },
      [answerKey, onChange, updateBus]
    );

    const errorMessage =
      (validation?.length &&
        selectedValue &&
        validation.find((v) => !new RegExp(v.validationValue).test(selectedValue))?.validationName) ||
      "";

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
          value={selectedValue}
          placeholder={heading}
          key={id}
          onChange={onValueChange}
          testID={CONTENT_ITEM_INPUT(id)}
          showError={!!errorMessage}
          errorMessage={errorMessage}
        />
      </View>
    );
  }
);

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
    case ContentItemFormTextInputType.number:
      return "Number";
    case ContentItemFormTextInputType.email:
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
