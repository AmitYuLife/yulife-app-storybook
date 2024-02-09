import React, { memo } from "react";
import { ContentItemDatePickerFragment as GqlDatePicker } from "@graphql/__generated";
import { ContentItemDatePicker } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";

type Props = GqlDatePicker;

export const ProductStepContentItemDatePicker = memo((props: Props) => {
  const { value, onChange } = useDynamicOnChange<string>(props.answerKey);
  return <ContentItemDatePicker {...props} initialDate={value} onChange={onChange} />;
});
