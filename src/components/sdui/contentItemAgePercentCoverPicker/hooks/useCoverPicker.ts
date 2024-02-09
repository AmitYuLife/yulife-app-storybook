import { useMemo } from "react";
import {
  ContentItemAgePercentCoverPickerFragment,
  ContentItemCoverPickerCustomCoverFragment,
  CoverType,
} from "@graphql/__generated";

interface UseCoverPicker {
  pricing: ContentItemAgePercentCoverPickerFragment["contentItemAgePercentCoverPickerOptions"];
  customCover: ContentItemCoverPickerCustomCoverFragment;
  maxSalaryPercent: number;
  percentsToDefault: number[];
  policyEndAge: number;
  activeValue: number;
  onPickCover: ({ value, coverType }: { value: number; coverType: CoverType }) => () => void;
  ageToMaxSalaryPercent: Record<number, number>;
  topHeading: string;
  restrictedPercentInfoCardText: string;
}

export const useCoverPicker = ({
  pricing,
  customCover,
  maxSalaryPercent,
  percentsToDefault,
  policyEndAge,
  activeValue,
  onPickCover,
  ageToMaxSalaryPercent,
  topHeading,
  restrictedPercentInfoCardText,
}: UseCoverPicker) => {
  const coverPicker = useMemo(() => {
    const options = (
      pricing.find((item) => item.age === policyEndAge) || pricing[0]
    ).contentItemAgePercentCoverPickerAgeOptions
      .filter(
        (i) =>
          percentsToDefault.includes(i.contentItemAgePercentCoverPickerPercentOptionValue) &&
          i.contentItemAgePercentCoverPickerPercentOptionValue <= maxSalaryPercent
      )
      .map((i) => ({
        value: i.contentItemAgePercentCoverPickerPercentOptionValue,
        heading: `${i.contentItemAgePercentCoverPickerPercentOptionValue}%`,
        subheading: "",
        coverType: i.coverType,
      }));

    const optionCoverTypes = options.map((item) => item.coverType);

    return {
      topHeading,
      options,
      activeValue,
      onPickCover,
      isCustom: !percentsToDefault.includes(activeValue),
      restrictedPercentInfoCardText: !restrictedPercentInfoCardText
        ? ""
        : restrictedPercentInfoCardText.replace("${maxPercent}", `${maxSalaryPercent}`),
      percentPicker: {
        range: {
          min: customCover.itemsPicker.range.min,
          max: ageToMaxSalaryPercent[policyEndAge],
          step: customCover.itemsPicker.range.step,
        },
        styleVariants: customCover.itemsPicker.styleVariants.filter((item) =>
          optionCoverTypes.includes(item.id as CoverType)
        ), // TODO: Safety feature, depend on new field CoverType, not ID. Or note in server to have id: CoverType
        coverMap: customCover.itemsPicker.coverMap,
        styles: customCover.itemsPicker.styles,
      },
    };
  }, [
    pricing,
    customCover,
    maxSalaryPercent,
    percentsToDefault,
    policyEndAge,
    activeValue,
    onPickCover,
    ageToMaxSalaryPercent,
  ]);

  return coverPicker;
};
