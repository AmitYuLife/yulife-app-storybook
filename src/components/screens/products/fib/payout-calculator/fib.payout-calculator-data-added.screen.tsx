import React, { memo, useState, useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import { ScrollableLayout } from "@molecules";
import { PackageSelector } from "@organisms/lump-calculator/package-selector";
import Slider from "@react-native-community/slider";
import { addCommasToNumber } from "@utils";
import { CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo } from "@graphql/_core/schema/CreateTopUpsQuote";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema/GetYulifer";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen/getYulifer.gql";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { getTerm } from "@containers/products/fib/fib.helpers";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBValue } from "@redux/product/product.actions";
import { PayoutYugi } from "./payout-yugi";
export interface IFibPayoutCalculatorDataAddedScreenProps {
  onNavigateBack: () => void;
  onContinue: () => void;
  grossSalary: number;
  age: number;
  coverTypesInfo?: CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo;
  isCustomCover?: boolean;
  customCoverPercentage?: number;
}

export const FibPayoutCalculatorDataAddedScreen = memo(function (props: IFibPayoutCalculatorDataAddedScreenProps) {
  const dispatch = useDispatch();
  const { onNavigateBack, onContinue, grossSalary, age, coverTypesInfo, isCustomCover, customCoverPercentage } = props;
  const term = getTerm(age);
  const maxSliderValue = term - 1;
  const minSliderValue = 0;
  const selectedCoverFromRedux = useSelector(getFIBState).selectedPackage;
  const initialSelectedPackage = isCustomCover ? CoverType.custom : selectedCoverFromRedux;
  const ageUpToCover = age + term;
  const [selectedPackage, setSelectedPackage] = useState<CoverType>(initialSelectedPackage as CoverType);
  const [currentSliderValue, setCurrentSliderValue] = useState(0);
  const remainingYearsOnPolicy = term - currentSliderValue;
  const remainingYearsOnPolicyText =
    remainingYearsOnPolicy === 1 ? " year remaining on policy" : " years remaining on policy";

  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const selectedProductOption = yuliferData.personal.chest?.options.filter(
    (productOption) => productOption.type === selectedPackage.toLowerCase()
  )[0];

  const salaryPercentageCovered = isCustomCover
    ? customCoverPercentage
    : (selectedProductOption?.percentageCovered || 0) * 100;

  const onPressContinue = useCallback(() => {
    if (!isCustomCover) {
      dispatch(
        updateFIBValue({
          key: "selectedPackage",
          value: selectedPackage,
        })
      );
    }

    onContinue();
  }, [selectedPackage, onContinue, dispatch, isCustomCover]);

  const onSelectPackage = (packageId: CoverType) => {
    setSelectedPackage(packageId);
  };

  return (
    <ScrollableLayout
      onLeftIconPress={onNavigateBack}
      logo={"yulife"}
      isBeta={false}
      buttonAction={onPressContinue}
      buttonTitle={"Continue with cover"}
    >
      <View style={styles.wrapper}>
        <Text style={styles.title}>Your payout will be:</Text>
        <PayoutYugi
          coverTypesInfo={coverTypesInfo}
          selectedPackage={selectedPackage}
          grossSalary={grossSalary}
          salaryPercentageCovered={salaryPercentageCovered}
          term={term}
          currentSliderValue={currentSliderValue}
          isCustomCover={isCustomCover}
        />

        <Text style={styles.description}>{`Based on ${salaryPercentageCovered}% of your £${addCommasToNumber(
          grossSalary
        )} yearly salary and your age of ${age}, we can cover you up to the age of ${ageUpToCover}.`}</Text>
        <View style={styles.remainingPolicyYearWrapper}>
          <View style={styles.remainingYearValueWrapper}>
            <Text style={styles.remainingYearValue}>{remainingYearsOnPolicy}</Text>
          </View>
          <Text style={styles.remainingYearDescription}>{remainingYearsOnPolicyText}</Text>
        </View>

        <View style={styles.sliderWrapper}>
          <Slider
            minimumTrackTintColor="#e20177"
            thumbImage={require("../../../../../../assets/fib/browse-packages/grip.png")}
            maximumValue={maxSliderValue}
            minimumValue={minSliderValue}
            step={1}
            onValueChange={(item) => {
              setCurrentSliderValue(item);
            }}
          />
        </View>
        {isCustomCover ? null : (
          <View style={styles.packageSelectorWrapper}>
            <PackageSelector
              selectedPackage={selectedPackage}
              onPackageSelected={onSelectPackage}
              commonCost={coverTypesInfo?.common.actualCost}
              rareCost={coverTypesInfo?.rare.actualCost}
              epicCost={coverTypesInfo?.epic.actualCost}
            />
          </View>
        )}
      </View>
    </ScrollableLayout>
  );
});

const styles = StyleSheet.create({
  packageSelectorWrapper: {
    marginVertical: Style.adjust(40),
  } as ViewStyle,
  sliderWrapper: {
    marginHorizontal: Style.adjust(32),
  } as ViewStyle,
  title: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(24),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    textAlign: "center",
    color: Colours.products.fib.n800,
    marginBottom: Style.adjust(16),
    width: Style.DEVICE_WIDTH,
  } as TextStyle,
  description: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(16) : Style.adjust(14),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(14) : Style.adjust(16),
    }),
    lineHeight: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(24) : Style.adjust(18),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(18) : Style.adjust(24),
    }),
    letterSpacing: 0.6,
    marginHorizontal: 32,
    textAlign: "center",
    color: Colours.neutral.n700,
    marginTop: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(16) : Style.adjust(12),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(12) : Style.adjust(16),
    }),
  } as TextStyle,
  remainingPolicyYearWrapper: {
    flexDirection: "row",
    width: Style.DEVICE_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(44) : Style.adjust(22),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(22) : Style.adjust(44),
    }),
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  remainingYearDescription: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
    color: Colours.products.fib.n800,
  } as TextStyle,
  remainingYearValueWrapper: {
    alignItems: "flex-end",
  } as ViewStyle,
  remainingYearValue: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(28),
    lineHeight: Style.adjust(32),
    letterSpacing: 1,
    color: Colours.products.fib.n800,
  } as TextStyle,
  wrapper: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  customerPayoutTitle: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.8,
    color: Colours.neutral.n50,
  } as TextStyle,
  sumText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    letterSpacing: 1,
    color: Colours.neutral.white,
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(16),
  } as TextStyle,
  descriptionText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
    letterSpacing: 0.4,
    color: Colours.neutral.n50,
    marginTop: Style.adjust(16),
    textAlign: "center",
  } as TextStyle,
});
