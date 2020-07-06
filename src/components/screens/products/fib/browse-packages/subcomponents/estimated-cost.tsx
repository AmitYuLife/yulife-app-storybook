import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Header, Heading, DEFAULT_TEXT_PAD_LEFT } from "./common";

interface Props {
  heading: string;
}

export const EstimatedCost = memo(({ heading }: Props) => (
  <View style={styles.wrapper}>
    <Header title="Estimated cost" />
    <Heading wrapperStyle={styles.headingWrapper} title={heading} />
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    paddingVertical: Style.adjust(32),
    paddingLeft: DEFAULT_TEXT_PAD_LEFT,
    backgroundColor: "white",
  } as ViewStyle,
  headingWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});
