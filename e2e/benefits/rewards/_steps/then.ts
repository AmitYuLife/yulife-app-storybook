import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as constant from "../_resources/constants";
import * as ids from "@ids";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  multipleTextVisible,
  textVisibleAtIndex,
  idExist,
} = navigation.common;

export const {
  rewardVisible,
  lockedRewardVisible,
  rewardDenominationsVisible,
  denominationListVisible,
  buyButtonVisible,
  onRewardPurchasedScreen,
  purchasedRewardVisible,
  multiplePurchasedRewardVisible,
  onRewardHistoryScreen,
  walletUsedSectionVisible,
  walletExpiredSectionVisible,
  walletSeeMoreButtonVisible,
} = screens.rewards;

export const { yuCoinPowerInfoVisible } = screens.yuscreen;

export const rewardsLocationModalVisible =
  (waitTime = 2500) =>
  async () => {
    await textVisible(constant.locationModalTitle, waitTime)();
    await textVisible(constant.locationModalDesc, waitTime)();
    await textVisible(constant.locationModalStoreLocation, waitTime)();
    await textVisible(constant.locationModalButton, waitTime)();
  };

export const rewardProductCardVisible = (productCardObj) => async () => {
  await idVisible(ids.PRODUCT_CARD_TITLE(productCardObj.title))();
  await idVisible(ids.PRODUCT_CARD_IMAGE(productCardObj.image))();
  await idVisible(ids.PRODUCT_CARD_BOTTOM(productCardObj.bottomText))();

  if (productCardObj.yuCoinPowerIncrease) {
    await idVisible(ids.YUCOIN_LABEL(productCardObj.yuCoinPowerIncrease))();
  }
};
