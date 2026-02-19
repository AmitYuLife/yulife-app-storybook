import { GetDuellerDetailsQuery } from "@graphql/__generated";

export type Step = "INTRO" | "OPTIONS";

export const DEFAULT_DUEL_AMOUNT: number | null = null;

type IGetDuellerDetails = GetDuellerDetailsQuery["getDuellerDetails"];
export interface DuelStepProps {
  yucoin: number;
  user: IGetDuellerDetails["user"];
  opponent: IGetDuellerDetails["opponent"];
  loading: boolean;
  onChange?: any;
  setYucoin?: any;
  goToNextStep?: () => void;
  onDeclinePress?: () => void;
  isLoading: boolean;
  submitDuel: () => void;
  userCoins: number;
  loadingLabel?: "primary" | "secondary";
  componentId?: string;
  dismiss?: () => void;
}
