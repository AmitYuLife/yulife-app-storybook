import React, { useRef, RefObject } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBValue } from "@redux/product/product.actions";
import { Weight } from "@redux/product/product.types";
import { ViewStyle, TextInput, View } from "react-native";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputSt = (props: ConnectedProps) => {
  const { weight, updateWeight } = props;

  const stRef: RefObject<TextInput> = useRef(null);
  const lbRef: RefObject<TextInput> = useRef(null);

  const validateSt = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText >= 0;

    if (!validText) {
      return updateWeight({
        ...weight,
        st: "",
      });
    }

    updateWeight({
      ...weight,
      st: text,
    });

    const shouldRefocus = !weight.lb && text.length > 1;

    if (shouldRefocus) {
      lbRef.current.focus();
    }
  };

  const validateLb = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText < 14 && parsedText >= 0;

    if (!validText) {
      return updateWeight({
        ...weight,
        lb: "",
      });
    }

    return updateWeight({
      ...weight,
      lb: text,
    });
  };

  const handleBackspaceInch = () => {
    if (!weight.lb) {
      stRef.current.focus();
    }
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        autoFocus={!weight.st}
        value={weight.st}
        onChangeText={validateSt}
        maxLength={2}
        label="stones"
        forwardRef={stRef}
      />
      <InputField
        autoFocus={!!weight.st}
        onBackSpace={handleBackspaceInch}
        value={weight.lb}
        onChangeText={validateLb}
        maxLength={2}
        label="pounds"
        forwardRef={lbRef}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  weight: getFIBState(state).weight,
});

const mapDispatchToProps = {
  updateWeight: (value: Weight) => updateFIBValue({ key: "weight", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputSt = redux(_FibInputSt);

const styles = {
  wrapper: {
    flexDirection: "row",
  } as ViewStyle,
};
