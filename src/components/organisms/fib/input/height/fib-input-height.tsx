import React, { useContext } from "react";
import { TertiaryButton } from "@atoms";
import { View } from "react-native";
import { styles } from "./fib-input-height.styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { FIBUnderwritingJourneyOverlayContext } from "@components/screens/products/fib/layouts/fib.underwriting-journey-overlay";
import { useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { Height } from "@redux/product/product.types";
import { Style } from "@styles";

const _FibInputHeight = () => {
  const { setOverlay } = useContext(FIBUnderwritingJourneyOverlayContext);
  const height = useSelector(getFIBState).answers.height;

  const heightDisplay = getHeightDisplay(height);

  return (
    <View style={styles.wrapper}>
      <TertiaryButton
        rightIcon={BUTTON_ICON.EDIT_GREY}
        leftIcon={BUTTON_ICON.HEIGHT}
        label={heightDisplay}
        onPress={() => setOverlay("height")}
        height={Style.adjust(80)}
        size="Fill"
      />
    </View>
  );
};

export const FibInputHeight = _FibInputHeight;

const getHeightDisplay = (height: Height) => {
  const isInvalidMetric = height.unit === "cm" && !height.cm;
  const isInvalidImperial = height.unit === "ft" && !height.ft;
  const isInvalidHeight = isInvalidMetric || isInvalidImperial;

  if (isInvalidHeight) {
    return "Enter your height";
  }

  return height.unit === "cm" ? `${height.cm}cm` : `${height.ft}ft ${height.in}in`;
};
