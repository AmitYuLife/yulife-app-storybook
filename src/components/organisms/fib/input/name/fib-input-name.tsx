import React from "react";
import { connect } from "react-redux";
import { View, ViewStyle, TextStyle } from "react-native";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { InputField } from "../input-field";
import { Colours, Style } from "@styles";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputName = (props: ConnectedProps) => {
  const { fullName, updateName } = props;
  return (
    <View style={styles.wrapper}>
      <InputField
        autoFocus={true}
        isLarge={true}
        value={fullName as string}
        onChangeText={updateName}
        maxLength={48}
        width={Style.DEVICE_WIDTH - 80}
        keyboardType="default"
        style={styles.textInput}
        shadowStyle={styles.shadow}
        maxBeforeTruncate={26}
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fullName: getFIBState(state).answers.fib_your_name,
});

const mapDispatchToProps = {
  updateName: (value: string) => updateFIBAnswerValue({ key: "fib_your_name", value }),
};

const redux = connect(mapStateToProps, mapDispatchToProps);

export const FibInputName = redux(_FibInputName);

const styles = {
  wrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
  } as ViewStyle,
  textInput: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    borderBottomColor: Colours.darkHotPink,
  } as TextStyle,
  shadow: {
    justifyContent: "flex-start",
    width: Style.DEVICE_WIDTH - 120,
  } as ViewStyle,
};
