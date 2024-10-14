import { IRewardsManagerState, IRewardsManagerAction, RewardsManagerActionTypes } from "./rewards.types";

export const REWARDS_MANAGER_INITIAL_STATE: IRewardsManagerState = {
  showTitle: false,
  showChipList: false,
  chipsIsDisabled: false,
  shouldAnimate: false,
  title: "",
  description: "",
  activeTabsLength: 1,
  isOnScrollActionEnabled: true,
};

export const reducer = (state: IRewardsManagerState, action: IRewardsManagerAction): IRewardsManagerState => {
  switch (action.type) {
    case RewardsManagerActionTypes.SET_SHOW_TITLE: {
      return {
        ...state,
        showTitle: true,
        showChipList: true,
      };
    }

    case RewardsManagerActionTypes.SET_HIDE_TITLE: {
      return {
        ...state,
        shouldAnimate: true,
        showTitle: false,
        showChipList: false,
      };
    }

    case RewardsManagerActionTypes.SET_DONATION_INITIAL_STATE: {
      return {
        ...state,
        title: action.payload?.title,
        description: action.payload?.description,
        isOnScrollActionEnabled: true,
        shouldAnimate: true,
      };
    }

    case RewardsManagerActionTypes.SET_SHOW_CHIP_LIST: {
      return {
        ...state,
        showChipList: true,
      };
    }

    case RewardsManagerActionTypes.SET_TITLE_AND_DESCRIPTION: {
      return {
        ...state,
        title: action.payload?.title,
        description: action.payload?.description,
      };
    }

    case RewardsManagerActionTypes.REMOVE_TITLE_AND_DESCRIPTION: {
      return {
        ...state,
        title: "",
        description: "",
      };
    }

    case RewardsManagerActionTypes.SET_ACTIVE_TABS_LENGTH: {
      return {
        ...state,
        activeTabsLength: action.payload,
        showChipList: action.payload === 1,
      };
    }

    case RewardsManagerActionTypes.DISABLE_ON_SCROLL_ACTION: {
      return {
        ...state,
        isOnScrollActionEnabled: false,
        showChipList: true,
        shouldAnimate: false,
        showTitle: false,
      };
    }

    case RewardsManagerActionTypes.ENABLE_ON_SCROLL_ACTION: {
      return {
        ...state,
        isOnScrollActionEnabled: true,
        showChipList: false,
        shouldAnimate: true,
        showTitle: false,
      };
    }

    case RewardsManagerActionTypes.DISABLE_CHIP_LIST: {
      return {
        ...state,
        chipsIsDisabled: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
