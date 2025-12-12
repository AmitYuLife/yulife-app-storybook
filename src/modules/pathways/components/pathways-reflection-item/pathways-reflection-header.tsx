import { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box } from "@atoms";
import { Colours } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { CheckIcon } from "@atoms/icon/check";

interface IPathwayReflectionHeaderProps {
  label: string;
  status: "completed" | "active" | "locked";
}

const PathwayReflectionHeader = ({ label, status }: IPathwayReflectionHeaderProps) => {
  const isActive = status === "active";
  const isLocked = status === "locked";

  return (
    <Box w="100%" justifyContent="space-between" flexDirection="row" alignItems="center" opacity={isLocked ? 0.5 : 1}>
      <TextTemplate type="b2b" color={Colours.neutral.white}>
        {label}
      </TextTemplate>
      <Box>
        {!isLocked ? (
          <Box
            br={24}
            size={24}
            borderWidth={1}
            alignItems="center"
            justifyContent="center"
            borderColor={isActive ? Colours.neutral.white : Colours.secondary.s100S1}
            bg={isActive ? Colours.primary.p600 : Colours.secondary.s100S1}
          >
            {isActive ? (
              <ArrowIcon intent="primary" color={Colours.neutral.white} />
            ) : (
              <CheckIcon strokeWidth={6} size={18} fill={Colours.neutral.white} />
            )}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default memo(PathwayReflectionHeader);
