import { navigation } from "@utils";
import { screens } from "@appScreens";
import {
  ONBOARDING_SCREEN,
  V4_YUSCREEN,
  RIGHT_SIDE_IMAGE_BOX_OPTION,
  BOX_OPTION_TITLE,
  BOX_OPTION_DESCRIPTION,
  YUSCREEN_SCROLL_VIEW,
  LEFT_SIDE_BACKGROUD_IMAGE_SLOT,
  LEFT_SIDE_TEXT_SLOT_POWER,
  CAROUSEL_CARD,
  WELLBEING_HUB_SCREEN,
  TEXT_TEMPLATE,
  ITEM_DETAILS_REWARD,
} from "@ids";
import * as text from "../_resources/fixture";
import { BUSINESS_ACCOUNT_USA_1 } from "usa/_data";
import { BoxOption, YuScreenInfo } from "../_resources/types";
import { expect } from "detox";
import { usMysteryBoxRewards } from "../_resources/constants";

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
} = navigation.common;

export const {
  onEmptyYuscreen,
  onYuscreen,
  onCreateAvatarScreen,
  onAvatarBuilder,
  onAvatarCompletionScreen,
  onYourYuCoin,
  avatarBodyVisible,
  avatarBodyVisibleWithUser,
  leaderboardAvatarVisible,
  personalProductsVisible,
  onSurveyScreen,
  onSurveySubmitScreen,
  onPackageScreen,
  packageScreenCorrect,
  onSkinToneScreen,
  yuScreenV5HeaderVisible,
} = screens.yuscreen;

export const { swipeToID, swipeFromText, scrollUntilIdVisible, scrollUntilTextVisible } =
  navigation.scrolling;

export {
  smokingTileVisible,
  smokingCardVisible,
  onSmokingHub,
} from "../../../smoking_cessation/_steps/then";

export { hasReceivedOnboardingLinkEmail } from "../../../admin/login_and_routing/_steps/then";

export {
  signupRewardVisible,
  connectionSetupScreenVisible,
  healthDataSyncComponent,
} from "../../../admin/login_and_routing/_steps/then";

export const howToEnrollTexts = async () => {
  await expect(element(by.text(text.HowToEnroll))).toBeVisible();
  await expect(
    element(by.text(BUSINESS_ACCOUNT_USA_1.data.external_admin_url_description))
  ).toBeVisible();
};

export const pcpProductVisible = (prod: BoxOption, visible: boolean) => async () => {
  if (visible) {
    await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(prod.imageUrl))();
    await idVisible(BOX_OPTION_TITLE(prod.title))();
    await idVisible(BOX_OPTION_DESCRIPTION(prod.description))();
  } else {
    await idNotVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(prod.imageUrl))();
    await idNotVisible(BOX_OPTION_TITLE(prod.title))();
    await idNotVisible(BOX_OPTION_DESCRIPTION(prod.description))();
  }
};

export const exploreInsuranceBoxVisible = async () => {
  await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(text.ExploreInsureanceBox.imageUrl))();
  await idVisible(BOX_OPTION_TITLE(text.ExploreInsureanceBox.title))();
  await idVisible(BOX_OPTION_DESCRIPTION(text.ExploreInsureanceBox.description))();
};

export const correctUSAOnboardingScreenVisible = (product: YuScreenInfo) => async () => {
  await textVisibleAtIndex(text.yuCoinText, 0)();
  await textVisible(text.powerText)();
  await textVisible(product.mainYuCoinPower)();
  product.SlotProductTitle && (await textVisible(product.SlotProductTitle)());
  product.SlotLeftBackgroundImgSrc &&
    (await idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(product.SlotLeftBackgroundImgSrc), 0)());
  product.SlotYuCoinPowerText &&
    (await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(product.SlotYuCoinPowerText), 0)());
  //if product data have info for second slot will run below
  product.SecondSlotProductTitle && (await textVisible(product.SecondSlotProductTitle)());
  product.SecondSlotLeftBackgroundImgSrc &&
    (await idVisibleAtIndex(
      LEFT_SIDE_BACKGROUD_IMAGE_SLOT(product.SecondSlotLeftBackgroundImgSrc),
      1
    )());
  product.SlotYuCoinPowerText &&
    (await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(product.SlotYuCoinPowerText), 1)());
  await idVisible(ONBOARDING_SCREEN)();
  await textVisible(text.protectionPowered)();
  await textVisible(text.earnRewardsCopy)();
};

