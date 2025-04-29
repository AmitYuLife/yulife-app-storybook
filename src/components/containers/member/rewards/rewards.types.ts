import { GetMobileRewardsListQuery } from "@graphql/__generated";

export enum RewardsManagerActionTypes {
  SET_SHOW_TITLE = "SET_SHOW_TITLE",
  SET_SHOW_CHIP_LIST = "SET_SHOW_CHIP_LIST",
  DISABLE_CHIP_LIST = "DISABLE_CHIP_LIST",
  SET_DONATION_INITIAL_STATE = "SET_DONATION_INITIAL_STATE",
  SET_HIDE_TITLE = "SET_HIDE_TITLE",
  SET_TITLE_AND_DESCRIPTION = "SET_TITLE_AND_DESCRIPTION",
  SET_DESCRIPTION = "SET_DESCRIPTION",
  SET_ACTIVE_TABS_LENGTH = "SET_ACTIVE_TABS_LENGTH",
  REMOVE_TITLE_AND_DESCRIPTION = "REMOVE_TITLE_AND_DESCRIPTION",
  DISABLE_ON_SCROLL_ACTION = "DISABLE_ON_SCROLL_ACTION",
  ENABLE_ON_SCROLL_ACTION = "ENABLE_ON_SCROLL_ACTION",
  SET_END_OF_SEASON = "SET_END_OF_SEASON",
}

export interface IRewardsManagerState {
  showTitle: boolean;
  showChipList: boolean;
  chipsIsDisabled: boolean;
  isOnScrollActionEnabled: boolean;
  shouldAnimate: boolean;
  isEndOfSeason: boolean;
  activeTabsLength: number;
  title: string;
  description: string;
}

export interface IRewardsManagerAction {
  type: RewardsManagerActionTypes;
  payload?: any;
}

export interface IRewardContainerProps {
  showNavigation?: boolean;
  hasOtherContainers?: boolean;
  handlePurchasesPress?: () => void;
}

export interface RewardOnPressArgs {
  id: string;
  name: string;
  sduiStepId?: string;
  isLocked?: boolean;
  teaseDetails?: GetMobileRewardsListQuery["data"]["list"][0]["teaseDetails"];
}
