import React, { memo, useState } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Button, Text } from "@atoms";
import { Colours, Style, TOP_BAR } from "@styles";
import { ScrollableLayout } from "@molecules";
import { PackageSelector } from "../../../../organisms/lump-calculator/package-selector";
import Slider from "@react-native-community/slider";
import { addCommasToNumber } from "@services/utils";
import { YugiRibbon } from "./assets/yugi-ribbon";
import { CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo } from "../../../../../graphql/_core/schema/CreateTopUpsQuote";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "../../../../../graphql/_core/schema/GetYulifer";
import { GQL_QUERY_GET_YULIFER } from "../../../../../graphql/yuscreen/getYulifer.gql";
import { CoverType } from "@graphql/_core/schema/globalTypes";
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
  const { onNavigateBack, onContinue, grossSalary, age, coverTypesInfo } = props;
  const term = getTerm(age);
  const [selectedPackage, setSelectedPackage] = useState<CoverType>(CoverType.rare);
  const [currentSliderValue, setCurrentSliderValue] = useState(0);

  const { data: yuliferData } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const selectedProductOption = yuliferData.personal.chest?.options.filter(
    (productOption) => productOption.type === selectedPackage.toLowerCase()
  )[0];

  const salaryPercentageCovered = selectedProductOption?.percentageCovered * 100 || 0;

  const onSelectPackage = (packageId: CoverType) => {
    setSelectedPackage(packageId);
  };

  const sumAssured = coverTypesInfo
    ? (coverTypesInfo as any)[selectedPackage.toLowerCase()].sumAssured
    : grossSalary * (salaryPercentageCovered / 100) * term;

  const yearlyAmountProtected = sumAssured / term;
  const payoutAmount = Math.round(sumAssured - yearlyAmountProtected * currentSliderValue);

  return (
    <ScrollableLayout onLeftIconPress={onNavigateBack} logo={"yulife"} isBeta={false}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Your payout will be:</Text>
        <View style={styles.yugiRibbonWrapper}>
          <YugiRibbon
            leftAndRightItemsColor={yugiRibbonColors[selectedPackage].leftAndRightItemsColor}
            smallElementColor={yugiRibbonColors[selectedPackage].smallElementColor}
            bigItemColor={yugiRibbonColors[selectedPackage].bigItemColor}
            height={Platform.select({
              ios: Style.isAnyIphoneX() ? "184" : "138",
              android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? "138" : "184",
            })}
            width={Platform.select({
              ios: Style.isAnyIphoneX() ? "276" : "207",
              android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? "207" : "276",
            })}
          />
          <Text
            style={StyleSheet.flatten([
              styles.sumAssured,
              { color: (yugiRibbonColors as any)[selectedPackage].textColor },
            ])}
          >{`£${addCommasToNumber(payoutAmount)}`}</Text>
        </View>

        <Text style={styles.description}>{`Based on ${salaryPercentageCovered}% of your £${addCommasToNumber(
          grossSalary
        )} yearly salary and your age of ${age}, we can cover you up to the age of 70.`}</Text>
        <View style={styles.remainingPolicyYearWrapper}>
          <View style={{ width: 35, alignItems: "flex-end" }}>
            <Text style={styles.remainingYearValue}>{`${term - currentSliderValue}`}</Text>
          </View>
          <Text style={styles.remainingYearDescription}> years remaining on policy</Text>
        </View>

        <View style={styles.sliderWrapper}>
          <Slider
            minimumTrackTintColor="#e20177"
            thumbImage={require("../../../../../../assets/fib/browse-packages/grip.png")}
            maximumValue={term}
            minimumValue={0}
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
        <View style={styles.buttonWrapper}>
          <Button type="Primary" label="Continue with cover" onPress={onContinue} />
        </View>
      </View>
    </ScrollableLayout>
  );
});

const getTerm = (age: number) => {
  let term = 70 - age;
  if (term > 40) {
    term = 40;
  }

  if (term <= 5) {
    term = 0;
  }

  return term;
};

const styles = StyleSheet.create({
  packageSelectorWrapper: {
    flex: 1,
    justifyContent: "center",
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
    height: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(184) : Style.adjust(138),
      android:
        Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(138) : Style.adjust(184),
    }),
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
      ios: Style.isAnyIphoneX() ? Style.adjust(85) : Style.adjust(64),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(64) : Style.adjust(85),
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
  buttonWrapper: {
    marginBottom: Platform.select({
      ios: Style.isAnyIphoneX() ? Style.adjust(32) : Style.adjust(24),
      android: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? Style.adjust(24) : Style.adjust(32),
    }),
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  wrapper: {
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - TOP_BAR.PADDING_TOP),
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
