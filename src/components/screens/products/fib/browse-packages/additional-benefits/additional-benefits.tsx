import { Text } from "@atoms/index";
import React, { memo } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import AdditionalBenefitsCard from "./subcomponents/additional-benefits.card";
import { getAdditionalBenefitsData } from "./additional-benefits.helper";
import { Style } from "../../../../../../styles";

interface IProps {
  earnRate: number;
  packageEarnRate: number;
}

const AdditionalBenefits = memo(function (props: IProps) {
  const { earnRate, packageEarnRate } = props;
  return (
    <View>
      <Text style={styles.title}>Additional benefits</Text>
      {getAdditionalBenefitsData(earnRate, packageEarnRate).map((item) => {
        return <AdditionalBenefitsCard key={item.id} text={item.text} svg={item.svg} />;
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: Style.SCALE_UP_AND_DOWN(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    lineHeight: 32,
    color: "#464647",
    letterSpacing: 1,
    marginLeft: Style.adjust(32),
    marginTop: Style.adjust(48),
    marginBottom: Style.adjust(8),
  } as TextStyle,
});

export default AdditionalBenefits;
