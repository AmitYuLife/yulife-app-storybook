import React, { memo, useState } from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity, TextStyle } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { SvgXml } from "react-native-svg";
import { arrowDownSvg, payoutCalculatorSvg } from "./assets";
import { Calculator } from "./subcomponents/calculator";

const copy = {
  title: "How much would it pay out?",
};

export const PayoutCalculator = memo(() => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapse = () => setCollapsed((collapsed) => !collapsed);
  return (
    <View style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <TouchableOpacity onPress={toggleCollapse} style={styles.button}>
          <SvgXml xml={payoutCalculatorSvg} />
          <Text style={styles.title}>{copy.title}</Text>
          <SvgXml
            style={[styles.arrowDown, { transform: [{ rotate: collapsed ? "0deg" : "180deg" }] }]}
            xml={arrowDownSvg}
          />
        </TouchableOpacity>
        <Calculator hide={collapsed} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
    borderRadius: 8,
    marginTop: Style.adjust(12),
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
