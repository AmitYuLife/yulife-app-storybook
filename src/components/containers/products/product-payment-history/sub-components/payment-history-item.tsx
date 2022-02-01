import React from "react";
import { TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { View } from "react-native";
import { styles } from "./styles";

interface IProps {
  amount: string;
  colour: string;
  date: string;
  label: string;
  invoiceId: string;
  textColour?: string;
}

export const PaymentHistoryItem = ({
  amount,
  colour,
  date,
  label,
  invoiceId,
  textColour = Colours.neutral.n800,
}: IProps) => (
  <View style={[styles.wrapper]}>
    <View style={styles.columnItem}>
      <TextTemplate color={textColour} type="l2">
        {date}
      </TextTemplate>
    </View>
    <View style={styles.columnSmallItem}>
      <TextTemplate color={textColour} type="l2b">
        {amount}
      </TextTemplate>
    </View>
    <View style={styles.columnLargeItem}>
      <TextTemplate textAlign="left" color={textColour} type="l2">
        {invoiceId}
      </TextTemplate>
    </View>
    <View style={styles.columnItem}>
      <View style={[{ backgroundColor: colour }, styles.labelWrapper]}>
        <TextTemplate color={Colours.neutral.white} textAlign="center" type="l2b">
          {label}
        </TextTemplate>
      </View>
    </View>
  </View>
);
