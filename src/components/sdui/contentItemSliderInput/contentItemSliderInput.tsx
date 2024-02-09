import React, { memo } from "react";
import { View } from "react-native";
import { CONTENT_ITEM_INPUT } from "@ids";
import { ContentItemSliderInputFragment as GqlTextInput } from "@graphql/__generated";
import { SliderInput } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";

interface Props extends GqlTextInput {
  value: number;
  onChange: (value: number) => void;
}

const ContentItemSliderInputBase = ({ styles: serverStyles, id, value, ...otherProps }: Props) => (
  <View testID={CONTENT_ITEM_INPUT(id)} style={mapServerStyles(serverStyles)}>
    <SliderInput {...otherProps} score={value} />
  </View>
);

export const ContentItemSliderInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<number>(answerKey);

  return <ContentItemSliderInputBase {...props} value={value} onChange={onChange} />;
});
