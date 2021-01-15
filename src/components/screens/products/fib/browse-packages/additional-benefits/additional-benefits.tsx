import { Text } from "@atoms/index";
import React, { memo } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import AdditionalBenefitsCard from "./subcomponents/additional-benefits.card";
import { getAdditionalBenefitsData } from "./additional-benefits.helper";
import { Style } from "../../../../../../styles";

interface IProps {
  earnRate: number;
  packageEarnRate: number;
  loading: boolean;
}

const AdditionalBenefits = memo(function (props: IProps) {
  const { earnRate, packageEarnRate, loading } = props;
  return (
    <View>
      <Text style={styles.title}>Additional benefits</Text>
      {getAdditionalBenefitsData(earnRate, packageEarnRate, loading).map((item) => (
        <View key={item.id} style={styles.wrapper}>
          <AdditionalBenefitsCard key={item.id} text={item.text} svg={item.svg} />
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(16),
  },
  title: {
    fontSize: Style.adjust(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 32,
    color: "#464647",
    letterSpacing: 1,
    marginBottom: Style.adjust(8),
  } as TextStyle,
});

export default AdditionalBenefits;
