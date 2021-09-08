import React, { memo, useContext } from "react";
import { ContentItemMultiSelect as GqlMultiSelect } from "@graphql/_core/schema/ContentItemMultiSelect";
import { ContentItemMultiSelect } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlMultiSelect;

export const ProductStepContentItemMultiSelect = memo((props: Props) => {
  const { setDynamicData } = useContext(ProductStepContext);

  const onChange = (data: string[]) => {
    const obj = { [props.answerKey]: data };
    setDynamicData((oldState) => ({ ...oldState, ...obj }));
  };

  return <ContentItemMultiSelect {...props} onChange={onChange} />;
});
