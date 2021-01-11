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
import { AvatarAndDescription, HowItWorks } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Package } from "./fib.browse.types";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";
import { Documents } from "./subcomponents/documents/documents";
import { PackageId } from "../fib.helper";
import { IFaq } from "./subcomponents/faqs/faq";
import Logger from "@services/logging/logger";
import { FIB_BROWSE_SCREEN } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { useBackHandler } from "@services/hooks/useBackHandler";

interface IFibBrowseScreenProps {
  onNavigateToYuScreen: () => void;
  navigateToCustomCover: () => void;
  onContinue: () => void;
  selectCoverType: (coverType: PackageId) => void;
  selectedPackage: Package;
  loading: boolean;
  documents: IFaq[];
  avatarUrl: string;
  maxTermAge: number;
  offset: NativeScrollPoint;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  onNavigateToFaqsList: () => void;
  onNavigateToIntroScreen: () => void;
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const {
    onNavigateToYuScreen,
    onNavigateToFaqsList,
    avatarUrl,
    documents,
    onContinue,
    selectCoverType,
    selectedPackage,
    loading,
    maxTermAge,
    offset,
    onScrollEnd,
    onNavigateToIntroScreen,
  } = props;

  useBackHandler(() => {
    onNavigateToIntroScreen();
    return true;
  });

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
          <Animatable.View
            duration={1000}
            easing="ease-in"
            animation="fadeIn"
            style={styles.flex}
            useNativeDriver={true}
          >
            <PackageOptions selectedPackageId={selectedPackage.label} onSelectPackage={onSelectPackage} />
            <AvatarAndDescription loading={loading} avatarUrl={avatarUrl} selectedPackage={selectedPackage} />
            <HowItWorks
              header={selectedPackage.id}
              content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentageCovered}% of your future earnings from the date of death ${howItWorksMaxCoverAge} (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
            />
            <AdditionalBenefits
              earnRate={selectedPackage.earnRate}
              packageEarnRate={selectedPackage.newEarnRate}
              loading={loading}
            />
            <Faqs navigateToFaqsList={onNavigateToFaqsList} />
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
