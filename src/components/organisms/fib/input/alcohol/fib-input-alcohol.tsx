import React, { useState } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getWeeklyAlcoholDrinks } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { StyleSheet, View } from "react-native";
import { styles } from "./fib-input-alcohol.styles";
import { Style } from "@styles";
import { DRINKS_INPUT } from "@ids";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputAlcohol = (props: ConnectedProps) => {
  const { updateWeeklyAlcoholDrinks, weeklyAlcoholDrinks } = props;
  const [isFocus, setIsFocus] = useState(false);

  const validateNumber = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText >= 0;

    if (!validText) {
      return updateWeeklyAlcoholDrinks("");
    }

    return updateWeeklyAlcoholDrinks(text);
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        testID={DRINKS_INPUT}
        value={weeklyAlcoholDrinks}
        onChangeText={validateNumber}
        maxLength={3}
        sideLabel="drinks"
        style={StyleSheet.flatten([styles.textInput, isFocus ? {} : styles.textInputOnBlur])}
        hasFocusActive={setIsFocus}
        width={Style.adjust(48)}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  weeklyAlcoholDrinks: getWeeklyAlcoholDrinks(state),
});

const mapDispatchToProps = {
  updateWeeklyAlcoholDrinks: (value: string) => updateFIBAnswerValue({ key: "weeklyAlcoholDrinks", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputAlcohol = redux(_FibInputAlcohol);
