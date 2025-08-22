// eslint-disable-next-line no-restricted-imports
import { GamePrizeType } from "@graphql/__generated";
import { IHighlightedTabOptions } from "@redux/app/app.types";

export interface IPrizeHintPopup {
  id: string;
  routeIds: string[];
  tab: IHighlightedTabOptions;
}

export interface IPrizesStore {
  explainedPrizeTypeCounts: Partial<Record<GamePrizeType, number>>;
  prizeHintQueue: IPrizeHintPopup[];
  currentPrizeHint?: IPrizeHintPopup;
}

export type IPrizeAwardedPayload = {
  prizeTypes: GamePrizeType[];
};

export type IPrizeExplainedPayload = {
  prizeType: GamePrizeType;
};

export type AddPrizeHintToQueuePayload = { hint: IPrizeHintPopup };

export type ClearCurrentPrizeHintPayload = void;
