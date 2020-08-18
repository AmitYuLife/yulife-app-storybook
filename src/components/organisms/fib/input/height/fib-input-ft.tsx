import React, { useRef, RefObject } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBValue } from "@redux/product/product.actions";
import { Height } from "@redux/product/product.types";
import { ViewStyle, TextInput, View } from "react-native";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputFt = (props: ConnectedProps) => {
  const {
    fibState: { height },
    updateHeight,
  } = props;

  const ftRef: RefObject<TextInput> = useRef(null);
  const inRef: RefObject<TextInput> = useRef(null);

  const validateFt = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText < 12 && parsedText >= 0;

    if (!validText) {
      return updateHeight({
        ...height,
        ft: "",
      });
    }

    updateHeight({
      ...height,
      ft: text,
    });

    const shouldRefocus = !height.in && text.length;

    if (shouldRefocus) {
      inRef.current.focus();
    }
  };

  const validateIn = (text: string) => {
    const parsedText = Number(text);
    const validText = !isNaN(parsedText) && parsedText < 12 && parsedText >= 0;

    if (!validText) {
      return updateHeight({
        ...height,
        in: "",
      });
    }

    return updateHeight({
      ...height,
      in: text,
    });
  };

  const handleBackspaceInch = () => {
    if (!height.in) {
      ftRef.current.focus();
    }
  };

  return (
    <View style={styles.wrapper}>
      <InputField
        autoFocus={!height.ft}
        value={height.ft}
        onChangeText={validateFt}
        maxLength={1}
        label="feet"
        forwardRef={ftRef}
      />
      <InputField
        autoFocus={!!height.ft}
        onBackSpace={handleBackspaceInch}
        value={height.in}
        onChangeText={validateIn}
        maxLength={2}
        label="inches"
        forwardRef={inRef}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fibState: getFIBState(state),
});

const mapDispatchToProps = {
  updateHeight: (value: Height) => updateFIBValue({ key: "height", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputFt = redux(_FibInputFt);

const styles = {
  wrapper: {
    flexDirection: "row",
  } as ViewStyle,
};
