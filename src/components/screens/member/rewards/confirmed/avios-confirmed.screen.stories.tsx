import React from "react";
import { View, StyleSheet } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import AviosConfirmedScreen from "./avios-confirmed.screen";

const voidFunc: () => void = () => null;

storiesOf("AviosConfirmedScreen", module)
  .addDecorator(withKnobs)
  .addDecorator((g: () => React.ReactNode) => <View style={styles.container}>{g()}</View>)
  .add("default", () => (
    <AviosConfirmedScreen
      loyaltyProgramme="loyal af"
      onPressCancel={voidFunc}
      onPressPolicy={voidFunc}
      onPressConfirm={voidFunc}
      onPressTopBar={voidFunc}
      purchaseDate="today"
      rewardName="lots of money"
      status="pending"
    />
  ));

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
