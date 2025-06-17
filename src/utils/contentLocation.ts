export type ContentLocationPlacement = "rewards" | "donate" | "wellbeing_hub" | "shopfront";

export const getContentLocationQueryToRefetch = (from: ContentLocationPlacement) => {
  switch (from) {
    case "rewards":
      return ["GetMobileRewardsList"];
    case "donate":
      return ["GetMobileGameBattlePassFull"];
    case "wellbeing_hub":
      return ["GetWellbeingHubItems"];
    case "shopfront":
      return ["GetMobileGameShopfront"];
    default:
      return [];
  }
};
