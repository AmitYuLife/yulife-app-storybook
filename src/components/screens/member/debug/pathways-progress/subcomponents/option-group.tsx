import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import OptionChip, { SelectableOption } from "./option-chip";

interface IOptionGroupProps<T> {
  label?: string;
  options: SelectableOption<T>[];
  selectedValue: T;
  onSelect: (value: T) => void;
}

const OptionGroup = <T,>({ label, options, selectedValue, onSelect }: IOptionGroupProps<T>) => {
  return (
    <Box gap={10}>
      {label ? <TextTemplate type="b2b">{label}</TextTemplate> : null}
      <Box flexDirection="row" flexWrap="wrap" gap={8}>
        {options.map((option) => (
          <OptionChip
            key={String(option.value)}
            option={option}
            isSelected={selectedValue === option.value}
            onPress={onSelect}
          />
        ))}
      </Box>
    </Box>
  );
};

export default memo(OptionGroup);
