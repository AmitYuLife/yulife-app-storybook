import React, { useState, useCallback } from "react";
import Slider from "@react-native-community/slider";
import { View } from "react-native-animatable";
import { Text } from "@atoms/index";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { ALCOHOL_DRINK_LIMIT } from "./alcohol.common";
import { throttle } from "@services/utils";

interface Props {
  onValueChange: (val: number) => void;
  value: number;
}

export function SliderInput(props: Props) {
  const { onValueChange, value } = props;
  const [isTooltipVisible, setTooltipVisibilityState] = useState(false);
  const percentageComplete = (value / ALCOHOL_DRINK_LIMIT) * 100;

  const dynamicStyles = StyleSheet.create({
    tooltip: {
      left: percentageComplete * 1.69 - 34,
    },
  });

  const debouncedOnValueChange = useCallback(
    throttle((val: number) => onValueChange(val), 50),
    []
  );

  return (
    <View>
      {isTooltipVisible ? (
        <View style={StyleSheet.flatten([styles.tooltip, dynamicStyles.tooltip])}>
          <Text style={styles.tooltipText}>{Math.round(value)} Drinks</Text>
        </View>
      ) : null}
      <Slider
        thumbTintColor="#CC0D6E"
        maximumTrackTintColor="#CC0D6E"
        minimumTrackTintColor="#CC0D6E"
        maximumValue={ALCOHOL_DRINK_LIMIT}
        minimumValue={0}
        onSlidingComplete={() => setTooltipVisibilityState(false)}
        onSlidingStart={() => setTooltipVisibilityState(true)}
        onValueChange={debouncedOnValueChange}
      />
    </View>
  );
}

export default SliderInput;

const styles = StyleSheet.create({
  tooltip: {
    backgroundColor: "#F43E8E",
    borderRadius: 20,
    transform: [{ rotate: "90deg" }, { translateX: 60 }],
    position: "absolute",
    width: 100, // prevent jumping around
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  tooltipText: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 16,
  } as TextStyle,
});
