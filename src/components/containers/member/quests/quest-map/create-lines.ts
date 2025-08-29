import { QuestsMapLevel } from "@components/screens";
import { IEpisodeLevelConfig } from "./quest-map.interface";
import { createBubbleStyle } from "./create-bubble-style";

type Params = {
  levels: Record<number, IEpisodeLevelConfig>;
  formattedLevels?: QuestsMapLevel[];
  episodeWidth: number;
  offsetY: number;
};

type Line = { x1: number; y1: number; x2: number; y2: number };

export const createLines = ({ formattedLevels, levels, episodeWidth, offsetY }: Params) =>
  formattedLevels.reduce((acc, level, index) => {
    if (!index) {
      return acc;
    }

    const configLevelPrev = levels[level.level - 1];
    const configLevelCurr = levels[level.level];
    const prevBubble = createBubbleStyle({ episodeWidth, y: configLevelPrev.y, offsetY, x: configLevelPrev.x });
    const currBubble = createBubbleStyle({ episodeWidth, y: configLevelCurr.y, offsetY, x: configLevelCurr.x });

    return [
      ...acc,
      {
        x1: prevBubble.start,
        y1: prevBubble.top,
        x2: currBubble.start,
        y2: currBubble.top,
      },
    ];
  }, [] as Array<Line>);
