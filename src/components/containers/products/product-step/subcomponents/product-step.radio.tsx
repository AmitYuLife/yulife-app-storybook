import React, { memo, useCallback, useContext } from "react";
import { ContentItemRadio as GqlRadio } from "@graphql/_core/schema";
import { ContentItemRadio } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlRadio;

export const ProductStepContentItemRadio = memo((props: Props) => {
  const { answerKey } = props;
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);

  const onChange = useCallback(
    (data: string) => {
      const obj = { [answerKey]: data };
      setDynamicData((oldState) => ({ ...oldState, ...obj }));
    },
    [answerKey]
  );

  const value = dynamicData?.[answerKey] as string;

  return <ContentItemRadio {...props} value={value} onChange={onChange} />;
});
