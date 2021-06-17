import { TextTemplate } from "@atoms";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  price: number | string;
}

const PackageMonthPrice = ({ price }: IProps) => (
  <View style={styles.wrapper}>
    <TextTemplate type="h3">{`£${price}`}</TextTemplate>
    <TextTemplate type="b2"> / month</TextTemplate>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default PackageMonthPrice;
