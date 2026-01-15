import { memo, useCallback } from "react";
import { Pressable } from "react-native";
import { Colours } from "@styles";
import { Box, TextTemplate } from "@atoms";
import { DebugSelectorOption } from "../debug-selector";

interface IOptionChipProps<T> {
  option: DebugSelectorOption<T>;
  isSelected: boolean;
  onPress: (value: T) => void;
}

const OptionChip = <T,>({ option, isSelected, onPress }: IOptionChipProps<T>) => {
  const handlePress = useCallback(() => {
    onPress(option.value);
  }, [option.value, onPress]);

  return (
    <Pressable onPress={handlePress}>
      <Box p={6} px={12} br={8} bg={isSelected ? Colours.primary.p400 : Colours.neutral.n100}>
        <TextTemplate type="b2b" color={isSelected ? Colours.neutral.white : Colours.neutral.n900}>
          {option.label}
        </TextTemplate>
      </Box>
    </Pressable>
  );
};

export default memo(OptionChip) as typeof OptionChip;
