import { GetMobileGameBattlePassChestDetailsQuery } from "@graphql/__generated";

export type OpenedReward =
  GetMobileGameBattlePassChestDetailsQuery["getMobileGameBattlePassChestDetails"]["openedRewards"][0];

export interface IPickStageProps {
  overlayImage?: string;
  openedItems?: OpenedReward[];
  onClaim?: (prizeId: string) => void;
  isLoading?: boolean;
}

export enum ChestStage {
  loading = "loading",
  staging = "staging",
  ingest = "ingest",
  pick = "pick",
  redeemed = "redeemed",
}
