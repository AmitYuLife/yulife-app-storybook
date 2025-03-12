import { GetMobileGameBattlePassChestDetailsQuery } from "@graphql/__generated";

export type OpenedReward =
  GetMobileGameBattlePassChestDetailsQuery["getMobileGameBattlePassChestDetails"]["openedRewards"][0];

export interface IPickStageProps {
  isLoading?: boolean;
  overlayImage?: string;
  openedItems?: OpenedReward[];
  onClaim?: (prizeIds: string[]) => void;
}

export enum ChestStage {
  loading = "loading",
  staging = "staging",
  ingest = "ingest",
  pick = "pick",
  redeemed = "redeemed",
}
