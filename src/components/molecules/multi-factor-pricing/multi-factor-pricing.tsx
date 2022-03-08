import React, { ComponentProps, memo } from "react";
import { View, ViewStyle } from "react-native";
import { CoverPicker, LabelledHorizontalScroller, PackageCostBenefitCard } from "./subcomponents";

interface Props {
  style?: ViewStyle;
  packageCostBenefitCard: ComponentProps<typeof PackageCostBenefitCard>;
  labelledHorizontalScroller: ComponentProps<typeof LabelledHorizontalScroller>;
  coverPicker: ComponentProps<typeof CoverPicker>;
}

const MultiFactorPricing = (props: Props) => {
  return (
    <View style={props.style}>
      <CoverPicker {...props.coverPicker} />
      <PackageCostBenefitCard {...props.packageCostBenefitCard} />
      <LabelledHorizontalScroller {...props.labelledHorizontalScroller} />
    </View>
  );
};

export default memo(MultiFactorPricing);
