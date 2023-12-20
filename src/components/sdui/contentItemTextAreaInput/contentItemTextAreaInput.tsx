import React, { memo } from "react";
import { View } from "react-native";
import { CONTENT_ITEM_INPUT } from "@ids";
import { ContentItemTextAreaInput as GqlTextInput } from "@graphql/_core/schema";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";

interface Props extends GqlTextInput {
  value: string;
  onChange: (value: string) => void;
}

const ContentItemTextAreaInputBase = ({ styles: serverStyles, id, ...otherProps }: Props) => (
  <View style={mapServerStyles(serverStyles)}>
    <MultilineTextInput testID={CONTENT_ITEM_INPUT(id)} {...otherProps} />
  </View>
);

export const ContentItemTextAreaInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey);

  return <ContentItemTextAreaInputBase {...props} value={value} onChange={onChange} />;
});
