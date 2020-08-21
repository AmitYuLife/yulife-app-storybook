import React, { useCallback } from "react";
import { connect } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { Weight } from "@redux/product/product.types";
import { FibInputSt } from "./fib-input-st";
import { FibInputKg } from "./fib-input-kg";
import { Text } from "@atoms";
import { ViewStyle, View, TextStyle } from "react-native";
import { Colours } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { updateFIBAnswerValue } from "../../../../../redux/product/product.actions";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputWeight = (props: ConnectedProps) => {
  const { weight, updateWeight } = props;

  const Input = weight.unit === "st" ? FibInputSt : FibInputKg;
  const buttonLabel = `switch to ${weight.unit === "st" ? "kg" : "st"}?`;

  const handleSwitch = useCallback(() => {
    updateWeight({
      unit: weight.unit === "st" ? "kg" : "st",
      st: "",
      lb: "",
      kg: "",
    });
  }, [weight, updateWeight]);

  return (
    <View style={styles.wrapper}>
      <Input />
      <TouchableOpacityWithDelay onPress={handleSwitch}>
        <Text style={styles.label}>{buttonLabel}</Text>
      </TouchableOpacityWithDelay>
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  weight: getFIBState(state).answers.weight,
});

const mapDispatchToProps = {
  updateWeight: (value: Weight) => updateFIBAnswerValue({ key: "weight", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputWeight = redux(_FibInputWeight);

const styles = {
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 24,
  } as ViewStyle,
  label: {
    fontSize: 12,
    color: Colours.products.fib.n800,
    letterSpacing: 1,
  } as TextStyle,
};
