import React, { memo, useCallback, useState } from "react";
import { LayoutChangeEvent, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema";
import { TextField } from "@components/molecules";
import { Style } from "@styles";

interface IProps {
  props: GqlTextInput;
  onChange: (value: string) => void;
}

type Props = IProps;

export const ContentItemTextInput = memo(({ props, onChange }: Props) => {
  const { id, heading, value, answerKey, prefixValue } = props;

  const [indentWidth, setIndentWidth] = useState(0);

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    setIndentWidth(event.nativeEvent.layout.width + 8);
  }, []);

  const valueJson = JSON.parse(value);

  return (
    <View style={styles.inputWrapper}>
      {prefixValue ? (
        <Text style={styles.prefixWrapper} onLayout={handleTextLayout}>
          {prefixValue}
        </Text>
      ) : null}
      <TextField
        placeholderIndentSize={indentWidth}
        value={valueJson && answerKey in valueJson ? valueJson[answerKey] : null}
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
