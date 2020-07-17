import React, { memo, ComponentProps, useCallback } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import { GenericHeading } from "@atoms";
import { Style } from "@styles";
import { IAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { AvatarAndDescription, HowItWorks, EstimatedCost } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Package } from "./fib.browse.types";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";
import { PayoutCalculator } from "./subcomponents/payout-calculator/payout-calculator";
import { Documents } from "./subcomponents/documents/documents";
import { PackageId } from "../fib.helper";

interface IFibBrowseScreenProps {
  onNavigateToYuScreen: () => void;
  navigateToEditSalary: () => void;
  currentEarnRate: number;
  avatar: IAvatar;
  selectCoverType: (coverType: PackageId) => void;
  selectedPackage: Package;
  faqs: ComponentProps<typeof Faqs>["items"];
  documents: ComponentProps<typeof Faqs>["items"];
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const {
    onNavigateToYuScreen,
    avatar,
    currentEarnRate,
    selectCoverType,
    faqs,
    navigateToEditSalary,
    selectedPackage,
    documents,
  } = props;

  const onSelectPackage = useCallback(
    (packageId: string) => {
      const coverType = packageId.toLowerCase() as PackageId;

      // Logger.logEvent("package_view", {
      //   name: newPackage.packageLabel,
      //   salary_percentage: packageDetails.salaryPercentageCovered,
      //   yucount_multiplier: packageDetails.earnRate,
      //   estimated_cost: packageDetails.estimatedCost,
      // });

      selectCoverType(coverType);
    },
    [selectCoverType]
  );

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading
          heading="Life insurance"
          rightIcon={{ icon: "CLOSE" }}
          onRightIconPress={onNavigateToYuScreen}
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <Animatable.View duration={1000} animation="fadeIn" style={{ flex: 1 }}>
            <PackageOptions selectedPackageId={selectedPackage.label} onSelectPackage={onSelectPackage} />
            <AvatarAndDescription avatar={avatar} selectedPackage={selectedPackage} currentEarnRate={currentEarnRate} />
            <EstimatedCost
              navigateToEditSalary={navigateToEditSalary}
              heading={`£${selectedPackage.estimatedCost} per month`}
            />
            <HowItWorks
              header={selectedPackage.id}
              content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentageCovered}% of your future earnings from the date of death until age 70 (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
            />
            <PayoutCalculator />
            <AdditionalBenefits
              earnRate={currentEarnRate}
              packageEarnRate={currentEarnRate + selectedPackage.earnRate}
            />
            <Faqs items={faqs} />
            <Documents items={documents} />
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>

      <ContinueButton onNavigateBack={onNavigateToYuScreen} />
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
    paddingBottom: 96,
  },
});
