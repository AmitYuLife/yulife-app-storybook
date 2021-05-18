import React, { useContext } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { TertiaryButton } from "@atoms";
import { styles } from "./fib-input-alcohol.styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { FIBUnderwritingJourneyOverlayContext } from "@components/screens/products/fib/layouts/fib.underwriting-journey-overlay";
import { getFIBState } from "@redux/product/product.selectors";
import { Style } from "@styles";

const _FibInputAlcohol = () => {
  const { setOverlay } = useContext(FIBUnderwritingJourneyOverlayContext);
  const drinks = useSelector(getFIBState).answers.weeklyAlcoholDrinks;

  const drinksDisplay = getDisplay(parseInt(drinks, 10));

  return (
    <View style={styles.wrapper}>
      <TertiaryButton
        rightIcon={BUTTON_ICON.EDIT_GREY}
        leftIcon={BUTTON_ICON.DRINKS}
        label={drinksDisplay}
        onPress={() => setOverlay("drinks")}
        height={Style.adjust(80)}
        size="Fill"
      />
    </View>
  );
};

export const FibInputAlcohol = _FibInputAlcohol;

const getDisplay = (drinks: number) => {
  const isInvalid = typeof drinks !== "number" || isNaN(drinks);

  if (isInvalid) {
    return "Enter number of drinks";
  }

  return `${drinks} drinks`;
};
