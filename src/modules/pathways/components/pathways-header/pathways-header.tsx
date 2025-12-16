import { memo } from "react";
import { Box } from "@atoms";
import { Colours, TOP_BAR } from "@styles";
import PathwayStreaks from "../pathway-streaks/pathway-streaks";
import PathwaysJourneyHeader from "../pathways-journey-header/pathways-journey-header";
import PathwaysReflectionItem from "../pathways-reflection-item/pathways-reflection-item";
import { useWindowDimensions } from "react-native";
import PathwaysReflectChest from "../pathways-reflection-chest/pathways-reflect-chest";
import { t } from "@locale";

interface IPathwaysHeaderProps {
  onReflect: () => void;
  nextQuestionnaireLocalDate: string;
  reflectionProgress: number;
  reflectedToday: boolean;
  maxProgress: number;
  streakAwardId?: string;
}

const ITEM_GAP = 10;
const PAGE_PADDING = 20;

const PathwaysHeader = ({
  onReflect,
  nextQuestionnaireLocalDate,
  reflectedToday,
  maxProgress,
  streakAwardId,
  reflectionProgress,
}: IPathwaysHeaderProps) => {
  const { width } = useWindowDimensions();
  const itemWidth = (width - PAGE_PADDING * 2) / 2;

  return (
    <Box flex={1} width="100%" disableAutoAdjust={true} pt={TOP_BAR.TOP_BAR_WITH_PAD} mt={7}>
      <PathwayStreaks
        currentStreak={reflectionProgress}
        reflectedToday={reflectedToday}
        maxProgress={maxProgress}
        streakAwardId={streakAwardId}
        textColor={Colours.neutral.white}
        completedBorderColor={Colours.pathways.streakBorder}
        notCompletedBorderColor={Colours.pathways.streakBorder}
        notCompletedColor={Colours.pathways.background}
        notCompletedChestForegroundColor={Colours.pathways.streakBorder}
        notCompletedChestBackgroundColor={Colours.pathways.background}
      />
      <Box mt={30} gap={20}>
        {/* TODO: total journey count */}
        <PathwaysJourneyHeader count={1} nextQuestionnaireLocalDate={nextQuestionnaireLocalDate} />
        <Box flexWrap="wrap" flexDirection="row" w="100%" alignItems="center" px={PAGE_PADDING}>
          {Array.from({ length: 4 }).map((_, index) => {
            const isLeft = index % 2 === 0;

            const itemStatus = getReflectionItemStatus(index, reflectionProgress);
            const onPress = itemStatus === "active" ? onReflect : undefined;

            return (
              <Box
                pl={isLeft ? 0 : ITEM_GAP}
                pr={isLeft ? ITEM_GAP : 0}
                w={itemWidth}
                key={index}
                flexDirection="row"
                pb={ITEM_GAP}
              >
                <PathwaysReflectionItem
                  label={t("screens.pathways.daily_reflection", { count: index + 1 })}
                  onPress={onPress}
                  yucoinAmount={25}
                  status={getReflectionItemStatus(index, reflectionProgress)}
                />
              </Box>
            );
          })}
          <Box w="100%" flexDirection="row" mt={ITEM_GAP}>
            <PathwaysReflectChest
              label="Daily Reflection"
              description="Daily Reflection"
              onPress={reflectionProgress >= 5 ? onReflect : undefined}
              yucoinAmount={25}
              status={getReflectionItemStatus(5, reflectionProgress)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const getReflectionItemStatus = (index: number, reflectionProgress: number) => {
  if (reflectionProgress < index) {
    return "locked";
  }

  if (reflectionProgress === index) {
    return "active";
  }

  return "completed";
};

export default memo(PathwaysHeader);
