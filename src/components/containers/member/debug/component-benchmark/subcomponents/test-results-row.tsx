import { Box, TextTemplate } from "@atoms";
import { memo } from "react";

export const ResultsRow = memo(({ label, value }: { label: string; value: string }) => {
  return (
    <Box flexDirection="row" gap={10} w="100%" flexWrap="wrap" justifyContent="space-between">
      <TextTemplate type="l1b">{label}</TextTemplate>
      <TextTemplate type="b2b">{value}</TextTemplate>
    </Box>
  );
});
