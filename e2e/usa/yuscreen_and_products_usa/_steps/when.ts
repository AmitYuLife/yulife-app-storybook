import { navigation } from "@utils";
import { USProductData } from "../_resources/types";
import * as ids from "@ids";
export { authoriseFitkit } from "@socket";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
  scrollUntilTextVisibleAtIndex,
  scrollUntilIdVisibleAtIndex,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  textVisible,
  idVisible,
  wait,
  tapIDAtPoint,
  tapIDAtIndex,
  textNotVisible,
  tapTextAtIndex,
  minimiseAndReopenApp,
  terminateApp,
} = navigation.common;

export {
  triggerGiftReceivedNotification,
  triggerIssueCoinToNpcBiz,
  triggerSendGiftFromNpcBiz,
} from "../../../activity/p2p_gifting/_steps/when";

export { triggerSearchTokens } from "_utils/appScreens/leaderboard";
export { followEmailLink } from "../../../admin/emails/_steps/when";

export const tapAvatarItem = (avatarItem: string, status: string) => async () => {
  const item = element(
    by.id(
      ids.AVATAR_ITEM(
        `https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`,
        status
      )
    )
  );
  await item.tap();
};

export const tapTab = (tabName: string) => async () => {
  const tab = element(by.id(ids.CATEGORY_TYPE(tabName)));
  await tab.tap();
};

export const tapItem = (partID: string) => async () => {
  await scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.YUMOJI_PART_ID(partID), "down")();
  const item = element(by.id(ids.YUMOJI_PART_ID(partID)));
  await item.tap();
};

export const tapColour = (hexValue: string) => async () => {
  await scrollUntilIdVisible(ids.AVATAR_BUILDER_LIST, ids.COLOUR(hexValue), "down")();
  const colour = element(by.id(ids.COLOUR(hexValue)));
  await colour.tap();
};

export const editYumoji =
  (
    skinTone: string,
    hairStyle: string,
    hairColour: string,
    facialHair: string,
    facialHairColour: string,
    eyeColour: string,
    accessories: string
  ) =>
  async () => {
    await textVisible("Edit your Yumoji")();

    await textVisible("Pick a body type")();
    await tapID(ids.MALE_BODY)();

    const continueButton = element(by.text("Continue"));
    await continueButton.tap();

    await tapColour(skinTone)();
    await tapTab("hairStyle")();
    await tapItem(hairStyle)();
    await tapTab("hairColour")();
    await tapColour(hairColour)();
    await tapTab("facialHair")();
    await tapItem(facialHair)();
    await tapTab("facialHairColour")();
    await tapColour(facialHairColour)();
    await tapTab("eyeColour")();
    await tapColour(eyeColour)();
    await tapTab("glasses")();
    await tapItem(accessories)();

    const saveButton = element(by.text("Save"));
    await saveButton.tap();

    const yesButton = element(by.text("Save changes"));
    await yesButton.tap();

    const doneButton = element(by.text("Done"));
    await doneButton.tap();
  };

export const createDefaultYumoji = async () => {
  await tapText("Create Yumoji")();
  await tapID(ids.MALE_BODY)();
  await tapText("Continue")();
  await tapText("Save")();
  await tapText("Save changes")();
  await tapText("Done")();
  await textNotVisible("Create Yumoji", 3000)();
};

export const tapCheckOutMyPower = async () => {
  await tapText("Check out my power")();
};

export const tapIllDoThisLater = async () => {
  await tapText("I'll do this later")();
};

export const closeScreen = async () => {
  let buttonIndex = 0;

  if (device.name.includes("(iPhone 15 Pro Max)")) {
    buttonIndex = 1;
  }

  await tapIDAtIndex(ids.BUTTON_CLOSE, buttonIndex)();
};

export const addContactDetails = async () => {
  await typeViaID(ids.CONTENT_ITEM_INPUT("title"), "Mr\n")();
  await typeViaID(ids.CONTENT_ITEM_INPUT("firstName"), "Eugene\n")();
  await typeViaID(ids.CONTENT_ITEM_INPUT("lastName"), "Grosu\n")();
  await typeViaID(ids.CONTENT_ITEM_INPUT("address1"), "Eugene's House\n")();
  await typeViaID(ids.CONTENT_ITEM_INPUT("town"), "London\n")();
  await scrollFromID(ids.SDUI_SCREEN_SCROLL_VIEW, "up", "slow")();
  await typeViaID(ids.CONTENT_ITEM_INPUT("postcode"), "HA9 7FN\n")();
  await typeViaID(ids.CONTENT_ITEM_INPUT("phone"), "07123456789\n")();
  await tapText("Claim now", 2000)();
};

export const attemptToTapSlot = (productCard: USProductData) => async () => {
  try {
    await tapText(productCard.slotAbreviation)();
  } catch (err) {
    try {
      await tapText(productCard.boxTitle)();
    } catch (err) {
      await tapText("More protection")();
      await tapText(productCard.boxTitle)();
    }
  }
};
