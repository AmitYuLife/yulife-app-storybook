import React, { memo } from "react";
import { StyleSheet, View, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Heading } from "./common";
import { Text } from "@atoms";
import { CoverType } from "../../../../../../graphql/_core/schema/globalTypes";

interface Props {
  header: CoverType;
  content: string;
}

export const HowItWorks = memo(({ content }: Props) => {
  return (
    <View>
      <Heading title="How it works" />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  content: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.products.fib.n800,
  } as TextStyle,
});
