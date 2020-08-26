import React, { useRef, RefObject, useState } from "react";
import { connect } from "react-redux";
import { InputField } from "../input-field";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { Height } from "@redux/product/product.types";
import { ViewStyle, TextInput, View, StyleSheet, TextStyle } from "react-native";
import { Colours } from "@styles";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputFt = (props: ConnectedProps) => {
  const { height, updateHeight } = props;
  const [isFtFocus, setIsFtFocus] = useState(false);
  const [isInFocus, setIsInFocus] = useState(false);

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
        autoFocus={false}
        value={height.ft}
        onChangeText={validateFt}
        maxLength={1}
        sideLabel="ft"
        forwardRef={ftRef}
        style={StyleSheet.flatten([
          styles.textInput,
          isFtFocus
            ? {}
            : {
                borderBottomColor: Colours.neutral.n600,
              },
        ])}
        hasFocusActive={setIsFtFocus}
        width={15}
      />
      <InputField
        autoFocus={false}
        onBackSpace={handleBackspaceInch}
        value={height.in}
        onChangeText={validateIn}
        maxLength={2}
        sideLabel="in"
        forwardRef={inRef}
        style={StyleSheet.flatten([
          styles.textInput,
          isInFocus
            ? {}
            : {
                borderBottomColor: Colours.neutral.n600,
              },
        ])}
        hasFocusActive={setIsInFocus}
        width={15}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  height: getFIBState(state).answers.height,
});

const mapDispatchToProps = {
  updateHeight: (value: Height) => updateFIBAnswerValue({ key: "height", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputFt = redux(_FibInputFt);

const styles = StyleSheet.create({
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
});
