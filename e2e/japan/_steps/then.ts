import * as ids from "@ids";
import { expect } from "detox";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import { P2P_MESSAGES_JP } from "../_resources/constants";

export {
  smokingTileVisible,
  smokingCardVisible,
  onSmokingHub,
} from "../../smoking_cessation/_steps/then";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  idVisibleAtIndex,
  textVisibleAtIndex,
  tapIDNotBeingVisible,
  enrolmentEndsIn,
  objCopyVisible,
  tapID,
} = navigation.common;

export const { yuScreenV5HeaderVisible } = screens.yuscreen;

export const {
  swipeToID,
  swipeFromText,
  scrollUntilIdVisible,
  scrollUntilTextVisible,
  scrollFromID,
} = navigation.scrolling;

export const wellbeingServiceVisible = async () => {
  const titles = ["Smart Health", "YuMatter", "Beam", "HiBob", "More Happi"];

  for (const i of titles) {
    await scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE(i), "down")();
    await expect(element(by.id(ids.TEXT_TEMPLATE(i)))).toBeVisible();
  }
};

export const cycleThroughGiftMessages = async () => {
  for (let i = 0; i < P2P_MESSAGES_JP.length; i++) {
    const testID = ids.P2P_MESSAGE(P2P_MESSAGES_JP[i]);
    await tapID(testID)();
    if ((i + 1) % 6 === 0 && i !== P2P_MESSAGES_JP.length - 1) {
      await element(by.id(ids.P2P_MESSAGE_SCROLL)).scroll(300, "down", NaN, 0.3);
    }
  }
};
