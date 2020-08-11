import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { AlcoholIntakeInput } from "./alcohol-intake-input";
import { withKnobs, number } from "@storybook/addon-knobs";
import { FIBStore } from "@redux/product/product.types";
import { withProvider } from "@components/storybook/withProvider";
import { IReduxState } from "@redux/_core/reducers";
import { connect } from "react-redux";

storiesOf("Alcohol")
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => <View style={styles.wrapper}>{g()}</View>)
  .addDecorator(withProvider)
  .add("default", () => <AlcoholIntakeInputWrapper />);

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
});

function _AlcoholIntakeInputWrapper(props: { fibState: FIBStore }) {
  return (
    <View style={{ width: number("width", 306) }}>
      <AlcoholIntakeInput fibState={{ weeklyAlcoholDrinks: props.fibState.weeklyAlcoholDrinks } as FIBStore} />
    </View>
  );
}

function mapStateToProps(state: IReduxState) {
  return {
    fibState: state.product.fib,
  };
}

const AlcoholIntakeInputWrapper = connect(mapStateToProps)(_AlcoholIntakeInputWrapper);
