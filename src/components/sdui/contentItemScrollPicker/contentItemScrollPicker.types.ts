export type DisplayFormat = Array<
  Array<{
    answerKey: string;
    isDynamic?: boolean | null;
    smartCountTranslationKey?: string | null;
  }>
>;

export type Wheel = {
  answerKey: string;
  initialStepIndex?: number | null;
  min: number;
  max: number;
  step: number;
  suffixTranslationKey?: string | null;

  /**
   * @deprecated Use `suffixTranslationKey` instead.
   */
  suffixPlural: string | null;
  /**
   * @deprecated Use `suffixTranslationKey` instead.
   */
  suffixSingular: string | null;
  /**
   * @deprecated Use `suffixTranslationKey` instead.
   */
  suffixSingularValue: number | null;
};

type Variant = {
  __typename?: "ContentItemScrollPickerVariant";
  id: string;
  chipLabel?: string;
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
