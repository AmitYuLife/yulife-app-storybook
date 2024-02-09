import React, { memo } from "react";
import { ContentItemCostPayoutBenefitCardFragment as Props } from "@graphql/__generated";
import { View } from "react-native";
import { CostPayoutBenefitCard } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";

export const ContentItemCostPayoutBenefitCard = memo(({ styles, ...props }: Props) => {
  return (
    <View style={mapServerStyles(styles)}>
      <CostPayoutBenefitCard {...props} />
    </View>
  );
});
