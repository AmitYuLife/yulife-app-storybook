import React from "react";
import { connect } from "react-redux";
import { View, ViewStyle } from "react-native";
import { updateFIBValue } from "@redux/product/product.actions";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { InputField } from "../input-field";

type ConnectedProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const _FibInputName = (props: ConnectedProps) => {
  const { fullName, updateName } = props;
  return (
    <View style={styles.wrapper}>
      <InputField
        autoFocus={true}
        isLarge={true}
        value={fullName}
        onChangeText={updateName}
        maxLength={50}
        placeholder="name"
        width={200}
        keyboardType="default"
      />
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  fullName: getFIBState(state).fullName,
});

const mapDispatchToProps = {
  updateName: (value: string) => updateFIBValue({ key: "fullName", value }),
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
};
