import React from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Height } from "@redux/product/product.types";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const CM_HEIGHT_TALLEST_HUMAN = 273;

const _FibInputCm = (props: ConnectedProps) => {
  const { height, updateHeight } = props;

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

  return <InputField autoFocus={true} value={height.cm} onChangeText={validateCm} maxLength={3} label="cm" />;
};

const mapStateToProps = (state: IReduxState) => ({
  height: getFIBState(state).answers.height,
});

const mapDispatchToProps = {
  updateHeight: (value: Height) => updateFIBAnswerValue({ key: "height", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputCm = redux(_FibInputCm);
