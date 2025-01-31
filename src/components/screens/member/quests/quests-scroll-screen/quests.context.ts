import { GetMobileGameWeekliesQuery, GetQuestMapQuery } from "@graphql/__generated";
import { createContext } from "react";

type Level = GetQuestMapQuery["levels"][0];
export type QuestsMapLevel = Level & {
  isActive?: boolean;
  isDone?: boolean;
  isNext?: boolean;
  isChestLevel?: boolean;
  nextAvailableAt?: string;
  onPress?: () => void;
  notificationIcon?: { id: string; uri?: string };
};

interface IQuestsMapContext {
  isLoading: boolean;
  weeklies: GetMobileGameWeekliesQuery["getMobileGameWeeklies"];
  formattedLevels: QuestsMapLevel[];
  levelsList: Level[];
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
