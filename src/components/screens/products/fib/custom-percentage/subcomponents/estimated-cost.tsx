import React, { memo } from "react";
import * as Anim from "react-native-animatable";
import { StyleSheet, TextStyle, ViewStyle, View, ActivityIndicator, Platform } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";

interface IProps {
  estimatedCost: string;
  loading?: boolean;
}

export const EstimatedCost = memo(({ estimatedCost, loading }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <View>
        {loading ? (
          <ActivityIndicator color={Colours.darkHotPink} />
        ) : (
          <Anim.View duration={300} animation="fadeIn" useNativeDriver={true}>
            <Text bold={true} style={styles.estimatedCost}>
              {estimatedCost} per month
            </Text>
          </Anim.View>
        )}
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  wrapper: {
    marginTop: Platform.select({ ios: Style.adjust(4), android: 0 }),
  } as ViewStyle,

  estimatedCost: {
    color: Colours.products.fib.n900,
    fontSize: Style.adjust(30),
    letterSpacing: 1,
    textAlign: "center",
  } as TextStyle,
});
