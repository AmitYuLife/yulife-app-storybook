import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { t } from "@locale";

import { StyleSheet } from "@styles";
interface IProps {
  price: number | string;
}

const PackageMonthPrice = ({ price }: IProps) => (
  <View style={styles.wrapper}>
    <TextTemplate type="h3">{`£${price}`}</TextTemplate>
    <TextTemplate type="b2"> / {t("period.month")}</TextTemplate>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default memo(PackageMonthPrice);
