import React, { memo, useCallback, useMemo } from "react";
import { TextTemplate } from "@atoms";
import { SEARCH_INPUT } from "@ids";
import { TextInput, View, ViewStyle } from "react-native";
import styles from "./search-input.styles";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { StyleSheet } from "@styles";
interface Props {
  title: string;
  onChangeText: (text: string) => void;
  styleProps?: ViewStyle;
}

const SearchInput = ({ title, onChangeText, styleProps }: Props) => {
  const onChange = useCallback(
    (input: string) => {
      onChangeText(input);
    },
    [onChangeText]
  );

  const { theme } = useTheme();
  const textInputStyles = useMemo(
    () => ({
      ...styles.textInput,
      borderBottomColor: theme.colors.primary.p600,
    }),
    [theme]
  );

  return (
    <View style={styles.searchWrapper}>
      <View style={StyleSheet.flatten([styles.padding, styleProps])}>
        <View style={styles.text}>
          <TextTemplate type="h3">{title}</TextTemplate>
        </View>
        <TextInput style={textInputStyles} onChangeText={onChange} autoFocus={false} testID={SEARCH_INPUT} />
      </View>
    </View>
  );
};

export default memo(SearchInput);
