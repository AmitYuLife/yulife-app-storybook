import React, { useState } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Height } from "@redux/product/product.types";
import { StyleSheet, TextStyle } from "react-native";
import { Colours } from "@styles";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const CM_HEIGHT_TALLEST_HUMAN = 273;

const _FibInputCm = (props: ConnectedProps) => {
  const { height, updateHeight } = props;
  const [isFocus, setIsFocus] = useState(false);

  const validateCm = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText >= 0 && parsedText < CM_HEIGHT_TALLEST_HUMAN;

    if (!validText) {
      return updateHeight({
        ...height,
        cm: "",
      });
    }

    return updateHeight({
      ...height,
      cm: text,
    });
  };

  const focusStyle = !isFocus
    ? {
        borderBottomColor: Colours.neutral.n600,
      }
    : {};
  return (
    <InputField
      autoFocus={false}
      value={height.cm}
      onChangeText={validateCm}
      maxLength={3}
      sideLabel="cm"
      style={StyleSheet.flatten([styles.textInput, focusStyle])}
      hasFocusActive={setIsFocus}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  height: getFIBState(state).answers.height,
});

const mapDispatchToProps = {
  updateHeight: (value: Height) => updateFIBAnswerValue({ key: "height", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputCm = redux(_FibInputCm);

const styles = StyleSheet.create({
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: 1,
  } as TextStyle,
});
