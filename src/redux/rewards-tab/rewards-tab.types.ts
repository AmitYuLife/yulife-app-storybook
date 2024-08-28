export interface IRewardsTabStore {
  selectedSection: RewardsSection;
  settings: {
    hasDonate: boolean;
    hasPremium: boolean;
    hasFullStore: boolean;
  };
}

export enum RewardsSection {
  Store = "store",
  Donations = "donations",
  Premium = "premium",
}
