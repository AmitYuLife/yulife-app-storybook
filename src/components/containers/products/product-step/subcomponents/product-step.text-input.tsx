import React, { memo } from "react";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema/ContentItemTextInput";
import { ContentItemTextInputBase } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";
import { addCommasToNumber } from "@utils";

type Props = GqlTextInput;

export const ProductStepContentItemTextInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useDynamicOnChange<string>(answerKey, formatValue);

  return <ContentItemTextInputBase {...props} value={value} onChange={onChange} />;
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
