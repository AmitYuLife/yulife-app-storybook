import React, { memo, useCallback } from "react";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import {
  ContentItemDropdownInput as GqlInput,
  ContentItemDropdownInputOptions as GqlOption,
} from "@graphql/_core/schema";
import { addCommasToNumber } from "@utils";
import { ContentItemDropdownInputBase } from "@components/sdui/contentItemDropdownInput/contentItemDropdownInput";

export const ProductItemDropdownInput = memo((props: GqlInput) => {
  const { answerKey, dropdownOptions, selectInstruction, heading, validation } = props;

  const { value: dynamicDataValue, onChange } = useDynamicOnChange<string>(answerKey, formatValue);
  const closeModal = useCallback(() => Navigation.dismissOverlay(MODALS.blurredOverlay), []);
  const onOptionPress = useCallback(
    (val: string) => {
      onChange(val);
      closeModal();
    },
    [onChange, closeModal]
  );

  const options = dropdownOptions?.map(({ label, value: val }: GqlOption) => ({
    label,
    value: val,
    onPress: () => onOptionPress(val),
  }));

  const errorMessage =
    (validation?.length &&
      dynamicDataValue &&
      validation.find((v) => !new RegExp(v.validationValue).test(dynamicDataValue))?.validationName) ||
    "";

  return (
    <ContentItemDropdownInputBase
      value={dynamicDataValue}
      options={options}
      selectInstruction={selectInstruction}
      errorMessage={errorMessage}
      heading={heading}
    />
  );
});

const formatValue = (value: unknown) => {
  if (!value) {
    return null;
  }

  if (typeof value === "number") {
    return String(addCommasToNumber(value));
  }

  return value as string;
};

export default ProductItemDropdownInput;
