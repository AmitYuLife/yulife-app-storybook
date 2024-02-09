import React, { memo, useEffect } from "react";
import { ContentItemAgePercentCoverPickerFragment as GqlProps, CoverType } from "@graphql/__generated";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { MultiFactorPricing } from "@components/molecules";
import { usePackageCostBenefitCard } from "./hooks/usePackageCostBenefitCard";
import { useLabelledHorizontalScroller } from "./hooks/useLabelledHorizontalScroller";
import { useCoverPicker } from "./hooks/useCoverPicker";
import { useIndexedData } from "./hooks/useIndexedData";
import { useSafeData } from "./hooks/useSafeData";
import { useInitialiseFromDynamicData } from "./hooks/useInitialiseFromDynamicData";

interface ControlledProps {
  onChangePolicyEndAge: (age: number) => void;
  onChangeSalaryPercent: (salaryPercent: number) => void;
  onChangeCover: (coverType: CoverType) => void;
  onChangeMaxSalaryPercent: (maxSalaryPercent: number) => void;
  salaryPercent: number;
  policyEndAge: number;
  coverType: CoverType;
  onToggleAgeScroller: () => void;
}
type Props = GqlProps & ControlledProps;

export const ContentItemAgePercentCoverPicker = memo((props: Props) => {
  const {
    percentsToDefault,
    topHeading,
    userAge,
    onChangePolicyEndAge,
    onChangeCover,
    onChangeSalaryPercent,
    onChangeMaxSalaryPercent,
    coverType = props.answerKeyCoverTypeDefaultValue,
    salaryPercent = props.answerKeyPercentDefaultValue,
    policyEndAge = props.answerKeyAgeDefaultValue,
    agePickerButtonRightIconImageUrl,
    costPayoutBenefitHeading,
    costPayoutBenefitPayoutSchedule,
    costPayoutBenefitCostSchedule,
    restrictedPercentInfoCardText,
    onToggleAgeScroller,
  } = props;
  const pricing = props.contentItemAgePercentCoverPickerOptions;
  const { keyedPricing, ageToMaxSalaryPercent, agesInYears, ageToIndex, salaryPercentToMaxAge } =
    useIndexedData(pricing);

  const maxSalaryPercent = ageToMaxSalaryPercent[policyEndAge];

  const updateMaxSalaryPercent = () => onChangeMaxSalaryPercent(maxSalaryPercent);
  useInitialiseFromDynamicData({ sync: updateMaxSalaryPercent, syncDependencies: [maxSalaryPercent] });
  useEffect(updateMaxSalaryPercent, [maxSalaryPercent, pricing, ageToMaxSalaryPercent, policyEndAge]);
  useSafeData({ keyedPricing, policyEndAge, onChangePolicyEndAge });
  const handlePickCover = (newCover: { value: number; coverType: CoverType }) => () => {
    onChangeSalaryPercent(newCover.value);
    onChangeCover(newCover.coverType);
  };

  const coverPicker = useCoverPicker({
    pricing,
    maxSalaryPercent,
    customCover: props.customCover,
    percentsToDefault,
    policyEndAge,
    activeValue: salaryPercent,
    onPickCover: handlePickCover,
    ageToMaxSalaryPercent,
    topHeading,
    restrictedPercentInfoCardText: restrictedPercentInfoCardText?.markdown,
  });
  const packageCostBenefitCard = usePackageCostBenefitCard({
    keyedPricing,
    activeCover: coverType,
    activeSalaryPercent: salaryPercent,
    policyEndAge,
    userAge,
    costPayoutBenefitHeading,
    costPayoutBenefitPayoutSchedule,
    costPayoutBenefitCostSchedule,
  });
  const labelledHorizontalScroller = useLabelledHorizontalScroller({
    agesInYears,
    onActiveAgeChange: onChangePolicyEndAge,
    ageToIndex,
    salaryPercentToMaxAge,
    activeSalaryPercent: salaryPercent,
    policyEndAge,
    ageText: props.ageText.markdown,
    agePickerButtonRightIconImageUrl,
    onPressListViewCallback: onToggleAgeScroller,
  });

  return (
    <MultiFactorPricing
      style={mapServerStyles(props.styles)}
      packageCostBenefitCard={packageCostBenefitCard}
      labelledHorizontalScroller={labelledHorizontalScroller}
      coverPicker={coverPicker}
    />
  );
});
