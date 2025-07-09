import {
  expectIsVisibleViaText,
  expectIsVisibleViaID,
  wait,
  textVisible,
  idVisible,
} from "@navigation";
import { scrollFromText, scrollUntilIdVisible, swipeFromText } from "_utils/navigation/scrolling";
import {
  LOCKED_REWARD_ITEM,
  PURCHASE_IMAGE,
  REWARDS_LIST_SCREEN_SCROLL,
  REWARD_ITEM,
  TEXT_TEMPLATE,
  WEGIFT_CONFIRMED,
} from "@ids";
import moment = require("moment");
import { expect } from "detox";
import * as ids from "@ids";

type rewardType = "avios";

export function addCommasToNumber(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const rewardVisible = (reward: any) => async () => {
  const minValue = reward.data.availableDenominations[0].value;
  const minYucoin = addCommasToNumber(reward.data.availableDenominations[0].yuCoin);
  const rewardItem = REWARD_ITEM(reward.data._id);

  await scrollUntilIdVisible(REWARDS_LIST_SCREEN_SCROLL, rewardItem, "down")();
  await expectIsVisibleViaText(`Get vouchers from\n£${minValue} for ${minYucoin} YuCoin`, 1500);
  await expectIsVisibleViaID(rewardItem, 1500);
};

export const specialRewardVisible = (reward: any, type: rewardType) => async () => {
  let rewardTitle: string;
  let rewardSubText: string;
  let rewardItem: string;

  switch (type) {
    case "avios":
      const minValue = reward.data.availableDenominations[0].value;
      const minYucoin = addCommasToNumber(reward.data.availableDenominations[0].yuCoin);

      rewardItem = REWARD_ITEM(reward.data._id);
      rewardTitle = `${minValue} avios`;
      rewardSubText = `yucoin x ${minYucoin} up`;

      break;
  }

  await expectIsVisibleViaID(rewardItem, 1500);
  await expectIsVisibleViaText(rewardTitle, 1500);
  await expectIsVisibleViaText(rewardSubText, 1500);
};

export const tapRewardInList = (reward: any) => async () => {
  const rewardItem = element(by.id(REWARD_ITEM(reward.data._id)));

  await scrollUntilIdVisible(ids.SHOPFRONT_REWARDS_LIST, REWARD_ITEM(reward.data._id), "down")();
  await rewardItem.tap();
};

export const onRewardScreen = (reward: any) => async () => {
  const name = reward.data.name;
  const description = reward.data.description;
  const minValue = reward.data.availableDenominations[0].value;
  const minYucoin = reward.data.availableDenominations[0].yuCoin;

  const rewardItem = REWARD_ITEM(reward.data._id);
  const rewardTitle = `£${minValue} ${name} for ${minYucoin} YuCoins`;
};

export const onSpecialRewardScreen = (reward: any, type: rewardType) => async () => {
  const description = reward.data.description;

  let rewardTitle: string;
  let rewardSubText: string;
  let rewardItem: string;

  switch (type) {
    case "avios":
      const minValue = reward.data.availableDenominations[0].value;
      const minYucoin = addCommasToNumber(reward.data.availableDenominations[0].yuCoin);

      rewardItem = REWARD_ITEM(reward.data._id);
      rewardTitle = `${minValue} avios`;
      rewardSubText = `yucoin x ${minYucoin} up`;

      break;
  }

  await expectIsVisibleViaID(rewardItem);
  await expectIsVisibleViaText(rewardTitle);
  await expectIsVisibleViaText(rewardSubText);

  await expectIsVisibleViaText(description);
};

export const lockedRewardVisible = (reward: any) => async () => {
  const rewardItem = LOCKED_REWARD_ITEM(reward.data._id);

  await expectIsVisibleViaID(rewardItem, 1500);
};

export const rewardDenominationsVisible = (reward: any) => async () => {
  const denominations = reward.data.availableDenominations;

  for (const i of denominations) {
    await expect(element(by.text(`£${i.value} - ${i.yuCoin} YuCoin`))).toBeVisible();
  }
};

export const tapDenomination = (reward: any, index: number) => async () => {
  const denomination = reward.data.availableDenominations[index];
  const denominationText = element(
    by.id(
      TEXT_TEMPLATE(`£${denomination.value} - ${addCommasToNumber(denomination.yuCoin)} YuCoin`)
    )
  );
  await denominationText.tap();
};

export const denominationListVisible = (reward: any, availableYuCoin: number) => async () => {
  const denominationArr = reward.data.availableDenominations;

  await expect(
    element(by.text(`You have ${addCommasToNumber(availableYuCoin)} YuCoin.`))
  ).toBeVisible();
  await expect(element(by.text(`Cancel`))).toBeVisible();

  for (const i of denominationArr) {
    await expect(
      element(by.text(`£${i.value} - ${addCommasToNumber(i.yuCoin)} YuCoin`))
    ).toBeVisible();
  }
};

export const tapDenominationList =
  (reward: any, rewardName: string, index = 0) =>
  async () => {
    const denomination = reward.data.availableDenominations[index];
    const denominationText = element(
      by.text(`£${denomination.value} - ${addCommasToNumber(denomination.yuCoin)} YuCoin`)
    );
    const confirmationPurchaseText = element(
      by.text(
        `You'll purchase a £${denomination.value} ${rewardName} voucher with ${addCommasToNumber(
          denomination.yuCoin
        )} YuCoin.`
      )
    );

    await wait(5000)();
    await expect(denominationText).toBeVisible();
    await denominationText.tap();
    await expect(confirmationPurchaseText).toBeVisible();
    await expect(element(by.text(`Cancel`))).toBeVisible();
  };

export const tapDenominationListAmz =
  (reward: any, index = 0) =>
  async () => {
    const denomination = reward.data.availableDenominations[index];
    const denominationText = element(
      by.text(`£${denomination.value} - ${addCommasToNumber(denomination.yuCoin)} YuCoin`)
    );
    const confirmationPurchaseText = element(
      by.text(
        `You'll purchase a £${denomination.value} Amazon voucher with ${addCommasToNumber(
          denomination.yuCoin
        )} YuCoin.`
      )
    );

    await wait(5000)();
    await expect(denominationText).toBeVisible();
    await denominationText.tap();
    await expect(confirmationPurchaseText).toBeVisible();
    await expect(element(by.text(`Cancel`))).toBeVisible();
  };

export const buyButtonVisible =
  (reward: any, index = 0) =>
  async () => {
    const buttonText = element(
      by.text(`£12 - ${addCommasToNumber(reward.data.availableDenominations[index].yuCoin)} YuCoin`)
    );
    await expect(buttonText).toBeVisible();
  };

export const tapBuyButton =
  (reward: any, index = 0) =>
  async () => {
    const buttonText = element(
      by.text(`£20 - ${reward.data.availableDenominations[index].yuCoin} YuCoin`)
    );
    await expect(buttonText).toBeVisible();
    await buttonText.longPress();
  };

export const onRewardPurchasedScreen =
  (reward: any, locale = "en-GB") =>
  async () => {
    const expiryPolicy = reward.data.expiry_date_policy;
    const purchaseDate = moment().format(locale === "en-US" ? "MMMM DD, YYYY" : "DD MMM YYYY");

    await textVisible(`Purchased date - ${purchaseDate}`, 5000)();

    if (expiryPolicy) {
      let expiryDate;
      switch (expiryPolicy) {
        case "24 months from last activity":
          expiryDate = moment()
            .add(24, "months")
            .format(locale === "en-US" ? "MMMM DD, YYYY" : "DD MMM YYYY");
      }
      await expect(element(by.text(expiryDate))).toBeVisible();
    }

    await swipeFromText("£12 Amazon voucher", "up", "fast");

    try {
      await textVisible("Get voucher");
    } catch (e) {
      await scrollFromText("How to redeem", "up", "fast")();
      await expect(element(by.text("get voucher"))).toBeVisible();
    }
  };

export const multiplePurchasedRewardVisible = (rewardNames: string[]) => async () => {
  for (const rewardName of rewardNames) {
    idVisible(ids.WALLET_ITEM_TITLE(rewardName), 1500);
  }
};

export const purchasedRewardVisible =
  (reward: any, denominationIndex = 0) =>
  async () => {
    const value = reward.data.availableDenominations[denominationIndex].value;
    const rewardName = reward.data.name;

    const title = `£${value} ${rewardName} voucher`;
    const purchaseDate = `Purchased date - ${moment().format("DD MMM YYYY")}`;

    await textVisible(title, 1500)();
    await textVisible(purchaseDate, 1500)();
  };

export const tapPurchasedReward =
  (reward: any, denominationIndex = 0) =>
  async () => {
    const value = reward.data.availableDenominations[denominationIndex].value;
    const rewardName = reward.data.name;

    const title = element(by.text(`£${value} ${rewardName} voucher`)).atIndex(denominationIndex);
    await title.tap();
  };

export const onRewardHistoryScreen =
  (reward: any, ledger: any, locale = "en-GB", index = 0) =>
  async () => {
    const cardImageURL = element(by.id(PURCHASE_IMAGE(reward.data.images.detailHeaderKey)));
    const description = reward.data.description;
    const howtoRedeem = reward.data.redemptionSteps.steps[index];
    const purchaseDate = moment().format(locale === "en-US" ? "MMMM DD, YYYY" : "DD MMM YYYY");
    const date = moment(ledger.data.expiryDate);
    const validDate = date.format(locale === "en-US" ? "MMMM DD, YYYY" : "DD MMM YYYY");

    await wait(3000)();
    await expect(element(by.id(WEGIFT_CONFIRMED))).toBeVisible();
    await expect(cardImageURL).toBeVisible();
    await expect(element(by.text(purchaseDate))).toBeVisible();
    await expect(element(by.text(validDate))).toBeVisible();

    try {
      await expect(element(by.text(description))).toBeVisible();
    } catch (e) {
      await cardImageURL.swipe("up", "slow", 0.1);
      await expect(element(by.text(description))).toBeVisible();
    }
    await cardImageURL.swipe("up", "fast");

    await expect(element(by.text("see other rewards"))).toBeVisible();
    try {
      await expect(element(by.text("get voucher"))).toBeVisible();
    } catch (e) {
      await scrollFromText("How to redeem", "up", "fast")();
      await expect(element(by.text(howtoRedeem))).toBeVisible();
      await expect(element(by.text("get voucher"))).toBeVisible();
    }

    await expect(element(by.text("T&Cs"))).toBeVisible();
    await expect(element(by.text("Rewards policy"))).toBeVisible();
  };
