import React, { memo, useCallback } from "react";
import { TextTemplate } from "@atoms";
import { SEARCH_INPUT } from "@ids";
import { TextInput, View, ViewStyle } from "react-native";
import styles from "./search-input.styles";

import { StyleSheet } from "@styles";
interface Props {
  title: string;
  onChangeText: (text: string) => void;
  styleProps?: ViewStyle;
}

function SearchInput({ title, onChangeText, styleProps }: Props) {
  const onChange = useCallback(
    (input: string) => {
      onChangeText(input);
    },
    [onChangeText]
  );

  return (
    <View style={styles.searchWrapper}>
      <View style={StyleSheet.flatten([styles.padding, styleProps])}>
        <View style={styles.text}>
          <TextTemplate type="h3">{title}</TextTemplate>
        </View>
        <TextInput style={styles.textInput} onChangeText={onChange} autoFocus={false} testID={SEARCH_INPUT} />
      </View>
    </View>
  );
}

export default memo(SearchInput);
