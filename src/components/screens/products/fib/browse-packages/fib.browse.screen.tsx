import React, { memo, ComponentProps, useState, useCallback } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { GenericHeading } from "@atoms";
import { Style } from "@styles";
import { IAvatar } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { AvatarAndDescription, HowItWorks, EstimatedCost } from "./subcomponents";
import { ContinueButton } from "./continue-button/continue-button";
import { Package } from "./fib.browse.types";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import { Faqs } from "./subcomponents/faqs/faqs";
import AdditionalBenefits from "./additional-benefits/additional-benefits";

interface IFibBrowseScreenProps {
  onNavigateBack: () => void;
  currentEarnRate: number;
  avatar: IAvatar;
  faqs: ComponentProps<typeof Faqs>["items"];
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
  const { onNavigateBack, avatar, currentEarnRate, faqs } = props;

  const [selectedPackage, setSelectedPackage] = useState<Package>(DEFAULT_PACKAGE);

  const onSelectPackage = useCallback(
    (packageId: string) => {
      const newPackage = packages.find((p) => p.packageLabel === packageId);
      setSelectedPackage(newPackage);
    },
    [setSelectedPackage]
  );

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.headingWrapper}>
          <GenericHeading heading="Life insurance" onLeftIconPress={onNavigateBack} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          <PackageOptions selectedPackageId={selectedPackage.packageLabel} onSelectPackage={onSelectPackage} />
          <AvatarAndDescription avatar={avatar} selectedPackage={selectedPackage} currentEarnRate={currentEarnRate} />
          <EstimatedCost heading={`${selectedPackage.cost} per month`} />
          <HowItWorks
            header={selectedPackage.coverType}
            content={`In the event of death, your loved ones will receive ${selectedPackage.salaryPercentage}% of your future earnings from the date of death until age 70 (based on your current salary).\n\nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end.\n\nThis is paid as a single payment.`}
          />
          <AdditionalBenefits earnRate={currentEarnRate} packageEarnRate={currentEarnRate + selectedPackage.earnRate} />
          <Faqs items={faqs} />
        </ScrollView>
      </View>

      <ContinueButton onNavigateBack={onNavigateBack} />
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    backgroundColor: "#fafafe",
  },
  headingWrapper: {
    position: "absolute",
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
  scrollView: {
    paddingTop: Platform.select({ ios: 46, android: 56 }),
    paddingBottom: 96,
  },
});
