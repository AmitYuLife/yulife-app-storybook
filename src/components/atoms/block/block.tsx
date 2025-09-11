import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, StyleSheet } from "@styles";

interface IProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  testID?: string;
}

const Block = ({ children, style, testID }: IProps) => (
  <View style={[styles.wrapper, style]} testID={testID}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 8,
  },
});

export default memo(Block);
