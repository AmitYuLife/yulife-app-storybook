import React, { memo } from "react";
import { ContentItemTextInput as GqlTextInput } from "@graphql/_core/schema/ContentItemTextInput";
import { ContentItemTextInput } from "@components/sdui";
import { useDynamicOnChange } from "../hooks/useDynamicOnChange";

type Props = GqlTextInput;

export const ProductStepContentItemTextInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useDynamicOnChange<string>(answerKey);

  return <ContentItemTextInput {...props} value={value} onChange={onChange} />;
});
