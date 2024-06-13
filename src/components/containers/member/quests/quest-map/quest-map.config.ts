import { IQuestMapConfig } from "./quest-map.interface";
import { BRIGHT_PLANET_EPISODES } from "./config/bright-planet.config";
import { ORANGE_PLANET_EPISODES } from "./config/orange-planet.config";
import { RED_PLANET_EPISODES } from "./config/red-planet.config";
import { EARTH_PLANET_EPISODES } from "./config/earth-planet.config";
import { PURPLE_PLANET_EPISODES } from "./config/purple-planet.config";
import { BRIGHT_PLANET_EPISODES as BRIGHT_PLANET_EPISODES_LEGACY } from "./config-legacy/bright-planet.config";
import { ORANGE_PLANET_EPISODES as ORANGE_PLANET_EPISODES_LEGACY } from "./config-legacy/orange-planet.config";
import { RED_PLANET_EPISODES as RED_PLANET_EPISODES_LEGACY } from "./config-legacy/red-planet.config";
import { EARTH_PLANET_EPISODES as EARTH_PLANET_EPISODES_LEGACY } from "./config-legacy/earth-planet.config";
import { PURPLE_PLANET_EPISODES as PURPLE_PLANET_EPISODES_LEGACY } from "./config-legacy/purple-planet.config";

const legacyEpisodes = {
  ...EARTH_PLANET_EPISODES_LEGACY,
  ...RED_PLANET_EPISODES_LEGACY,
  ...BRIGHT_PLANET_EPISODES_LEGACY,
  ...ORANGE_PLANET_EPISODES_LEGACY,
  ...PURPLE_PLANET_EPISODES_LEGACY,
};

const episodes = {
  ...EARTH_PLANET_EPISODES,
  ...RED_PLANET_EPISODES,
  ...BRIGHT_PLANET_EPISODES,
  ...ORANGE_PLANET_EPISODES,
  ...PURPLE_PLANET_EPISODES,
};

export const getQuestMapConfig = (useNewOrder: boolean): IQuestMapConfig => ({
  episodes: useNewOrder ? episodes : legacyEpisodes,
});
