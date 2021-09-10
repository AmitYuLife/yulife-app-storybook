import React, { memo, useCallback, useContext } from "react";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema/ContentItemTextInput";
import { ContentItemTextInput } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlTextInput;

export const ProductStepContentItemTextInput = memo((props: Props) => {
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

  return <ContentItemTextInput {...props} value={value} onChange={onChange} />;
});
