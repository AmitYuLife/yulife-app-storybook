import { memo } from "react";
import { Box, Image } from "@atoms";
import { Style, TOP_BAR } from "@styles";
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
  isLoading: boolean;
  isStreaksEnabled: boolean;
}

const ITEM_GAP = 10;
const PAGE_PADDING = 20;

const PathwaysHeader = ({
  onReflect,
  nextQuestionnaireLocalDate,
  reflectedToday,
  maxProgress,
  streakAwardId,
  isLoading,
  reflectionProgress,
  isStreaksEnabled,
}: IPathwaysHeaderProps) => {
  const { width } = useWindowDimensions();
  const itemWidth = (width - PAGE_PADDING * 2) / 2;

  return (
    <Box flex={1} width="100%" disableAutoAdjust={true} pt={TOP_BAR.TOP_BAR_WITH_PAD}>
      {!isStreaksEnabled ? (
        <Box position="absolute" top={-50} width={"100%"}>
          <Image
            source={require("./pathways-header-background.webp")}
            width={"100%"}
            height={Style.adjust(512)}
            contentFit="cover"
          />
        </Box>
      ) : null}
      {isStreaksEnabled ? (
        <PathwayStreaks
          currentStreak={reflectionProgress}
          reflectedToday={reflectedToday}
          maxProgress={maxProgress}
          streakAwardId={streakAwardId}
          isLoading={isLoading}
        />
      ) : null}
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
