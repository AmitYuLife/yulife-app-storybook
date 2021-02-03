import React, { memo, useCallback, useRef, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  NativeScrollPoint,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewStyle,
} from "react-native";
import { Button } from "@atoms";
import { HowItWorks } from "./subcomponents";
import { Faqs } from "./subcomponents/faqs/faqs";
import { Documents } from "./subcomponents/documents/documents";
import { Package } from "./fib.browse.types";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { PackageOptions } from "./subcomponents/package-options/package-options";
import PackageInfo from "./subcomponents/package-info/package-info";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Style } from "@styles";
import * as Animated from "react-native-animatable";
import { payoutCalculatorSvg } from "./subcomponents/payout-calculator/assets/payout-calculator-svg";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { CustomCoverPrompt } from "./subcomponents/custom-cover-prompt/custom-cover-prompt";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import AdditionalInformation, {
  IAdditionalInformation,
} from "./subcomponents/additional-information/additional-information";
import { ContinueButton } from "@components/screens/products/fib/browse-packages/continue-button/continue-button";
interface FibDetailsScreenProps {
  documents: any;
  howItWorks?: string;
  additionalInformation?: IAdditionalInformation;
  otherBenefits?: IAdditionalInformation;
  selectedPackage: Package;
  selectCoverType: (coverType: CoverType) => void;
  continueButtonIsFixed?: boolean;
  offset: NativeScrollPoint;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  navigateToBack: () => void;
  navigateToExit: () => void;
  navigateToContinue: () => void;
  navigateToFaqsList: () => void;
  navigateToPayoutCalculator: () => void;
  navigateToCustomCover?: () => void;
}

export const FibDetailsScreen = memo(function (props: FibDetailsScreenProps) {
  const {
    documents,
    howItWorks,
    additionalInformation,
    otherBenefits,
    selectedPackage,
    selectCoverType,
    continueButtonIsFixed,
    onScrollEnd,
    offset,
    navigateToBack,
    navigateToExit,
    navigateToContinue,
    navigateToFaqsList,
    navigateToPayoutCalculator,
    navigateToCustomCover,
  } = props;

  const backHandler = useCallback(() => {
    navigateToBack();
    return true;
  }, [navigateToBack]);

  useBackHandler(backHandler);

  const onSelectPackage = (packageId: string) => {
    const coverType = packageId.toLowerCase() as CoverType;
    selectCoverType(coverType);
  };

  const scrollViewRef = useRef<ScrollView>(null);

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

  return (
    <>
      <Animated.View animation="fadeIn" duration={1000} easing="ease-in" useNativeDriver={true} style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          onMomentumScrollEnd={onScrollEnd}
          ref={scrollViewRef}
        >
          <PackageOptions
            selectedPackageId={selectedPackage.label}
            onSelectPackage={onSelectPackage}
            filterBySelected={selectedPackage?.filterBySelected}
          />
          <View style={styles.separator}>
            <PackageInfo selectedPackage={selectedPackage} packagePrice={selectedPackage.actualCost} />
          </View>
          {howItWorks ? (
            <View style={styles.separator}>
              <HowItWorks content={howItWorks} />
            </View>
          ) : null}
          {additionalInformation ? (
            <View style={styles.separator}>
              <AdditionalInformation items={additionalInformation.items} />
            </View>
          ) : null}
          <View style={styles.separator}>
            <Button
              type="Tertiary"
              size="Fill"
              onPress={navigateToPayoutCalculator}
              label="How much would it pay out?"
              height={Style.adjust(60)}
              iconSvgXml={payoutCalculatorSvg}
              rightIcon={BUTTON_ICON.ARROW_RIGHT}
            />
          </View>
          {otherBenefits ? (
            <View style={styles.separator}>
              <AdditionalInformation title={otherBenefits.title} items={otherBenefits.items} />
            </View>
          ) : null}

          {documents ? (
            <View style={styles.documents}>
              <Documents items={documents} />
            </View>
          ) : null}
          <View style={styles.separator}>
            <Faqs navigateToFaqsList={navigateToFaqsList} />
          </View>
          {navigateToCustomCover ? (
            <View style={styles.separator}>
              <CustomCoverPrompt onPressCustomCoverPrompt={navigateToCustomCover} />
            </View>
          ) : null}
          {!continueButtonIsFixed ? <Button label="Continue" onPress={navigateToContinue} type="Primary" /> : null}
          <View style={styles.padBot} />
        </ScrollView>
      </Animated.View>
      <GenericHeadingAbsolute
        leftIcon="BACK"
        onLeftIconPress={navigateToBack}
        onRightIconPress={navigateToExit}
        logo="yulife"
      />
      {continueButtonIsFixed ? <ContinueButton onPress={navigateToContinue} /> : null}
    </>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fafafe",
    flex: 1,
    height: "100%",
    paddingLeft: Style.adjust(24),
    paddingRight: Style.adjust(24),
  },
  scrollView: {
    backgroundColor: "#fafafe",
    paddingBottom: 32,
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 47,
    marginBottom: -5,
  },
  separator: {
    marginBottom: Style.adjust(40),
  },
  documents: {
    marginBottom: Style.adjust(26),
  },
  padBot: {
    height: Style.hasNotch ? 20 : 40,
  } as ViewStyle,
});