export const USAProdSlotVisible = (prod: YuScreenInfo) => async () => {
  await textVisible(prod.mainYuCoinPower)();
  await textVisible(prod.SlotProductTitle)();
  prod.SlotLeftBackgroundImgSrc &&
    (await idVisibleAtIndex(LEFT_SIDE_BACKGROUD_IMAGE_SLOT(prod.SlotLeftBackgroundImgSrc), 0)());
  prod.SlotYuCoinPowerText &&
    (await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(prod.SlotYuCoinPowerText), 0)());

  prod.SecondSlotProductTitle && (await textVisible(prod.SecondSlotProductTitle)());
  prod.SecondSlotLeftBackgroundImgSrc &&
    (await idVisibleAtIndex(
      LEFT_SIDE_BACKGROUD_IMAGE_SLOT(prod.SecondSlotLeftBackgroundImgSrc),
      1
    )());
  prod.SlotYuCoinPowerText &&
    (await idVisibleAtIndex(LEFT_SIDE_TEXT_SLOT_POWER(prod.SlotYuCoinPowerText), 1)());
};

export const onYuScreenUSA = (customer: any) => async () => {
  const firstName = customer.data.firstName;
  const lastName = customer.data.lastName;

  await textVisible(`${firstName} ${lastName}`)();
  await idVisible(V4_YUSCREEN)();
  await textVisible(`${text.createYumujiHeading}`)();
  await textVisible(`${text.createYumujiText}`)();
  await textVisible(`${text.createYumujiCTA}`)();
  await textVisibleAtIndex(`${text.yuCoinText}`, 0)(); // @update - can't find YuCoin text on yuscreen it is there
  await textVisible(`${text.powerText}`)();
  await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, text.SurveyLabel, "down")();
  await textVisible(`${text.SurveyLabel}`)();
  await textVisible(`${text.SurveyText}`)();
  await idNotVisible(CAROUSEL_CARD)();
  await scrollUntilTextVisible(YUSCREEN_SCROLL_VIEW, `${firstName} ${lastName}`, "up")();
};

export const boxOptionVisible = (box: BoxOption, visible: boolean) => async () => {
  if (visible) {
    await idVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(box.imageUrl))();
    await idVisible(BOX_OPTION_TITLE(box.title))();
    await idVisible(BOX_OPTION_DESCRIPTION(box.description))();
  } else {
    await idNotVisible(RIGHT_SIDE_IMAGE_BOX_OPTION(box.imageUrl))();
    await idNotVisible(BOX_OPTION_TITLE(box.title))();
    await idNotVisible(BOX_OPTION_DESCRIPTION(box.description))();
  }
};

export const wellbeingHubScreenVisible = (customer: any) => async () => {
  await idVisible(WELLBEING_HUB_SCREEN)();
  await textVisible(`Hi ${customer.data.firstName} ${customer.data.lastName}`)();
  await textVisible(text.wellbeingHubDescription)();
  await textVisible("All")();
  await idVisible(TEXT_TEMPLATE("Smart Health"))();
  await textVisible("Immediate access to a GP by phone or video")();
};

export const checkUsMysteryBoxRewardsVisible = async () => {
  for (const reward of usMysteryBoxRewards) {
    await idVisible(ITEM_DETAILS_REWARD(reward))();
  }
};
