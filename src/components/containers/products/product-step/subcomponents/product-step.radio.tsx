import React, { memo } from "react";
import { ContentItemRadio as GqlRadio } from "@graphql/_core/schema";
import { ContentItemRadioBase } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";

type Props = GqlRadio;

export const ProductStepContentItemRadio = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useDynamicOnChange<string>(answerKey);

  return <ContentItemRadioBase {...props} value={value} onChange={onChange} />;
});
