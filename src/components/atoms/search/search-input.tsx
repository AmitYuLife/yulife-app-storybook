import { Text } from "@atoms";
import { SEARCH_INPUT } from "@ids";
import React from "react";
import { TextInput, View, ViewStyle, StyleSheet } from "react-native";
import styles from "./search-input.styles";

interface Props {
  title: string;
  query: string;
  onChangeText: (text: string) => void;
  styleProps?: ViewStyle;
}

function _SearchInput({ title, query, onChangeText, styleProps }: Props) {
  return (
    <View style={styles.searchWrapper}>
      <View style={StyleSheet.flatten([styles.padding, styleProps])}>
        <Text bold={true} style={styles.text}>
          {title}
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={query}
          autoFocus={false}
          testID={SEARCH_INPUT}
        />
      </View>
    </View>
  );
}

const SearchInput = React.memo(_SearchInput);

export default SearchInput;
