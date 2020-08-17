import React, { useCallback } from "react";
import { connect } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBValue } from "@redux/product/product.actions";
import { Height } from "@redux/product/product.types";
import { FibInputFt } from "./fib-input-ft";
import { FibInputCm } from "./fib-input-cm";
import { Text } from "@atoms";
import { ViewStyle, View, TextStyle } from "react-native";
import { Colours } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputHeight = (props: ConnectedProps) => {
  const { height, updateHeight } = props;

  const Input = height.unit === "ft" ? FibInputFt : FibInputCm;
  const buttonLabel = `switch to ${height.unit === "ft" ? "cm" : "feet"}?`;

  const handleSwitch = useCallback(() => {
    updateHeight({
      unit: height.unit === "cm" ? "ft" : "cm",
      cm: "",
      ft: "",
      in: "",
    });
  }, [height, updateHeight]);

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
  height: getFIBState(state).height,
});

const mapDispatchToProps = {
  updateHeight: (value: Height) => updateFIBValue({ key: "height", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputHeight = redux(_FibInputHeight);

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
