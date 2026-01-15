import { memo } from "react";
import { Box, TextTemplate } from "@atoms";
import OptionChip from "./subcomponents/option-chip";

export interface DebugSelectorOption<T> {
  label: string;
  value: T;
}

interface IDebugSelectorProps<T> {
  label?: string;
  options: DebugSelectorOption<T>[];
  selectedValue: T;
  onSelect: (value: T) => void;
}

const DebugSelector = <T,>({ label, options, selectedValue, onSelect }: IDebugSelectorProps<T>) => {
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

export default memo(DebugSelector);
