import React, { ComponentProps, memo, useCallback, useState } from "react";
import { LayoutChangeEvent, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema";
import { TextField } from "@components/molecules";
import { Style } from "@styles";
import { ContentItemFormTextInputType } from "@graphql/_core/schema/globalTypes";

interface Props extends GqlTextInput {
  onChange: (value: string) => void;
}

export const ContentItemTextInput = memo(({ onChange, id, heading, value, prefixValue, type }: Props) => {
  const [indentWidth, setIndentWidth] = useState(0);

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    setIndentWidth(event.nativeEvent.layout.width + 8);
  }, []);

  return (
    <View style={styles.inputWrapper}>
      {prefixValue ? (
        <Text style={styles.prefixWrapper} onLayout={handleTextLayout}>
          {prefixValue}
        </Text>
      ) : null}
      <TextField
        type={mapTextFieldType(type)}
        placeholderIndentSize={indentWidth}
        value={value}
        placeholder={heading}
        key={id}
        onChange={onChange}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  prefixWrapper: {
    position: "absolute",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 22,
    fontWeight: "bold",
    left: 0,
    bottom: 3,
    height: 24,
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
