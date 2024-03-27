import React, { memo } from "react";
import { ContentItemChoiceFragment as GqlChoice } from "@graphql/__generated";
import { ChoiceAnswerValue, ContentItemChoiceBase } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";

type Props = GqlChoice;

export const ProductStepContentItemChoice = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useDynamicOnChange<ChoiceAnswerValue>(answerKey);

  return <ContentItemChoiceBase {...props} value={value} onChange={onChange} />;
});
