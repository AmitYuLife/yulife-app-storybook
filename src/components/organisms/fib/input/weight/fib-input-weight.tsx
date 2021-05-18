import React, { useContext } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { TertiaryButton } from "@atoms";
import { styles } from "./fib-input-weight.styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { FIBUnderwritingJourneyOverlayContext } from "@components/screens/products/fib/layouts/fib.underwriting-journey-overlay";
import { getFIBState } from "@redux/product/product.selectors";
import { Weight } from "@redux/product/product.types";
import { Style } from "@styles";

const _FibInputWeight = () => {
  const { setOverlay } = useContext(FIBUnderwritingJourneyOverlayContext);
  const weight = useSelector(getFIBState).answers.weight;

  const weightDisplay = getWeightDisplay(weight);

  return (
    <View style={styles.wrapper}>
      <TertiaryButton
        rightIcon={BUTTON_ICON.EDIT_GREY}
        leftIcon={BUTTON_ICON.WEIGHT}
        label={weightDisplay}
        onPress={() => setOverlay("weight")}
        height={Style.adjust(80)}
        size="Fill"
      />
    </View>
  );
};

export const FibInputWeight = _FibInputWeight;

const getWeightDisplay = (weight: Weight) => {
  const isInvalidMetric = weight.unit === "kg" && !weight.kg;
  const isInvalidImperial = weight.unit === "st" && !weight.st;
  const isInvalidWeight = isInvalidMetric || isInvalidImperial;

  if (isInvalidWeight) {
    return "Enter your Weight";
  }

  return weight.unit === "kg" ? `${weight.kg}kg` : `${weight.st}st ${weight.lb}lb`;
};
