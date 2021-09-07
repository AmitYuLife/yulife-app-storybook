import React, { memo, useContext } from "react";
import { ContentItemRadio as GqlRadio } from "@graphql/_core/schema/ContentItemRadio";
import { ContentItemRadio } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlRadio;

export const ProductStepContentItemRadio = memo((props: Props) => {
  const { setDynamicData } = useContext(ProductStepContext);

  const onChange = (data: string) => {
    const obj = { [props.answerKey]: data };
    setDynamicData((oldState) => ({ ...oldState, ...obj }));
  };

  return <ContentItemRadio {...props} onChange={onChange} />;
});
