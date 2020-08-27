import React, { useRef, RefObject, useState } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Weight } from "@redux/product/product.types";
import { ViewStyle, TextInput, View, StyleSheet, TextStyle } from "react-native";
import { Colours } from "@styles";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputSt = (props: ConnectedProps) => {
  const { weight, updateWeight } = props;

  const [isStFocus, setIsStFocus] = useState(false);
  const [isLbFocus, setIsLbFocus] = useState(false);

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
        autoFocus={false}
        value={weight.st}
        onChangeText={validateSt}
        maxLength={2}
        sideLabel="st"
        forwardRef={stRef}
        style={StyleSheet.flatten([
          styles.textInput,
          isStFocus
            ? {}
            : {
                borderBottomColor: Colours.neutral.n600,
              },
        ])}
        hasFocusActive={setIsStFocus}
        width={20}
      />
      <InputField
        autoFocus={false}
        onBackSpace={handleBackspaceInch}
        value={weight.lb}
        onChangeText={validateLb}
        maxLength={2}
        sideLabel="lb"
        forwardRef={lbRef}
        style={StyleSheet.flatten([
          styles.textInput,
          isLbFocus
            ? {}
            : {
                borderBottomColor: Colours.neutral.n600,
              },
        ])}
        hasFocusActive={setIsLbFocus}
        width={20}
      />
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

export const FibInputSt = redux(_FibInputSt);

const styles = {
  wrapper: {
    flexDirection: "row",
  } as ViewStyle,
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: 1,
  } as TextStyle,
};
