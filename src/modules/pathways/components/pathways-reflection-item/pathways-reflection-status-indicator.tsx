import { memo } from "react";
import { TextTemplate } from "@components/atoms/text/text-template";
import { Box } from "@atoms";
import { Colours } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { CheckIcon } from "@atoms/icon/check";
import { t } from "@locale";
import { padNum } from "@utils";
import { PATHWAYS_REFLECTION_UNLOCKS_IN } from "@ids";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

interface IPathwayReflectionStatusIndicatorProps {
  status: "completed" | "active" | "locked" | "next";
  timeToNextQuestionnaire: {
    hours: number;
    minutes: number;
    seconds: number;
    hasTimeRemaining: boolean;
  };
}

const PathwayReflectionStatusIndicator = ({
  status,
  timeToNextQuestionnaire,
}: IPathwayReflectionStatusIndicatorProps) => {
  const isActive = status === "active";
  const isLocked = status === "locked";
  const { theme } = useTheme();

  if (status === "next") {
    return (
      <Box flexDirection="row" gap={4} p={2} bg={Colours.neutral.white} br={20} flex={1}>
        <Box bg={theme.colors.primary.p600} br={20} px={4} py={2} justifyContent="center" alignItems="center">
          <TextTemplate type="l3b" color={Colours.neutral.white} testID={PATHWAYS_REFLECTION_UNLOCKS_IN}>
            {t("screens.pathways.reflection_unlocks_in")}
          </TextTemplate>
        </Box>
        <Box justifyContent="center" alignItems="center" pr={4} py={2}>
          <TextTemplate type="l3b" color={theme.colors.primary.p600} fontVariant={["tabular-nums"]}>
            {t("screens.pathways.reflection_countdown", {
              hours: timeToNextQuestionnaire.hours,
              minutes: padNum(timeToNextQuestionnaire.minutes || 0),
              seconds: padNum(timeToNextQuestionnaire.seconds || 0),
            })}
          </TextTemplate>
        </Box>
      </Box>
    );
  }

  if (isLocked) {
    return null;
  }

  return (
    <Box
      br={24}
      size={24}
      borderWidth={1}
      alignItems="center"
      justifyContent="center"
      borderColor={isActive ? Colours.neutral.white : Colours.secondary.s100S1}
      bg={isActive ? theme.colors.primary.p600 : Colours.secondary.s100S1}
    >
      {isActive ? (
        <ArrowIcon intent="primary" color={Colours.neutral.white} />
      ) : (
        <CheckIcon strokeWidth={6} size={18} fill={Colours.neutral.white} />
      )}
    </Box>
  );
};

export default memo(PathwayReflectionStatusIndicator);
