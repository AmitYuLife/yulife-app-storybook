import React, { memo, useState, useCallback } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms";
import { Colours, Style } from "@styles";
import { ScrollableLayout } from "@molecules";
import { PackageSelector } from "../../../../organisms/lump-calculator/package-selector";
import Slider from "@react-native-community/slider";
import { addCommasToNumber } from "@services/utils";
import { YugiRibbon, Ribbon } from "./assets/yugi-ribbon";
import { CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo } from "../../../../../graphql/_core/schema/CreateTopUpsQuote";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "../../../../../graphql/_core/schema/GetYulifer";
import { GQL_QUERY_GET_YULIFER } from "../../../../../graphql/yuscreen/getYulifer.gql";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { getTerm, calculateSumAssured } from "../../../../containers/products/fib/fib.helpers";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "../../../../../redux/product/product.selectors";
import { updateFIBValue } from "../../../../../redux/product/product.actions";
export interface IFibPayoutCalculatorDataAddedScreenProps {
  onNavigateBack: () => void;
  onContinue: () => void;
  grossSalary: number;
  age: number;
  coverTypesInfo?: CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo;
}

interface IYugiRibbonColors {
  [key: string]: any;
}

const yugiRibbonColors: IYugiRibbonColors = {
  epic: {
    leftAndRightItemsColor: "#C7B4FD",
    smallElementColor: Colours.products.fib.epic,
    bigItemColor: "#DFD3FF",
    textColor: Colours.products.fib.epic,
  },
  rare: {
    leftAndRightItemsColor: "#7EDCF5",
    smallElementColor: Colours.products.fib.rare,
    bigItemColor: "#B2ECFB",
    textColor: Colours.products.fib.rare,
  },
  common: {
    leftAndRightItemsColor: "#80F6CD",
    smallElementColor: Colours.products.fib.common,
    bigItemColor: "#B1F9E0",
    textColor: "#00CC87",
  },
};

export const FibPayoutCalculatorDataAddedScreen = memo(function (props: IFibPayoutCalculatorDataAddedScreenProps) {
  const dispatch = useDispatch();
  const { onNavigateBack, onContinue, grossSalary, age, coverTypesInfo } = props;
  const term = getTerm(age);
  const maxSliderValue = term - 1;
  const minSliderValue = 0;
  const initialSelectedPackage = useSelector(getFIBState).selectedPackage;
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

  const salaryPercentageCovered = selectedProductOption?.percentageCovered * 100 || 0;
  const onPressContinue = useCallback(() => {
    dispatch(
      updateFIBValue({
        key: "selectedPackage",
        value: selectedPackage,
      })
    );

    onContinue();
  }, [selectedPackage, onContinue, dispatch]);

  const onSelectPackage = (packageId: CoverType) => {
    setSelectedPackage(packageId);
  };

  const sumAssured = coverTypesInfo
    ? (coverTypesInfo as any)[selectedPackage.toLowerCase()].sumAssured
    : calculateSumAssured(grossSalary, salaryPercentageCovered, term);

  const yearlyAmountProtected = sumAssured / term;
  const payoutAmount = Math.round(sumAssured - yearlyAmountProtected * currentSliderValue);
  const yugiRibbonHeight = Platform.select({
    ios: Style.isAnyIphoneX() ? "184" : "138",
    android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? "138" : "184",
  });
  const yugiRibbonWidth = Platform.select({
    ios: Style.isAnyIphoneX() ? "276" : "207",
    android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? "207" : "276",
  });

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
        <View style={styles.yugiRibbonWrapper}>
          <YugiRibbon height={yugiRibbonHeight} width={yugiRibbonWidth} />
          <View style={styles.ribbonWrapper}>
            <Ribbon
              leftAndRightItemsColor={yugiRibbonColors[selectedPackage].leftAndRightItemsColor}
              smallElementColor={yugiRibbonColors[selectedPackage].smallElementColor}
              bigItemColor={yugiRibbonColors[selectedPackage].bigItemColor}
              height={yugiRibbonHeight}
              width={yugiRibbonWidth}
            />
          </View>
          <Text
            style={StyleSheet.flatten([
              styles.sumAssured,
              { color: (yugiRibbonColors as any)[selectedPackage].textColor },
            ])}
          >{`£${addCommasToNumber(payoutAmount)}`}</Text>
        </View>

        <Text style={styles.description}>{`Based on ${salaryPercentageCovered}% of your £${addCommasToNumber(
          grossSalary
        )} yearly salary and your age of ${age}, we can cover you up to the age of ${ageUpToCover}.`}</Text>
        <View style={styles.remainingPolicyYearWrapper}>
          <View style={{ width: 35, alignItems: "flex-end" }}>
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

        <View style={styles.packageSelectorWrapper}>
          <PackageSelector
            onPackageSelected={onSelectPackage}
            commonCost={coverTypesInfo?.common.actualCost}
            rareCost={coverTypesInfo?.rare.actualCost}
            epicCost={coverTypesInfo?.epic.actualCost}
          />
        </View>
      </View>
    </ScrollableLayout>
  );
});

const styles = StyleSheet.create({
  ribbonWrapper: { position: "absolute" },
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
  yugiRibbonWrapper: {
    width: Style.DEVICE_WIDTH,
    alignItems: "center",
  },
  sumAssured: {
    position: "absolute",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(28) : Style.adjust(21),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(21) : Style.adjust(28),
    }),
    lineHeight: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(32) : Style.adjust(24),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(24) : Style.adjust(32),
    }),
    letterSpacing: 1,
    marginTop: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(83) : Style.adjust(62),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(62) : Style.adjust(83),
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
