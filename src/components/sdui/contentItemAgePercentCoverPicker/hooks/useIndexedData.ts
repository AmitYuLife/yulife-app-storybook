import { ContentItemAgePercentCoverPicker } from "@graphql/_core/schema";
import { useMemo } from "react";
import { KeyedPricing, Age, SalaryPercent } from "./types";

export const useIndexedData = (
  pricing: ContentItemAgePercentCoverPicker["contentItemAgePercentCoverPickerOptions"]
) => {
  const indexedData = useMemo(() => {
    const derivedData = pricing.reduce(
      (acc, curr, currentIndex) => {
        let salaryPercentIndexCount = 0;
        const age = curr.age;

        acc.agesInYears.push(age);
        acc.ageToIndex = { ...acc.ageToIndex, [age]: currentIndex };

        const sortedOptions = curr.contentItemAgePercentCoverPickerAgeOptions.sort(
          (a, b) =>
            a.contentItemAgePercentCoverPickerPercentOptionValue - b.contentItemAgePercentCoverPickerPercentOptionValue
        );
        for (const { contentItemAgePercentCoverPickerPercentOptionValue, cost, monthlyPayout } of sortedOptions) {
          if (!acc.keyedPricing[age]) {
            acc.keyedPricing[age] = {};
          }

          acc.keyedPricing[age] = {
            ...acc.keyedPricing[age],
            [contentItemAgePercentCoverPickerPercentOptionValue]: { cost, monthlyPayout },
          };

          acc.ageToMaxSalaryPercent = {
            ...acc.ageToMaxSalaryPercent,
            [age]: contentItemAgePercentCoverPickerPercentOptionValue,
          };
          acc.salaryPercentToMaxAge = {
            ...acc.salaryPercentToMaxAge,
            [contentItemAgePercentCoverPickerPercentOptionValue]: age,
          };

          if (!currentIndex) {
            acc.salaryPercentToIndex = {
              ...acc.salaryPercentToIndex,
              [contentItemAgePercentCoverPickerPercentOptionValue]: salaryPercentIndexCount,
            };
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

  return (
    indexedData || {
      keyedPricing: {} as KeyedPricing,
      agesInYears: [] as number[],
      ageToMaxSalaryPercent: {} as Record<Age, SalaryPercent>,
      salaryPercentToMaxAge: {} as Record<SalaryPercent, Age>,
      salaryPercentToIndex: {} as Record<SalaryPercent, number>,
      ageToIndex: {} as Record<Age, number>,
    }
  );
};
