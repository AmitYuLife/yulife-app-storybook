import React, { memo, useCallback, ComponentProps } from "react";
import { FibUnderwritingJourneyLayout } from "../../layouts/fib.underwriting-journey-layout";
import { StyleSheet, ScrollView, View } from "react-native";
import { useBackHandler } from "../../../../../../services/hooks/useBackHandler";
import { SummaryDescription } from "../../browse-packages/subcomponents/summary-description";
import { PayoutCalculator } from "../../browse-packages/subcomponents/payout-calculator/payout-calculator";
import { Summary } from "../../browse-packages/subcomponents/summary";
import { Package } from "../../browse-packages/fib.browse.types";

export interface IFibConfirmationDetailsScreenProps {
  onBackButtonPress: () => void;
  onClose?: () => void;
  selectedPackage: Package;
  payoutEstimatorItems: ComponentProps<typeof PayoutCalculator>["items"];
  setDeceaseAgeIndexYear: (index: number) => void;
  setDeceaseAgeIndexMonth: (index: number) => void;
  loading: boolean;
  customerAge: number;
}

export const FibConfirmationDetailsScreen = memo(function (props: IFibConfirmationDetailsScreenProps) {
  const {
    onBackButtonPress,
    onClose,
    selectedPackage,
    payoutEstimatorItems,
    setDeceaseAgeIndexYear,
    setDeceaseAgeIndexMonth,
    loading,
    customerAge,
  } = props;

  const backHandler = useCallback(() => {
    onBackButtonPress();
    return true;
  }, [onBackButtonPress]);

  useBackHandler(backHandler);

  return (
    <FibUnderwritingJourneyLayout
      heading={"Confirmation"}
      onClose={onClose}
      onPreviousQuestion={onBackButtonPress}
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
      hideHeadingBorder={false}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
        <View style={styles.topWhiteSeparator} />
        <SummaryDescription
          customerAge={customerAge}
          selectedPackage={selectedPackage}
          amountProtected={selectedPackage.monthlyAmountProtected}
          term={selectedPackage.term}
          loading={loading}
        />
        <PayoutCalculator
          items={payoutEstimatorItems}
          setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
          setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
          payoutAmount={selectedPackage.payoutAmount}
          loading={loading}
        />
        <Summary selectedPackage={selectedPackage} loading={loading} />
      </ScrollView>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: 32,
    backgroundColor: "#fafafe",
  },
  topWhiteSeparator: {
    height: 44,
    backgroundColor: "white",
  },
});
