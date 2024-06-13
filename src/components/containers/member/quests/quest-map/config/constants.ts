const QUEST_MAP_VERTICAL_BASIS = 812;
const QUEST_MAP_VERTICAL_HALF_BASIS = QUEST_MAP_VERTICAL_BASIS / 2;
const QUEST_MAP_HORIZONTAL_BASIS = 375;
const QUEST_MAP_HORIZONTAL_HALF_BASIS = QUEST_MAP_HORIZONTAL_BASIS / 2;
export const QUEST_MAP_ROW_SPACE_BASIS = 88;

export const createLevelsCoordinatesTemplate = (episodeNumber: number) => {
  const worldOrder = Math.floor(episodeNumber / 8);

  return {
    levels: {
      [50 * worldOrder + 1]: {
        x: QUEST_MAP_HORIZONTAL_HALF_BASIS,
        y: QUEST_MAP_VERTICAL_HALF_BASIS + QUEST_MAP_ROW_SPACE_BASIS,
      },
      [50 * worldOrder + 2]: { x: QUEST_MAP_HORIZONTAL_HALF_BASIS, y: QUEST_MAP_VERTICAL_HALF_BASIS },
      [50 * worldOrder + 3]: {
        x: QUEST_MAP_HORIZONTAL_HALF_BASIS - QUEST_MAP_ROW_SPACE_BASIS,
        y: QUEST_MAP_VERTICAL_HALF_BASIS - QUEST_MAP_ROW_SPACE_BASIS,
      },
      [50 * worldOrder + 5]: {
        x: QUEST_MAP_HORIZONTAL_HALF_BASIS + QUEST_MAP_ROW_SPACE_BASIS,
        y: QUEST_MAP_VERTICAL_HALF_BASIS - QUEST_MAP_ROW_SPACE_BASIS,
      },
      [50 * worldOrder + 4]: {
        x: QUEST_MAP_HORIZONTAL_HALF_BASIS,
        y: QUEST_MAP_VERTICAL_HALF_BASIS - QUEST_MAP_ROW_SPACE_BASIS,
      },
      [50 * worldOrder + 6]: {
        x: QUEST_MAP_HORIZONTAL_HALF_BASIS,
        y: QUEST_MAP_VERTICAL_HALF_BASIS - QUEST_MAP_ROW_SPACE_BASIS * 2,
      },
      [50 * worldOrder + 7]: {
        x: QUEST_MAP_HORIZONTAL_HALF_BASIS,
        y: QUEST_MAP_VERTICAL_HALF_BASIS - QUEST_MAP_ROW_SPACE_BASIS * 3,
      },
    },
    drawLines: true,
  };
};
