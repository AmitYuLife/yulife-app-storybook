import { GetDuellerDetails_getDuellerDetails } from "@graphql/_core/schema/GetDuellerDetails";

export type Step = "INTRO" | "OPTIONS";

export enum YuCoinAmount {
  low = 10,
  medium = 25,
  high = 50,
  max = 100,
}

export const DEFAULT_DUEL_DURATION = 86400;
export const DEFAULT_DUEL_DURATION_LABEL = "Whole day";
export const DEFAULT_DUEL_AMOUNT = YuCoinAmount.low;

export interface DuelStepProps {
  yucoin: number;
  duration: number;
  user: GetDuellerDetails_getDuellerDetails["user"];
  opponent: GetDuellerDetails_getDuellerDetails["opponent"];
  loading: boolean;
  onChange?: any;
  setYucoin?: any;
  setDuration?: any;
  goToNextStep?: () => void;
  onDeclinePress?: () => void;
  isLoading: boolean;
  submitDuel: () => void;
  userCoins: number;
  loadingLabel?: "primary" | "secondary";
}
