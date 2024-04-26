export type DisplayFormat = Array<
  Array<{
    answerKey: string;
    plural?: string | null;
    singular?: string | null;
    singularValue?: number | null;
    isDynamic?: boolean | null;
  }>
>;

export type Wheel = {
  answerKey: string;
  initialStepIndex?: number | null;
  min: number;
  max: number;
  step: number;
  suffixPlural: string;
  suffixSingular: string;
  suffixSingularValue: number;
  suffixMax?: string | null;
};

type Variant = {
  __typename?: "ContentItemScrollPickerVariant";
  id: string;
  answerKey?: string | null;
  toggleLabel?: string | null;
  toggleIndex?: number | null;
  wheels: Array<Wheel>;
};

export type ScrollPicker = {
  answerKey: string;
  displayFormat: DisplayFormat;
  variants: Variant[];
  pickerCancelButtonLabel: string;
  pickerConfirmButtonLabel: string;
  activeVariantIndex: number;
};
