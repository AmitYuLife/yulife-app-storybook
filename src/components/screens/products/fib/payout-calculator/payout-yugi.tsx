import React from "react";
import { View, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { YugiRibbon } from "./assets/yugi-ribbon";
import { Text } from "@atoms";
import { addCommasToNumber } from "@utils";
import { Style, Colours } from "@styles";
import { getCoverTypeByPercentage } from "@components/containers/products/fib/fib.helpers";
import { CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { calculateSumAssured } from "@containers/products/fib/fib.helpers";

interface YugiRibbonStyles {
  leftAndRightItemsColor: string;
  smallElementColor: string;
  bigItemColor: string;
  textColor: string;
}

const yugiRibbonColors: { [key: string]: YugiRibbonStyles } = {
  epic: {
    leftAndRightItemsColor: Colours.secondary.s50S3,
    smallElementColor: Colours.products.fib.epic,
    bigItemColor: Colours.secondary.s30S3,
    textColor: Colours.products.fib.epic,
  },
  rare: {
    leftAndRightItemsColor: Colours.secondary.s50S2,
    smallElementColor: Colours.products.fib.rare,
    bigItemColor: Colours.secondary.s30S2,
    textColor: Colours.products.fib.rare,
  },
  common: {
    leftAndRightItemsColor: Colours.secondary.s50S1,
    smallElementColor: Colours.products.fib.common,
    bigItemColor: Colours.secondary.s30S1,
    textColor: Colours.products.fib.commonShadow,
  },
};

interface Props {
  coverTypesInfo?: CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo;
  selectedPackage: CoverType;
  grossSalary: number;
  salaryPercentageCovered: number;
  term: number;
  currentSliderValue: number;
  isCustomCover: boolean;
}

const height = Style.adjust(184);
const width = Style.adjust(276);

export const PayoutYugi = ({
  coverTypesInfo,
  selectedPackage,
  grossSalary,
  salaryPercentageCovered,
  term,
  currentSliderValue,
  isCustomCover,
}: Props) => {
  const sumAssured = coverTypesInfo
    ? (coverTypesInfo as any)[selectedPackage.toLowerCase()].sumAssured
    : calculateSumAssured(grossSalary, salaryPercentageCovered, term);

  const yearlyAmountProtected = sumAssured / term;
  const payoutAmount = Math.round(sumAssured - yearlyAmountProtected * currentSliderValue);
  const yugiRibbonPackage = isCustomCover ? getCoverTypeByPercentage(salaryPercentageCovered) : selectedPackage;

  return (
    <View style={styles.wrapper}>
      <View style={styles.yugiRibbonWrapper}>
        <YugiRibbon
          height={height}
          width={width}
          baseColor={yugiRibbonColors[yugiRibbonPackage].bigItemColor}
          edgeColor={yugiRibbonColors[yugiRibbonPackage].leftAndRightItemsColor}
          shadowColor={yugiRibbonColors[yugiRibbonPackage].smallElementColor}
        />
      </View>
      <Text
        bold={true}
        style={StyleSheet.flatten([styles.sumAssured, { color: yugiRibbonColors[yugiRibbonPackage].textColor }])}
      >{`£${addCommasToNumber(payoutAmount)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ribbonWrapper: {
    position: "absolute",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  yugiRibbonWrapper: {
    position: "absolute",
  } as ViewStyle,
  wrapper: {
    width,
    height,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  sumAssured: {
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    marginTop: Style.adjust(16),
  } as TextStyle,
});
