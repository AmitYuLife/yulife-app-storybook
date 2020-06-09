import { Text } from "@atoms/index";
import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "./table.styles";

interface IProps {
  earnRate: number;
}

function TableHeader({ earnRate }: IProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.icon} />
      <View style={StyleSheet.flatten([styles.tableRow, styles.tableRowCentered, styles.tableRowText])} />
      <View
        style={StyleSheet.flatten([
          styles.tableRow,
          styles.tableRowCentered,
          styles.tableRowGreyBackground,
          {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
        ])}
      >
        <Text
          style={StyleSheet.flatten([styles.tableStandardHeader, styles.tableYourRateHeader])}
          bold={true}
        >{`Your ${earnRate}x\nEarn Rate`}</Text>
      </View>

      <View style={StyleSheet.flatten([styles.tableRow, styles.tableRowCentered, styles.tableRowStandard])}>
        <Text style={styles.tableStandardHeader}>Standard 1x{"\n"}Earn Rate</Text>
      </View>
    </View>
  );
}

export default TableHeader;
