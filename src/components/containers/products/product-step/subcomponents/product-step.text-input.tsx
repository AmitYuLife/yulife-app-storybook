import React, { memo, useContext } from "react";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema/ContentItemTextInput";
import { ContentItemTextInput } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlTextInput;

export const ProductStepContentItemTextInput = memo((props: Props) => {
  const { setDynamicData } = useContext(ProductStepContext);

  const onChange = (data: string) => {
    const obj = { [props.answerKey]: data };
    setDynamicData((oldState) => ({ ...oldState, ...obj }));
  };

  return <ContentItemTextInput {...props} onChange={onChange} />;
});
