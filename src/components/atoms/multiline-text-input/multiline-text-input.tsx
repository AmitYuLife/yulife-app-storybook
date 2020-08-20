import React, { useState } from "react";
import { StyleSheet, TextInput as Input, View, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  numberOfLines?: number;
  onFocus?: () => void;
  placeholder?: string;
  testID?: string;
}

function _MultilineTextInput(props: IProps) {
  const [isFocused, setFocusedState] = useState(false);

  const { value, onChange, testID, placeholder = "", numberOfLines = 4, onFocus } = props;

  return (
    <View style={StyleSheet.flatten([styles.wrapper, isFocused ? styles.wrapperFocused : {}])}>
      <Input
        allowFontScaling={false}
        testID={testID}
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }

          return setFocusedState(true);
        }}
        onBlur={() => setFocusedState(false)}
        onChangeText={onChange}
        textAlignVertical="top"
        value={value}
        autoCapitalize="none"
        numberOfLines={numberOfLines}
        autoCorrect={false}
        multiline={true}
        autoFocus={false}
        style={styles.input}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        placeholderTextColor="#ABABAD"
      />
    </View>
  );
}

export const MultilineTextInput = React.memo(_MultilineTextInput);

const styles = StyleSheet.create({
  input: {
    color: Colours.darkGray,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    height: 140,
  } as TextStyle,
  wrapper: {
    backgroundColor: "#FAFAFE",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 8,
  } as ViewStyle,
  wrapperFocused: {
    borderColor: "#F664A4",
  } as ViewStyle,
});
