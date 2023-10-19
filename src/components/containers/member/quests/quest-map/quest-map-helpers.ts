import { getChallengesStatus } from "@redux/levels/levels.selectors";
import moment from "moment";
import { QUEST_MAP_CONFIG } from "./quest-map.config";
import { ISeperatorConfig } from "./quest-map.interface";

export const getEpisode = (level: number) => {
  let episode = 0;
  for (let i = 1; i <= level; i++) {
    if ((i - 1) % 50 === 0) {
      episode += 1;
      continue;
    }

    if (i % 7 === 0) {
      episode++;
    }
  }

  return episode;
};

export const getMinLevel = (levels: { level: number }[]) => {
  return levels.reduce<number>((prev, cur) => (prev < cur.level ? prev : cur.level), Infinity);
};

export const isAvailable = (nextAvailableAt: string): boolean => {
  const nextAvailable = nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;

  return nextAvailable >= 0;
};

export const getLevelStatus = (
  challengesStatus: ReturnType<typeof getChallengesStatus>,
  currentLevel: number,
  level: number,
  nextAvailableAt: string
) => {
  const { hasDone: hasDoneChallenge, isAvailable: isChallengeAvailable } = challengesStatus;

  const hasTimer = !isAvailable(nextAvailableAt);

  if (currentLevel === level) {
    return {
      isActive: hasDoneChallenge ? hasTimer && !isChallengeAvailable : true,
      isDone: false,
      isNext: true,
      isPrevious: false,
      nextAvailableAt,
    };
  }

  const isUnityLevel = level % 50 === 0;
  const isPreviousLevel = currentLevel - 1 === level;
  const isPreviousLevelForUnity = currentLevel - 2 === level;
  const isFirstLevelOfTheWorld = currentLevel % 50 === 1;

  if ((!isUnityLevel && isPreviousLevel) || (isFirstLevelOfTheWorld && isPreviousLevelForUnity)) {
    const previousAvailable = hasDoneChallenge && hasTimer && isChallengeAvailable;
    return {
      isActive: previousAvailable,
      isDone: true,
      isNext: previousAvailable,
      isPrevious: true,
      nextAvailableAt: "",
    };
  }

  return {
    isDone: currentLevel > level,
    isNext: false,
    isPrevious: false,
    nextAvailableAt: "",
  };
};

export const getSeperator = ({
  currentLevel,
  episode,
}: {
  currentLevel: number;
  episode: number;
}): ISeperatorConfig => {
  const seperator = QUEST_MAP_CONFIG.episodes[episode]?.seperator;
  if (!seperator) {
    return undefined;
  }

  const maxLevel = Object.keys(QUEST_MAP_CONFIG.episodes[episode]?.levels)
    .map(Number)
    .reduce<number>((prev, cur) => (prev > cur ? prev : cur), 0);

  if (currentLevel <= maxLevel) {
    return seperator;
  }
};

export const getActiveLevel = (formatedData: any[]) => {
  const activeLevel = formatedData.find((level) => level.isNext && level.isActive);
  if (activeLevel) {
    return activeLevel.level;
  }

  return formatedData[0] ? formatedData[0].level : 0;
};
