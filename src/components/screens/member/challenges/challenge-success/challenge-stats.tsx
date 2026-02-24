import { Box, TextTemplate } from "@atoms";
import { getDuration } from "@components/games/sudoku/sudoku-utils";
import { t } from "@locale";
import {
  ChallengeCategory,
  ChallengeCompletionSummary,
  ChallengeCompletionSummaryEntry,
  ChallengeCompletionSummaryEntryType,
} from "@redux/levels/levels.types";
import { Colours, Style } from "@styles";
import { memo } from "react";
import { useSelector } from "react-redux";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { Image } from "react-native";

interface IChallengeStatsProps {
  width: number;
  completionSummary?: ChallengeCompletionSummary | null;
}

const getEntry = (
  entries: ChallengeCompletionSummaryEntry[],
  type: ChallengeCompletionSummaryEntryType
): ChallengeCompletionSummaryEntry | undefined => entries.find((e) => e.type === type);

const BOX_PADDING = Style.adjust(16);

const useTotalResult = (completionSummary?: ChallengeCompletionSummary | null): number => {
  const dailySteps = useSelector(getDailySteps);
  const dailyMeditation = useSelector(getDailyMeditation);

  if (!completionSummary) {
    return 0;
  }

  const totalEntry = getEntry(completionSummary.entries, ChallengeCompletionSummaryEntryType.Total);
  const challengeEntry = getEntry(completionSummary.entries, ChallengeCompletionSummaryEntryType.Challenge);
  const totalResult = totalEntry?.result ?? 0;
  const challengeResult = challengeEntry?.result ?? 0;

  if (completionSummary.type === ChallengeCategory.Sudoku) {
    return totalResult;
  }

  const localTotal = (() => {
    switch (completionSummary.type) {
      case ChallengeCategory.Steps:
        return dailySteps || 0;
      case ChallengeCategory.Meditation:
        return dailyMeditation || 0;
      default:
        return 0;
    }
  })();

  return Math.max(totalResult, localTotal, challengeResult);
};

function renderScore(type: ChallengeCategory, score: number) {
  switch (type) {
    case ChallengeCategory.Steps:
      return `${score}`;
    case ChallengeCategory.Sudoku:
      return getDuration(score);
    case ChallengeCategory.Meditation:
    case ChallengeCategory.Workout: {
      const minutes = Math.floor(score / 60);
      return t("time_units.smart_minutes", { smart_count: minutes });
    }

    default:
      return `${score}`;
  }
}

const ICON_SIZE = 24;

const ChallengeStats = ({ width, completionSummary }: IChallengeStatsProps) => {
  const totalResult = useTotalResult(completionSummary);

  if (!completionSummary) {
    return null;
  }

  return (
    <Box
      bg={"#FFFFE5"}
      br={8}
      borderWidth={1}
      borderColor={Colours.neutral.n400}
      px={BOX_PADDING}
      pv={BOX_PADDING}
      mt={BOX_PADDING}
      width={width}
      disableAutoAdjust={true}
    >
      {completionSummary.entries.map((entry, index) => {
        const result = entry.type === ChallengeCompletionSummaryEntryType.Total ? totalResult : entry.result;

        return (
          <Box key={entry.type} flexDirection="row" justifyContent="space-between" pt={index > 0 ? 16 : 0}>
            <Box flexDirection="row" alignItems="center" gap={8}>
              {entry.icon.uri ? (
                <Image source={{ uri: entry.icon.uri }} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
              ) : null}
              <TextTemplate type="b2" color={Colours.inkStrong} textAlign="center">
                {entry.label}
              </TextTemplate>
            </Box>
            <TextTemplate type="b2b" color={Colours.inkStrong} textAlign="center">
              {renderScore(completionSummary.type, result)}
            </TextTemplate>
          </Box>
        );
      })}
    </Box>
  );
};

export default memo(ChallengeStats);
