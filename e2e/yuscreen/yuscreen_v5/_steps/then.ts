import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import * as constants from "../_resources/constants"
import { YuScreenProductCard, YuScreenV5WellbeingItem, CertificateDetails } from "../_resources/types";
import { scrollUntilIdVisible, scrollUntilTextVisible } from "_utils/navigation/scrolling";
export { yunityCorrect } from "worlds_progression/eotw/_steps/then";


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
  idExist
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
  yuscreenV5CreateYumojiVisible
} = screens.yuscreen;

export const { yunityRewardsVisible } = screens.challenges

export const inviteFriendSectionVisible = async () => {
  await idVisible(ids.REFERRAL_IMAGE)()
  await textVisible(constants.inviteFriendsHeader)()
  await idVisible(ids.REFERRAL_BUTTON(constants.inviteColleageButton))()
}

export const onInviteColleaguePage = async () => {
  await textVisible(constants.referralPageHeader)()
  await idVisible(ids.REFERRALS_INVITE_BUTTON)()
  await textVisible(constants.referralListHeader)()
  await textVisible(constants.noReferralsMessage)()
}


export const yuScreenV5HeaderVisible = (collapsed: boolean, name: string, world: string, level: string, emptyAvatar=false) => async () => {
    await idVisibleAtIndex(ids.YUSCREEN_V5_USERNAME(name), 0)()
    await idVisibleAtIndex(ids.YUSCREEN_V5_WORLD_AND_LEVEL(world, level), 0)()
    
  if(!collapsed && emptyAvatar) {
    await idVisible(ids.EMPTY_USER_YUMOJI_AVATAR)()
  } else {
    await idNotVisible(ids.EMPTY_USER_YUMOJI_AVATAR)()
  }

  if(!collapsed && !emptyAvatar) {
    await idVisible(ids.YUMOJI_YUSCREEN_V5)()
  } else {
    await idNotVisible(ids.YUMOJI_YUSCREEN_V5)()
  }
}

const yuScreenV5WellbeingItemVisible = (item: YuScreenV5WellbeingItem) => async () => {
  await textVisible(item.title)()
  await textVisible(item.desc)()
  await idVisible(ids.RIGHT_SIDE_IMAGE_BOX_OPTION(item.img))()
}


export const yuScreenV5WellbeingSectionVisible = (items: YuScreenV5WellbeingItem[], waitTime=0) => async () => {
  await wait(waitTime)()
  await idVisible(ids.TEXT_TEMPLATE("Make the most of your benefits", "b2b"))()
  await scrollUntilTextVisible(ids.YUSCREEN_SCROLL_VIEW, items[(items.length -1)].desc, "down")()
  await items.forEach((item, index) => async () => {
    await idVisible(ids.YUSCREEN_V5_WELLBEING_SECTION_ITEM(item.title, index.toString()))()
    await yuScreenV5WellbeingItemVisible(item)()
  })
  await scrollUntilIdVisible(ids.YUSCREEN_SCROLL_VIEW, ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON, "down")()
  await idVisible(ids.YUSCREEN_V5_WELLBEING_SECTION_BUTTON)()
}

export const wellbeingHubCardsCorrectOrder = (items: YuScreenV5WellbeingItem[]) => async () => {
  await items.forEach((item, index) => async () => {
    await idVisible(ids.WELLBEING_SERVICE_CARD(item.title, index.toString()))()
  })
}

export const wellbeingHubLocationModalVisible = async () => {
  await textVisible("Welcome to Wellbeing Hub!")()
  await textVisible("Benefits location")()
  await textVisible("Confirm selection")()
}

export const productCardVisible = (item: YuScreenProductCard) => async () => {
  await idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD(item.productName))()
  await idVisible(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(item.mainImage))()
}

export const canSeeProductCertificate = (item: CertificateDetails ) => async () => {
  await idVisible(ids.CERTIFICATE_KEY_VALUES("Client name", item.clientName))()
  await idVisible(ids.CERTIFICATE_KEY_VALUES("Company name", item.companyName))()
  await idVisible(ids.CERTIFICATE_KEY_VALUES("Cover start date", item.coverStartDate))()
}