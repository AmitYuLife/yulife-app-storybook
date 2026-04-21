import * as ids from "@ids";
import { expect, element, by, waitFor } from "detox";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import { P2P_MESSAGES_JP } from "../_resources/constants";

export {
  smokingTileVisible,
  smokingCardVisible,
  onSmokingHub,
} from "../../smoking_cessation/_steps/then";

export const {
  idExist,
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
  scrollYuScreenDown,
} = navigation.scrolling;

export const wellbeingServiceVisible = async () => {
  const titles = ["Smart Health", "YuMatter", "Beam", "HiBob", "More Happi"];

  for (const i of titles) {
    await scrollUntilIdVisible(ids.WELLBEING_HUB_SCROLL_VIEW, ids.TEXT_TEMPLATE(i), "down")();
    await expect(element(by.id(ids.TEXT_TEMPLATE(i)))).toBeVisible();
  }
};

export const cycleThroughGiftMessages = async () => {
  const firstTestId = ids.P2P_MESSAGE(P2P_MESSAGES_JP[0]);
  await waitFor(element(by.id(firstTestId))).toBeVisible().withTimeout(4000);

  for (let i = 0; i < P2P_MESSAGES_JP.length; i++) {
    const testID = ids.P2P_MESSAGE(P2P_MESSAGES_JP[i]);
    await tapID(testID, 3000)();
    if ((i + 1) % 6 === 0 && i !== P2P_MESSAGES_JP.length - 1) {
      await element(by.id(ids.P2P_MESSAGE_SCROLL)).scroll(300, "down", NaN, 0.3);
    }
  }
};
