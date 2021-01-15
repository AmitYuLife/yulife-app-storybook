import React, { memo, ComponentProps, useCallback } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Style } from "@styles";
import { AvatarAndDescription, HowItWorks, EstimatedCost } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";
import { PayoutCalculator } from "./subcomponents/payout-calculator/payout-calculator";
import { Documents } from "./subcomponents/documents/documents";
import { Package } from "./fib.browse.types";
import { formatPrice } from "@components/containers/products/fib/fib.helpers";
import { useBackHandler } from "@services/hooks/useBackHandler";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IFibCustomCoverScreenProps {
  onNavigateBack: () => void;
  navigateToEditSalary: () => void;
  onContinue: () => void;
  avatarUrl: string;
  documents: ComponentProps<typeof Documents>["items"];
  selectedPackage: Package;
  payoutEstimatorItems: ComponentProps<typeof PayoutCalculator>["items"];
  setDeceaseAgeIndexYear: (index: number) => void;
  setDeceaseAgeIndexMonth: (index: number) => void;
  loading: boolean;
  onNavigateToFaqsList: () => void;
}

export const FibCustomCoverScreen = memo(function (props: IFibCustomCoverScreenProps) {
  const {
    onNavigateBack,
    avatarUrl,
    navigateToEditSalary,
    documents,
    selectedPackage,
    payoutEstimatorItems,
    setDeceaseAgeIndexYear,
    setDeceaseAgeIndexMonth,
    loading,
    onContinue,
    onNavigateToFaqsList,
  } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <AvatarAndDescription loading={loading} avatarUrl={avatarUrl} selectedPackage={selectedPackage} />
          <EstimatedCost
            navigateToEditSalary={navigateToEditSalary}
            heading={`${formatPrice(selectedPackage.actualCost || 0)} per month`}
            loading={loading}
          />
          <View style={styles.howitworks}>
            <HowItWorks
              header={selectedPackage.id}
              content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentageCovered}% of your future earnings from the date of death until age 70 (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
            />
          </View>
          <PayoutCalculator
            items={payoutEstimatorItems}
            setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
            setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
            payoutAmount={selectedPackage.payoutAmount}
            loading={loading}
          />
          <View style={styles.benefits}>
            <AdditionalBenefits
              earnRate={selectedPackage?.earnRate}
              packageEarnRate={selectedPackage?.newEarnRate}
              loading={loading}
            />
          </View>
          <Faqs navigateToFaqsList={onNavigateToFaqsList} />
          <Documents items={documents} />
        </ScrollView>
      </View>
      <GenericHeadingAbsolute heading="Create custom cover" leftIcon="BACK" onLeftIconPress={onNavigateBack} />
      <ContinueButton onPress={onContinue} />
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  scrollView: {
    backgroundColor: "#fafafe",
    paddingBottom: 120,
    marginTop: 24,
  },
  benefits: {
    marginLeft: Style.adjust(32),
    marginTop: Style.adjust(48),
  },
  howitworks: {
    marginTop: Style.adjust(16),
  },
});
