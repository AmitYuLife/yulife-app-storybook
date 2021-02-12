import React, { useState } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Weight } from "@redux/product/product.types";
import { StyleSheet } from "react-native";
import { styles } from "./fib-input-weight.styles";
import { KG_INPUT } from "@ids";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputKg = (props: ConnectedProps) => {
  const { weight, updateWeight } = props;
  const [isFocus, setIsFocus] = useState(false);

  const validateKg = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText >= 0;

    if (!validText) {
      return updateWeight({
        ...weight,
        kg: "",
      });
    }

    return updateWeight({
      ...weight,
      kg: text,
    });
  };

  return (
    <InputField
      testID={KG_INPUT}
      value={weight.kg}
      onChangeText={validateKg}
      maxLength={3}
      sideLabel="kg"
      style={StyleSheet.flatten([styles.textInput, isFocus ? {} : styles.textInputOnBlur])}
      hasFocusActive={setIsFocus}
      width={48}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  weight: getFIBState(state).answers.weight,
});

const mapDispatchToProps = {
  updateWeight: (value: Weight) => updateFIBAnswerValue({ key: "weight", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputKg = redux(_FibInputKg);
