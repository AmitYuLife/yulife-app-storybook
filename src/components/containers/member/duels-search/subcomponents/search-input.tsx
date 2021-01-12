import { Text } from "@atoms";
import React from "react";
import { TextInput, View } from "react-native";
import styles from "./search-input.styles";

interface Props {
  title: string;
  query: string;
  onChangeText: (text: string) => void;
}

function _SearchInput({ title, query, onChangeText }: Props) {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.padding}>
        <Text bold={true} style={styles.text}>
          {title}
        </Text>
        <TextInput style={styles.textInput} onChangeText={onChangeText} value={query} autoFocus={true} />
      </View>
    </View>
  );
}

const SearchInput = React.memo(_SearchInput);

export default SearchInput;
