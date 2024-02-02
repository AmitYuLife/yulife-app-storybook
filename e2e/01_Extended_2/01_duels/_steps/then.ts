import { navigation } from "@utils";
import { expect } from 'detox'
import * as ids from "@ids"

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  tryCatchTextVisible,
} = navigation.common;

export const onEmptyDuelsHub = async () => {
  await expect(element(by.id(ids.DUELS_HUB))).toBeVisible();
  await expect(element(by.id(ids.CHALLENGE_FRIEND_BUTTON))).toBeVisible();
  await expect(element(by.id(ids.EMPTY_DUELS_HUB))).toBeVisible();

  await expect(element(by.text("You’re not duelling with anybody today."))).toBeVisible();
};

export const onDuelsHub = async () => {
  await expect(element(by.id(ids.DUELS_HUB))).toBeVisible();
};

export const wagerModalVisible = async () => {
  const copy = ["Bragging Rights", "10 YuCoin", "25 YuCoin", "100 YuCoin"];
  await multipleTextVisible(copy)();
};
