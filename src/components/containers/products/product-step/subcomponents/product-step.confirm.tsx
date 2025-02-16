import React, { memo, useCallback, useContext } from "react";
import { ContentItemConfirmFragment as GqlRadio } from "@graphql/__generated";
import { ContentItemConfirmBase } from "@components/sdui";
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

  return <ContentItemConfirmBase {...props} checked={value} onChange={onChange} />;
});
