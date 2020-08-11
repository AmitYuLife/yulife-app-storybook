import React from "react";
import AlcoholBottle from "./alcohol-bottle";
import AlcoholBottleGreyscale from "./alcohol-bottle-greyscale";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles/index";
import { SliderInput } from "./slider";
import { useDispatch } from "react-redux";
import { updateFIBValue } from "@redux/product/product.actions";
import { ALCOHOL_DRINK_LIMIT } from "./alcohol.common";
import { FIBStore } from "@redux/product/product.types";

interface Props {
  fibState: FIBStore;
}

export function AlcoholIntakeInput(props: Props) {
  const dispatch = useDispatch();

  const { fibState } = props;
  const displayValue = fibState.weeklyAlcoholDrinks;
  const sliderPercentageFilled = (displayValue / ALCOHOL_DRINK_LIMIT) * 100;

  function handleChange(val: number) {
    return dispatch(updateFIBValue({ value: Math.round(val), key: "weeklyAlcoholDrinks" }));
  }

  const dynamicStyles = StyleSheet.create({
    colourfulBottle: {
      height: `${sliderPercentageFilled}%`,
    } as ViewStyle,
  });
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.bottleContainer}>
          <View style={styles.absoluteBottom}>
            <AlcoholBottleGreyscale />
          </View>
          <View style={dynamicStyles.colourfulBottle}>
            <View style={styles.absoluteBottom}>
              <AlcoholBottle percentageVisible={sliderPercentageFilled} />
            </View>
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <SliderInput value={displayValue} onValueChange={handleChange} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
  },
  bottleContainer: {
    height: Style.adjust(221),
    justifyContent: "flex-end",
  } as ViewStyle,
  absoluteBottom: {
    position: "absolute",
    bottom: 0,
  } as ViewStyle,
  sliderContainer: {
    width: 200,
    transform: [{ rotate: "270deg" }, { translateX: -90 }, { translateY: 20 }],
    height: 42,
  } as ViewStyle,
});
