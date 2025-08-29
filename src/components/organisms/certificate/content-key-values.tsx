import React from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { CERTIFICATE_KEY_VALUES } from "@ids";

interface Pair {
  label: string;
  value: string;
}

interface Props {
  pairs: Pair[];
}
export const ContentKeyValues = ({ pairs }: Props) => (
  <View style={styles.wrapper}>
    {pairs.map((pair, index) => (
      <View key={index} style={styles.pair} testID={CERTIFICATE_KEY_VALUES(pair.label, pair.value)}>
        <View style={styles.flexLeft}>
          <TextTemplate type="b2">{pair.label}</TextTemplate>
        </View>
        <View style={styles.flexRight}>
          <TextTemplate textAlign="right" type="b2b">
            {pair.value}
          </TextTemplate>
        </View>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(8),
    paddingBottom: Style.adjust(78),
  } as ViewStyle,
  pair: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
  } as ViewStyle,
  flexLeft: {
    flex: 1,
  } as ViewStyle,
  flexRight: {
    flex: 1,
    alignItems: "flex-end",
  } as ViewStyle,
});
