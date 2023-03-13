import {
  navigation,
  CATEGORY_TYPE,
  YUMOJI_PART_ID,
  COLOUR,
  YUSCREEN,
  YUCOIN_POWER,
  AVATAR_BUILDER_LIST,
  YUSCREEN_AVATAR,
  HEAD_TYPE,
  AVATAR_ITEM,
  TEXT_TEMPLATE,
  MALE_BODY,
  CONTENT_ITEM_INPUT,
  SDUI_SCREEN_SCROLL_VIEW,
  BUTTON_CLOSE,
  BUTTON_CLOSE_HEADER,
} from "@utils";

export const {
  scrollFromText,
  scrollFromID,
  swipeToID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  swipeFromText,
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
  clearFieldByID,
} = navigation.common;

export const tapAvatarItem = (avatarItem: string, status: string) => async () => {
  const item = element(
    by.id(AVATAR_ITEM(`https://yulife-develop.imgix.net/yuscreen_products_assets/default/${avatarItem}`, status))
  );
  await item.tap();
};

export const tapTab = (tabName: string) => async () => {
  const tab = element(by.id(CATEGORY_TYPE(tabName)));
  await tab.tap();
};

export const tapItem = (partID: string) => async () => {
  await scrollUntilIdVisible(AVATAR_BUILDER_LIST, YUMOJI_PART_ID(partID), "down")();
  const item = element(by.id(YUMOJI_PART_ID(partID)));
  await item.tap();
};

export const tapColour = (hexValue: string) => async () => {
  await scrollUntilIdVisible(AVATAR_BUILDER_LIST, COLOUR(hexValue), "down")();
  const colour = element(by.id(COLOUR(hexValue)));
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
    await tapID(MALE_BODY)();

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
  await tapID(MALE_BODY)();
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

  if (device.name.includes("(iPhone 14 Pro)")) {
    buttonIndex = 1;
  }

  await tapIDAtIndex(BUTTON_CLOSE, buttonIndex)();
};

export const addContactDetails = async () => {
  await scrollFromID(SDUI_SCREEN_SCROLL_VIEW, "down", "slow")();
  await clearFieldByID(CONTENT_ITEM_INPUT("firstName"))();
  await typeViaID(CONTENT_ITEM_INPUT("firstName"), "Eugene\n")();

  await clearFieldByID(CONTENT_ITEM_INPUT("lastName"))();
  await typeViaID(CONTENT_ITEM_INPUT("lastName"), "Grosu\n")();
};

export const addWronMinimumContactDetails = async () => {
  await typeViaID(CONTENT_ITEM_INPUT("firstName"), "E\n")();
  await typeViaID(CONTENT_ITEM_INPUT("lastName"), "G\n")();
  await typeViaID(CONTENT_ITEM_INPUT("address1"), "Eugene's House\n")();
  await typeViaID(CONTENT_ITEM_INPUT("town"), "L\n")();
};

export const addWronMaximumContactDetails = async () => {
  await scrollFromID(SDUI_SCREEN_SCROLL_VIEW, "down", "slow")();

  await typeViaID(CONTENT_ITEM_INPUT("firstName"), "IamVeryLongFirstNameTesting32char\n")();
  await typeViaID(CONTENT_ITEM_INPUT("lastName"), "IamVeryLongLastNameTesting32chara\n")();
  await typeViaID(CONTENT_ITEM_INPUT("address1"), "Eugene's House\n")();
  await typeViaID(CONTENT_ITEM_INPUT("town"), "Lo\n")();
};

export const addWrongMinimumPostCodeAndPhone = async () => {
  await scrollFromID(SDUI_SCREEN_SCROLL_VIEW, "up", "slow")();
  await typeViaID(CONTENT_ITEM_INPUT("postcode"), "HA\n")();
  await typeViaID(CONTENT_ITEM_INPUT("phone"), "07\n")();
  await tapText("Claim now", 2000)();
};

export const addWrongMaximumPostCodeAndPhone = async () => {
  await scrollFromID(SDUI_SCREEN_SCROLL_VIEW, "up", "slow")();
  await typeViaID(CONTENT_ITEM_INPUT("postcode"), "HA82 UUUSSS\n")();
  await typeViaID(CONTENT_ITEM_INPUT("phone"), "072211213213A\n")();
  await tapText("Claim now", 2000)();
};

export const addValidPostCodeAndPhone = async () => {
  await scrollFromID(SDUI_SCREEN_SCROLL_VIEW, "up", "slow")();

  await clearFieldByID(CONTENT_ITEM_INPUT("postcode"))();
  await typeViaID(CONTENT_ITEM_INPUT("postcode"), "HA9 7FN\n")();

  await clearFieldByID(CONTENT_ITEM_INPUT("phone"))();
  await typeViaID(CONTENT_ITEM_INPUT("phone"), "07123456789\n")();
};

export const closeScreenAtHeader = (option: "button_only" | "yulife" | "activity history") => async () => {
  await tapID(BUTTON_CLOSE_HEADER(option))();
};

export const completeYuScreenIntro = async () => {
  await tapText('Check out my power')()
  await tapText("I'll do this later")()
}