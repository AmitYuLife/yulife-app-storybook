import React, { useCallback } from "react";
import { connect } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { Weight } from "@redux/product/product.types";
import { FibInputSt } from "./fib-input-st";
import { FibInputKg } from "./fib-input-kg";
import { Text } from "@atoms";
import { View } from "react-native";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { updateFIBAnswerValue } from "../../../../../redux/product/product.actions";
import { styles } from "./fib-input-weight.styles";
import { stToKg, kgToSt } from "../../../../../services/utils";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputWeight = (props: ConnectedProps) => {
  const { weight, updateWeight } = props;

  const Input = weight.unit === "st" ? FibInputSt : FibInputKg;
  const buttonLabel = `Switch to ${weight.unit === "st" ? "kg" : "st, lb"}`;

  const handleSwitch = useCallback(() => {
    const isKg = weight.unit === "kg";
    let kg;
    let st;
    let lb;

    if (weight.unit === "st") {
      kg = stToKg(parseInt(weight.st || "0"), parseInt(weight.lb || "0"));
    } else {
      const _weight = kgToSt(parseInt(weight.kg || "0"));
      st = _weight.st;
      lb = _weight.lb;
    }

    updateWeight({
      unit: weight.unit === "st" ? "kg" : "st",
      st: isKg && st ? `${st}` : "",
      lb: isKg && lb ? `${lb}` : "",
      kg: isKg ? "" : `${kg}`,
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
