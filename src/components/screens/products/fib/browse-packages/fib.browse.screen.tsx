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
import { HowItWorks } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Package } from "./fib.browse.types";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import PackageInfo from "./subcomponents/package-info/package-info";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";
import { Documents } from "./subcomponents/documents/documents";
import { Faq, IFaq } from "./subcomponents/faqs/faq";
import Logger from "@services/logging/logger";
import { FIB_BROWSE_SCREEN } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { payoutCalculatorSvg } from "./subcomponents/payout-calculator/assets/payout-calculator-svg";
import { CoverType } from "../../../../../graphql/_core/schema/globalTypes";

interface IFibBrowseScreenProps {
  onNavigateToYuScreen: () => void;
  navigateToCustomCover: () => void;
  onContinue: () => void;
  selectCoverType: (coverType: CoverType) => void;
  selectedPackage: Package;
  documents: IFaq[];
  offset: NativeScrollPoint;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onNavigateToFaqsList: () => void;
  onNavigateToIntroScreen: () => void;
  navigateToPayoutCalculator: () => void;
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const {
    onNavigateToYuScreen,
    onNavigateToFaqsList,
    documents,
    onContinue,
    selectCoverType,
    selectedPackage,
    offset,
    onScrollEnd,
    onNavigateToIntroScreen,
    navigateToPayoutCalculator,
  } = props;

  useBackHandler(() => {
    onNavigateToIntroScreen();
    return true;
  });

  const scrollViewRef = useRef<ScrollView>(null);
  const onSelectPackage = (packageId: string) => {
    const coverType = packageId.toLowerCase() as CoverType;
    selectCoverType(coverType);
  };

  useEffect(() => {
    if (offset && offset.y > 0) {
      const timer = setTimeout(() => {
        if (scrollViewRef.current && scrollViewRef.current.scrollTo) {
          scrollViewRef.current.scrollTo({ ...offset, animated: false });
        }
      }, 0);
      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Logger.logEvent("package_view", {
      name: selectedPackage.label,
      salary_percentage: selectedPackage.salaryPercentageCovered,
      yucount_multiplier: selectedPackage.earnRate,
    });
  }, [selectedPackage]);

  // const howItWorksMaxCoverAge = maxTermAge < 70 ? `until age ${maxTermAge}` : `up to age 70`;

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
          <Animatable.View
            duration={1000}
            easing="ease-in"
            animation="fadeIn"
            style={styles.flex}
            useNativeDriver={true}
          >
            <PackageOptions selectedPackageId={selectedPackage.label} onSelectPackage={onSelectPackage} />
            <View style={styles.separator}>
              <PackageInfo selectedPackage={selectedPackage} />
            </View>
            <View style={styles.separator}>
              <HowItWorks
                header={selectedPackage.id}
                content={`We will pay your chosen beneficiaries ${selectedPackage.salaryPercentageCovered}% of your monthly salary as a lump sum from the date you passed away until you would have turned 70 years old.`}
              />
            </View>

            <View style={styles.separator}>
              <Faq
                iconSvgXml={payoutCalculatorSvg}
                label="How much would it pay out?"
                onPress={navigateToPayoutCalculator}
                redirectType="internal"
              />
            </View>
            <View style={styles.separator}>
              <AdditionalBenefits />
            </View>
            <View style={styles.separator}>
              <Faqs navigateToFaqsList={onNavigateToFaqsList} />
            </View>
            <Documents items={documents} />
          </Animatable.View>
        </ScrollView>
      </View>
      <GenericHeadingAbsolute
        onLeftIconPress={onNavigateToIntroScreen}
        onRightIconPress={onNavigateToYuScreen}
        logo="yulife"
      />
      <ContinueButton onPress={onContinue} />
    </>
  );
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
  } as ViewStyle,
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  separator: {
    marginBottom: 40,
  },
  scrollView: {
    backgroundColor: "#fafafe",
    paddingBottom: 96,
  },
});
