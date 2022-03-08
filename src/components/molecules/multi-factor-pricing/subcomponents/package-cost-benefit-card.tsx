import { Style } from "@styles";
import React, { ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import CostPayoutBenefitCard from "../../cost-payout-benefit-card/cost-payout-benefit-card";

type Props = ComponentProps<typeof CostPayoutBenefitCard>;

const CostPayoutBenefitCardSubcomponent = (props: Props) => (
  <View style={styles.wrapper}>
    <CostPayoutBenefitCard {...props} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(18),
  } as ViewStyle,
});

export default memo(CostPayoutBenefitCardSubcomponent);
