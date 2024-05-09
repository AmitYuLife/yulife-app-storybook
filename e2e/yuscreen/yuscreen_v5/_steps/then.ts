import { navigation } from "@utils";
import { screens } from "@appScreens";
import * as ids from "@ids";
import * as constants from "../_resources/constants"



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
  onYuscreenV4,
  onSkinToneScreen,
  wellbeingHubVisible,
  yuCoinPowerInfoVisible
} = screens.yuscreen;

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