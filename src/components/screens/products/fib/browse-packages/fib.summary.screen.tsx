import React, { memo, ComponentProps, useCallback, useRef, useEffect } from "react";
import { StyleSheet, ScrollView, View, NativeScrollPoint, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { Button } from "@atoms";
import { Summary, SummaryDescription } from "./subcomponents";
import { Faqs } from "./subcomponents/faqs/faqs";
import { PayoutCalculator } from "./subcomponents/payout-calculator/payout-calculator";
import { Documents } from "./subcomponents/documents/documents";
import { Package } from "./fib.browse.types";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import { PackageId } from "../fib.helper";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

interface FibSummaryScreenProps {
  onNavigateBack: () => void;
  onContinue: () => void;
  onExit: () => void;
  faqs: ComponentProps<typeof Faqs>["items"];
  documents: ComponentProps<typeof Faqs>["items"];
  selectedPackage: Package;
  selectCoverType: (coverType: PackageId) => void;
  payoutEstimatorItems: ComponentProps<typeof PayoutCalculator>["items"];
  setDeceaseAgeIndexYear: (index: number) => void;
  setDeceaseAgeIndexMonth: (index: number) => void;
  customerAge: number;
  loading: boolean;
  offset: NativeScrollPoint;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export const FibSummaryScreen = memo(function (props: FibSummaryScreenProps) {
  const {
    onNavigateBack,
    faqs,
    documents,
    selectedPackage,
    payoutEstimatorItems,
    setDeceaseAgeIndexYear,
    setDeceaseAgeIndexMonth,
    loading,
    onContinue,
    selectCoverType,
    customerAge,
    onScrollEnd,
    offset,
    onExit,
  } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const onSelectPackage = (packageId: string) => {
    const coverType = packageId.toLowerCase() as PackageId;
    selectCoverType(coverType);
  };

  const scrollViewRef = useRef<ScrollView>(null);

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

  return (
    <>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          onMomentumScrollEnd={onScrollEnd}
          ref={scrollViewRef}
        >
          <PackageOptions selectedPackageId={selectedPackage.label} onSelectPackage={onSelectPackage} />
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
          <Documents items={documents} />
          <View style={styles.buttonWrapper}>
            <Button label="Continue" onPress={onContinue} type="Primary" />
          </View>
          <Faqs items={faqs} />
        </ScrollView>
      </View>
      <GenericHeadingAbsolute
        heading="Finalise Package"
        leftIcon="BACK"
        onLeftIconPress={onNavigateBack}
        onRightIconPress={onExit}
      />
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  scrollView: {
    backgroundColor: "#fafafe",
    paddingBottom: 32,
    marginTop: 24,
  },
  buttonWrapper: {
    marginTop: 47,
    marginBottom: -5,
  },
});
