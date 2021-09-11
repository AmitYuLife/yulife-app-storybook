import React, { memo, useCallback, useContext } from "react";
import { ContentItemConfirm as GqlRadio } from "@graphql/_core/schema";
import { ContentItemConfirm } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlRadio;

export const ProductStepContentItemConfirm = memo((props: Props) => {
  const { answerKey } = props;
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);

  const onChange = useCallback(
    () => setDynamicData((oldState) => ({ ...oldState, [answerKey]: !oldState[answerKey] })),
    [answerKey]
  );

  const value = dynamicData?.[answerKey] as boolean;

  return <ContentItemConfirm {...props} checked={value} onChange={onChange} />;
});
