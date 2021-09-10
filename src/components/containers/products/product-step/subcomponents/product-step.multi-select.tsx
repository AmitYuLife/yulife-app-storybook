import React, { memo, useCallback, useContext } from "react";
import { ContentItemMultiSelect as GqlMultiSelect } from "@graphql/_core/schema/ContentItemMultiSelect";
import { ContentItemMultiSelect } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlMultiSelect;

export const ProductStepContentItemMultiSelect = memo((props: Props) => {
  const { answerKey } = props;
  const { dynamicData, setDynamicData } = useContext(ProductStepContext);

  const onChange = useCallback(
    (data: string[]) => {
      const obj = { [answerKey]: data };
      setDynamicData((oldState) => ({ ...oldState, ...obj }));
    },
    [answerKey]
  );

  const selectedValues = dynamicData?.[answerKey] as string[];

  return <ContentItemMultiSelect {...props} selectedValues={selectedValues} onChange={onChange} />;
});
