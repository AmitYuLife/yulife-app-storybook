import React from "react";
import { ScrollView, View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import MultiFactorPricing from "./multi-factor-pricing";
import { Colours, Style } from "@styles";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { useMemo, useState } from "@storybook/addons";
import { options } from "./mock-data";
import { pricing } from "./mock-data-pricing";
import { TextTemplate } from "@atoms";
import moment from "moment";

interface CostBenefit {
  cost: number;
  monthlyPayout: number;
}

type Age = number;
type SalaryPercent = number;
type KeyedPricing = Record<Age, Record<SalaryPercent, CostBenefit>>;
const USER_AGE = 35;
const CURRENT_YEAR = 2022;
const now = moment().format("Do MMMM");

storiesOf("molecules/multi-factor-pricing", module).add("default", () => {
  const minAge = pricing[0].age;
  const minSalaryPercentage = pricing[0].options[0].value;
  const minCover = pricing[0].options[0].coverType;
  const [policyEndAge, setPolicyEndAge] = useState(minAge);
  const [activeSalaryPercent, setActiveSalaryPercent] = useState(minSalaryPercentage);
  const [activeCover, setActiveCover] = useState(minCover);
  const termLength = policyEndAge - USER_AGE;

  const slicedPricing = pricing;

  const indexedData = useMemo(() => {
    const derivedData = slicedPricing.reduce(
      (acc, curr, currentIndex) => {
        let salaryPercentIndexCount = 0;
        const age = curr.age;

        acc.agesInYears.push(age);
        acc.ageToIndex = { ...acc.ageToIndex, [age]: currentIndex };

        const sortedOptions = curr.options.sort((a, b) => a.value - b.value);
        for (const { value, cost, monthlyPayout } of sortedOptions) {
          if (!acc.keyedPricing[age]) {
            acc.keyedPricing[age] = {};
          }

          acc.keyedPricing[age] = {
            ...acc.keyedPricing[age],
            [value]: { cost, monthlyPayout },
          };

          acc.ageToMaxSalaryPercent = { ...acc.ageToMaxSalaryPercent, [age]: value };
          acc.salaryPercentToMaxAge = { ...acc.salaryPercentToMaxAge, [value]: age };

          if (!currentIndex) {
            acc.salaryPercentToIndex = { ...acc.salaryPercentToIndex, [value]: salaryPercentIndexCount };
            salaryPercentIndexCount++;
          }
        }

        return acc;
      },
      {
        keyedPricing: {} as KeyedPricing,
        agesInYears: [] as number[],
        ageToMaxSalaryPercent: {} as Record<Age, SalaryPercent>,
        salaryPercentToMaxAge: {} as Record<SalaryPercent, Age>,
        salaryPercentToIndex: {} as Record<SalaryPercent, number>,
        ageToIndex: {} as Record<Age, number>,
      }
    );

    return derivedData;
  }, [pricing]);

  const safeIndexedData = indexedData || ({ keyedPricing: {}, agesInYears: [] } as typeof indexedData);
  const { ageToIndex, ageToMaxSalaryPercent, agesInYears, salaryPercentToMaxAge } = safeIndexedData;

  const handleActiveAgeChange = (index: number) => {
    setPolicyEndAge(agesInYears[index]);
  };

  const handlePickCover = ({ value, coverType }: { value: number; coverType: CoverType }) => () => {
    setActiveSalaryPercent(value);
    setActiveCover(coverType);
  };

  const maxAgeForSalaryPercent = salaryPercentToMaxAge[activeSalaryPercent];
  const filteredLabelledHorizontalScrollerItems = agesInYears
    .slice(0, ageToIndex[maxAgeForSalaryPercent] + 1)
    .map((age) => ({ label: `${age}`, value: age }));

  const labelledHorizontalScroller = {
    items: filteredLabelledHorizontalScrollerItems,
    label: !policyEndAge
      ? "What age would you like your policy to stop?**"
      : `Your policy will stop when you are **${policyEndAge} years old****`,
    onIndexChange: handleActiveAgeChange,
    activeValue: policyEndAge,
    maxAge: filteredLabelledHorizontalScrollerItems[filteredLabelledHorizontalScrollerItems.length - 1].value,
    buttonIconUrl: "",
  };

  const coverPicker = {
    options: options.filter(({ value }) => value < ageToMaxSalaryPercent[policyEndAge] + 1),
    activeValue: activeSalaryPercent,
    onPickCover: handlePickCover,
    isCustom: false,
    maxCover: ageToMaxSalaryPercent[policyEndAge],
    percentPicker: {
      range: {
        min: 25,
        max: ageToMaxSalaryPercent[policyEndAge],
        step: 1,
      },
      styleVariants: [
        {
          id: "common",
          minVisibleIndex: null,
          maxVisibleIndex: 25,
          item: { color: "#36CB95" },
          overlay: {
            backdropStyles: [
              {
                property: "backgroundColor",
                value: "#EFFBF7",
              },
              {
                property: "borderColor",
                value: "#36CB95",
              },
            ],
            highlightLabel: "%",
            highlightLabelColor: "#36CB95",
            overlayTitle: "Common",
            overlayTitleWrapperStyles: [
              {
                property: "backgroundColor",
                value: "#36CB95",
              },
            ],
          },
        },
        {
          id: "rare",
          minVisibleIndex: 25,
          maxVisibleIndex: 49,
          item: { color: "#569DE9" },
          overlay: {
            backdropStyles: [
              {
                property: "backgroundColor",
                value: "#F1F7FD",
              },
              {
                property: "borderColor",
                value: "#569DE9",
              },
            ],
            highlightLabel: "%",
            highlightLabelColor: "#569DE9",
            overlayTitle: "Rare",
            overlayTitleWrapperStyles: [
              {
                property: "backgroundColor",
                value: "#569DE9",
              },
            ],
          },
        },
        {
          id: "epic",
          minVisibleIndex: 50,
          maxVisibleIndex: 50,
          item: { color: "#956AFF" },
          overlay: {
            backdropStyles: [
              {
                property: "backgroundColor",
                value: "#F7F3FF",
              },
              {
                property: "borderColor",
                value: "#956AFF",
              },
            ],
            highlightLabel: "%",
            highlightLabelColor: "#956AFF",
            overlayTitle: "Epic",
            overlayTitleWrapperStyles: [
              {
                property: "backgroundColor",
                value: "#956AFF",
              },
            ],
          },
        },
      ],
      coverMap: [
        { coverType: CoverType.common, max: 49 },
        { coverType: CoverType.rare, max: 74 },
        { coverType: CoverType.epic, max: 75 },
      ],
      styles: [{ property: "marginTop", value: "16" }],
    },
    topHeading: "What % of your salary would you like covered?",
  };

  const packageCostBenefitCard = {
    costValue: "£12.34",
    costDescription: "per month",
    coverType: activeCover as CoverType,
    benefitDescription: "In the event of your passing, we’ll pay out:",
    benefitValue: "£34.56",
    benefitIntervalMarkdown: `a month until\n**${now} ${CURRENT_YEAR + termLength}**`,
  };

  return (
    <ScrollView style={{ backgroundColor: Colours.neutral.n100 }}>
      <View style={{ height: Style.DEVICE_HEIGHT / 10 }} />
      <TextTemplate type="l1">{`User age: ${USER_AGE}`}</TextTemplate>
      <TextTemplate type="l1">{`Active Salary Percent: ${activeSalaryPercent}`}</TextTemplate>
      <TextTemplate type="l1">{`Active Age: ${policyEndAge}`}</TextTemplate>
      <TextTemplate type="l1">{`Max salary percent for age: ${ageToMaxSalaryPercent[policyEndAge]}`}</TextTemplate>
      <TextTemplate type="l1">{`Max age for salary percent: ${salaryPercentToMaxAge[activeSalaryPercent]}`}</TextTemplate>
      <View style={{ paddingHorizontal: Style.adjust(24) }}>
        <MultiFactorPricing
          coverPicker={coverPicker}
          packageCostBenefitCard={packageCostBenefitCard}
          labelledHorizontalScroller={labelledHorizontalScroller}
        />
      </View>
    </ScrollView>
  );
});
