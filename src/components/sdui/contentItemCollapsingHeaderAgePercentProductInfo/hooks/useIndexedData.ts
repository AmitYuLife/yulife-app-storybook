import { ContentItemAgePercentCoverPicker_contentItemAgePercentCoverPickerOptions } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { useMemo } from "react";

type KeyedPricing = Record<
  number,
  Record<
    number,
    {
      cost: string;
      monthlyPayout: string;
      coverType: CoverType;
    }
  >
>;

export const useIndexedData = (pricing: ContentItemAgePercentCoverPicker_contentItemAgePercentCoverPickerOptions[]) => {
  const indexedData = useMemo(() => {
    const sortedPricing = [...pricing].sort((a, b) => a.age - b.age);

    const derivedPricingData = sortedPricing.reduce(
      (acc, curr) => {
        const age = curr.age;

        const sortedOptions = [...curr.contentItemAgePercentCoverPickerAgeOptions].sort(
          (a, b) =>
            a.contentItemAgePercentCoverPickerPercentOptionValue - b.contentItemAgePercentCoverPickerPercentOptionValue
        );
        for (const {
          contentItemAgePercentCoverPickerPercentOptionValue,
          cost,
          monthlyPayout,
          coverType,
        } of sortedOptions) {
          if (!acc.keyedPricing[age]) {
            acc.keyedPricing[age] = {};
          }

          acc.keyedPricing[age] = {
            ...acc.keyedPricing[age],
            [contentItemAgePercentCoverPickerPercentOptionValue]: { cost, monthlyPayout, coverType },
          };
        }

        return acc;
      },
      { keyedPricing: {} as KeyedPricing }
    );

    return derivedPricingData;
  }, [pricing]);

  return (
    indexedData || {
      keyedPricing: {} as KeyedPricing,
    }
  );
};
