import { Style, StyleSheet } from "@styles";
import React from "react";
import { View, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
  alignItems?: ViewStyle["alignItems"];
}

export const Wrapper = ({ children, alignItems }: IProps) => (
  <View style={[styles.wrapper, { alignItems }]}>{children}</View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(24),
  },
});

export default Wrapper;
