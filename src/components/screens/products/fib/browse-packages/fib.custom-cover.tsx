import React, { memo, ComponentProps } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { GenericHeading } from "@atoms";
import { Style } from "@styles";
import { AvatarAndDescription, HowItWorks, EstimatedCost } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";
import { PayoutCalculator } from "./subcomponents/payout-calculator/payout-calculator";
import { Documents } from "./subcomponents/documents/documents";
import { Package } from "./fib.browse.types";
import { formatPrice } from "@components/containers/products/fib/fib.helpers";

interface IFibCustomCoverScreenProps {
  onNavigateToYuScreen: () => void;
  navigateToEditSalary: () => void;
  avatarUrl: string;
  faqs: ComponentProps<typeof Faqs>["items"];
  documents: ComponentProps<typeof Faqs>["items"];
  selectedPackage: Package;
  payoutEstimatorItems: ComponentProps<typeof PayoutCalculator>["items"];
  setDeceaseAgeIndexYear: (index: number) => void;
  setDeceaseAgeIndexMonth: (index: number) => void;
  loading: boolean;
}

export const FibCustomCoverScreen = memo(function (props: IFibCustomCoverScreenProps) {
  const {
    onNavigateToYuScreen,
    avatarUrl,
    faqs,
    navigateToEditSalary,
    documents,
    selectedPackage,
    payoutEstimatorItems,
    setDeceaseAgeIndexYear,
    setDeceaseAgeIndexMonth,
    loading,
  } = props;

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading
          heading="Create custom cover"
          isBeta={true}
          leftIcon="BACK"
          onLeftIconPress={onNavigateToYuScreen}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <AvatarAndDescription loading={loading} avatarUrl={avatarUrl} selectedPackage={selectedPackage} />
          <EstimatedCost
            navigateToEditSalary={navigateToEditSalary}
            heading={`${formatPrice(selectedPackage.estimatedCost)} per month`}
            loading={loading}
          />
          <HowItWorks
            header={selectedPackage.id}
            content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentageCovered}% of your future earnings from the date of death until age 70 (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
          />
          <PayoutCalculator
            items={payoutEstimatorItems}
            setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
            setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
            payoutAmount={selectedPackage.payoutAmount}
            loading={loading}
          />
          <AdditionalBenefits
            earnRate={selectedPackage?.earnRate}
            packageEarnRate={selectedPackage?.newEarnRate}
            loading={loading}
          />
          <Faqs items={faqs} />
          <Documents items={documents} />
        </ScrollView>
      </SafeAreaView>

      <ContinueButton onPress={onNavigateToYuScreen} />
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
});
