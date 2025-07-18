import * as ids from "@ids";
import { screens } from "@appScreens";
import { expect } from "detox";
import { idExist, navigation } from "@navigation";
import * as consts from "../_resources/constants";
import { CUSTOMER_18 } from "activity/_data";

export const {
  textVisible,
  idVisible,
  idNotVisible,
  multipleIDVisible,
  multipleTextVisible,
  textNotVisible,
  wait,
  textVisibleAtIndex,
  idVisibleAtIndex,
} = navigation.common;

export const {
  scrollFromID,
  scrollFromText,
  scrollUntilIdVisible,
  swipeFromText,
  scrollUntilTextVisible,
} = navigation.scrolling;

export const {
  onAvatarBuilder,
  onCreateAvatarScreen,
  onAvatarCompletionScreen,
  onYuscreen,
  onSkinToneScreen,
  onChooseAvatarBodyScreen,
  yuScreenV5HeaderVisible,
} = screens.yuscreen;

export const { checkCopyNoLeaderboard } = screens.leaderboard;

export {
  messageSelectionScreenVisible,
  giftingAmountScreenVisible,
  onGiftingPreviewScreen,
  onGiftingSuccessScreen,
} from "../../p2p_gifting/_steps/then";

export const birthdayToggleVisible = (consented: boolean) => async () => {
  await textVisible(consts.birthdaysToggleTitle)();
  await textVisible(consts.birthdaysToggleDescription)();
  await idVisible(ids.BIRTHDAY_TOGGLE(consented))();
};

export const birthdayNotificationVisible = (user: typeof CUSTOMER_18) => async () => {
  const firstName = user.data.firstName;
  const lastNameInitial = user.data.lastName.charAt(0);
  await idVisible(
    ids.NOTIFICATION_PINK_DOT_ARROW(`It’s ${firstName} ${lastNameInitial}’s birthday!`, true, true)
  )();
};

export const birthdayModalVisible = (isTurningOn: boolean) => async () => {
  const mode = isTurningOn ? "On" : "Off";

  await idVisible(ids.GENERIC_SCREEN_HEADING(consts[`turn${mode}BirthdaysHeading`]))();
  await textVisible(consts[`turn${mode}BirthdaysDescription`])();
  await idVisible(ids.GENERIC_SCREEN_CTA(consts[`turn${mode}BirthdaysConfirm`]))();
  await idVisible(ids.GENERIC_SCREEN_CTA(consts[`turn${mode}BirthdaysDecline`]))();
};

export const onSetBirthdayModal = async () => {
  await textVisible(consts.tellUsBirthdayHeader)();
  await textVisible(consts.tellUsBirthdayDescription)();
  await idVisible(ids.BUTTON_BASE("BIRTHDAY-NOT-SET-CTA"))();
};
