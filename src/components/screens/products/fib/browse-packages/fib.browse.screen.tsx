import React, { memo, useEffect, useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  ViewStyle,
  NativeScrollPoint,
  NativeSyntheticEvent,
  NativeScrollEvent,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { AvatarAndDescription, HowItWorks, EstimatedCost } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Package } from "./fib.browse.types";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";
import { PayoutCalculator } from "./subcomponents/payout-calculator/payout-calculator";
import { Documents } from "./subcomponents/documents/documents";
import { PackageId } from "../fib.helper";
import { IFaq } from "./subcomponents/faqs/faq";
import Logger from "@services/logging/logger";
import { CalculatorItems } from "./subcomponents/payout-calculator/subcomponents/calculator";
import { formatPrice } from "@components/containers/products/fib/fib.helpers";
import { FIB_BROWSE_SCREEN } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface IFibBrowseScreenProps {
  onNavigateToYuScreen: () => void;
  navigateToEditSalary: () => void;
  navigateToCustomCover: () => void;
  onContinue: () => void;
  selectCoverType: (coverType: PackageId) => void;
  selectedPackage: Package;
  payoutEstimatorItems: CalculatorItems;
  setDeceaseAgeIndexYear: (index: number) => void;
  setDeceaseAgeIndexMonth: (index: number) => void;
  loading: boolean;
  faqs: IFaq[];
  documents: IFaq[];
  avatarUrl: string;
  maxTermAge: number;
  offset: NativeScrollPoint;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const {
    onNavigateToYuScreen,
    avatarUrl,
    faqs,
    navigateToEditSalary,
    documents,
    onContinue,
    selectCoverType,
    selectedPackage,
    payoutEstimatorItems,
    setDeceaseAgeIndexYear,
    setDeceaseAgeIndexMonth,
    loading,
    maxTermAge,
    offset,
    onScrollEnd,
  } = props;

  const scrollViewRef = useRef<ScrollView>(null);
  const onSelectPackage = (packageId: string) => {
    const coverType = packageId.toLowerCase() as PackageId;
    selectCoverType(coverType);
  };

  useEffect(() => {
    if (offset && offset.y > 0) {
      setTimeout(() => {
        if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
          scrollViewRef.current.scrollTo({ ...offset, animated: false });
        }
      }, 0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Logger.logEvent("package_view", {
      name: selectedPackage.label,
      salary_percentage: selectedPackage.salaryPercentageCovered,
      yucount_multiplier: selectedPackage.earnRate,
      estimated_cost: selectedPackage.estimatedCost,
    });
  }, [selectedPackage]);

  const howItWorksMaxCoverAge = maxTermAge < 70 ? `until age ${maxTermAge}` : `up to age 70`;

  return (
    <>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView
          onMomentumScrollEnd={onScrollEnd}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollView}
          testID={FIB_BROWSE_SCREEN}
        >
          <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
            <PackageOptions selectedPackageId={selectedPackage.label} onSelectPackage={onSelectPackage} />
            <AvatarAndDescription loading={loading} avatarUrl={avatarUrl} selectedPackage={selectedPackage} />
            <EstimatedCost
              navigateToEditSalary={navigateToEditSalary}
              heading={`${formatPrice(selectedPackage.estimatedCost)} per month`}
              loading={loading}
            />
            <HowItWorks
              header={selectedPackage.id}
              content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentageCovered}% of your future earnings from the date of death ${howItWorksMaxCoverAge} (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
            />
            <PayoutCalculator
              items={payoutEstimatorItems}
              payoutAmount={selectedPackage.payoutAmount}
              setDeceaseAgeIndexYear={setDeceaseAgeIndexYear}
              setDeceaseAgeIndexMonth={setDeceaseAgeIndexMonth}
              loading={loading}
            />
            <AdditionalBenefits
              earnRate={selectedPackage.earnRate}
              packageEarnRate={selectedPackage.newEarnRate}
              loading={loading}
            />
            <Faqs items={faqs} />
            <Documents items={documents} />
          </Animatable.View>
        </ScrollView>
      </View>
      <GenericHeadingAbsolute onRightIconPress={onNavigateToYuScreen} logo="yulife" />
      <ContinueButton onPress={onContinue} />
    </>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  scrollView: {
    backgroundColor: "#fafafe",
    paddingBottom: 96,
  },
});
