import React, { memo, useContext } from "react";
import { ContentItemDatePicker as GqlDatePicker } from "@graphql/_core/schema";
import { ContentItemDatePicker } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlDatePicker;

export const ProductStepContentItemDatePicker = memo((props: Props) => {
  const { setDynamicData } = useContext(ProductStepContext);

  const onChange = (data: string) => {
    const obj = { [props.answerKey]: data };
    setDynamicData((oldState) => ({ ...oldState, ...obj }));
  };

  return <ContentItemDatePicker props={props} onChange={onChange} />;
});
