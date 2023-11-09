import { IQuestMapConfig } from "./quest-map.interface";
import { BRIGHT_PLANET_EPISODES } from "./config/bright-planet.config";
import { ORANGE_PLANET_EPISODES } from "./config/orange-planet.config";

export const QUEST_MAP_CONFIG: IQuestMapConfig = {
  episodes: { ...BRIGHT_PLANET_EPISODES, ...ORANGE_PLANET_EPISODES },
};
