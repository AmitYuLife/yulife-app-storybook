import React, { memo } from "react";
import * as Anim from "react-native-animatable";
import { StyleSheet, TextStyle, ViewStyle, View, ActivityIndicator, Platform } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";

interface IProps {
  estimatedCost: string;
  loading?: boolean;
}

const copy = {
  caption: "is the estimated cost",
};

export const EstimatedCost = memo(({ estimatedCost, loading }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.estimatedCostWrapper}>
        {loading ? (
          <ActivityIndicator color={Colours.darkHotPink} />
        ) : (
          <Anim.View duration={300} animation="fadeIn">
            <Text bold style={styles.estimatedCost}>
              {estimatedCost}
            </Text>
          </Anim.View>
        )}
      </View>
      <Text style={styles.caption}>{copy.caption}</Text>
    </View>
  );
});
const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.select({ ios: Style.adjust(4), android: 0 }),
  } as ViewStyle,
  estimatedCostWrapper: {
    height: 50,
  } as TextStyle,
  estimatedCost: {
    color: Colours.products.fib.n900,
    fontSize: Style.adjust(30),
    letterSpacing: 1,
    textAlign: "center",
  } as TextStyle,
  caption: {
    textAlign: "center",
    fontSize: Style.adjust(16),
    letterSpacing: 1,
    marginTop: -16,
  } as TextStyle,
});
