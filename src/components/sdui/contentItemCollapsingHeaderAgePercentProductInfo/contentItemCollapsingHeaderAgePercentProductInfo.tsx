import React, { memo, useMemo } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { ContentItemCollapsingHeaderAgePercentProductInfo as GqlProps } from "@graphql/_core/schema";
import { CollapsingHeader } from "@components/molecules";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { useIndexedData } from "./hooks/useIndexedData";
import { Content } from "./subcomponents/content";
import { mapCoverTypeToColor } from "@styles";

interface DynamicProps {
  expandThreshold: number;
  scrollValue: Animated.Value;
  activeAgeToEnd: number;
  activeCoverType: CoverType;
  activeSalaryPercent: number;
  activeWorldId: YuWorld;
  SlotIcon: JSX.Element;
  expandOffset: number;
}

type Props = GqlProps & DynamicProps;

export const ContentItemCollapsingHeaderAgePercentProductInfo = memo((props: Props) => {
  const {
    expandThreshold,
    expandOffset,
    scrollValue,
    collapsingHeaderAgePercentProductInfoData,
    SlotIcon,
    activeAgeToEnd,
    activeSalaryPercent,
    activeCoverType,
  } = props;
  const {
    agePercentCoverList,
    monthlyCostDynamicCopy,
    monthlyCostReplacementString,
    salaryPercentDynamicCopy,
    salaryPercentReplacementString,
  } = collapsingHeaderAgePercentProductInfoData;
  const { keyedPricing } = useIndexedData(agePercentCoverList);

  const activeCover = useMemo(() => {
    if (!activeAgeToEnd || !activeSalaryPercent || !keyedPricing?.[activeAgeToEnd]?.[activeSalaryPercent]) {
      return { cost: "" };
    }

    const selectedCover = keyedPricing[activeAgeToEnd as number][activeSalaryPercent as number];
    const activeCoverCost = selectedCover.cost;

    return { cost: activeCoverCost };
  }, [keyedPricing, activeAgeToEnd, activeSalaryPercent]);

  if (!activeAgeToEnd || !activeSalaryPercent || !activeCoverType || !activeCover.cost) {
    return null;
  }

  const priceColor = mapCoverTypeToColor(activeCoverType as CoverType);

  return (
    <CollapsingHeader
      style={styles.collapsingHeader}
      expandThreshold={expandThreshold}
      scrollValue={scrollValue}
      expandOffset={expandOffset}
    >
      <Content
        SlotIcon={SlotIcon}
        color={priceColor}
        coverType={activeCoverType}
        salaryPercent={salaryPercentDynamicCopy.replace(salaryPercentReplacementString, activeSalaryPercent.toString())}
        monthlyCost={monthlyCostDynamicCopy.replace(monthlyCostReplacementString, activeCover.cost)}
      />
    </CollapsingHeader>
  );
});

const styles = StyleSheet.create({
  collapsingHeader: {
    borderWidth: 1,
  } as ViewStyle,
});
