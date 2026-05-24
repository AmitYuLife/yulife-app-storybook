import { IQuestMapItem } from "@components/containers/member/quests/quest-map/quest-map.interface";
import { getQuestMapConfig } from "@components/containers/member/quests/quest-map/quest-map.config";
import { QuestsMapLevel } from "@components/screens/member/quests/quests-scroll-screen/quests.context";

/**
 * Width used for computing itemHeights and snapOffsets in stories.
 * Matches SCREEN_STORY_WIDTH from screen-preview.tsx.
 */
const STORY_WIDTH = 414;
const STORY_HEIGHT = 800;

const buildLevel = (levelNumber: number, isNext = false, isActive = false, isDone = false): QuestsMapLevel => ({
  __typename: "QuestMapLevelListItem" as const,
  id: `level-${levelNumber}`,
  level: levelNumber,
  rating: isDone ? 2 : null,
  levelChest: null,
  isNext,
  isActive,
  isDone,
  onPress: () => undefined,
});

/** Build quest map items for the first N earth episodes. */
export const buildQuestMapItems = (currentLevel = 10): IQuestMapItem[] => {
  const config = getQuestMapConfig();

  // Build 3 episodes of 7 levels each, centred around currentLevel
  const episodeConfigs = [
    config.episodes[1], // Earth episode 1 — levels 1-7
    config.episodes[2], // Earth episode 2 — levels 8-14
    config.episodes[3], // Earth episode 3 — levels 15-21
  ].filter(Boolean);

  return episodeConfigs
    .map((episodeConfig, episodeIndex) => {
      const baseLevelNumber = episodeIndex * 7 + 1;
      const levels: QuestsMapLevel[] = Array.from({ length: 7 }, (_, i) => {
        const level = baseLevelNumber + i;
        const isNext = level === currentLevel;
        const isActive = level === currentLevel;
        const isDone = level < currentLevel;
        return buildLevel(level, isNext, isActive, isDone);
      });

      return {
        levels,
        episodeConfig,
        seperator: undefined,
      } satisfies IQuestMapItem;
    })
    .reverse(); // QuestMapScreen shows highest episode first (reversed)
};

/** Compute itemHeights from episode configs, mirroring the container calculation. */
export const buildItemHeights = (items: IQuestMapItem[]): number[] =>
  items.map(({ episodeConfig }) => {
    const aspectRatio = episodeConfig.lottieAspectRatio ?? episodeConfig.episodeWidth / episodeConfig.episodeHeight;
    return STORY_WIDTH * (1 / aspectRatio);
  });

/** Compute snapOffsets from itemHeights, mirroring the container calculation. */
export const buildSnapOffsets = (items: IQuestMapItem[], itemHeights: number[]): number[] => {
  const offsets: number[] = [];
  let cumulative = 0;

  const itemCumulativeOffsets = itemHeights.map((h) => {
    const offset = cumulative;
    cumulative += h;
    return offset;
  });

  items.forEach((item, index) => {
    let snapPosition = itemCumulativeOffsets[index];
    const config = item.episodeConfig;
    const aspectRatio = config.lottieAspectRatio ?? config.episodeWidth / config.episodeHeight;
    const renderedHeight = STORY_WIDTH * (1 / aspectRatio);
    const leftOverHeight = STORY_HEIGHT - renderedHeight;

    if (config.snapPosition === "center") {
      snapPosition -= leftOverHeight / 2;
    }

    if (config.snapOffsetY) {
      snapPosition -= config.snapOffsetY * (1 / aspectRatio);
    }

    offsets.push(Math.floor(snapPosition));
  });

  return offsets;
};
