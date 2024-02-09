import React, { memo } from "react";
import { ContentItemMultiSelectFragment as GqlMultiSelect } from "@graphql/__generated";
import { ContentItemMultiSelect } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";

type Props = GqlMultiSelect;

export const ProductStepContentItemMultiSelect = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useDynamicOnChange<string[]>(answerKey);

  return <ContentItemMultiSelect {...props} selectedValues={value} onChange={onChange} />;
});
