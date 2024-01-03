import { IQuestMapConfig } from "./quest-map.interface";
import { BRIGHT_PLANET_EPISODES } from "./config/bright-planet.config";
import { ORANGE_PLANET_EPISODES } from "./config/orange-planet.config";
import { RED_PLANET_EPISODES } from "./config/red-planet.config";
import { EARTH_PLANET_EPISODES } from "./config/earth-planet.config";

export const QUEST_MAP_CONFIG: IQuestMapConfig = {
  episodes: { ...EARTH_PLANET_EPISODES, ...RED_PLANET_EPISODES, ...BRIGHT_PLANET_EPISODES, ...ORANGE_PLANET_EPISODES },
};
