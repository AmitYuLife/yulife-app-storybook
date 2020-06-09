import React from "react";
import { View, StyleSheet } from "react-native";
import styles from "./charms.products.styles";
import Charm from "../svg/charms";
import { TextWithBoldText } from "@components/molecules";

interface IProps {
  icon: string;
  description: string;
  earnRate: number;
  active?: boolean;
}

function CharmsProducts({ description, icon, earnRate, active = true }: IProps) {
  const isTwoDigits = earnRate.toString().length === 2;
  const extraStyle =
    isTwoDigits && earnRate > 10 ? styles.earnRateTextBiggerThanTen : isTwoDigits ? styles.earnRateTextIsTen : {};

  return (
    <View style={styles.charmWrapper}>
      {
        <View style={{ marginRight: 16 }}>
          <Charm
            active={active}
            icon={icon}
            rateViewStyle={styles.rateView}
            rateTextStyle={StyleSheet.flatten([styles.rateText, extraStyle])}
            earnRate={earnRate}
          />
        </View>
      }
      <TextWithBoldText style={styles.charmDescription} value={description} />
    </View>
  );
}

export default CharmsProducts;
