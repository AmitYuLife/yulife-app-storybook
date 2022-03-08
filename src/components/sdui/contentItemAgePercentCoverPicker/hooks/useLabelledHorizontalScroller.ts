interface UseLabelledHorizontalScroller {
  agesInYears: number[];
  onActiveAgeChange: (index: number) => void;
  ageToIndex: Record<number, number>;
  salaryPercentToMaxAge: Record<number, number>;
  activeSalaryPercent: number;
  policyEndAge: number;
  ageText: string;
  agePickerButtonRightIconImageUrl: string;
}

export const useLabelledHorizontalScroller = ({
  agesInYears,
  onActiveAgeChange,
  ageToIndex,
  salaryPercentToMaxAge,
  activeSalaryPercent,
  policyEndAge,
  ageText,
  agePickerButtonRightIconImageUrl,
}: UseLabelledHorizontalScroller) => {
  const maxAgeForSalaryPercent = salaryPercentToMaxAge[activeSalaryPercent];

  const handleActiveListIndexChange = (index: number) => {
    onActiveAgeChange(agesInYears[index]);
  };

  const filteredLabelledHorizontalScrollerItems = agesInYears
    .slice(0, ageToIndex[maxAgeForSalaryPercent] + 1)
    .map((age) => ({ label: `${age}`, value: age }));

  const labelledHorizontalScroller = {
    items: filteredLabelledHorizontalScrollerItems,
    label: ageText.replace("${age}", policyEndAge.toString()),
    onIndexChange: handleActiveListIndexChange,
    activeValue: policyEndAge,
    maxAge: filteredLabelledHorizontalScrollerItems[filteredLabelledHorizontalScrollerItems.length - 1].value,
    buttonIconUrl: agePickerButtonRightIconImageUrl,
  };

  return labelledHorizontalScroller;
};
