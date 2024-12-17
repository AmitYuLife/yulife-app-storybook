import { IQuestMapConfig } from "./quest-map.interface";
import { BRIGHT_PLANET_EPISODES } from "./config/bright-planet.config";
import { ORANGE_PLANET_EPISODES } from "./config/orange-planet.config";
import { RED_PLANET_EPISODES } from "./config/red-planet.config";
import { EARTH_PLANET_EPISODES } from "./config/earth-planet.config";
import { PURPLE_PLANET_EPISODES } from "./config/purple-planet.config";
import { RING_PLANET_EPISODES } from "./config/ring-planet.config";

const episodes = {
  ...EARTH_PLANET_EPISODES,
  ...RED_PLANET_EPISODES,
  ...BRIGHT_PLANET_EPISODES,
  ...ORANGE_PLANET_EPISODES,
  ...PURPLE_PLANET_EPISODES,
  ...RING_PLANET_EPISODES,
};

export const getQuestMapConfig = (): IQuestMapConfig => ({
  episodes,
});
