import * as ids from "@ids";
import { expect } from "detox";
import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as constants from "../_resources/constants";
import { FACIAL_HAIR_ITEMS } from "../_resources/fixtures";
import { scrollUntilIdVisible } from "_utils/navigation/scrolling";
export { yunityCorrect } from "worlds_progression/eotw/_steps/then";
import {
  YuScreenProductCard,
  YuScreenV5WellbeingItem,
  CertificateDetails,
} from "../_resources/types";

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
  wait,
  idExist,
  tapID,
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
  yuCoinPowerInfoVisible,
  unlockedYumojiItemsVisible,
  maximiseYucoinVisible,
  streakNudgeVisible,
  chestNudgeVisible,
  cyclingNudgeVisible,
  walkingNudgeVisible,
  challengeNudgeVisible,
  meditationNudeVisible,
  completedChestNudgeVisible,
  completedChallengeNudgeVisible,
  completedCyclingNudgeVisible,
  completedMeditationNudeVisible,
  completedStreakNudgeVisible,
  completedWalkingNudgeVisible,
  yuscreenV5CreateYumojiVisible,
} = screens.yuscreen;

export const { yunityRewardsVisible } = screens.challenges;

export const inviteFriendSectionVisible = async () => {
  await idVisible(ids.REFERRAL_IMAGE)();
  await textVisible(constants.inviteFriendsHeader)();
  await idVisible(ids.REFERRAL_BUTTON(constants.inviteColleageButton))();
};

export const onInviteColleaguePage = async () => {
  await expect(element(by.id(ids.REFERRALS_CODE_TITLE("Your referral code:")))).toBeVisible();
  await expect(element(by.id(ids.REFERRALS_SHARE_CODE_BUTTON))).toBeVisible();
  await expect(element(by.text("Your referrals"))).toExist();
};

export const yuScreenV5HeaderVisible =
  (collapsed: boolean, name: string, world: string, level: string, emptyAvatar = false) =>
  async () => {
    await idVisibleAtIndex(ids.YUSCREEN_V5_USERNAME(name), 0)();
    await idVisibleAtIndex(ids.YUSCREEN_V5_WORLD_AND_LEVEL(world, level), 0)();

    if (!collapsed && emptyAvatar) {
      await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR)();
    } else {
      await idNotVisible(ids.EMPTY_USER_YUMOJI_AVATAR)();
    }

    if (!collapsed && !emptyAvatar) {
      await idVisible(ids.YUMOJI_YUSCREEN_V5)();
    } else {
      await idNotVisible(ids.YUMOJI_YUSCREEN_V5)();
    }
  };

export const yuScreenV5WellbeingItemVisible =
  (item: YuScreenV5WellbeingItem, waitTime = 0, index = 0) =>
  async () => {
    wait(waitTime)();
    await textVisibleAtIndex(item.title, 0)();
    await textVisibleAtIndex(item.desc, 0)();
  };

export const yuScreenV5WellbeingSectionVisible =
  (items: YuScreenV5WellbeingItem[], waitTime = 0, sectionIndex = 0) =>
  async () => {
    await wait(waitTime)();
    await items.forEach((item, index) => async () => {
      await idVisible(ids.YUSCREEN_V5_WELLBEING_SECTION_ITEM(item.title, index.toString()))();
      await yuScreenV5WellbeingItemVisible(item, 500, sectionIndex)();
    });
  };

export const wellbeingHubCardsCorrectOrder = (items: YuScreenV5WellbeingItem[]) => async () => {
  await items.forEach((item, index) => async () => {
    await idVisible(ids.WELLBEING_SERVICE_CARD(item.title, index.toString()))();
  });
};

export const wellbeingHubLocationModalVisible = async () => {
  await idVisible(ids.TERTIARY_BUTTON("Current location"), 2000)();
};

export const productCardVisible = (item: YuScreenProductCard) => async () => {
  await idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD(item.productName))();
  await idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(item.mainImage))();
};

export const canSeeProductCertificate = (item: CertificateDetails) => async () => {
  await idVisible(ids.CERTIFICATE_KEY_VALUES("Client name", item.clientName))();
  await idVisible(ids.CERTIFICATE_KEY_VALUES("Company name", item.companyName))();
  await idVisible(ids.CERTIFICATE_KEY_VALUES("Cover start date", item.coverStartDate))();
};

export const cycleThroughFacialHairOptions = async () => {
  const SCROLLER_ID = "AVATAR_BUILDER_LIST";

  for (const id of FACIAL_HAIR_ITEMS) {
    const testID = `YUMOJI_PART_ID_${id}`;

    try {
      await scrollUntilIdVisible(SCROLLER_ID, testID, "down", 0.5, 0.5, 150, 0)();
    } catch {
      await scrollUntilIdVisible(SCROLLER_ID, testID, "up", 0.5, 0.5, 150, 0)();
    }

    await idVisible(testID)();
    await tapID(testID)();
  }
};

export const checkEmptyAchievementSlots = (slots: number) => async () => {
  for (let i = 1; i <= slots; i++) {
    idVisible(ids.ACHIEVEMENT_EMPTY_SLOT(ids.ACHIEVEMENT_SLOT(i)), 1500);
  }
};

export const assertAllLockedAchievements = async () => {
  for (const name of constants.ACHIEVEMENTS) {
    idVisible(ids.ACHIEVEMENT_CARD(name, "locked"), 2000);
  }
};
