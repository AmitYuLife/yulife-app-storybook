import React, { memo, useState, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { SvgXml } from "react-native-svg";
import { arrowDownSvg, payoutCalculatorSvg } from "./assets";
import { Calculator, CalculatorItems } from "./subcomponents/calculator";

const copy = {
  title: "How much would it pay out?",
};

interface Props {
  items: CalculatorItems;
  payoutAmount: number;
  setDeceaseAgeIndexYear: ComponentProps<typeof Calculator>["setDeceaseAgeIndexYear"];
  setDeceaseAgeIndexMonth: ComponentProps<typeof Calculator>["setDeceaseAgeIndexMonth"];
  loading: boolean;
}

export const PayoutCalculator = memo(
  ({ loading, payoutAmount, items, setDeceaseAgeIndexYear, setDeceaseAgeIndexMonth }: Props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapse = () => setCollapsed((collapsed) => !collapsed);
    return (
      <View style={styles.wrapper}>
        <View style={styles.innerWrapper}>
          <TouchableOpacity onPress={toggleCollapse} style={styles.button}>
            <SvgXml xml={payoutCalculatorSvg} />
            <Text bold={true} style={styles.title}>
              {copy.title}
            </Text>
            <SvgXml
              style={[styles.arrowDown, { transform: [{ rotate: collapsed ? "0deg" : "180deg" }] }]}
              xml={arrowDownSvg}
            />
          </TouchableOpacity>
          <Calculator
            hide={collapsed}
            items={items}
            setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
            setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
            payoutAmount={payoutAmount}
            loading={loading}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
  } as ViewStyle,
  button: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: Style.adjust(12),
    paddingHorizontal: Style.adjust(12),
    alignItems: "center",
  } as ViewStyle,
  title: {
    letterSpacing: 1,
    color: Colours.products.fib.n800,
    lineHeight: Style.adjust(24),
    fontSize: Style.adjust(16),
    marginLeft: Style.adjust(12),
  } as TextStyle,
  arrowDown: {
    marginLeft: "auto",
  } as ViewStyle,
});
