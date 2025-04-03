import { memo, useMemo } from "react";
import { View } from "react-native";
import { CONTENT_ITEM_INPUT, CONTENT_ITEM_INPUT_CHARACTER_COUNTER } from "@ids";
import { MultilineTextInput } from "@atoms/multiline-text-input/multiline-text-input";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { ContentItemTextAreaInput as GqlTextInput } from "@graphql/__generated";
import { Box, CharacterCounter } from "@atoms";

interface Props extends GqlTextInput {
  value: string;
  onChange: (value: string) => void;
  heading?: string;
  showCharacterCount?: boolean;
}

const ContentItemTextAreaInputBase = ({
  styles: serverStyles,
  id,
  heading,
  showCharacterCount,
  ...otherProps
}: Props) => {
  const currentLength = useMemo(() => otherProps.value?.length || 0, [otherProps.value]);
  const maxLength = useMemo(() => otherProps.maxLength || 0, [otherProps.maxLength]);

  return (
    <View style={mapServerStyles(serverStyles)}>
      <MultilineTextInput
        testID={CONTENT_ITEM_INPUT(id)}
        placeholder={heading}
        error={currentLength > maxLength}
        {...otherProps}
      />
      {!showCharacterCount ? null : (
        <Box
          testID={CONTENT_ITEM_INPUT_CHARACTER_COUNTER(id, currentLength)}
          mx={6}
          my={8}
          flexDirection="row"
          justifyContent="flex-end"
        >
          <CharacterCounter currentLength={currentLength} maxLength={maxLength} />
        </Box>
      )}
    </View>
  );
};

export const ContentItemTextAreaInput = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey);

  return <ContentItemTextAreaInputBase {...props} value={value} onChange={onChange} />;
});
