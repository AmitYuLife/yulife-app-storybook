import { GetMobileGameWeeklies_getMobileGameWeeklies, GetQuestMap_levels } from "@graphql/_core/schema";
import { createContext } from "react";

export interface QuestsMapLevel extends GetQuestMap_levels {
  isActive?: boolean;
  isDone?: boolean;
  isNext?: boolean;
  isChestLevel?: boolean;
  nextAvailableAt?: string;
  onPress?: () => void;
}

interface IQuestsMapContext {
  isLoading: boolean;
  weeklies: GetMobileGameWeeklies_getMobileGameWeeklies;
  formattedLevels: QuestsMapLevel[];
  levelsList: GetQuestMap_levels[];
  currentLevel: number;
  activeLevel: number;
}

export const QuestsMapContext = createContext<IQuestsMapContext>({
  isLoading: true,
  weeklies: null,
  formattedLevels: [],
  levelsList: [],
  currentLevel: 1,
  activeLevel: 1,
});
