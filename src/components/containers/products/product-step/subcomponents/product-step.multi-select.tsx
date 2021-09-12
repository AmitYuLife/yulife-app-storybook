import React, { memo } from "react";
import { ContentItemMultiSelect as GqlMultiSelect } from "@graphql/_core/schema/ContentItemMultiSelect";
import { ContentItemMultiSelect } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";

type Props = GqlMultiSelect;

export const ProductStepContentItemMultiSelect = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useDynamicOnChange<string[]>(answerKey);

  return <ContentItemMultiSelect {...props} selectedValues={value} onChange={onChange} />;
});
