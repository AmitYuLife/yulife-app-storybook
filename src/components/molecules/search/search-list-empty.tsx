import React from "react";
import { View, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";

interface Props {
  emptyText: string;
}

function _SearchListEmpty({ emptyText }: Props) {
  return (
    <View style={styles.emptyStateView}>
      <Text>{emptyText}</Text>
    </View>
  );
}

const SearchListEmpty = React.memo(_SearchListEmpty);

export default SearchListEmpty;

const styles = StyleSheet.create({
  emptyStateView: {
    paddingHorizontal: Style.adjust(32),
    paddingVertical: Style.adjust(16),
    color: Colours.neutral.n800,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
  } as ViewStyle,
});
