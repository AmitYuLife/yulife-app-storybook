import { GetDuellerDetails_getDuellerDetails } from "@graphql/_core/schema/GetDuellerDetails";

export type Step = "INTRO" | "OPTIONS";

export const DEFAULT_DUEL_AMOUNT: number | null = null;
export const DEFAULT_DUEL_AMOUNT_LABEL = "Select a wager";

export interface DuelStepProps {
  yucoin: number;
  user: GetDuellerDetails_getDuellerDetails["user"];
  opponent: GetDuellerDetails_getDuellerDetails["opponent"];
  loading: boolean;
  onChange?: any;
  setYucoin?: any;
  goToNextStep?: () => void;
  onDeclinePress?: () => void;
  isLoading: boolean;
  submitDuel: () => void;
  userCoins: number;
  loadingLabel?: "primary" | "secondary";
  componentId: string;
}
