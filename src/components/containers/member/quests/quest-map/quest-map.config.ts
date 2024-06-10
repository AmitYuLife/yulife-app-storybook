import { IQuestMapConfig } from "./quest-map.interface";
import { BRIGHT_PLANET_EPISODES } from "./config-legacy/bright-planet.config";
import { ORANGE_PLANET_EPISODES } from "./config-legacy/orange-planet.config";
import { RED_PLANET_EPISODES } from "./config-legacy/red-planet.config";
import { EARTH_PLANET_EPISODES } from "./config-legacy/earth-planet.config";
import { PURPLE_PLANET_EPISODES } from "./config-legacy/purple-planet.config";

export const QUEST_MAP_CONFIG: IQuestMapConfig = {
  episodes: {
    ...EARTH_PLANET_EPISODES,
    ...RED_PLANET_EPISODES,
    ...BRIGHT_PLANET_EPISODES,
    ...ORANGE_PLANET_EPISODES,
    ...PURPLE_PLANET_EPISODES,
  },
};
