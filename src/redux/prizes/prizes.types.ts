// eslint-disable-next-line no-restricted-imports
import { GamePrizeType } from "@graphql/__generated";

export interface IPrizesStore {
  explainedPrizeTypes: Partial<Record<GamePrizeType, boolean>>;
}

export type IPrizeAwardedPayload = {
  prizeTypes: GamePrizeType[];
};

export type IPrizeExplainedPayload = {
  prizeType: GamePrizeType;
};
