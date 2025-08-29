import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, StyleSheet } from "@styles";

interface IProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Block = ({ children, style }: IProps) => <View style={[styles.wrapper, style]}>{children}</View>;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 8,
  },
});

export default memo(Block);
