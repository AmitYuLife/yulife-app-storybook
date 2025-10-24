import { GetMobileRewardsListQuery } from "@graphql/__generated";

export interface IRewardContainerProps {
  showNavigation?: boolean;
  onPressWallet?: () => void;
  handlePurchasesPress?: () => void;
  isInnerScreen?: boolean;
}

export interface RewardOnPressArgs {
  id: string;
  name: string;
  sduiStepId?: string;
  isLocked?: boolean;
  teaseDetails?: GetMobileRewardsListQuery["data"]["list"][0]["teaseDetails"];
}
