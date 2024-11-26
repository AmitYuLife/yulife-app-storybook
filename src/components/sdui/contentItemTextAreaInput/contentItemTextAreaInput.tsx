import { memo } from "react";
import { View } from "react-native";
import { CONTENT_ITEM_INPUT } from "@ids";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { ContentItemTextAreaInput as GqlTextInput } from "@graphql/__generated";

interface Props extends GqlTextInput {
  value: string;
  onChange: (value: string) => void;
  heading?: string;
}

const ContentItemTextAreaInputBase = ({ styles: serverStyles, id, heading, ...otherProps }: Props) => (
  <View style={mapServerStyles(serverStyles)}>
    <MultilineTextInput testID={CONTENT_ITEM_INPUT(id)} placeholder={heading} {...otherProps} />
  </View>
);

export const ContentItemTextAreaInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey);

  return <ContentItemTextAreaInputBase {...props} value={value} onChange={onChange} />;
});
