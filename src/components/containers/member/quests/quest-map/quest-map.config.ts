import { IEpisodeConfig, IQuestMapConfig } from "./quest-map.interface";
import { BRIGHT_PLANET_EPISODES } from "./config/bright-planet.config";
import { ORANGE_PLANET_EPISODES } from "./config/orange-planet.config";
import { RED_PLANET_EPISODES } from "./config/red-planet.config";
import { EARTH_PLANET_EPISODES } from "./config/earth-planet.config";
import { PURPLE_PLANET_EPISODES } from "./config/purple-planet.config";
import { RING_PLANET_EPISODES } from "./config/ring-planet.config";
import { LUNAR_PLANET_EPISODES } from "./config/lunar-planet.config";

const EPISODE_OFFSET = 224;
const LEVEL_OFFSET = 1400;

const BASE_PLANETS_EPISODES = {
  ...EARTH_PLANET_EPISODES,
  ...RED_PLANET_EPISODES,
  ...BRIGHT_PLANET_EPISODES,
  ...ORANGE_PLANET_EPISODES,
  ...PURPLE_PLANET_EPISODES,
  ...RING_PLANET_EPISODES,
  ...LUNAR_PLANET_EPISODES,
};

const applyEpisodeOffset = (baseEpisodes: Record<number, IEpisodeConfig>): Record<number, IEpisodeConfig> => {
  return Object.fromEntries(
    Object.entries(baseEpisodes).map(([key, episode]) => [
      Number(key) + EPISODE_OFFSET,
      {
        ...episode,
        levels: Object.fromEntries(
          Object.entries(episode.levels).map(([levelKey, levelConfig]) => [
            Number(levelKey) + LEVEL_OFFSET,
            levelConfig,
          ])
        ),
      },
    ])
  );
};

const episodes = {
  ...BASE_PLANETS_EPISODES,
  ...applyEpisodeOffset(BASE_PLANETS_EPISODES),
};

export const getQuestMapConfig = (): IQuestMapConfig => ({
  episodes,
});
