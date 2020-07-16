import React, { memo, ComponentProps, useState, useCallback } from "react";
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
import Logger from "@services/logging/logger";
import { Documents } from "./subcomponents/documents/documents";

interface IFibBrowseScreenProps {
  onNavigateToYuScreen: () => void;
  navigateToEditSalary: () => void;
  currentEarnRate: number;
  avatar: IAvatar;
  faqs: ComponentProps<typeof Faqs>["items"];
  documents: ComponentProps<typeof Faqs>["items"];
}

const packages: Package[] = [
  {
    coverType: "common",
    packageLabel: "Common",
    earnRate: 10,
    salaryPercentage: 25,
    cost: 10,
    descriptionHeading: "Designed to cover the basics",
  },
  {
    coverType: "rare",
    packageLabel: "Rare",
    earnRate: 20,
    salaryPercentage: 50,
    cost: 20,
    descriptionHeading: "Cover the home and basics",
  },
  {
    coverType: "epic",
    packageLabel: "Epic",
    earnRate: 30,
    salaryPercentage: 75,
    cost: 30,
    descriptionHeading: "Maximum protection for your loved ones",
  },
];

const DEFAULT_PACKAGE = packages[0];

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const { onNavigateToYuScreen, avatar, currentEarnRate, faqs, navigateToEditSalary, documents } = props;

  const [selectedPackage, setSelectedPackage] = useState<Package>(DEFAULT_PACKAGE);

  const onSelectPackage = useCallback(
    (packageId: string) => {
      const newPackage = packages.find((p) => p.packageLabel === packageId);
      Logger.logEvent("package_view", {
        name: newPackage.packageLabel,
        salary_percentage: newPackage.salaryPercentage,
        yucount_multiplier: newPackage.earnRate,
        estimated_cost: newPackage.cost,
      });
      setSelectedPackage(newPackage);
    },
    [setSelectedPackage]
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
            <PackageOptions selectedPackageId={selectedPackage.packageLabel} onSelectPackage={onSelectPackage} />
            <AvatarAndDescription avatar={avatar} selectedPackage={selectedPackage} currentEarnRate={currentEarnRate} />
            <EstimatedCost navigateToEditSalary={navigateToEditSalary} heading={`£${selectedPackage.cost} per month`} />
            <HowItWorks
              header={selectedPackage.coverType}
              content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentage}% of your future earnings from the date of death until age 70 (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
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
